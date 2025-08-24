import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'ShubhAangan - Premium WPC/UPVC Solutions',
  description = 'Transform your space with premium WPC/UPVC modular kitchen, bedroom, office, and ceiling solutions. 7+ years of experience in sustainable, waterproof, and durable WPC/UPVC furniture.',
  keywords = 'WPC furniture, UPVC furniture, modular kitchen, kitchen cabinets, WPC kitchen, UPVC kitchen, modular kitchen design, kitchen interior, kitchen renovation, WPC modular kitchen, UPVC modular kitchen, waterproof kitchen, termite proof kitchen, eco-friendly kitchen, sustainable kitchen, WPC sheets, UPVC sheets, kitchen storage, kitchen wardrobes, kitchen pantry, modular kitchen Jaipur, kitchen designers Jaipur, bedroom furniture, wardrobe, WPC wardrobe, UPVC wardrobe, sliding wardrobe, built-in wardrobe, bedroom storage, bedroom interior, office furniture, office cabin, office interior, WPC office furniture, UPVC office furniture, commercial furniture, ceiling design, false ceiling, WPC ceiling, UPVC ceiling, acoustic ceiling, designer ceiling, ceiling panels, wall panels, WPC wall panels, UPVC wall panels, interior wall panels, decorative panels, 3D wall panels, TV cabinet, entertainment unit, WPC TV unit, UPVC TV unit, living room furniture, home furniture, interior design, home decor, furniture manufacturer, furniture supplier, custom furniture, bespoke furniture, premium furniture, luxury furniture, affordable furniture, budget furniture, furniture installation, furniture design, interior solutions, home solutions, space solutions, storage solutions, Jaipur furniture, Rajasthan furniture, North India furniture, Indian furniture, furniture company, furniture brand, furniture showroom, furniture dealer, furniture contractor, interior contractor, home renovation, office renovation, commercial interior, residential interior, modern furniture, contemporary furniture, traditional furniture, furniture trends, furniture styles, furniture materials, durable furniture, long-lasting furniture, maintenance-free furniture, easy-clean furniture, stain-resistant furniture, scratch-resistant furniture, fire-resistant furniture, moisture-resistant furniture, humidity-resistant furniture, weather-resistant furniture, ShubhAangan, Shubh Aangan, furniture solutions, complete interior solutions, turnkey projects, one-stop furniture shop',
  canonicalUrl,
  ogImage = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
  structuredData,
  noindex = false
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FurnitureStore", "HomeAndConstructionBusiness"],
    "name": "ShubhAangan",
    "alternateName": ["Shubh Aangan", "ShubhAangan Furniture", "ShubhAangan WPC UPVC"],
    "description": "Premium WPC/UPVC modular furniture solutions including kitchen cabinets, wardrobes, office furniture, ceiling designs and interior solutions in Jaipur, Rajasthan",
    "url": "https://shubhaangan.com",
    "telephone": "+91-8114468410",
    "email": "shubhaanganhd@gmail.com",
    "logo": "https://shubhaangan.com/logo.png",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    "founder": "ShubhAangan Team",
    "foundingDate": "2017",
    "numberOfEmployees": "10-50",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "UPI"],
    "currenciesAccepted": "INR",
    "areaServed": ["Jaipur", "Rajasthan", "Delhi NCR", "North India"],
    "knowsAbout": ["WPC Furniture", "UPVC Furniture", "Modular Kitchen", "Interior Design", "Wardrobe Design", "Office Furniture", "Ceiling Design"],
    "slogan": "Premium WPC/UPVC Solutions for Modern Living",
    "brand": {
      "@type": "Brand",
      "name": "ShubhAangan",
      "description": "Premium WPC UPVC Furniture Brand"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "JagatPura",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302017",
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
    "priceRange": "₹₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "26.9124",
        "longitude": "75.7873"
      },
      "geoRadius": "100000"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "WPC Modular Kitchen",
        "description": "Premium waterproof WPC modular kitchen cabinets and storage solutions",
        "price": "1200-2500",
        "priceCurrency": "INR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1200-2500",
          "priceCurrency": "INR",
          "unitText": "per square feet"
        },
        "availability": "https://schema.org/InStock",
        "warranty": "10 years",
        "category": "Modular Kitchen"
      },
      {
        "@type": "Offer",
        "name": "UPVC Modular Kitchen",
        "description": "Eco-friendly UPVC modular kitchen with termite resistance",
        "price": "1200-2500",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "warranty": "10 years",
        "category": "Modular Kitchen"
      },
      {
        "@type": "Offer",
        "name": "WPC Wardrobe",
        "description": "Custom WPC wardrobes with sliding doors and interior organizers",
        "price": "800-1800",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "warranty": "10 years",
        "category": "Bedroom Furniture"
      },
      {
        "@type": "Offer",
        "name": "Office Furniture WPC",
        "description": "Professional WPC office furniture and cabin solutions",
        "price": "600-1500",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "warranty": "8 years",
        "category": "Office Furniture"
      },
      {
        "@type": "Offer",
        "name": "False Ceiling WPC",
        "description": "Acoustic WPC false ceiling with LED integration",
        "price": "85-150",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "warranty": "5 years",
        "category": "Ceiling Solutions"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "WPC/UPVC Furniture Solutions",
      "description": "Complete range of WPC and UPVC furniture for home and office",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Modular Kitchen Design",
            "description": "Custom WPC/UPVC modular kitchen solutions with waterproof and termite-resistant properties",
            "serviceType": "Interior Design",
            "category": "Kitchen Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bedroom Furniture",
            "description": "WPC/UPVC bedroom wardrobes, storage solutions and furniture",
            "serviceType": "Furniture Manufacturing",
            "category": "Bedroom Furniture"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Office Furniture",
            "description": "Professional WPC/UPVC office furniture, cabins and workstations",
            "serviceType": "Commercial Furniture",
            "category": "Office Furniture"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ceiling Solutions",
            "description": "Acoustic and designer WPC/UPVC false ceiling panels",
            "serviceType": "Interior Design",
            "category": "Ceiling Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wall Panels",
            "description": "Decorative WPC/UPVC wall panels and 3D wall designs",
            "serviceType": "Interior Design",
            "category": "Wall Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "TV Cabinets",
            "description": "Modern WPC/UPVC TV units and entertainment centers",
            "serviceType": "Furniture Manufacturing",
            "category": "Living Room Furniture"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/shubhaangan",
      "https://www.instagram.com/shubhaangan",
      "https://www.linkedin.com/company/shubhaangan"
    ]
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
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* Language and Geographic */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-RJ" />
      <meta name="geo.placename" content="Jaipur, Rajasthan, India" />
      <meta name="geo.position" content="26.9124;75.7873" />
      <meta name="ICBM" content="26.9124, 75.7873" />
      <meta name="DC.title" content={title} />
      <meta name="DC.creator" content="ShubhAangan" />
      <meta name="DC.subject" content="WPC UPVC Furniture, Modular Kitchen, Interior Design" />
      <meta name="DC.description" content={description} />
      <meta name="DC.publisher" content="ShubhAangan" />
      <meta name="DC.type" content="Service" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.identifier" content="https://shubhaangan.com" />
      <meta name="DC.language" content="en-IN" />
      <meta name="DC.coverage" content="Jaipur, Rajasthan, India" />

      {/* Business/Local SEO */}
      <meta name="classification" content="WPC/UPVC Furniture, Modular Kitchen, Interior Design, Home Improvement" />
      <meta name="category" content="Furniture Manufacturing, Interior Design, Home Improvement, Modular Kitchen, WPC Furniture, UPVC Furniture" />
      <meta name="coverage" content="Jaipur, Rajasthan, Delhi NCR, North India" />
      <meta name="distribution" content="Regional" />
      <meta name="rating" content="General" />
      <meta name="target" content="homeowners, interior designers, architects, contractors, builders" />
      <meta name="audience" content="homeowners, office managers, interior designers, architects" />
      <meta name="subject" content="modular kitchen, WPC furniture, UPVC furniture, interior design, home renovation" />
      <meta name="abstract" content="Premium WPC and UPVC modular furniture solutions including kitchen cabinets, wardrobes, office furniture, and ceiling designs in Jaipur" />
      <meta name="topic" content="modular furniture, kitchen design, interior solutions" />
      <meta name="summary" content="ShubhAangan provides premium WPC/UPVC modular kitchen, bedroom, office furniture and interior solutions in Jaipur with 7+ years experience" />
      <meta name="designer" content="ShubhAangan Design Team" />
      <meta name="copyright" content="ShubhAangan 2024" />
      <meta name="revised" content={new Date().toISOString().split('T')[0]} />
      <meta name="reply-to" content="shubhaanganhd@gmail.com" />
      <meta name="owner" content="ShubhAangan" />
      <meta name="url" content="https://shubhaangan.com" />
      <meta name="identifier-URL" content="https://shubhaangan.com" />
      <meta name="directory" content="submission" />
      <meta name="pagename" content={title} />
      <meta name="subtitle" content="Premium WPC UPVC Modular Furniture Solutions" />
      <meta name="target_country" content="IN" />
      <meta name="googlebot" content="index,follow,noimageindex,max-video-preview:-1,max-image-preview:large,max-snippet:-1" />
      <meta name="bingbot" content="index,follow" />
      <meta name="slurp" content="index,follow" />
      <meta name="msnbot" content="index,follow" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
