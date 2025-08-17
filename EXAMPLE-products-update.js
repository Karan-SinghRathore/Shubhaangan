// EXAMPLE: How to update your product images
export const products = [
  {
    id: 1,
    name: "Premium Glossy Sheets",
    category: "glossy",
    color: "White Pearl",
    price: 45,
    sqFeetPrice: "₹45/sq ft",
    
    // CHANGE THIS: Replace with your image path
    image: "/images/products/my-glossy-sheet-main.jpg",
    
    tags: ["glossy", "premium"],
    description: "Premium quality glossy Sheets with a stunning pearl finish that adds elegance to any space.",
    features: [
      "Water resistant coating",
      "Easy to clean surface", 
      "Scratch resistant",
      "UV protection",
      "Anti-slip texture"
    ],
    
    // CHANGE THESE: Replace with your gallery images
    gallery: [
      "/images/products/my-glossy-sheet-main.jpg",
      "/images/products/my-glossy-sheet-angle1.jpg", 
      "/images/products/my-glossy-sheet-angle2.jpg"
    ],
    
    // Keep pricing and reviews as they are
    pricing: [
      { project: "Residential Bathroom", price: "₹42/sq ft" },
      { project: "Commercial Space", price: "₹48/sq ft" },
      { project: "Luxury Villa", price: "₹52/sq ft" },
      { project: "Office Complex", price: "₹45/sq ft" }
    ],
    reviews: [
      { name: "Sarah Johnson", rating: 5, comment: "Absolutely beautiful Sheets! The glossy finish is perfect." },
      { name: "Mike Chen", rating: 5, comment: "Great quality and easy installation. Highly recommended!" }
    ]
  }
  // Repeat for all your products...
];
