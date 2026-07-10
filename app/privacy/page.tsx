import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl prose prose-slate dark:prose-invert">
        <h1 className="text-4xl font-bold mb-8">Kebijakan Privasi</h1>
        <p className="text-muted-foreground mb-8">Pembaruan Terakhir: {new Date().toLocaleDateString('id-ID')}</p>
        
        <div className="space-y-8 text-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4">Pengumpulan Data</h2>
            <p>Kami mengumpulkan informasi yang Anda berikan secara sukarela saat melakukan pemesanan via formulir atau WhatsApp, termasuk namun tidak terbatas pada: Nama, Nomor Telepon, Alamat Pengiriman, dan Detail Acara.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Penggunaan Data</h2>
            <p>Data pribadi Anda digunakan secara eksklusif untuk tujuan: memproses transaksi, mengatur pengiriman, dan memberikan layanan pelanggan. Kami tidak menjual, menyewakan, atau menukar data pribadi Anda kepada pihak ketiga mana pun.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Keamanan Data</h2>
            <p>Kami menerapkan langkah-langkah keamanan standar industri untuk melindungi informasi Anda. Komunikasi transaksi dialihkan secara aman melalui end-to-end encryption milik WhatsApp.</p>
          </section>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/" className="text-primary hover:underline font-medium">Kembali ke Beranda</Link>
        </div>
      </div>
    </div>
  );
}