export default function Pagination({ skip, limit, total, onPageChange }) {
  return (
    <div className="mt-10 flex justify-center gap-4">
      <button
        disabled={skip === 0}
        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => onPageChange(skip - limit)}
      >
        Previous
      </button>
      <button
        disabled={skip + limit >= total}
        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => onPageChange(skip + limit)}
      >
        Next
      </button>
    </div>
  );
}
