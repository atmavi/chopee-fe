'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();
const API_URL = 'http://localhost:9090/api/cart';

export function CartProvider({ children }) {
  const [cart, setCart] = useState(null); // full cart from backend

  const fetchCart = async () => {
    try {
      const res = await fetch(API_URL, { credentials: 'include' });
      const data = await res.json();
      setCart(data);
    } catch (err) {
      console.error('Failed to fetch cart:', err);
    }
  };

  const addToCart = async (product) => {
    try {
      await fetch(`${API_URL}/product`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
          discountPercentage: product.discountPercentage ?? 0,
          thumbnail: product.thumbnail,
        }),
      });
      fetchCart();
    } catch (err) {
      console.error('Failed to add product:', err);
    }
  };

  const updateQuantity = async (id, quantity) => {
    try {
      await fetch(`${API_URL}/product/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ quantity }),
      });
      fetchCart();
    } catch (err) {
      console.error('Failed to update quantity:', err);
    }
  };

  const removeFromCart = async (id) => {
    try {
      await fetch(`${API_URL}/product/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      fetchCart();
    } catch (err) {
      console.error('Failed to remove product:', err);
    }
  };

  const checkoutCart = async () => {
    try {
      const res = await fetch(`${API_URL}/checkout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg);
      }

      fetchCart(); // Refresh cart
      return true;
    } catch (err) {
      console.error('Checkout failed:', err.message);
      return false;
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems: cart?.products || [],
        cartTotal: cart?.discountedTotal ?? 0,
        totalQuantity: cart?.totalQuantity ?? 0,
        addToCart,
        updateQuantity,
        removeFromCart,
        fetchCart,
        checkoutCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
