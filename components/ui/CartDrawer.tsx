'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Minus, Plus, ShoppingBag, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
import { useCart } from '@/components/context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, cartTotal } = useCart();
  
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    metode: 'Pickup', 
    alamat: '',
    tanggal: '',
    jam: '',
    kartuUcapan: '',
    catatan: ''
  });

  const formatRupiah = (num: number) => 
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(num);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckoutWA = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cart.length === 0) return;
    if (!formData.nama || !formData.whatsapp || !formData.tanggal || !formData.jam) {
      alert("Mohon lengkapi Nama, WhatsApp, Tanggal, dan Jam Pengiriman.");
      return;
    }
    if (formData.metode === 'Delivery' && !formData.alamat) {
      alert("Mohon isi alamat pengiriman secara lengkap agar kurir kami dapat melayani dengan presisi.");
      return;
    }

    // Merakit daftar barang sesuai pesanan user
    let orderList = cart.map((item) => 
      `- ${item.title}\n  (${item.variant})\n  Jumlah: ${item.quantity} x ${formatRupiah(item.price)}`
    ).join('\n\n');

    // Format Pesan Premium
    const message = `✨ *RESERVASI MAHAKARYA*
━━━━━━━━━━━━━━

📋 *DETAIL KARYA*

${orderList}

━━━━━━━━━━━━━━
💰 *TOTAL*

Subtotal : ${formatRupiah(cartTotal)}
Ongkir   : (Dihitung oleh Spesialis)
Total    : (Menunggu Konfirmasi)

━━━━━━━━━━━━━━
👤 *INFORMASI KLIEN*

Nama     : ${formData.nama}
WhatsApp : ${formData.whatsapp}
Metode   : ${formData.metode === 'Delivery' ? 'Pengiriman Eksklusif (Delivery)' : 'Ambil di Butik (Cikini)'}
Tanggal  : ${formData.tanggal}
Jam      : ${formData.jam}

━━━━━━━━━━━━━━
💬 *PERSONALISASI*

Kartu Ucapan:
"${formData.kartuUcapan || 'Tidak ada'}"

Catatan Khusus:
${formData.catatan || 'Tidak ada'}

━━━━━━━━━━━━━━
Terima kasih telah mempercayakan momen berharga Anda kepada Dillenia.`;

    // Mengarahkan ke Nomor Konsultan Personal (Admin 1)
    const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_ORDER || "628158766267";
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
          />

          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white border-l border-slate-200 shadow-2xl z-[70] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-lg font-bold flex items-center gap-2 text-slate-800">
                <Sparkles size={18} className="text-primary" /> Tas Kurasi Anda
              </h2>
              <button onClick={closeCart} className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-6 pb-20">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-300">
                    <Sparkles size={32} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-slate-800">Belum Ada Mahakarya Terpilih</h3>
                  <p className="text-sm text-slate-500 mb-6">Jelajahi koleksi kami untuk menemukan rangkaian yang tepat.</p>
                  <button onClick={closeCart} className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors shadow-md">
                    Eksplorasi Koleksi
                  </button>
                </div>
              ) : (
                <div className="p-6 flex flex-col gap-8">
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 border border-slate-100 rounded-2xl bg-white shadow-sm">
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-50 shrink-0">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-bold text-sm text-slate-800 leading-tight">{item.title}</h4>
                              <p className="text-xs text-slate-500 mt-1">Varian: {item.variant}</p>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="text-red-400 p-1 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors">
                              <Trash2 size={14} />
                            </button>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="font-bold text-primary text-sm">{formatRupiah(item.price)}</span>
                            <div className="flex items-center bg-slate-50 rounded-full p-0.5 border border-slate-200">
                              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 flex items-center justify-center rounded-full text-xs text-slate-600 hover:bg-white hover:shadow-sm"><Minus size={12}/></button>
                              <span className="w-6 text-center text-xs font-bold text-slate-800">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 flex items-center justify-center rounded-full text-xs text-slate-600 hover:bg-white hover:shadow-sm"><Plus size={12}/></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <h3 className="font-bold mb-5 flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500">Detail Reservasi & Pengiriman</h3>
                    <form id="checkout-form" onSubmit={handleCheckoutWA} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700">Nama Lengkap *</label>
                          <input required type="text" name="nama" value={formData.nama} onChange={handleInputChange} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all" placeholder="Nama Anda" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700">WhatsApp *</label>
                          <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all" placeholder="08..." />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700">Tanggal Kirim *</label>
                          <input required type="date" name="tanggal" value={formData.tanggal} onChange={handleInputChange} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-slate-700" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-700">Waktu (Jam) *</label>
                          <input required type="time" name="jam" value={formData.jam} onChange={handleInputChange} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-slate-700" />
                        </div>
                      </div>

                      <div className="space-y-2 pt-2">
                        <label className="text-xs font-bold text-slate-700">Metode Pengiriman *</label>
                        <div className="flex flex-col gap-2">
                          <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${formData.metode === 'Delivery' ? 'border-primary bg-primary/5' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
                            <input type="radio" name="metode" value="Delivery" checked={formData.metode === 'Delivery'} onChange={handleInputChange} className="text-primary accent-primary w-4 h-4" /> 
                            <span className="text-sm font-medium text-slate-800">Pengiriman Eksklusif (Delivery)</span>
                          </label>
                          <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${formData.metode === 'Pickup' ? 'border-primary bg-primary/5' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
                            <input type="radio" name="metode" value="Pickup" checked={formData.metode === 'Pickup'} onChange={handleInputChange} className="text-primary accent-primary w-4 h-4" /> 
                            <span className="text-sm font-medium text-slate-800">Ambil di Butik (Cikini)</span>
                          </label>
                        </div>
                      </div>

                      {formData.metode === 'Delivery' && (
                        <div className="space-y-1.5 pt-2">
                          <label className="text-xs font-bold text-slate-700">Alamat Lengkap *</label>
                          <textarea required name="alamat" value={formData.alamat} onChange={handleInputChange} rows={3} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none resize-none transition-all" placeholder="Detail alamat pengiriman..." />
                        </div>
                      )}

                      <div className="space-y-1.5 pt-2">
                        <label className="text-xs font-bold text-slate-700">Pesan di Kartu Ucapan</label>
                        <textarea name="kartuUcapan" value={formData.kartuUcapan} onChange={handleInputChange} rows={2} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none resize-none transition-all" placeholder="Tuliskan pesan berharga Anda..." />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Catatan Personalisasi (Opsional)</label>
                        <input type="text" name="catatan" value={formData.catatan} onChange={handleInputChange} className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all" placeholder="Permintaan warna pita / jenis kertas..." />
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-slate-200 bg-white shadow-[0_-10px_20px_-15px_rgba(0,0,0,0.05)]">
                <div className="flex justify-between text-sm mb-2 text-slate-500">
                  <span>Subtotal</span>
                  <span className="font-medium text-slate-800">{formatRupiah(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-sm mb-4 border-b border-slate-100 pb-4">
                  <span className="text-slate-500">Biaya Pengiriman</span>
                  <span className="text-primary italic flex items-center gap-1 font-medium"><AlertCircle size={12}/> Dihitung oleh Spesialis</span>
                </div>
                <div className="flex justify-between items-end mb-6">
                  <span className="font-bold text-slate-800">Total</span>
                  <span className="text-2xl font-bold text-primary">{formatRupiah(cartTotal)}</span>
                </div>
                <button type="submit" form="checkout-form" className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-full font-bold text-sm hover:bg-slate-800 transition-colors shadow-lg">
                  <MessageCircle size={18} /> Atur Pengiriman via Konsultan
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}