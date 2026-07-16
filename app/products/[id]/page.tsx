'use client';

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Sparkles, ChevronDown, Star, CheckCircle2, ShieldCheck, Truck, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/context/CartContext";
import { allProductsDatabase } from "@/components/context/productsData";

export default function ProductDetailPage() {
  const params = useParams();
  const { openCart, addToCart } = useCart();
  
  const product = useMemo(() => {
    return allProductsDatabase.find(p => p.id === params?.id) || allProductsDatabase[0];
  }, [params?.id]);

  const [activeImage, setActiveImage] = useState(0);
  const [activeVariant, setActiveVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [showToast, setShowToast] = useState(false);

  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(number);
  };

  const handleAddToCartAction = () => {
    addToCart({
      productId: product.id,
      title: product.title,
      variant: activeVariant.name,
      price: activeVariant.price,
      quantity: quantity,
      image: product.images[activeImage] || product.images[0]
    });
    
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      // Opsi cerdas: Langsung buka laci keranjang setelah notifikasi hilang agar pembeli fokus checkout
      openCart(); 
    }, 1500);
  };

  // 1. INJEKSI SKEMA DATA SEO (JSON-LD) KHUSUS PRODUK
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": product.images.map(img => `https://dillenia.id${img}`),
    "description": product.description,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": "Dillenia Florist"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://dillenia.id/products/${product.id}`,
      "priceCurrency": "IDR",
      "price": activeVariant.price,
      "availability": product.stockStatus === "Tersedia" ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviews
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-32 md:pb-24 relative">
      {/* Script JSON-LD disuntikkan ke dalam DOM */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <AnimatePresence>
        {showToast && (
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 text-sm font-semibold border border-slate-700">
            <CheckCircle2 size={20} className="text-primary" /> Mahakarya diamankan di Tas Kurasi Anda!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 md:px-8 mt-8">
        <nav className="flex text-sm text-slate-400 mb-8 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Koleksi</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-4">
            <div className="relative w-full aspect-[4/5] md:aspect-square bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
              {/* 3. OPTIMALISASI LCP GAMBAR: Penambahan sizes dan quality */}
              <Image 
                src={product.images[activeImage] || product.images[0]} 
                alt={product.title} 
                fill 
                priority 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                quality={90}
                className="object-cover transition-opacity duration-500" 
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button key={idx} onClick={() => setActiveImage(idx)} className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all ${activeImage === idx ? "border-primary shadow-md" : "border-transparent opacity-50 hover:opacity-100"}`}>
                    <Image src={img} fill sizes="150px" quality={60} className="object-cover" alt={`Thumbnail ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-6 xl:col-span-5 relative">
            <div className="sticky top-32 flex flex-col">
              <div className="mb-6">
                <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-2">{product.category.replace('-', ' ')}</span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">{product.title}</h1>
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex items-center text-amber-500 gap-1 bg-amber-50 px-2 py-1 rounded-md">
                    <Star size={14} className="fill-current" /> 
                    <span className="font-bold">{product.rating}</span>
                  </div>
                  <span className="text-slate-400 font-medium">({product.reviews} Ulasan Klien)</span>
                </div>
              </div>

              <div className="text-3xl font-extrabold text-primary mb-6">{formatRupiah(activeVariant.price)}</div>
              <p className="text-slate-600 mb-8 leading-relaxed text-base">{product.description}</p>

              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">Spesifikasi Mahakarya</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.variants.map((v) => (
                    <button key={v.id} onClick={() => setActiveVariant(v)} className={`p-4 rounded-2xl border-2 text-left transition-all ${activeVariant.id === v.id ? "border-primary bg-primary/5 shadow-sm" : "border-slate-200 bg-white hover:border-slate-300"}`}>
                      <span className={`block font-bold text-sm mb-1 ${activeVariant.id === v.id ? "text-primary" : "text-slate-700"}`}>{v.name}</span>
                      <span className="block text-xs text-slate-500">{v.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">Jumlah Rangkaian</h3>
                <div className="flex items-center bg-white border border-slate-200 rounded-full p-1.5 w-max shadow-sm">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-full transition-colors"><Minus size={16}/></button>
                  <span className="w-12 text-center font-bold text-slate-900">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-full transition-colors"><Plus size={16}/></button>
                </div>
              </div>

              {product.scarcity && (
                <div className="flex items-start gap-3 text-slate-700 bg-slate-50 p-4 rounded-2xl mb-6 text-sm font-medium border border-slate-200">
                  <Sparkles size={20} className="text-primary shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{product.scarcity}</p>
                </div>
              )}

              <button onClick={handleAddToCartAction} className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-4 rounded-full font-bold text-base hover:bg-slate-800 transition-all shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] hover:shadow-none mb-6">
                <Sparkles size={20} /> Reservasi Mahakarya
              </button>

              {/* 2. OPTIMALISASI PSIKOLOGIS: Segel Kepercayaan (Trust Badges) */}
              <div className="grid grid-cols-3 gap-2 mb-10 pb-8 border-b border-slate-100">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600"><ShieldCheck size={20}/></div>
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wide">100% Bunga<br/>Segar Pilihan</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600"><Truck size={20}/></div>
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wide">Kurir Spesialis<br/>Mobil Ber-AC</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600"><Clock size={20}/></div>
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wide">Jaminan<br/>Tepat Waktu</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">Bagikan Inspirasi:</span>
                <div className="flex gap-2">
                  <button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent('Lihat mahakarya floral ini: ' + window.location.href)}`)} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all"><MessageCircle size={16}/></button>
                  <button onClick={() => window.open(`https://facebook.com/sharer/sharer.php?u=${window.location.href}`)} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </button>
                </div>
              </div>

              <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white">
                {product.details.map((detail, index) => (
                  <div key={index} className="border-b border-slate-100 last:border-0">
                    <button onClick={() => setOpenAccordion(openAccordion === index ? null : index)} className="flex items-center justify-between w-full p-5 text-left font-bold text-sm text-slate-800 hover:bg-slate-50 transition-colors">
                      {detail.title} 
                      <ChevronDown size={18} className={`transition-transform duration-300 ${openAccordion === index ? "rotate-180 text-primary" : "text-slate-400"}`} />
                    </button>
                    <AnimatePresence>
                      {openAccordion === index && (
                        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden bg-slate-50/50">
                          <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">{detail.content}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}