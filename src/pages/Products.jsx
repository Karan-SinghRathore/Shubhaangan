import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star, Filter, Grid, List, Search, SlidersHorizontal, Eye, Heart, ShoppingCart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { products, getProductsByCategory, priceNote } from '@/data/products';
import FloatingActions from '@/components/FloatingActions';
import SEO from '@/components/SEO';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name'); // name, price-low, price-high, rating
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'glossy', name: 'Glossy', count: products.filter(p => p.category === 'glossy').length },
    { id: 'Matt', name: 'Matt', count: products.filter(p => p.category === 'Matt').length },
    { id: 'texture', name: 'Texture', count: products.filter(p => p.category === 'texture').length },
    { id: 'ceiling', name: 'Ceiling', count: products.filter(p => p.category === 'ceiling').length },
    { id: 'doors', name: 'doors', count: products.filter(p => p.category === 'doors').length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', min: 0, max: 999999 },
    { id: 'budget', name: 'Under ₹50', min: 0, max: 50 },
    { id: 'mid', name: '₹50 - ₹100', min: 50, max: 100 },
    { id: 'premium', name: '₹100 - ₹150', min: 100, max: 150 },
    { id: 'luxury', name: 'Above ₹150', min: 150, max: 999999 }
  ];

  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    applyFilters(categoryId, selectedPriceRange, searchTerm, sortBy);
  };

  const handlePriceRangeChange = (priceRangeId) => {
    setSelectedPriceRange(priceRangeId);
    applyFilters(selectedCategory, priceRangeId, searchTerm, sortBy);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    applyFilters(selectedCategory, selectedPriceRange, term, sortBy);
  };

  const handleSort = (sortType) => {
    setSortBy(sortType);
    applyFilters(selectedCategory, selectedPriceRange, searchTerm, sortType);
  };

  const applyFilters = (category, priceRange, search, sort) => {
    let filtered = getProductsByCategory(category);
    
    // Apply price filter
    if (priceRange !== 'all') {
      const range = priceRanges.find(r => r.id === priceRange);
      filtered = filtered.filter(p => p.price >= range.min && p.price <= range.max);
    }

    // Apply search filter
    if (search) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.color.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply sorting
    filtered = filtered.sort((a, b) => {
      switch (sort) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return (b.reviews?.reduce((acc, r) => acc + r.rating, 0) / b.reviews?.length || 0) - 
                 (a.reviews?.reduce((acc, r) => acc + r.rating, 0) / a.reviews?.length || 0);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  };

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

  return (
    <>
      <FloatingActions />
      <SEO 
        title="WPC Products - ShubhAangan | Premium WPC Sheets & Solutions"
        description="Browse our extensive collection of premium WPC sheets including glossy finishes, Matt designs, and ceiling solutions. Find the perfect WPC materials for your modular kitchen, bedroom, and office projects."
        keywords="WPC sheets, modular kitchen, bedroom furniture, office furniture, ceiling panels, glossy sheets, texture sheets"
      />

      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold heading-primary mb-6"
            style={{ color: 'hsl(var(--wpc-text-primary))' }}
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-large max-w-3xl mx-auto mb-8"
            style={{ color: 'hsl(var(--wpc-text-secondary))' }}
          >
            Discover our premium collection of WPC/UPVC sheets and solutions designed to transform any space
          </motion.p>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search products by name, color, or description..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-white/90 backdrop-blur-sm border-0 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Category Filters */}
            <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`px-3 py-2 text-xs md:text-sm md:px-4 transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'wpc-btn-primary text-white'
                      : 'border-2'
                  }`}
                  style={selectedCategory !== category.id ? {
                    borderColor: 'hsl(var(--wpc-accent))',
                    color: 'hsl(var(--wpc-warm))',
                    backgroundColor: 'transparent'
                  } : {}}
                >
                  {category.name} <span className="ml-1 text-[10px] md:text-xs opacity-70">({category.count})</span>
                </Button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 overflow-hidden ">
              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => handleSort(e.target.value)}
                className="px-1 py-2 border-2 rounded-lg text-sm transition-colors duration-200 overflow-hidden"
                style={{
                  borderColor: 'hsl(var(--wpc-accent))',
                  color: 'hsl(var(--wpc-text-primary))'
                }}
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              {/* View Mode Toggle */}
              {window.innerWidth >= 768 && (
                  <div className="flex border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'wpc-gradient text-white' : 'bg-white text-gray-600'}`}
                    >
                      <Grid size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'wpc-gradient text-white' : 'bg-white text-gray-600'}`}
                    >
                      <List size={18} />
                    </button>
                  </div>
                )}

              {/* Filters Toggle */}
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="border-2 transition-all duration-200 overflow-hidden" 
                style={{
                  borderColor: 'hsl(var(--wpc-accent))',
                  color: 'hsl(var(--wpc-warm))',
                  backgroundColor: showFilters ? 'hsl(var(--wpc-natural))' : 'transparent'
                }}
              >
                <SlidersHorizontal size={18} className="mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Extended Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 pt-6 border-t border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <label key={range.id} className="flex items-center">
                        <input
                          type="radio"
                          name="priceRange"
                          value={range.id}
                          checked={selectedPriceRange === range.id}
                          onChange={() => handlePriceRangeChange(range.id)}
                          className="mr-2"
                        />
                        <span className="text-sm">{range.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Info */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
              {searchTerm && ` for "${searchTerm}"`}
            </p>
            <p className="text-sm text-gray-500 mt-2 italic">{priceNote}</p>
          </div>

          {/* Products Display */}
          {viewMode === 'grid' ? (
          <div className="space-y-3 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6 md:space-y-0">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Mobile Layout (horizontal card) */}
                <Card className="card-hover overflow-hidden group md:hidden">
                  <div className="flex min-h-[100px]">
                    <div className="relative w-28 h-24 flex-shrink-0">
                      <img
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        alt={product.name}
                        src={product.image}
                        loading="lazy"
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

                        <p className="text-xs text-body mb-2">
                          {/* Color: <span className="font-medium">{product.color}</span> */}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-base font-bold" style={{ color: 'hsl(var(--wpc-warm))' }}>
                          {product.sqFeetPrice}
                        </div>
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
                    <img
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      alt={product.name}
                      src={product.image}
                      loading="lazy"
                    />

                    <div className="absolute top-3 left-3 flex-wrap gap-1">
                      {product.tags.slice(0, 2).map((tag) => (
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

                    <p className="text-body mb-1 text-sm">
                      {/* Color: <span className="font-medium">{product.color}</span> */}
                    </p>

                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold" style={{ color: 'hsl(var(--wpc-warm))' }}>
                        {product.sqFeetPrice}
                      </div>
                      <div className="text-sm text-gray-500">per sq ft</div>
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
          </div>
          ) : (
            /* List View */
            <div className="space-y-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-hover overflow-hidden">
                    <div className="flex">
                      <div className="w-48 h-32 flex-shrink-0">
                        <img
                          className="w-full h-full object-cover"
                          alt={product.name}
                          src={product.image}
                          loading="lazy"
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
                              {product.tags.map((tag) => (
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
                            <div className="text-2xl font-bold mb-4" style={{ color: 'hsl(var(--wpc-warm))' }}>{product.sqFeetPrice}</div>
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
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold heading-tertiary mb-2">No products found</h3>
              <p className="text-body mb-4">Try adjusting your search or filter criteria</p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
                setFilteredProducts(products);
              }}>
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Products;
