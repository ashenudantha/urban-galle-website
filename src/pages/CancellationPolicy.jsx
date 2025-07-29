import React from 'react';
import { Link } from 'react-router-dom';

export default function CancellationPolicy() {
  return (
    <article className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Cancellation Policy</h1>
      <p>Your cancellation rights depend on the booked rate. Please review the specifics for your room type at the time of booking.</p>

      <h2 className="text-2xl font-semibold mt-6">• Free Cancellation</h2>
      <p>Rates marked as “free cancellation” allow a full refund if canceled before the deadline (usually a few days before arrival).</p>

      <h2 className="text-2xl font-semibold mt-6">• Non‑Refundable Rates</h2>
      <p>Special discounted or promotional rates are often non-refundable and incur 100% charge upon cancellation.</p>

      <h2 className="text-2xl font-semibold mt-6">• No‑Show</h2>
      <p>No-shows or missed cancellation deadlines will result in full charge for the first night or the full stay depending on booking terms.</p>

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
