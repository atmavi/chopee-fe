export default function Pagination({ skip, limit, total, onPageChange }) {
  return (
    <div className="mt-6 flex justify-center gap-4">
      <button
        disabled={skip === 0}
        className="text-gray-500 px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        onClick={() => onPageChange(skip - limit)}
      >
        Prev
      </button>
      <button
        disabled={skip + limit >= total}
        className="text-gray-500 px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        onClick={() => onPageChange(skip + limit)}
      >
        Next
      </button>
    </div>
  );
}
