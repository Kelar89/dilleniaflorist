'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 1. Tipe Data
export type CartItem = {
  id: string; 
  productId: string;
  title: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
};

// 2. Inisialisasi Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// 3. Provider Component
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ambil data dari Local Storage saat pertama kali dimuat
  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem('dillenia_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Gagal membaca Local Storage", error);
      }
    }
  }, []);

  // Simpan ke Local Storage setiap kali cart berubah
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('dillenia_cart', JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (newItem: Omit<CartItem, 'id'>) => {
    setCart((prev) => {
      const uniqueId = `${newItem.productId}-${newItem.variant}`;
      const existingItem = prev.find((item) => item.id === uniqueId);

      if (existingItem) {
        // Jika produk dengan varian yang sama sudah ada, tambah jumlahnya
        return prev.map((item) =>
          item.id === uniqueId ? { ...item, quantity: item.quantity + newItem.quantity } : item
        );
      }
      // Jika produk baru, tambahkan ke array
      return [...prev, { ...newItem, id: uniqueId }];
    });
    openCart(); 
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 4. Custom Hook untuk mempermudah penggunaan
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart harus digunakan di dalam CartProvider');
  }
  return context;
}