import React from 'react';
import Hero from '../components/home/Hero';
import MarySection from '../components/home/MarySection';
import PromoSection from '../components/home/PromoSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import BrandsSection from '../components/home/BrandsSection';
import VideosSection from '../components/home/VideosSection';
import ChatbotCTA from '../components/home/ChatbotCTA';

const Index = () => {
  return (
    <>
      <Hero />
      <MarySection />
      <PromoSection />
      <FeaturedProducts />
      <BrandsSection />
      <VideosSection />
      <ChatbotCTA />
    </>
  );
};

export default Index;
