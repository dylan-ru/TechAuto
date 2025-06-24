import React from 'react';
import { Shield, Clock, Award, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured for your peace of mind'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Service',
      description: 'Available around the clock for emergency assistance'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certified Technicians',
      description: 'Our team consists of certified automotive professionals'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '15+ Years Experience',
      description: 'Trusted by thousands of customers across the region'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years in Business' },
    { number: '10K+', label: 'Satisfied Customers' },
    { number: '24/7', label: 'Emergency Service' },
    { number: '100%', label: 'Customer Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('about.text')}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors">
              <span>{t('about.cta')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column - Stats and Visual */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-xl p-6">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
              <blockquote className="text-gray-700 italic mb-4">
                "TechAuto Services saved my day! Quick response, professional service, and fair pricing. I highly recommend them for any automotive emergency."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  M
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Maria Rodriguez</div>
                  <div className="text-gray-600 text-sm">Business Owner</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-4">Our Certifications</h4>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border">
                  ASE Certified
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border">
                  AAA Approved
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border">
                  Better Business Bureau
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border">
                  WRDA Member
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
