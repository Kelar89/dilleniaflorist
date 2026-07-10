'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24 pb-16">
      
      {/* 1. Header Cerita */}
      <section className="container mx-auto px-4 md:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
          >
            Menyusun Keindahan, <br />
            <span className="text-primary">Merangkai Makna.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed"
          >
            Di Dillenia Florist, kami percaya bahwa bunga bukan sekadar ornamen visual. Mereka adalah medium untuk emosi yang terlalu dalam untuk diungkapkan dengan kata-kata.
          </motion.p>
        </div>
      </section>

      {/* 2. Visual & Kisah Pendiri (F-Pattern Layout) */}
      <section className="container mx-auto px-4 md:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-border"
          >
            <img 
              src="https://images.unsplash.com/photo-1596435019842-8c8714cc26bb?q=80&w=1000&auto=format&fit=crop" 
              alt="Artisan Florist Merangkai Bunga" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay elegan */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-6 w-max">
              Kisah Kami
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Visi Kesempurnaan
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Dillenia Florist didirikan oleh <strong>Ami Umar</strong> dengan satu prinsip tak tergoyahkan: Setiap klien berhak mendapatkan karya seni floral dengan kualitas tanpa kompromi. Kami meninggalkan gaya merangkai konvensional yang kaku, beralih pada pendekatan estetika modern, minimalis, dan mewah.
              </p>
              <p>
                Kami menyeleksi setiap tangkai bunga langsung dari petani premium, memastikan kesegaran, ketahanan, dan kepekatan warna yang sempurna sebelum sampai ke tangan orang yang Anda cintai.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              {[
                "Kualitas bunga premium (Grade A)",
                "Desain eksklusif dan kustom",
                "Pengiriman aman dan tepat waktu"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CTA Lanjutan */}
      <section className="container mx-auto px-4 md:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 dark:bg-slate-900 border border-border rounded-3xl p-12 md:p-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Mulai Ciptakan Momen Anda</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Jelajahi koleksi mahakarya kami atau konsultasikan kebutuhan desain khusus yang Anda inginkan.
          </p>
          <Link 
            href="/products" 
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-accent transition-all font-semibold shadow-lg group"
          >
            Lihat Koleksi Kami
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}