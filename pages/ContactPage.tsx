import React from 'react';
import PageHeader from '../components/PageHeader';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from '../LanguageContext';

const ContactPage: React.FC = () => {
  const { lang } = useTranslation();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(lang === 'en' ? "Thank you! We will contact you shortly." : "Merci ! Nous vous contacterons sous peu.");
  };

  return (
    <div className="bg-white page-entrance">
      <PageHeader 
        title={lang === 'en' ? "Contact Us" : "Contactez-Nous"} 
        subtitle={lang === 'en' ? "We're here to answer your hygiene questions and provide custom quotes." : "Nous sommes là pour répondre à vos questions d'hygiène et fournir des devis personnalisés."}
        imageUrl="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1200"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <h3 className="text-4xl font-bold text-slate-900">{lang === 'en' ? 'Get in Touch' : 'Entrer en Contact'}</h3>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center flex-shrink-0"><MapPin /></div>
                  <div>
                    <h4 className="font-bold text-xl">{lang === 'en' ? 'Headquarters' : 'Siège Social'}</h4>
                    <p className="text-slate-600">Cocody Riviera, Abidjan, CI</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center flex-shrink-0"><Phone /></div>
                  <div>
                    <h4 className="font-bold text-xl">{lang === 'en' ? 'Call Support' : 'Support Téléphonique'}</h4>
                    <p className="text-slate-600">+225 07 00 00 00 00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input className="w-full p-4 rounded-2xl border-none ring-1 ring-slate-200" placeholder={lang === 'en' ? "Name" : "Nom"} />
                <input className="w-full p-4 rounded-2xl border-none ring-1 ring-slate-200" placeholder="Email" />
                <textarea className="w-full p-4 rounded-2xl border-none ring-1 ring-slate-200" rows={4} placeholder="Message" />
                <button className="w-full bg-sky-600 text-white font-bold p-5 rounded-2xl hover:bg-sky-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-sky-600/20">
                  {lang === 'en' ? 'Send Message' : 'Envoyer'} <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;