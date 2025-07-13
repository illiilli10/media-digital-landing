
import React, { useState } from 'react';

const images = [
  '/2.jpg',
  '/3.jpg',
  '/5.jpg',
  '/6.jpg',
  '/6 (1).jpg',
  '/10.jpg',
  '/11.jpg',
  '/13.jpg',
  '/18.jpg',
];

const VISIBLE = 2; // Number of images visible on each side
const GREEN = '#27ae60';
const BLACK = '#111';
const GRAY = '#bbb';

const CaseStudies = () => {
  const [current, setCurrent] = useState(0);

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Helper to get the correct index with wrap-around
  const getIndex = (idx: number) => (idx + images.length) % images.length;

  return (
    <section className="py-20 min-h-[600px] bg-white">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#222' }}>
          Knowledge Space: <span style={{ color: BLACK }}>Experts, Insights, Networking</span>
        </h2>
        <div className="relative w-full max-w-4xl h-[360px] flex items-center justify-center perspective-3d">
          {/* Left navigation button */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-xl border border-gray-200 transition-all duration-200 focus:outline-none hover:shadow-2xl hover:scale-110 active:scale-95 group z-20"
            style={{ backdropFilter: 'blur(4px)', marginLeft: '-28px' }}
            onClick={goPrev}
            aria-label="Previous image"
            title="Previous"
          >
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke={GREEN} className="transition-colors duration-200 group-hover:stroke-[#219150] group-active:stroke-[#176b3a]">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Right navigation button */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-xl border border-gray-200 transition-all duration-200 focus:outline-none hover:shadow-2xl hover:scale-110 active:scale-95 group z-20"
            style={{ backdropFilter: 'blur(4px)', marginRight: '-28px' }}
            onClick={goNext}
            aria-label="Next image"
            title="Next"
          >
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke={GREEN} className="transition-colors duration-200 group-hover:stroke-[#219150] group-active:stroke-[#176b3a]">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {[...Array(VISIBLE * 2 + 1)].map((_, i) => {
            const pos = i - VISIBLE;
            const imgIdx = getIndex(current + pos);
            const isCenter = pos === 0;
            // 3D coverflow effect
            const translateX = pos * 160;
            const rotateY = pos * -45;
            const scale = isCenter ? 1.02 : 0.8;
            const zIndex = 100 - Math.abs(pos);
            const opacity = Math.abs(pos) > VISIBLE ? 0 : 1;
            return (
              <img
                key={imgIdx}
                src={images[imgIdx]}
                alt={`Case study ${imgIdx + 1}`}
                className="absolute rounded-3xl shadow-2xl border-4 transition-all duration-700"
                style={{
                  width: isCenter ? '260px' : '160px',
                  height: isCenter ? '360px' : '220px',
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                  zIndex,
                  opacity,
                  borderColor: isCenter ? BLACK : GRAY,
                  boxShadow: isCenter ? '0 12px 48px rgba(0,0,0,0.18)' : '0 2px 12px rgba(0,0,0,0.08)',
                  background: '#fff',
                  objectFit: 'cover',
                  filter: isCenter ? 'none' : 'brightness(0.88)',
                  pointerEvents: isCenter ? 'auto' : 'none',
                  transition: 'all 0.7s cubic-bezier(.4,2,.3,1)',
                }}
              />
            );
          })}
        </div>
      </div>
      <style>{`
        .perspective-3d {
          perspective: 1400px;
          min-height: 360px;
        }
        @media (max-width: 900px) {
          .perspective-3d img {
            width: 98vw !important;
            height: 220px !important;
            max-width: 98vw !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;
