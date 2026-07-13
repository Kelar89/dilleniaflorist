import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// Pastikan path ini sesuai dengan letak CartContext Anda
import { CartProvider } from "@/components/context/CartContext"; 
// Jika Anda memiliki Navbar atau Footer, Anda bisa mengimpornya kembali di bawah baris ini

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dillenia Florist",
  description: "Kurasi mahakarya floral premium untuk setiap momen berharga Anda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* ========================================================================= */}
        {/* 1. META PIXEL (FACEBOOK) - DUMMY TRACKING */}
        {/* CARA UPDATE: Ubah teks 'GANTI-DENGAN-PIXEL-ID-ASLI' dengan nomor Pixel Anda */}
        {/* ========================================================================= */}
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

        {/* ========================================================================= */}
        {/* 2. GOOGLE TAG MANAGER (GTM) - DUMMY TRACKING */}
        {/* CARA UPDATE: Ubah teks 'GTM-XXXXXXX' dengan nomor Container GTM Anda */}
        {/* ========================================================================= */}
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
      
      <body className={inter.className}>
        {/* ========================================================================= */}
        {/* NOSCRIPT GOOGLE TAG MANAGER (Penopang saat JavaScript pengunjung mati) */}
        {/* CARA UPDATE: Ubah teks 'GTM-XXXXXXX' di bawah ini agar sama dengan ID di atas */}
        {/* ========================================================================= */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <CartProvider>
          {/* Tambahkan kembali komponen <Navbar /> Anda di sini jika ada */}
          
          {children}
          
          {/* Tambahkan kembali komponen <Footer /> Anda di sini jika ada */}
        </CartProvider>
      </body>
    </html>
  );
}