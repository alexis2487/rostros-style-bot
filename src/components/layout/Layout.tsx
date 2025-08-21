import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../ui/WhatsAppButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;