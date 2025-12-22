import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from '../LanguageContext.tsx';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, imageUrl }) => {
  const { lang } = useTranslation();
  
  return (
    <div className="relative pt-40 pb-24 overflow-hidden min-h-[400px] flex items-center">
      {imageUrl ? (
        <>
          <img 
            src={imageUrl} 
            className="absolute inset-0 w-full h-full object-cover z-0" 
            alt={title} 
          />
          <div className="absolute inset-0 bg-sky-900/80 backdrop-blur-[2px] z-1"></div>
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-sky-800 to-sky-900 z-0"></div>
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="flex items-center gap-2 text-sky-300 text-sm mb-6">
          <Link to="/" className="hover:text-white transition-colors">{lang === 'en' ? 'Home' : 'Accueil'}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white font-medium">{title}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">{title}</h1>
        <p className="text-xl md:text-2xl text-sky-100 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;