import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Tag, ChevronDown, Truck, Calculator, MessageCircle } from 'lucide-react';
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
    presentation: 'Kit completo 500ml',
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
    presentation: '60ml + 60ml',
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
    presentation: '250ml',
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
    presentation: 'Tijeras + Peine profesional',
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
    presentation: '200ml',
  },
];

const PromoSection = () => {
  const scrollContainer = React.useRef<HTMLDivElement>(null);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-dropdown]')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 300;
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const toggleDropdown = (productId: number) => {
    setOpenDropdown(openDropdown === productId ? null : productId);
  };

  const calculateShipping = (price: number) => {
    // Envío gratis para compras mayores a $80,000
    return price >= 80000 ? 0 : 8000;
  };

  const calculateFinalPrice = (price: number) => {
    const shipping = calculateShipping(price);
    return price + shipping;
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

                <div className="relative" data-dropdown>
                  <Button 
                    variant="premium" 
                    size="sm" 
                    className="w-full justify-between"
                    onClick={() => toggleDropdown(product.id)}
                  >
                    Consultar Oferta
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      openDropdown === product.id ? 'rotate-180' : ''
                    }`} />
                  </Button>
                  
                  {/* Dropdown Menu */}
                  {openDropdown === product.id && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-elevation z-50 p-4 space-y-3">
                      {/* Product Info */}
                      <div className="border-b border-border pb-3">
                        <h4 className="font-semibold text-foreground text-sm mb-1">
                          {product.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {product.brand} • {product.presentation}
                        </p>
                      </div>

                      {/* Price Breakdown */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Precio con descuento:</span>
                          <span className="font-semibold text-foreground">
                            ${product.price.toLocaleString()}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-1">
                            <Truck className="w-3 h-3 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">Costo de envío:</span>
                          </div>
                          <span className={`text-sm font-medium ${
                            calculateShipping(product.price) === 0 
                              ? 'text-green-600' 
                              : 'text-foreground'
                          }`}>
                            {calculateShipping(product.price) === 0 
                              ? 'GRATIS' 
                              : `$${calculateShipping(product.price).toLocaleString()}`
                            }
                          </span>
                        </div>

                        {calculateShipping(product.price) === 0 && (
                          <p className="text-xs text-green-600 bg-green-50 p-2 rounded">
                            ✨ ¡Envío gratuito por compra superior a $80,000!
                          </p>
                        )}

                        <div className="border-t border-border pt-2 mt-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-1">
                              <Calculator className="w-3 h-3 text-primary" />
                              <span className="text-sm font-semibold text-foreground">Total a pagar:</span>
                            </div>
                            <span className="font-bold text-lg text-primary">
                              ${calculateFinalPrice(product.price).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => {
                            const phone = '573001234567';
                            const message = encodeURIComponent(
                              `Hola, me interesa la oferta de ${product.name} por $${product.price.toLocaleString()}. ¿Está disponible?`
                            );
                            window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
                          }}
                        >
                          <MessageCircle className="w-3 h-3 mr-1" />
                          Consultar
                        </Button>
                        <Button 
                          variant="default" 
                          size="sm"
                          onClick={() => {
                            const phone = '573001234567';
                            const message = encodeURIComponent(
                              `¡Quiero comprar ${product.name}! Total: $${calculateFinalPrice(product.price).toLocaleString()} (incluye envío)`
                            );
                            window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
                          }}
                        >
                          Comprar ahora
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
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