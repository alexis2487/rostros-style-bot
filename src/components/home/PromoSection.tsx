import React from 'react';
import { ChevronLeft, ChevronRight, Star, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Sample promotional products
const promoProducts = [
  {
    id: 1,
    name: 'Kit Hidratación Intensiva',
    brand: 'L\'Oréal Professional',
    originalPrice: 85000,
    price: 68000,
    discount: 20,
    image: '/placeholder.svg',
    rating: 4.9,
    isLimited: true,
  },
  {
    id: 2,
    name: 'Tinte Premium + Oxidante',
    brand: 'Wella',
    originalPrice: 45000,
    price: 36000,
    discount: 20,
    image: '/placeholder.svg',
    rating: 4.8,
    isLimited: false,
  },
  {
    id: 3,
    name: 'Mascarilla Reparadora Pro',
    brand: 'Kerastase',
    originalPrice: 95000,
    price: 76000,
    discount: 20,
    image: '/placeholder.svg',
    rating: 4.9,
    isLimited: true,
  },
  {
    id: 4,
    name: 'Set Herramientas Profesional',
    brand: 'Babyliss',
    originalPrice: 150000,
    price: 120000,
    discount: 20,
    image: '/placeholder.svg',
    rating: 4.7,
    isLimited: false,
  },
  {
    id: 5,
    name: 'Tratamiento Capilar Luxury',
    brand: 'Matrix',
    originalPrice: 120000,
    price: 96000,
    discount: 20,
    image: '/placeholder.svg',
    rating: 4.8,
    isLimited: true,
  },
];

const PromoSection = () => {
  const scrollContainer = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 300;
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-2">
              Promociones Especiales
            </h2>
            <p className="text-muted-foreground">
              Aprovecha nuestras ofertas exclusivas en productos profesionales
            </p>
          </div>
          
          <div className="hidden md:flex space-x-2">
            <Button variant="outline" size="icon" onClick={() => scroll('left')}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll('right')}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div 
          ref={scrollContainer}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {promoProducts.map((product) => (
            <div
              key={product.id}
              className="flex-none w-72 bg-background rounded-xl shadow-card hover:shadow-elevation transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  <Badge variant="destructive" className="bg-red-500 text-white">
                    -{product.discount}%
                  </Badge>
                  {product.isLimited && (
                    <Badge variant="default" className="bg-primary text-primary-foreground">
                      Oferta limitada
                    </Badge>
                  )}
                </div>
                <div className="absolute top-3 right-3">
                  <Tag className="w-5 h-5 text-white drop-shadow-md" />
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <p className="text-sm text-primary font-medium">{product.brand}</p>
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

                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-lg text-foreground">
                      ${product.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-green-600 font-medium">
                    Ahorra ${(product.originalPrice - product.price).toLocaleString()}
                  </p>
                </div>

                <Button variant="premium" size="sm" className="w-full">
                  Consultar Oferta
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile scroll indicators */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={() => scroll('left')}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => scroll('right')}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;