import React from 'react';
import PageHeader from '../components/PageHeader';
import { BLOG_POSTS } from '../constants';
import { useTranslation } from '../LanguageContext';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const { lang, t } = useTranslation();

  return (
    <div className="bg-white page-entrance">
      <PageHeader 
        title={lang === 'en' ? "Latest News" : "Dernières Nouvelles"} 
        subtitle={lang === 'en' ? "Insights and updates from the world of West African professional cleaning." : "Aperçus et mises à jour du monde du nettoyage professionnel en Afrique de l'Ouest."}
        imageUrl="https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=1200"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-xl border border-slate-100 diamond-polish">
                  <img src={post.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={t(post.title)} />
                  <div className="absolute top-4 left-4">
                    <span className="bg-sky-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                      {lang === 'en' ? 'Cleaning' : 'Nettoyage'}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-6 text-sm text-slate-400 font-medium">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                    <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-tight">{t(post.title)}</h3>
                  <p className="text-slate-600 leading-relaxed">{t(post.excerpt)}</p>
                  <button className="flex items-center gap-2 text-sky-600 font-bold group-hover:gap-4 transition-all">
                    {lang === 'en' ? 'Read More' : 'Lire la suite'} <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;