import React, { useState } from 'react';
import { Search, Filter, Star, Eye, PlayCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

// Sample product data
const sampleProducts = [
  {
    id: 1,
    name: 'Shampoo Profesional Hidratante',
    brand: 'L\'Oréal Professional',
    category: 'Cuidado Capilar',
    price: 45000,
    originalPrice: 50000,
    rating: 4.8,
    inStock: true,
    isNew: true,
    isBestseller: false,
    image: '/placeholder.svg',
    presentation: '500ml',
    benefits: ['Hidratación profunda', 'Cabello suave', 'Brillo natural'],
  },
  {
    id: 2,
    name: 'Tinte Permanente Chocolate',
    brand: 'Wella',
    category: 'Coloración',
    price: 35000,
    rating: 4.9,
    inStock: true,
    isNew: false,
    isBestseller: true,
    image: '/placeholder.svg',
    presentation: '60ml',
    benefits: ['Color duradero', 'Cobertura total', 'Fácil aplicación'],
  },
  {
    id: 3,
    name: 'Mascarilla Reparadora Intensiva',
    brand: 'Kerastase',
    category: 'Tratamientos',
    price: 65000,
    rating: 4.7,
    inStock: false,
    isNew: false,
    isBestseller: true,
    image: '/placeholder.svg',
    presentation: '200ml',
    benefits: ['Reparación profunda', 'Nutrición intensa', 'Protección'],
  },
  // Add more products as needed
];

const categories = ['Todos', 'Cuidado Capilar', 'Coloración', 'Tratamientos', 'Herramientas'];
const brands = ['Todos', 'L\'Oréal Professional', 'Wella', 'Kerastase', 'Matrix', 'Redken'];

const Productos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedBrand, setSelectedBrand] = useState('Todos');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = sampleProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesBrand = selectedBrand === 'Todos' || product.brand === selectedBrand;
    
    return matchesSearch && matchesCategory && matchesBrand;
  });

  const ProductCard = ({ product }: { product: typeof sampleProducts[0] }) => (
    <div className="bg-card rounded-xl shadow-card hover:shadow-elevation transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {product.isNew && (
            <Badge variant="default" className="bg-primary text-primary-foreground">
              Nuevo
            </Badge>
          )}
          {product.isBestseller && (
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
              Bestseller
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="destructive">
              Agotado
            </Badge>
          )}
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <p className="text-sm text-primary font-medium">{product.brand}</p>
          <h3 className="font-inter font-semibold text-foreground line-clamp-2">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.presentation}</p>
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

        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg text-foreground">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Eye className="w-4 h-4 mr-1" />
            Más info
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <PlayCircle className="w-4 h-4 mr-1" />
            Tutorial
          </Button>
        </div>

        <Button 
          variant={product.inStock ? "default" : "secondary"} 
          size="sm" 
          className="w-full"
          disabled={!product.inStock}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          {product.inStock ? 'Consultar disponibilidad' : 'Notificar disponibilidad'}
        </Button>
      </div>
    </div>
  );

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">
            Catálogo de Productos
          </h1>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección de productos profesionales de las mejores marcas del mercado.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar productos o marcas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>

          {/* Filters */}
          <div className={`space-y-4 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div>
              <label className="block text-sm font-medium mb-2">Categoría</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Marca</label>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <Button
                    key={brand}
                    variant={selectedBrand === brand ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedBrand(brand)}
                  >
                    {brand}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No se encontraron productos con los filtros seleccionados.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Productos;