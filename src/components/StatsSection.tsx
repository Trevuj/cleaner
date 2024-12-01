import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Award, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const stats = [
  {
    id: 1,
    name: 'Happy Clients',
    value: '10,000+',
    icon: Users,
  },
  {
    id: 2,
    name: 'Properties Cleaned',
    value: '25,000+',
    icon: Building2,
  },
  {
    id: 3,
    name: 'Years Experience',
    value: '15+',
    icon: Award,
  },
  {
    id: 4,
    name: 'Service Quality',
    value: '99.9%',
    icon: Sparkles,
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <AnimatedSection key={stat.id} className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <dt className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</dt>
                <dd className="text-sm text-gray-600">{stat.name}</dd>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}