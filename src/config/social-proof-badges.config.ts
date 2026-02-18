/**
 * Social Proof Badges Configuration
 *
 * This file contains the configuration for the social proof/trust badges section.
 * Update this file to change which badges are displayed without modifying component code.
 *
 * Instructions for updating:
 * 1. To change badges, modify the SOCIAL_PROOF_BADGES array below
 * 2. Each badge should include all required fields (id, type, title, description)
 * 3. Badge types determine the color scheme: payment-security, followers, press, certification, guarantee, award
 * 4. Icons can be custom SVG strings or will fall back to type-specific defaults
 * 5. Add metrics (e.g., "50K+", "99%") for quantifiable social proof
 * 6. Optional links can make badges clickable
 */

import type { SocialProofBadge, SocialProofBadgesConfig } from '../types/social-proof-badge';

/**
 * Social proof badges to display
 * These are trust indicators showcasing credibility
 */
export const SOCIAL_PROOF_BADGES: SocialProofBadge[] = [
  {
    id: 'secure-checkout',
    type: 'payment-security',
    title: 'Secure Checkout',
    description: '256-bit SSL encryption for all transactions',
    iconAriaLabel: 'Secure payment lock icon',
  },
  {
    id: 'satisfaction-guarantee',
    type: 'guarantee',
    title: 'Satisfaction Guaranteed',
    description: '30-day money-back guarantee on all services',
    iconAriaLabel: 'Satisfaction guarantee shield icon',
  },
  {
    id: 'happy-customers',
    type: 'followers',
    title: 'Happy Customers',
    description: 'Local businesses served with excellence',
    metric: '500+',
    metricLabel: 'Customers',
    iconAriaLabel: 'Happy customers icon',
  },
  {
    id: 'five-star-reviews',
    type: 'award',
    title: '5-Star Reviews',
    description: 'Average rating from verified clients',
    metric: '4.9',
    metricLabel: 'Stars',
    iconAriaLabel: 'Five star rating icon',
  },
];

/**
 * Alternative badge configurations for different use cases
 */

/**
 * E-commerce focused badges
 */
export const ECOMMERCE_BADGES: SocialProofBadge[] = [
  {
    id: 'stripe-verified',
    type: 'payment-security',
    title: 'Stripe Verified',
    description: 'PCI DSS Level 1 certified payments',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>`,
    iconAriaLabel: 'Stripe verification badge',
  },
  {
    id: 'free-shipping',
    type: 'guarantee',
    title: 'Free Shipping',
    description: 'On orders over $50 within the US',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
    iconAriaLabel: 'Free shipping truck icon',
  },
  {
    id: 'easy-returns',
    type: 'guarantee',
    title: 'Easy Returns',
    description: '30-day hassle-free return policy',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>`,
    iconAriaLabel: 'Easy returns arrow icon',
  },
  {
    id: 'customer-support',
    type: 'certification',
    title: '24/7 Support',
    description: 'Always here when you need us',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    iconAriaLabel: 'Customer support chat icon',
  },
];

/**
 * Social media focused badges
 */
export const SOCIAL_MEDIA_BADGES: SocialProofBadge[] = [
  {
    id: 'instagram-followers',
    type: 'followers',
    title: 'Instagram',
    description: 'Follow us for daily inspiration',
    metric: '25K+',
    metricLabel: 'Followers',
    link: {
      href: 'https://instagram.com',
      ariaLabel: 'Visit our Instagram page',
      openInNewTab: true,
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    iconAriaLabel: 'Instagram logo',
  },
  {
    id: 'facebook-community',
    type: 'followers',
    title: 'Facebook',
    description: 'Join our community',
    metric: '15K+',
    metricLabel: 'Followers',
    link: {
      href: 'https://facebook.com',
      ariaLabel: 'Visit our Facebook page',
      openInNewTab: true,
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    iconAriaLabel: 'Facebook logo',
  },
  {
    id: 'twitter-followers',
    type: 'followers',
    title: 'Twitter',
    description: 'Stay updated with our latest news',
    metric: '10K+',
    metricLabel: 'Followers',
    link: {
      href: 'https://twitter.com',
      ariaLabel: 'Visit our Twitter page',
      openInNewTab: true,
    },
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
    iconAriaLabel: 'Twitter logo',
  },
];

/**
 * Press and awards focused badges
 */
export const PRESS_BADGES: SocialProofBadge[] = [
  {
    id: 'forbes-featured',
    type: 'press',
    title: 'Forbes',
    description: 'Featured in Forbes Best Local Services 2024',
    link: {
      href: `${import.meta.env.BASE_URL}press/forbes-feature`,
      ariaLabel: 'Read our Forbes feature',
    },
    iconAriaLabel: 'Forbes press mention',
  },
  {
    id: 'bbb-accredited',
    type: 'certification',
    title: 'BBB Accredited',
    description: 'A+ Rating with Better Business Bureau',
    iconAriaLabel: 'BBB accreditation badge',
  },
  {
    id: 'best-of-houston',
    type: 'award',
    title: 'Best of Houston',
    description: 'Winner - Best Web Services 2024',
    metric: '#1',
    metricLabel: 'Rated',
    iconAriaLabel: 'Best of Houston award',
  },
];

/**
 * Section configuration for the social proof badges section
 * Customize the heading, subheading, and display options
 */
export const SOCIAL_PROOF_BADGES_SECTION_CONFIG: SocialProofBadgesConfig = {
  /** Section ID for anchor linking */
  id: 'social-proof',

  /** Main heading for the section */
  heading: 'Trusted By Thousands',

  /** Subheading/description text */
  subheading: 'We take pride in delivering secure, reliable services that our customers love.',

  /** Badges to display */
  badges: SOCIAL_PROOF_BADGES,

  /** Layout mode */
  layout: 'grid',

  /** Badge size */
  size: 'medium',

  /** Whether to show metrics */
  showMetrics: true,
};

/**
 * Compact configuration for footer or sidebar usage
 */
export const SOCIAL_PROOF_BADGES_COMPACT_CONFIG: SocialProofBadgesConfig = {
  id: 'trust-badges',
  badges: SOCIAL_PROOF_BADGES.slice(0, 3),
  layout: 'inline',
  size: 'small',
  showMetrics: false,
};
