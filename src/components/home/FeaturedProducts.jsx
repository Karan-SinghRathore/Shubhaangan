import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { products } from '@/data/products';

const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold heading-primary mb-6"
          >
            Featured Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-large"
            style={{ color: 'hsl(var(--wpc-text-secondary))' }}
          >
            Discover our most popular WPC collections for modern spaces
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="card-premium overflow-hidden">
                <div className="relative">
                  <img 
                    className="w-full h-64 object-cover optimized-image"
                    alt={product.name}
                    src="https://images.unsplash.com/photo-1635865165118-917ed9e20936"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="product-tag px-3 py-1 rounded-full text-xs mr-2 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 heading-tertiary">{product.name}</h3>
                  <p className="text-body mb-2">Color: <span className="font-semibold" style={{ color: 'hsl(var(--wpc-warm))' }}>{product.color}</span></p>
                  <p className="text-2xl font-bold mb-4" style={{ color: 'hsl(var(--wpc-warm))' }}>{product.sqFeetPrice}</p>
                  <Link to={`/product/${product.id}`}>
                    <Button className="w-full wpc-btn-primary">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button size="lg" className="wpc-btn-primary px-8 py-4 text-lg btn-text flex items-center gap-2 mx-auto">
              View All Products <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
