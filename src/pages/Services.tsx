import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { Check, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const additionalServices = [
  'Move-in/Move-out Cleaning',
  'Post-Construction Cleanup',
  'Window Cleaning',
  'Carpet Cleaning',
  'Office Sanitization',
  'Event Cleanup',
];

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80"
            alt="Cleaning Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Cleaning Services
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover our comprehensive range of cleaning solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <AnimatedSection key={service.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Link
                      to={`/book?service=${service.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700"
                    >
                      Book Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
              <p className="text-lg text-gray-600">
                We offer a wide range of specialized cleaning services
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service) => (
              <AnimatedSection key={service}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-white rounded-lg shadow-md"
                >
                  <Check className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">{service}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Experience the Difference?
            </h2>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/book"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Schedule a Cleaning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}