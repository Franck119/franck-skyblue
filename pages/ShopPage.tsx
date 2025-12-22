import React, { useState, useMemo } from 'react';
import PageHeader from '../components/PageHeader.tsx';
import { useTranslation } from '../LanguageContext.tsx';
import { ShoppingCart, Star, ShieldCheck, Tag, ChevronRight, X, Plus, Minus, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  price: number;
  priceDisplay: string;
  category: string;
  img: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Eco-Blue Multi-Surface', price: 12500, priceDisplay: '12,500 XOF', category: 'Residential', img: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Industrial Degreaser X', price: 45000, priceDisplay: '45,000 XOF', category: 'Industrial', img: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Hospital-Grade Sterilant', price: 38000, priceDisplay: '38,000 XOF', category: 'Specialized', img: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'SkyBlue Glass Polish', price: 8500, priceDisplay: '8,500 XOF', category: 'Commercial', img: 'https://images.unsplash.com/photo-1610492421943-88ec0f1e403d?auto=format&fit=crop&q=80&w=400' },
  { id: 5, name: 'Eco-Enzyme Drain Care', price: 15000, priceDisplay: '15,000 XOF', category: 'Sewage', img: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=400' },
  { id: 6, name: 'Elite Microfiber Set', price: 5500, priceDisplay: '5,500 XOF', category: 'Residential', img: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&q=80&w=400' },
];

const ShopPage: React.FC = () => {
  const { lang } = useTranslation();
  const [cart, setCart] = useState<{ product: Product; qty: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [checkoutStep, setCheckoutStep] = useState<'idle' | 'success'>('idle');

  const filteredProducts = useMemo(() => {
    return activeCategory === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQty = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === id) {
        const newQty = Math.max(0, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }).filter(item => item.qty > 0));
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.product.price * item.qty), 0);

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader 
        title={lang === 'en' ? "SkyBlue Shop" : "Boutique SkyBlue"} 
        subtitle={lang === 'en' ? "Professional grade cleaning products for your daily needs." : "Produits de nettoyage de qualité professionnelle pour vos besoins quotidiens."}
        imageUrl="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filters */}
          <div className="w-full md:w-64 space-y-8">
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Categories</h3>
            <div className="space-y-4">
              {['All', 'Residential', 'Industrial', 'Specialized', 'Commercial', 'Sewage'].map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center justify-between w-full text-left font-bold p-3 rounded-xl transition-all ${
                    activeCategory === cat ? 'bg-sky-500 text-white shadow-lg' : 'text-slate-500 hover:text-sky-600 hover:bg-white'
                  }`}
                >
                  {cat} <ChevronRight className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-grow grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map(product => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img src={product.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={product.name} />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-sky-600 border border-sky-100 shadow-lg">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-2">{product.name}</h4>
                  <p className="text-sky-600 font-black text-lg mb-6">{product.priceDisplay}</p>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:bg-sky-500 transition-all shadow-xl"
                  >
                    <ShoppingCart className="w-4 h-4" /> ADD TO CART
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-sky-600 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: "Verified Formula", desc: "Eco-friendly & powerful" },
            { icon: Tag, title: "Member Price", desc: "Up to 20% off for clients" },
            { icon: ShoppingCart, title: "Fast West Africa Delivery", desc: "On orders over 50,000 XOF" }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"><badge.icon /></div>
              <div>
                <h5 className="font-black text-sm">{badge.title}</h5>
                <p className="text-sky-100 text-xs">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sliding Cart Panel */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]" 
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col"
            >
              <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                  <ShoppingCart className="w-6 h-6 text-sky-500" /> YOUR CART
                </h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-all">
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-8 space-y-6 no-scrollbar">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                      <ShoppingCart className="w-10 h-10" />
                    </div>
                    <p className="text-slate-500 font-bold">Your cart is empty.</p>
                    <button onClick={() => setIsCartOpen(false)} className="text-sky-500 font-black uppercase tracking-widest text-xs">Start Shopping</button>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.product.id} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group">
                      <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm">
                        <img src={item.product.img} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-black text-slate-900 text-sm mb-1">{item.product.name}</h4>
                        <p className="text-sky-600 font-bold text-xs mb-3">{item.product.priceDisplay}</p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center bg-white border border-slate-200 rounded-lg p-1">
                            <button onClick={() => updateQty(item.product.id, -1)} className="p-1 hover:text-sky-500"><Minus className="w-3 h-3" /></button>
                            <span className="w-8 text-center text-xs font-black">{item.qty}</span>
                            <button onClick={() => updateQty(item.product.id, 1)} className="p-1 hover:text-sky-500"><Plus className="w-3 h-3" /></button>
                          </div>
                          <button onClick={() => updateQty(item.product.id, -item.qty)} className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-red-500">Remove</button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-8 bg-slate-50 border-t border-slate-100 space-y-6">
                  <div className="flex justify-between items-end">
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">Subtotal</span>
                    <span className="text-3xl font-black text-slate-900">{cartTotal.toLocaleString()} XOF</span>
                  </div>
                  <button 
                    onClick={() => setCheckoutStep('success')}
                    className="w-full bg-sky-500 text-white py-5 rounded-2xl font-black text-lg hover:bg-sky-600 transition-all shadow-xl shadow-sky-500/20"
                  >
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {checkoutStep === 'success' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-900/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[3rem] p-12 max-w-sm w-full text-center space-y-8"
            >
              <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/30">
                <Check className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Order Confirmed!</h3>
                <p className="text-slate-500">Our logistics team will contact you for Abidjan delivery.</p>
              </div>
              <button 
                onClick={() => {setCart([]); setCheckoutStep('idle'); setIsCartOpen(false);}}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black hover:bg-sky-500 transition-all"
              >
                BACK TO SHOP
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Cart Button (when closed) */}
      {!isCartOpen && cart.length > 0 && (
        <motion.button 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-10 right-10 w-20 h-20 bg-sky-500 text-white rounded-full shadow-2xl z-50 flex items-center justify-center group"
        >
          <ShoppingCart className="w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-2 -right-2 bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border-4 border-white">
            {cart.reduce((a, b) => a + b.qty, 0)}
          </span>
        </motion.button>
      )}
    </div>
  );
};

export default ShopPage;
