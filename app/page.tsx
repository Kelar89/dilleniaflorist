'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote, ChevronLeft, ChevronRight, Sparkles, Timer, Flame } from "lucide-react";
import { useCart } from "@/components/context/CartContext";
import { allProductsDatabase } from "@/components/context/productsData";

const heroImages = [
  "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=800&auto=format&fit=crop"
];

const reviews = [
  { name: "Siti Rahma", role: "Klien Korporat", text: "Rangkaian bunga meja bulanan untuk kantor kami selalu memukau. Sangat direkomendasikan untuk bisnis yang menghargai impresi pertama.", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
  { name: "Arif Wijaya", role: "Pengantin Pernikahan", text: "Hand bouquet kustom rancangan tim Dillenia benar-benar melengkapi momen sakral kami. Kesegaran bunganya bertahan sangat lama.", rating: 5, avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop" },
  { name: "Clara Dian", role: "Pelanggan Setia", text: "Proses reservasi via layanan concierge digitalnya sangat eksklusif dan praktis. Format penjadwalan otomatis ke WhatsApp membuat pengaturan pengiriman selesai dengan sangat elegan.", rating: 5, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" }
];

export default function Home() {
  const { addToCart, openCart } = useCart();
  const [heroIdx, setHeroIdx] = useState(0);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Rotasi Hero
    const heroTimer = setInterval(() => { setHeroIdx(p => p === heroImages.length - 1 ? 0 : p + 1); }, 5000);
    
    // Logika Timer Harian (Reset Otomatis Jam 12 Malam)
    const countdownTimer = setInterval(() => {
      const now = new Date();
      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const diff = tomorrow.getTime() - now.getTime();

      setTimeLeft({
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => {
      clearInterval(heroTimer);
      clearInterval(countdownTimer);
    };
  }, []);

  const formatRupiah = (num: number) => 
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(num);

  const featured = allProductsDatabase.slice(0, 3);
  // Mengambil 4 produk secara strategis untuk mengisi baris Flash Sale
  const flashSaleProducts = allProductsDatabase.slice(5, 9); 

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-background">
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-background pt-16">
        <div className="container px-4 md:px-8 mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-slate-900">Ekspresikan <br />Perasaan, <br /><span className="text-primary">Tanpa Kata.</span></h1>
            <p className="text-lg text-slate-500 mb-8 max-w-lg">Kurasi mahakarya floral premium yang dirancang khusus untuk mewakili emosi mendalam Anda di setiap momen berharga.</p>
            <Link href="/products" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-slate-800 transition-colors">Eksplorasi Mahakarya <ArrowRight size={18} /></Link>
          </div>
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-2xl">
            <Image src={heroImages[heroIdx]} alt="Premium Arrangement" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* NEW: ZONA FOMO & BEST DEAL */}
      <section className="py-20 bg-slate-900 text-white border-y border-slate-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
                <Flame className="text-orange-500" size={28} /> Kurasi Prioritas Hari Ini
              </h2>
              <p className="text-slate-400 max-w-xl">Mahakarya dengan ketersediaan bahan baku sangat terbatas. Amankan pesanan Anda sebelum pergantian hari.</p>
            </div>
            
            {/* Timer Kotak Eksklusif */}
            <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-2xl border border-slate-700 shadow-inner">
              <div className="flex items-center gap-2 text-slate-300 mr-2">
                <Timer size={20} className="text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider">Sisa Waktu:</span>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col items-center bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700 min-w-[50px]">
                  <span className="text-xl font-bold text-primary">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest">Jam</span>
                </div>
                <div className="flex flex-col items-center bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700 min-w-[50px]">
                  <span className="text-xl font-bold text-primary">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest">Mnt</span>
                </div>
                <div className="flex flex-col items-center bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700 min-w-[50px]">
                  <span className="text-xl font-bold text-orange-500">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="text-[9px] text-slate-500 uppercase tracking-widest">Dtk</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flashSaleProducts.map((product) => (
              <div key={product.id} className="group flex flex-col bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-primary/50 transition-colors">
                <div className="relative h-60 overflow-hidden bg-slate-700">
                  <div className="absolute top-4 left-4 z-10 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Tersedia HARI INI</div>
                  <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold mb-1 text-slate-100 line-clamp-1">{product.title}</h3>
                  <div className="font-bold text-primary mb-4">{formatRupiah(product.price)}</div>
                  <div className="grid grid-cols-2 gap-2 mt-auto">
                    <Link href={`/products/${product.id}`} className="py-2.5 bg-slate-700 text-center rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-600 transition-colors">Detail</Link>
                    <button onClick={() => { addToCart({ productId: product.id, title: product.title, variant: "Standard", price: product.price, quantity: 1, image: product.image }); openCart(); }} className="py-2.5 bg-primary text-white text-center rounded-xl text-xs font-bold hover:bg-emerald-600 transition-colors shadow-md">Amankan</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY FUNNEL */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Layanan Eksklusif</h2>
              <p className="text-slate-500 mt-2 max-w-lg">Pilih jalur layanan yang paling sesuai dengan kebutuhan momen spesial Anda.</p>
            </div>
            <Link href="/custom" className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
              <Sparkles size={18}/> Konsultasi Personal
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[500px]">
            <Link href="/corporate" className="md:col-span-5 relative rounded-3xl overflow-hidden group h-[300px] md:h-full block">
              <Image src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=800&auto=format&fit=crop" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Corporate" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8 transition-colors group-hover:bg-slate-900/50">
                <h3 className="text-2xl font-bold text-white mb-2">Corporate & Eksklusif</h3>
                <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Tingkatkan citra profesional perusahaan Anda dengan instalasi floral premium.</p>
                <span className="inline-flex items-center gap-2 text-white font-bold text-sm">
                  Eksplorasi Layanan <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform"/>
                </span>
              </div>
            </Link>

            <Link href="/wedding" className="md:col-span-7 relative rounded-3xl overflow-hidden group h-[250px] md:h-[242px] block">
              <Image src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Wedding" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8 transition-colors group-hover:bg-slate-900/50">
                <h3 className="text-2xl font-bold text-white mb-2">Pernikahan Sakral</h3>
                <span className="inline-flex items-center gap-2 text-white font-bold text-sm">
                  Lihat Koleksi <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform"/>
                </span>
              </div>
            </Link>

            <Link href="/products" className="md:col-span-7 relative rounded-3xl overflow-hidden group h-[250px] md:h-[242px] block">
              <Image src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Bunga Meja" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8 transition-colors group-hover:bg-slate-900/50">
                <h3 className="text-2xl font-bold text-white mb-2">Koleksi Bunga Meja</h3>
                <span className="inline-flex items-center gap-2 text-white font-bold text-sm">
                  Jadwalkan Pengiriman <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform"/>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUK UNGGULAN (Reguler) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16"><h2 className="text-3xl font-bold text-slate-900 mb-2">Mahakarya Pilihan Utama</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((product) => (
              <div key={product.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-shadow">
                <div className="relative h-72 overflow-hidden bg-slate-50">
                  <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-1 text-slate-800">{product.title}</h3>
                  <div className="font-bold text-primary mb-5">{formatRupiah(product.price)}</div>
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <Link href={`/products/${product.id}`} className="py-2.5 bg-slate-100 text-center rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors">Lihat Detail</Link>
                    <button onClick={() => { addToCart({ productId: product.id, title: product.title, variant: "Standard", price: product.price, quantity: 1, image: product.image }); openCart(); }} className="py-2.5 bg-slate-900 text-white text-center rounded-xl text-xs font-bold flex items-center justify-center gap-1 hover:bg-slate-800 transition-colors shadow-md"><Sparkles size={14}/> Kirim Kejutan</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SLIDER */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Apresiasi Klien Kami</h2>
            <p className="text-slate-500 text-sm">Cerita dari mereka yang mempercayakan momen berharganya kepada kami.</p>
          </div>

          <div className="min-h-[260px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div key={reviewIdx} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="w-full bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm relative">
                <Quote className="absolute top-6 right-8 text-primary/10 w-16 h-16 pointer-events-none" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary shadow-inner">
                    <Image src={reviews[reviewIdx].avatar} fill sizes="56px" className="object-cover" alt="Avatar" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-base">{reviews[reviewIdx].name}</span>
                    <span className="text-xs text-primary bg-primary/10 px-2.5 py-0.5 rounded-full mt-1 inline-block font-semibold">{reviews[reviewIdx].role}</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed italic">"{reviews[reviewIdx].text}"</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <button onClick={() => setReviewIdx(p => p === 0 ? reviews.length - 1 : p - 1)} className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 transition-colors shadow-sm"><ChevronLeft size={16}/></button>
            <button onClick={() => setReviewIdx(p => p === reviews.length - 1 ? 0 : p + 1)} className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 transition-colors shadow-sm"><ChevronRight size={16}/></button>
          </div>
        </div>
      </section>
    </div>
  );
}