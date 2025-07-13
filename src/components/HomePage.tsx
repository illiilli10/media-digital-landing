import React from 'react';
import Header from './Header';
import Services from './Services';
import About from './About';
import CaseStudies from './CaseStudies';
import Contact from './Contact';
import Footer from './Footer';

const partnerLogos = [
  '/youcan.jpg',
  '/ws-mdi-logo-medium.png',
  '/stayhere.jpg',
  '/nsayblik.png',
  '/logo-myteam-1.png',
  '/moroccoai.png',
  '/guichet.png',
];

const HomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ minHeight: '100vh', color: '#2c2c2c' }}>
      <Header />
      <div className="flex flex-col min-h-screen justify-between">
        {/* Hero Section */}
        <div className="relative flex flex-1 items-center justify-center px-8 py-20 w-full overflow-hidden" style={{ minHeight: '60vh' }}>
          {/* SVG background only for Hero section */}
          <div className="absolute inset-0 -z-10 pointer-events-none w-full h-full">
            <svg width="100%" height="600" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <radialGradient id="blueGreenHero" cx="60%" cy="30%" r="90%" fx="60%" fy="30%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                  <stop offset="60%" stopColor="#2ECC71" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.12" />
                </radialGradient>
                <filter id="blur1" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="60" />
                </filter>
                <filter id="blur2" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="90" />
                </filter>
              </defs>
              <rect width="1440" height="600" fill="url(#blueGreenHero)" />
              {/* Layered, blurred organic shapes for hero effect */}
              <ellipse cx="300" cy="220" rx="320" ry="180" fill="#38bdf8" fillOpacity="0.22" filter="url(#blur1)" />
              <ellipse cx="1200" cy="400" rx="260" ry="140" fill="#2ECC71" fillOpacity="0.18" filter="url(#blur2)" />
              <ellipse cx="900" cy="150" rx="180" ry="90" fill="#38bdf8" fillOpacity="0.13" filter="url(#blur2)" />
            </svg>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center max-w-4xl text-center mx-auto">
            <h1
              className="text-4xl md:text-5xl font-extrabold mb-3 leading-tight"
              style={{
                color: '#111',
                letterSpacing: '-1px',
                fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
                maxWidth: '900px',
                width: '100%',
                fontWeight: 800,
                lineHeight: 1.15,
              }}
            >
      Media Digital Invest is a premier growth accelerator specializing in transforming high-potential startups into industry leaders. 
            </h1>
            <p className="text-lg md:text-xl mb-2" style={{ color: '#2c2c2c', lineHeight: 1.6, fontFamily: 'sans-serif', fontWeight: 400 }}>
            We carefully choose to collaborate with prominent entrepreneurs who are leaders in their respective technology domains.
            </p>
            <p className="text-lg md:text-xl mb-5" style={{ color: '#2c2c2c', lineHeight: 1.6, fontFamily: 'sans-serif', fontWeight: 400 }}>
            Our unique approach provides intensive One-to-One support from experienced experts. This has led to numerous success stories, exemplified by our founder, Abderrazak Yousfi, who pioneered the first startup exit in Morocco, highlighting our commitment to tangible results.
            </p>
            <a
              href="https://www.linkedin.com/in/abderrazakyousfi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full max-w-xs py-3 px-6 rounded-full font-semibold shadow-md transition-colors duration-200 text-base mx-auto mt-4"
              style={{
                background: 'linear-gradient(90deg, #38bdf8 0%, #2ECC71 100%)',
                color: '#fff',
                border: 'none',
                boxShadow: '0 2px 8px #cccccc',
                letterSpacing: '0.5px',
                fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
              }}
            >
              Abderrazak Yousfi
            </a>
          </div>
        </div>
        {/* Marquee Carousel */}
        <div className="w-full py-8 bg-[#fff] relative rounded-full ">
          <div className="marquee flex items-center space-x-8" style={{ animation: 'marquee 30s linear infinite', width: 'max-content' }}>
            {partnerLogos.concat(partnerLogos).map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center h-20 w-36 mx-2 bg-white rounded-lg shadow-sm border border-[#e0e0e0] transition-transform hover:scale-105"
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={logo}
                  alt="logo"
                  className="max-h-[70%] max-w-[70%] w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ display: 'block', margin: '0 auto' }}
                />
              </div>
            ))}
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </div>
      <Services />
      <About />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage; 