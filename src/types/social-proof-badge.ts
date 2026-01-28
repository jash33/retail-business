/**
 * Social Proof Badge Types
 * Type definitions for social proof/trust badge components.
 * Used for displaying credibility indicators such as payment security,
 * social media followers, press mentions, and certifications.
 */

/**
 * Badge types for categorizing social proof
 */
export type SocialProofBadgeType =
  | 'payment-security'
  | 'followers'
  | 'press'
  | 'certification'
  | 'guarantee'
  | 'award';

/**
 * Size variants for social proof badges
 */
export type SocialProofBadgeSize = 'small' | 'medium' | 'large';

/**
 * Represents a single social proof badge
 */
export interface SocialProofBadge {
  /** Unique identifier for the badge */
  id: string;
  /** Category/type of the badge for styling purposes */
  type: SocialProofBadgeType;
  /** Primary title for the badge */
  title: string;
  /** Brief description or additional context */
  description: string;
  /** SVG icon content (raw SVG string) */
  icon?: string;
  /** Accessibility label for the icon */
  iconAriaLabel?: string;
  /** Metric to display (e.g., "2.5M+", "99%", "50+") */
  metric?: string;
  /** Label for the metric (e.g., "Followers", "Satisfaction Rate") */
  metricLabel?: string;
  /** Optional link for the badge */
  link?: {
    href: string;
    ariaLabel?: string;
    openInNewTab?: boolean;
  };
}

/**
 * Props for the SocialProofBadge component
 */
export interface SocialProofBadgeProps extends SocialProofBadge {
  /** Size variant for the badge */
  size?: SocialProofBadgeSize;
  /** Whether to show the metric prominently */
  showMetric?: boolean;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Layout options for the section
 */
export type SocialProofBadgesLayout = 'grid' | 'inline' | 'row';

/**
 * Props for the SocialProofBadgesSection component
 */
export interface SocialProofBadgesSectionProps {
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Array of badges to display */
  badges: SocialProofBadge[];
  /** Layout mode for displaying badges */
  layout?: SocialProofBadgesLayout;
  /** Size variant applied to all badges */
  size?: SocialProofBadgeSize;
  /** Whether to show metrics on badges */
  showMetrics?: boolean;
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Configuration type for social proof badges section
 */
export interface SocialProofBadgesConfig extends Omit<SocialProofBadgesSectionProps, 'badges'> {
  /** Badges to display */
  badges: SocialProofBadge[];
}
