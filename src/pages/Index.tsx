
import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';
import AboutSection from '@/components/AboutSection';
import ReservationSection from '@/components/ReservationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ShoppingCart from '@/components/ShoppingCart';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  isVeg: boolean;
  image: string;
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  isVeg: boolean;
  isSpecial?: boolean;
  isBestseller?: boolean;
  isSpicy?: boolean;
  category: string;
  subCategory: string;
  rating: number;
  image: string;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cart functionality
  const addToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prev, {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
          isVeg: item.isVeg,
          image: item.image
        }];
      }
    });
    
    console.log(`Added ${item.name} to cart`);
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Navigation handlers
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderNow = () => {
    scrollToSection('menu');
  };

  const handleViewMenu = () => {
    scrollToSection('menu');
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log('Mobile menu toggled');
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout with items:', cartItems);
    alert('Checkout functionality would be implemented here with payment gateway integration');
    setIsCartOpen(false);
  };

  const handleReservationSubmit = (reservation: any) => {
    console.log('Reservation submitted:', reservation);
  };

  const handleContactSubmit = (contactData: any) => {
    console.log('Contact form submitted:', contactData);
  };

  const handleNewsletterSubscribe = (email: string) => {
    console.log('Newsletter subscription:', email);
  };

  const handleToggleFavorite = (item: MenuItem) => {
    console.log('Toggled favorite for:', item.name);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header
        cartItems={getTotalCartItems()}
        onMenuClick={handleMobileMenuClick}
        onCartClick={handleCartClick}
      />

      {/* Main Content */}
      <main>
        <HeroSection
          onOrderNow={handleOrderNow}
          onViewMenu={handleViewMenu}
        />

        <MenuSection
          onAddToCart={addToCart}
          onToggleFavorite={handleToggleFavorite}
        />

        <AboutSection />

        <ReservationSection
          onReservationSubmit={handleReservationSubmit}
        />

        <ContactSection
          onContactSubmit={handleContactSubmit}
        />
      </main>

      {/* Footer */}
      <Footer
        onNewsletterSubscribe={handleNewsletterSubscribe}
      />

      {/* Shopping Cart Sidebar */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed top-16 left-0 right-0 bg-white p-6 shadow-lg">
            <nav className="space-y-4">
              {['Home', 'Menu', 'About', 'Reservations', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg font-medium text-foreground hover:text-saffron-600 transition-colors"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToSection(item.toLowerCase());
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
