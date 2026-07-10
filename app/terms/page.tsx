import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl prose prose-slate dark:prose-invert">
        <h1 className="text-4xl font-bold mb-8">Syarat & Ketentuan</h1>
        <p className="text-muted-foreground mb-8">Pembaruan Terakhir: {new Date().toLocaleDateString('id-ID')}</p>
        
        <div className="space-y-8 text-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Ketentuan Umum</h2>
            <p>Dengan mengakses dan menggunakan layanan Dillenia Florist, Anda menyetujui seluruh syarat dan ketentuan yang berlaku. Layanan kami mencakup perangkaian, penjualan, dan pengiriman produk floral di wilayah yang ditentukan.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Kebijakan Penggantian Bunga (Substitution)</h2>
            <p>Bunga adalah produk alam yang ketersediaannya bergantung pada musim dan kondisi pasar. Jika bunga utama yang dipesan tidak tersedia, artisan kami berhak menggantinya dengan bunga jenis lain yang memiliki nilai estetika dan harga setara atau lebih tinggi, tanpa mengubah konsep warna dasar.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Pengiriman dan Garansi</h2>
            <p>Kami menjamin kesegaran bunga hingga tiba di titik pengiriman. Komplain terkait kerusakan fisik produk hanya akan diproses jika diajukan maksimal 2 (dua) jam setelah produk diterima, disertai dengan bukti foto dan video *unboxing*.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Pembatalan & Pengembalian Dana</h2>
            <p>Pesanan yang sudah diproses (masuk tahap perangkaian) tidak dapat dibatalkan atau di-refund. Pembatalan hanya dapat dilakukan minimal 24 jam sebelum jadwal pengiriman.</p>
          </section>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/" className="text-primary hover:underline font-medium">Kembali ke Beranda</Link>
        </div>
      </div>
    </div>
  );
}