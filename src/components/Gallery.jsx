import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/602007806.jpg?k=74231ce9e37fad71e3a0dae5314a4e3f6dca6d96ab129e88a38e4b0d9c818421&o=',
      title: 'Villa Exterior',
      category: 'Exterior'
    },
    {
      url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/488063153.jpg?k=5438141c9c9a4bd17ca5700d3cffb42a2b5693c501f4ff1818ce72f5eb5ef6d1&o=',
      title: 'Living Room',
      category: 'Interior'
    },
    {
      url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/488061491.jpg?k=f62128008944f6e7494116c4ca3d5e46c7d8dea6377c3a06b6ed680c11083bb1&o=',
      title: 'Master Bedroom',
      category: 'Bedroom'
    },
    {
      url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/555093077.jpg?k=85df1b4f0282b11ac474543732cd057bfee2a22a945e495d3731bdeedb40a9ca&o=',
      title: 'Attached Bathrooms',
      category: 'Kitchen'
    },
    {
      url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/555092970.jpg?k=45481660b25d84f1c20840efae618d62566d00a9a80962e08787b434748eae12&o=',
      title: 'Pool',
      category: 'Pool'
    },
    {
      url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/484217747.jpg?k=c2d854a73e75ddbf6f5eb619b5daa43713634baf79b4a6ebc3e647d575d1bf8c&o=',
      title: 'Dining Area',
      category: 'Dining'
    }
  ];

  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Camera className="text-blue-300" size={20} />
              <span className="text-white font-semibold">Visual Experience</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Immersive
              <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Step into luxury through our curated collection of spaces, each designed 
              to inspire and captivate your senses.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                onClick={() => openLightbox(index)}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold mb-2 inline-block">
                        {image.category}
                      </div>
                      <h3 className="text-xl font-bold">{image.title}</h3>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </div>
                
                {/* Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
           
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20"
          >
            <X size={24} />
          </button>
          
          {/* Navigation Buttons */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-6 text-white hover:text-gray-300 transition-colors bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-6 text-white hover:text-gray-300 transition-colors bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image */}
          <div className="relative max-w-6xl max-h-full">
            <img 
              src={images[selectedImage].url}
              alt={images[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-sm rounded-2xl p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-blue-300 mb-1">{images[selectedImage].category}</div>
                  <div className="text-xl font-bold">{images[selectedImage].title}</div>
                </div>
                <div className="text-sm text-slate-300">
                  {selectedImage + 1} / {images.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;