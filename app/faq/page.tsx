'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Apakah bunga yang dikirim pasti segar?",
    answer: "Tentu. Kami menyeleksi bunga Grade A langsung dari petani setiap pagi. Proses perangkaian dilakukan beberapa jam sebelum pengiriman untuk memastikan kesegaran maksimal saat tiba di tangan penerima."
  },
  {
    question: "Berapa lama proses pengiriman?",
    answer: "Untuk pengiriman area Jakarta dan Tangerang, kami menyediakan layanan Same-Day Delivery (pesan dan antar di hari yang sama) untuk pesanan yang masuk sebelum pukul 14.00 WIB. Pemesanan di atas jam tersebut akan dikirim keesokan paginya."
  },
  {
    question: "Apakah saya bisa memesan desain secara kustom?",
    answer: "Sangat bisa. Hubungi CS Konsultasi kami. Tim artisan kami akan membantu menerjemahkan visi, palet warna, dan jenis bunga favorit Anda menjadi sebuah mahakarya floral eksklusif."
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer: "Kami menerima pembayaran melalui transfer Bank BCA, Mandiri, dan e-Wallet (QRIS). Pesanan akan mulai diproses setelah konfirmasi pembayaran kami terima."
  },
  {
    question: "Apakah identitas pengirim bisa dirahasiakan?",
    answer: "Bisa. Kami sangat menghargai privasi klien. Jika Anda ingin mengirimkan kejutan tanpa nama (Anonymous), silakan berikan instruksi tersebut kepada admin kami saat melakukan pemesanan via WhatsApp."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Buka FAQ pertama secara default

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24 pb-20">
      <section className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Tanya <span className="text-primary">Jawab</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Informasi lengkap seputar layanan pemesanan dan pengiriman kami.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 mb-16"
        >
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-6 text-left"
              >
                <span className="font-semibold text-foreground md:text-lg pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180 text-primary" : ""}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed border-t border-border/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Bantuan Lanjutan */}
        <div className="bg-slate-50 dark:bg-slate-900 border border-border rounded-3xl p-8 text-center">
          <h3 className="text-xl font-bold mb-3">Punya Pertanyaan Lain?</h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Tim layanan pelanggan kami siap membantu Anda dari pukul 08.00 hingga 20.00 WIB.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/6285894448143?text=Halo%20Dillenia,%20saya%20punya%20pertanyaan%20terkait%20layanan."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-sm"
            >
              <MessageCircle size={18} />
              Tanya CS Pemesanan (0858)
            </a>
            <a 
              href="https://wa.me/6282196004768?text=Halo%20Dillenia,%20saya%20butuh%20konsultasi%20desain."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-border bg-background rounded-full hover:bg-muted transition-colors font-medium text-sm"
            >
              <MessageCircle size={18} />
              Tanya CS Konsultasi (0821)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}