import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ChefHat, 
  Home, 
  Square, 
  Shirt, 
  Tv, 
  Phone, 
  Mail, 
  ArrowRight,
  CheckCircle,
  Droplets,
  Shield,
  Recycle,
  Sparkles,
  Zap
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import FloatingActions from '@/components/FloatingActions';
import SEO from '@/components/SEO';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const galleryCategories = [
    {
      id: 'kitchen',
      name: 'WPC Kitchen Cabinets',
      icon: <ChefHat size={32} />,
      description: 'Modern modular kitchen solutions with premium WPC materials',
      shortDesc: 'Waterproof modular kitchens',
      priceRange: '₹1,200 - ₹2,500 /sq ft',
      projectTime: '10-15 days',
      warranty: '10 years',
      popularFeatures: ['Soft-Close Hinges', 'Pull-Out Drawers', 'Anti-Scratch Surface', 'Modular Design'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
      characteristics: [
        { icon: <Droplets size={20} />, text: '100% Waterproof' },
        { icon: <Shield size={20} />, text: 'Termite Resistant' },
        { icon: <Recycle size={20} />, text: 'Eco-Friendly' },
        { icon: <Sparkles size={20} />, text: 'Easy to Clean' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7'
      ]
    },
    {
      id: 'ceiling',
      name: 'False Ceiling',
      icon: <Home size={32} />,
      description: 'Elegant false ceiling designs with acoustic properties',
      shortDesc: 'Acoustic & designer ceilings',
      priceRange: '₹85 - ₹150 /sq ft',
      projectTime: '5-8 days',
      warranty: '5 years',
      popularFeatures: ['LED Integration', 'Sound Absorption', 'Fire Resistant', 'Easy Access'],
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
      characteristics: [
        { icon: <Zap size={20} />, text: 'LED Integration' },
        { icon: <Shield size={20} />, text: 'Fire Resistant' },
        { icon: <CheckCircle size={20} />, text: 'Sound Dampening' },
        { icon: <Sparkles size={20} />, text: 'Premium Finish' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
        'https://images.unsplash.com/photo-1545041454-6f53b06c6ed2',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
        'https://images.unsplash.com/photo-1545041454-6f53b06c6ed2',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
        'https://images.unsplash.com/photo-1545041454-6f53b06c6ed2'
      ]
    },
    {
      id: 'wall-panels',
      name: 'Wall Panels',
      icon: <Square size={32} />,
      description: 'Designer wall panels for modern interior aesthetics',
      shortDesc: 'Decorative wall solutions',
      priceRange: '₹200 - ₹450 /sq ft',
      projectTime: '3-5 days',
      warranty: '7 years',
      popularFeatures: ['3D Textures', 'Easy Install', 'Paintable Surface', 'Custom Patterns'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
      characteristics: [
        { icon: <Shield size={20} />, text: 'Durable Finish' },
        { icon: <Droplets size={20} />, text: 'Moisture Resistant' },
        { icon: <Recycle size={20} />, text: 'Sustainable' },
        { icon: <Sparkles size={20} />, text: 'Designer Patterns' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
        'https://images.unsplash.com/photo-1571055107559-3e67626fa8be',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
        'https://images.unsplash.com/photo-1571055107559-3e67626fa8be',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
        'https://images.unsplash.com/photo-1571055107559-3e67626fa8be'
      ]
    },
    {
      id: 'wardrobe',
      name: 'Wardrobe',
      icon: <Shirt size={32} />,
      description: 'Spacious WPC wardrobes with modern storage solutions',
      shortDesc: 'Custom storage solutions',
      priceRange: '₹800 - ₹1,800 /sq ft',
      projectTime: '8-12 days',
      warranty: '10 years',
      popularFeatures: ['Sliding Doors', 'Interior Organizers', 'Mirror Integration', 'Soft Close'],
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      characteristics: [
        { icon: <CheckCircle size={20} />, text: 'Spacious Design' },
        { icon: <Shield size={20} />, text: 'Long Lasting' },
        { icon: <Droplets size={20} />, text: 'Humidity Resistant' },
        { icon: <Recycle size={20} />, text: 'Eco Material' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd'
      ]
    },
    {
      id: 'tv-cabinet',
      name: 'TV Cabinet',
      icon: <Tv size={32} />,
      description: 'Modern TV cabinets with integrated storage and style',
      shortDesc: 'Entertainment center solutions',
      priceRange: '₹600 - ₹1,200 /sq ft',
      projectTime: '4-7 days',
      warranty: '8 years',
      popularFeatures: ['Cable Management', 'LED Strips', 'Hidden Storage', 'Wall Mount Ready'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
      characteristics: [
        { icon: <Zap size={20} />, text: 'Cable Management' },
        { icon: <CheckCircle size={20} />, text: 'Sturdy Build' },
        { icon: <Sparkles size={20} />, text: 'Modern Design' },
        { icon: <Shield size={20} />, text: 'Scratch Resistant' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e'
      ]
    }
  ];

  const selectedCategoryData = galleryCategories.find(cat => cat.id === selectedCategory);

  if (selectedCategory && selectedCategoryData) {
    return (
      <>
        <FloatingActions />
        <SEO 
          title={`${selectedCategoryData.name} Gallery - ShubhAangan | WPC Solutions`}
          description={`Explore our ${selectedCategoryData.name.toLowerCase()} collection. ${selectedCategoryData.description}`}
          keywords={`${selectedCategoryData.name}, WPC ${selectedCategoryData.name.toLowerCase()}, modular furniture, WPC furniture`}
        />
        
        <Navbar />
        
        {/* Category Detail View */}
        <section className="pt-8 pb-16 bg-gray-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <button
              onClick={() => setSelectedCategory(null)}
              className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-8 font-medium"
            >
              <ArrowRight size={20} className="mr-2 rotate-180" />
              Back to Gallery
            </button>

            {/* Category Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="wpc-gradient text-white rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6 shadow-lg"
              >
                {selectedCategoryData.icon}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold heading-primary mb-4"
              >
                {selectedCategoryData.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-large max-w-3xl mx-auto"
                style={{ color: 'hsl(var(--wpc-text-secondary))' }}
              >
                {selectedCategoryData.description}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Photo Gallery */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold heading-secondary mb-6">Photo Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedCategoryData.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="relative group cursor-pointer"
                      >
                        <img
                          src={image}
                          alt={`${selectedCategoryData.name} ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Characteristics */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold heading-secondary mb-6">Key Features</h3>
                      <div className="space-y-4">
                        {selectedCategoryData.characteristics.map((char, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <div className="wpc-gradient text-white p-2 rounded-lg">
                              {char.icon}
                            </div>
                            <span className="text-body font-medium">{char.text}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Contact Us */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="card-premium" style={{ background: 'linear-gradient(135deg, hsl(var(--wpc-natural)) 0%, rgba(255, 255, 255, 0.95) 100%)' }}>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold heading-secondary mb-4">Interested?</h3>
                      <p className="text-body mb-6">Get a free consultation and quote for your {selectedCategoryData.name.toLowerCase()} project.</p>
                      
                      <div className="space-y-3">
                        <a href="tel:+918114468410" className="block">
                          <Button className="w-full wpc-btn-primary flex items-center justify-center gap-2">
                            <Phone size={18} />
                            Call Now
                          </Button>
                        </a>
                        <a href="mailto:shubhaanganhd@gmail.com" className="block">
                          <Button variant="outline" className="w-full border-amber-300 text-amber-800 hover:bg-amber-50 flex items-center justify-center gap-2">
                            <Mail size={18} />
                            Email Us
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  return (
    <>
      <FloatingActions />
      <SEO 
        title="WPC Gallery - ShubhAangan | Kitchen, Ceiling, Wardrobe & More"
        description="Explore our comprehensive WPC gallery featuring modular kitchens, false ceilings, wall panels, wardrobes, and TV cabinets. Premium WPC solutions for modern spaces."
        keywords="WPC gallery, modular kitchen gallery, false ceiling designs, wardrobe designs, TV cabinet designs, wall panels, WPC furniture gallery"
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold heading-primary mb-6"
            style={{ color: 'hsl(var(--wpc-text-primary))' }}
          >
            WPC Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Explore our comprehensive collection of WPC solutions for every space in your home and office
          </motion.p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
onClick={() => navigate(`/gallery/${category.id}`)}
                className="cursor-pointer group"
              >
                <Card className="card-hover overflow-hidden shadow-xl border border-gray-100">
                  <div className="relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {category.shortDesc}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                        {category.priceRange}
                      </div>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-bold">{category.name}</h3>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 bg-white">
                    {/* Quick Info */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <CheckCircle size={14} className="mr-2 text-green-600" />
                        <span>{category.projectTime}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Shield size={14} className="mr-2 text-blue-600" />
                        <span>{category.warranty} warranty</span>
                      </div>
                    </div>

                    {/* Popular Features */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2 font-semibold">POPULAR FEATURES:</p>
                      <div className="flex flex-wrap gap-1">
                        {category.popularFeatures.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                        {category.popularFeatures.length > 3 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            +{category.popularFeatures.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <Button className="w-full wpc-btn-primary group-hover:scale-105 transition-transform duration-300 shadow-lg">
                      View Gallery <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
