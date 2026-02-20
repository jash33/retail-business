/**
 * Testimonials Configuration - HTX Flowers
 *
 * Customer testimonials showcasing flower shop experiences.
 */

import type { Testimonial, TestimonialsConfig } from '../types/testimonial';

/**
 * Testimonials from happy customers
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    content: 'HTX Flowers made my wedding day absolutely magical. The bridal bouquet was beyond anything I imagined — lush, romantic, and exactly what I dreamed of. Their team was so patient through all my changes and delivered perfection.',
    author: 'Maria G.',
    role: 'Wedding Client',
    image: {
      src: '/testimonials/avatar-1.svg',
      alt: 'Maria G., wedding client',
      width: 80,
      height: 80,
    },
    rating: 5,
    verified: true,
    date: '2025-01-15',
    location: 'Katy, TX',
    priority: 1,
  },
  {
    id: 'testimonial-2',
    content: 'I\'ve tried every florist in the area, and HTX Flowers is hands down the best. Their same-day delivery saved me when I forgot my anniversary! The roses were stunning and lasted over two weeks. My wife was thrilled.',
    author: 'David T.',
    role: 'Verified Customer',
    image: {
      src: '/testimonials/avatar-2.svg',
      alt: 'David T., verified customer',
      width: 80,
      height: 80,
    },
    rating: 5,
    verified: true,
    date: '2024-12-22',
    location: 'Memorial, TX',
    priority: 2,
  },
  {
    id: 'testimonial-3',
    content: 'I order flowers from HTX Flowers every month for my office reception area. They always create something fresh and beautiful that matches the season. Our clients constantly compliment the arrangements. Wouldn\'t go anywhere else!',
    author: 'Jennifer C.',
    role: 'Business Account',
    image: {
      src: '/testimonials/avatar-3.svg',
      alt: 'Jennifer C., business account',
      width: 80,
      height: 80,
    },
    rating: 5,
    verified: true,
    date: '2024-11-30',
    location: 'Energy Corridor',
    priority: 3,
  },
  {
    id: 'testimonial-4',
    content: 'When my mother passed, HTX Flowers created the most beautiful sympathy arrangements for the service. They were compassionate, respectful, and handled everything with such care. The flowers brought comfort to our family during a difficult time.',
    author: 'Robert W.',
    role: 'Sympathy Customer',
    image: {
      src: '/testimonials/avatar-4.svg',
      alt: 'Robert W., sympathy customer',
      width: 80,
      height: 80,
    },
    rating: 5,
    verified: true,
    date: '2024-10-18',
    location: 'Sugar Land, TX',
    priority: 4,
  },
  {
    id: 'testimonial-5',
    content: 'Love their weekly flower subscription! Every Friday I get a gorgeous bouquet delivered to my door. It\'s become the highlight of my week. The variety is amazing — I\'ve discovered so many flowers I didn\'t even know existed.',
    author: 'Amanda F.',
    role: 'Subscription Member',
    image: {
      src: '/testimonials/avatar-5.svg',
      alt: 'Amanda F., subscription member',
      width: 80,
      height: 80,
    },
    rating: 5,
    verified: true,
    date: '2024-09-25',
    location: 'The Woodlands, TX',
    priority: 5,
  },
  {
    id: 'testimonial-6',
    content: 'Had HTX Flowers do all the arrangements for our company holiday party. They transformed the venue with stunning centerpieces and a gorgeous entryway display. Everyone thought we hired some fancy event designer. Prices were very fair too!',
    author: 'Michael R.',
    role: 'Event Client',
    image: {
      src: '/testimonials/avatar-6.svg',
      alt: 'Michael R., event client',
      width: 80,
      height: 80,
    },
    rating: 5,
    verified: true,
    date: '2024-08-12',
    location: 'Houston, TX',
    priority: 6,
  },
];

/**
 * Section configuration for the testimonials section
 */
export const TESTIMONIALS_SECTION_CONFIG: TestimonialsConfig = {
  /** Section ID for anchor linking */
  id: 'testimonials',

  /** Main heading for the section */
  heading: 'What Our Customers Say',

  /** Subheading/description text */
  subheading: 'From weddings to everyday moments, see why Houston trusts us with their most important occasions.',

  /** Maximum number of testimonials to display */
  maxTestimonials: 6,

  /** Whether to show star ratings */
  showRatings: true,

  /** Whether to show verified badges */
  showVerified: true,

  /** Responsive column configuration for carousel */
  columns: {
    mobile: 1,
    small: 1,
    tablet: 2,
    desktop: 3,
  },

  /** Gap between items */
  gap: 'medium',

  /** Navigation position */
  navigationPosition: 'outside',

  /** Whether to show pagination indicators */
  showIndicators: true,

  /** Auto-scroll configuration */
  autoScroll: {
    enabled: true,
    interval: 6000,
    pauseOnHover: true,
    pauseOnFocus: true,
  },

  /** Whether carousel is infinite looping */
  infinite: true,

  /** Whether swipe/touch navigation is enabled */
  enableSwipe: true,

  /** Whether keyboard navigation is enabled */
  enableKeyboard: true,

  /** Number of items to scroll at once */
  scrollAmount: 1,

  /** Animation duration in milliseconds */
  animationDuration: 300,

  /** Business name for schema markup */
  businessName: 'HTX Flowers',
};
