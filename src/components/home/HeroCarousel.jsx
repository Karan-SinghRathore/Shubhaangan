import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const carouselImages = [
    {
      image: "/images/HeroCarousel/Kitchenn.jpeg",
      title: "Premium WPC/UPVC Kitchen Solutions",
      subtitle: "Transform your kitchen with our waterproof, durable WPC/UPVC modular designs",
      cta: "Explore Kitchens",
      link: "/Products"
    },
    {
      image: "/images/HeroCarousel/Bedroom.jpeg",
      title: "Luxury WPC/UPVC Bedroom Wardrobes",
      subtitle: "Create stunning bedrooms with our eco-friendly WPC/UPVC storage solutions",
      cta: "View Bedrooms",
      link: "/Products"
    },
    {
      image: "/images/HeroCarousel/Office.jpeg",
      title: "Modern WPC/UPVC Office Interiors",
      subtitle: "Professional workspace solutions with sustainable WPC/UPVC materials",
      cta: "Office Solutions",
      link: "/Products"
    },
    {
      image: "/images/HeroCarousel/Celling.jpg",
      title: "Innovative WPC/UPVC Ceiling Designs",
      subtitle: "Acoustic and aesthetic ceiling solutions for every space",
      cta: "Ceiling Options",
      link: "/products"
    },
    {
      image: "/images/HeroCarousel/Window.jpg",
      title: "Innovative Aluminium Slifing Window",
      subtitle: "Acoustic and aesthetic Sliding Window solutions for every space",
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

  // Touch handlers for swipe navigation
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="relative h-[70vh] md:h-screen overflow-hidden">
      <div
        ref={carouselRef}
        className="relative w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
                      className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 heading-primary headin-carousal leading-tight"
                      style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-sm sm:text-lg md:text-2xl text-white/95 mb-6 md:mb-8 text-large leading-relaxed"
                      style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}
                    >
                      {slide.subtitle}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                    >
                      <Link to={slide.link}>
                        <Button size="lg" className="wpc-btn-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg btn-text flex items-center gap-2 w-full sm:w-auto justify-center">
                          {slide.cta}
                          <ArrowRight size={16} className="sm:size-5" />
                        </Button>
                      </Link>

                      <a href="tel:+918114468410" className="block">
                        <Button
                          size="lg"
                          variant="outline"
                          className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg btn-text bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 flex items-center gap-2 w-full sm:w-auto justify-center"
                        >
                          <Phone size={16} className="sm:size-5" />
                          Call Now
                        </Button>
                      </a>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="mt-6 md:mt-8 hidden sm:flex items-center gap-4 md:gap-6 text-white/80 text-small"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs md:text-sm">Eco-Friendly</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-xs md:text-sm">Waterproof</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                        <span className="text-xs md:text-sm">7+ Years</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
       <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hidden md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

       <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hidden md:flex"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button> 

      {/* Slide Indicators - Touch-friendly */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
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
