import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Values from '../components/Values';
import Services from '../components/Services';
import Calculator from '../components/Calculator';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import LuxuryShowcase from '../components/LuxuryShowcase';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-entrance luxury-gradient"
    >
      <Hero />
      
      {/* Immersive Transformation Section */}
      <section className="py-32 bg-white overflow-hidden border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
              <h2 className="text-sky-600 font-black tracking-[0.4em] uppercase text-[10px]">Purity Engineering</h2>
              <h3 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter serif">
                <span className="text-sky-950">Immaculate</span> <br /> 
                <span className="text-sky-900 italic">Restoration.</span>
              </h3>
              <p className="text-xl text-slate-500 leading-relaxed font-medium">
                We employ surgical-grade sanitation protocols to reveal the true prestige of your architectural investments.
              </p>
              <div className="flex gap-12">
                <div className="space-y-2">
                  <div className="text-5xl font-black text-sky-950 tracking-tighter">99.9%</div>
                  <div className="text-[10px] font-black text-sky-600 uppercase tracking-widest">Pathogen Neutralization</div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-black text-sky-950 tracking-tighter">0.0</div>
                  <div className="text-[10px] font-black text-sky-600 uppercase tracking-widest">Residue Guarantee</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-sky-500/10 blur-[100px] rounded-full" />
              <BeforeAfterSlider 
                beforeImg="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1200" 
                afterImg="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <LuxuryShowcase />
      <About />
      <Values />
      <Calculator />
      <div className="bg-[#020617]">
        <Services />
      </div>
      <Portfolio />
      <Testimonials />
      <Contact />
    </motion.div>
  );
};

export default HomePage;