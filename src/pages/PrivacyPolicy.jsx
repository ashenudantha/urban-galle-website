import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <article className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <p>
        At <strong>Urban Galle Villa Ginthota</strong>, your privacy is of utmost importance. We are committed to protecting the personal information you provide to us through our website and during your stay. This Privacy Policy explains how we collect, use, and safeguard your data.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
      <p>We collect the following types of information:</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Booking Details:</strong> Name, contact information (email, phone), special requests, and payment details provided through trusted third-party booking platforms.</li>
        <li><strong>Communication:</strong> Any messages or correspondence between you and our staff for booking confirmations, inquiries, or guest services.</li>
        <li><strong>Website Usage:</strong> Technical data such as IP address, browser type, and usage patterns collected via cookies and similar technologies to improve your experience.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>To confirm and manage your bookings efficiently.</li>
        <li>To communicate important information regarding your stay, including special offers or changes.</li>
        <li>To enhance your guest experience by personalizing services.</li>
        <li>To comply with legal and regulatory requirements.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Sharing and Security</h2>
      <p>
        We do not sell or rent your personal information. However, we may share your data with trusted third-party booking platforms (e.g., Booking.com), payment processors, or legal authorities if required.
      </p>
      <p>
        We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, or misuse.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
      <p>
       Urban Galle Villa website does not use cookies or any other tracking technologies to collect information about your visit.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal data held by Urban Galle Villa. To exercise these rights, please contact us at <a href="mailto:urbangallevilla@gmail.com" className="text-blue-600">urbangallevilla@gmail.com</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this page regularly.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
      <p>
        For any questions or concerns about this Privacy Policy, please contact us at:
      </p>
      <address className="not-italic mb-8">
        Urban Galle Villa Ginthota<br />
        No. 123, Gintota Road<br />
        Gintota, Sri Lanka<br />
        Email: <a href="mailto:urbangallevilla@gmail.com" className="text-blue-600">urbangallevilla@gmail.com</a><br />
        Phone: +94 91 234 5678
      </address>

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
