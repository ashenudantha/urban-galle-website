import React from 'react';
import { MapPin, Star, Calendar, ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: "url('https://farm5.staticflickr.com/4325/35867942871_a993e6f792_o.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-blue-900/60" />
        
        {/* Animated Gradient Overlay */}
      </div>
      
      {/* Floating Elements */}
   
      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 hover:bg-white/20 transition-all duration-300">
          <Star className="text-yellow-400 fill-current" size={18} />
          <span className="text-sm font-medium">Luxury Villa Experience</span>
        </div>
        
        {/* Main Heading with Gradient Text */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
          <span className="bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
            Urban Galle
          </span>
          <br />
          <span className="text-4xl md:text-5xl font-light text-blue-200 block mt-4">
            Villa Ginthota
          </span>
        </h1>
        
        {/* Stats Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-10 text-lg">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <MapPin className="text-blue-300" size={20} />
            <span>Ginthota, Sri Lanka</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Star className="text-yellow-400 fill-current" size={20} />
            <span>4.8 Rating</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <span>Available Now</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto font-light">
          <span className="text-blue-200 font-medium"> </span>. 
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#contactForm">
          <button className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <Calendar size={22} />
            <span>Book Your Stay</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          </a>
          
          <button className="group relative border-2 border-white/30 text-white hover:bg-white hover:text-slate-800 px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm flex items-center space-x-3">
            <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
            <span>Virtual Tour</span>
          </button>
        </div>
        
        {/* Scroll Indicator */}
        
      </div>
    </section>
  );
};

export default Hero;