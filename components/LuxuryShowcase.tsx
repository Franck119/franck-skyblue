import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const showcaseItems = [
  {
    url: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=2000",
    title: "Presidential Suites",
    subtitle: "Surgical-grade maintenance for high-value interiors."
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
    title: "Corporate Landmarks",
    subtitle: "Reflecting excellence in every architectural detail."
  },
  {
    url: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1200",
    title: "Elite Residences",
    subtitle: "Curating immaculate living environments for the 1%."
  }
];

const LuxuryShowcase: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % showcaseItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-sky-600 font-black tracking-[0.5em] uppercase text-[10px]">Curation</h2>
            <h3 className="text-5xl md:text-7xl font-black text-sky-950 tracking-tighter serif leading-none">
              Premium <br /> <span className="text-sky-900 italic">Portfolios.</span>
            </h3>
          </div>
          <div className="flex items-center gap-6">
            <div className="h-[1px] w-24 bg-sky-100" />
            <span className="text-[10px] font-black text-sky-900/30 uppercase tracking-widest">Global Standards</span>
          </div>
        </div>

        <div className="relative aspect-[21/9] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img 
                src={showcaseItems[index].url} 
                className="w-full h-full object-cover" 
                alt={showcaseItems[index].title} 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-sky-950/60 via-transparent to-transparent" />
              
              {/* The "Shining" Effect Layer */}
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  repeatDelay: 3,
                  ease: "linear" 
                }}
                className="absolute inset-0 z-10 pointer-events-none skew-x-12"
                style={{
                  background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)'
                }}
              />

              <div className="absolute inset-0 flex items-center px-12 md:px-24">
                <div className="max-w-xl space-y-6">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <Sparkles className="text-sky-400 w-5 h-5 animate-pulse" />
                    <span className="text-sky-200 text-[10px] font-black uppercase tracking-[0.4em]">Diamond Polish Standard</span>
                  </motion.div>
                  <motion.h4 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-4xl md:text-6xl font-black text-white serif italic"
                  >
                    {showcaseItems[index].title}
                  </motion.h4>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="text-white/70 text-lg md:text-xl font-medium"
                  >
                    {showcaseItems[index].subtitle}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dot Indicators */}
          <div className="absolute bottom-12 right-12 flex gap-4 z-20">
            {showcaseItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 transition-all duration-500 rounded-full shadow-lg ${
                  index === i ? 'w-16 bg-white' : 'w-6 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryShowcase;
