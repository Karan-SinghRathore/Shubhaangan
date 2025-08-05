import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely amazing quality! The WPC modular kitchen transformed our entire home. Professional service and beautiful results.",
      project: "Modular Kitchen"
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Outstanding craftsmanship and attention to detail. The WPC office furniture exceeded our expectations in every way.",
      project: "Office Complex"
    },
    {
      name: "Emily Davis",
      rating: 5,
      comment: "Perfect WPC solutions for our restaurant. Durable, beautiful, and easy to maintain. Highly recommended!",
      project: "Restaurant Design"
    }
  ];

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
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-large"
            style={{ color: 'hsl(var(--wpc-text-secondary))' }}
          >
            Real feedback from our satisfied customers
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="card-premium border-none shadow-lg"
                style={{ background: 'linear-gradient(135deg, hsl(var(--wpc-natural)) 0%, rgba(255, 255, 255, 0.95) 100%)' }}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="mb-6 italic text-body leading-relaxed">"{review.comment}"</p>
                  <div>
                    <p className="font-semibold" style={{ color: 'hsl(var(--wpc-text-primary))' }}>{review.name}</p>
                    <p className="text-small" style={{ color: 'hsl(var(--wpc-warm))' }}>{review.project}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
