import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/loader";

// Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import BookingTerms from "./pages/BookingTerms";
import CancellationPolicy from "./pages/CancellationPolicy";


function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Amenities />
      <Gallery />
      <Location />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
           <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/booking-terms" element={<BookingTerms />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />   

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
