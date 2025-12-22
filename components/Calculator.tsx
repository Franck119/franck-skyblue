import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calculator as CalcIcon, MoveRight, Info, Sparkles } from 'lucide-react';

const BubbleBackground: React.FC = () => {
  const [bubbles, setBubbles] = useState<any[]>([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 40 + 10,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 5 + 7,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      {bubbles.map((b) => (
        <div 
          key={b.id}
          className="bubble"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

const Calculator: React.FC = () => {
  const [area, setArea] = useState<number>(50);
  const [service, setService] = useState<'Standard' | 'Premium' | 'Industrial'>('Standard');
  const [total, setTotal] = useState<number>(0);

  const rates = {
    Standard: 250, // CFA per m2
    Premium: 450,
    Industrial: 700
  };

  useEffect(() => {
    setTotal(area * rates[service]);
  }, [area, service]);

  return (
    <section id="calculator" className="py-24 bg-slate-50 relative overflow-hidden">
      <BubbleBackground />
      
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-100 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-100 rounded-full blur-[100px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <CalcIcon className="w-4 h-4" />
            Instant Estimation
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">How Much Will It Cost?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Use our interactive tool to get an immediate estimate for your space in CFA. Accurate, transparent, and fast.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="glass p-10 rounded-[2.5rem] shadow-2xl border border-white">
              <div className="space-y-10">
                {/* Area Input */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-lg font-bold text-slate-800">Total Surface Area</label>
                    <span className="text-sky-600 font-bold text-2xl bg-sky-50 px-4 py-1 rounded-xl shadow-sm">
                      {area} m<sup>2</sup>
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="1000" 
                    step="5"
                    value={area}
                    onChange={(e) => setArea(parseInt(e.target.value))}
                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
                  />
                  <div className="flex justify-between text-xs font-bold text-slate-400 uppercase">
                    <span>10 m<sup>2</sup></span>
                    <span>500 m<sup>2</sup></span>
                    <span>1000 m<sup>2</sup></span>
                  </div>
                </div>

                {/* Service Type */}
                <div className="space-y-4">
                  <label className="text-lg font-bold text-slate-800">Cleaning Intensity</label>
                  <div className="grid grid-cols-3 gap-4">
                    {(['Standard', 'Premium', 'Industrial'] as const).map((type) => (
                      <button
                        key={type}
                        onClick={() => setService(type)}
                        className={`p-6 rounded-2xl border-2 transition-all text-center relative overflow-hidden group ${
                          service === type 
                          ? 'border-sky-500 bg-sky-50 text-sky-700 shadow-lg shadow-sky-500/10' 
                          : 'border-slate-100 bg-white hover:border-slate-200 text-slate-500'
                        }`}
                      >
                        {service === type && <div className="shine-overlay"></div>}
                        <div className="font-bold mb-1 relative z-10">{type}</div>
                        <div className="text-xs opacity-70 relative z-10">{rates[type]} CFA / m<sup>2</sup></div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-sky-50 rounded-2xl border border-sky-100">
              <Info className="w-6 h-6 text-sky-500 flex-shrink-0" />
              <p className="text-sm text-sky-800 leading-relaxed">
                <strong>Note:</strong> This is an estimate based on average conditions. Actual pricing may vary depending on floor type, furniture density, and specialized sanitation requirements.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-sky-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden group">
              <Sparkles className="absolute top-8 right-8 text-sky-400/30 w-12 h-12 animate-pulse" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-8">Estimated Quote</h3>
              
              <div className="space-y-6 mb-12">
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-sky-300">Service Level</span>
                  <span className="font-bold">{service}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-sky-300">Surface Area</span>
                  <span className="font-bold">{area} m<sup>2</sup></span>
                </div>
                <div className="pt-4">
                  <div className="text-sm text-sky-300 uppercase font-bold tracking-widest mb-1">Total Amount</div>
                  <div className="text-5xl font-bold text-white tracking-tight">
                    {total.toLocaleString()} <span className="text-2xl text-sky-400">XOF</span>
                  </div>
                </div>
              </div>

              <Link 
                to="/contact" 
                className="btn-shine w-full bg-white text-sky-900 hover:bg-sky-50 font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.03]"
              >
                Book This Service
                <MoveRight className="w-5 h-5" />
              </Link>

              <div className="mt-8 text-center">
                <p className="text-sky-300 text-sm">Need a multi-site quote?</p>
                <Link to="/contact" className="text-white font-bold hover:underline">Contact Enterprise Sales</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;