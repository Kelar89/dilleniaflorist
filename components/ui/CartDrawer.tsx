'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Minus, Plus, ShoppingBag, MessageCircle, AlertCircle } from 'lucide-react';
import { useCart } from '@/components/context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, cartTotal } = useCart();
  
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    metode: 'Pickup', // Default sesuai referensi user
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
      alert("Mohon lengkapi Nama, WA, Tanggal, dan Jam.");
      return;
    }
    if (formData.metode === 'Delivery' && !formData.alamat) {
      alert("Mohon isi alamat pengiriman secara lengkap.");
      return;
    }

    // Merakit daftar barang sesuai pesanan user
    let orderList = cart.map((item) => 
      `- ${item.title}\n  (${item.variant})\n  Jumlah: ${item.quantity} x ${formatRupiah(item.price)}`
    ).join('\n\n');

    // Format Pesan Persis Sesuai Keinginan User
    const message = `🛍️ *PESANAN BARU*
━━━━━━━━━━━━━━

📋 *DETAIL PESANAN*

${orderList}

━━━━━━━━━━━━━━
💰 *TOTAL*

Subtotal : ${formatRupiah(cartTotal)}
Ongkir   : (Menunggu Admin)
Total    : (Menunggu Admin)

━━━━━━━━━━━━━━
👤 *DATA PEMESAN*

Nama      : ${formData.nama}
WhatsApp : ${formData.whatsapp}
Metode   : ${formData.metode === 'Delivery' ? 'Diantar (Delivery)' : 'Ambil di Toko (Cikini)'}
Tanggal  : ${formData.tanggal}
Jam      : ${formData.jam}

━━━━━━━━━━━━━━
💬 *CATATAN TAMBAHAN*

Kartu Ucapan:
"${formData.kartuUcapan || 'Tidak ada'}"

Catatan:
${formData.catatan || 'Tidak ada'}

━━━━━━━━━━━━━━
Terima kasih.`;

    const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_ORDER || "6287734346287";
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
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60]"
          />

          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border shadow-2xl z-[70] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border bg-muted/30">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <ShoppingBag size={20} /> Keranjang Belanja
              </h2>
              <button onClick={closeCart} className="p-2 hover:bg-muted rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-center px-6">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4 text-muted-foreground">
                    <ShoppingBag size={32} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Keranjang Kosong</h3>
                  <button onClick={closeCart} className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold">Mulai Belanja</button>
                </div>
              ) : (
                <div className="p-6 flex flex-col gap-8">
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 border border-border rounded-2xl bg-background">
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted shrink-0">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-bold text-sm leading-tight">{item.title}</h4>
                              <p className="text-xs text-muted-foreground mt-1">Varian: {item.variant}</p>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="text-destructive p-1 hover:bg-destructive/10 rounded-md">
                              <Trash2 size={14} />
                            </button>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="font-bold text-primary text-sm">{formatRupiah(item.price)}</span>
                            <div className="flex items-center bg-muted rounded-full p-0.5 border border-border">
                              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 flex items-center justify-center rounded-full text-xs"><Minus size={12}/></button>
                              <span className="w-6 text-center text-xs font-bold">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 flex items-center justify-center rounded-full text-xs"><Plus size={12}/></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-muted/30 p-5 rounded-3xl border border-border">
                    <h3 className="font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">Detail Pengiriman</h3>
                    <form id="checkout-form" onSubmit={handleCheckoutWA} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold">Nama Pemesan *</label>
                          <input required type="text" name="nama" value={formData.nama} onChange={handleInputChange} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:border-primary focus:outline-none" placeholder="Nama Anda" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold">Nomor WA *</label>
                          <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:border-primary focus:outline-none" placeholder="08..." />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold">Tanggal Kirim *</label>
                          <input required type="date" name="tanggal" value={formData.tanggal} onChange={handleInputChange} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:border-primary focus:outline-none" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold">Jam *</label>
                          <input required type="time" name="jam" value={formData.jam} onChange={handleInputChange} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:border-primary focus:outline-none" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold">Metode *</label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 text-sm cursor-pointer">
                            <input type="radio" name="metode" value="Delivery" checked={formData.metode === 'Delivery'} onChange={handleInputChange} className="text-primary accent-primary" /> Diantar (Delivery)
                          </label>
                          <label className="flex items-center gap-2 text-sm cursor-pointer">
                            <input type="radio" name="metode" value="Pickup" checked={formData.metode === 'Pickup'} onChange={handleInputChange} className="text-primary accent-primary" /> Ambil di Toko (Cikini)
                          </label>
                        </div>
                      </div>

                      {formData.metode === 'Delivery' && (
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold">Alamat Lengkap *</label>
                          <textarea required name="alamat" value={formData.alamat} onChange={handleInputChange} rows={2} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:border-primary focus:outline-none resize-none" placeholder="Alamat rumah..." />
                        </div>
                      )}

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold">Pesan di Kartu Ucapan</label>
                        <textarea name="kartuUcapan" value={formData.kartuUcapan} onChange={handleInputChange} rows={2} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:border-primary focus:outline-none resize-none" placeholder="Tulis ucapan..." />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold">Catatan Khusus</label>
                        <input type="text" name="catatan" value={formData.catatan} onChange={handleInputChange} className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:border-primary focus:outline-none" placeholder="Catatan tambahan pita/warna..." />
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-border bg-background">
                <div className="flex justify-between text-sm mb-2 text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{formatRupiah(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-sm mb-4 text-muted-foreground border-b border-border/50 pb-4">
                  <span>Ongkir</span>
                  <span className="text-primary italic flex items-center gap-1"><AlertCircle size={12}/> Menunggu Admin</span>
                </div>
                <div className="flex justify-between items-end mb-6">
                  <span className="font-bold">Total</span>
                  <span className="text-2xl font-bold text-primary">{formatRupiah(cartTotal)}</span>
                </div>
                <button type="submit" form="checkout-form" className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:bg-accent shadow-lg">
                  <MessageCircle size={20} /> Checkout via WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}