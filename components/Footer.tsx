import React from 'react';
import { Droplets, Facebook, Twitter, Instagram, Linkedin, MapPin } from 'lucide-react';
import { useTranslation } from '../LanguageContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { lang } = useTranslation();

  return (
    <footer className="bg-[#050505] text-white pt-40 pb-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-24 mb-32">
          <div className="col-span-2 space-y-10">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-sky-500 p-2 rounded-xl">
                <Droplets className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tighter">SKYBLUE <span className="text-sky-500">CLEAN</span></span>
            </Link>
            <p className="text-white/40 max-w-md text-xl serif italic">
              "Establishing the gold standard of environmental excellence across the West African sub-region."
            </p>
            <div className="flex gap-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-white/20 hover:text-sky-500 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.4em] mb-10 text-sky-500">Divisions</h4>
            <ul className="space-y-6 text-white/40 font-bold text-xs uppercase tracking-widest">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">The Boutique</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.4em] mb-10 text-sky-500">Global Hubs</h4>
            <ul className="space-y-6 text-white/40 font-bold text-xs uppercase tracking-widest">
              <li className="flex items-center gap-3"><MapPin size={14} /> Abidjan, Côte d'Ivoire</li>
              <li className="flex items-center gap-3"><MapPin size={14} /> Dakar, Sénégal</li>
              <li className="flex items-center gap-3"><MapPin size={14} /> Accra, Ghana</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} SkyBlue Cleaning West Africa Group.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;