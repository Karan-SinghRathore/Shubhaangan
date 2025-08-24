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

const Contact = () => {
  const form = useRef();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e) => {
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

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'service_4er6gcq',
        'template_ivzi3sq',
        form.current,
        'SNzjpropWipwnwXwk'
      );

      console.log('EmailJS Result:', result.text);

      toast({
        title: "Message Sent Successfully!",
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

    } catch (error) {
      console.error('EmailJS Error:', error);

      // Fallback to showing phone number if email fails
      toast({
        title: "Message Submission Error",
        description: "There was an issue sending your message. Please call us directly at +91 81144 68410 or email shubhaanganhd@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
        <title>Contact ShubhAangan Jaipur | WPC UPVC Furniture Consultation | Get Free Quote | Call +91-8114468410</title>
        <meta name="description" content="Contact ShubhAangan for premium WPC/UPVC modular solutions in Jaipur. Get free consultation, instant quotes & expert advice. Call +91-8114468410 or visit our showroom at JagatPura, Jaipur. Email: shubhaanganhd@gmail.com. Serving Rajasthan since 2017." />
        <meta name="keywords" content="contact ShubhAangan, WPC furniture Jaipur contact, UPVC furniture consultation, modular kitchen quote Jaipur, furniture consultation Jaipur, WPC furniture dealer contact, UPVC furniture supplier contact, free consultation, free quote, expert advice, showroom visit, furniture showroom Jaipur, furniture consultation services, furniture design consultation, interior design consultation, modular kitchen consultation, wardrobe design consultation, office furniture consultation, custom furniture consultation, bespoke furniture consultation, furniture planning services, space planning consultation, furniture measurement services, furniture installation consultation, project consultation, design consultation, technical consultation, product consultation, material consultation, color consultation, finish consultation, style consultation, budget consultation, furniture solution consultation, complete interior consultation, turnkey project consultation, residential consultation, commercial consultation, home consultation, office consultation, furniture requirement analysis, space analysis, design analysis, cost analysis, project timeline, consultation appointment, consultation booking, consultation scheduling, home visit consultation, on-site consultation, virtual consultation, online consultation, phone consultation, email consultation, WhatsApp consultation, video call consultation, consultation charges, free consultation offer, consultation process, consultation procedure, consultation steps, consultation duration, consultation benefits, expert consultation, professional consultation, experienced consultation, qualified consultation, certified consultation, trained consultation team, consultation team, design team consultation, technical team consultation, customer service, customer support, customer care, help desk, support team, assistance, guidance, advice, recommendations, suggestions, solutions, answers, information, details, specifications, features, benefits, advantages, options, choices, alternatives, comparisons, estimates, quotations, pricing, costing, budgeting, financing, payment options, EMI options, offers, discounts, deals, packages, schemes, promotions, seasonal offers, festive offers, bulk orders, wholesale inquiries, retail inquiries, dealer inquiries, distributor inquiries, franchise inquiries, partnership inquiries, collaboration inquiries, supplier inquiries, vendor inquiries, contractor inquiries, architect inquiries, interior designer inquiries, builder inquiries, real estate inquiries, property developer inquiries, hotel inquiries, restaurant inquiries, office inquiries, showroom inquiries, institutional inquiries, corporate inquiries, government inquiries, tender inquiries, project inquiries, bulk project inquiries, commercial project inquiries, residential project inquiries, feedback, complaints, grievances, suggestions, testimonials, reviews, ratings, complaints redressal, customer satisfaction, quality assurance, warranty claims, service requests, maintenance requests, repair requests, replacement requests, after-sales service, post-installation service, follow-up service, technical support, installation support, maintenance support, Jaipur contact number, Rajasthan furniture contact, North India furniture contact, local furniture contact, nearby furniture showroom, furniture store near me, contact details, address, location, directions, map, GPS coordinates, landmark, showroom address, office address, factory address, warehouse address, service center address, branch office contact, head office contact, regional office contact, area representative contact, sales representative contact, customer relationship manager contact, project manager contact, design manager contact, technical manager contact, installation manager contact, service manager contact, business hours, working hours, office timing, showroom timing, service timing, availability, appointment booking, meeting scheduling, visit scheduling, call scheduling, demo scheduling, presentation scheduling, site visit scheduling, measurement scheduling, installation scheduling, delivery scheduling, service scheduling, emergency contact, urgent contact, immediate assistance, quick response, fast service, prompt service, reliable service, dependable service, trusted service, quality service, professional service, expert service, experienced service, certified service, licensed service, authorized service, genuine service, original service, branded service, warranty service, guaranteed service, assured service, satisfaction guaranteed, money back guarantee, quality guarantee, service guarantee, performance guarantee, delivery guarantee, installation guarantee, maintenance guarantee, replacement guarantee, ShubhAangan contact, Shubh Aangan contact details" />
        <meta name="author" content="ShubhAangan" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://shubhaanganhd.com/contact" />
        <meta property="og:title" content="Contact ShubhAangan Jaipur | WPC UPVC Furniture Consultation | Get Free Quote" />
        <meta property="og:description" content="Contact ShubhAangan for premium WPC/UPVC modular solutions in Jaipur. Get free consultation & quotes. Call +91-8114468410" />
        <meta property="og:url" content="https://shubhaanganhd.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Jaipur, Rajasthan" />
        <meta name="geo.position" content="26.9124;75.7873" />
        <meta name="ICBM" content="26.9124, 75.7873" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
                    {info.title === "Email Us" ? (
                      <a
                        href={`mailto:${info.details}`}
                        className="text-emerald-700 font-medium mb-2 hover:text-emerald-800 transition-colors duration-200 block"
                      >
                        {info.details}
                      </a>
                    ) : info.title === "Call Us" ? (
                      <a
                        href={`tel:${info.details.replace(/\s/g, '')}`}
                        className="text-emerald-700 font-medium mb-2 hover:text-emerald-800 transition-colors duration-200 block"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-emerald-700 font-medium mb-2">{info.details}</p>
                    )}
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
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2" size={20} />
                          Send Message
                        </>
                      )}
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
                  <div className="h-64 relative bg-gray-200 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-amber-600 rounded-full flex items-center justify-center">
                          <MapPin className="text-white" size={24} />
                        </div>
                        <p className="font-semibold text-amber-800 mb-2">ShubhAangan WPC Showroom</p>
                        <p className="text-sm text-amber-700 mb-3">JagatPura, Jaipur • Open 24×7</p>
                        <a
                          href="https://maps.app.goo.gl/Yqn9E3drHdUd1JD6A"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm"
                        >
                          View on Google Maps
                        </a>
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
