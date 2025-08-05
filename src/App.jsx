import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';

// Eager load Home page for better initial performance
import Home from '@/pages/Home.jsx';

// Lazy load other pages
const Products = lazy(() => import('@/pages/Products.jsx'));
const ProductDetail = lazy(() => import('@/pages/ProductDetail.jsx'));
// const Ceiling = lazy(() => import('@/pages/Ceiling.jsx'));
const Gallery = lazy(() => import('@/pages/Gallery.jsx'));
const GalleryCategory = lazy(() => import('@/pages/GalleryCategory.jsx'));
const About = lazy(() => import('@/pages/About.jsx'));
const Contact = lazy(() => import('@/pages/Contact.jsx'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-16 h-16 flex items-center justify-center animate-pulse">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fe069f4e12ad141ca8286e47c21c4220d%2F816acb718bc944088a8df0fcd7ba492d?format=webp&width=200"
          alt="Shubh Aangan Logo"
          className="w-16 h-16 object-contain drop-shadow-lg"
          loading="eager"
        />
      </div>
      <div className="text-center">
        <p className="text-lg font-medium" style={{ color: 'hsl(var(--wpc-text-primary))' }}>Loading...</p>
        <div className="mt-2 w-8 h-1 wpc-gradient rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen scroll-optimized">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              {/* <Route path="/ceiling" element={<Ceiling />} /> */}
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/:categoryId" element={<GalleryCategory />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <Toaster />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
