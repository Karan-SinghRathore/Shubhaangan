import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star, Filter, Grid, List, Search, SlidersHorizontal, Eye, Heart, ShoppingCart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { products, getProductsByCategory } from '@/data/products';
import { debounce, getSearchableText, sortFunctions } from '@/utils/productFilters';
import FloatingActions from '@/components/FloatingActions';
import SEO from '@/components/SEO';
import LazyImage from '@/components/LazyImage';
import VirtualizedProductGrid from '@/components/VirtualizedProductGrid';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
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

  // Debounced search effect
  const debouncedSetSearch = useMemo(
    () => debounce((term) => setDebouncedSearchTerm(term), 300),
    []
  );

  useEffect(() => {
    debouncedSetSearch(searchTerm);
  }, [searchTerm, debouncedSetSearch]);

  // Optimized handlers using useCallback
  const handleCategoryChange = useCallback((categoryId) => {
    setSelectedCategory(categoryId);
  }, []);

  const handlePriceRangeChange = useCallback((priceRangeId) => {
    setSelectedPriceRange(priceRangeId);
  }, []);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const handleSort = useCallback((sortType) => {
    setSortBy(sortType);
  }, []);

  // Memoized filtering for better performance
  const filteredProducts = useMemo(() => {
    let filtered = getProductsByCategory(selectedCategory);

    // Apply price filter
    if (selectedPriceRange !== 'all') {
      const range = priceRanges.find(r => r.id === selectedPriceRange);
      filtered = filtered.filter(p => p.price >= range.min && p.price <= range.max);
    }

    // Apply search filter using optimized search
    if (debouncedSearchTerm) {
      const searchLower = debouncedSearchTerm.toLowerCase();
      filtered = filtered.filter(p => getSearchableText(p).includes(searchLower));
    }

    // Apply sorting using optimized sort functions
    const sortFunction = sortFunctions[sortBy] || sortFunctions.name;
    return filtered.sort(sortFunction);
  }, [selectedCategory, selectedPriceRange, debouncedSearchTerm, sortBy]);


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
          </div>

          {/* Products Display - Virtualized for Performance */}
          <VirtualizedProductGrid products={filteredProducts} viewMode={viewMode} />

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold heading-tertiary mb-2">No products found</h3>
              <p className="text-body mb-4">Try adjusting your search or filter criteria</p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
                setSortBy('name');
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
