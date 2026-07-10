'use client'

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
      <div className="w-24 h-24 bg-red-50 dark:bg-red-950/30 rounded-full flex items-center justify-center mb-8">
        <AlertTriangle size={48} className="text-red-500" />
      </div>
      <h2 className="text-3xl font-bold text-foreground mb-4">Terjadi Kesalahan Sistem</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Sistem kami mengalami gangguan teknis sementara. Tim kami telah diberitahu mengenai masalah ini.
      </p>
      <button
        onClick={() => reset()}
        className="bg-foreground text-background px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        Coba Muat Ulang
      </button>
    </div>
  )
}