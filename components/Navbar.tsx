import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';
import { useTranslation } from '../LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useTranslation();
  const location = useLocation();

  const getNavLinks = () => {
    switch(lang) {
      case 'fr': return [
        { name: 'Accueil', href: '/' },
        { name: 'À Propos', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Réalisations', href: '/portfolio' },
        { name: 'Boutique', href: '/shop' },
      ];
      case 'ru': return [
        { name: 'Главная', href: '/' },
        { name: 'О Нас', href: '/about' },
        { name: 'Услуги', href: '/services' },
        { name: 'Портфолио', href: '/portfolio' },
        { name: 'Магазин', href: '/shop' },
      ];
      default: return [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Shop', href: '/shop' },
      ];
    }
  };

  const navLinks = getNavLinks();

  return (
    <div className="fixed top-6 left-0 right-0 z-[100] px-4">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`mx-auto max-w-5xl transition-all duration-700 rounded-full border border-white/10 ${
          scrolled ? 'bg-black/60 backdrop-blur-3xl py-3 px-6 shadow-2xl' : 'bg-white/5 backdrop-blur-md py-5 px-8'
        }`}
      >
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-sky-500 p-2 rounded-xl shadow-lg shadow-sky-500/30">
              <Droplets className="text-white w-4 h-4" />
            </div>
            <span className="text-sm font-black tracking-[0.2em] text-white uppercase">
              SKYBLUE <span className="text-sky-400">CLEAN</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 rounded-full text-[10px] font-black tracking-widest uppercase transition-all relative ${
                  location.pathname === link.href ? 'text-white' : 'text-white/40 hover:text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.href && (
                  <motion.div layoutId="nav-active" className="absolute inset-0 bg-white/10 rounded-full -z-10" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
              <button onClick={() => setLang('en')} className={`px-2 py-0.5 rounded-full text-[8px] font-black ${lang === 'en' ? 'bg-sky-500 text-white' : 'text-white/30'}`}>EN</button>
              <button onClick={() => setLang('fr')} className={`px-2 py-0.5 rounded-full text-[8px] font-black ${lang === 'fr' ? 'bg-sky-500 text-white' : 'text-white/30'}`}>FR</button>
              <button onClick={() => setLang('ru')} className={`px-2 py-0.5 rounded-full text-[8px] font-black ${lang === 'ru' ? 'bg-sky-500 text-white' : 'text-white/30'}`}>RU</button>
            </div>
            <Link to="/contact" className="bg-white text-black px-6 py-2 rounded-full font-black text-[10px] tracking-widest uppercase hover:bg-sky-400 transition-all shadow-xl shadow-white/5">
              {lang === 'en' ? 'Contact' : lang === 'fr' ? 'Contact' : 'Контакт'}
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-white/50">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black/90 p-8 space-y-6 rounded-[2rem] mt-4 border border-white/5 backdrop-blur-2xl"
            >
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)} className="block text-xl font-black text-white hover:text-sky-400">
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="block w-full bg-sky-500 text-white text-center py-4 rounded-full font-black text-xs">
                {lang === 'en' ? 'REQUEST BLUEPRINT' : lang === 'fr' ? 'DEMANDER UN PLAN' : 'ЗАКАЗАТЬ ПЛАН'}
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;