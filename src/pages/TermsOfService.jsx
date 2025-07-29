import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <article className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p>Welcome to Urban Galle Villa Ginthota. By using our website and booking services, you agree to the following terms and conditions.</p>

      <h2 className="text-2xl font-semibold mt-6">1. Booking and Payments</h2>
      <p>All bookings must be confirmed via our third‑party platform. Payment policies (prepayment vs. pay on arrival) depend on the selected rate.</p>

      <h2 className="text-2xl font-semibold mt-6">2. Guest Conduct</h2>
      <p>Guests are expected to refrain from damage, noise disturbances, and inappropriate behavior. We reserve the right to refuse service for misconduct.</p>

      <h2 className="text-2xl font-semibold mt-6">3. Liability</h2>
      <p>While we strive for safety and comfort, the villa is not liable for lost belongings or injuries not caused by negligence.</p>

      <h2 className="text-2xl font-semibold mt-6">4. Modifications</h2>
      <p>We reserve the right to update these terms—revisions will be reflected immediately on this site.</p>

      <h2 className="text-2xl font-semibold mt-6">Contact</h2>
      <p>If you have questions about these terms: <a href="mailto:info@urbangallevilla.com" className="text-blue-600">urbangallevilla@gmail.com</a></p>

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
