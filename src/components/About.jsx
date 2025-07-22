import React from 'react';
import { Users, Bed, Bath, Home, Award, Shield, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    { icon: Users, label: 'Up to 8 Guests', value: '8', color: 'from-blue-500 to-blue-600' },
    { icon: Bed, label: 'Bedrooms', value: '4', color: 'from-emerald-500 to-emerald-600' },
    { icon: Bath, label: 'Bathrooms', value: '3', color: 'from-purple-500 to-purple-600' },
    { icon: Home, label: 'Living Areas', value: '2', color: 'from-amber-500 to-amber-600' }
  ];

  const highlights = [
    { icon: Award, title: 'Premium Quality', description: 'Luxury furnishings and amenities' },
    { icon: Shield, title: 'Secure & Private', description: '24/7 security and privacy' },
    { icon: Sparkles, title: 'Exceptional Service', description: 'Personalized guest experience' }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-emerald-100/50 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100/50 to-pink-100/50 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-full px-6 py-3 mb-6">
              <Sparkles className="text-blue-600" size={20} />
              <span className="text-blue-800 font-semibold">About Our Villa</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-8 leading-tight">
              Where Luxury
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Meets Paradise
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Urban Galle Villa Gintota redefines coastal luxury with contemporary design, 
              world-class amenities, and an unparalleled location that puts Sri Lanka's 
              treasures at your doorstep.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image with Overlay */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <img 
                src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Villa interior"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="font-semibold">Premium Interior Design</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-slate-800 mb-6">
                  Architectural Excellence
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Every corner of our villa tells a story of meticulous craftsmanship and 
                  contemporary elegance. From the moment you step inside, you'll be 
                  surrounded by thoughtfully curated spaces that blend modern luxury 
                  with authentic Sri Lankan charm.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Nestled in the serene coastal town of Gintota, our villa offers the 
                  perfect sanctuary for those seeking both adventure and tranquility. 
                  Whether you're exploring the historic Galle Fort or unwinding by 
                  pristine beaches, luxury awaits your return.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="bg-gradient-to-br from-blue-500 to-emerald-500 p-3 rounded-xl">
                      <highlight.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{highlight.title}</h4>
                      <p className="text-slate-600">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-slate-300/50 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="text-white" size={28} />
                </div>
                
                {/* Content */}
                <div className="text-center relative z-10">
                  <div className="text-4xl font-black text-slate-800 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.value}
                  </div>
                  <div className="text-slate-600 font-semibold">{feature.label}</div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;