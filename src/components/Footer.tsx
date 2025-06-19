
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

interface FooterProps {
  onNewsletterSubscribe?: (email: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNewsletterSubscribe }) => {
  const [email, setEmail] = React.useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onNewsletterSubscribe?.(email);
      setEmail('');
      alert('Thank you for subscribing to our newsletter!');
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About Us', href: '#about' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Contact', href: '#contact' }
  ];

  const menuCategories = [
    'South Indian Specials',
    'North Indian Delights',
    'Appetizers & Starters',
    'Beverages & Drinks',
    'Traditional Desserts'
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', emoji: '📘' },
    { name: 'Instagram', href: '#', emoji: '📷' },
    { name: 'Twitter', href: '#', emoji: '🐦' },
    { name: 'YouTube', href: '#', emoji: '📺' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for special offers, new menu items, and exclusive events
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                required
              />
              <Button 
                type="submit"
                className="bg-saffron-600 hover:bg-saffron-700 text-white whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-saffron-400 to-spice-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gradient">Spice Garden</h2>
                  <p className="text-xs text-gray-400">Authentic Indian Cuisine</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Experience the authentic flavors of India with our traditional recipes 
                and warm hospitality. Every dish tells a story of heritage and passion.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-saffron-600 rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.emoji}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-saffron-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h4 className="font-semibold mb-6">Our Specialties</h4>
            <ul className="space-y-3">
              {menuCategories.map((category) => (
                <li key={category}>
                  <span className="text-gray-300 text-sm">{category}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-saffron-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">123 Spice Street</p>
                  <p className="text-sm text-gray-300">Chennai, Tamil Nadu 600020</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-saffron-500" />
                <p className="text-sm text-gray-300">+91 98765 43210</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-saffron-500" />
                <p className="text-sm text-gray-300">info@spicegarden.com</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-saffron-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Mon-Thu: 11 AM - 10 PM</p>
                  <p className="text-sm text-gray-300">Fri-Sat: 11 AM - 11 PM</p>
                  <p className="text-sm text-gray-300">Sunday: 11 AM - 10 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Spice Garden. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-saffron-400 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-saffron-400 transition-colors">Terms of Service</a>
              <span>•</span>
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                <span>in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
