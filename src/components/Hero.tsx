
import React from 'react';
import { ArrowRight, Play, TrendingUp, Users, DollarSign } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-navy via-soft-navy to-dark-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-sky-blue/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-saffron/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-sky-blue/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-sky-blue/10 border border-sky-blue/20 rounded-full mb-8 animate-fade-in">
            <TrendingUp size={16} className="text-sky-blue mr-2" />
            <span className="text-sky-blue text-sm font-medium">+7M€ générés pour nos clients</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Multipliez votre CA par{' '}
            <span className="gradient-text">3 en 90 jours</span>
            <br />
            avec notre stratégie digitale
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
            Nous transformons les entrepreneurs ambitieux en leaders de leur marché grâce à une stratégie digitale sur-mesure et des campagnes publicitaires qui convertissent.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <button className="cta-button group">
              Réserver ma consultation gratuite
              <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="secondary-button group">
              <Play size={20} className="mr-2" />
              Voir nos résultats
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{animationDelay: '0.9s'}}>
            <div className="glass-card p-6">
              <div className="flex items-center justify-center mb-4">
                <Users size={24} className="text-sky-blue" />
              </div>
              <div className="text-3xl font-bold text-saffron mb-2">+120</div>
              <div className="text-gray-300">Clients satisfaits</div>
            </div>
            <div className="glass-card p-6">
              <div className="flex items-center justify-center mb-4">
                <DollarSign size={24} className="text-sky-blue" />
              </div>
              <div className="text-3xl font-bold text-saffron mb-2">7M€+</div>
              <div className="text-gray-300">Chiffre d'affaires généré</div>
            </div>
            <div className="glass-card p-6">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp size={24} className="text-sky-blue" />
              </div>
              <div className="text-3xl font-bold text-saffron mb-2">300%</div>
              <div className="text-gray-300">ROI moyen</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sky-blue/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sky-blue rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
