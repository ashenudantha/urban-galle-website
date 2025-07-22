import React from 'react';
import { Star, Quote, ThumbsUp, Award } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      country: 'United Kingdom',
      avatar: 'SJ',
      rating: 5,
      text: 'Absolutely stunning villa with incredible attention to detail. The location is perfect - close enough to Galle Fort but peaceful and private. The breakfast was amazing and the staff were so helpful.',
      date: 'March 2024',
      highlight: 'Perfect Location'
    },
    {
      name: 'Michael Chen',
      country: 'Australia', 
      avatar: 'MC',
      rating: 5,
      text: 'One of the best villa experiences we\'ve had in Sri Lanka. The pool area is beautiful, rooms are spacious and clean, and the view is breathtaking. Highly recommend for couples or families.',
      date: 'February 2024',
      highlight: 'Exceptional Experience'
    },
    {
      name: 'Emma & David',
      country: 'Germany',
      avatar: 'ED',
      rating: 5,
      text: 'Perfect for our honeymoon! The villa is luxurious yet cozy, and the location gives you the best of both worlds - beach access and cultural sites. We will definitely return.',
      date: 'January 2024',
      highlight: 'Honeymoon Perfect'
    }
  ];

  const stats = [
    { label: 'Guest Rating', value: '4.8', icon: Star },
    { label: 'Total Reviews', value: '127', icon: ThumbsUp },
    { label: 'Repeat Guests', value: '89%', icon: Award }
  ];

  return (
    <section id="reviews" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-tr from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-6 py-3 mb-6">
              <Star className="text-yellow-600 fill-current" size={20} />
              <span className="text-yellow-800 font-semibold">Guest Experiences</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 mb-8 leading-tight">
              Loved by
              <span className="block bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Travelers
              </span>
            </h2>
            
            {/* Rating Display */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current w-8 h-8" />
                ))}
              </div>
              <div className="text-3xl font-bold text-slate-800">4.8</div>
              <div className="text-slate-600 text-lg">out of 5 stars</div>
            </div>
            
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it - discover why guests consistently 
              rate their stay as exceptional and return year after year.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-4xl font-black text-slate-800 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {reviews.map((review, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-slate-300/50 transform hover:-translate-y-2">
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <Quote className="text-blue-300 group-hover:text-blue-400 transition-colors duration-300" size={32} />
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current w-4 h-4" />
                    ))}
                  </div>
                </div>
                
                {/* Highlight Badge */}
                <div className="bg-gradient-to-r from-blue-100 to-emerald-100 rounded-full px-4 py-2 text-sm font-semibold text-blue-800 mb-4 inline-block">
                  {review.highlight}
                </div>
                
                {/* Review Text */}
                <p className="text-slate-600 leading-relaxed mb-6 italic group-hover:text-slate-700 transition-colors duration-300">
                  "{review.text}"
                </p>
                
                {/* Author Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-200">
                  <div className="bg-gradient-to-br from-blue-500 to-emerald-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                      {review.name}
                    </div>
                    <div className="text-slate-500 text-sm">{review.country}</div>
                    <div className="text-slate-400 text-xs mt-1">{review.date}</div>
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r from-blue-300 to-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
             <a
               href="https://www.booking.com/hotel/lk/tranquil-galle.en-gb.html?aid=311984&label=tranquil-galle-IqTZATo6JPapMxOWLYBz4QS675409915140%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-2172134575902%3Alp1009921%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YbSsBl3MCvHsD8UKUHIRFxY&sid=26f67d13d91de190fe9360204775c0fb&dest_id=-2217578&dest_type=city&dist=0&group_adults=2&hapos=1&hpos=1&no_rooms=1&req_adults=2&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1753215038&srpvid=893e8dd9cf8609a4&type=total&ucfs=1&#tab-main"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Read All Reviews
            </a>

             <a
            href="https://www.booking.com/hotel/lk/tranquil-galle.en-gb.html?aid=311984&label=tranquil-galle-IqTZATo6JPapMxOWLYBz4QS675409915140%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-2172134575902%3Alp1009921%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YbSsBl3MCvHsD8UKUHIRFxY&sid=26f67d13d91de190fe9360204775c0fb&dest_id=-2217578&dest_type=city&dist=0&group_adults=2&hapos=1&hpos=1&no_rooms=1&req_adults=2&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1753215038&srpvid=893e8dd9cf8609a4&type=total&ucfs=1&#tab-main" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-800 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 bg-white/70 backdrop-blur-sm"
            >
             Write a Review
            </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;