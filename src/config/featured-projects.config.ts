/**
 * Featured Projects Configuration
 *
 * This file contains the configuration for the featured retail showcases
 * displayed on the homepage. Update this file to change which showcases
 * are featured without modifying component code.
 *
 * Instructions for updating:
 * 1. To change featured showcases, modify the FEATURED_PROJECTS array below
 * 2. Each showcase should include all required fields (id, title, description, thumbnail, technologies, category)
 * 3. Recommended: Display 2-3 showcases for optimal visual balance
 * 4. Images should be placed in the /public/portfolio/ directory
 * 5. Use WebP format for better performance when available
 */

import type { Project } from '../types/portfolio';

/**
 * Featured retail showcases to display on the homepage
 * These are a curated selection of our best in-store experiences and community initiatives
 */
export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'spring-garden-collection',
    title: 'Spring Garden Collection',
    description: 'Our signature seasonal collection featuring curated home and garden essentials for the spring season. Hand-picked items from local artisans and trusted brands, styled in a vibrant in-store display that drove a 40% increase in foot traffic.',
    thumbnail: {
      src: '/portfolio/spring-garden-collection.svg',
      alt: 'Spring Garden Collection showcase featuring vibrant floral arrangements and garden essentials in a beautifully styled in-store display',
      width: 600,
      height: 400,
    },
    technologies: [
      { name: 'Seasonal Curation', category: 'design' },
      { name: 'Visual Merchandising', category: 'design' },
      { name: 'Local Artisans', category: 'ecommerce' },
      { name: 'In-Store Experience', category: 'frontend' },
    ],
    category: 'website',
    featured: true,
    completedDate: '2025-03-01',
    links: [
      { text: 'View Collection', href: `${import.meta.env.BASE_URL}showcases/spring-garden-collection`, type: 'case-study' },
    ],
  },
  {
    id: 'holiday-market-event',
    title: 'Holiday Market Weekend',
    description: 'A three-day in-store holiday market event featuring live demos, gift wrapping stations, and exclusive seasonal bundles. Over 500 visitors attended, making it our most successful store event with a 60% increase in weekend sales.',
    thumbnail: {
      src: '/portfolio/holiday-market-event.svg',
      alt: 'Holiday Market Weekend event with festive decorations, live product demonstrations, and customers enjoying the in-store experience',
      width: 600,
      height: 400,
    },
    technologies: [
      { name: 'Event Planning', category: 'design' },
      { name: 'Live Demos', category: 'frontend' },
      { name: 'Gift Bundles', category: 'ecommerce' },
      { name: 'Seasonal Promotions', category: 'ecommerce' },
    ],
    category: 'landing-page',
    featured: true,
    completedDate: '2024-12-15',
    links: [
      { text: 'Event Recap', href: `${import.meta.env.BASE_URL}showcases/holiday-market-event`, type: 'case-study' },
    ],
  },
  {
    id: 'community-mural-partnership',
    title: 'Community Mural Partnership',
    description: 'A collaborative partnership with local artists and the Houston Arts Alliance to create a community mural on our storefront. The project brought together neighbors, artists, and small businesses, strengthening our ties to the community and boosting brand visibility.',
    thumbnail: {
      src: '/portfolio/community-mural-partnership.svg',
      alt: 'Community Mural Partnership showing a colorful mural on the storefront created in collaboration with local artists and community members',
      width: 600,
      height: 400,
    },
    technologies: [
      { name: 'Community Outreach', category: 'design' },
      { name: 'Local Artists', category: 'design' },
      { name: 'Brand Partnership', category: 'cms' },
      { name: 'Neighborhood Impact', category: 'frontend' },
    ],
    category: 'website',
    featured: true,
    completedDate: '2024-09-10',
    links: [
      { text: 'Read the Story', href: `${import.meta.env.BASE_URL}showcases/community-mural-partnership`, type: 'case-study' },
    ],
  },
];

/**
 * Section configuration for the featured projects preview
 * Customize the heading, subheading, and CTA text/link
 */
export const FEATURED_PROJECTS_CONFIG = {
  /** Main heading for the section */
  heading: 'Our Showcases',

  /** Subheading/description text */
  subheading: 'From seasonal collections to community partnerships, explore the experiences that make our store a neighborhood favorite.',

  /** Text for the "View All" call-to-action button */
  viewAllText: 'View All Showcases',

  /** URL for the "View All" call-to-action button */
  viewAllHref: `${import.meta.env.BASE_URL}portfolio`,

  /** Section ID for anchor linking */
  id: 'featured-projects',
};
