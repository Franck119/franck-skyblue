import React from 'react';
import { useTranslation } from '../LanguageContext';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const { lang, t } = useTranslation();

 return (
    <section className="py-40 bg-sky-950 overflow-hidden border-t border-white/5 relative">
      {/* Subtle background glow for marine depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h2 className="text-sky-400 font-black tracking-[0.5em] uppercase text-[9px] mb-8">Testimonials</h2>
        <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter serif leading-none">
          Client <span className="italic">Voices.</span>
        </h3>
      </div>

      <div className="relative">
        <div className="flex overflow-x-auto no-scrollbar gap-10 px-6 md:px-[15vw] pb-24 snap-x">
          {TESTIMONIALS.map((test, index) => (
            <motion.div 
              key={test.id} 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[85vw] md:w-[600px] luxury-glass p-16 rounded-[4rem] relative group snap-center border border-white/5"
            >
              <div className="absolute top-12 right-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={80} className="text-sky-500" />
              </div>
              
              <div className="flex gap-1 mb-12">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-sky-500 text-sky-500" />
                ))}
              </div>

              <p className="text-2xl md:text-3xl text-white/80 leading-relaxed font-light serif italic mb-16 min-h-[160px]">
                "{t(test.text)}"
              </p>

              <div className="flex items-center gap-6 pt-10 border-t border-white/5">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center font-black text-xl text-white/30 border border-white/10">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg font-black text-white tracking-tight serif">{test.name}</h4>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-sky-400 mt-1">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="flex-shrink-0 w-32"></div> 
        </div>

        {/* Shadow Overlays for Seamless Scroll Effect */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 flex justify-center">
        <div className="flex items-center gap-8 text-white/20">
           <div className="h-[0.5px] w-32 bg-white/10" />
           <span className="text-[9px] font-black uppercase tracking-[1em]">Slide to Explore</span>
           <div className="h-[0.5px] w-32 bg-white/10" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
