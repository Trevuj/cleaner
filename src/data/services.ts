import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'residential',
    title: 'Residential Cleaning',
    description: 'Professional home cleaning services tailored to your needs.',
    icon: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
  },
  {
    id: 'commercial',
    title: 'Commercial Cleaning',
    description: 'Keep your business spotless with our commercial cleaning solutions.',
    icon: 'Building2',
    imageUrl: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80',
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    description: 'Thorough deep cleaning services for a fresh start.',
    icon: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80',
  },
  {
    id: 'eco-friendly',
    title: 'Eco-Friendly Cleaning',
    description: 'Environmentally conscious cleaning solutions.',
    icon: 'Leaf',
    imageUrl: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80',
  },
];