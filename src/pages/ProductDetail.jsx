import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star, ArrowLeft, Palette, Phone, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getProductById, products } from '@/data/products';
import FloatingActions from '@/components/FloatingActions';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Color variants data
  const colorVariants = [
    { name: 'Oak Brown', color: '#8B4513', image: 'https://images.unsplash.com/photo-1635865165118-917ed9e20936' },
    { name: 'Teak Natural', color: '#CD853F', image: 'https://images.unsplash.com/photo-1595872018818-97555653a011' },
    { name: 'Walnut Dark', color: '#654321', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91' },
    { name: 'Pine Light', color: '#FFC000', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7' },
    { name: 'Mahogany Rich', color: '#C04000', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91' },
    { name: 'Cedar Red', color: '#8B5A2B', image: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be' },
    { name: 'Bamboo Natural', color: '#E1C16E', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7' },
    { name: 'Ash Grey', color: '#B2B2B2', image: 'https://images.unsplash.com/photo-1595872018818-97555653a011' }
  ];

  if (!product) {
    return (
      <>
        <FloatingActions />
        <Navbar />
        <div className="pt-8 pb-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Link to="/products">
            <Button className="wpc-btn-primary">Back to Products</Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const productImages = product.gallery || [product.image];

  // Auto-playing carousel for colors - continuous scrolling
  useEffect(() => {
    if (isAutoPlaying && colorVariants.length > 0) {
      const timer = setInterval(() => {
        setCurrentColorIndex((prev) => {
          const nextIndex = prev + 1;
          // Reset to 0 when we reach the length to create seamless loop
          return nextIndex >= colorVariants.length ? 0 : nextIndex;
        });
      }, 2000); // Move every 2 seconds
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying, colorVariants.length]);

  return (
    <>
      <FloatingActions />
      <Helmet>
        <title>{product.name} - ShubhAangan | Premium WPC Sheets Details</title>
        <meta name="description" content={`${product.description} Available in ${product.color} at ${product.sqFeetPrice}. View features, pricing, and customer reviews for premium WPC sheets.`} />
        <meta name="keywords" content={`WPC sheets, ${product.name}, ${product.color}, modular kitchen, bedroom furniture, office furniture`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": product.name,
            "description": product.description,
            "brand": "ShubhAangan",
            "offers": {
              "@type": "Offer",
              "price": product.price,
              "priceCurrency": "INR"
            }
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Breadcrumb */}
      <section className="pt-8 pb-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-4 font-medium transition-colors duration-200">
            <ArrowLeft size={20} className="mr-2" />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Product Details */}
      <section className="pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img  
                  className="w-full h-96 object-cover rounded-xl shadow-lg optimized-image"
                  alt={product.name}
                  src={productImages[selectedImage]}
                />
                <div className="absolute top-4 left-4">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="product-tag px-3 py-1 rounded-full text-xs mr-2 mb-2 inline-block font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Gallery Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => setSelectedImage(index)}
                    className={`cursor-pointer rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-4 ring-amber-500' : ''
                    }`}
                  >
                    <img  
                      className="w-full h-24 object-cover hover:scale-105 transition-transform duration-300"
                      alt={`${product.name} view ${index + 1}`}
                      src={image}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-4xl font-bold heading-primary mb-4">{product.name}</h1>
                <p className="text-xl text-gray-600 mb-2">Color: <span className="font-semibold">{product.color}</span></p>
                <p className="text-3xl font-bold text-amber-700 mb-4">{product.sqFeetPrice}</p>
                <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="heading-secondary flex items-center gap-2">
                    <Star className="text-amber-500" size={20} />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 wpc-gradient rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Contact Buttons */}
              <div className="space-y-4">
                <Link to="/contact" className="block">
                  <Button size="lg" className="w-full wpc-btn-primary py-4 text-lg font-semibold flex items-center justify-center gap-2">
                    <MessageCircle size={20} />
                    Contact Us for More Details
                  </Button>
                </Link>
                
                <a href="tel:+918114468410" className="block">
                  <Button size="lg" variant="outline" className="w-full py-4 text-lg font-semibold border-amber-300 text-amber-800 hover:bg-amber-50 flex items-center justify-center gap-2">
                    <Phone size={20} />
                    Call for Instant Quote
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Pricing Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold heading-secondary mb-4">Project-Based Pricing</h2>
            <p className="text-xl text-large" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>Competitive pricing for different project types and scales</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="wpc-gradient text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Project Type</th>
                        <th className="px-6 py-4 text-left font-semibold">Price per Sq Ft</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.pricing.map((item, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? 'bg-wpc-natural' : 'bg-white'} transition-colors duration-200`} style={{ ':hover': { backgroundColor: 'hsl(var(--wpc-natural))' } }}>
                          <td className="px-6 py-4 font-medium" style={{ color: 'hsl(var(--wpc-text-primary))' }}>{item.project}</td>
                          <td className="px-6 py-4 font-bold text-lg" style={{ color: 'hsl(var(--wpc-warm))' }}>{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-body mb-4">Prices include material and basic installation. Additional charges may apply for complex designs.</p>
            <Link to="/contact">
              <Button className="wpc-btn-primary">
                Get Detailed Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold heading-secondary mb-4">Customer Reviews</h2>
            <p className="text-xl text-large" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>What our customers say about this product</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="card-hover shadow-lg h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={20} />
                      ))}
                      <span className="ml-2 text-body font-medium">({review.rating}/5)</span>
                    </div>
                    <p className="text-body mb-4 italic text-lg leading-relaxed">"{review.comment}"</p>
                    <p className="font-semibold" style={{ color: 'hsl(var(--wpc-warm))' }}>{review.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold heading-primary mb-4">You Might Also Like</h2>
            <p className="text-xl text-large" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>Similar WPC products that complement your project</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3).map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-premium overflow-hidden group h-full">
                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      alt={relatedProduct.name}
                      src={relatedProduct.image}
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="product-tag text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {relatedProduct.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 heading-tertiary group-hover:text-wpc-warm transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-body mb-2 text-sm">Color: <span className="font-medium" style={{ color: 'hsl(var(--wpc-warm))' }}>{relatedProduct.color}</span></p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xl font-bold" style={{ color: 'hsl(var(--wpc-warm))' }}>{relatedProduct.sqFeetPrice}</div>
                    </div>
                    <Link to={`/product/${relatedProduct.id}`} className="block">
                      <Button className="w-full wpc-btn-primary text-sm">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/products">
              <Button size="lg" className="wpc-btn-secondary px-8 py-4">
                View All Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetail;
