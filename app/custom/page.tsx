'use client';

import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Palette, CalendarHeart, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// 1. Definisi Skema Validasi menggunakan Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Nama harus diisi minimal 2 karakter." }),
  occasion: z.string().min(1, { message: "Silakan pilih jenis acara." }),
  budget: z.string().optional(),
  notes: z.string().optional(),
});

// Inferensi tipe TypeScript dari skema Zod
type FormData = z.infer<typeof formSchema>;

export default function CustomOrderPage() {
  // 2. Inisialisasi React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      occasion: "",
      budget: "",
      notes: "",
    },
  });

  // 3. Fungsi Eksekusi Pengiriman ke WhatsApp
  const onSubmit = (data: FormData) => {
    const phoneNumber = "6282196004768"; // Nomor CS Konsultasi
    const message = `Halo Tim Dillenia,\n\nSaya ingin berkonsultasi untuk pesanan kustom floral.\n\n*Detail Permintaan:*\n- Nama: ${data.name}\n- Jenis Acara: ${data.occasion}\n- Estimasi Budget: ${data.budget || "Belum ditentukan"}\n- Catatan/Tema Warna: ${data.notes || "-"}\n\nMohon informasi dan panduan lebih lanjut untuk proses perangkaian ini. Terima kasih.`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Wujudkan Visi <span className="text-primary">Floral Anda.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl"
          >
            Setiap momen memiliki ceritanya sendiri. Bicarakan visi, palet warna, dan gaya yang Anda inginkan, dan biarkan artisan kami merangkainya menjadi kenyataan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Kolom Kiri: Visual & Informasi */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="relative h-[300px] w-full rounded-3xl overflow-hidden shadow-xl mb-4">
              <img 
                src="https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?q=80&w=800&auto=format&fit=crop" 
                alt="Proses Desain Floral Custom" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Bagaimana Prosesnya?</h3>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">1. Konsultasi Visi</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Ceritakan tentang acara Anda, preferensi bunga, dan anggaran. Tim kami akan memberikan saran terbaik yang sesuai dengan kebutuhan Anda.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Palette size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">2. Curation & Desain</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Artisan kami mulai menyeleksi bunga Grade A terbaik dari petani lokal maupun impor untuk menyesuaikan palet warna yang disepakati.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">3. Eksekusi & Pengiriman</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Rangkaian dieksekusi dengan tingkat presisi tinggi beberapa jam sebelum pengiriman agar kesegaran bunga tetap prima saat acara berlangsung.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Formulir Tervalidasi */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 bg-card border border-border rounded-3xl p-6 md:p-10 shadow-2xl shadow-primary/5"
          >
            <h3 className="text-2xl font-bold mb-2">Mulai Konsultasi Anda</h3>
            <p className="text-muted-foreground mb-8 text-sm">Isi detail di bawah ini agar kami dapat memberikan solusi floral yang paling tepat.</p>
            
            {/* Form dibungkus oleh handleSubmit dari React Hook Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Field: Nama */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground">Nama Lengkap <span className="text-destructive">*</span></label>
                <input 
                  type="text" 
                  id="name" 
                  {...register("name")}
                  placeholder="Masukkan nama Anda"
                  className={`w-full px-4 py-3 bg-background border rounded-xl focus:outline-none focus:ring-2 transition-colors ${
                    errors.name ? "border-destructive focus:ring-destructive/50" : "border-border focus:ring-primary/50 focus:border-primary"
                  }`}
                />
                {errors.name && (
                  <p className="text-destructive text-sm flex items-center gap-1 mt-1">
                    <AlertCircle size={14} /> {errors.name.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Field: Jenis Acara */}
                <div className="space-y-2">
                  <label htmlFor="occasion" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <CalendarHeart size={16} className="text-primary" />
                    Jenis Acara <span className="text-destructive">*</span>
                  </label>
                  <select 
                    id="occasion" 
                    {...register("occasion")}
                    className={`w-full px-4 py-3 bg-background border rounded-xl focus:outline-none focus:ring-2 transition-colors appearance-none ${
                      errors.occasion ? "border-destructive focus:ring-destructive/50" : "border-border focus:ring-primary/50 focus:border-primary"
                    }`}
                  >
                    <option value="" disabled>Pilih acara...</option>
                    <option value="Pernikahan (Wedding)">Pernikahan (Wedding)</option>
                    <option value="Lamaran (Engagement)">Lamaran (Engagement)</option>
                    <option value="Acara Korporat">Acara Korporat</option>
                    <option value="Grand Opening">Grand Opening</option>
                    <option value="Ulang Tahun">Ulang Tahun</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                  {errors.occasion && (
                    <p className="text-destructive text-sm flex items-center gap-1 mt-1">
                      <AlertCircle size={14} /> {errors.occasion.message}
                    </p>
                  )}
                </div>

                {/* Field: Budget */}
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-semibold text-foreground">Estimasi Budget</label>
                  <select 
                    id="budget" 
                    {...register("budget")}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none"
                  >
                    <option value="" disabled>Pilih range budget...</option>
                    <option value="Di bawah Rp 2.000.000">Di bawah Rp 2.000.000</option>
                    <option value="Rp 2.000.000 - Rp 5.000.000">Rp 2.000.000 - Rp 5.000.000</option>
                    <option value="Rp 5.000.000 - Rp 10.000.000">Rp 5.000.000 - Rp 10.000.000</option>
                    <option value="Di atas Rp 10.000.000">Di atas Rp 10.000.000</option>
                  </select>
                </div>
              </div>

              {/* Field: Catatan */}
              <div className="space-y-2">
                <label htmlFor="notes" className="text-sm font-semibold text-foreground">Detail Tema & Warna (Opsional)</label>
                <textarea 
                  id="notes" 
                  rows={4}
                  {...register("notes")}
                  placeholder="Contoh: Saya ingin menggunakan mawar putih dan anggrek dengan nuansa elegan minimalis."
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                />
              </div>

              {/* Tombol Submit */}
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:bg-accent transition-colors shadow-lg hover:shadow-xl group mt-4"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                Kirim via WhatsApp
              </button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                Dengan menekan tombol di atas, Anda akan dialihkan secara aman ke WhatsApp.
              </p>
            </form>

          </motion.div>
        </div>
      </div>
    </div>
  );
}