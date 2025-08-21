import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/productos', label: 'Productos' },
    { href: '/videos', label: 'Videos' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-playfair font-bold text-2xl text-foreground hover:text-primary transition-colors">
            ROSTROS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-inter text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex">
            <Button variant="hero" size="default" asChild>
              <Link to="/contacto">
                <Phone className="w-4 h-4 mr-2" />
                Agendar
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-inter text-sm font-medium px-4 py-2 rounded-md transition-colors hover:bg-secondary ${
                    isActive(link.href) ? 'text-primary bg-secondary' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button variant="hero" size="default" className="w-full" asChild>
                  <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                    <Phone className="w-4 h-4 mr-2" />
                    Agendar
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;