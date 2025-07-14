export default function CheckoutSuccess() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">✅ Order Placed!</h1>
      <p className="text-lg">Thank you for your purchase.</p>
      <a href="/" className="mt-6 inline-block text-blue-600 hover:underline">
        Back to home →
      </a>
    </main>
  );
}