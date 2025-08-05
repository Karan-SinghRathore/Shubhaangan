import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      title: "Premium WPC/UPVC Kitchen Solutions",
      subtitle: "Transform your kitchen with our waterproof, durable WPC modular designs",
      cta: "Explore Kitchens",
      link: "/Products"
    },
    {
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      title: "Luxury WPC/UPVC Bedroom Wardrobes",
      subtitle: "Create stunning bedrooms with our eco-friendly WPC storage solutions",
      cta: "View Bedrooms",
      link: "/Products"
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      title: "Modern WPC/UPVC Office Interiors",
      subtitle: "Professional workspace solutions with sustainable WPC materials",
      cta: "Office Solutions",
      link: "/Products"
    },
    {
      image: "https://images.unsplash.com/photo-1545041454-6f53b06c6ed2",
      title: "Innovative WPC/UPVC Ceiling Designs",
      subtitle: "Acoustic and aesthetic ceiling solutions for every space",
      cta: "Ceiling Options",
      link: "/products"
    },
    {
      image: "https://images.unsplash.com/photo-1545041454-6f53b06c6ed2",
      title: "Innovative WPC/UPVC Ceiling Designs",
      subtitle: "Acoustic and aesthetic ceiling solutions for every space",
      cta: "Ceiling Options",
      link: "/products"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="relative w-full h-full">
        {carouselImages.map((slide, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              <img 
                className="w-full h-full object-cover optimized-image"
                alt={slide.title}
                src={slide.image}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="mb-6"
                    >
                     
                    </motion.div>
                    
                    <motion.h1
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 heading-primary"
                      style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-xl md:text-2xl text-white/90 mb-8 text-large"
                      style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                    >
                      {slide.subtitle}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <Link to={slide.link}>
                        <Button size="lg" className="wpc-btn-primary px-8 py-4 text-lg btn-text flex items-center gap-2">
                          {slide.cta}
                          <ArrowRight size={20} />
                        </Button>
                      </Link>
                      
                      <a href="tel:+918114468410">
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="px-8 py-4 text-lg btn-text bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 flex items-center gap-2"
                        >
                          <Phone size={20} />
                          Call Now
                        </Button>
                      </a>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="mt-8 flex items-center gap-6 text-white/80 text-small"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm">Eco-Friendly Materials</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm">Waterproof Design</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                        <span className="text-sm">7+ Years Experience</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button> */}
      
      {/* <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button> */}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <motion.div
          className="h-full"
          style={{ background: 'hsl(var(--wpc-warm))' }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          key={currentSlide}
        />
      </div>
    </section>
  );
};

export default HeroCarousel;
