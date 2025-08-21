import React, { useState } from 'react';
import { Star, Eye, ArrowRight, ChevronDown, Truck, Calculator, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  shampooLoreal, 
  tinteWella, 
  mascarillaKerastase, 
  secadorBabyliss, 
  aceiteMatrix,
  kitHerramientas 
} from '@/assets/products';

// Sample featured products
const featuredProducts = [
  {
    id: 1,
    name: 'Shampoo Profesional Reparador',
    brand: 'L\'Oréal Professional',
    price: 45000,
    rating: 4.9,
    image: shampooLoreal,
    category: 'Cuidado Capilar',
    isBestseller: true,
    presentation: '500ml',
    benefits: ['Reparación profunda', 'Cabello suave', 'Brillo natural'],
  },
  {
    id: 2,
    name: 'Tinte Permanente Natural',
    brand: 'Wella',
    price: 35000,
    rating: 4.8,
    image: tinteWella,
    category: 'Coloración',
    isBestseller: false,
    presentation: '60ml',
    benefits: ['Color duradero', 'Cobertura total', 'Fácil aplicación'],
  },
  {
    id: 3,
    name: 'Mascarilla Hidratante Premium',
    brand: 'Kerastase',
    price: 65000,
    rating: 4.9,
    image: mascarillaKerastase,
    category: 'Tratamientos',
    isBestseller: true,
    presentation: '250ml',
    benefits: ['Hidratación profunda', 'Nutrición intensa', 'Protección'],
  },
  {
    id: 4,
    name: 'Secador Profesional Ionic',
    brand: 'Babyliss',
    price: 180000,
    rating: 4.7,
    image: secadorBabyliss,
    category: 'Herramientas',
    isBestseller: false,
    presentation: '2200W',
    benefits: ['Secado rápido', 'Tecnología iónica', 'Motor AC profesional'],
  },
  {
    id: 5,
    name: 'Aceite Nutritivo Argan',
    brand: 'Matrix',
    price: 28000,
    rating: 4.8,
    image: aceiteMatrix,
    category: 'Cuidado Capilar',
    isBestseller: true,
    presentation: '100ml',
    benefits: ['Nutrición intensa', 'Brillo natural', 'Control del frizz'],
  },
  {
    id: 6,
    name: 'Kit Alisado Brasileño',
    brand: 'Redken',
    price: 95000,
    rating: 4.9,
    image: kitHerramientas,
    category: 'Tratamientos',
    isBestseller: true,
    presentation: 'Kit completo',
    benefits: ['Alisado duradero', 'Cabello sedoso', 'Fácil mantenimiento'],
  },
];

const FeaturedProducts = () => {
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

  const toggleDropdown = (productId: number) => {
    setOpenDropdown(openDropdown === productId ? null : productId);
  };

  const calculateShipping = (price: number) => {
    return price >= 80000 ? 0 : 8000;
  };

  const calculateFinalPrice = (price: number) => {
    const shipping = calculateShipping(price);
    return price + shipping;
  };
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
                  <div className="relative" data-dropdown>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="justify-between min-w-[100px]"
                      onClick={() => toggleDropdown(product.id)}
                    >
                      Más info
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === product.id ? 'rotate-180' : ''
                      }`} />
                    </Button>
                    
                    {/* Dropdown Menu - Fixed positioning for better visibility */}
                    {openDropdown === product.id && (
                      <>
                        <div 
                          className="fixed inset-0 z-[9998]"
                          onClick={() => setOpenDropdown(null)}
                        ></div>
                        <div className="absolute top-full right-0 mt-2 bg-background border border-border rounded-lg shadow-elevation z-[9999] p-4 space-y-3 min-w-[300px]">
                        {/* Product Info */}
                        <div className="border-b border-border pb-3">
                          <h4 className="font-semibold text-foreground text-sm mb-1">
                            {product.name}
                          </h4>
                          <p className="text-xs text-muted-foreground mb-2">
                            {product.brand} • {product.presentation}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {product.benefits.map((benefit, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Price Breakdown */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Precio del producto:</span>
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
                                `Hola, me interesa ${product.name} por $${product.price.toLocaleString()}. ¿Está disponible?`
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
                      </>
                    )}
                  </div>
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