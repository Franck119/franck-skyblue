import React from 'react';
import PageHeader from '../components/PageHeader.tsx';
import { PORTFOLIO } from '../constants.tsx';
import { MapPin, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { useTranslation } from '../LanguageContext.tsx';
import { motion } from 'framer-motion';

const PortfolioPage: React.FC = () => {
  const { lang, t } = useTranslation();
  
  return (
    <div className="bg-white page-entrance">
      <PageHeader 
        title={lang === 'en' ? "Case Studies" : "Études de Cas"} 
        subtitle={lang === 'en' ? "A deeper look at the precision and impact of SkyBlue Cleaning across major West African hubs." : "Un regard approfondi sur la précision et l'impact de SkyBlue Cleaning."}
        imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-20">
            {PORTFOLIO.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex flex-col lg:flex-row gap-12 lg:items-center group"
              >
                <div className="w-full lg:w-1/2 aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group-even:lg:order-2">
                  <img src={item.imageUrl} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" alt={t(item.title)} />
                </div>
                
                <div className="w-full lg:w-1/2 space-y-8 group-even:lg:order-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       <span className="bg-sky-500 text-white px-5 py-1.5 rounded-2xl text-[10px] font-black uppercase tracking-widest">{item.category}</span>
                       <div className="flex items-center gap-2 text-slate-400">
                         <MapPin className="w-4 h-4" />
                         <span className="text-xs font-bold uppercase">{item.location}</span>
                       </div>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none">{t(item.title)}</h3>
                  </div>

                  <p className="text-lg text-slate-500 leading-relaxed font-medium">{t(item.description)}</p>

                  <div className="grid gap-6">
                    <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-3">
                      <div className="flex items-center gap-3 text-slate-400">
                        <Target className="w-5 h-5" />
                        <h4 className="text-xs font-black uppercase tracking-widest">The Challenge</h4>
                      </div>
                      <p className="text-slate-700 font-bold leading-relaxed">{item.challenge ? t(item.challenge) : 'General high-standard restoration.'}</p>
                    </div>

                    <div className="p-8 bg-sky-50 rounded-[2.5rem] border border-sky-100 space-y-3">
                      <div className="flex items-center gap-3 text-sky-500">
                        <Lightbulb className="w-5 h-5" />
                        <h4 className="text-xs font-black uppercase tracking-widest">SkyBlue Solution</h4>
                      </div>
                      <p className="text-slate-700 font-bold leading-relaxed">{item.solution ? t(item.solution) : 'Proprietary chemical and staffing protocols.'}</p>
                    </div>

                    <div className="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 space-y-3">
                      <div className="flex items-center gap-3 text-emerald-500">
                        <TrendingUp className="w-5 h-5" />
                        <h4 className="text-xs font-black uppercase tracking-widest">Measured Impact</h4>
                      </div>
                      <p className="text-emerald-900 font-black text-xl leading-none">{item.impact ? t(item.impact) : t(item.results)}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;