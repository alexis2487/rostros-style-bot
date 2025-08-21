import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-playfair font-bold text-2xl text-foreground">ROSTROS</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Distribuidora y peluquería de belleza con más de 15 años de experiencia 
              en productos profesionales y asesoría personalizada.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-inter font-semibold text-foreground">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Calle 45 #23-67</p>
                  <p>Bogotá, Colombia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+573001234567" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +57 300 123 4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@rostros.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@rostros.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-inter font-semibold text-foreground">Horarios</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Lun - Vie: 8:00 AM - 6:00 PM</p>
                  <p>Sáb: 8:00 AM - 4:00 PM</p>
                  <p>Dom: Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-inter font-semibold text-foreground">Enlaces</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/productos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Productos
              </Link>
              <Link to="/videos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Tutoriales
              </Link>
              <Link to="/nosotros" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Nosotros
              </Link>
              <Link to="/contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
            </nav>
            <Button variant="whatsapp" size="sm" asChild>
              <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Rostros. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link to="/politicas" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Políticas de Privacidad
              </Link>
              <span className="text-sm text-muted-foreground">NIT: 123.456.789-0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;