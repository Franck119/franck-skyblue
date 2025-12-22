import React from 'react';
import * as LucideIcons from 'lucide-react';
import { VALUES } from '../constants.tsx';
import { useScrollReveal } from '../hooks/useScrollReveal.ts';
import { useTranslation } from '../LanguageContext.tsx';
import { motion } from 'framer-motion';

const Values: React.FC = () => {
  const containerRef = useScrollReveal();
  const { lang, t } = useTranslation();

  return (
    <section ref={containerRef} className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 reveal">
        <h2 className="text-sky-600 font-black tracking-widest uppercase text-xs mb-4">
          {lang === 'en' ? 'Our Core DNA' : 'Notre ADN'}
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          What Sets Us Apart
        </h3>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((value, index) => {
            const IconComponent = (LucideIcons as any)[value.icon];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`reveal bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 text-center border border-white group`}
              >
                <div className="w-20 h-20 bg-sky-50 text-sky-600 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white">
                  {IconComponent && <IconComponent className="w-10 h-10" />}
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{t(value.title)}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{t(value.description)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;