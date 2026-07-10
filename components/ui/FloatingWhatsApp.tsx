'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Penambahan 'hidden md:block' agar tidak muncul di layar mobile
    <div className="hidden md:block fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 mb-4 w-72 bg-card rounded-2xl shadow-2xl border border-border overflow-hidden"
          >
            <div className="bg-primary p-4 text-primary-foreground flex justify-between items-center">
              <div>
                <h4 className="font-bold">Hubungi Kami</h4>
                <p className="text-xs opacity-90">Tim Dillenia siap membantu Anda.</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-primary-foreground/20 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="p-4 flex flex-col gap-3">
              <a 
                href="https://wa.me/6285894448143?text=Halo%20Dillenia,%20saya%20ingin%20pesan%20bunga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors border border-transparent hover:border-border"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                  <MessageCircle size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">CS 1 - Pemesanan</span>
                  <span className="text-xs text-muted-foreground">0858-9444-8143</span>
                </div>
              </a>

              <a 
                href="https://wa.me/6282196004768?text=Halo%20Dillenia,%20saya%20butuh%20konsultasi%20dekorasi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors border border-transparent hover:border-border"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                  <MessageCircle size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">CS 2 - Konsultasi</span>
                  <span className="text-xs text-muted-foreground">0821-9600-4768</span>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center hover:scale-105 transition-all duration-300 relative"
      >
        <MessageCircle size={28} />
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-[#25D366]"></span>
          </span>
        )}
      </button>
    </div>
  );
}