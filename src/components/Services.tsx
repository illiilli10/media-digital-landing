
import React from 'react';
import { Rocket, PiggyBank } from 'lucide-react';

const Services = () => {
  return (
    <section id="forms" style={{ background: '#fff', color: 'var(--text-100)' }} className="py-10">
      <div className="container mx-auto px-2">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: 'var(--text-100)' }}>
          <span style={{ color: 'var(--primary-100)' }}>Opportunities</span> for Startups & Investors
        </h2>
        <p className="mb-6 text-center text-base" style={{ color: 'var(--text-200)' }}>
          A complete and tailor-made approach to connect high-potential startups with visionary investors.
        </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center">
          {/* Startup Form */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-10 shadow-sm flex flex-col max-w-lg w-full mx-auto mb-4 md:mb-0">
            <div className="flex items-center mb-2 md:mb-3">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-2 md:mr-3" style={{ background: 'var(--accent-100)', color: 'var(--bg-100)' }}>
                <Rocket size={22} />
              </div>
              <h3 className="text-base md:text-lg font-bold" style={{ color: 'var(--text-100)' }}>Want to skyrocket your Startup?</h3>
            </div>
            <p className="mb-3 text-xs md:text-sm" style={{ color: 'var(--text-200)' }}>
              Our mission is to provide local startups with the skills and resources to secure funding from international Business Angels, VCs, LPs and realize their vision, ensuring a solid growth trajectory in a competitive market landscape.
            </p>
            <form className="flex flex-col gap-2 md:gap-3">
              <label className="font-medium text-xs md:text-sm">Full Name
                <input type="text" className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200" placeholder="" />
              </label>
              <label className="font-medium text-xs md:text-sm">Startup Name
                <input type="text" className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200" placeholder="" />
              </label>
              <label className="font-medium text-xs md:text-sm">Phone Number
                <input type="text" className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200" placeholder="" />
              </label>
              <label className="font-medium text-xs md:text-sm">Email
                <input type="email" className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200" placeholder="" />
              </label>
              <label className="font-medium text-xs md:text-sm">Annual Turnover Range
                <select className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200">
                  <option>Choose one ...</option>
                  <option>$5,000-$50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000 - $500,000</option>
                  <option>More than $500,000</option>
                </select>
              </label>
              <label className="font-medium text-xs md:text-sm">Number of employees
                <input type="number" className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200" placeholder="" />
              </label>
              <label className="font-medium text-xs md:text-sm">Main need
                <input type="text" className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200" placeholder="" />
              </label>
              <label className="font-medium text-xs md:text-sm">Have you already raised funds?
                <select className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200">
                  <option>Choose one ...</option>
                  <option>Not Yet</option>
                  <option>In Progress</option>
                  <option>Yes</option>
                </select>
              </label>
              <button type="submit" className="cta-button mt-2 py-2 px-4 text-base">Send</button>
            </form>
          </div>
          {/* Investor Form */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-10 shadow-sm flex flex-col max-w-lg w-full mx-auto">
            <div className="flex items-center mb-2 md:mb-3">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-2 md:mr-3" style={{ background: 'var(--primary-100)', color: 'var(--bg-100)' }}>
                <PiggyBank size={22} />
              </div>
              <h3 className="text-base md:text-lg font-bold" style={{ color: 'var(--text-100)' }}>Invest in Tomorrow’s Unicorns</h3>
            </div>
            <p className="mb-3 text-xs md:text-sm" style={{ color: 'var(--text-200)' }}>
              Looking for an opportunity to be part of the next big success story? 15X, 20X ROI ? Discover unparalleled investment opportunities with Media Digital Invest's exclusive selection of startups poised to become tomorrow's unicorns.
            </p>
            <form className="flex flex-col gap-2 md:gap-3">
              <label className="font-medium text-xs md:text-sm">Full Name
                <input type="text" className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200" placeholder="" />
              </label>
              <label className="font-medium text-xs md:text-sm">VC / LP Name
                <input type="text" className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200" placeholder="" />
              </label>
              <label className="font-medium text-xs md:text-sm">Phone Number
                <input type="text" className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200" placeholder="" />
              </label>
              <label className="font-medium text-xs md:text-sm">Email
                <input type="email" className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200" placeholder="" />
              </label>
              <label className="font-medium text-xs md:text-sm">Preferred Investment Range
                <select className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200">
                  <option>Choose one ...</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000 - $500,000</option>
                  <option>$500,000 - $1,000,000</option>
                  <option>More than $1,000,000</option>
                </select>
              </label>
              <label className="font-medium text-xs md:text-sm">Preferred Investment Stage
                <select className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200">
                  <option>Choose one ...</option>
                  <option>Seed</option>
                  <option>Early-Stage </option>
                  <option>Growth-Stage</option>
                  <option>Late-Stage</option>
                </select>
              </label>
              <label className="font-medium text-xs md:text-sm">Preferred Industries
                <select className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200">
                  <option>Choose one ...</option>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Fintech</option>
                  <option>Edtech</option>
                  <option>E-commerce</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="font-medium text-xs md:text-sm">Investment Horizon
                <select className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-xs md:text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200">
                  <option>Choose one ...</option>
                  <option>short-Term(1-2 years)</option>
                  <option>Medium-Term(3-5 years)</option>
                  <option>long-Term(5+ years)</option>
                </select>
              </label>
              <button type="submit" className="cta-button mt-2 py-2 px-4 text-base">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
