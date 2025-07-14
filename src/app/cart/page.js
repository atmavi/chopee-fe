'use client';

import { useCart } from '../context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link href="/" className="text-blue-600 underline">Shop now</Link>.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-600">${item.price} × {item.quantity}</p>
                  <p className="text-sm font-medium text-green-700">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >−</button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >+</button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Cart Total */}
          <div className="text-right mt-8">
            <h2 className="text-xl font-bold">Total: ${cartTotal.toFixed(2)}</h2>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
