'use client'

import { useEffect, useState } from 'react';

import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Pagination from './components/Pagination';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [limit] = useState(12);
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const url = search
      ? `https://dummyjson.com/products/search?q=${search}`
      : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
      });
  }, [limit, skip, search]);

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-3xl font-bold mb-4">Product Catalog</h1>

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSkip(0);
          }}
        />


        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          skip={skip}
          limit={limit}
          total={total}
          onPageChange={(newSkip) => setSkip(newSkip)}
        />
      </main>
    </>
    
  );
}
