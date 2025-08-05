// Performance optimization utilities

// Intersection Observer for lazy loading
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    rootMargin: '50px 0px',
    threshold: 0.1,
    ...options
  };

  if (typeof IntersectionObserver === 'undefined') {
    // Fallback for browsers without IntersectionObserver
    setTimeout(() => callback([{ isIntersecting: true }]), 100);
    return { observe: () => {}, disconnect: () => {} };
  }

  return new IntersectionObserver(callback, defaultOptions);
};

// Debounce function for performance
export const debounce = (func, wait, immediate) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

// Throttle function for scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Preload critical resources
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Measure Core Web Vitals
export const measurePerformance = () => {
  if (typeof window === 'undefined') return;

  // First Contentful Paint
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      if (entry.name === 'first-contentful-paint') {
        console.log('FCP:', entry.startTime);
      }
    }
  }).observe({ entryTypes: ['paint'] });

  // Largest Contentful Paint
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log('LCP:', lastEntry.startTime);
  }).observe({ entryTypes: ['largest-contentful-paint'] });

  // Cumulative Layout Shift
  let clsValue = 0;
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
        console.log('CLS:', clsValue);
      }
    }
  }).observe({ entryTypes: ['layout-shift'] });
};

// Critical resource hints
export const addResourceHints = () => {
  if (typeof document === 'undefined') return;

  const addPreconnect = (href) => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = href;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  };

  // Preconnect to external domains
  addPreconnect('https://images.unsplash.com');
  addPreconnect('https://fonts.googleapis.com');
};

// Memory management
export const cleanupIntersectionObserver = (observer) => {
  if (observer && typeof observer.disconnect === 'function') {
    observer.disconnect();
  }
};

// Bundle size optimization helper
export const loadComponentAsync = (componentLoader) => {
  return React.lazy(() => {
    return componentLoader().catch(err => {
      console.error('Component loading error:', err);
      // Return a fallback component
      return { default: () => <div>Failed to load component</div> };
    });
  });
};
