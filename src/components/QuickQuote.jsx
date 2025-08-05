import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const QuickQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    area: '',
    budget: '',
    timeline: ''
  });
  
  const [estimatedCost, setEstimatedCost] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const projectTypes = [
    { id: 'kitchen', name: 'Modular Kitchen', priceRange: '1200-2500' },
    { id: 'wardrobe', name: 'Wardrobe', priceRange: '800-1800' },
    { id: 'tv-unit', name: 'TV Unit', priceRange: '600-1200' },
    { id: 'wall-panels', name: 'Wall Panels', priceRange: '200-450' },
    { id: 'ceiling', name: 'False Ceiling', priceRange: '85-150' },
    { id: 'complete-home', name: 'Complete Home', priceRange: '800-2000' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Calculate estimate if we have project type and area
    if ((name === 'projectType' || name === 'area') && formData.area && (value || formData.projectType)) {
      calculateEstimate(name === 'projectType' ? value : formData.projectType, name === 'area' ? value : formData.area);
    }
  };

  const calculateEstimate = (projectType, area) => {
    const project = projectTypes.find(p => p.id === projectType);
    if (project && area) {
      const [minPrice, maxPrice] = project.priceRange.split('-').map(Number);
      const minCost = minPrice * parseInt(area);
      const maxCost = maxPrice * parseInt(area);
      setEstimatedCost({ min: minCost, max: maxCost });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Quote request:', formData);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 5000);
  };

  if (showThankYou) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8"
      >
        <CheckCircle className="text-green-600 mx-auto mb-4" size={64} />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">We've received your quote request. Our team will contact you within 2 hours with a detailed estimate.</p>
        <Button onClick={() => setShowThankYou(false)} className="wpc-btn-primary">
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="wpc-gradient text-white rounded-full w-16 h-16 flex items-center justify-center">
              <Calculator size={32} />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Instant Quote</h2>
          <p className="text-xl text-gray-600">Fill out the form below and get an estimated cost for your WPC/UPVC project</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Project Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 81144 68410"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="projectType">Project Type *</Label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map(type => (
                        <option key={type.id} value={type.id}>
                          {type.name} (₹{type.priceRange}/sq ft)
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="area">Area (sq ft) *</Label>
                    <Input
                      id="area"
                      name="area"
                      type="number"
                      value={formData.area}
                      onChange={handleInputChange}
                      placeholder="e.g., 100"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="budget">Expected Budget</Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1L">Under ₹1 Lakh</option>
                      <option value="1L-3L">₹1-3 Lakhs</option>
                      <option value="3L-5L">₹3-5 Lakhs</option>
                      <option value="5L-10L">₹5-10 Lakhs</option>
                      <option value="above-10L">Above ₹10 Lakhs</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Start Immediately</option>
                      <option value="1-month">Within 1 Month</option>
                      <option value="3-months">Within 3 Months</option>
                      <option value="6-months">Within 6 Months</option>
                      <option value="planning">Just Planning</option>
                    </select>
                  </div>
                </div>

                {estimatedCost && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-emerald-100 to-amber-100 rounded-lg p-6 border-l-4 border-emerald-500"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Estimated Cost</h3>
                    <p className="text-2xl font-bold text-emerald-700">
                      ₹{estimatedCost.min.toLocaleString()} - ₹{estimatedCost.max.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      *This is a rough estimate. Final quote will be provided after site visit.
                    </p>
                  </motion.div>
                )}

                <Button 
                  type="submit" 
                  className="w-full wpc-btn-primary py-4 text-lg font-semibold flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Get Detailed Quote
                </Button>

                <p className="text-center text-sm text-gray-500">
                  Our team will contact you within 2 hours with a detailed estimate and free consultation.
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickQuote;
