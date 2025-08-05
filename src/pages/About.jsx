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
    description: "We never compromise on quality. Every WPC product is carefully crafted and tested to meet our high standards."
  }, {
    icon: <Users size={40} />,
    title: "Customer First",
    description: "Your satisfaction is our priority. We listen, understand, and deliver exactly what you envision."
  }, {
    icon: <Lightbulb size={40} />,
    title: "Innovation",
    description: "We stay ahead of trends and continuously innovate to bring you the latest in WPC technology and sustainable design."
  }, {
    icon: <Heart size={40} />,
    title: "Passion",
    description: "We love what we do. Our passion for craftsmanship shows in every project we complete."
  }];
  const team = [{
    name: "ShubhAangan",
    role: "Founder & CEO",
    image: "Professional portrait of John Smith, founder of Shubhaangan",
    description: "With over 20 years in the tile industry, John founded Shubhaangan with a vision to transform spaces through quality craftsmanship."
  }, {
    name: "ShubhAangan",
    role: "Design Director",
    image: "Professional portrait of Sarah Johnson, design director",
    description: "Sarah brings creative vision and technical expertise to every project, ensuring beautiful and functional results."
  }, {
    name: "ShubhAangan",
    role: "Operations Manager",
    image: "Professional portrait of Mike Chen, operations manager",
    description: "Mike ensures smooth operations and timely delivery, maintaining our reputation for reliability and excellence."
  }];
  return <>
  <FloatingActions />
      <Helmet>
        <title>About Us - ShubhAangan | Our Story & Values</title>
        <meta name="description" content="Learn about ShubhAangan's journey, values, and team. Discover how we became a trusted name in premium WPC modular solutions with over 20 years of experience." />
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
        }} className="text-xl text-large max-w-3xl mx-auto" style={{ color: 'hsl(var(--wpc-text-secondary))' }}>Crafting beautiful spaces with premium WPC materials for over two decades</motion.p>
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
                to provide premium quality WPC materials that transform ordinary spaces into extraordinary ones.
                What started in a modest workshop has grown into a trusted name in the WPC furniture industry.
              </p>
              <p className="text-lg text-gray-700">
                Over the years, we've completed thousands of projects, from cozy homes to grand commercial spaces. 
                Our commitment to quality, innovation, and customer satisfaction has remained unchanged, 
                making us the preferred choice for discerning customers who value excellence.
              </p>
              <p className="text-lg text-gray-700">
                Today, ShubhAangan stands as a testament to the power of passion, dedication, and unwavering
                commitment to craftsmanship. We continue to evolve with eco-friendly WPC technology and innovative designs
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <img className="w-full h-64 object-cover" alt={member.name} src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
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
              <p className="text-lg text-white/90">
                To transform spaces and enrich lives through premium quality WPC solutions,
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
              <p className="text-lg text-white/90">
                To be the leading WPC solutions company recognized for innovation, sustainability, and
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
