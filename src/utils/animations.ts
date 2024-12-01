import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const staggerChildren: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const scaleOnHover: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};