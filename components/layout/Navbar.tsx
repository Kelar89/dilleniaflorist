'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Home, LayoutGrid, MessageCircle, Sparkles } from "lucide-react";
import { useCart } from "@/components/context/CartContext";

export default function Navbar() {
  const { openCart, cartCount } = useCart();
  const pathname = usePathname(); // Untuk mendeteksi halaman aktif agar ikon menyala

  return (
    <>
      {/* 1. TOP HEADER (Tetap muncul di Desktop & Mobile) */}
      <header className="fixed top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary tracking-tight">
            <div className="relative w-8 h-8 flex items-center justify-center bg-primary/10 rounded-md overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Dillenia Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
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
            <Link href="/wedding" className="hover:text-primary transition-colors">Pernikahan</Link>
            <Link href="/corporate" className="hover:text-primary transition-colors">Korporat</Link>
          </nav>

          {/* Icons & CTA (Hanya muncul di Desktop) */}
          <div className="hidden md:flex items-center gap-4 md:gap-6">
            
            {/* Tombol Keranjang Belanja Desktop */}
            <button 
              onClick={openCart} 
              className="relative p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Tas Kurasi"
            >
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-sm ring-2 ring-background">
                  {cartCount}
                </span>
              )}
            </button>

            <Link href="/custom" className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:bg-accent transition-all font-semibold shadow-sm text-sm">
              <Sparkles size={16}/> Konsultasi
            </Link>
          </div>
        </div>
      </header>

      {/* 2. BOTTOM NAVIGATION BAR (Khusus Layar HP / Mobile App-like) */}
      <nav className="md:hidden fixed bottom-0 left-0 z-40 w-full bg-white/90 backdrop-blur-lg border-t border-slate-200 pb-safe pt-2 shadow-[0_-10px_20px_-15px_rgba(0,0,0,0.2)]">
        <div className="flex justify-around items-center h-16 px-2">
          
          <Link href="/" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${pathname === '/' ? 'text-primary' : 'text-slate-400'}`}>
            <Home size={22} className={pathname === '/' ? 'fill-primary/20' : ''} />
            <span className="text-[10px] font-medium">Beranda</span>
          </Link>

          <Link href="/products" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${pathname?.includes('/products') ? 'text-primary' : 'text-slate-400'}`}>
            <LayoutGrid size={22} className={pathname?.includes('/products') ? 'fill-primary/20' : ''} />
            <span className="text-[10px] font-medium">Koleksi</span>
          </Link>

          <Link href="/custom" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${pathname?.includes('/custom') ? 'text-primary' : 'text-slate-400'}`}>
            <MessageCircle size={22} className={pathname?.includes('/custom') ? 'fill-primary/20' : ''} />
            <span className="text-[10px] font-medium">Konsultasi</span>
          </Link>

          {/* Tombol Keranjang Belanja Mobile (Berada di jangkauan jempol terdekat) */}
          <button onClick={openCart} className="flex flex-col items-center justify-center w-full h-full space-y-1 text-slate-400 relative">
            <div className="relative">
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white shadow-sm ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium">Reservasi</span>
          </button>

        </div>
      </nav>
    </>
  );
}