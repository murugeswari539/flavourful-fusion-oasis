
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Menu, User, Bell, ShoppingCart as ShoppingCartIcon, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface HeaderProps {
  cartItems?: number;
  onMenuClick?: () => void;
  onCartClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  cartItems = 0, 
  onMenuClick, 
  onCartClick
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    toast({
      title: "👋 Logged Out",
      description: "You have been successfully logged out.",
      className: "bg-gradient-to-r from-pink-50 to-blue-50 border-pink-200 text-pink-800",
    });
    navigate('/login');
  };

  const handleNotificationClick = () => {
    setShowNotifications(true);
    toast({
      title: "🔔 Notifications",
      description: "Check out your latest messages and offers!",
      className: "bg-gradient-to-r from-blue-50 to-pink-50 border-blue-200 text-blue-800",
    });
  };

  const notifications = [
    {
      id: 1,
      title: "Welcome Offer!",
      message: "Get 20% off on your first order above ₹500",
      time: "2 minutes ago",
      type: "offer"
    },
    {
      id: 2,
      title: "New Menu Added",
      message: "Check out our latest South Indian specials",
      time: "1 hour ago",
      type: "info"
    },
    {
      id: 3,
      title: "Order Update",
      message: "Your last order was delivered successfully",
      time: "2 hours ago",
      type: "success"
    },
    {
      id: 4,
      title: "Special Weekend Deal",
      message: "Flat 30% off on all biryani items this weekend",
      time: "1 day ago",
      type: "offer"
    }
  ];

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer hover-lift" onClick={() => navigate('/')}>
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gradient">
                Spice Garden
              </h1>
              <p className="text-xs text-muted-foreground hidden md:block">
                Authentic Indian Cuisine
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-pink-600 transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:bg-pink-50 notification-bounce"
              onClick={handleNotificationClick}
            >
              <Bell className="h-5 w-5" />
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-pink-500 to-blue-600 animate-pulse"
              >
                4
              </Badge>
            </Button>

            {/* Shopping Cart */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:bg-blue-50 hover-lift"
              onClick={onCartClick}
            >
              <ShoppingCartIcon className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs animate-bounce-gentle bg-gradient-to-r from-blue-500 to-pink-600"
                >
                  {cartItems}
                </Badge>
              )}
            </Button>

            {/* User Profile with Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-pink-50 hover-lift"
                >
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  {user?.email || 'My Account'}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden hover:bg-pink-50"
              onClick={onMenuClick}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Notifications Dialog */}
      <Dialog open={showNotifications} onOpenChange={setShowNotifications}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-gradient">🔔 Notifications</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className="p-4 rounded-lg border hover-lift cursor-pointer bg-gradient-to-r from-pink-50 to-blue-50"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-sm">{notification.title}</h4>
                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{notification.message}</p>
                <div className="mt-2">
                  <Badge 
                    variant={notification.type === 'offer' ? 'default' : 'secondary'}
                    className={notification.type === 'offer' ? 'bg-gradient-to-r from-pink-500 to-blue-500' : ''}
                  >
                    {notification.type}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
