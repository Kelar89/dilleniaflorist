'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl order-2 lg:order-1">
            <img src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=800&auto=format&fit=crop" alt="Corporate Floral" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-bold">
              <Briefcase size={16} /> Layanan Korporat
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
              Citra Profesional yang <span className="text-primary">Elegan.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Meningkatkan estetika ruang kerja dan memberikan impresi mewah pada acara bisnis Anda. Kami menyediakan layanan kontrak rutin maupun pesanan untuk event berskala besar.
            </p>
            <ul className="space-y-3 text-foreground font-medium">
              <li>✓ Standing Flower Grand Opening</li>
              <li>✓ Bunga Meja Resepsionis & Eksekutif</li>
              <li>✓ Langganan Bunga Mingguan (Weekly Supply)</li>
              <li>✓ Parsel & Hadiah VIP Klien</li>
            </ul>
            <Link href="https://wa.me/6285894448143?text=Halo%20Dillenia,%20saya%20ingin%20mengajukan%20kerjasama%20korporat." target="_blank" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors shadow-lg group">
              Hubungi Tim Kemitraan
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}