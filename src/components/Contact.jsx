import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Calendar, Send, MapPin, Clock, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+94 77 996 4660',
      description: 'Speak directly with our team',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'urbangallevilla@gmail.com',
      description: 'Send us your detailed inquiry',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+94 77 996 4660',
      description: 'Quick responses via WhatsApp',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Zap className="text-blue-300" size={20} />
              <span className="text-white font-semibold">Get In Touch</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Start Your
              <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p id='contactForm' className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Ready to experience luxury redefined? Let's create your perfect 
              Sri Lankan getaway with personalized service and attention to detail.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <MapPin className="mr-3 text-blue-400" size={32} />
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="group bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center space-x-4">
                        <div className={`bg-gradient-to-br ${method.color} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <method.icon className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-white text-lg">{method.title}</div>
                          <div className="text-blue-300 font-semibold">
                                  {method.title === 'Call Us' || method.title === 'WhatsApp' ? (
                                    <a href={`tel:${method.value}`} className="hover:underline">{method.value}</a>
                                  ) : method.title === 'Email Us' ? (
                                    <a href={`mailto:${method.value}`} className="hover:underline">{method.value}</a>
                                  ) : (
                                    method.value
                                  )}
                                </div>

                          <div className="text-slate-300 text-sm">{method.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Response Info */}
              <div className="bg-gradient-to-br from-blue-600/20 to-emerald-600/20 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="text-blue-400" size={24} />
                  <h4 className="text-xl font-bold text-white">Lightning Fast Response</h4>
                </div>
                <p className="text-slate-300 leading-relaxed mb-4">
                  We pride ourselves on rapid response times. Expect to hear from us within 
                  2-4 hours during business hours, or use WhatsApp for instant communication.
                </p>
                <div className="flex items-center space-x-2 text-emerald-400">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold">Currently Online</span>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            
            <div  className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 " >
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Calendar className="mr-3 text-emerald-400" size={32} />
                Check Availability
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-white placeholder-slate-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-white placeholder-slate-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-3">
                      Check-in Date *
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-3">
                      Check-out Date *
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-3">
                      Guests *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-white"
                    >
                      <option value="" className="text-slate-800">Select guests</option>
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num} className="text-slate-800">
                          {num} Guest{num > 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <label className="block text-white font-semibold mb-3">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.Phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-white placeholder-slate-300"
                      placeholder="Contact Number"
                    />

                <div>
                  <label className="block text-white font-semibold mb-3">
                    Special Requests
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none text-white placeholder-slate-300"
                    placeholder="Any special requests or questions about your stay?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-5 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
                >
                  <Send size={20} />
                  <span>Send Booking Inquiry</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;