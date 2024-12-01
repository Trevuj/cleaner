import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, ClipboardCheck, Sparkles, ThumbsUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const steps = [
  {
    id: 1,
    title: 'Book Online',
    description: 'Schedule your cleaning service in just a few clicks',
    icon: CalendarCheck,
  },
  {
    id: 2,
    title: 'Confirmation',
    description: 'Receive instant confirmation and service details',
    icon: ClipboardCheck,
  },
  {
    id: 3,
    title: 'Professional Service',
    description: 'Experience top-quality cleaning from our experts',
    icon: Sparkles,
  },
  {
    id: 4,
    title: 'Satisfaction Guaranteed',
    description: "100% satisfaction or we'll re-clean for free",
    icon: ThumbsUp,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Book your cleaning service in four simple steps
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={step.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="h-0.5 w-12 bg-blue-600"
                    />
                  </div>
                )}
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}