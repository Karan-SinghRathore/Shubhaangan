import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Users, Briefcase, Heart, Target, Lightbulb } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import FloatingActions from '@/components/FloatingActions';
const About = () => {
  const values = [{
    icon: <Award size={40} />,
    title: "Quality Excellence",
    description: "We never compromise on quality. Every WPC/UPVC product is carefully crafted and tested to meet our high standards."
  }, {
    icon: <Users size={40} />,
    title: "Customer First",
    description: "Your satisfaction is our priority. We listen, understand, and deliver exactly what you envision."
  }, {
    icon: <Lightbulb size={40} />,
    title: "Innovation",
    description: "We stay ahead of trends and continuously innovate to bring you the latest in WPC/UPVC technology and sustainable design."
  }, {
    icon: <Heart size={40} />,
    title: "Passion",
    description: "We love what we do. Our passion for craftsmanship shows in every project we complete."
  }];
  const team = [{
    name: "ShubhAangan",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    description: "With over 7 years in the WPC industry, our founder started ShubhAangan with a vision to transform spaces through quality craftsmanship."
  }, {
    name: "ShubhAangan",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    description: "Our design director brings creative vision and technical expertise to every project, ensuring beautiful and functional results."
  }, {
    name: "ShubhAangan",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    description: "Our operations manager ensures smooth operations and timely delivery, maintaining our reputation for reliability and excellence."
  }];
  return <>
  <FloatingActions />
      <Helmet>
        <title>About ShubhAangan Jaipur | Best WPC UPVC Furniture Company Rajasthan | 7+ Years Experience</title>
        <meta name="description" content="Discover ShubhAangan's journey as Jaipur's leading WPC/UPVC furniture manufacturer. 7+ years experience in modular kitchen, wardrobes & interior solutions. 500+ happy customers in Rajasthan. Quality, trust & innovation since 2017." />
        <meta name="keywords" content="about ShubhAangan, furniture company Jaipur, WPC manufacturer Rajasthan, UPVC furniture company, modular kitchen company Jaipur, furniture manufacturer Jaipur, interior design company, WPC furniture brand, UPVC furniture brand, furniture business Jaipur, established furniture company, experienced furniture dealer, trusted furniture supplier, reliable furniture contractor, quality furniture manufacturer, premium furniture company, luxury furniture brand, affordable furniture company, local furniture business, Jaipur furniture industry, Rajasthan furniture manufacturer, North India furniture company, furniture company profile, company history, business journey, furniture expertise, interior solutions provider, home furniture specialist, office furniture specialist, commercial furniture supplier, residential furniture provider, custom furniture manufacturer, bespoke furniture company, furniture design company, interior design services, furniture consultation, furniture showroom owner, furniture retail business, furniture wholesale business, furniture installation services, furniture after-sales service, furniture warranty provider, furniture quality assurance, furniture innovation, furniture technology, sustainable furniture company, eco-friendly furniture manufacturer, environment-friendly business, green furniture solutions, furniture industry leader, furniture market leader, top furniture company, best furniture brand, award-winning furniture company, certified furniture manufacturer, licensed furniture business, registered furniture company, furniture trade association member, furniture industry certification, ISO certified furniture company, quality certified business, customer satisfaction guarantee, furniture excellence award, business achievement, company milestones, growth story, success story, entrepreneur journey, business vision, company mission, core values, company culture, team expertise, skilled workforce, experienced craftsmen, professional installation team, customer service team, design team, technical team, quality control team, management team, leadership team, company infrastructure, manufacturing facility, showroom location, service areas, market presence, business expansion, future plans, company goals, strategic objectives" />
        <meta name="author" content="ShubhAangan" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://shubhaangan.com/about" />
        <meta property="og:title" content="About ShubhAangan Jaipur | Best WPC UPVC Furniture Company Rajasthan" />
        <meta property="og:description" content="Discover ShubhAangan's journey as Jaipur's leading WPC/UPVC furniture manufacturer. 7+ years experience, 500+ happy customers." />
        <meta property="og:url" content="https://shubhaangan.com/about" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-4xl md:text-6xl font-bold heading-primary mb-6" style={{ color: 'hsl(var(--wpc-text-primary))' }}>About ShubhAangan
        </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-xl text-large max-w-3xl mx-auto" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>Crafting beautiful spaces with premium WPC/UPVC materials for over two decades</motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }}>
              <img className="rounded-lg shadow-2xl w-full h-96 object-cover" alt="Shubhaangan workshop and showroom" src="https://images.unsplash.com/photo-1460447325427-ce3901d00a6d" />
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} className="space-y-6">
              <h2 className="text-4xl font-bold heading-secondary">Our Story</h2>
              <p className="text-lg text-gray-700">
                Founded in 2004, ShubhAangan began as a small family business with a simple mission:
                to provide premium quality WPC and UPVC materials that transform ordinary spaces into extraordinary ones.
                What started in a modest workshop has grown into a trusted name in the WPC and UPVC furniture industry.
              </p>
              <p className="text-lg text-gray-700">
                Over the years, we've completed thousands of projects, from cozy homes to grand commercial spaces. 
                Our commitment to quality, innovation, and customer satisfaction has remained unchanged, 
                making us the preferred choice for discerning customers who value excellence.
              </p>
              <p className="text-lg text-gray-700">
                Today, ShubhAangan stands as a testament to the power of passion, dedication, and unwavering
                commitment to craftsmanship. We continue to evolve with eco-friendly WPC and UPVC technology and innovative designs
                while staying true to our core values of quality and sustainability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-secondary mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }}>
                <Card className="card-hover bg-white shadow-lg text-center h-full">
                  <CardContent className="p-8">
                    <div className="wpc-gradient text-white rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6 shadow-lg">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-secondary mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind Shubhaangan's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }}>
                <Card className="card-hover bg-white shadow-lg text-center overflow-hidden">
                  <img className="w-full h-64 object-cover" alt={member.role} src={member.image} />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-amber-700 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ color: 'hsl(var(--wpc-text-primary))' }}>
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} className="text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6">
                <Target size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-white/90" style={{color: 'hsl(var(--wpc-text-secondary))'}}>
                To transform spaces and enrich lives through premium quality WPC/UPVC solutions,
                exceptional craftsmanship, and unparalleled customer service. We strive
                to make every project a sustainable masterpiece.
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6">
                <Lightbulb size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-white/90" style={{color: 'hsl(var(--wpc-text-secondary))'}}>
                To be the leading WPC/UPVC solutions company recognized for innovation, sustainability, and
                customer satisfaction. We envision a world where beautiful, eco-friendly
                spaces are accessible to everyone.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>;
};
export default About;
