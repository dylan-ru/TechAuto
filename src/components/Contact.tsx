import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert(t('contact.form.thankyou'));
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('contact.phone'),
      value: '(555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.email'),
      value: 'service@techauto.com',
      link: 'mailto:service@techauto.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.address'),
      value: '123 Main Street, City, State 12345',
      link: 'https://maps.google.com'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('contact.hours'),
      value: '24/7 Emergency Service',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Get In Touch</h3>
            
            {/* Contact Info Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {info.title.split(':')[0]}
                    </h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-600">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-bold text-red-800 mb-2 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Service
              </h4>
              <p className="text-red-700 mb-3">
                For immediate roadside assistance, call our emergency hotline:
              </p>
              <a 
                href="tel:+15551234567"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="towing">Towing Service</option>
                    <option value="tire">Tire & Wheel Service</option>
                    <option value="oil">Oil Change</option>
                    <option value="fuel">Fuel Delivery</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Please describe your service needs or questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
