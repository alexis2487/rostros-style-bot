import React from 'react';
import { Star, Eye, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

// Sample featured products
const featuredProducts = [
  {
    id: 1,
    name: 'Shampoo Profesional Reparador',
    brand: 'L\'Oréal Professional',
    price: 45000,
    rating: 4.9,
    image: '/placeholder.svg',
    category: 'Cuidado Capilar',
    isBestseller: true,
  },
  {
    id: 2,
    name: 'Tinte Permanente Natural',
    brand: 'Wella',
    price: 35000,
    rating: 4.8,
    image: '/placeholder.svg',
    category: 'Coloración',
    isBestseller: false,
  },
  {
    id: 3,
    name: 'Mascarilla Hidratante Premium',
    brand: 'Kerastase',
    price: 65000,
    rating: 4.9,
    image: '/placeholder.svg',
    category: 'Tratamientos',
    isBestseller: true,
  },
  {
    id: 4,
    name: 'Secador Profesional Ionic',
    brand: 'Babyliss',
    price: 180000,
    rating: 4.7,
    image: '/placeholder.svg',
    category: 'Herramientas',
    isBestseller: false,
  },
  {
    id: 5,
    name: 'Aceite Nutritivo Argan',
    brand: 'Matrix',
    price: 28000,
    rating: 4.8,
    image: '/placeholder.svg',
    category: 'Cuidado Capilar',
    isBestseller: true,
  },
  {
    id: 6,
    name: 'Kit Alisado Brasileño',
    brand: 'Redken',
    price: 95000,
    rating: 4.9,
    image: '/placeholder.svg',
    category: 'Tratamientos',
    isBestseller: true,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">
            Productos Destacados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Selección de nuestros productos más populares y recomendados por profesionales
          </p>
          <Button variant="outline" asChild>
            <Link to="/productos">
              Ver todo el catálogo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-xl shadow-card hover:shadow-elevation transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.isBestseller && (
                  <div className="absolute top-3 left-3">
                    <Badge variant="default" className="bg-primary text-primary-foreground">
                      Bestseller
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    Ver detalles
                  </Button>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-primary font-medium">{product.brand}</p>
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  <h3 className="font-inter font-semibold text-foreground line-clamp-2">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.rating})</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg text-foreground">
                    ${product.price.toLocaleString()}
                  </span>
                  <Button variant="outline" size="sm">
                    Más info
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;