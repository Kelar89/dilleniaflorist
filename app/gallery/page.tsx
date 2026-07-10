'use client';

import { motion } from "framer-motion";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop", title: "Hand Bouquet Pengantin", category: "Wedding" },
  { id: 2, src: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=800&auto=format&fit=crop", title: "Anggrek Meja Premium", category: "Corporate" },
  { id: 3, src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop", title: "Mawar Putih Klasik", category: "Bunga Meja" },
  { id: 4, src: "https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?q=80&w=800&auto=format&fit=crop", title: "Rangkaian Modern", category: "Custom" },
  { id: 5, src: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800&auto=format&fit=crop", title: "Dekorasi Sudut Ruangan", category: "Corporate" },
  { id: 6, src: "https://images.unsplash.com/photo-1561181286-d3fee7d55ef6?q=80&w=800&auto=format&fit=crop", title: "Standing Flower", category: "Grand Opening" },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24 pb-20">
      <section className="container mx-auto px-4 md:px-8 mb-12">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Galeri <span className="text-primary">Karya</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Jelajahi rekam jejak dedikasi kami dalam merangkai keindahan untuk berbagai momen istimewa.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8">
        {/* Layout Grid Masonry Sederhana */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-muted aspect-square sm:aspect-auto sm:h-80"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Overlay Informasi muncul saat di-hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">{img.category}</span>
                <h3 className="text-foreground font-semibold text-lg">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}