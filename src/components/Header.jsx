import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
              <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-xl overflow-hidden border-2 border-gray-400 shadow-sm transition-all duration-300 ${
              isScrolled ? 'shadow-lg' : ''
            }`}>
              <img
                src="src/images/urban villa logo.jpg"
                alt="Urban Galle Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <a href="#home">
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}>
                Urban Galle Villa
              </h1>
            </a>
          </div>


          
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-all duration-300 hover:scale-105 group ${
                  isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            
            {/* CTA Button */}
         <a
            href="https://www.booking.com/hotel/lk/tranquil-galle.en-gb.html?aid=311984&label=tranquil-galle-IqTZATo6JPapMxOWLYBz4QS675409915140%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-2172134575902%3Alp1009921%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YbSsBl3MCvHsD8UKUHIRFxY&sid=26f67d13d91de190fe9360204775c0fb&dest_id=-2217578&dest_type=city&dist=0&group_adults=2&hapos=1&hpos=1&no_rooms=1&req_adults=2&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1753215038&srpvid=893e8dd9cf8609a4&type=total&ucfs=1#tab-main"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
          >
            Book Now
          </a>
</nav>
          

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'text-slate-800 hover:bg-slate-100' 
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="mt-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-slate-200/50">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-slate-700 hover:text-blue-600 transition-colors font-medium hover:translate-x-2 transform transition-transform duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg">
              Book Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;