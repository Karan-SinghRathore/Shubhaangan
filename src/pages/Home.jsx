import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/home/HeroCarousel';
import HomeAbout from '@/components/home/HomeAbout';
import StatsCounter from '@/components/home/StatsCounter';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CustomerReviews from '@/components/home/CustomerReviews';
import FloatingActions from '@/components/FloatingActions';
import SEO from '@/components/SEO';


const Home = () => {
  return (
    <>
      <FloatingActions />
      <SEO
        title="ShubhAangan - Premium WPC Solutions | Modular Kitchen, Bedroom & Office Furniture"
        description="Transform your space with ShubhAangan's premium WPC solutions. Specializing in modular kitchen, bedroom wardrobes, office furniture, and ceiling designs. 7+ years of experience in eco-friendly, waterproof WPC furniture."
        keywords="WPC furniture, modular kitchen, bedroom furniture, office furniture, ceiling panels, waterproof furniture, eco-friendly furniture, ShubhAangan Jaipur"
        ogImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
      />

      <Navbar />
      <HeroCarousel />
      <HomeAbout />
      <StatsCounter />
      <FeaturedProducts />
      <CustomerReviews />
      <Footer />
    </>
  );
};

export default Home;
