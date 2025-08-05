import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
  ArrowLeft,
  CheckCircle,
  Droplets,
  Shield,
  Recycle,
  Sparkles,
  Zap,
  Clock,
  Star,
  Users,
  Award,
  TrendingUp,
  Heart,
  Camera,
  Download
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FloatingActions from '@/components/FloatingActions';
import SEO from '@/components/SEO';

const GalleryCategory = () => {
  const { categoryId } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const categoryData = {
    kitchen: {
      id: 'kitchen',
      name: 'WPC Kitchen Cabinets',
      icon: <ChefHat size={40} />,
      description: 'Transform your kitchen with our premium WPC modular solutions',
      longDescription: 'Our WPC kitchen cabinets combine functionality with style, offering waterproof, termite-resistant solutions that last for decades. Perfect for Indian cooking environments with high moisture and heat.',
      priceRange: '₹1,200 - ₹2,500 /sq ft',
      projectTime: '10-15 days',
      warranty: '10 years',
      rating: 4.8,
      completedProjects: 500,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
      characteristics: [
        { icon: <Droplets size={24} />, title: '100% Waterproof', desc: 'Completely resistant to water damage and moisture' },
        { icon: <Shield size={24} />, title: 'Termite Resistant', desc: 'Natural protection against termites and pests' },
        { icon: <Recycle size={24} />, title: 'Eco-Friendly', desc: 'Made from recycled materials, sustainable choice' },
        { icon: <Sparkles size={24} />, title: 'Easy to Clean', desc: 'Simple maintenance with regular cleaning' }
      ],
      features: [
        'Soft-Close Hinges', 'Pull-Out Drawers', 'Anti-Scratch Surface', 
        'Modular Design', 'Heat Resistant', 'Customizable Colors',
        'Quick Installation', 'Anti-Bacterial Coating'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136',
        'https://images.unsplash.com/photo-1556909046-b47fb5c18b45',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136',
        'https://images.unsplash.com/photo-1556909046-b47fb5c18b45',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136'
      ],
      process: [
        { step: 1, title: 'Consultation', desc: 'Free home visit and measurement' },
        { step: 2, title: 'Design', desc: '3D design and material selection' },
        { step: 3, title: 'Manufacturing', desc: 'Precision manufacturing in our facility' },
        { step: 4, title: 'Installation', desc: 'Professional installation by experts' }
      ],
      testimonials: [
        { name: 'Priya Sharma', rating: 5, comment: 'Amazing quality kitchen! Completely waterproof and looks stunning.', project: 'Luxury Villa Kitchen' },
        { name: 'Rajesh Kumar', rating: 5, comment: 'Best investment for our home. No maintenance issues after 2 years.', project: '3BHK Apartment Kitchen' }
      ]
    },
    ceiling: {
      id: 'ceiling',
      name: 'False Ceiling',
      icon: <Home size={40} />,
      description: 'Elegant acoustic ceiling designs for modern spaces',
      longDescription: 'Our false ceiling solutions combine aesthetics with functionality, offering sound dampening, LED integration, and fire-resistant properties for residential and commercial spaces.',
      priceRange: '₹85 - ₹150 /sq ft',
      projectTime: '5-8 days',
      warranty: '5 years',
      rating: 4.7,
      completedProjects: 300,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
      characteristics: [
        { icon: <Zap size={24} />, title: 'LED Integration', desc: 'Built-in LED strip compatibility' },
        { icon: <Shield size={24} />, title: 'Fire Resistant', desc: 'Meets all fire safety standards' },
        { icon: <CheckCircle size={24} />, title: 'Sound Dampening', desc: 'Reduces noise and echo effectively' },
        { icon: <Sparkles size={24} />, title: 'Premium Finish', desc: 'Smooth, elegant surface finish' }
      ],
      features: [
        'LED Strip Integration', 'Sound Absorption', 'Fire Resistant', 
        'Easy Access Panels', 'Lightweight Design', 'Quick Installation',
        'Multiple Designs', 'Maintenance Free'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
        'https://images.unsplash.com/photo-1545041454-6f53b06c6ed2',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
        'https://images.unsplash.com/photo-1545041454-6f53b06c6ed2',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
        'https://images.unsplash.com/photo-1545041454-6f53b06c6ed2',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
        'https://images.unsplash.com/photo-1545041454-6f53b06c6ed2'
      ],
      process: [
        { step: 1, title: 'Site Survey', desc: 'Detailed measurement and planning' },
        { step: 2, title: 'Design Selection', desc: 'Choose from various ceiling patterns' },
        { step: 3, title: 'Framework Setup', desc: 'Install support structure' },
        { step: 4, title: 'Panel Installation', desc: 'Final ceiling panel installation' }
      ],
      testimonials: [
        { name: 'Amit Verma', rating: 5, comment: 'Excellent acoustic properties. Our home theater sounds amazing now.', project: 'Home Theater Ceiling' },
        { name: 'Sneha Reddy', rating: 4, comment: 'Beautiful design and quick installation. Very satisfied.', project: 'Living Room Ceiling' }
      ]
    },
    // Add similar detailed data for other categories...
    'wall-panels': {
      id: 'wall-panels',
      name: 'Wall Panels',
      icon: <Square size={40} />,
      description: 'Designer wall panels for stunning interiors',
      longDescription: 'Transform your walls with our premium WPC wall panels. Available in various textures and patterns, these panels add depth and character to any space while being moisture-resistant and easy to maintain.',
      priceRange: '₹200 - ₹450 /sq ft',
      projectTime: '3-5 days',
      warranty: '7 years',
      rating: 4.6,
      completedProjects: 250,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
      characteristics: [
        { icon: <Shield size={24} />, title: 'Durable Finish', desc: 'Long-lasting surface finish' },
        { icon: <Droplets size={24} />, title: 'Moisture Resistant', desc: 'Perfect for humid environments' },
        { icon: <Recycle size={24} />, title: 'Sustainable', desc: 'Eco-friendly manufacturing process' },
        { icon: <Sparkles size={24} />, title: 'Designer Patterns', desc: 'Wide variety of texture options' }
      ],
      features: [
        '3D Textures', 'Easy Installation', 'Paintable Surface', 
        'Custom Patterns', 'Lightweight', 'Low Maintenance',
        'Multiple Finishes', 'Cost Effective'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
        'https://images.unsplash.com/photo-1571055107559-3e67626fa8be',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
        'https://images.unsplash.com/photo-1571055107559-3e67626fa8be',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
        'https://images.unsplash.com/photo-1571055107559-3e67626fa8be',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
        'https://images.unsplash.com/photo-1571055107559-3e67626fa8be'
      ],
      process: [
        { step: 1, title: 'Wall Preparation', desc: 'Clean and prepare wall surface' },
        { step: 2, title: 'Pattern Selection', desc: 'Choose design and layout' },
        { step: 3, title: 'Panel Cutting', desc: 'Precision cutting for perfect fit' },
        { step: 4, title: 'Installation', desc: 'Professional panel installation' }
      ],
      testimonials: [
        { name: 'Ravi Patel', rating: 5, comment: 'Transformed our living room completely. Great quality panels.', project: 'Living Room Accent Wall' },
        { name: 'Kavya Singh', rating: 4, comment: 'Easy to maintain and looks premium. Worth the investment.', project: 'Bedroom Feature Wall' }
      ]
    }
  };

  const category = categoryData[categoryId];

  if (!category) {
    return (
      <>
        <FloatingActions />
        <Navbar />
        <div className="pt-8 pb-16 text-center min-h-screen flex items-center justify-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Category not found</h1>
            <Link to="/gallery">
              <Button className="wpc-btn-primary">Back to Gallery</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <FloatingActions />
      <SEO 
        title={`${category.name} - ShubhAangan | Premium WPC Solutions`}
        description={category.longDescription}
        keywords={`${category.name}, WPC ${category.name.toLowerCase()}, modular furniture, WPC furniture`}
      />
      
      <Navbar />
      
      {/* Breadcrumb */}
      <section className="pt-8 pb-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/gallery" className="text-orange-600 hover:text-orange-700">Gallery</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{category.name}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  {category.icon}
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">{category.name}</h1>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Star className="text-yellow-400 fill-current mr-1" size={16} />
                      <span>{category.rating}/5</span>
                    </div>
                    <span>•</span>
                    <span>{category.completedProjects}+ projects</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-white/90 mb-6">{category.longDescription}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">{category.priceRange}</div>
                  <div className="text-sm text-white/80">Price Range</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{category.projectTime}</div>
                  <div className="text-sm text-white/80">Project Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{category.warranty}</div>
                  <div className="text-sm text-white/80">Warranty</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+918114468410">
                  <Button size="lg" className="wpc-btn-secondary px-8 py-4 text-lg font-semibold flex items-center gap-2">
                    <Phone size={20} />
                    Get Quote Now
                  </Button>
                </a>
                <a href="mailto:shubhaanganhd@gmail.com">
                  <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 flex items-center gap-2">
                    <Mail size={20} />
                    Email Us
                  </Button>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={category.gallery[selectedImageIndex]}
                alt={category.name}
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our {category.name}?</h2>
            <p className="text-xl text-gray-600">Premium features that make the difference</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {category.characteristics.map((char, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-hover text-center h-full">
                  <CardContent className="p-6">
                    <div className="wpc-gradient text-white rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                      {char.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{char.title}</h3>
                    <p className="text-gray-600 text-sm">{char.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Gallery</h2>
            <p className="text-xl text-gray-600">Real projects, real results</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`${category.name} ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="text-white" size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold heading-primary mb-4">Our WPC Process</h2>
            <p className="text-xl text-large" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>From consultation to completion - Your journey with us</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {category.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="wpc-gradient text-white rounded-xl w-20 h-20 mx-auto flex items-center justify-center text-2xl font-bold shadow-lg transform hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  {index < category.process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-20 w-full h-1 rounded-full" style={{ background: 'linear-gradient(90deg, hsl(var(--wpc-warm)) 0%, hsl(var(--wpc-accent)) 100%)' }} />
                  )}
                </div>
                <Card className="card-premium p-6 h-full">
                  <h3 className="text-lg font-semibold mb-3 heading-tertiary">{step.title}</h3>
                  <p className="text-body text-sm leading-relaxed">{step.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold heading-primary mb-4">Complete Feature List</h2>
            <p className="text-xl text-large" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>Everything you get with our {category.name.toLowerCase()}</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {category.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3 p-4 rounded-lg card-premium"
              >
                <CheckCircle className="flex-shrink-0" size={20} style={{ color: 'hsl(var(--wpc-warm))' }} />
                <span className="text-body font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold heading-primary mb-4">What Our Customers Say</h2>
            <p className="text-xl text-large" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>Real feedback from real customers</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="card-hover h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={20} />
                      ))}
                    </div>
                    <p className="text-body mb-4 italic leading-relaxed">"{testimonial.comment}"</p>
                    <div>
                      <p className="font-semibold" style={{ color: 'hsl(var(--wpc-text-primary))' }}>{testimonial.name}</p>
                      <p className="text-small" style={{ color: 'hsl(var(--wpc-warm))' }}>{testimonial.project}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold heading-secondary mb-4" style={{ color: 'hsl(var(--wpc-text-primary))' }}>Ready to Transform Your Space?</h2>
            <p className="text-xl text-large mb-8 max-w-3xl mx-auto" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>
              Get a free consultation and detailed quote for your {category.name.toLowerCase()} project
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918114468410">
                <Button size="lg" className="wpc-btn-secondary px-8 py-4 text-lg font-semibold flex items-center gap-2">
                  <Phone size={20} />
                  Call Now for Free Quote
                </Button>
              </a>
              <a href="mailto:shubhaanganhd@gmail.com">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 flex items-center gap-2">
                  <Mail size={20} />
                  Email Project Details
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GalleryCategory;
