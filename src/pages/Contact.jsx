import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import FloatingActions from '@/components/FloatingActions';
import FAQ from '@/components/FAQ';
import MapComponent from '@/pages/MapComponent.jsx';

const Contact = () => {
  const form = useRef();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  // Basic validation
  if (!formData.name || !formData.email || !formData.message) {
    toast({
      title: "Missing Information",
      description: "Please fill in all required fields.",
      variant: "destructive"
    });
    return;
  }

  emailjs.sendForm(
    'service_9pwzgte',       
    'your_template_id',      
    form.current,            
    't4kJ1flx78ezV6na_'        
  ).then(
    (result) => {
      console.log(result.text);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    },
    (error) => {
      console.error(error.text);
      toast({
        title: "Error",
        description: "Something went wrong while sending your message.",
        variant: "destructive"
      });
    }
  );
};

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: "shubhaanganhd@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: "+91 81144 68410",
      description: "Open 24×7"
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      details: "Shubhaangan Office, P.No.98, Santosh Vihar, Sawroop vihar Chouraha, VIT Road, JagatPura, Jaipur 302017",
      description: "Our showroom is open daily"
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: "Open 24×7",
      description: "Closed on Sundays"
    }
  ];
  
  return (
    <>
    <FloatingActions />
      <Helmet>
        <title>Contact Us - ShubhAangan | Get in Touch for Premium WPC Solutions</title>
        <meta name="description" content="Contact ShubhAangan for premium WPC modular solutions. Get expert advice, request quotes, and discuss your project needs. We're here to help transform your space." />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold heading-primary mb-6"
            style={{ color: 'hsl(var(--wpc-text-primary))' }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-large max-w-3xl mx-auto"
            style={{ color: 'hsl(var(--wpc-text-secondary))' }}
          >
            Ready to transform your space with premium WPC solutions? Get in touch with our experts today
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-hover bg-white shadow-lg text-center h-full">
                  <CardContent className="p-6">
                    <div className="wpc-gradient text-white rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4 shadow-lg">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    <p className="text-emerald-700 font-medium mb-2">{info.details}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl heading-secondary">Send Us a Message</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you soon</p>
                </CardHeader>
                <CardContent>
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, requirements, or any questions you have..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full wpc-btn-primary text-white"
                    >
                      <Send className="mr-2" size={20} />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Interactive Map */}
              <Card className="shadow-lg overflow-hidden">
                <div className="relative">
                  {/* Embedded Google Map */}
                  <div className="h-64 relative">
                    <MapComponent />

                    {/* Map Overlay with Business Info */}
                     <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-sm" style={{ color: 'hsl(var(--wpc-text-primary))' }}>ShubhAangan WPC Showroom</p>
                            <p className="text-xs text-gray-600">Open 24×7</p>
                          </div>
                          <a
                            href="https://maps.app.goo.gl/JARb6uRcUj4hTenQ9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="wpc-btn-primary px-3 py-1 text-xs rounded"
                          >
                            Get Directions
                          </a>
                        </div>
                      </div>
                    </div> 
                  </div>
                </div>
              </Card>

              {/* Why Choose Us */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl heading-secondary">Why Choose ShubhAangan?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 wpc-gradient rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Expert Consultation</p>
                      <p className="text-gray-600 text-sm">Free professional advice for your project</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 wpc-gradient rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Quality Guarantee</p>
                      <p className="text-gray-600 text-sm">Premium materials with warranty</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 wpc-gradient rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Fast Response</p>
                      <p className="text-gray-600 text-sm">We respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 wpc-gradient rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Competitive Pricing</p>
                      <p className="text-gray-600 text-sm">Best value for premium quality</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQ />

      <Footer />

    </>
  );
};

export default Contact;
