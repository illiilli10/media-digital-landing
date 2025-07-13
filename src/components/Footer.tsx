
import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/mediadigitalinvest/',
    Icon: Linkedin,
    color: '#0077b5',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/mediadigitalinvest/',
    Icon: Instagram,
    color: '#E4405F',
  },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 rounded-t-2xl">
      <div className="container mx-auto px-6">
        {/* Main footer content - centered */}
        <div className="flex flex-col items-center mb-6">
          {/* Logo */}
          <div className="mb-6">
            <img 
              src="/ws-mdi-logo-medium.png" 
              alt="Media Digital Invest Logo" 
              className="h-24 w-auto object-contain"
            />
          </div>
          
          {/* Company name */}
          <div className="mb-6">
            <span className="text-3xl font-bold text-gray-900 tracking-wide">
              Media Digital Invest
            </span>
          </div>

          {/* Social Media */}
          <div className="flex space-x-6 mb-6">
            {socialLinks.map(({ name, url, Icon, color }) => (
              <div key={name} className="relative group flex flex-col items-center">
                <a
                  href={url}
                  aria-label={name}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:bg-[var(--brand)]"
                  style={{ '--brand': color } as React.CSSProperties}
                >
                  <Icon size={20} className="text-gray-700 group-hover:text-white transition-colors duration-200" />
                </a>
                {/* Tooltip label */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-[var(--brand)] text-white text-xs font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-200 pointer-events-none shadow-lg z-10" style={{ '--brand': color } as React.CSSProperties}>
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="flex space-x-4 mb-6">
            <button className="px-4 py-1 border border-gray-300 rounded-full text-gray-700 bg-white hover:bg-gray-100 transition-colors text-sm font-medium hover:border-[#27ae60]">
              ENGLISH
            </button>
            <button className="px-4 py-1 border border-gray-300 rounded-full text-gray-700 bg-white hover:bg-gray-100 transition-colors text-sm font-medium hover:border-[#27ae60]">
              عربي
            </button>
            <button className="px-4 py-1 border border-gray-300 rounded-full text-gray-700 bg-white hover:bg-gray-100 transition-colors text-sm font-medium hover:border-[#27ae60]">
              FRANÇAIS
            </button>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-gray-500 text-sm text-center">
          © Copyright Media Digital Invest. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
