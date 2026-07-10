'use client';

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, ShoppingBag, ChevronDown, Star, Search, Link as LinkIcon, Eye, CheckCircle2, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/context/CartContext";
import { allProductsDatabase } from "@/components/context/productsData";

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();
  
  const product = useMemo(() => {
    return allProductsDatabase.find(p => p.id === params?.id) || allProductsDatabase[0];
  }, [params?.id]);

  const [activeImage, setActiveImage] = useState(0);
  const [activeVariant, setActiveVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [quickViewProduct, setQuickViewProduct] = useState<any | null>(null);
  const [showToast, setShowToast] = useState(false);

  const subtotal = activeVariant.price * quantity;

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
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-32 md:pb-24 relative">
      <AnimatePresence>
        {showToast && (
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-emerald-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 text-sm font-semibold">
            <CheckCircle2 size={18} /> Berhasil dimasukkan ke keranjang belanja!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 md:px-8 mt-8">
        <nav className="flex text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary">Beranda</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-primary">Koleksi</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-4">
            <div className="relative w-full aspect-[4/5] md:aspect-square bg-muted rounded-3xl overflow-hidden border">
              <Image src={product.images[activeImage] || product.images[0]} alt={product.title} fill priority className="object-cover" />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, idx) => (
                  <button key={idx} onClick={() => setActiveImage(idx)} className={`relative aspect-square rounded-xl overflow-hidden border-2 ${activeImage === idx ? "border-primary" : "border-transparent opacity-60"}`}>
                    <Image src={img} fill sizes="100px" className="object-cover" alt="Thumb" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-6 xl:col-span-5 relative">
            <div className="sticky top-40 flex flex-col">
              <div className="mb-6">
                <span className="text-primary text-sm font-bold uppercase tracking-wider block">{product.category.replace('-', ' ')}</span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{product.title}</h1>
                <div className="flex items-center gap-2 text-sm text-amber-500">
                  <Star size={16} className="fill-current" /> <span className="font-bold text-foreground">{product.rating}</span> <span className="text-muted-foreground">({product.reviews} Ulasan)</span>
                </div>
              </div>

              <div className="text-3xl font-bold text-foreground mb-4">{formatRupiah(activeVariant.price)}</div>
              <p className="text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-3">Varian Ukuran</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {product.variants.map((v) => (
                    <button key={v.id} onClick={() => setActiveVariant(v)} className={`p-3 rounded-xl border-2 text-center text-sm font-bold ${activeVariant.id === v.id ? "border-primary bg-primary/5 text-primary" : "border-border bg-card text-muted-foreground"}`}>{v.name}</button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-3">Kuantitas</h3>
                <div className="flex items-center bg-card border rounded-full p-1 w-max">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-10 h-10 flex items-center justify-center"><Minus size={16}/></button>
                  <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} className="w-10 h-10 flex items-center justify-center"><Plus size={16}/></button>
                </div>
              </div>

              {product.scarcity && (
                <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-4 py-3 rounded-xl mb-6 text-sm font-medium border border-amber-200">{product.scarcity}</div>
              )}

              <button onClick={handleAddToCartAction} className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:bg-accent shadow-lg mb-8">
                <ShoppingBag size={22} /> Tambahkan Ke Keranjang
              </button>

              <div className="flex items-center gap-4 mb-8 border-t border-border pt-6">
                <span className="text-sm font-medium text-muted-foreground">Bagikan:</span>
                <div className="flex gap-2">
                  <button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(window.location.href)}`)} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors"><ShoppingBag size={16}/></button>
                  <button onClick={() => window.open(`https://facebook.com/sharer/sharer.php?u=${window.location.href}`)} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </button>
                </div>
              </div>

              <div className="border-t border-border">
                {product.details.map((detail, index) => (
                  <div key={index} className="border-b border-border">
                    <button onClick={() => setOpenAccordion(openAccordion === index ? null : index)} className="flex items-center justify-between w-full py-4 text-left font-semibold text-foreground hover:text-primary transition-colors">
                      {detail.title} <ChevronDown size={18} className={`transition-transform duration-300 ${openAccordion === index ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                    </button>
                    <AnimatePresence>
                      {openAccordion === index && (
                        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                          <p className="pb-4 text-muted-foreground text-sm leading-relaxed">{detail.content}</p>
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