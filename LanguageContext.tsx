import React, { createContext, useContext, useState } from 'react';
import { Language } from './types';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: any) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');

  const t = (item: any) => {
    if (typeof item === 'string') return item;
    if (!item) return '';
    return item[lang] || item['en'] || item['fr'] || '';
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within LanguageProvider");
  return context;
};