'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-yellow-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-yellow-200 transition">
          Chopee
        </Link>
        <Link
          href="/cart"
          className="flex items-center space-x-2 text-white hover:text-yellow-200 transition"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 4h-2l-1 2h2l4.5 9h6.25l3.25-6H9.42" />
          </svg>
          <span className="text-sm">Cart ({cartItems.length})</span>
        </Link>
      </div>
    </header>
  );
}
