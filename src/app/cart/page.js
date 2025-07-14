'use client';
import { useCart } from '../context/CartContext';
import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

export default function CartPage() {
  const router = useRouter();

  const {
    cartItems,
    cartTotal,
    totalQuantity,
    updateQuantity,
    removeFromCart,
    fetchCart,
    checkoutCart
  } = useCart();

  const handleCheckout = async () => {
    const success = await checkoutCart();
    if (success) {
      router.push('/checkout/success');
    } else {
      alert('Checkout failed. Try again.');
    }
  };

  useEffect(() => {
    fetchCart(); 
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border p-4 rounded-lg shadow">
              <div className="flex gap-4">
                <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Discount: {item.discountPercentage}%</p>
                  <p>Subtotal: ${item.discountedTotal.toFixed(2)}</p>
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6 text-right">
            <p className="text-lg font-semibold">Total ({totalQuantity} items): ${cartTotal.toFixed(2)}</p>
          </div>

          <button
            onClick={handleCheckout}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 float-right"
          >
            Checkout
          </button>
        </div>
      )}
    </main>
  );
}
