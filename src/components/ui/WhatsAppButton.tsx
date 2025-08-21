import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './button';

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    const phoneNumber = '573001234567';
    const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre los productos de Rostros.');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        variant="whatsapp"
        size="icon"
        className="rounded-full w-14 h-14 shadow-elevation hover:scale-105 transition-transform"
        onClick={handleWhatsApp}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;