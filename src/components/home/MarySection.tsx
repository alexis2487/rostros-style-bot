import React from 'react';
import { Award, Heart, Users } from 'lucide-react';
import maryImage from '@/assets/mary-rodriguez.jpg';

const MarySection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img
                  src={maryImage}
                  alt="Mary Rodríguez - Fundadora de Rostros"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-elevation">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span className="font-medium text-sm">15+ Años</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Conoce a Mary Rodríguez
                </h2>
                <p className="text-primary font-medium mb-2">Fundadora & Estilista Profesional</p>
              </div>

              <div className="space-y-4">
                <p className="font-inter text-muted-foreground leading-relaxed">
                  Con más de 15 años de experiencia en el mundo de la belleza, Mary ha dedicado 
                  su carrera a ayudar a profesionales y clientes a alcanzar su máximo potencial.
                </p>
                
                <p className="font-inter text-muted-foreground leading-relaxed">
                  Su pasión por la educación y la calidad la llevó a crear Rostros, donde combina 
                  la distribución de productos premium con la asesoría personalizada y la formación 
                  continua a través de tutoriales especializados.
                </p>

                <p className="font-inter text-muted-foreground leading-relaxed">
                  "Mi misión es empoderar a cada profesional con las herramientas y conocimientos 
                  necesarios para crear transformaciones extraordinarias."
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                <div className="flex items-center space-x-3 p-4 bg-secondary rounded-lg">
                  <Users className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-bold text-lg text-foreground">1000+</div>
                    <div className="text-xs text-muted-foreground">Clientes</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-secondary rounded-lg">
                  <Award className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-bold text-lg text-foreground">50+</div>
                    <div className="text-xs text-muted-foreground">Certificaciones</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-secondary rounded-lg">
                  <Heart className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-bold text-lg text-foreground">15+</div>
                    <div className="text-xs text-muted-foreground">Años</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarySection;