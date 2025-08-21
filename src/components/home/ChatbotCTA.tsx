import React from 'react';
import { MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatbotCTA = () => {
  const openChatbot = () => {
    // This would open the chatbot interface
    // For now, we'll show a placeholder action
    console.log('Opening chatbot...');
    alert('¡El chatbot estará disponible pronto! Por ahora puedes contactarnos por WhatsApp.');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-gold">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-elevation">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-primary-foreground" />
              </div>
            </div>
          </div>

          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Pregúntale al Asesor
          </h2>
          
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            ¿Tienes dudas sobre productos, promociones o necesitas recomendaciones personalizadas? 
            Nuestro asesor virtual está aquí para ayudarte las 24 horas.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-white/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm">
                ✨ Consultar productos
              </div>
              <div className="bg-white/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm">
                🎯 Ver promociones
              </div>
              <div className="bg-white/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm">
                📚 Encontrar tutoriales
              </div>
              <div className="bg-white/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm">
                📅 Agendar citas
              </div>
            </div>
          </div>

          <Button 
            variant="secondary" 
            size="xl" 
            onClick={openChatbot}
            className="font-semibold shadow-elevation hover:shadow-card"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Iniciar conversación
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <p className="text-primary-foreground/70 text-sm mt-4">
            Respuestas instantáneas • Disponible 24/7 • Completamente gratis
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChatbotCTA;