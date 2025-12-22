import React from 'react';
import PageHeader from '../components/PageHeader.tsx';
import { useTranslation } from '../LanguageContext.tsx';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Zap, Droplets, Users, ShieldCheck } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { lang, t } = useTranslation();

  return (
    <div className="bg-white page-entrance">
      <PageHeader 
        title={lang === 'en' ? "About SkyBlue" : "À Propos de SkyBlue"} 
        subtitle={lang === 'en' ? "Pioneering the future of hygiene and waste management in West Africa." : "Pionnier de l'avenir de l'hygiène et de la gestion des déchets en Afrique de l'Ouest."}
        imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200"
      />

      {/* Core Mission Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="space-y-8"
            >
              <h2 className="text-sky-600 font-black tracking-widest uppercase text-xs">Our Purpose</h2>
              <h3 className="text-5xl font-black text-slate-900 leading-tight">
                Beyond <span className="text-sky-500">Cleaning</span>: A Circular Future.
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                SkyBlue Cleaning was founded with a singular vision: to bring world-class professional standards to the West African hygiene sector. Today, we go beyond simple sanitation to tackle the region's greatest environmental challenges.
              </p>
              <p className="text-lg text-slate-500 italic">
                "We don't just remove waste; we reclaim its value for a sustainable tomorrow."
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl diamond-polish border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800" 
                  alt="Sustainability" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-sky-100 max-w-[240px]"
              >
                <div className="text-sky-500 font-black text-4xl mb-1">10+</div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Cities Served Across West Africa</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Waste to Gas Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sky-400 font-bold tracking-[0.2em] uppercase text-xs mb-4">Innovation Spotlight</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter">Transforming <span className="text-sky-400">Sewage</span> into <span className="text-sky-400">Domestic Gas</span></h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: Droplets, 
                title: lang === 'en' ? 'Collection' : 'Collecte', 
                desc: lang === 'en' ? 'Advanced vacuum extraction and storage from industrial and residential hubs.' : 'Extraction et stockage par aspiration avancée depuis les centres industriels.' 
              },
              { 
                icon: Recycle, 
                title: lang === 'en' ? 'Bio-Transformation' : 'Bio-Transformation', 
                desc: lang === 'en' ? 'Our anaerobic digestion systems break down organic matter into methane gas.' : 'Nos systèmes de digestion anaérobie décomposent la matière organique en gaz méthane.' 
              },
              { 
                icon: Zap, 
                title: lang === 'en' ? 'Clean Energy' : 'Énergie Propre', 
                desc: lang === 'en' ? 'Purified biogas is bottled and supplied as domestic gas for cooking and heating.' : 'Le biogaz purifié est mis en bouteille et fourni comme gaz domestique.' 
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all"
              >
                <div className="w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-sky-500/20">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sky-600 font-bold tracking-widest uppercase text-xs mb-4">Our DNA</h2>
            <h3 className="text-4xl font-black text-slate-900 tracking-tight">The SkyBlue Standard</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Uncompromising Safety", desc: "Rigorous protocols for hazardous waste handling." },
              { icon: Users, title: "Elite Workforce", desc: "Every technician is background checked and certified." },
              { icon: Leaf, title: "Eco-Conscious", desc: "Zero-toxin chemicals for all residential services." },
              { icon: Zap, title: "Tech-Driven", desc: "From drone cleaning to digital audit reporting." }
            ].map((val, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-sky-500 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-all">
                  <val.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{val.title}</h4>
                <p className="text-sm text-slate-500">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
