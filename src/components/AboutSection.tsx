
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutSection: React.FC = () => {
  const chefs = [
    {
      name: "Chef Rajesh Kumar",
      specialty: "South Indian Cuisine",
      experience: "15+ years",
      image: "/placeholder.svg",
      description: "Master of traditional Tamil Nadu recipes"
    },
    {
      name: "Chef Priya Sharma",
      specialty: "North Indian Cuisine", 
      experience: "12+ years",
      image: "/placeholder.svg",
      description: "Expert in Punjabi and Rajasthani dishes"
    },
    {
      name: "Chef Arjun Nair",
      specialty: "Kerala Specialties",
      experience: "10+ years", 
      image: "/placeholder.svg",
      description: "Specialist in coastal and spice-rich curries"
    }
  ];

  const awards = [
    { title: "Best Indian Restaurant 2023", organization: "Food & Wine Magazine" },
    { title: "Hygiene Excellence Award", organization: "Health Department" },
    { title: "Customer Choice Award", organization: "Zomato" },
    { title: "Traditional Cuisine Award", organization: "Indian Culinary Association" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-saffron-100 text-saffron-800 border-saffron-200">
            About Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Our Story
          </h2>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              A Heritage of Flavors
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 1995, Spice Garden began as a humble family kitchen in Chennai, 
              where our grandmother's recipes were the heart of every meal. What started 
              as a small eatery has grown into a beloved restaurant that serves authentic 
              Indian cuisine to thousands of food lovers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our journey spans three generations of culinary expertise, with each dish 
              telling a story of tradition, passion, and authentic flavors. We source 
              our spices directly from Indian farms and grind them fresh daily to ensure 
              the most authentic taste experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-saffron-600">25+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-saffron-600">100K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-saffron-600">150+</div>
                <div className="text-sm text-muted-foreground">Authentic Dishes</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/placeholder.svg" 
              alt="Restaurant interior"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Chefs Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Meet Our Master Chefs
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our talented team of chefs brings decades of experience and passion 
              for authentic Indian cuisine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <Card key={index} className="hover-lift transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img 
                      src={chef.image} 
                      alt={chef.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-saffron-200"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-saffron-500 text-white">
                        👨‍🍳
                      </Badge>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{chef.name}</h4>
                  <p className="text-saffron-600 font-medium mb-1">{chef.specialty}</p>
                  <p className="text-sm text-muted-foreground mb-3">{chef.experience}</p>
                  <p className="text-sm text-muted-foreground">{chef.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-saffron-400 to-saffron-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h4 className="font-semibold mb-2">{award.title}</h4>
                  <p className="text-sm text-muted-foreground">{award.organization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
