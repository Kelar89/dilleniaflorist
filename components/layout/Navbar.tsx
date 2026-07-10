'use client';

import Link from "next/link";
import { ShoppingBag, Menu } from "lucide-react";
import { useCart } from "@/components/context/CartContext";

export default function Navbar() {
  const { openCart, cartCount } = useCart();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        
        {/* Logo & Brand Name */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary tracking-tight">
          <div className="relative w-8 h-8 flex items-center justify-center bg-primary/10 rounded-md overflow-hidden">
            {/* Sistem otomatis mencari logo.png di folder public */}
            <img 
              src="/logo.png" 
              alt="Dillenia Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback: Jika logo.png belum ada, tampilkan huruf "D"
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<span class="text-primary text-lg">D</span>';
              }}
            />
          </div>
          Dillenia.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center font-medium text-sm text-muted-foreground">
          <Link href="/products" className="hover:text-primary transition-colors">Koleksi Bunga</Link>
          <Link href="/wedding" className="hover:text-primary transition-colors">Wedding</Link>
          <Link href="/corporate" className="hover:text-primary transition-colors">Corporate</Link>
        </nav>

        {/* Icons & CTA */}
        <div className="flex items-center gap-4 md:gap-6">
          
          {/* Tombol Keranjang Belanja */}
          <button 
            onClick={openCart} 
            className="relative p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Keranjang Belanja"
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-sm ring-2 ring-background">
                {cartCount}
              </span>
            )}
          </button>

          <Link href="/custom" className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:bg-accent transition-all font-semibold shadow-sm text-sm">
            Konsultasi
          </Link>
          
          <button className="md:hidden p-2 text-foreground">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}