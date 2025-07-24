import React from 'react';
import { MapPin, Clock, Car, Plane, Navigation, Globe, Compass } from 'lucide-react';

const Location = () => {
  const attractions = [
    { 
      name: 'Galle Fort', 
      distance: '5 km', 
      time: '10 min drive',
      type: 'historical',
      description: 'UNESCO World Heritage Site'
    },
    { 
      name: 'Unawatuna Beach', 
      distance: '8 km', 
      time: '15 min drive',
      type: 'beach',
      description: 'Golden sandy beach paradise'
    },
    { 
      name: 'Jungle Beach', 
      distance: '12 km', 
      time: '20 min drive',
      type: 'beach',
      description: 'Hidden tropical sanctuary'
    },
    { 
      name: 'Koggala Airport', 
      distance: '15 km', 
      time: '25 min drive',
      type: 'airport',
      description: 'Domestic flights & charters'
    },
    { 
      name: 'Colombo Airport', 
      distance: '120 km', 
      time: '2 hour drive',
      type: 'airport',
      description: 'International gateway'
    },
    { 
      name: 'Mirissa Beach', 
      distance: '25 km', 
      time: '35 min drive',
      type: 'beach',
      description: 'Whale watching hotspot'
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'airport': return Plane;
      case 'beach': return Navigation;
      case 'historical': return Compass;
      default: return Car;
    }
  };

  const getGradient = (type) => {
    switch (type) {
      case 'airport': return 'from-blue-500 to-indigo-500';
      case 'beach': return 'from-cyan-500 to-blue-500';
      case 'historical': return 'from-amber-500 to-orange-500';
      default: return 'from-emerald-500 to-teal-500';
    }
  };

  return (
    <section id="location" className="py-24 bg-gradient-to-br from-white via-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-emerald-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-full px-6 py-3 mb-6">
              <Globe className="text-blue-600" size={20} />
              <span className="text-blue-800 font-semibold">Prime Location</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-8 leading-tight">
              Gateway to
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Paradise
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Perfectly positioned in Gintota's coastal haven, where ancient heritage 
              meets pristine beaches and modern luxury creates unforgettable experiences.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-slate-800 mb-6">
                  Discover Gintota's Magic
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Gintota represents the perfect harmony between Sri Lanka's rich cultural 
                  tapestry and its stunning natural beauty. Our villa serves as your 
                  luxury basecamp for exploring everything from ancient fortresses to 
                  untouched beaches.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Whether you're seeking adventure, relaxation, or cultural immersion, 
                  our strategic location puts the best of southern Sri Lanka within 
                  easy reach while maintaining the tranquility of coastal living.
                </p>
              </div>

              {/* Address & Transport */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50">
                  <div className="bg-gradient-to-br from-blue-500 to-emerald-500 p-3 rounded-xl">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Villa Address</div>
                    <div className="text-slate-600">No. 123, Gintota Road, Gintota, Sri Lanka</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-xl">
                    <Plane className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Airport Access</div>
                    <div className="text-slate-600">15 min to Koggala • 2 hours to Colombo</div>
                  </div>
                </div>
              </div>
            </div>

           <div className="relative group">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-emerald-600/10 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500" />
  <div className="relative bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl p-12 h-auto flex flex-col items-center justify-center shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
   
    <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg mt-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.553840953024!2d80.17700057531049!3d6.055771893930072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae175d1de29e489%3A0xa1eb1108c178469d!2sUrban%20Galle%20Villa!5e0!3m2!1sen!2slk!4v1753216162419!5m2!1sen!2slk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</div>

          </div>

          {/* Attractions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => {
              const IconComponent = getIcon(attraction.type);
              const gradient = getGradient(attraction.type);
              
              return (
                <div key={index} className="group bg-white/80 backdrop-blur-sm p-6 rounded-3xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-slate-300/50 transform hover:-translate-y-2">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-slate-900 transition-colors">
                        {attraction.name}
                      </h4>
                      <p className="text-sm text-slate-500 mb-3">{attraction.description}</p>
                    </div>
                    <div className={`bg-gradient-to-br ${gradient} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="text-white" size={20} />
                    </div>
                  </div>
                  
                  {/* Details */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-slate-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="font-medium">{attraction.distance}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-600">
                      <Clock size={16} />
                      <span>{attraction.time}</span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-4 h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;