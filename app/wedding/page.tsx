'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export default function WeddingPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-bold">
              <Heart size={16} /> Layanan Pernikahan
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
              Simfoni Cinta dalam <span className="text-primary">Kelopak Bunga.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Dari hand bouquet yang elegan hingga dekorasi venue yang magis. Kami merancang setiap detail floral untuk memastikan hari istimewa Anda dikenang selamanya.
            </p>
            <ul className="space-y-3 text-foreground font-medium">
              <li>✓ Bridal & Bridesmaid Bouquets</li>
              <li>✓ Dekorasi Pelaminan & Aisle</li>
              <li>✓ Centerpiece Meja Resepsi</li>
              <li>✓ Boutonniere & Corsage</li>
            </ul>
            <Link href="/custom" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:bg-accent transition-colors shadow-lg group">
              Konsultasi Pernikahan
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop" alt="Wedding Floral" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}