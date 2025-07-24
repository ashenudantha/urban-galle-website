import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Villa', href: '#about' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Reviews', href: '#reviews' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Booking Terms', href: '#' },
    { name: 'Cancellation Policy', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">UG</span>
                </div>
                <h3 className="text-2xl font-bold">Urban Galle Villa</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                Where contemporary luxury meets Sri Lankan hospitality. Experience 
                the perfect blend of modern comfort and coastal serenity in the 
                heart of Gintota.
              </p>
              
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/people/Urban-Galle-Villa/100095056632187/?_rdr" className="group bg-white/10 hover:bg-blue-600 p-3 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Facebook size={20} className="group-hover:text-white transition-colors" />
                </a>
                <a href="https://www.instagram.com/urban.gallevilla/" className="group bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 p-3 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Instagram size={20} className="group-hover:text-white transition-colors" />
                </a>
                <a href="https://www.google.com/maps/place/Urban+Galle+Villa/@6.0557719,80.1770006,17z/data=!3m1!4b1!4m25!1m15!4m14!1m6!1m2!1s0x3ae175d1de29e489:0xa1eb1108c178469d!2sUrban+Galle+Villa,+Gingaga+Mawatha,+Galle!2m2!1d80.1795755!2d6.0557719!1m6!1m2!1s0x3ae175d1de29e489:0xa1eb1108c178469d!2sGingaga+Mawatha,+Galle+80000!2m2!1d80.1795755!2d6.0557719!3m8!1s0x3ae175d1de29e489:0xa1eb1108c178469d!5m2!4m1!1i2!8m2!3d6.0557719!4d80.1795755!16s%2Fg%2F11v3mzlpyj?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D" className="group bg-white/10 hover:bg-emerald-600 p-3 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <MapPin size={20} className="group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <div className="space-y-4">
                {quickLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    className="group flex items-center text-slate-300 hover:text-white transition-all duration-300 transform hover:translate-x-2"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-emerald-400 transition-colors duration-300" />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-slate-300 group hover:text-white transition-colors duration-300">
                  <MapPin size={18} className="mt-1 text-blue-400 group-hover:text-emerald-400 transition-colors duration-300" />
                  <span className="text-sm leading-relaxed">
                    No. 123, Gintota Road<br />
                    Gintota, Sri Lanka
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 group hover:text-white transition-colors duration-300">
                  <Phone size={16} className="text-blue-400 group-hover:text-emerald-400 transition-colors duration-300" />
                  <span className="text-sm">+94 91 234 5678</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 group hover:text-white transition-colors duration-300">
                  <Mail size={16} className="text-blue-400 group-hover:text-emerald-400 transition-colors duration-300" />
                  <span className="text-sm">info@urbangallevilla.com</span>
                </div>
              </div>
              
           
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-700/50 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-slate-400">
                <span>© 2024 Urban Galle Villa Gintota. Made with</span>
                <Heart size={16} className="text-red-400 fill-current" />
                <span>in Sri Lanka</span>
              </div>
              
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center lg:justify-end gap-6">
                {legalLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    className="text-slate-400 hover:text-white transition-colors duration-300 text-sm hover:underline"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;