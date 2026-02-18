/**
 * Trust Badges Types
 * Type definitions for minimal inline trust badge components.
 * Used for displaying trust indicators like free shipping, gift wrapping,
 * and local artisan messaging in a clean, minimal text format.
 */

/**
 * Type of trust badge for icon/color selection
 */
export type TrustBadgeType =
  | 'shipping'
  | 'gift-wrap'
  | 'artisan'
  | 'returns'
  | 'secure'
  | 'support'
  | 'quality'
  | 'custom';

/**
 * Represents a single inline trust badge
 */
export interface TrustBadge {
  /** Unique identifier for the badge */
  id: string;
  /** Category/type of the badge for icon selection */
  type: TrustBadgeType;
  /** Main text to display (e.g., "Free Shipping", "Gift Wrapping Available") */
  text: string;
  /** Optional secondary text for additional context */
  subtext?: string;
  /** Optional custom SVG icon (raw SVG string) */
  icon?: string;
  /** Whether to show the default icon for this type */
  showIcon?: boolean;
  /** Optional link for the badge */
  link?: {
    href: string;
    ariaLabel?: string;
    openInNewTab?: boolean;
  };
}

/**
 * Props for the TrustBadgesInline component
 */
export interface TrustBadgesInlineProps {
  /** Array of badges to display */
  badges: TrustBadge[];
  /** Layout direction */
  layout?: 'horizontal' | 'vertical' | 'wrap';
  /** Size variant */
  size?: 'small' | 'medium';
  /** Whether to show icons */
  showIcons?: boolean;
  /** Separator character for horizontal layout */
  separator?: string;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Additional CSS classes */
  class?: string;
}

/**
 * Configuration type for trust badges section
 */
export interface TrustBadgesConfig {
  /** Badges to display */
  badges: TrustBadge[];
  /** Default layout */
  layout?: TrustBadgesInlineProps['layout'];
  /** Default size */
  size?: TrustBadgesInlineProps['size'];
  /** Show icons by default */
  showIcons?: boolean;
  /** Separator for horizontal layout */
  separator?: string;
  /** Text alignment */
  align?: TrustBadgesInlineProps['align'];
}
