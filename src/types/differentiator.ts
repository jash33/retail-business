/**
 * Differentiator Types
 * Type definitions for differentiator cards and related components.
 * Used for the "Why Choose Us" section showcasing unique selling points.
 */

/**
 * Represents a single differentiator/unique selling point
 */
export interface Differentiator {
  /** Unique identifier for the differentiator */
  id: string;
  /** Differentiator title displayed on the card */
  title: string;
  /** Brief description (1-2 sentences) in first-person voice */
  description: string;
  /** SVG icon content (raw SVG string) */
  icon?: string;
}

/**
 * Props for the DifferentiatorCard component
 */
export interface DifferentiatorCardProps extends Differentiator {
  /** Additional CSS class names */
  class?: string;
}

/**
 * Props for the DifferentiatorsSection component
 */
export interface DifferentiatorsSectionProps {
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Array of differentiators to display */
  differentiators: Differentiator[];
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
}
