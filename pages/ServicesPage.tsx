import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { SERVICES } from '../constants';
import { ArrowRight, CheckCircle, ExternalLink, X, Shield, ListChecks, Zap, Info } from 'lucide-react';
import { useTranslation } from '../LanguageContext';
import { Service } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const CategorySection: React.FC<{ 
  id: string;
  title: string; 
  subtitle: string; 
  services: Service[];
  accentColor: string;
  onOpenSpecs: (service: Service) => void;
}> = ({ id, title, subtitle, services, accentColor, onOpenSpecs }) => {
  const { lang, t } = useTranslation();

  return (
    <section id={id} className="pt-32 scroll-mt-32">
      <div className="mb-16">
        <div className={`w-20 h-1.5 ${accentColor} mb-6 rounded-full`} />
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-4">{title}</h2>
        <p className="text-xl text-slate-500 font-medium max-w-2xl">{subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => {
          const IconComponent = (LucideIcons as any)[service.icon];
          // Unique stable high-res IDs from Unsplash for different categories
          const catImages: Record<string, string> = {
            'Specialized': 'https://github.com/Franck119/franck-skyblue/blob/main/100.png?raw=true',
            'Commercial': 'https://github.com/Franck119/franck-skyblue/blob/main/102.png?raw=true',
            'Industrial': 'https://github.com/Franck119/franck-skyblue/blob/main/104.png?raw=true',
            'Residential': 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1'
          };
          const imageUrl = `${catImages[service.category] || 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a'}?auto=format&fit=crop&q=80&w=800&sig=${service.id}`;

          return (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 hover:border-sky-500/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={imageUrl} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  alt={t(service.title)}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-sky-600">
                    {t(service.category)}
                  </div>
                  <div className={`w-12 h-12 ${accentColor} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform`}>
                    {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                  </div>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-sky-600 transition-colors">
                  {t(service.title)}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {t(service.description)}
                </p>

                <div className="space-y-4 mb-8">
                   {service.includedTasks[lang].slice(0, 2).map((task, i) => (
                     <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-400">
                       <CheckCircle className="w-4 h-4 text-sky-500" />
                       {task}
                     </div>
                   ))}
                </div>

                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <button 
                    onClick={() => onOpenSpecs(service)}
                    className="text-xs font-black text-sky-600 uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all hover:text-sky-800"
                  >
                    Full Specs <ArrowRight className="w-4 h-4" />
                  </button>
                  <ExternalLink className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

const ServicesPage: React.FC = () => {
  const { lang, t } = useTranslation();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const commercialServices = SERVICES.filter(s => s.category === 'Commercial');
  const industrialServices = SERVICES.filter(s => s.category === 'Industrial' && !s.id.startsWith('sew'));
  const specializedServices = SERVICES.filter(s => s.category === 'Specialized');
  const sewageServices = SERVICES.filter(s => s.id.startsWith('sew'));

  const divisions = [
    { name: lang === 'en' ? 'Commercial' : 'Commerciale', id: 'commercial', color: 'bg-sky-500' },
    { name: lang === 'en' ? 'Industrial' : 'Industrielle', id: 'industrial', color: 'bg-indigo-500' },
    { name: lang === 'en' ? 'Specialized' : 'Spécialisée', id: 'specialized', color: 'bg-emerald-500' },
    { name: lang === 'en' ? 'Sewage' : 'Assainissement', id: 'sewage', color: 'bg-amber-500' },
  ];

  const closeModal = () => setSelectedService(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader 
        title={lang === 'en' ? "Service Divisions" : "Divisions de Service"} 
        subtitle={lang === 'en' ? "17 specialized solutions powering West Africa's leading industries." : "17 solutions spécialisées au service des plus grandes industries d'Afrique de l'Ouest."}
        imageUrl="https://github.com/Franck119/franck-skyblue/blob/main/102.png?raw=true?auto=format&fit=crop&q=80&w=1920"
      />

      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto no-scrollbar py-4 gap-4 md:justify-center">
            {divisions.map((div) => (
              <a 
                key={div.id}
                href={`#${div.id}`}
                className="whitespace-nowrap flex items-center gap-3 px-6 py-2 rounded-full border border-slate-200 font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-sm"
              >
                <div className={`w-2 h-2 rounded-full ${div.color}`} />
                {div.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-32">
        <CategorySection 
          id="commercial"
          title={lang === 'en' ? "Commercial Division" : "Division Commerciale"} 
          subtitle={lang === 'en' ? "Elite office and retail sanitation protocols for public and private institutions." : "Protocoles d'élite pour les institutions publiques et privées."}
          services={commercialServices}
          accentColor="bg-sky-500"
          onOpenSpecs={setSelectedService}
        />
        
        <CategorySection 
          id="industrial"
          title={lang === 'en' ? "Industrial Division" : "Division Industrielle"} 
          subtitle={lang === 'en' ? "Heavy-duty restoration for manufacturing, logistics, and aviation hubs." : "Restauration intensive pour les usines, la logistique et l'aviation."}
          services={industrialServices}
          accentColor="bg-indigo-500"
          onOpenSpecs={setSelectedService}
        />

        <CategorySection 
          id="specialized"
          title={lang === 'en' ? "Specialized Division" : "Division Spécialisée"} 
          subtitle={lang === 'en' ? "Revolutionary tech-driven services: Drones, Clinics, and Cleanrooms." : "Services technologiques : Drones, Cliniques et Salles Blanches."}
          services={specializedServices}
          accentColor="bg-emerald-500"
          onOpenSpecs={setSelectedService}
        />

        <CategorySection 
          id="sewage"
          title={lang === 'en' ? "Sewage Management" : "Gestion des Eaux Usées"} 
          subtitle={lang === 'en' ? "Our Circular Economy core: Transforming raw waste into renewable domestic energy." : "Économie Circulaire : Transformer les déchets en énergie renouvelable."}
          services={sewageServices}
          accentColor="bg-amber-500"
          onOpenSpecs={setSelectedService}
        />
      </div>

      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[150] flex items-center justify-center p-4"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              className="fixed inset-4 md:inset-x-20 md:inset-y-12 bg-white z-[151] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <button onClick={closeModal} className="absolute top-6 right-6 p-3 bg-slate-100 hover:bg-sky-500 hover:text-white rounded-full transition-all z-[152]">
                <X className="w-6 h-6" />
              </button>
              <div className="w-full md:w-1/3 bg-slate-50 relative flex flex-col">
                <div className="relative h-2/3 overflow-hidden">
                  <img src={`https://github.com/Franck119/franck-skyblue/blob/main/100.png?raw=true?auto=format&fit=crop&q=80&w=800&sig=${selectedService.id}`} className="w-full h-full object-cover grayscale-[0.2]" alt={t(selectedService.title)} />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/90 to-transparent flex flex-col justify-end p-12 text-white">
                    <div className="bg-sky-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                      {React.createElement((LucideIcons as any)[selectedService.icon] || Zap, { className: "w-8 h-8 text-white" })}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-2 leading-none">{t(selectedService.title)}</h2>
                  </div>
                </div>
                <div className="flex-grow p-12 bg-slate-900 text-white flex flex-col justify-center space-y-4">
                   <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                       <Shield className="w-4 h-4 text-sky-400" />
                     </div>
                     <div>
                       <h5 className="text-xs font-black uppercase tracking-widest text-sky-400 mb-1">Standard Guarantee</h5>
                       <p className="text-sm text-slate-300">Certified ISO-compliant sanitation protocols.</p>
                     </div>
                   </div>
                </div>
              </div>
              <div className="flex-grow p-8 md:p-20 overflow-y-auto no-scrollbar bg-white">
                <div className="max-w-3xl space-y-16">
                  <div className="space-y-6">
                    <h3 className="text-sky-600 font-black tracking-widest uppercase text-xs">Deep Overview</h3>
                    <p className="text-2xl text-slate-800 leading-relaxed font-semibold tracking-tight">
                      {t(selectedService.detailedDescription)}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-slate-50">
                    <div className="space-y-6">
                      <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest">Deliverables</h4>
                      <ul className="space-y-4">
                        {selectedService.includedTasks[lang].map((task, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-500 font-bold text-sm">
                            <CheckCircle className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesPage;
