import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-6">
            <h1 className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-4">
              ROSTROS
            </h1>
            <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Distribuidora & Peluquería de Belleza
            </h2>
          </div>

          {/* Value Proposition */}
          <p className="font-inter text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Más de 15 años transformando la belleza con productos profesionales, 
            asesoría personalizada y los mejores tutoriales para profesionales.
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center mb-8 space-x-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground font-medium">1000+ clientes satisfechos</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/productos">
                Descubrir Productos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/videos">
                <Play className="w-4 h-4 mr-2" />
                Ver Videos Tutoriales
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="font-playfair font-bold text-2xl md:text-3xl text-primary mb-1">15+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="font-playfair font-bold text-2xl md:text-3xl text-primary mb-1">1000+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Clientes felices</div>
              </div>
              <div className="text-center">
                <div className="font-playfair font-bold text-2xl md:text-3xl text-primary mb-1">50+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Marcas aliadas</div>
              </div>
              <div className="text-center">
                <div className="font-playfair font-bold text-2xl md:text-3xl text-primary mb-1">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Compromiso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/3 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;