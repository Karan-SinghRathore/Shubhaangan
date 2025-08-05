import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is WPC/UPVC and why is it better than traditional materials?",
      answer: "WPC/UPVC (Wood Plastic Composite)/ uPvc(Unplasticized Polyvinyl Chloride) is an eco-friendly material made from recycled wood fibers and plastic. It's 100% waterproof, termite-resistant, and requires minimal maintenance compared to traditional wood or plywood."
    },
    {
      question: "How long does a modular kitchen installation take?",
      answer: "Typically, a modular kitchen installation takes 10-15 days from measurement to completion. This includes design finalization, manufacturing, and professional installation by our expert team."
    },
    {
      question: "Do you provide warranty on WPC/UPVC products?",
      answer: "Yes! We provide up to 10 years warranty on our WPC/UPVC kitchen cabinets, 7 years on wall panels, and 5 years on ceiling solutions. Our warranty covers manufacturing defects and structural integrity."
    },
    {
      question: "Can WPC/UPVC materials be customized in different colors?",
      answer: "Absolutely! We offer WPC/UPVC materials in 8+ color variants including Oak Brown, Teak Natural, Walnut Dark, and more. We can also create custom colors for large projects."
    },
    {
      question: "What is the cost comparison with traditional materials?",
      answer: "While WPC/UPVC has a higher upfront cost, it saves money long-term due to zero maintenance, no termite treatment, and longer lifespan. Total cost of ownership is typically 30-40% lower than traditional materials."
    },
    {
      question: "Do you provide free design consultation?",
      answer: "Yes! We provide free home visits, measurements, and 3D design consultations. Our experts will help you choose the best WPC/UPVC solutions for your space and budget."
    },
    {
      question: "Are WPC/UPVC materials safe for kitchen use?",
      answer: "WPC/UPVC materials are completely food-safe and non-toxic. They're also heat-resistant, moisture-proof, and easy to clean, making them ideal for kitchen environments."
    },
    {
      question: "Do you handle project management and installation?",
      answer: "Yes! We handle everything from design and manufacturing to delivery and professional installation. Our project managers ensure timely completion with zero hassle for you."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Get answers to common questions about our WPC/UPVC solutions</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="text-emerald-600 flex-shrink-0" size={20} />
                    ) : (
                      <ChevronDown className="text-emerald-600 flex-shrink-0" size={20} />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918114468410" className="wpc-btn-primary px-6 py-3 rounded-lg text-white font-semibold">
              Call Us Now
            </a>
            <a href="mailto:shubhaanganhd@gmail.com" className="wpc-btn-secondary px-6 py-3 rounded-lg text-white font-semibold">
              Email Your Question
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
