'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const admins = [
  {
    id: 1,
    name: "Layanan Personal",
    role: "Konsultasi Buket & Bunga Meja",
    phone: "628158766267", // Admin 1
    message: "Halo Tim Dillenia, saya ingin berkonsultasi mengenai pesanan bunga personal..."
  },
  {
    id: 2,
    name: "Layanan Corporate & Event",
    role: "Dekorasi, Wedding & Standing Flower",
    phone: "6287734346287", // Admin 2
    message: "Halo Tim Dillenia, saya ingin berdiskusi mengenai layanan floral untuk kebutuhan acara/perusahaan..."
  }
];

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-card border border-border shadow-2xl rounded-2xl w-72 overflow-hidden"
          >
            <div className="bg-slate-900 p-5 text-white">
              <h3 className="font-bold text-sm tracking-wide">Layanan Concierge</h3>
              <p className="text-xs text-slate-300 mt-1">Kami siap menyempurnakan momen Anda hari ini.</p>
            </div>
            <div className="p-2">
              {admins.map((admin) => (
                <a
                  key={admin.id}
                  href={`https://wa.me/${admin.phone}?text=${encodeURIComponent(admin.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-green-600 transition-colors">{admin.name}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{admin.role}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-slate-900 hover:bg-slate-800 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-105"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}