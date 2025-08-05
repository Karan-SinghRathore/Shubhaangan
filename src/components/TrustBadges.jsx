import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Users, Calendar, CheckCircle, Star } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: <Award size={32} />,
      title: "ISO Certified",
      subtitle: "Quality Management",
      description: "ISO 9001:2015 certified manufacturing processes"
    },
    {
      icon: <Shield size={32} />,
      title: "10 Year Warranty",
      subtitle: "Product Guarantee",
      description: "Comprehensive warranty on all WPC/UPVC products"
    },
    {
      icon: <Users size={32} />,
      title: "2000+ Happy Clients",
      subtitle: "Customer Satisfaction",
      description: "Trusted by thousands of satisfied customers"
    },
    {
      icon: <Calendar size={32} />,
      title: "7+ Years Experience",
      subtitle: "Industry Expertise",
      description: "Two decades of craftsmanship and innovation"
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Eco-Friendly",
      subtitle: "Green Certification",
      description: "100% recyclable and sustainable materials"
    },
    {
      icon: <Star size={32} />,
      title: "5-Star Rated",
      subtitle: "Customer Reviews",
      description: "Consistently rated 5 stars by our clients"
    }
  ];

  const stats = [
    { number: "2000+", label: "Projects Completed" },
    { number: "500+", label: "Kitchen Installations" },
    { number: "300+", label: "Ceiling Projects" },
    { number: "100%", label: "Customer Satisfaction" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ShubhAangan?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of customers for our quality, reliability, and exceptional service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-emerald-700">
                  {badge.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{badge.title}</h3>
              <p className="text-sm font-medium text-amber-600 mb-2">{badge.subtitle}</p>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-emerald-700 to-emerald-800 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-emerald-200 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Certifications & Memberships</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">ISO 9001:2015</span>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">Green Building Council</span>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">Furniture Association</span>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">WPC/UPVC Council India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
