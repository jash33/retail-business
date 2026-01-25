/**
 * Service Types
 * Type definitions for service cards and service-related components.
 */

/**
 * Represents a single service offering
 */
export interface Service {
  /** Unique identifier for the service */
  id: string;
  /** Service title displayed on the card */
  title: string;
  /** Brief description of the service (2-3 sentences) */
  description: string;
  /** SVG icon content (raw SVG string) */
  icon?: string;
  /** Optional call-to-action configuration */
  cta?: ServiceCTA;
}

/**
 * Call-to-action configuration for service cards
 */
export interface ServiceCTA {
  /** Text displayed on the CTA button/link */
  text: string;
  /** URL the CTA links to */
  href: string;
  /** Whether to open in a new tab */
  openInNewTab?: boolean;
}

/**
 * Props for the ServiceCard component
 */
export interface ServiceCardProps extends Service {
  /** Additional CSS class names */
  class?: string;
}

/**
 * Props for the ServicesSection component
 */
export interface ServicesSectionProps {
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Array of services to display */
  services: Service[];
  /** Number of columns to display (3 or 4) */
  columns?: 3 | 4 | 5;
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
}
