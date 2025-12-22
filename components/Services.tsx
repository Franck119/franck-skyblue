import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../constants.tsx';
import { useScrollReveal } from '../hooks/useScrollReveal.ts';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../LanguageContext.tsx';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Residential' | 'Commercial' | 'Industrial' | 'Specialized'>('All');
  const containerRef = useScrollReveal();
  const { lang, t } = useTranslation();

  const getLocalizedCategories = () => {
    if (lang === 'fr') return ['Toutes', 'Résidentiel', 'Commercial', 'Industriel', 'Spécialisé'];
    if (lang === 'ru') return ['Все', 'Жилой', 'Коммерческий', 'Промзона', 'Спецуслуги'];
    return ['All', 'Residential', 'Commercial', 'Industrial', 'Specialized'];
  };

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Specialized'];
  const localizedCategories = getLocalizedCategories();
  
  const filteredServices = activeCategory === 'All' 
    ? SERVICES.slice(0, 7) // Increased to include the new car wash
    : SERVICES.filter(s => s.category === activeCategory);

  const getSectionTitle = () => {
    if (lang === 'fr') return <>La Science de <br /> <span className="text-sky-500">l'Hygiène.</span></>;
    if (lang === 'ru') return <>Наука <br /> <span className="text-sky-500">Гигиены.</span></>;
    return <>The Science of <br /> <span className="text-sky-500">Hygiene.</span></>;
  };

  return (
    <section id="services" ref={containerRef} className="py-40 bg-[#020617] overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 reveal">
          <h2 className="text-sky-500 font-black tracking-[0.5em] uppercase text-[10px] mb-6">
            {lang === 'en' ? 'Service Divisions' : lang === 'fr' ? 'Divisions de Service' : 'Подразделения Услуг'}
          </h2>
          <h3 className="text-6xl md:text-8xl font-black text-white mb-16 tracking-tighter serif leading-none">
            {getSectionTitle()}
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-8 py-4 rounded-full font-black text-[10px] tracking-widest uppercase transition-all duration-500 border border-white/10 ${
                  activeCategory === cat 
                  ? 'bg-sky-500 text-white border-sky-500 shadow-2xl' 
                  : 'bg-white/5 text-white/40 hover:text-white hover:bg-white/10'
                }`}
              >
                {localizedCategories[i]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Zap;
              return (
                <motion.div 
                  layout
                  key={service.id} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-12 rounded-[3.5rem] border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-700 flex flex-col h-full relative"
                >
                  <div className="w-20 h-20 bg-sky-500 text-white rounded-[2rem] flex items-center justify-center mb-10 transition-all duration-700 group-hover:rotate-6 shadow-2xl shadow-sky-500/20">
                    {IconComponent && <IconComponent size={32} />}
                  </div>
                  <h4 className="text-2xl font-black text-white mb-6 tracking-tight serif italic">{t(service.title)}</h4>
                  <p className="text-white/40 mb-12 flex-grow leading-relaxed text-sm">{t(service.description)}</p>
                  
                  <div className="flex justify-between items-center mt-auto pt-8 border-t border-white/5">
                    <div className="text-[10px] font-black text-sky-500 uppercase tracking-[0.3em]">
                      {service.category}
                    </div>
                    <Link to="/services" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-white hover:text-black transition-all">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        
        <div className="mt-24 text-center reveal">
          <Link to="/services" className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-black text-xs tracking-widest uppercase hover:bg-sky-400 transition-all shadow-2xl">
            {lang === 'en' ? 'Explore Solutions' : lang === 'fr' ? 'Découvrir les Solutions' : 'Изучить Решения'}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;