
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your request for a quote has been sent. We will contact you shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8">Ready to bring our expertise to your location?</h3>
            <p className="text-lg text-slate-600 mb-12">
              We're expanding rapidly across West Africa. Contact us today for a free consultation and customized quote.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Main Office</h4>
                  <p className="text-slate-600">Cocody, Abidjan, Ivory Coast</p>
                  <p className="text-slate-600">Branch: Félix Houphouët-Boigny Int Airport</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Call Us</h4>
                  <p className="text-slate-600">+225 07 00 00 00 00</p>
                  <p className="text-slate-600">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Email</h4>
                  <p className="text-slate-600">hello@skyblue-cleaning.com</p>
                  <p className="text-slate-600">quotes@skyblue-cleaning.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl shadow-sm border border-slate-100">
            <h4 className="text-2xl font-bold text-slate-900 mb-8 text-center">Get a Free Quote</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Service Required</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-white">
                  <option>Residential Cleaning</option>
                  <option>Commercial Cleaning</option>
                  <option>Industrial Sanitation</option>
                  <option>Post-Construction</option>
                  <option>Specialized Jet Cleaning</option>
                  <option>Custom Package</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
                  placeholder="Tell us about your space..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-lg shadow-sky-500/20"
              >
                Send Request
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
