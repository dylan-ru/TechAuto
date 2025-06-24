import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.contact': 'Contact Us',
    
    // Hero Section
    'hero.title': 'Professional Automotive Service',
    'hero.subtitle': 'Reliable roadside assistance and car maintenance services available 24/7',
    'hero.cta': 'Get Emergency Service',
    'hero.phone': 'Call Now: (555) 123-4567',
    
    // Service Cards
    'hero.service.towing': 'Towing',
    'hero.service.tire': 'Tire Service',
    'hero.service.oil': 'Oil Change',
    'hero.service.fuel': 'Fuel Delivery',
    
    // Trust Indicators
    'hero.trust.available': '24/7 Available',
    'hero.trust.licensed': 'Licensed & Insured',
    'hero.trust.experience': '15+ Years Experience',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Complete automotive solutions for all your needs',
    'services.towing.title': 'Towing Services',
    'services.towing.desc': 'Professional towing and roadside assistance available 24/7',
    'services.wheel.title': 'Tire & Wheel Service',
    'services.wheel.desc': 'Flat tire repair, wheel replacement, and tire installation',
    'services.oil.title': 'Oil Change',
    'services.oil.desc': 'Quick and professional oil change service at your location',
    'services.gas.title': 'Fuel Delivery',
    'services.gas.desc': 'Emergency fuel delivery when you\'re stranded without gas',
    'services.battery.title': 'Battery Jump Start',
    'services.battery.desc': 'Quick battery jump start when your battery dies',
    
    // About
    'about.title': 'About TechAuto Services',
    'about.text': 'With over 15 years of experience in the automotive industry, we provide reliable, professional, and affordable car services. Our certified technicians are available 24/7 to help you get back on the road safely.',
    'about.cta': 'Learn More',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch for immediate assistance',
    'contact.phone': 'Phone: (555) 123-4567',
    'contact.email': 'Email: service@techauto.com',
    'contact.address': 'Address: 123 Main Street, City, State 12345',
    'contact.hours': 'Hours: 24/7 Emergency Service',
    'contact.form.thankyou': 'Thank you for your message! We will contact you soon.',
    
    // Footer
    'footer.rights': '© 2025 TechAuto Services. All rights reserved.',
    'footer.emergency': 'Emergency Service Available 24/7',
    'footer.emergency.call': 'Call (555) 123-4567',
    'footer.company.about': 'Your trusted automotive service partner providing reliable roadside assistance and maintenance services for over 15 years.',
    'footer.services.title': 'Our Services',
    'footer.licenses': 'Licensed & Insured',
    'footer.certified': 'ASE Certified',
    'footer.accredited': 'BBB Accredited'
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Servicio Automotriz Profesional',
    'hero.subtitle': 'Asistencia en carretera confiable y servicios de mantenimiento disponibles 24/7',
    'hero.cta': 'Obtener Servicio de Emergencia',
    'hero.phone': 'Llame Ahora: (555) 123-4567',
    
    // Service Cards
    'hero.service.towing': 'Remolque',
    'hero.service.tire': 'Servicio de Llantas',
    'hero.service.oil': 'Cambio de Aceite',
    'hero.service.fuel': 'Entrega de Combustible',
    
    // Trust Indicators
    'hero.trust.available': 'Disponible 24/7',
    'hero.trust.licensed': 'Licenciado y Asegurado',
    'hero.trust.experience': '+15 Años de Experiencia',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones automotrices completas para todas sus necesidades',
    'services.towing.title': 'Servicios de Grúa',
    'services.towing.desc': 'Servicio de grúa profesional y asistencia en carretera disponible 24/7',
    'services.wheel.title': 'Servicio de Llantas',
    'services.wheel.desc': 'Reparación de llantas pinchadas, reemplazo de ruedas e instalación',
    'services.oil.title': 'Cambio de Aceite',
    'services.oil.desc': 'Servicio rápido y profesional de cambio de aceite en su ubicación',
    'services.gas.title': 'Entrega de Combustible',
    'services.gas.desc': 'Entrega de combustible de emergencia cuando se quede sin gasolina',
    'services.battery.title': 'Arranque de Batería',
    'services.battery.desc': 'Arranque rápido de batería cuando su batería se agota',
    
    // About
    'about.title': 'Acerca de TechAuto Services',
    'about.text': 'Con más de 15 años de experiencia en la industria automotriz, proporcionamos servicios automotrices confiables, profesionales y asequibles. Nuestros técnicos certificados están disponibles 24/7 para ayudarle a volver a la carretera de manera segura.',
    'about.cta': 'Saber Más',
    
    // Contact
    'contact.title': 'Contáctanos',
    'contact.subtitle': 'Póngase en contacto para asistencia inmediata',
    'contact.phone': 'Teléfono: (555) 123-4567',
    'contact.email': 'Email: service@techauto.com',
    'contact.address': 'Dirección: 123 Main Street, City, State 12345',
    'contact.hours': 'Horarios: Servicio de Emergencia 24/7',
    'contact.form.thankyou': 'Gracias por su mensaje! Nos pondremos en contacto pronto.',
    
    // Footer
    'footer.rights': '© 2025 TechAuto Services. Todos los derechos reservados.',
    'footer.emergency': 'Servicio de Emergencia Disponible 24/7',
    'footer.emergency.call': 'Llamar al (555) 123-4567',
    'footer.company.about': 'Su socio de confianza en servicios automotrices que proporciona asistencia en carretera confiable y servicios de mantenimiento durante más de 15 años.',
    'footer.services.title': 'Nuestros Servicios',
    'footer.licenses': 'Licenciado y Asegurado',
    'footer.certified': 'Certificado ASE',
    'footer.accredited': 'Acreditado por BBB'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
