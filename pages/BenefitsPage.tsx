import React from 'react';
import * as LucideIcons from 'lucide-react';
import PageHeader from '../components/PageHeader.tsx';
import { BENEFITS } from '../constants.tsx';
import { useScrollReveal } from '../hooks/useScrollReveal.ts';
import { useTranslation } from '../LanguageContext.tsx';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const BenefitsPage: React.FC = () => {
  const containerRef = useScrollReveal();
  const { lang, t } = useTranslation();

  return (
    <div className="bg-white page-entrance" ref={containerRef}>
      <PageHeader 
        title={lang === 'en' ? "Our Benefits" : "Nos Avantages"} 
        subtitle={lang === 'en' ? "Why SkyBlue Cleaning is the preferred choice for premier hygiene in West Africa. Experience the difference of professional standards." : "Pourquoi SkyBlue Cleaning est le choix préféré pour l'hygiène de premier plan en Afrique de l'Ouest. Découvrez la différence."}
        imageUrl="https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=1200"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {BENEFITS.map((benefit, index) => {
              const IconComponent = (LucideIcons as any)[benefit.icon];
              return (
                <div 
                  key={benefit.id} 
                  className={`reveal delay-${(index % 2 + 1) * 100} group bg-white p-10 lg:p-12 rounded-[3.5rem] border border-slate-100 hover:border-sky-200 transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col items-start h-full`}
                >
                  <div className="w-20 h-20 bg-sky-50 text-sky-600 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110 shadow-inner">
                    {IconComponent && <IconComponent className="w-10 h-10" />}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 tracking-tight group-hover:text-sky-600 transition-colors">
                    {t(benefit.title)}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8 flex-grow">
                    {t(benefit.description)}
                  </p>
                  <div className="flex items-center gap-2 text-sky-500 font-bold uppercase tracking-widest text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <CheckCircle2 className="w-4 h-4" />
                    Verified Standard
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">{lang === 'en' ? 'The SkyBlue Cleaning Difference' : 'La Différence SkyBlue Cleaning'}</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {lang === 'en' ? 'Compared to independent cleaners or standard services, we provide a level of oversight and quality that is unmatched.' : 'Comparé aux nettoyeurs indépendants, nous offrons un niveau de surveillance et de qualité inégalé.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center reveal">
            <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-white space-y-8">
              <h4 className="text-2xl font-bold text-sky-600 border-b border-sky-50 pb-4">
                {lang === 'en' ? 'Why We Win' : 'Pourquoi Nous Gagnons'}
              </h4>
              <ul className="space-y-6">
                {[
                  { en: "Comprehensive Background Checks", fr: "Vérifications d'antécédents complètes" },
                  { en: "Regular Quality Audits", fr: "Audits de qualité réguliers" },
                  { en: "Dedicated Account Managers", fr: "Gestionnaires de compte dédiés" },
                  { en: "Emergency 24/7 Response", fr: "Réponse d'urgence 24/7" },
                  { en: "State-of-the-art Monitoring", fr: "Surveillance de pointe" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    </div>
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative group">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl diamond-polish">
                <img 
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800" 
                  alt="Elite Cleaning Standard" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-sky-600 text-white p-10 rounded-[2.5rem] shadow-2xl hidden lg:block border-4 border-white">
                <p className="text-4xl font-bold mb-1">98%</p>
                <p className="text-sky-100 font-bold uppercase tracking-widest text-xs">{lang === 'en' ? 'Retention Rate' : 'Taux de Rétention'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-sky-600 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {lang === 'en' ? 'Ready to Experience Professional Hygiene?' : 'Prêt à Découvrir l\'Hygiène Professionnelle ?'}
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-sky-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-sky-50 transition-all shadow-2xl transform hover:scale-105"
            >
              {lang === 'en' ? 'Get Your Free Estimate' : 'Obtenez Votre Devis Gratuit'}
            </Link>
            <Link 
              to="/services" 
              className="bg-sky-500 text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-sky-400 transition-all shadow-2xl"
            >
              {lang === 'en' ? 'Explore Our Services' : 'Explorez Nos Services'}
            </Link>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="bubble w-20 h-20 left-10 bottom-10"></div>
          <div className="bubble w-40 h-40 right-20 top-20"></div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsPage;