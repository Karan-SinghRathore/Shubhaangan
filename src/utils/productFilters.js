// Optimized filtering utilities for better performance

// Debounce search to avoid excessive filtering
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Pre-computed search cache for faster text matching
const searchCache = new Map();

export const getSearchableText = (product) => {
  const cacheKey = product.id;
  
  if (searchCache.has(cacheKey)) {
    return searchCache.get(cacheKey);
  }
  
  const searchText = [
    product.name,
    product.description,
    product.color || '',
    ...(product.tags || [])
  ].join(' ').toLowerCase();
  
  searchCache.set(cacheKey, searchText);
  return searchText;
};

// Optimized sorting functions
export const sortFunctions = {
  name: (a, b) => a.name.localeCompare(b.name),
  'price-low': (a, b) => a.price - b.price,
  'price-high': (a, b) => b.price - a.price,
  rating: (a, b) => {
    const ratingA = a.reviews?.reduce((acc, r) => acc + r.rating, 0) / (a.reviews?.length || 1) || 0;
    const ratingB = b.reviews?.reduce((acc, r) => acc + r.rating, 0) / (b.reviews?.length || 1) || 0;
    return ratingB - ratingA;
  }
};

// Batch processing for large datasets
export const processBatch = (items, batchSize = 50, processor) => {
  return new Promise((resolve) => {
    const results = [];
    let index = 0;

    const processBatch = () => {
      const batch = items.slice(index, index + batchSize);
      results.push(...batch.map(processor));
      index += batchSize;

      if (index < items.length) {
        setTimeout(processBatch, 0); // Non-blocking processing
      } else {
        resolve(results);
      }
    };

    processBatch();
  });
};
