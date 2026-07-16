import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    // Tambahkan pb-24 untuk mobile agar teks footer tidak tertutup oleh navigasi bawah
    <footer className="bg-white text-slate-800 border-t border-slate-200 pt-20 pb-24 md:pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-4 flex flex-col">
            <Link href="/" className="text-3xl font-bold text-primary tracking-tight mb-6">Dillenia.</Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm">Menyusun keindahan alam untuk mewakili perasaan terdalam Anda. Layanan florist premium dengan dedikasi pada detail dan estetika.</p>
          </div>

          <div className="md:col-span-2 flex flex-col">
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-900">Eksplorasi</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/products" className="hover:text-primary transition-colors">Koleksi Bunga</Link></li>
              <li><Link href="/wedding" className="hover:text-primary transition-colors">Pernikahan Sakral</Link></li>
              <li><Link href="/corporate" className="hover:text-primary transition-colors">Instalasi Korporat</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 flex flex-col">
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-900">Perusahaan</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/about" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col">
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-900">Layanan Klien</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">Toko: Pasar Bunga Cikini.<br/>Workshop: Puri Botanical, Dillenia 2 No 3.</span>
              </li>
              
              {/* NOMOR 1: Layanan Personal */}
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-700">Konsultan Floral Pribadi:</span>
                  <a href="https://wa.me/628158766267" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    +62 815-8766-267
                  </a>
                </div>
              </li>

              {/* NOMOR 2: Layanan Korporat */}
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-700">Kemitraan Korporat & Acara:</span>
                  <a href="https://wa.me/6287734346287" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    +62 877-3434-6287
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>hello@dillenia.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-100 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Dillenia Florist. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}