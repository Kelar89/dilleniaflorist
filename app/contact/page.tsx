'use client';

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Hubungi <span className="text-primary">Kami</span></h1>
          <p className="text-muted-foreground text-lg">Pusat layanan informasi toko fisik Cikini dan workshop pusat Puri Botanical.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold border-b pb-4">Informasi Operasional</h2>
            <div className="flex gap-4 items-start">
              <Phone className="text-primary w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Layanan Utama</h3>
                <p className="text-muted-foreground mt-1">Admin 1: +62 877-3434-6287</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Clock className="text-primary w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Jam Kerja</h3>
                <p className="text-muted-foreground mt-1">Setiap Hari: 08.00 - 20.00 WIB</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold border-b pb-4">Lokasi Resmi</h2>
            <div className="flex gap-4 items-start">
              <MapPin className="text-primary w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Alamat Toko</h3>
                <p className="text-muted-foreground mt-1 leading-relaxed">Pasar bunga Cikini, Menteng, Jakarta Pusat.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <MapPin className="text-primary w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Workshop Studio</h3>
                <p className="text-muted-foreground mt-1 leading-relaxed">Puri botanical .dillenia 2 no3, Kembangan, Jakarta Barat.</p>
              </div>
            </div>
          </div>
        </div>

        {/* GOOGLE MAPS IFRAME INTEGRASI ASLI (STABIL) */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full h-96 bg-muted rounded-3xl border border-border overflow-hidden shadow-md relative">
          <iframe 
            src="https://maps.google.com/maps?q=Pasar%20Bunga%20Cikini,%20Jakarta&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            className="w-full h-full border-none"
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Pasar Bunga Cikini Dillenia"
          />
        </motion.div>
      </div>
    </div>
  );
}