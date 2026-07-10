import { Metadata } from 'next'

// Definisi tipe data untuk Next.js 15+ di mana params adalah Promise
type Props = {
  params: Promise<{ id: string }>
}

// Metadata Dinamis dengan dukungan Asynchronous
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Wajib melakukan await pada params di versi Next.js terbaru
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  // Fallback jika ID tidak ditemukan
  if (!id) {
    return {
      title: 'Produk Tidak Ditemukan | Dillenia Florist',
    };
  }

  // Membersihkan slug menjadi teks normal (Contoh: "midnight-sapphire" -> "Midnight Sapphire")
  const productTitle = id
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${productTitle} | Dillenia Florist`,
    description: `Pesan rangkaian bunga eksklusif ${productTitle} hanya di Dillenia Florist. Tersedia layanan Same-Day Delivery.`,
    openGraph: {
      title: `${productTitle} - Dillenia Florist`,
      description: `Rangkaian premium ${productTitle} untuk momen spesial Anda.`,
      type: 'website',
    },
  }
}

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}