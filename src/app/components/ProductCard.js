export default function ProductCard({ product }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-sm text-gray-600">Brand: {product.brand}</p>
      <p className="text-sm text-gray-600">Category: {product.category}</p>
      <p className="text-sm text-green-700 font-medium mt-1">${product.price}</p>
      <p className="text-sm">Rating: {product.rating} ⭐</p>
      <p className="text-sm">Stock: {product.stock}</p>
      <p className="text-xs text-gray-500 mt-1">
        Shipping Info: Free delivery within 3-5 days.
      </p>
    </div>
  );
}
