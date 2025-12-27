import React from 'react';
import { useTranslation } from '../LanguageContext';
import { Award, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-40 bg-sky-900/10 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="aspect-[4/5] rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10"
            >
              <img 
                src="https://github.com/Franck119/franck-skyblue/blob/main/109.png?raw=true" 
                alt="SkyBlue Professionalism" 
                className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </motion.div>
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -right-12 -bottom-12 bg-[#0f172a] p-12 rounded-[4rem] shadow-2xl border border-white/10 backdrop-blur-3xl"
            >
              <div className="bg-sky-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-sky-500/30">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <h4 className="text-3xl font-black text-white mb-2 serif italic">Excellence.</h4>
              <p className="text-slate-500 text-[9px] font-black uppercase tracking-[0.3em]">Institutional Heritage.</p>
            </motion.div>
          </div>

          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-sky-600 font-black tracking-[0.5em] uppercase text-[10px]">Our DNA</h2>
              <h3 className="text-7xl md:text-8xl font-black text-sky-950 leading-[0.8] tracking-tighter serif">
                Defining <br /> <span className="text-sky-900 italic">Purity.</span>
              </h3>
              <p className="text-2xl text-sky-900 leading-relaxed font-light">
                SkyBlue represents the apex of environmental maintenance in West Africa. We curate perfection for the region's leading institutions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-12">
              {[
                { icon: Award, title: "Artisan Staff", desc: "Every technician is a certified master of surgical sanitation." },
                { icon: Zap, title: "Stealth Ops", desc: "Discreet operations ensuring zero business disruption." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.2 }}
                  className="space-y-6"
                >
                  <div className="w-16 h-16 bg-sky-900/10 rounded-[1.5rem] border border-sky-900/20 flex items-center justify-center text-sky-900">
                    <item.icon size={28} />
                  </div>
                  <h4 className="text-xl font-black text-sky-950 serif italic">{item.title}</h4>
                  <p className="text-sky-900/70 text-sm leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
