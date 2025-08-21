import React, { useState } from 'react';
import { Play, Clock, ExternalLink, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

// Sample tutorial data
const sampleTutorials = [
  {
    id: 1,
    title: 'Técnica de Corte en Capas Modernas',
    category: 'Peluquería',
    duration: '15:30',
    thumbnail: '/placeholder.svg',
    url: 'https://youtube.com/watch?v=example1',
    relatedProducts: ['Tijeras profesionales', 'Peine de corte'],
    description: 'Aprende la técnica moderna de corte en capas para crear volumen y movimiento natural.',
  },
  {
    id: 2,
    title: 'Aplicación Perfecta de Tinte Permanente',
    category: 'Uso de productos',
    duration: '22:15',
    thumbnail: '/placeholder.svg',
    url: 'https://youtube.com/watch?v=example2',
    relatedProducts: ['Tinte permanente', 'Oxidante', 'Guantes profesionales'],
    description: 'Guía completa para aplicar tinte permanente con resultados profesionales.',
  },
  {
    id: 3,
    title: 'Cuidado Capilar Post-Tratamiento',
    category: 'Tips',
    duration: '8:45',
    thumbnail: '/placeholder.svg',
    url: 'https://youtube.com/watch?v=example3',
    relatedProducts: ['Mascarilla reparadora', 'Aceite nutritivo'],
    description: 'Tips esenciales para mantener el cabello saludable después de tratamientos químicos.',
  },
  {
    id: 4,
    title: 'Peinados para Eventos Especiales',
    category: 'Peluquería',
    duration: '18:20',
    thumbnail: '/placeholder.svg',
    url: 'https://youtube.com/watch?v=example4',
    relatedProducts: ['Spray fijador', 'Pinzas profesionales'],
    description: 'Crea peinados elegantes y sofisticados para ocasiones especiales.',
  },
  {
    id: 5,
    title: 'Diagnóstico del Tipo de Cabello',
    category: 'Tips',
    duration: '12:00',
    thumbnail: '/placeholder.svg',
    url: 'https://youtube.com/watch?v=example5',
    relatedProducts: ['Lupa profesional', 'Cartas de color'],
    description: 'Aprende a identificar correctamente el tipo y condición del cabello de tus clientes.',
  },
  {
    id: 6,
    title: 'Uso Correcto de Mascarillas Nutritivas',
    category: 'Uso de productos',
    duration: '10:30',
    thumbnail: '/placeholder.svg',
    url: 'https://youtube.com/watch?v=example6',
    relatedProducts: ['Mascarilla nutritiva', 'Toalla térmica'],
    description: 'Maximiza los beneficios de las mascarillas con la técnica correcta de aplicación.',
  },
];

const categories = ['Todos', 'Peluquería', 'Tips', 'Uso de productos'];

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredTutorials = sampleTutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || tutorial.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const TutorialCard = ({ tutorial }: { tutorial: typeof sampleTutorials[0] }) => (
    <div className="bg-card rounded-xl shadow-card hover:shadow-elevation transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={tutorial.thumbnail}
          alt={tutorial.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <Play className="w-8 h-8 text-primary-foreground ml-1" />
          </div>
        </div>
        <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
          <Clock className="w-3 h-3" />
          <span>{tutorial.duration}</span>
        </div>
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-black/80 text-white">
            {tutorial.category}
          </Badge>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-inter font-semibold text-foreground line-clamp-2 mb-2">
            {tutorial.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {tutorial.description}
          </p>
        </div>

        {tutorial.relatedProducts.length > 0 && (
          <div>
            <p className="text-xs text-muted-foreground mb-2">Productos relacionados:</p>
            <div className="flex flex-wrap gap-1">
              {tutorial.relatedProducts.slice(0, 2).map((product, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {product}
                </Badge>
              ))}
              {tutorial.relatedProducts.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{tutorial.relatedProducts.length - 2}
                </Badge>
              )}
            </div>
          </div>
        )}

        <div className="flex space-x-2">
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1"
            asChild
          >
            <a href={tutorial.url} target="_blank" rel="noopener noreferrer">
              <Play className="w-4 h-4 mr-2" />
              Ver Tutorial
            </a>
          </Button>
          <Button variant="outline" size="sm">
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">
            Videos & Tutoriales
          </h1>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Aprende técnicas profesionales con nuestros tutoriales especializados para elevar tu nivel.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar tutoriales..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Filters */}
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
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>

        {filteredTutorials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No se encontraron tutoriales con los filtros seleccionados.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;