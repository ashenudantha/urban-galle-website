import React from 'react';
import { Link } from 'react-router-dom';

export default function BookingTerms() {
  return (
    <article className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Booking Terms</h1>
      <p>These terms govern the booking process for Urban Galle Villa Ginthota.</p>

      <h2 className="text-2xl font-semibold mt-6">• Rates & Payment</h2>
      <p>Room rates vary by date and package. Payments are handled via trusted third‑party platforms like Booking.com or Expedia.</p>

      <h2 className="text-2xl font-semibold mt-6">• Free Cancellation</h2>
      <p>Some rates allow free cancellation up to a specific deadline. Confirm policy details during booking. Fully refundable rates are often available if eligible.</p>

      <h2 className="text-2xl font-semibold mt-6">• Check‑In / Check‑Out</h2>
      <p>Standard check‑in is at 2 PM, and check‑out is by 11 AM. Early or late options may be available upon request.</p>

      <h2 className="text-2xl font-semibold mt-6">• Pets</h2>
      <p>Pets (cats and dogs) are welcome—USD 15 per pet per night applies.</p>

      {/* Back to Home Button */}
      <div className="mt-10">
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
        >
          ← Back to Home
        </Link>
      </div>
    </article>
  );
}
