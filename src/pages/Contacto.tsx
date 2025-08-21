import React, { useState } from 'react';
import { MapPin, Clock, Mail, Phone, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Mensaje enviado",
      description: "Hemos recibido tu mensaje. Te contactaremos pronto.",
    });

    // Reset form
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    });
  };

  const handleWhatsApp = () => {
    const phoneNumber = '573001234567';
    const message = encodeURIComponent(`Hola, me gustaría obtener más información sobre los servicios de Rostros.`);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  const handleScheduleAppointment = () => {
    const phoneNumber = '573001234567';
    const message = encodeURIComponent(`Hola, me gustaría agendar una cita en Rostros. ¿Qué disponibilidad tienen?`);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="py-8 md:py-12">
      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Contáctanos
            </h1>
            <p className="font-inter text-lg md:text-xl text-muted-foreground leading-relaxed">
              Estamos aquí para ayudarte. Contáctanos para consultas, asesorías o para agendar tu cita.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div>
                <h2 className="font-playfair font-bold text-2xl md:text-3xl text-foreground mb-4">
                  Envíanos un Mensaje
                </h2>
                <p className="text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Correo electrónico *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                      Teléfono (opcional)
                    </label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-foreground mb-2">
                      Asunto
                    </label>
                    <Input
                      id="asunto"
                      name="asunto"
                      type="text"
                      value={formData.asunto}
                      onChange={handleInputChange}
                      placeholder="¿En qué te podemos ayudar?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos más detalles sobre tu consulta..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>

              {/* Quick Actions */}
              <div className="pt-6 border-t border-border">
                <h3 className="font-inter font-semibold text-foreground mb-4">Acciones Rápidas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button 
                    variant="premium" 
                    size="lg" 
                    onClick={handleScheduleAppointment}
                    className="w-full"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Agendar Cita
                  </Button>
                  <Button 
                    variant="whatsapp" 
                    size="lg" 
                    onClick={handleWhatsApp}
                    className="w-full"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair font-bold text-2xl md:text-3xl text-foreground mb-6">
                  Información de Contacto
                </h2>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-card">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-foreground mb-2">Dirección</h3>
                    <p className="text-muted-foreground">
                      Calle 45 #23-67<br />
                      Bogotá, Colombia<br />
                      Zona Rosa - Chapinero
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-card">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-foreground mb-2">Horarios de Atención</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                      <p>Sábado: 8:00 AM - 4:00 PM</p>
                      <p>Domingo: Cerrado</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-card">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-foreground mb-2">Teléfono</h3>
                    <a 
                      href="tel:+573001234567" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +57 300 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-card">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-foreground mb-2">Correo Electrónico</h3>
                    <a 
                      href="mailto:info@rostros.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@rostros.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-secondary rounded-xl p-8 text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-inter font-semibold text-foreground mb-2">
                  Visítanos
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Estamos ubicados en el corazón de la Zona Rosa
                </p>
                <Button variant="outline" size="sm">
                  Ver en Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;