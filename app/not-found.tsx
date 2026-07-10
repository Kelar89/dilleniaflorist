import Link from 'next/link'
import { SearchX } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
      <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-8">
        <SearchX size={48} className="text-muted-foreground" />
      </div>
      <h1 className="text-5xl font-bold text-foreground mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-foreground mb-4">Halaman Tidak Ditemukan</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Maaf, halaman yang Anda cari mungkin telah dihapus, diubah namanya, atau tidak pernah ada.
      </p>
      <Link 
        href="/" 
        className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:bg-accent transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </div>
  )
}