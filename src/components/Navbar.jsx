import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="wpc-gradient text-white py-2 px-4 ">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91 81144 68410</span>
            </div>
            <div className="flex items-center space-x-2 hidden md:flex">
              <Mail size={14} />
              <span>shubhaanganhd@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Open 24×7</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar-professional sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe069f4e12ad141ca8286e47c21c4220d%2F816acb718bc944088a8df0fcd7ba492d?format=webp&width=200"
                  alt="Shubh Aangan Logo"
                  className="w-16 h-16 object-contain drop-shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold heading-primary">शुभ आंगन</span>
                <span className="text-xs text-small" style={{ color: 'hsl(var(--wpc-warm))' }}>हर कोने में बसाए नई कहानी</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 nav-link ${
                    location.pathname === item.path
                      ? 'font-semibold'
                      : 'hover:text-wpc-warm'
                  }`}
                  style={{
                    color: location.pathname === item.path
                      ? 'hsl(var(--wpc-warm))'
                      : 'hsl(var(--wpc-text-primary))'
                  }}
                >
                  {item.name}
                  {/* {location.pathname === item.path && (
                    <motion.div
                      layoutId="underline"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      // className="absolute bottom-0 left-0 right-0 h-0.5 wpc-gradient rounded-full"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-8 bg-[hsl(var(--wpc-warm))] rounded-full"
                    />
                  )} */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-8 bg-[hsl(var(--wpc-warm))] rounded-full" />

                </Link>
              ))}
              
              {/* CTA Button */}
              <Link to="/contact">
                <button className="wpc-btn-primary px-6 py-3 rounded-lg font-semibold shadow-lg">
                  Get Quote
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg transition-colors duration-200"
                style={{ color: 'hsl(var(--wpc-warm))' }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden card-hover mt-4 mb-4 p-6"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg nav-link transition-all duration-200 ${
                      location.pathname === item.path
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      backgroundColor: location.pathname === item.path
                        ? 'hsl(var(--wpc-natural))'
                        : 'transparent',
                      color: location.pathname === item.path
                        ? 'hsl(var(--wpc-warm))'
                        : 'hsl(var(--wpc-text-primary))'
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full wpc-btn-primary px-6 py-3 rounded-lg font-semibold shadow-lg mt-4">
                    Get Quote
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
