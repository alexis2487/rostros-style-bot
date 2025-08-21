import React from 'react';
import { Award, Heart, Users, Target, Eye, Lightbulb, Star } from 'lucide-react';
import maryImage from '@/assets/mary-rodriguez.jpg';

const values = [
  {
    icon: Heart,
    title: 'Pasión',
    description: 'Amamos lo que hacemos y esa pasión se refleja en cada producto y servicio que ofrecemos.'
  },
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Buscamos la perfección en cada detalle, desde la selección de productos hasta la atención al cliente.'
  },
  {
    icon: Users,
    title: 'Compromiso',
    description: 'Estamos comprometidos con el éxito y crecimiento profesional de nuestros clientes.'
  },
  {
    icon: Lightbulb,
    title: 'Innovación',
    description: 'Nos mantenemos a la vanguardia con las últimas tendencias y tecnologías del sector.'
  }
];

const achievements = [
  { number: '15+', label: 'Años de experiencia', description: 'Más de una década perfeccionando nuestro arte' },
  { number: '1000+', label: 'Clientes satisfechos', description: 'Profesionales que confían en nosotros' },
  { number: '50+', label: 'Marcas aliadas', description: 'Las mejores marcas del mercado' },
  { number: '100+', label: 'Tutoriales creados', description: 'Contenido educativo de calidad' }
];

const Nosotros = () => {
  return (
    <div className="py-8 md:py-12">
      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Nuestra Historia
            </h1>
            <p className="font-inter text-lg md:text-xl text-muted-foreground leading-relaxed">
              Desde 2009, hemos estado transformando la industria de la belleza con productos 
              de calidad superior y educación especializada para profesionales.
            </p>
          </div>
        </div>
      </section>

      {/* Mary's Story - Enhanced */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={maryImage}
                    alt="Mary Rodríguez - Fundadora de Rostros"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-8 py-4 rounded-full shadow-elevation">
                  <div className="text-center">
                    <div className="font-bold text-2xl">15+</div>
                    <div className="text-xs opacity-90">Años</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">
                    Mary Rodríguez
                  </h2>
                  <p className="text-primary font-semibold text-lg mb-6">Fundadora & Directora Creativa</p>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Mary comenzó su carrera como estilista profesional a los 18 años, impulsada por 
                    una pasión innata por la belleza y la transformación. Su talento natural y 
                    dedicación la llevaron rápidamente a destacar en el mundo de la peluquería.
                  </p>
                  
                  <p className="leading-relaxed">
                    Después de años perfeccionando sus técnicas y trabajando con las mejores marcas, 
                    Mary identificó una necesidad en el mercado: los profesionales necesitaban no 
                    solo productos de calidad, sino también educación continua y asesoría personalizada.
                  </p>

                  <p className="leading-relaxed">
                    En 2009, fundó Rostros con la visión de crear un espacio donde los profesionales 
                    pudieran acceder a productos premium y al mismo tiempo desarrollar sus habilidades 
                    a través de tutoriales especializados y asesoría experta.
                  </p>

                  <div className="bg-secondary p-6 rounded-lg border-l-4 border-primary">
                    <p className="italic text-foreground font-medium">
                      "Mi misión es empoderar a cada profesional con las herramientas, productos y 
                      conocimientos necesarios para crear transformaciones extraordinarias que 
                      impacten positivamente la vida de sus clientes."
                    </p>
                  </div>
                </div>

                {/* Certifications */}
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-bold text-lg text-foreground">50+</div>
                    <div className="text-sm text-muted-foreground">Certificaciones</div>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-bold text-lg text-foreground">95%</div>
                    <div className="text-sm text-muted-foreground">Satisfacción</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="text-center lg:text-left">
                <Target className="w-12 h-12 text-primary mx-auto lg:mx-0 mb-4" />
                <h3 className="font-playfair font-bold text-2xl text-foreground mb-4">Misión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Empoderar a profesionales de la belleza con productos premium, educación 
                  especializada y asesoría personalizada para transformar su práctica y 
                  potencializar su éxito.
                </p>
              </div>
              
              <div className="text-center lg:text-left">
                <Eye className="w-12 h-12 text-primary mx-auto lg:mx-0 mb-4" />
                <h3 className="font-playfair font-bold text-2xl text-foreground mb-4">Visión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser la distribuidora líder en América Latina, reconocida por la calidad 
                  de nuestros productos, la excelencia en el servicio y nuestro compromiso 
                  con la educación profesional.
                </p>
              </div>
              
              <div className="text-center lg:text-left">
                <Heart className="w-12 h-12 text-primary mx-auto lg:mx-0 mb-4" />
                <h3 className="font-playfair font-bold text-2xl text-foreground mb-4">Propósito</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Crear un ecosistema integral donde cada profesional encuentre todo lo 
                  necesario para destacar en su carrera y brindar experiencias 
                  transformadoras a sus clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">
              Nuestros Valores
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión y acción en Rostros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6 bg-card rounded-xl shadow-card hover:shadow-elevation transition-all duration-300">
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-inter font-semibold text-foreground text-lg mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">
              Nuestros Logros
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Números que reflejan nuestro compromiso y el impacto en la industria.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6">
                <div className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="font-inter font-semibold text-foreground text-lg mb-1">
                  {achievement.label}
                </div>
                <div className="text-muted-foreground text-sm">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;