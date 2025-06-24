import React from 'react';
import { Truck, Settings, Droplet, Fuel, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      image: '/images/towing-service.jpg',
      title: t('services.towing.title'),
      description: t('services.towing.desc'),
      color: 'bg-blue-500'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      image: '/images/wheel-change.jpg',
      title: t('services.wheel.title'),
      description: t('services.wheel.desc'),
      color: 'bg-green-500'
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      image: '/images/oil-change.jpg',
      title: t('services.oil.title'),
      description: t('services.oil.desc'),
      color: 'bg-orange-500'
    },
    {
      icon: <Fuel className="w-8 h-8" />,
      image: '/images/gas-delivery.png',
      title: t('services.gas.title'),
      description: t('services.gas.desc'),
      color: 'bg-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                
                {/* Icon Overlay */}
                <div className={`absolute top-4 left-4 ${service.color} p-3 rounded-lg text-white shadow-lg`}>
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Call to Action */}
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group">
                  <span>Get Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Emergency Service?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our certified technicians are available 24/7 for roadside assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Call (555) 123-4567</span>
              </a>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2">
                <span>Request Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
