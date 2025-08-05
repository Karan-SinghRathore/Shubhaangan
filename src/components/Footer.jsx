import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="hero-gradient" style={{ color: 'hsl(var(--wpc-text-primary))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe069f4e12ad141ca8286e47c21c4220d%2F816acb718bc944088a8df0fcd7ba492d?format=webp&width=200"
                  alt="Shubh Aangan Logo"
                  className="w-14 h-14 object-contain drop-shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl" style={{ color: 'hsl(var(--wpc-text-primary))' }}>शुभ आंगन</span>
                <span className="text-xs text-small" style={{ color: 'hsl(var(--wpc-warm))' }}>हर कोने में बसाए नई कहानी</span>
              </div>
            </div>
            <p className="text-small leading-relaxed" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>
              Creating beautiful and functional WPC/UPVC modular solutions for your kitchen, bedroom, office, and ceiling needs. 7+ years of trusted craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold heading-tertiary">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block transition-colors duration-200 text-small hover:text-wpc-warm" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>
                Home
              </Link>
              <Link to="/products" className="block transition-colors duration-200 text-small hover:text-wpc-warm" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>
                Products
              </Link>
              <Link to="/about" className="block transition-colors duration-200 text-small hover:text-wpc-warm" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>
                About
              </Link>
              <Link to="/contact" className="block transition-colors duration-200 text-small hover:text-wpc-warm" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold heading-tertiary">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} style={{ color: 'hsl(var(--wpc-warm))' }} />
                <span className="text-small" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>shubhaanganhd@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} style={{ color: 'hsl(var(--wpc-warm))' }} />
                <span className="text-small" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>+91 81144 68410</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} style={{ color: 'hsl(var(--wpc-warm))' }} />
                <span className="text-small" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>JagatPura, Jaipur</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} style={{ color: 'hsl(var(--wpc-warm))' }} />
                <span className="text-small" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>Open 24×7</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold heading-tertiary">Our Services</h3>
            <div className="space-y-2">
              <div className="text-small" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>Modular Kitchen Design</div>
              <div className="text-small" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>Bedroom Wardrobes</div>
              <div className="text-small" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>Office Furniture</div>
              <div className="text-small" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>Ceiling Solutions</div>
              <div className="text-small" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>Custom WPC Products</div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t mt-8 pt-8" style={{ borderColor: 'hsl(var(--wpc-accent) / 0.3)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-small mb-4 md:mb-0" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>
              © 2025 ShubhAangan. All rights reserved. | हर कोने में बसाए नई कहानी
            </p>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors duration-200 hover:text-wpc-warm" style={{ color: 'hsl(var(--wpc-warm))' }}>
                <Facebook size={20} />
              </a>
              <a href="#" className="transition-colors duration-200 hover:text-wpc-warm" style={{ color: 'hsl(var(--wpc-warm))' }}>
                <Twitter size={20} />
              </a>
              <a href="#" className="transition-colors duration-200 hover:text-wpc-warm" style={{ color: 'hsl(var(--wpc-warm))' }}>
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
