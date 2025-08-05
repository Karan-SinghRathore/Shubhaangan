import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase } from 'lucide-react';

const StatsCounter = () => {
  const [customerCount, setCustomerCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const customerTimer = setInterval(() => {
      setCustomerCount(prev => prev < 100 ? prev + 2 : 100);
    }, 30);

    const projectTimer = setInterval(() => {
      setProjectCount(prev => prev < 90 ? prev + 2 : 90);
    }, 30);

    return () => {
      clearInterval(customerTimer);
      clearInterval(projectTimer);
    };
  }, []);

  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center" style={{ color: 'hsl(var(--wpc-text-primary))' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-6">
              <Users size={40} />
            </div>
            <div className="text-5xl font-bold animate-counter">{customerCount}+</div>
            <p className="text-xl">Satisfied Customers</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-6">
              <Briefcase size={40} />
            </div>
            <div className="text-5xl font-bold animate-counter">{projectCount}+</div>
            <p className="text-xl">Projects Completed</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
