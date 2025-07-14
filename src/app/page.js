import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [limit] = useState(10);
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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Product Catalog</h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 border rounded mb-6"
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
    </div>
  );
}
