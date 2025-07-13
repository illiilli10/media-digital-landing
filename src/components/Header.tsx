
import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate height of the fixed header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/50 border-b border-gray-200 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src="/ws-mdi-logo-medium.png" alt="Logo" className="h-16 w-16 object-contain" />
        </a>
        {/* Centered Title */}
        <div className="flex-1 flex justify-center">
          <span className="text-xs md:text-sm font-medium text-gray-900 text-center tracking-wide font-sans" style={{ fontFamily: 'Inter, Arial, sans-serif', letterSpacing: '0.04em' }}>
            <button 
              onClick={() => scrollToSection('forms')}
              className="mr-8 relative group cursor-pointer transition-all duration-300 hover:text-green-600"
            >
              {t('navigation.startup')}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('forms')}
              className="mr-8 relative group cursor-pointer transition-all duration-300 hover:text-green-600"
            >
              {t('navigation.investor')}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="mr-8 relative group cursor-pointer transition-all duration-300 hover:text-green-600"
            >
              {t('navigation.contact')}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></div>
            </button>
          </span>
        </div>
        {/* Right Side Controls */}
        <div className="flex items-center space-x-3">
          {/* Language Switcher */}
          <LanguageSwitcher />
          {/* Call To Action Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="ml-2 px-5 py-2 rounded-full border border-gray-300 bg-white text-gray-900 font-semibold hover:bg-gray-100 transition shadow hover:border-green-400 hover:text-green-600"
          >
            {t('navigation.callToAction')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
