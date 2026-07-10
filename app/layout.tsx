import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import MobileNav from "@/components/layout/MobileNav";
import ScrollToTop from "@/components/ui/ScrollToTop"; // Komponen baru
import { CartProvider } from "@/components/context/CartContext";
import CartDrawer from "@/components/ui/CartDrawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dillenia Florist | Premium & Elegant Floral Arrangements",
  description: "Pesan bunga premium untuk momen spesial Anda. Layanan florist profesional, elegan, dan terpercaya di Jakarta dan Tangerang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Florist",
    "name": "Dillenia Florist",
    "image": "https://dillenia.id/logo.png",
    "@id": "https://dillenia.id",
    "url": "https://dillenia.id",
    "telephone": "+6285894448143",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Raya Cipadu, Kec. Larangan",
      "addressLocality": "Tangerang",
      "addressRegion": "Banten",
      "postalCode": "15155",
      "addressCountry": "ID"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    "sameAs": ["https://instagram.com/amiumar_pro"]
  };

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <CartProvider>
          <Navbar />
          
          <main className="flex-grow pb-16 md:pb-0 pt-16">
            {children}
          </main>
          
          <Footer />
          <FloatingWhatsApp />
          <MobileNav />
          <ScrollToTop /> {/* Render tombol Back to Top di sini */}
          
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}