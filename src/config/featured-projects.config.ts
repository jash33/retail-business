/**
 * Featured Projects Configuration - HTX Flowers
 *
 * Showcasing our most memorable floral events and installations.
 */

import type { Project } from '../types/portfolio';

/**
 * Featured floral showcases
 */
export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'spring-wedding-showcase',
    title: 'Spring Garden Wedding',
    description: 'A romantic garden wedding at the Houston Arboretum featuring 500+ arrangements, a stunning floral arch, and custom centerpieces in soft blush and ivory tones. The bride\'s cascading bouquet became the most-photographed element of the entire celebration.',
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
      alt: 'Elegant spring wedding floral arrangements with blush and ivory roses',
      width: 600,
      height: 400,
    },
    technologies: [
      { name: 'Wedding Florals', category: 'design' },
      { name: 'Custom Arch', category: 'design' },
      { name: 'Centerpieces', category: 'ecommerce' },
      { name: 'Bridal Bouquet', category: 'frontend' },
    ],
    category: 'website',
    featured: true,
    completedDate: '2025-03-01',
    links: [
      { text: 'View Gallery', href: `${import.meta.env.BASE_URL}gallery`, type: 'case-study' },
    ],
  },
  {
    id: 'corporate-gala-event',
    title: 'Energy Corridor Gala',
    description: 'Transformed the Marriott Marquis ballroom for an annual corporate gala serving 800 guests. Our team created dramatic tall centerpieces, an elaborate entrance installation, and coordinated floral elements throughout the three-floor venue.',
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&h=400&fit=crop',
      alt: 'Luxurious corporate event centerpieces with dramatic floral arrangements',
      width: 600,
      height: 400,
    },
    technologies: [
      { name: 'Corporate Events', category: 'design' },
      { name: 'Grand Scale', category: 'frontend' },
      { name: 'Custom Design', category: 'ecommerce' },
      { name: 'Installation', category: 'cms' },
    ],
    category: 'landing-page',
    featured: true,
    completedDate: '2024-12-15',
    links: [
      { text: 'Event Gallery', href: `${import.meta.env.BASE_URL}gallery`, type: 'case-study' },
    ],
  },
  {
    id: 'valentines-day-delivery',
    title: 'Valentine\'s Day 2025',
    description: 'Our biggest day of the year! This Valentine\'s Day, we delivered over 1,200 arrangements across Greater Houston with our expanded fleet. Every delivery arrived on time, each bouquet hand-crafted and wrapped with care.',
    thumbnail: {
      src: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=600&h=400&fit=crop',
      alt: 'Valentine\'s Day rose bouquets ready for delivery',
      width: 600,
      height: 400,
    },
    technologies: [
      { name: 'Same-Day Delivery', category: 'design' },
      { name: 'High Volume', category: 'design' },
      { name: 'Rose Specialists', category: 'cms' },
      { name: 'Gift Wrapping', category: 'frontend' },
    ],
    category: 'website',
    featured: true,
    completedDate: '2025-02-14',
    links: [
      { text: 'Order Roses', href: `${import.meta.env.BASE_URL}products`, type: 'case-study' },
    ],
  },
];

/**
 * Section configuration for the featured projects preview
 */
export const FEATURED_PROJECTS_CONFIG = {
  /** Main heading for the section */
  heading: 'Our Work in Bloom',

  /** Subheading/description text */
  subheading: 'From intimate gatherings to grand celebrations, explore how we bring Houston\'s most special moments to life with flowers.',

  /** Text for the "View All" call-to-action button */
  viewAllText: 'View Full Gallery',

  /** URL for the "View All" call-to-action button */
  viewAllHref: `${import.meta.env.BASE_URL}gallery`,

  /** Section ID for anchor linking */
  id: 'featured-work',
};
