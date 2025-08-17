import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LazyImage from '@/components/LazyImage';

const VirtualizedProductGrid = ({ products, viewMode }) => {
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 20 });
  
  // Calculate visible products
  const visibleProducts = useMemo(() => {
    return products.slice(visibleRange.start, visibleRange.end);
  }, [products, visibleRange]);

  // Load more products when scrolling
  const loadMore = useCallback(() => {
    const newEnd = Math.min(visibleRange.end + 20, products.length);
    setVisibleRange(prev => ({ ...prev, end: newEnd }));
  }, [visibleRange.end, products.length]);

  // Scroll handler for infinite loading
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore]);

  // Reset visible range when products change
  React.useEffect(() => {
    setVisibleRange({ start: 0, end: 20 });
  }, [products]);

  const getAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;
    return reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  if (viewMode === 'grid') {
    return (
      <div className="space-y-3 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6 md:space-y-0">
        {visibleProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (index % 20) * 0.05 }}
          >
            {/* Mobile Layout (horizontal card) */}
            <Card className="card-hover overflow-hidden group md:hidden">
              <div className="flex min-h-[100px]">
                <div className="relative w-28 h-24 flex-shrink-0">
                  <LazyImage
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    alt={product.name}
                    src={product.image}
                  />
                  <div className="absolute top-1 left-1">
                    <span className="bg-white/90 text-gray-800 text-[8px] font-semibold px-1 py-0.5 rounded">
                      {product.category}
                    </span>
                  </div>
                </div>

                <CardContent className="flex-1 p-3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-semibold mb-1 heading-tertiary transition-colors group-hover:text-wpc-warm line-clamp-1">
                      {product.name}
                    </h3>

                    <div className="flex items-center mb-1">
                      <div className="flex mr-1">
                        {renderStars(getAverageRating(product.reviews))}
                      </div>
                      <span className="text-[10px] text-gray-500">
                        ({product.reviews?.length || 0})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link to={`/product/${product.id}`}>
                      <Button className="wpc-btn-primary text-xs px-3 py-1">
                        View
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Desktop Layout (vertical card) */}
            <Card className="card-hover overflow-hidden group h-full flex-col hidden md:flex">
              <div className="relative">
                <LazyImage
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  alt={product.name}
                  src={product.image}
                />

                <div className="absolute top-3 left-3 flex-wrap gap-1">
                  {product.tags?.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="product-tag text-white text-xs font-semibold px-2 py-1 rounded-full mr-1 mb-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute top-2 right-2">
                  <span className="bg-white/90 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-1 heading-tertiary transition-colors group-hover:text-wpc-warm line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center mb-1">
                  <div className="flex mr-1">
                    {renderStars(getAverageRating(product.reviews))}
                  </div>
                  <span className="text-sm text-gray-500">
                    ({product.reviews?.length || 0} reviews)
                  </span>
                </div>

                <p className="text-body text-sm mb-2 line-clamp-2 min-h-[40px]">
                  {product.description}
                </p>

                <div className="mt-auto">
                  <Link to={`/product/${product.id}`} className="block">
                    <Button className="w-full wpc-btn-primary text-sm py-2">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
        
        {/* Loading indicator */}
        {visibleRange.end < products.length && (
          <div className="col-span-full text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600 mx-auto"></div>
            <p className="text-gray-600 mt-2">Loading more products...</p>
          </div>
        )}
      </div>
    );
  }

  // List view (simplified for performance)
  return (
    <div className="space-y-6">
      {visibleProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: (index % 20) * 0.05 }}
        >
          <Card className="card-hover overflow-hidden">
            <div className="flex">
              <div className="w-48 h-32 flex-shrink-0">
                <LazyImage
                  className="w-full h-full object-cover"
                  alt={product.name}
                  src={product.image}
                />
              </div>
              <CardContent className="flex-1 p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 heading-tertiary">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {renderStars(getAverageRating(product.reviews))}
                      </div>
                      <span className="text-sm text-gray-500">
                        ({product.reviews?.length || 0} reviews)
                      </span>
                    </div>
                    <p className="text-body mb-2">Color: <span className="font-medium" style={{ color: 'hsl(var(--wpc-warm))' }}>{product.color}</span></p>
                    <p className="text-body text-sm mb-4">{product.description}</p>
                    <div className="flex space-x-2">
                      {product.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold px-2 py-1 rounded"
                          style={{ backgroundColor: 'hsl(var(--wpc-natural))', color: 'hsl(var(--wpc-warm))' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right ml-6">
                    <Link to={`/product/${product.id}`}>
                      <Button className="wpc-btn-primary">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      ))}
      
      {/* Loading indicator */}
      {visibleRange.end < products.length && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600 mx-auto"></div>
          <p className="text-gray-600 mt-2">Loading more products...</p>
        </div>
      )}
    </div>
  );
};

export default VirtualizedProductGrid;
