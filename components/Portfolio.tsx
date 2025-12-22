import React from 'react';
import { PORTFOLIO } from '../constants.tsx';
import { MapPin, ArrowUpRight, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal.ts';
import { useTranslation } from '../LanguageContext.tsx';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  const containerRef = useScrollReveal();
  const { lang, t } = useTranslation();

  return (
    <section id="portfolio" ref={containerRef} className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 reveal">
          <h2 className="text-sky-600 font-black tracking-widest uppercase text-xs mb-4">Case Studies</h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 max-w-2xl tracking-tighter">
              West Africa's Cleanest Spaces
            </h3>
            <p className="text-slate-600 max-w-md text-lg leading-relaxed font-medium">
              Real-world hygiene transformations across Abidjan and the sub-region.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {PORTFOLIO.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="reveal bg-white rounded-[3.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-white flex flex-col"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={t(item.title)}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-white/95 backdrop-blur-md text-sky-900 px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg border border-sky-100">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-12 space-y-8 flex-grow">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sky-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-black tracking-widest uppercase">{item.location}</span>
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 tracking-tight">{t(item.title)}</h4>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                   <div className="space-y-2">
                     <div className="flex items-center gap-2 text-slate-400">
                       <Target className="w-4 h-4" />
                       <span className="text-[10px] font-black uppercase tracking-widest">Challenge</span>
                     </div>
                     <p className="text-xs font-bold text-slate-600 leading-relaxed">{item.challenge ? t(item.challenge) : t(item.description)}</p>
                   </div>
                   <div className="space-y-2">
                     <div className="flex items-center gap-2 text-sky-500">
                       <Lightbulb className="w-4 h-4" />
                       <span className="text-[10px] font-black uppercase tracking-widest">Solution</span>
                     </div>
                     <p className="text-xs font-bold text-slate-600 leading-relaxed">{item.solution ? t(item.solution) : 'Custom Standard Protocol'}</p>
                   </div>
                   <div className="space-y-2">
                     <div className="flex items-center gap-2 text-emerald-500">
                       <TrendingUp className="w-4 h-4" />
                       <span className="text-[10px] font-black uppercase tracking-widest">Impact</span>
                     </div>
                     <p className="text-xs font-bold text-emerald-700 leading-relaxed">{item.impact ? t(item.impact) : t(item.results)}</p>
                   </div>
                </div>

                <div className="pt-8 border-t border-slate-50 flex justify-between items-center">
                   <div className="bg-sky-50 px-5 py-2 rounded-xl text-sky-600 font-black text-xs uppercase tracking-tighter">
                     {t(item.results)}
                   </div>
                   <div className="w-12 h-12 rounded-full border border-sky-100 flex items-center justify-center text-sky-500 hover:bg-sky-500 hover:text-white transition-all cursor-pointer">
                     <ArrowUpRight className="w-6 h-6" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;