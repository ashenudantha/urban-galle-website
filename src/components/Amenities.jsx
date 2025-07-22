import React from 'react';
import { Wifi, Car, Waves, Utensils, Coffee, Shield, Tv, Wind, Sparkles, Zap } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    { 
      icon: Wifi, 
      title: 'Ultra-Fast WiFi', 
      description: 'Fiber-optic internet for seamless connectivity',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    { 
      icon: Car, 
      title: 'Premium Parking', 
      description: 'Secure covered parking with EV charging',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50'
    },
    { 
      icon: Waves, 
      title: 'Infinity Pool', 
      description: 'Heated pool with panoramic ocean views',
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    { 
      icon: Utensils, 
      title: 'Gourmet Kitchen', 
      description: 'Professional-grade appliances & cookware',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50'
    },
    { 
      icon: Coffee, 
      title: 'Artisan Breakfast', 
      description: 'Daily gourmet breakfast with local specialties',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'from-rose-50 to-pink-50'
    },
    { 
      icon: Shield, 
      title: 'Elite Security', 
      description: 'Smart security system with 24/7 monitoring',
      color: 'from-slate-600 to-slate-700',
      bgColor: 'from-slate-50 to-slate-100'
    },
    { 
      icon: Tv, 
      title: 'Smart Entertainment', 
      description: '75" OLED TVs with premium streaming',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50'
    },
    { 
      icon: Wind, 
      title: 'Climate Control', 
      description: 'Zoned AC with air purification system',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-50 to-blue-50'
    }
  ];

  return (
    <section id="amenities" className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full px-6 py-3 mb-6">
              <Sparkles className="text-emerald-600" size={20} />
              <span className="text-emerald-800 font-semibold">Premium Amenities</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-8 leading-tight">
              Luxury
              <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Redefined
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Experience world-class facilities and cutting-edge amenities designed 
              to exceed your expectations and create unforgettable memories.
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div 
                key={index} 
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-slate-300/50 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${amenity.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated Background Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />
                
                {/* Icon Container */}
                <div className="relative z-10 mb-6">
                  <div className={`bg-gradient-to-br ${amenity.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <amenity.icon className="text-white" size={28} />
                  </div>
                  
                  {/* Floating Icon Effect */}
                  <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${amenity.color} rounded-2xl opacity-20 group-hover:animate-ping`} />
                </div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors duration-300">
                    {amenity.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {amenity.description}
                  </p>
                </div>
                
                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r ${amenity.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${amenity.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-3xl`} />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;