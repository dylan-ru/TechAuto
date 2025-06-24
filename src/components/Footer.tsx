import React from 'react';
import { Phone, Mail, MapPin, Clock, Wrench, Droplet, Facebook, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <Droplet className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">TechAuto</h3>
                <p className="text-xs text-gray-400">Services</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {t('footer.company.about')}
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('nav.contact')}
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services.title')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('services.towing.title')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('services.wheel.title')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('services.oil.title')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('services.gas.title')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('services.battery.title')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">
                    (555) 123-4567
                  </a>
                  <p className="text-sm text-gray-500">24/7 Emergency</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:service@techauto.com" className="text-gray-400 hover:text-white transition-colors">
                  service@techauto.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Main Street<br />
                  City, State 12345
                </span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  24/7 Emergency Service<br />
                  <span className="text-sm text-gray-500">Always Available</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">{t('footer.emergency')}</span>
            </div>
            <a 
              href="tel:+15551234567"
              className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('footer.emergency.call')}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              {t('footer.rights')}
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>{t('footer.licenses')}</span>
              <span>•</span>
              <span>{t('footer.certified')}</span>
              <span>•</span>
              <span>{t('footer.accredited')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
