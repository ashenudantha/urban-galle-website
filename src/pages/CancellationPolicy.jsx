import React from 'react';

export default function CancellationPolicy() {
  return (
    <article className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Cancellation Policy</h1>
      <p>Your cancellation rights depend on the booked rate. Please review the specifics for your room type at time of booking. :contentReference[oaicite:4]{index=4}</p>
      <h2 className="text-2xl font-semibold mt-6">• Free Cancellation</h2>
      <p>Rates marked as “free cancellation” allow full refund if canceled before the deadline (usually a few days before arrival). :contentReference[oaicite:5]{index=5}</p>
      <h2 className="text-2xl font-semibold mt-6">• Non‑Refundable Rates</h2>
      <p>Special discounted or promotional rates are often non-refundable and incur 100% charge upon cancellation.</p>
      <h2 className="text-2xl font-semibold mt-6">• No‑Show</h2>
      <p>No-shows or missed cancellation deadlines will result in full charge for the first night or the full stay depending on booking terms. :contentReference[oaicite:6]{index=6}</p>
    </article>
  );
}
