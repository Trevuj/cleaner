import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Leaf, Award } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const values = [
  {
    icon: Shield,
    title: 'Trust & Reliability',
    description: 'We build lasting relationships through consistent, dependable service.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our professional cleaners are trained, vetted, and insured.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'We use environmentally conscious cleaning products and methods.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: '100% satisfaction guaranteed with every cleaning service.',
  },
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="About Us"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Leading the way in professional cleaning services across Canada
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-lg text-gray-600">
                  <p>
                    Founded in 2010, SparkleClean has grown from a small local operation to one of
                    Canada's most trusted cleaning service providers.
                  </p>
                  <p>
                    Our journey began with a simple mission: to provide exceptional cleaning
                    services while maintaining the highest standards of professionalism and
                    customer satisfaction.
                  </p>
                  <p>
                    Today, we serve thousands of satisfied customers across major Canadian cities,
                    continuing to uphold the values that have made us successful.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1562516155-e0c1ee44059b?auto=format&fit=crop&q=80"
                  alt="Our Team"
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide us in delivering exceptional service
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <AnimatedSection key={value.title}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the people who make it all happen
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
              },
              {
                name: 'Michael Chen',
                role: 'Operations Director',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Customer Success Manager',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
              },
            ].map((member) => (
              <AnimatedSection key={member.name}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}