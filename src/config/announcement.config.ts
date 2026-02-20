/**
 * =================================================================
 * ANNOUNCEMENT BAR CONFIGURATION
 * =================================================================
 *
 * Configuration for the dismissible announcement bar including
 * default announcements, timing, and storage settings.
 *
 * =================================================================
 */

import type {
  AnnouncementBarConfig,
  Announcement,
} from '../types/announcement';

// =================================================================
// STORAGE CONFIGURATION
// =================================================================

/**
 * localStorage key for storing announcement dismissal state
 */
export const ANNOUNCEMENT_STORAGE_KEY = 'retail_announcement_state';

/**
 * Current version for storage schema migrations
 */
export const ANNOUNCEMENT_STORAGE_VERSION = '1.0.0';

// =================================================================
// DEFAULT ANNOUNCEMENTS
// =================================================================

/**
 * Default announcements to display - HTX Flowers
 */
export const defaultAnnouncements: Announcement[] = [
  {
    id: 'same-day-delivery-2025',
    message: '🌸 Same-Day Delivery Available — Order by 2 PM!',
    type: 'shipping',
    dismissible: true,
    priority: 10,
  },
  // Example: Valentine's promotion
  // {
  //   id: 'valentines-2025',
  //   message: '💕 Valentine\'s Day Orders — Reserve Early for Guaranteed Delivery!',
  //   type: 'promotion',
  //   linkUrl: '/products',
  //   linkText: 'Shop Roses',
  //   startDate: '2025-02-01T00:00:00',
  //   endDate: '2025-02-14T23:59:59',
  //   dismissible: true,
  //   priority: 20,
  // },
];

// =================================================================
// MAIN CONFIGURATION
// =================================================================

/**
 * Announcement bar configuration
 */
export const announcementBarConfig: AnnouncementBarConfig = {
  /** Whether the announcement bar is enabled */
  enabled: true,
  /** How long to remember dismissal (in days) */
  dismissDurationDays: 7,
  /** Storage key for localStorage */
  storageKey: ANNOUNCEMENT_STORAGE_KEY,
  /** Default announcements */
  announcements: defaultAnnouncements,
};

// =================================================================
// HELPER FUNCTIONS
// =================================================================

/**
 * Check if an announcement is currently active based on schedule
 */
export function isAnnouncementActive(announcement: Announcement): boolean {
  const now = new Date();

  // Check start date
  if (announcement.startDate) {
    const startDate = new Date(announcement.startDate);
    if (now < startDate) {
      return false;
    }
  }

  // Check end date
  if (announcement.endDate) {
    const endDate = new Date(announcement.endDate);
    if (now > endDate) {
      return false;
    }
  }

  return true;
}

/**
 * Get the currently active announcement with highest priority
 */
export function getActiveAnnouncement(
  announcements: Announcement[] = defaultAnnouncements
): Announcement | null {
  const activeAnnouncements = announcements
    .filter(isAnnouncementActive)
    .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));

  return activeAnnouncements[0] ?? null;
}

/**
 * Filter announcements by type
 */
export function getAnnouncementsByType(
  type: Announcement['type'],
  announcements: Announcement[] = defaultAnnouncements
): Announcement[] {
  return announcements.filter(
    (announcement) => announcement.type === type && isAnnouncementActive(announcement)
  );
}
