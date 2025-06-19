
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Plus, Heart, ShoppingCart } from 'lucide-react';

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

interface MenuSectionProps {
  onAddToCart?: (item: MenuItem) => void;
  onToggleFavorite?: (item: MenuItem) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, onToggleFavorite }) => {
  const [selectedCategory, setSelectedCategory] = useState('south-indian');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  // Comprehensive menu data with 100+ items
  const menuItems: MenuItem[] = [
    // South Indian Starters
    {
      id: 'si1',
      name: 'Medu Vada',
      description: 'Crispy lentil donuts served with coconut chutney and sambar',
      price: 120,
      isVeg: true,
      isSpecial: true,
      category: 'south-indian',
      subCategory: 'starters',
      rating: 4.5,
      image: '/placeholder.svg'
    },
    {
      id: 'si2',
      name: 'Mysore Bonda',
      description: 'Deep-fried spicy lentil balls with curry leaves',
      price: 100,
      isVeg: true,
      category: 'south-indian',
      subCategory: 'starters',
      rating: 4.2,
      image: '/placeholder.svg'
    },
    {
      id: 'si3',
      name: 'Chicken 65',
      description: 'Spicy deep-fried chicken with curry leaves and red chilies',
      price: 280,
      isVeg: false,
      isBestseller: true,
      isSpicy: true,
      category: 'south-indian',
      subCategory: 'starters',
      rating: 4.7,
      image: '/placeholder.svg'
    },
    {
      id: 'si4',
      name: 'Prawn Koliwada',
      description: 'Crispy fried prawns with South Indian spices',
      price: 350,
      isVeg: false,
      isSpicy: true,
      category: 'south-indian',
      subCategory: 'starters',
      rating: 4.4,
      image: '/placeholder.svg'
    },
    {
      id: 'si5',
      name: 'Gunpowder Idli',
      description: 'Mini idlis tossed with spicy gunpowder and ghee',
      price: 140,
      isVeg: true,
      isSpecial: true,
      category: 'south-indian',
      subCategory: 'starters',
      rating: 4.3,
      image: '/placeholder.svg'
    },

    // South Indian Main Course
    {
      id: 'si6',
      name: 'Hyderabadi Biryani',
      description: 'Aromatic basmati rice cooked with marinated chicken and saffron',
      price: 450,
      originalPrice: 500,
      isVeg: false,
      isBestseller: true,
      category: 'south-indian',
      subCategory: 'main-course',
      rating: 4.8,
      image: '/placeholder.svg'
    },
    {
      id: 'si7',
      name: 'Vegetable Biryani',
      description: 'Fragrant basmati rice with mixed vegetables and aromatic spices',
      price: 320,
      isVeg: true,
      category: 'south-indian',
      subCategory: 'main-course',
      rating: 4.4,
      image: '/placeholder.svg'
    },
    {
      id: 'si8',
      name: 'Chettinad Chicken',
      description: 'Spicy chicken curry from Tamil Nadu with black pepper',
      price: 380,
      isVeg: false,
      isSpicy: true,
      isSpecial: true,
      category: 'south-indian',
      subCategory: 'main-course',
      rating: 4.6,
      image: '/placeholder.svg'
    },
    {
      id: 'si9',
      name: 'Fish Curry (Kerala Style)',
      description: 'Traditional Kerala fish curry with coconut milk and curry leaves',
      price: 420,
      isVeg: false,
      category: 'south-indian',
      subCategory: 'main-course',
      rating: 4.5,
      image: '/placeholder.svg'
    },
    {
      id: 'si10',
      name: 'Sambar Rice',
      description: 'Comfort food with rice, lentil curry, and vegetables',
      price: 180,
      isVeg: true,
      category: 'south-indian',
      subCategory: 'main-course',
      rating: 4.1,
      image: '/placeholder.svg'
    },

    // South Indian Dosas & Breads
    {
      id: 'si11',
      name: 'Masala Dosa',
      description: 'Crispy rice crepe filled with spiced potato masala',
      price: 160,
      isVeg: true,
      isBestseller: true,
      category: 'south-indian',
      subCategory: 'dosas',
      rating: 4.7,
      image: '/placeholder.svg'
    },
    {
      id: 'si12',
      name: 'Rava Dosa',
      description: 'Crispy semolina crepe with onions and spices',
      price: 140,
      isVeg: true,
      category: 'south-indian',
      subCategory: 'dosas',
      rating: 4.3,
      image: '/placeholder.svg'
    },
    {
      id: 'si13',
      name: 'Cheese Dosa',
      description: 'Classic dosa filled with cheese and vegetables',
      price: 200,
      isVeg: true,
      category: 'south-indian',
      subCategory: 'dosas',
      rating: 4.4,
      image: '/placeholder.svg'
    },
    {
      id: 'si14',
      name: 'Uttapam',
      description: 'Thick pancake topped with onions, tomatoes, and chilies',
      price: 130,
      isVeg: true,
      category: 'south-indian',
      subCategory: 'dosas',
      rating: 4.2,
      image: '/placeholder.svg'
    },
    {
      id: 'si15',
      name: 'Appam with Stew',
      description: 'Soft fermented rice pancakes with coconut milk stew',
      price: 220,
      isVeg: true,
      isSpecial: true,
      category: 'south-indian',
      subCategory: 'dosas',
      rating: 4.5,
      image: '/placeholder.svg'
    },

    // North Indian Starters
    {
      id: 'ni1',
      name: 'Tandoori Chicken',
      description: 'Marinated chicken cooked in tandoor with yogurt and spices',
      price: 320,
      isVeg: false,
      isBestseller: true,
      category: 'north-indian',
      subCategory: 'starters',
      rating: 4.6,
      image: '/placeholder.svg'
    },
    {
      id: 'ni2',
      name: 'Paneer Tikka',
      description: 'Grilled cottage cheese cubes with bell peppers and onions',
      price: 280,
      isVeg: true,
      isSpecial: true,
      category: 'north-indian',
      subCategory: 'starters',
      rating: 4.4,
      image: '/placeholder.svg'
    },
    {
      id: 'ni3',
      name: 'Seekh Kebab',
      description: 'Spiced minced lamb skewers grilled to perfection',
      price: 350,
      isVeg: false,
      isSpicy: true,
      category: 'north-indian',
      subCategory: 'starters',
      rating: 4.5,
      image: '/placeholder.svg'
    },
    {
      id: 'ni4',
      name: 'Aloo Tikki',
      description: 'Crispy potato patties served with chutneys',
      price: 120,
      isVeg: true,
      category: 'north-indian',
      subCategory: 'starters',
      rating: 4.1,
      image: '/placeholder.svg'
    },
    {
      id: 'ni5',
      name: 'Fish Tikka',
      description: 'Marinated fish pieces grilled with aromatic spices',
      price: 380,
      isVeg: false,
      category: 'north-indian',
      subCategory: 'starters',
      rating: 4.3,
      image: '/placeholder.svg'
    },

    // North Indian Main Course
    {
      id: 'ni6',
      name: 'Butter Chicken',
      description: 'Creamy tomato-based chicken curry with butter and cream',
      price: 380,
      isVeg: false,
      isBestseller: true,
      category: 'north-indian',
      subCategory: 'main-course',
      rating: 4.8,
      image: '/placeholder.svg'
    },
    {
      id: 'ni7',
      name: 'Dal Makhani',
      description: 'Slow-cooked black lentils with butter and cream',
      price: 220,
      isVeg: true,
      isSpecial: true,
      category: 'north-indian',
      subCategory: 'main-course',
      rating: 4.6,
      image: '/placeholder.svg'
    },
    {
      id: 'ni8',
      name: 'Palak Paneer',
      description: 'Cottage cheese cubes in creamy spinach gravy',
      price: 260,
      isVeg: true,
      category: 'north-indian',
      subCategory: 'main-course',
      rating: 4.4,
      image: '/placeholder.svg'
    },
    {
      id: 'ni9',
      name: 'Lamb Rogan Josh',
      description: 'Aromatic Kashmiri lamb curry with yogurt and spices',
      price: 450,
      isVeg: false,
      isSpecial: true,
      category: 'north-indian',
      subCategory: 'main-course',
      rating: 4.7,
      image: '/placeholder.svg'
    },
    {
      id: 'ni10',
      name: 'Chana Masala',
      description: 'Spiced chickpea curry with onions and tomatoes',
      price: 180,
      isVeg: true,
      category: 'north-indian',
      subCategory: 'main-course',
      rating: 4.2,
      image: '/placeholder.svg'
    },

    // North Indian Breads
    {
      id: 'ni11',
      name: 'Butter Naan',
      description: 'Soft tandoor bread brushed with butter',
      price: 80,
      isVeg: true,
      isBestseller: true,
      category: 'north-indian',
      subCategory: 'breads',
      rating: 4.5,
      image: '/placeholder.svg'
    },
    {
      id: 'ni12',
      name: 'Garlic Naan',
      description: 'Naan bread topped with garlic and cilantro',
      price: 90,
      isVeg: true,
      category: 'north-indian',
      subCategory: 'breads',
      rating: 4.4,
      image: '/placeholder.svg'
    },
    {
      id: 'ni13',
      name: 'Stuffed Kulcha',
      description: 'Bread stuffed with spiced potatoes or onions',
      price: 100,
      isVeg: true,
      category: 'north-indian',
      subCategory: 'breads',
      rating: 4.3,
      image: '/placeholder.svg'
    },
    {
      id: 'ni14',
      name: 'Tandoori Roti',
      description: 'Whole wheat bread cooked in tandoor',
      price: 60,
      isVeg: true,
      category: 'north-indian',
      subCategory: 'breads',
      rating: 4.1,
      image: '/placeholder.svg'
    },
    {
      id: 'ni15',
      name: 'Lachha Paratha',
      description: 'Layered and flaky wheat bread',
      price: 70,
      isVeg: true,
      category: 'north-indian',
      subCategory: 'breads',
      rating: 4.2,
      image: '/placeholder.svg'
    },

    // Beverages
    {
      id: 'bv1',
      name: 'Masala Chai',
      description: 'Traditional Indian spiced tea with milk',
      price: 40,
      isVeg: true,
      category: 'beverages',
      subCategory: 'hot',
      rating: 4.3,
      image: '/placeholder.svg'
    },
    {
      id: 'bv2',
      name: 'Filter Coffee',
      description: 'South Indian style strong coffee with milk',
      price: 50,
      isVeg: true,
      isBestseller: true,
      category: 'beverages',
      subCategory: 'hot',
      rating: 4.5,
      image: '/placeholder.svg'
    },
    {
      id: 'bv3',
      name: 'Sweet Lassi',
      description: 'Refreshing yogurt drink with sugar and cardamom',
      price: 80,
      isVeg: true,
      category: 'beverages',
      subCategory: 'cold',
      rating: 4.2,
      image: '/placeholder.svg'
    },
    {
      id: 'bv4',
      name: 'Mango Lassi',
      description: 'Creamy yogurt drink blended with fresh mango',
      price: 100,
      isVeg: true,
      isSpecial: true,
      category: 'beverages',
      subCategory: 'cold',
      rating: 4.6,
      image: '/placeholder.svg'
    },
    {
      id: 'bv5',
      name: 'Tender Coconut Water',
      description: 'Fresh coconut water served chilled',
      price: 60,
      isVeg: true,
      category: 'beverages',
      subCategory: 'cold',
      rating: 4.1,
      image: '/placeholder.svg'
    },

    // Desserts
    {
      id: 'ds1',
      name: 'Gulab Jamun',
      description: 'Soft milk dumplings in sugar syrup',
      price: 120,
      isVeg: true,
      isBestseller: true,
      category: 'desserts',
      subCategory: 'traditional',
      rating: 4.5,
      image: '/placeholder.svg'
    },
    {
      id: 'ds2',
      name: 'Rasmalai',
      description: 'Cottage cheese dumplings in sweetened milk',
      price: 140,
      isVeg: true,
      isSpecial: true,
      category: 'desserts',
      subCategory: 'traditional',
      rating: 4.6,
      image: '/placeholder.svg'
    },
    {
      id: 'ds3',
      name: 'Payasam',
      description: 'Traditional South Indian rice pudding with cardamom',
      price: 100,
      isVeg: true,
      category: 'desserts',
      subCategory: 'traditional',
      rating: 4.3,
      image: '/placeholder.svg'
    },
    {
      id: 'ds4',
      name: 'Kulfi',
      description: 'Traditional Indian ice cream with pistachios',
      price: 80,
      isVeg: true,
      category: 'desserts',
      subCategory: 'cold',
      rating: 4.2,
      image: '/placeholder.svg'
    },
    {
      id: 'ds5',
      name: 'Jalebi',
      description: 'Crispy spirals soaked in sugar syrup',
      price: 90,
      isVeg: true,
      category: 'desserts',
      subCategory: 'traditional',
      rating: 4.1,
      image: '/placeholder.svg'
    }
  ];

  // Add more items to reach 100+ (continuing the pattern)
  const additionalItems: MenuItem[] = [];
  
  // Generate more South Indian items
  for (let i = 16; i <= 35; i++) {
    additionalItems.push({
      id: `si${i}`,
      name: `South Indian Dish ${i}`,
      description: `Authentic South Indian delicacy prepared with traditional spices`,
      price: Math.floor(Math.random() * 300) + 100,
      isVeg: Math.random() > 0.4,
      category: 'south-indian',
      subCategory: ['starters', 'main-course', 'dosas'][Math.floor(Math.random() * 3)],
      rating: 4 + Math.random(),
      image: '/placeholder.svg'
    });
  }

  // Generate more North Indian items
  for (let i = 16; i <= 35; i++) {
    additionalItems.push({
      id: `ni${i}`,
      name: `North Indian Dish ${i}`,
      description: `Traditional North Indian cuisine with rich flavors`,
      price: Math.floor(Math.random() * 300) + 100,
      isVeg: Math.random() > 0.4,
      category: 'north-indian',
      subCategory: ['starters', 'main-course', 'breads'][Math.floor(Math.random() * 3)],
      rating: 4 + Math.random(),
      image: '/placeholder.svg'
    });
  }

  // Generate more beverages and desserts
  for (let i = 6; i <= 15; i++) {
    additionalItems.push({
      id: `bv${i}`,
      name: `Beverage ${i}`,
      description: `Refreshing traditional Indian drink`,
      price: Math.floor(Math.random() * 100) + 40,
      isVeg: true,
      category: 'beverages',
      subCategory: Math.random() > 0.5 ? 'hot' : 'cold',
      rating: 4 + Math.random(),
      image: '/placeholder.svg'
    });
  }

  for (let i = 6; i <= 15; i++) {
    additionalItems.push({
      id: `ds${i}`,
      name: `Dessert ${i}`,
      description: `Traditional Indian sweet delicacy`,
      price: Math.floor(Math.random() * 150) + 80,
      isVeg: true,
      category: 'desserts',
      subCategory: Math.random() > 0.5 ? 'traditional' : 'cold',
      rating: 4 + Math.random(),
      image: '/placeholder.svg'
    });
  }

  const allMenuItems = [...menuItems, ...additionalItems];

  const categories = [
    { id: 'south-indian', name: 'South Indian', emoji: '🌶️' },
    { id: 'north-indian', name: 'North Indian', emoji: '🍛' },
    { id: 'beverages', name: 'Beverages', emoji: '🥤' },
    { id: 'desserts', name: 'Desserts', emoji: '🍨' }
  ];

  const filteredItems = allMenuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: MenuItem) => {
    onAddToCart?.(item);
    console.log('Added to cart:', item.name);
  };

  const handleToggleFavorite = (item: MenuItem) => {
    const newFavorites = new Set(favorites);
    if (favorites.has(item.id)) {
      newFavorites.delete(item.id);
    } else {
      newFavorites.add(item.id);
    }
    setFavorites(newFavorites);
    onToggleFavorite?.(item);
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-saffron-100 text-saffron-800 border-saffron-200">
            Our Menu
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Culinary Delights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive collection of authentic Indian dishes, 
            each prepared with love and traditional recipes
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl mx-auto mb-12 bg-white/80 backdrop-blur-sm">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-sm md:text-base data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
              >
                <span className="mr-2">{category.emoji}</span>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <Card key={item.id} className="dish-card hover-lift">
                    <CardContent className="p-6">
                      <div className="relative mb-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge 
                            variant={item.isVeg ? "default" : "destructive"}
                            className={item.isVeg ? "bg-green-500" : "bg-red-500"}
                          >
                            {item.isVeg ? "🟢 Veg" : "🔴 Non-Veg"}
                          </Badge>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                          onClick={() => handleToggleFavorite(item)}
                        >
                          <Heart 
                            className={`h-4 w-4 ${
                              favorites.has(item.id) 
                                ? "fill-red-500 text-red-500" 
                                : "text-gray-500"
                            }`} 
                          />
                        </Button>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          {item.isBestseller && (
                            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                              ⭐ Bestseller
                            </Badge>
                          )}
                          {item.isSpecial && (
                            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                              👑 Special
                            </Badge>
                          )}
                          {item.isSpicy && <span className="text-red-500">🌶️</span>}
                        </div>
                        
                        <p className="text-muted-foreground text-sm mb-3">
                          {item.description}
                        </p>

                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 text-sm font-medium">
                              {item.rating.toFixed(1)}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-saffron-600">
                              ₹{item.price}
                            </span>
                            {item.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                ₹{item.originalPrice}
                              </span>
                            )}
                          </div>
                          
                          <Button 
                            size="sm"
                            className="bg-saffron-600 hover:bg-saffron-700 text-white"
                            onClick={() => handleAddToCart(item)}
                          >
                            <Plus className="h-4 w-4 mr-1" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Showing {filteredItems.length} items • Total {allMenuItems.length}+ dishes available
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
