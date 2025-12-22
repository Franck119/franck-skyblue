import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageProvider } from './LanguageContext.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import FloatingChat from './components/FloatingChat.tsx';

// Pages
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import PortfolioPage from './pages/PortfolioPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import BlogPage from './pages/BlogPage.tsx';
import BenefitsPage from './pages/BenefitsPage.tsx';
import ShopPage from './pages/ShopPage.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ minHeight: '60vh' }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen luxury-gradient text-slate-100 overflow-x-hidden flex flex-col relative">
          {/* Background Elements */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="bubble w-64 h-64 top-[10%] left-[-5%]"></div>
            <div className="bubble w-96 h-96 top-[60%] right-[-10%] opacity-20"></div>
          </div>

          <Navbar scrolled={scrolled} />
          
          <main className="flex-grow relative z-10 flex flex-col mt-[100px]">
            <AnimatedRoutes />
          </main>

          <FloatingChat />
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;