import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Briefcase } from 'lucide-react';

const HomeAbout = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-4xl md:text-5xl font-bold heading-primary mb-6"
          >
            About ShubhAangan
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="text-xl text-large max-w-3xl mx-auto"
            style={{ color: 'hsl(var(--wpc-text-secondary))' }}
          >
            We are passionate craftsmen dedicated to transforming spaces with premium WPC solutions and exceptional service. 
            Our commitment to quality and innovation has made us a trusted partner for homeowners and businesses alike.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <img 
              className="rounded-xl shadow-2xl w-full h-96 object-cover optimized-image" 
              alt="ShubhAangan workshop and craftsmen" 
              src="https://images.unsplash.com/photo-1698256179114-30758b66f70d"
              loading="lazy"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg shadow-md"
                style={{ background: 'hsl(var(--wpc-natural))' }}>
                <Award size={24} style={{ color: 'hsl(var(--wpc-warm))' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold heading-tertiary">Premium Quality</h3>
                <p className="text-body mt-2">We source only the finest WPC materials and employ skilled craftsmen to ensure exceptional quality in every project.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg shadow-md"
                style={{ background: 'hsl(var(--wpc-natural))' }}>
                <Users size={24} style={{ color: 'hsl(var(--wpc-warm))' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold heading-tertiary">Customer Focused</h3>
                <p className="text-body mt-2">Your satisfaction is our priority. We work closely with you to bring your modular kitchen and furniture vision to life.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg shadow-md"
                style={{ background: 'hsl(var(--wpc-natural))' }}>
                <Briefcase size={24} style={{ color: 'hsl(var(--wpc-warm))' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold heading-tertiary">Professional Service</h3>
                <p className="text-body mt-2">From consultation to installation, we provide comprehensive professional WPC solutions and services.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
