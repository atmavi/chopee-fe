// components/Header.js
export default function Header() {
  return (
    <header className="bg-yellow-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyStore</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm hidden sm:inline">Cart (0)</span>
          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
            <path d="M7 4h-2l-1 2h2l4.5 9h6.25l3.25-6H9.42"/>
          </svg>
        </div>
      </div>
    </header>
  );
}
