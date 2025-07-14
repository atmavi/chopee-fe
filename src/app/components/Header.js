import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-yellow-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">MyStore</Link>
        <Link href="/cart" className="flex items-center gap-2">
          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M7 4h-2l-1 2h2l4.5 9h6.25l3.25-6H9.42"/></svg>
          <span className="text-sm">Cart ({cartItems.length})</span>
        </Link>
      </div>
    </header>
  );
}
