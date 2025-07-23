import { React, useEffect , useState } from "react";
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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Remove loader after 2 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {loading ? <Loader /> : <Hero />} <About />
      <Amenities />
      <Gallery />
      <Location />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
