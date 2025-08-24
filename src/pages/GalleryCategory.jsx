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
import OptimizedImage from '@/components/OptimizedImage';

const GalleryCategory = () => {
  const { categoryId } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const categoryData = {
    kitchen: {
      id: 'kitchen',
      name: 'Kitchen Cabinets',
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
        'https://images.pexels.com/photos/8146160/pexels-photo-8146160.jpeg',
        'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
        'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
        'https://images.pexels.com/photos/12700379/pexels-photo-12700379.jpeg'
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
        'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg',
        'https://images.pexels.com/photos/20059731/pexels-photo-20059731.jpeg',
        'https://images.pexels.com/photos/1487154/pexels-photo-1487154.jpeg',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6'
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
        'https://images.pexels.com/photos/20899969/pexels-photo-20899969.jpeg',
        'https://images.pexels.com/photos/11449320/pexels-photo-11449320.jpeg',
        'https://images.pexels.com/photos/3213031/pexels-photo-3213031.png',
        'https://images.pexels.com/photos/11775864/pexels-photo-11775864.jpeg'
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
    },
    wardrobe: {
      id: 'wardrobe',
      name: 'Wardrobe',
      icon: <Shirt size={40} />,
      description: 'Spacious WPC wardrobes with modern storage solutions',
      longDescription: 'Transform your bedroom storage with our premium WPC wardrobes. Featuring sliding doors, interior organizers, and mirror integration, our wardrobes combine functionality with style while offering complete moisture resistance.',
      projectTime: '8-12 days',
      warranty: '10 years',
      rating: 4.8,
      completedProjects: 180,
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
      characteristics: [
        { icon: <CheckCircle size={24} />, title: 'Spacious Design', desc: 'Optimized storage with multiple compartments' },
        { icon: <Shield size={24} />, title: 'Long Lasting', desc: 'Durable construction for years of use' },
        { icon: <Droplets size={24} />, title: 'Humidity Resistant', desc: 'Perfect for Indian climate conditions' },
        { icon: <Recycle size={24} />, title: 'Eco Material', desc: 'Sustainable WPC material construction' }
      ],
      features: [
        'Sliding Doors', 'Interior Organizers', 'Mirror Integration',
        'Soft Close Mechanism', 'Adjustable Shelves', 'LED Lighting',
        'Custom Compartments', 'Anti-Sag Support'
      ],
      gallery: [
        'https://images.pexels.com/photos/7031766/pexels-photo-7031766.jpeg',
        'https://images.pexels.com/photos/271695/pexels-photo-271695.jpeg',
        'https://images.pexels.com/photos/6585617/pexels-photo-6585617.jpeg',
        'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg'
      ],
      process: [
        { step: 1, title: 'Space Analysis', desc: 'Detailed room measurement and design' },
        { step: 2, title: 'Layout Design', desc: 'Custom storage solution planning' },
        { step: 3, title: 'Manufacturing', desc: 'Precision crafting in our facility' },
        { step: 4, title: 'Installation', desc: 'Professional assembly and setup' }
      ],
      testimonials: [
        { name: 'Neha Gupta', rating: 5, comment: 'Amazing storage space! The sliding doors work perfectly and it looks so elegant.', project: 'Master Bedroom Wardrobe' },
        { name: 'Arun Kumar', rating: 4, comment: 'Great quality construction. Very happy with the interior organization.', project: 'Kids Room Wardrobe' }
      ]
    },
    'tv-cabinet': {
      id: 'tv-cabinet',
      name: 'TV Cabinet',
      icon: <Tv size={40} />,
      description: 'Modern TV cabinets with integrated storage and style',
      longDescription: 'Enhance your entertainment area with our stylish WPC/UPVC TV cabinets. Featuring cable management, LED strip integration, and hidden storage, our designs perfectly complement modern living spaces.',
      projectTime: '4-7 days',
      warranty: '8 years',
      rating: 4.6,
      completedProjects: 220,
      image: 'https://images.pexels.com/photos/7546231/pexels-photo-7546231.jpeg',
      characteristics: [
        { icon: <Zap size={24} />, title: 'Cable Management', desc: 'Built-in cable routing and organization' },
        { icon: <CheckCircle size={24} />, title: 'Sturdy Build', desc: 'Supports large TVs and equipment' },
        { icon: <Sparkles size={24} />, title: 'Modern Design', desc: 'Contemporary styling for any room' },
        { icon: <Shield size={24} />, title: 'Scratch Resistant', desc: 'Durable surface finish' }
      ],
      features: [
        'Cable Management', 'LED Strip Ready', 'Hidden Storage',
        'Wall Mount Compatible', 'Adjustable Shelves', 'Ventilation Slots',
        'Remote Storage', 'Cord Concealment'
      ],
      gallery: [
        'https://images.pexels.com/photos/6587825/pexels-photo-6587825.jpeg',
        'https://images.pexels.com/photos/5825543/pexels-photo-5825543.jpeg',
        'https://images.pexels.com/photos/13051217/pexels-photo-13051217.jpeg',
        'https://images.pexels.com/photos/7546231/pexels-photo-7546231.jpeg'
      ],
      process: [
        { step: 1, title: 'Room Survey', desc: 'TV size and room layout assessment' },
        { step: 2, title: 'Design Selection', desc: 'Choose style and storage options' },
        { step: 3, title: 'Custom Build', desc: 'Tailored manufacturing process' },
        { step: 4, title: 'Setup & Install', desc: 'Professional installation and wiring' }
      ],
      testimonials: [
        { name: 'Vikash Sharma', rating: 5, comment: 'Perfect TV cabinet! The cable management is excellent and it looks very premium.', project: 'Living Room Entertainment Center' },
        { name: 'Shreya Patel', rating: 4, comment: 'Great storage space and the design matches our modern decor perfectly.', project: 'Family Room TV Unit' }
      ]
    },
    aluminum: {
      id: 'aluminum',
      name: 'Aluminum Products',
      icon: <Square size={40} />,
      description: 'Premium aluminum sliding windows, doors and building solutions',
      longDescription: 'Transform your spaces with our premium aluminum products including sliding windows, doors, and modern facades. Our aluminum solutions offer superior durability, energy efficiency, and contemporary aesthetics perfect for residential and commercial applications.',
      priceRange: '₹350 - ₹800 /sq ft',
      projectTime: '7-10 days',
      warranty: '15 years',
      rating: 4.7,
      completedProjects: 150,
      image: 'https://images.pexels.com/photos/842153/pexels-photo-842153.jpeg',
      characteristics: [
        { icon: <Shield size={24} />, title: 'Corrosion Resistant', desc: 'Superior protection against rust and weather' },
        { icon: <Zap size={24} />, title: 'Energy Efficient', desc: 'Thermal insulation for better energy savings' },
        { icon: <CheckCircle size={24} />, title: 'Low Maintenance', desc: 'Minimal upkeep required for long-lasting performance' },
        { icon: <Sparkles size={24} />, title: 'Modern Design', desc: 'Contemporary aesthetics for modern architecture' }
      ],
      features: [
        'Sliding Windows', 'Aluminum Doors', 'Modern Facades',
        'Balcony Railings', 'Weather Sealing', 'Thermal Break',
        'Powder Coating', 'Security Features'
      ],
      gallery: [
        'https://images.pexels.com/photos/842153/pexels-photo-842153.jpeg',
        'https://images.pexels.com/photos/4682126/pexels-photo-4682126.jpeg',
        'https://images.pexels.com/photos/5271210/pexels-photo-5271210.jpeg',
        'https://images.pexels.com/photos/19086451/pexels-photo-19086451.jpeg',
        'https://images.pexels.com/photos/210464/pexels-photo-210464.jpeg',
        'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg'
      ],
      process: [
        { step: 1, title: 'Site Measurement', desc: 'Precise measurement and structural assessment' },
        { step: 2, title: 'Design Planning', desc: 'Custom design based on requirements' },
        { step: 3, title: 'Manufacturing', desc: 'Precision fabrication with quality materials' },
        { step: 4, title: 'Installation', desc: 'Professional installation and finishing' }
      ],
      testimonials: [
        { name: 'Karan Malhotra', rating: 5, comment: 'Excellent aluminum windows! Great quality and the sliding mechanism is smooth even after 3 years.', project: 'Modern Villa Windows' },
        { name: 'Sunita Jain', rating: 4, comment: 'Beautiful aluminum doors with perfect finishing. Very happy with the result and service.', project: 'Office Building Entrance' }
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
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl" style={{color: 'hsl(var(--wpc-accent))'}}>
                  {category.icon}
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2 heading-primary">{category.name}</h1>
                  <div className="flex items-center space-x-4 text-sm heading-primary   ">
                    <div className="flex items-center ">
                      <Star className="text-yellow-400 fill-current mr-1 " size={16} />
                      <span>{category.rating}/5</span>
                    </div>
                    <span>•</span>
                    <span>{category.completedProjects}+ projects</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-white/90 mb-6 heading-secondary">{category.longDescription}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold heading-secondary">{category.projectTime}</div>
                  <div className="text-sm text-white/80 heading-secondary">Project Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold heading-secondary">{category.warranty}</div>
                  <div className="text-sm text-white/80 heading-secondary">Warranty</div>
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
              <OptimizedImage
                src={category.gallery[selectedImageIndex]}
                alt={category.name}
                width={800}
                height={600}
                className="w-full h-96 rounded-xl shadow-2xl"
                priority={true}
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gallery-grid">
            {category.gallery.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer gallery-item"
                onClick={() => setSelectedImageIndex(index)}
              >
                <OptimizedImage
                  src={image}
                  alt={`${category.name} ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-48 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  priority={index < 4}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="text-white" size={20} />
                </div>
              </div>
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
