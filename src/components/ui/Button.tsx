import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  withArrow?: boolean;
}

export default function Button({
  to,
  onClick,
  children,
  variant = 'primary',
  className = '',
  withArrow = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center px-8 py-3 border text-base font-medium rounded-md transition-all duration-200';
  
  const variants = {
    primary: 'border-transparent text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105',
    secondary: 'border-transparent text-blue-600 bg-white hover:bg-blue-50 shadow-lg',
    outline: 'border-white text-white hover:bg-white/10',
  };

  const buttonContent = (
    <>
      {children}
      {withArrow && <ArrowRight className="ml-2 h-5 w-5" />}
    </>
  );

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
        <Link to={to} className={combinedClassName}>
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className={combinedClassName}
    >
      {buttonContent}
    </motion.button>
  );
}