/**
 * Testimonials Configuration
 *
 * This file contains the configuration for the testimonials section displayed
 * on the homepage. Update this file to change which testimonials are featured
 * without modifying component code.
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
 * These are customer reviews showcasing positive experiences
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    content: 'Working with Houston Web Services transformed our online presence completely. Our new website loads incredibly fast, looks professional, and has already helped us attract more local customers. The personalized service made all the difference.',
    author: 'Sarah Mitchell',
    role: 'Owner',
    company: 'Mitchell\'s Home Repair',
    image: {
      src: '/testimonials/avatar-1.svg',
      alt: 'Sarah Mitchell, Owner of Mitchell\'s Home Repair',
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
    content: 'I was struggling with my old Squarespace site for months. James took over and fixed everything within a week. Now my website actually shows up in Google searches, and I\'m getting calls from new customers every week!',
    author: 'Michael Rodriguez',
    role: 'Founder',
    company: 'Rodriguez Landscaping',
    image: {
      src: '/testimonials/avatar-2.svg',
      alt: 'Michael Rodriguez, Founder of Rodriguez Landscaping',
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
    content: 'The transparent pricing was exactly what I needed. No hidden fees, no surprises. The website was delivered on time and within budget. I\'ve already recommended Houston Web Services to three other business owners.',
    author: 'Jennifer Chen',
    role: 'Owner',
    company: 'Chen\'s Wellness Studio',
    image: {
      src: '/testimonials/avatar-3.svg',
      alt: 'Jennifer Chen, Owner of Chen\'s Wellness Studio',
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
    content: 'As a small plumbing business, I didn\'t think I needed a fancy website. But the new site pays for itself every month with the leads it generates. Fast turnaround and great ongoing support.',
    author: 'David Thompson',
    role: 'Owner',
    company: 'Thompson Plumbing Co.',
    image: {
      src: '/testimonials/avatar-4.svg',
      alt: 'David Thompson, Owner of Thompson Plumbing Co.',
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
    content: 'The business process automation setup has saved me hours every week. What used to take me all Saturday morning now happens automatically. I wish I\'d found this service sooner!',
    author: 'Amanda Foster',
    role: 'CEO',
    company: 'Foster Event Planning',
    image: {
      src: '/testimonials/avatar-5.svg',
      alt: 'Amanda Foster, CEO of Foster Event Planning',
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
    content: 'Finally, someone who explains things in plain English! James walked me through every step of the process and my new website is exactly what I envisioned. Highly recommended for any local business.',
    author: 'Robert Williams',
    role: 'Owner',
    company: 'Williams Auto Detailing',
    image: {
      src: '/testimonials/avatar-6.svg',
      alt: 'Robert Williams, Owner of Williams Auto Detailing',
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
  heading: 'What Our Clients Say',

  /** Subheading/description text */
  subheading: 'Real feedback from real Houston-area businesses. See why local entrepreneurs trust us with their web presence.',

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
  businessName: 'Houston Web Services',
};
