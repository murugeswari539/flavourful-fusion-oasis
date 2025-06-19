
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeroSectionProps {
  onOrderNow?: () => void;
  onViewMenu?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOrderNow, onViewMenu }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-saffron-900/80 via-spice-800/70 to-curry-900/80"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-saffron-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-spice-400 rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 bg-curry-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-saffron-300 rounded-full animate-bounce-gentle"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Welcome badge */}
          <Badge className="mb-6 bg-saffron-500/20 text-saffron-100 border-saffron-400/30 hover:bg-saffron-500/30 transition-colors">
            🍛 Welcome to Authentic South Indian Experience
          </Badge>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block animate-slide-in">Taste the</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-saffron-300 to-curry-300 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              Heritage
            </span>
            <span className="block animate-slide-in" style={{ animationDelay: '0.4s' }}>
              of India
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            From the spicy curries of Tamil Nadu to the royal flavors of North India, 
            experience authentic recipes passed down through generations.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              className="bg-saffron-600 hover:bg-saffron-700 text-white px-8 py-3 text-lg font-semibold hover-lift spice-shadow"
              onClick={onOrderNow}
            >
              Order Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-saffron-600 px-8 py-3 text-lg font-semibold hover-lift"
              onClick={onViewMenu}
            >
              View Menu
            </Button>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-saffron-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌶️</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Authentic Spices</h3>
              <p className="text-gray-300 text-sm">Hand-ground spices imported directly from India</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-spice-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Expert Chefs</h3>
              <p className="text-gray-300 text-sm">Traditional recipes from master chefs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-curry-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Fresh Delivery</h3>
              <p className="text-gray-300 text-sm">Hot and fresh meals delivered to your door</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
