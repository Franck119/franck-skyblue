export type Language = 'en' | 'fr' | 'ru';

export interface Service {
  id: string;
  title: { en: string; fr: string; ru: string };
  description: { en: string; fr: string; ru: string };
  detailedDescription: { en: string; fr: string; ru: string };
  icon: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Specialized';
  price?: string;
  includedTasks: { en: string[]; fr: string[]; ru: string[] };
  specifications: { en: string[]; fr: string[]; ru: string[] };
  process?: { en: string[]; fr: string[]; ru: string[] };
  whyMatters?: { en: string; fr: string; ru: string };
}

export interface PortfolioItem {
  id: string;
  title: { en: string; fr: string; ru: string };
  location: string;
  description: { en: string; fr: string; ru: string };
  results: { en: string; fr: string; ru: string };
  challenge?: { en: string; fr: string; ru: string };
  solution?: { en: string; fr: string; ru: string };
  impact?: { en: string; fr: string; ru: string };
  imageUrl: string;
  category: string;
}

export interface Value {
  title: { en: string; fr: string; ru: string };
  description: { en: string; fr: string; ru: string };
  icon: string;
}

export interface BlogPost {
  id: string;
  title: { en: string; fr: string; ru: string };
  excerpt: { en: string; fr: string; ru: string };
  date: string;
  imageUrl: string;
  author: string;
}