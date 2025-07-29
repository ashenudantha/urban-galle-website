import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <article className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p>Urban Galle Villa respects your privacy. We collect minimal personal data for booking and communication purposes only.</p>

      <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
      <ul className="list-disc list-inside">
        <li>Contact details (name, email, phone) for booking confirmation.</li>
        <li>Special requests (dietary, accessibility, etc.) you provide.</li>
        <li>Payment information via third-party booking platforms.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">How We Use Your Data</h2>
      <ul className="list-disc list-inside">
        <li>To confirm bookings and respond to inquiries.</li>
        <li>To personalize your guest experience.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Data Sharing</h2>
      <p>We do not share personal information except as needed with trusted booking partners or compliance authorities if legally required.</p>

      <h2 className="text-2xl font-semibold mt-6">Your Rights</h2>
      <p>You may request access, correction, or deletion of your data by contacting us.</p>

      <h2 className="text-2xl font-semibold mt-6">Contact</h2>
      <p>For privacy inquiries: <a href="mailto:urbangallevilla.com" className="text-blue-600">urbangallevilla@gmail.com</a></p>

      <div className="mt-10">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </button>
      </div>
    </article>
  );
}
