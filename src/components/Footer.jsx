import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="hero-gradient" style={{ color: 'hsl(var(--wpc-text-primary))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe069f4e12ad141ca8286e47c21c4220d%2F816acb718bc944088a8df0fcd7ba492d?format=webp&width=200"
                  alt="Shubh Aangan Logo"
                  className="w-12 h-12 object-contain drop-shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg" style={{ color: 'hsl(var(--wpc-text-primary))' }}>शुभ आंगन</span>
                <span className="text-xs" style={{ color: 'hsl(var(--wpc-warm))' }}>हर कोने में बसाए नई कहानी</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>
              Premium WPC/UPVC modular solutions for kitchen, bedroom, office & ceiling. 7+ years of excellence.
            </p>
          </div>

          {/* Quick Links & Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold heading-tertiary text-center">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="transition-colors duration-200 text-sm hover:text-wpc-warm text-center" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>
                Home
              </Link>
              <Link to="/products" className="transition-colors duration-200 text-sm hover:text-wpc-warm text-center" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>
                Products
              </Link>
              <Link to="/gallery" className="transition-colors duration-200 text-sm hover:text-wpc-warm text-center" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>
                Gallery
              </Link>
              <Link to="/about" className="transition-colors duration-200 text-sm hover:text-wpc-warm text-center" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>
                About
              </Link>
              <Link to="/contact" className="transition-colors duration-200 text-sm hover:text-wpc-warm text-center" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold heading-tertiary">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={14} style={{ color: 'hsl(var(--wpc-warm))' }} />
                <span className="text-sm" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>+91 81144 68410</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} style={{ color: 'hsl(var(--wpc-warm))' }} />
                <span className="text-sm" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>shubhaanganhd@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} style={{ color: 'hsl(var(--wpc-warm))' }} />
                <span className="text-sm" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>JagatPura, Jaipur</span>
              </div>
              <div className="flex space-x-3 mt-3">
                <a href="#" className="transition-colors duration-200 hover:text-wpc-warm" style={{ color: 'hsl(var(--wpc-warm))' }}>
                  <Facebook size={18} />
                </a>
                <a href="#" className="transition-colors duration-200 hover:text-wpc-warm" style={{ color: 'hsl(var(--wpc-warm))' }}>
                  <Twitter size={18} />
                </a>
                <a href="#" className="transition-colors duration-200 hover:text-wpc-warm" style={{ color: 'hsl(var(--wpc-warm))' }}>
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-6 pt-6 text-center" style={{ borderColor: 'hsl(var(--wpc-accent) / 0.3)' }}>
          <p className="text-sm" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>
            © 2025 ShubhAangan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
