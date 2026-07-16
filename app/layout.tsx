import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import { CartProvider } from "@/components/context/CartContext"; 
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
// INI KABEL YANG TERLUPAKAN: Mengimpor laci keranjang
import CartDrawer from "@/components/ui/CartDrawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dillenia Florist | Layanan Concierge Floral Premium",
  description: "Kurasi mahakarya floral premium untuk setiap momen berharga Anda. Layanan florist eksklusif dengan dedikasi pada detail dan estetika.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Florist",
    "name": "Dillenia Florist",
    "image": "https://dillenia.id/logo.png",
    "@id": "https://dillenia.id",
    "url": "https://dillenia.id",
    "telephone": "+6287734346287",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pasar Bunga Cikini",
      "addressLocality": "Jakarta",
      "addressRegion": "Jakarta",
      "addressCountry": "ID"
    },
    "priceRange": "$$$",
    "description": "Layanan florist premium dengan dedikasi pada detail dan estetika."
  };

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              
              fbq('init', 'GANTI-DENGAN-PIXEL-ID-ASLI'); 
              fbq('track', 'PageView');
            `,
          }}
        />

        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', 'GTM-XXXXXXX');
            `,
          }}
        />
      </head>
      
      <body className={inter.className} suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <CartProvider>
          <Navbar />
          
          <main>
            {children}
          </main>
          
          <Footer />
          
          <FloatingWhatsApp />
          
          {/* MENGAKTIFKAN LACI KERANJANG DI SINI */}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}