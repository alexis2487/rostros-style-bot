import React from 'react';
import { Play, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

// Sample video data
const featuredVideos = [
  {
    id: 1,
    title: 'Técnica de Corte en Capas Modernas',
    duration: '15:30',
    thumbnail: '/placeholder.svg',
    category: 'Peluquería',
    description: 'Aprende las técnicas más actuales para crear cortes con movimiento y volumen natural.',
  },
  {
    id: 2,
    title: 'Aplicación Perfecta de Tinte',
    duration: '22:15',
    thumbnail: '/placeholder.svg',
    category: 'Coloración',
    description: 'Domina la técnica profesional para aplicar tinte con resultados perfectos.',
  },
  {
    id: 3,
    title: 'Cuidado Post-Tratamiento',
    duration: '8:45',
    thumbnail: '/placeholder.svg',
    category: 'Tips',
    description: 'Tips esenciales para mantener el cabello saludable después de procesos químicos.',
  },
  {
    id: 4,
    title: 'Diagnóstico Capilar Profesional',
    duration: '12:00',
    thumbnail: '/placeholder.svg',
    category: 'Tips',
    description: 'Aprende a identificar correctamente el tipo y condición del cabello.',
  },
];

const VideosSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">
            Videos & Tutoriales
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Aprende técnicas profesionales con nuestros tutoriales especializados
          </p>
          <Button variant="outline" asChild>
            <Link to="/videos">
              Ver todos los videos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-card rounded-xl shadow-card hover:shadow-elevation transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{video.duration}</span>
                </div>
                <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className="bg-black/80 text-white text-xs">
                    {video.category}
                  </Badge>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <h3 className="font-inter font-semibold text-foreground text-sm line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {video.description}
                </p>
                <Button variant="ghost" size="sm" className="w-full text-xs">
                  Ver ahora
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;