
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Plus, Heart, ShoppingCartIcon } from 'lucide-react';

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

  // Comprehensive menu data based on user's requirements
  const menuItems: MenuItem[] = [
    // South Indian Vegetarian Dishes
    {
      id: 'si_veg_1',
      name: 'Idli-Sambar',
      description: 'Steamed rice cakes with lentil curry',
      price: 80,
      isVeg: true,
      isBestseller: true,
      category: 'south-indian',
      subCategory: 'vegetarian',
      rating: 4.6,
      image: '/placeholder.svg'
    },
    {
      id: 'si_veg_2',
      name: 'Masala Dosa',
      description: 'Thin rice crepe with spiced potato filling',
      price: 120,
      isVeg: true,
      isBestseller: true,
      category: 'south-indian',
      subCategory: 'vegetarian',
      rating: 4.8,
      image: '/placeholder.svg'
    },
    {
      id: 'si_veg_3',
      name: 'Rava Dosa',
      description: 'Crispy semolina crepe with vegetables',
      price: 140,
      isVeg: true,
      category: 'south-indian',
      subCategory: 'vegetarian',
      rating: 4.5,
      image: '/placeholder.svg'
    },
    {
      id: 'si_veg_4',
      name: 'Medu Vada',
      description: 'Fried lentil donuts served with chutney',
      price: 100,
      isVeg: true,
      category: 'south-indian',
      subCategory: 'vegetarian',
      rating: 4.4,
      image: '/placeholder.svg'
    },
    {
      id: 'si_veg_5',
      name: 'Upma',
      description: 'Semolina-based savory breakfast dish',
      price: 90,
      isVeg: true,
      category: 'south-indian',
      subCategory: 'vegetarian',
      rating: 4.2,
      image: '/placeholder.svg'
    },
    {
      id: 'si_veg_6',
      name: 'Pongal',
      description: 'Creamy rice-lentil porridge with ghee',
      price: 110,
      isVeg: true,
      category: 'south-indian',
      subCategory: 'vegetarian',
      rating: 4.3,
      image: '/placeholder.svg'
    },
    {
      id: 'si_veg_7',
      name: 'Avial',
      description: 'Mixed vegetables in coconut yogurt gravy',
      price: 160,
      isVeg: true,
      isSpecial: true,
      category: 'south-indian',
      subCategory: 'vegetarian',
      rating: 4.5,
      image: '/placeholder.svg'
    },
    {
      id: 'si_veg_8',
      name: 'Poriyal',
      description: 'Stir-fried vegetables with coconut',
      price: 140,
      isVeg: true,
      category: 'south-indian',
      subCategory: 'vegetarian',
      rating: 4.1,
      image: '/placeholder.svg'
    },
    {
      id: 'si_veg_9',
      name: 'Rasam',
      description: 'Spicy tamarind soup with aromatic spices',
      price: 70,
      isVeg: true,
      isSpicy: true,
      category: 'south-indian',
      subCategory: 'vegetarian',
      rating: 4.4,
      image: '/placeholder.svg'
    },
    {
      id: 'si_veg_10',
      name: 'Vegetable Kurma',
      description: 'Mixed vegetables in coconut-based gravy',
      price: 180,
      isVeg: true,
      category: 'south-indian',
      subCategory: 'vegetarian',
      rating: 4.3,
      image: '/placeholder.svg'
    },
    {
      id: 'si_veg_11',
      name: 'Lemon Rice',
      description: 'Tangy rice with curry leaves and mustard seeds',
      price: 120,
      isVeg: true,
      category: 'south-indian',
      subCategory: 'vegetarian',
      rating: 4.2,
      image: '/placeholder.svg'
    },
    {
      id: 'si_veg_12',
      name: 'Curd Rice',
      description: 'Comfort rice with yogurt and tempering',
      price: 100,
      isVeg: true,
      category: 'south-indian',
      subCategory: 'vegetarian',
      rating: 4.0,
      image: '/placeholder.svg'
    },
    {
      id: 'si_veg_13',
      name: 'Vegetable Biryani (South Style)',
      description: 'Spiced basmati rice with mixed vegetables and coconut',
      price: 280,
      isVeg: true,
      isSpecial: true,
      category: 'south-indian',
      subCategory: 'vegetarian',
      rating: 4.6,
      image: '/placeholder.svg'
    },
    {
      id: 'si_veg_14',
      name: 'Mushroom Biryani',
      description: 'South-style biryani with marinated mushrooms',
      price: 320,
      isVeg: true,
      category: 'south-indian',
      subCategory: 'vegetarian',
      rating: 4.4,
      image: '/placeholder.svg'
    },

    // South Indian Non-Vegetarian Dishes
    {
      id: 'si_nonveg_1',
      name: 'Chettinad Chicken Curry',
      description: 'Spicy black pepper chicken curry from Tamil Nadu',
      price: 380,
      isVeg: false,
      isSpicy: true,
      isBestseller: true,
      category: 'south-indian',
      subCategory: 'non-vegetarian',
      rating: 4.8,
      image: '/placeholder.svg'
    },
    {
      id: 'si_nonveg_2',
      name: 'Andhra Chicken Fry',
      description: 'Dry, spicy chicken fry with red chilies',
      price: 350,
      isVeg: false,
      isSpicy: true,
      category: 'south-indian',
      subCategory: 'non-vegetarian',
      rating: 4.6,
      image: '/placeholder.svg'
    },
    {
      id: 'si_nonveg_3',
      name: 'Mutton Sukka',
      description: 'Dry mutton fry with coconut and spices',
      price: 480,
      isVeg: false,
      isSpicy: true,
      category: 'south-indian',
      subCategory: 'non-vegetarian',
      rating: 4.7,
      image: '/placeholder.svg'
    },
    {
      id: 'si_nonveg_4',
      name: 'Fish Moilee',
      description: 'Kerala-style coconut fish curry',
      price: 420,
      isVeg: false,
      isSpecial: true,
      category: 'south-indian',
      subCategory: 'non-vegetarian',
      rating: 4.5,
      image: '/placeholder.svg'
    },
    {
      id: 'si_nonveg_5',
      name: 'Prawn Thokku',
      description: 'Spicy shrimp curry with tomatoes',
      price: 450,
      isVeg: false,
      isSpicy: true,
      category: 'south-indian',
      subCategory: 'non-vegetarian',
      rating: 4.4,
      image: '/placeholder.svg'
    },
    {
      id: 'si_nonveg_6',
      name: 'Chicken 65',
      description: 'Deep-fried spicy chicken appetizer',
      price: 280,
      isVeg: false,
      isSpicy: true,
      isBestseller: true,
      category: 'south-indian',
      subCategory: 'non-vegetarian',
      rating: 4.7,
      image: '/placeholder.svg'
    },
    {
      id: 'si_nonveg_7',
      name: 'Kerala Beef Fry',
      description: 'Slow-cooked beef with coconut slices',
      price: 480,
      isVeg: false,
      isSpecial: true,
      category: 'south-indian',
      subCategory: 'non-vegetarian',
      rating: 4.6,
      image: '/placeholder.svg'
    },
    {
      id: 'si_nonveg_8',
      name: 'Hyderabadi Chicken Biryani',
      description: 'Dum-cooked, layered rice with spicy marinated chicken',
      price: 450,
      originalPrice: 500,
      isVeg: false,
      isBestseller: true,
      isSpecial: true,
      category: 'south-indian',
      subCategory: 'non-vegetarian',
      rating: 4.9,
      image: '/placeholder.svg'
    },
    {
      id: 'si_nonveg_9',
      name: 'Ambur Biryani',
      description: 'Tamil Nadu special with seeraga samba rice',
      price: 420,
      isVeg: false,
      isSpecial: true,
      category: 'south-indian',
      subCategory: 'non-vegetarian',
      rating: 4.7,
      image: '/placeholder.svg'
    },
    {
      id: 'si_nonveg_10',
      name: 'Fish Biryani',
      description: 'Coastal specialty biryani with fresh fish',
      price: 480,
      isVeg: false,
      isSpecial: true,
      category: 'south-indian',
      subCategory: 'non-vegetarian',
      rating: 4.5,
      image: '/placeholder.svg'
    },

    // South Indian Desserts
    {
      id: 'si_dessert_1',
      name: 'Payasam (Semiya)',
      description: 'Vermicelli pudding with milk and cardamom',
      price: 120,
      isVeg: true,
      isBestseller: true,
      category: 'south-indian',
      subCategory: 'desserts',
      rating: 4.5,
      image: '/placeholder.svg'
    },
    {
      id: 'si_dessert_2',
      name: 'Mysore Pak',
      description: 'Ghee-rich sweet from Karnataka',
      price: 150,
      isVeg: true,
      isSpecial: true,
      category: 'south-indian',
      subCategory: 'desserts',
      rating: 4.6,
      image: '/placeholder.svg'
    },
    {
      id: 'si_dessert_3',
      name: 'Kesari',
      description: 'Semolina sweet with saffron and ghee',
      price: 100,
      isVeg: true,
      category: 'south-indian',
      subCategory: 'desserts',
      rating: 4.3,
      image: '/placeholder.svg'
    },
    {
      id: 'si_dessert_4',
      name: 'Unniyappam',
      description: 'Sweet banana fritters with jaggery',
      price: 140,
      isVeg: true,
      category: 'south-indian',
      subCategory: 'desserts',
      rating: 4.2,
      image: '/placeholder.svg'
    },
    {
      id: 'si_dessert_5',
      name: 'Coconut Barfi',
      description: 'Sweet made with fresh coconut and milk',
      price: 130,
      isVeg: true,
      category: 'south-indian',
      subCategory: 'desserts',
      rating: 4.4,
      image: '/placeholder.svg'
    },

    // North Indian Vegetarian Dishes
    {
      id: 'ni_veg_1',
      name: 'Paneer Butter Masala',
      description: 'Cottage cheese in creamy tomato gravy',
      price: 280,
      isVeg: true,
      isBestseller: true,
      category: 'north-indian',
      subCategory: 'vegetarian',
      rating: 4.7,
      image: '/placeholder.svg'
    },
    {
      id: 'ni_veg_2',
      name: 'Chole Bhature',
      description: 'Spicy chickpeas with fried bread',
      price: 220,
      isVeg: true,
      isBestseller: true,
      category: 'north-indian',
      subCategory: 'vegetarian',
      rating: 4.6,
      image: '/placeholder.svg'
    },
    {
      id: 'ni_veg_3',
      name: 'Rajma Chawal',
      description: 'Kidney beans curry with basmati rice',
      price: 200,
      isVeg: true,
      category: 'north-indian',
      subCategory: 'vegetarian',
      rating: 4.4,
      image: '/placeholder.svg'
    },
    {
      id: 'ni_veg_4',
      name: 'Palak Paneer',
      description: 'Spinach and cottage cheese curry',
      price: 260,
      isVeg: true,
      category: 'north-indian',
      subCategory: 'vegetarian',
      rating: 4.5,
      image: '/placeholder.svg'
    },
    {
      id: 'ni_veg_5',
      name: 'Aloo Gobi',
      description: 'Potato-cauliflower curry with spices',
      price: 180,
      isVeg: true,
      category: 'north-indian',
      subCategory: 'vegetarian',
      rating: 4.2,
      image: '/placeholder.svg'
    },
    {
      id: 'ni_veg_6',
      name: 'Dal Makhani',
      description: 'Creamy black lentils with butter',
      price: 220,
      isVeg: true,
      isSpecial: true,
      category: 'north-indian',
      subCategory: 'vegetarian',
      rating: 4.8,
      image: '/placeholder.svg'
    },
    {
      id: 'ni_veg_7',
      name: 'Baingan Bharta',
      description: 'Smoked eggplant mash with spices',
      price: 200,
      isVeg: true,
      category: 'north-indian',
      subCategory: 'vegetarian',
      rating: 4.3,
      image: '/placeholder.svg'
    },
    {
      id: 'ni_veg_8',
      name: 'Aloo Paratha',
      description: 'Stuffed potato flatbread with butter',
      price: 120,
      isVeg: true,
      category: 'north-indian',
      subCategory: 'vegetarian',
      rating: 4.4,
      image: '/placeholder.svg'
    },
    {
      id: 'ni_veg_9',
      name: 'Paneer Biryani',
      description: 'Cottage cheese biryani with rich North Indian masala',
      price: 320,
      isVeg: true,
      isSpecial: true,
      category: 'north-indian',
      subCategory: 'vegetarian',
      rating: 4.5,
      image: '/placeholder.svg'
    },

    // North Indian Non-Vegetarian Dishes
    {
      id: 'ni_nonveg_1',
      name: 'Butter Chicken',
      description: 'Creamy tomato chicken curry with butter',
      price: 380,
      isVeg: false,
      isBestseller: true,
      category: 'north-indian',
      subCategory: 'non-vegetarian',
      rating: 4.8,
      image: '/placeholder.svg'
    },
    {
      id: 'ni_nonveg_2',
      name: 'Chicken Tikka Masala',
      description: 'Grilled chicken in spicy tomato gravy',
      price: 350,
      isVeg: false,
      isBestseller: true,
      category: 'north-indian',
      subCategory: 'non-vegetarian',
      rating: 4.7,
      image: '/placeholder.svg'
    },
    {
      id: 'ni_nonveg_3',
      name: 'Rogan Josh',
      description: 'Kashmiri mutton curry with aromatic spices',
      price: 450,
      isVeg: false,
      isSpecial: true,
      category: 'north-indian',
      subCategory: 'non-vegetarian',
      rating: 4.6,
      image: '/placeholder.svg'
    },
    {
      id: 'ni_nonveg_4',
      name: 'Tandoori Chicken',
      description: 'Clay oven roasted chicken with yogurt marinade',
      price: 320,
      isVeg: false,
      category: 'north-indian',
      subCategory: 'non-vegetarian',
      rating: 4.5,
      image: '/placeholder.svg'
    },
    {
      id: 'ni_nonveg_5',
      name: 'Keema Matar',
      description: 'Minced mutton with green peas',
      price: 380,
      isVeg: false,
      category: 'north-indian',
      subCategory: 'non-vegetarian',
      rating: 4.4,
      image: '/placeholder.svg'
    },
    {
      id: 'ni_nonveg_6',
      name: 'Lucknowi Mutton Biryani',
      description: 'Fragrant saffron-flavored rice with marinated mutton',
      price: 480,
      isVeg: false,
      isSpecial: true,
      category: 'north-indian',
      subCategory: 'non-vegetarian',
      rating: 4.9,
      image: '/placeholder.svg'
    },
    {
      id: 'ni_nonveg_7',
      name: 'Chicken Biryani (Delhi Style)',
      description: 'Spicy masala-rich biryani with fried onions',
      price: 420,
      isVeg: false,
      isBestseller: true,
      category: 'north-indian',
      subCategory: 'non-vegetarian',
      rating: 4.7,
      image: '/placeholder.svg'
    },
    {
      id: 'ni_nonveg_8',
      name: 'Egg Biryani',
      description: 'Hard-boiled eggs layered with flavored rice',
      price: 280,
      isVeg: false,
      category: 'north-indian',
      subCategory: 'non-vegetarian',
      rating: 4.3,
      image: '/placeholder.svg'
    },

    // North Indian Desserts
    {
      id: 'ni_dessert_1',
      name: 'Gulab Jamun',
      description: 'Deep-fried milk balls soaked in sugar syrup',
      price: 120,
      isVeg: true,
      isBestseller: true,
      category: 'north-indian',
      subCategory: 'desserts',
      rating: 4.6,
      image: '/placeholder.svg'
    },
    {
      id: 'ni_dessert_2',
      name: 'Rasmalai',
      description: 'Creamy cottage cheese balls in saffron milk',
      price: 140,
      isVeg: true,
      isSpecial: true,
      category: 'north-indian',
      subCategory: 'desserts',
      rating: 4.7,
      image: '/placeholder.svg'
    },
    {
      id: 'ni_dessert_3',
      name: 'Jalebi',
      description: 'Sweet fried spirals dipped in sugar syrup',
      price: 100,
      isVeg: true,
      category: 'north-indian',
      subCategory: 'desserts',
      rating: 4.3,
      image: '/placeholder.svg'
    },
    {
      id: 'ni_dessert_4',
      name: 'Gajar Ka Halwa',
      description: 'Carrot pudding with ghee and milk',
      price: 150,
      isVeg: true,
      isSpecial: true,
      category: 'north-indian',
      subCategory: 'desserts',
      rating: 4.5,
      image: '/placeholder.svg'
    },
    {
      id: 'ni_dessert_5',
      name: 'Kulfi',
      description: 'Traditional Indian ice cream with pistachios',
      price: 80,
      isVeg: true,
      category: 'north-indian',
      subCategory: 'desserts',
      rating: 4.4,
      image: '/placeholder.svg'
    },

    // Beverages
    {
      id: 'bv_1',
      name: 'Masala Chai',
      description: 'Traditional Indian spiced tea',
      price: 40,
      isVeg: true,
      isBestseller: true,
      category: 'beverages',
      subCategory: 'hot',
      rating: 4.3,
      image: '/placeholder.svg'
    },
    {
      id: 'bv_2',
      name: 'Filter Coffee',
      description: 'South Indian style strong coffee',
      price: 50,
      isVeg: true,
      category: 'beverages',
      subCategory: 'hot',
      rating: 4.4,
      image: '/placeholder.svg'
    },
    {
      id: 'bv_3',
      name: 'Sweet Lassi',
      description: 'Refreshing yogurt drink with sugar',
      price: 80,
      isVeg: true,
      category: 'beverages',
      subCategory: 'cold',
      rating: 4.2,
      image: '/placeholder.svg'
    },
    {
      id: 'bv_4',
      name: 'Mango Lassi',
      description: 'Creamy yogurt drink with fresh mango',
      price: 100,
      isVeg: true,
      isSpecial: true,
      category: 'beverages',
      subCategory: 'cold',
      rating: 4.6,
      image: '/placeholder.svg'
    }
  ];

  const categories = [
    { id: 'south-indian', name: 'South Indian', emoji: '🌶️' },
    { id: 'north-indian', name: 'North Indian', emoji: '🍛' },
    { id: 'beverages', name: 'Beverages', emoji: '🥤' }
  ];

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

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
    <section id="menu" className="py-20 bg-gradient-to-br from-emerald-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 border-emerald-200">
            Our Menu
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Authentic Indian Flavors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive collection of traditional South & North Indian dishes, 
            each prepared with authentic spices and love
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-lg mx-auto mb-12 bg-white/80 backdrop-blur-sm">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-sm md:text-base data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
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
                            <span className="text-xl font-bold text-emerald-600">
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
                            className="bg-emerald-600 hover:bg-emerald-700 text-white"
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
            Showing {filteredItems.length} items • Total {menuItems.length} authentic dishes available
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
