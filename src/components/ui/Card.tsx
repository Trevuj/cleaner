import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const baseStyles = 'bg-white rounded-xl shadow-lg transition-shadow';
  const hoverStyles = hover ? 'hover:shadow-xl' : '';
  
  return (
    <motion.div
      whileHover={hover ? { y: -10 } : undefined}
      className={`${baseStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
}