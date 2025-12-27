import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sliderImages = [
  {
    url: "https://github.com/Franck119/franck-skyblue/blob/main/Gemini_Generated_Image_h4yfuth4yfuth4yf.png?raw=true",
    alt: "Precision Garment Care"
  },
  {
    url: "https://github.com/Franck119/franck-skyblue/blob/main/Gemini_Generated_Image_fk34a9fk34a9fk34.png?raw=true",
    alt: "Luxury Fabric Maintenance"
  },
  {
    url: "https://github.com/Franck119/franck-skyblue/blob/main/Gemini_Generated_Image_wglhm3wglhm3wglh.png?raw=true",
    alt: "High Fashion Conservation"
  }
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Speed increased to 3000ms for high-energy high-fashion feel
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-black text-center px-6">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={sliderImages[currentIndex].url}
            alt={sliderImages[currentIndex].alt}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.8, scale: 1.2 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-20 max-w-5xl">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="inline-flex items-center gap-3 luxury-glass px-6 py-2 rounded-full mb-10"
        >
          <ShieldCheck className="w-4 h-4 text-sky-400" />
          <span className="text-white/40 text-[9px] font-black tracking-[0.4em] uppercase">ISO 9001 Professional Standard</span>
        </motion.div>
        
        <motion.h1 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-[9rem] font-black text-white leading-[0.8] tracking-tighter mb-12 serif"
        >
          Pure <br /> <span className="italic text-sky-400">Prestige.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="text-xl md:text-2xl text-white/40 max-w-2xl mx-auto mb-16 leading-relaxed font-light"
        >
          Engineering immaculate environments for West Africa's architectural elite. Precision hygiene for high-fashion lifestyles.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link 
            to="/contact" 
            className="bg-white text-black px-12 py-6 rounded-full font-black text-[10px] tracking-[0.3em] uppercase transition-all shadow-2xl hover:scale-105 active:scale-95"
          >
            Request Consult
          </Link>
          <Link 
            to="/services" 
            className="luxury-glass text-white px-12 py-6 rounded-full font-black text-[10px] tracking-[0.3em] uppercase hover:bg-white/10 transition-all"
          >
            Our Solutions
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {sliderImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-12 bg-sky-500' : 'w-4 bg-white/20'}`}
          />
        ))}
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-12 opacity-30">
        <div className="h-[1px] w-24 bg-white" />
        <span className="text-[9px] font-black uppercase tracking-[0.8em]">Scroll to Explore</span>
        <div className="h-[1px] w-24 bg-white" />
      </div>
    </section>
  );
};

export default Hero;
