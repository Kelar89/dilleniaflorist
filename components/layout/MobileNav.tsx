'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Info, MessageCircle } from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();

  // Data menu navigasi bawah
  const navItems = [
    { name: "Beranda", href: "/", icon: Home },
    { name: "Koleksi", href: "/products", icon: LayoutGrid },
    { name: "Tentang", href: "/about", icon: Info },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-background/90 backdrop-blur-lg border-t border-border z-50 pb-safe">
      <div className="flex items-center justify-around h-16 px-2">
        {/* Link Internal */}
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon size={20} className={isActive ? "fill-primary/20" : ""} />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}

        {/* Tombol Aksi Utama (WhatsApp) - Tombol Menonjol */}
        <a 
          href="https://wa.me/6285894448143?text=Halo%20Dillenia,%20saya%20butuh%20bantuan%20pemesanan."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-full h-full space-y-1 text-[#25D366]"
        >
          <div className="bg-[#25D366]/10 p-1.5 rounded-full">
            <MessageCircle size={20} />
          </div>
          <span className="text-[10px] font-bold">Pesan</span>
        </a>
      </div>
    </div>
  );
}