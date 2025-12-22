import React from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingChat: React.FC = () => {
  const whatsappNumber = "+2250700000000"; // Replace with real number
  const telegramUsername = "skybluecleaning"; // Replace with real username
  const message = encodeURIComponent("Hello SkyBlue Cleaning, I am interested in your services.");

  return (
    <div className="fixed bottom-10 left-10 z-[100] flex flex-col gap-4 pointer-events-none">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0, x: -20 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="pointer-events-auto w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center group relative overflow-hidden"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute left-16 bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-black shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100">
          WhatsApp Us
        </span>
      </motion.a>

      {/* Telegram Button */}
      <motion.a
        href={`https://t.me/${telegramUsername}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0, x: -20 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1, rotate: -5 }}
        className="pointer-events-auto w-14 h-14 bg-[#0088cc] text-white rounded-full shadow-2xl flex items-center justify-center group relative overflow-hidden"
      >
        <Send className="w-6 h-6 -translate-x-0.5 translate-y-0.5" />
        <span className="absolute left-16 bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-black shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100">
          Telegram Chat
        </span>
      </motion.a>
    </div>
  );
};

export default FloatingChat;