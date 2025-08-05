import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width,
  height,
  priority = false,
  placeholder = 'blur',
  onLoad,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setError(true);
  };

  // Generate optimized Unsplash URL
  const getOptimizedSrc = (originalSrc) => {
    if (!originalSrc.includes('unsplash.com')) return originalSrc;
    
    const baseUrl = originalSrc.split('?')[0];
    const params = new URLSearchParams();
    
    if (width) params.set('w', width);
    if (height) params.set('h', height);
    params.set('fit', 'crop');
    params.set('crop', 'faces,edges');
    params.set('auto', 'format,compress');
    params.set('q', '85');
    
    return `${baseUrl}?${params.toString()}`;
  };

  const optimizedSrc = getOptimizedSrc(src);

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
      {...props}
    >
      {/* Placeholder */}
      {!isLoaded && !error && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"
          style={{
            background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)'
          }}
        />
      )}

      {/* Actual Image */}
      {(isInView || priority) && (
        <img
          src={optimizedSrc}
          alt={alt}
          className={`
            absolute inset-0 w-full h-full object-cover transition-opacity duration-500
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
            ${error ? 'hidden' : ''}
            optimized-image
          `}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          width={width}
          height={height}
        />
      )}

      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
          <div className="text-center text-amber-800">
            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-xs">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
