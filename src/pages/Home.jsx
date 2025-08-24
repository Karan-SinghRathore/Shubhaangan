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
        title="ShubhAangan - Premium WPC UPVC Modular Kitchen & Furniture Jaipur | Best WPC Kitchen Cabinets Rajasthan"
        description="Transform your home with ShubhAangan's premium WPC/UPVC modular kitchen, wardrobes & furniture in Jaipur. 7+ years experience in waterproof, termite-proof kitchen cabinets. Best WPC UPVC furniture manufacturer in Rajasthan. ₹1200/sqft onwards. Free consultation & installation."
        keywords="WPC modular kitchen Jaipur, UPVC kitchen cabinets Rajasthan, modular kitchen design Jaipur, WPC kitchen manufacturer, UPVC kitchen dealer, waterproof kitchen cabinets, termite proof kitchen, modular kitchen price Jaipur, kitchen interior design, WPC wardrobe Jaipur, UPVC wardrobe, bedroom furniture Jaipur, office furniture WPC, WPC office cabin, UPVC office furniture, false ceiling Jaipur, WPC ceiling design, UPVC ceiling panels, wall panels WPC, TV cabinet WPC, furniture manufacturer Jaipur, interior designer Jaipur, home furniture Rajasthan, modular furniture Jaipur, kitchen renovation Jaipur, WPC sheets Jaipur, UPVC sheets, furniture showroom Jaipur, custom kitchen design, luxury kitchen cabinets, affordable modular kitchen, budget kitchen Jaipur, premium kitchen design, modern kitchen cabinets, contemporary furniture, eco-friendly kitchen, sustainable furniture, durable kitchen cabinets, maintenance-free furniture, easy-clean kitchen, stain-resistant kitchen, scratch-resistant furniture, moisture-resistant kitchen, humidity-proof furniture, fire-resistant panels, ShubhAangan Jaipur, Shubh Aangan furniture, kitchen contractors Jaipur, interior contractors Rajasthan, furniture dealers Jaipur, modular kitchen suppliers, WPC furniture suppliers, UPVC furniture dealers, home improvement Jaipur, kitchen makeover, furniture installation Jaipur, turnkey kitchen solutions, complete interior solutions, one-stop furniture shop Jaipur, furniture brand Rajasthan, North India furniture, Indian modular kitchen, kitchen storage solutions, kitchen organization, modern home solutions"
        ogImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
        canonicalUrl="https://shubhaangan.com/"
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
