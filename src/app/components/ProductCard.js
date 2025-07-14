import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white">
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover rounded-md" />
      <div className="mt-4 space-y-1">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-sm text-gray-500">{product.brand} • {product.category}</p>
        <p className="text-xl font-bold text-green-600">${product.price}</p>
        <p className="text-sm text-yellow-600">⭐ {product.rating}</p>
        <p className="text-sm">Stock: {product.stock}</p>
        <p className="text-xs text-gray-400">Shipping Info: Free delivery within 3–5 days.</p>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 w-full py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
