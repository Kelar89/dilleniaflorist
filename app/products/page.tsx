'use client';

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, SlidersHorizontal, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { allProductsDatabase } from "@/components/context/productsData";

const categories = [
  { id: "semua", label: "Semua" },
  { id: "bunga-meja", label: "Bunga Meja" },
  { id: "wedding", label: "Pernikahan" },
  { id: "corporate", label: "Korporat" }
];

const colors = ["Semua", "Putih", "Biru", "Kuning", "Pink", "Merah"];

export default function ProductsPage() {
  // State Filter & Load More
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("semua");
  const [selectedColor, setSelectedCategoryColor] = useState("Semua");
  const [maxPrice, setMaxPrice] = useState<number>(4000000);
  const [sortBy, setSortBy] = useState("terbaru");
  const [visibleCount, setVisibleCount] = useState(6); // Paginasi Load More awal 6 item

  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(number);
  };

  // Proses Filter Multi-Sektor Dinamis
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...allProductsDatabase];

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => p.title.toLowerCase().includes(q));
    }
    if (activeCategory !== "semua") {
      result = result.filter(p => p.category === activeCategory);
    }
    if (selectedColor !== "Semua") {
      result = result.filter(p => p.color === selectedColor);
    }
    result = result.filter(p => p.price <= maxPrice);

    if (sortBy === "harga-terendah") result.sort((a, b) => a.price - b.price);
    if (sortBy === "harga-tertinggi") result.sort((a, b) => b.price - a.price);
    if (sortBy === "nama-az") result.sort((a, b) => a.title.localeCompare(b.title));

    return result;
  }, [searchQuery, activeCategory, selectedColor, maxPrice, sortBy]);

  const pagedProducts = useMemo(() => {
    return filteredAndSortedProducts.slice(0, visibleCount);
  }, [filteredAndSortedProducts, visibleCount]);

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24 pb-16">
      
      {/* Header */}
      <section className="container mx-auto px-4 md:px-8 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Koleksi <span className="text-primary">Eksklusif</span></h1>
        <p className="text-muted-foreground text-lg">Temukan rangkaian bunga premium pilihan hasil kurasi artisan florist kami.</p>
      </section>

      {/* FILTER PANEL STICKY BAR */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-y border-border py-6 mb-8 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 space-y-4">
          <div className="flex flex-col xl:flex-row gap-4 items-center justify-between">
            
            {/* Search */}
            <div className="relative w-full xl:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input type="text" placeholder="Cari nama bunga..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2.5 bg-muted/60 border border-border rounded-full text-sm focus:outline-none" />
            </div>

            {/* Kategori, Warna, Slider Harga */}
            <div className="flex flex-wrap items-center gap-4 w-full xl:w-auto">
              {/* Cat */}
              <div className="flex border border-border rounded-full p-1 bg-muted/40">
                {categories.map(c => (
                  <button key={c.id} onClick={() => { setActiveCategory(c.id); setVisibleCount(6); }} className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${activeCategory === c.id ? "bg-foreground text-background" : "text-muted-foreground"}`}>{c.label}</button>
                ))}
              </div>

              {/* Color Filter */}
              <select value={selectedColor} onChange={(e) => { setSelectedCategoryColor(e.target.value); setVisibleCount(6); }} className="px-4 py-2 text-xs font-semibold border border-border rounded-full bg-background outline-none">
                {colors.map(col => <option key={col} value={col}>Warna: {col}</option>)}
              </select>

              {/* Price Filter Slider */}
              <div className="flex items-center gap-2 bg-muted/40 border border-border px-4 py-1.5 rounded-full text-xs">
                <span className="font-semibold text-muted-foreground">Maks:</span>
                <input type="range" min={400000} max={4000000} step={100000} value={maxPrice} onChange={(e) => { setMaxPrice(Number(e.target.value)); setVisibleCount(6); }} className="accent-primary w-24 cursor-pointer" />
                <span className="font-bold text-foreground">{formatRupiah(maxPrice)}</span>
              </div>

              {/* Sorting */}
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-2 text-xs font-semibold border border-border rounded-full bg-background outline-none">
                <option value="terbaru">Terbaru</option>
                <option value="harga-terendah">Harga Terendah</option>
                <option value="harga-tertinggi">Harga Tertinggi</option>
                <option value="nama-az">Nama A-Z</option>
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* GRID PRODUK */}
      <section className="container mx-auto px-4 md:px-8">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {pagedProducts.map((product) => (
              <motion.div key={product.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="group flex flex-col bg-card rounded-3xl overflow-hidden border border-border hover:shadow-2xl transition-shadow relative">
                <div className="relative h-80 w-full overflow-hidden bg-muted">
                  <Link href={`/products/${product.id}`} className="absolute inset-0 z-10" aria-label={product.title}></Link>
                  {/* Next Image Optimization Ready */}
                  <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, 33vw" priority className="object-cover group-hover:scale-102 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    {product.badge && <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase tracking-wider">{product.badge}</span>}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <div className="font-bold text-lg text-primary mb-4">{formatRupiah(product.price)}</div>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{product.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <Link href={`/products/${product.id}`} className="flex items-center justify-center py-3 bg-background border border-border text-foreground hover:bg-muted rounded-xl font-semibold text-sm">Detail</Link>
                    <Link href={`/products/${product.id}`} className="flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground hover:bg-accent rounded-xl font-semibold text-sm shadow-md"><ShoppingBag size={16} /> Pesan</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LOADING STATE - PAGINATION LOAD MORE BUTTON */}
        {filteredAndSortedProducts.length > visibleCount && (
          <div className="flex justify-center mt-16">
            <button onClick={() => setVisibleCount(prev => prev + 6)} className="px-8 py-3 bg-foreground text-background font-bold text-sm rounded-full hover:bg-primary hover:text-white transition-colors shadow-md">
              Muat Lebih Banyak Koleksi
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="py-24 text-center max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-2">Produk Tidak Ditemukan</h3>
            <p className="text-muted-foreground mb-6">Coba turunkan kriteria pencarian, tingkatkan rentang harga, atau reset filter Anda.</p>
            <button onClick={() => { setSearchQuery(""); setSelectedCategoryColor("Semua"); setMaxPrice(4000000); setActiveCategory("semua"); }} className="px-6 py-2.5 bg-primary text-white rounded-full text-xs font-bold">Reset Semua Filter</button>
          </div>
        )}
      </section>
    </div>
  );
}