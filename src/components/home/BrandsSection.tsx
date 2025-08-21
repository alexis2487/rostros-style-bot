import React from 'react';

// Sample brand data
const brands = [
  { name: 'L\'Oréal Professional', logo: '/placeholder.svg' },
  { name: 'Wella', logo: '/placeholder.svg' },
  { name: 'Kerastase', logo: '/placeholder.svg' },
  { name: 'Matrix', logo: '/placeholder.svg' },
  { name: 'Redken', logo: '/placeholder.svg' },
  { name: 'Babyliss', logo: '/placeholder.svg' },
  { name: 'Schwarzkopf', logo: '/placeholder.svg' },
  { name: 'Revlon Professional', logo: '/placeholder.svg' },
];

const BrandsSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-2xl md:text-3xl text-foreground mb-4">
            Marcas Aliadas
          </h2>
          <p className="text-muted-foreground">
            Trabajamos con las mejores marcas del mercado profesional
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-background rounded-lg shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-2 mx-auto">
                  <img
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    className="w-8 h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-xs font-medium text-muted-foreground text-center line-clamp-1">
                  {brand.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Y muchas marcas más en nuestro catálogo completo
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;