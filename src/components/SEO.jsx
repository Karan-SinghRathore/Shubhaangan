import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'ShubhAangan - Premium WPC/UPVC Solutions',
  description = 'Transform your space with premium WPC/UPVC modular kitchen, bedroom, office, and ceiling solutions. 7+ years of experience in sustainable, waterproof, and durable WPC/UPVC furniture.',
  keywords = 'WPC/UPVC furniture, modular kitchen, bedroom furniture, office furniture, ceiling panels, waterproof furniture, eco-friendly furniture, ShubhAangan',
  canonicalUrl,
  ogImage = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
  structuredData,
  noindex = false
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ShubhAangan",
    "description": "Premium WPC/UPVC solutions for modular kitchen, bedroom, office, and ceiling",
    "url": "https://shubhaangan.com",
    "telephone": "+91-00000-00000",
    "email": "shubhaanganhd@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "JagatPura",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.9124",
      "longitude": "75.7873"
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 10:00-16:00"
    ],
    "priceRange": "₹₹",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "26.9124",
        "longitude": "75.7873"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "WPC/UPVC Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Modular Kitchen Design",
            "description": "Custom WPC/UPVC modular kitchen solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bedroom Furniture",
            "description": "WPC/UPVC bedroom wardrobes and furniture"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Office Furniture",
            "description": "Professional WPC/UPVC office furniture solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ceiling Solutions",
            "description": "Acoustic and designer WPC/UPVC ceiling panels"
          }
        }
      ]
    }
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="ShubhAangan" />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="ShubhAangan" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#8B4513" />
      <meta name="msapplication-TileColor" content="#8B4513" />
      
      {/* Language and Geographic */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-RJ" />
      <meta name="geo.placename" content="Jaipur" />
      <meta name="geo.position" content="26.9124;75.7873" />
      <meta name="ICBM" content="26.9124, 75.7873" />
      
      {/* Business/Local SEO */}
      <meta name="classification" content="WPC/UPVC Furniture, Interior Design" />
      <meta name="category" content="Furniture, Interior Design, Home Improvement" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
