/**
 * =================================================================
 * ANNOUNCEMENT BAR TYPE DEFINITIONS
 * =================================================================
 *
 * TypeScript types for the dismissible announcement bar component
 * with cookie-based persistence and scheduled visibility support.
 *
 * =================================================================
 */

// =================================================================
// ANNOUNCEMENT TYPES
// =================================================================

/**
 * Announcement type/category for styling variations
 */
export type AnnouncementType =
  | 'promotion'      // Sales, discounts, special offers
  | 'shipping'       // Free shipping thresholds, delivery info
  | 'update'         // Store updates, news, announcements
  | 'info';          // General information

/**
 * Individual announcement configuration
 */
export interface Announcement {
  /** Unique identifier for the announcement */
  id: string;
  /** The announcement message to display */
  message: string;
  /** Type/category of announcement for styling */
  type: AnnouncementType;
  /** Optional link URL for the announcement */
  linkUrl?: string;
  /** Optional link text (defaults to "Learn more") */
  linkText?: string;
  /** Start date for scheduled visibility (ISO string or Date) */
  startDate?: string | Date;
  /** End date for scheduled visibility (ISO string or Date) */
  endDate?: string | Date;
  /** Whether this announcement can be dismissed */
  dismissible?: boolean;
  /** Priority for ordering (higher = shown first) */
  priority?: number;
}

/**
 * Announcement bar component props
 */
export interface AnnouncementBarProps {
  /** Array of announcements to potentially display */
  announcements?: Announcement[];
  /** Whether the bar is dismissible (default: true) */
  dismissible?: boolean;
  /** How long to remember dismissal in days (default: 7) */
  dismissDurationDays?: number;
  /** Show close button (default: true) */
  showCloseButton?: boolean;
}

/**
 * Announcement bar configuration
 */
export interface AnnouncementBarConfig {
  /** Whether to show the announcement bar by default */
  enabled: boolean;
  /** How long to remember dismissal in days */
  dismissDurationDays: number;
  /** localStorage key for storing dismissal state */
  storageKey: string;
  /** Default announcements */
  announcements: Announcement[];
}

/**
 * Dismissal state stored in localStorage
 */
export interface AnnouncementDismissalState {
  /** ID of the dismissed announcement */
  announcementId: string;
  /** Timestamp when dismissed */
  dismissedAt: number;
  /** Expiration timestamp */
  expiresAt: number;
}

/**
 * Multiple dismissals stored together
 */
export interface AnnouncementStorageState {
  /** Array of dismissed announcements */
  dismissed: AnnouncementDismissalState[];
  /** Version for future migrations */
  version: string;
}
