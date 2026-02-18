/**
 * Testimonials Configuration
 *
 * This file contains the configuration for the customer testimonials section
 * displayed on the homepage. Update this file to change which testimonials
 * are featured without modifying component code.
 *
 * Instructions for updating:
 * 1. To change testimonials, modify the TESTIMONIALS array below
 * 2. Each testimonial should include all required fields (id, content, author)
 * 3. Recommended: Display 4-6 testimonials for optimal variety
 * 4. Images should be placed in the /public/testimonials/ directory
 * 5. Use WebP format for better performance when available
 * 6. Set priority to control display order (lower numbers appear first)
 * 7. Include dates in ISO format for proper schema markup
 */

import type { Testimonial, TestimonialsConfig } from '../types/testimonial';

/**
 * Testimonials to display on the homepage
 * These are customer reviews showcasing retail shopping experiences
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    content: 'I stumbled upon this boutique looking for a birthday gift and left with three bags full! The curated selection is unlike anything else in the area. Every piece feels special and thoughtfully chosen. I\'ve become a regular since my first visit.',
    author: 'Sarah Mitchell',
    role: 'Loyal Customer',
    image: {
      src: '/testimonials/avatar-1.svg',
      alt: 'Sarah Mitchell, loyal customer',
      width: 80,
      height: 80,
    },
    rating: 5,
    verified: true,
    date: '2024-11-15',
    location: 'Houston, TX',
    priority: 1,
  },
  {
    id: 'testimonial-2',
    content: 'The staff here truly knows their products. They helped me pick the perfect anniversary gift for my wife and even wrapped it beautifully. It\'s refreshing to shop somewhere with such genuine, personal attention to every customer.',
    author: 'Michael Rodriguez',
    role: 'Verified Buyer',
    image: {
      src: '/testimonials/avatar-2.svg',
      alt: 'Michael Rodriguez, verified buyer',
      width: 80,
      height: 80,
    },
    rating: 5,
    verified: true,
    date: '2024-10-22',
    location: 'Katy, TX',
    priority: 2,
  },
  {
    id: 'testimonial-3',
    content: 'I ordered online and was amazed at how quickly everything arrived. The packaging was gorgeous — it felt like opening a gift to myself. The quality of every item matched exactly what I saw on the website. Will definitely be ordering again!',
    author: 'Jennifer Chen',
    role: 'Online Shopper',
    image: {
      src: '/testimonials/avatar-3.svg',
      alt: 'Jennifer Chen, online shopper',
      width: 80,
      height: 80,
    },
    rating: 5,
    verified: true,
    date: '2024-09-30',
    location: 'Sugar Land, TX',
    priority: 3,
  },
  {
    id: 'testimonial-4',
    content: 'This is my go-to shop for unique home décor and hostess gifts. They carry pieces you simply won\'t find at big box stores. Every time I visit there\'s something new to discover — it keeps me coming back again and again.',
    author: 'David Thompson',
    role: 'Regular Customer',
    image: {
      src: '/testimonials/avatar-4.svg',
      alt: 'David Thompson, regular customer',
      width: 80,
      height: 80,
    },
    rating: 5,
    verified: true,
    date: '2024-08-18',
    location: 'The Woodlands, TX',
    priority: 4,
  },
  {
    id: 'testimonial-5',
    content: 'I love that they source from local artisans and small makers. You can feel the quality and care that goes into every product on the shelves. Shopping here makes me feel good about where my money is going.',
    author: 'Amanda Foster',
    role: 'Verified Buyer',
    image: {
      src: '/testimonials/avatar-5.svg',
      alt: 'Amanda Foster, verified buyer',
      width: 80,
      height: 80,
    },
    rating: 4,
    verified: true,
    date: '2024-07-25',
    location: 'Pearland, TX',
    priority: 5,
  },
  {
    id: 'testimonial-6',
    content: 'The seasonal collections are always on point. I redid my entire living room with pieces from their spring collection and get compliments constantly. Fair prices for truly beautiful, well-made items. Highly recommend to anyone looking for something special.',
    author: 'Robert Williams',
    role: 'Loyal Customer',
    image: {
      src: '/testimonials/avatar-6.svg',
      alt: 'Robert Williams, loyal customer',
      width: 80,
      height: 80,
    },
    rating: 5,
    verified: true,
    date: '2024-06-12',
    location: 'Houston, TX',
    priority: 6,
  },
];

/**
 * Section configuration for the testimonials section
 * Customize the heading, subheading, and display options
 */
export const TESTIMONIALS_SECTION_CONFIG: TestimonialsConfig = {
  /** Section ID for anchor linking */
  id: 'testimonials',

  /** Main heading for the section */
  heading: 'What Our Customers Say',

  /** Subheading/description text */
  subheading: 'Real reviews from real shoppers. Discover why our customers keep coming back for unique finds and an exceptional shopping experience.',

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
  businessName: 'Main Street Boutique',
};
