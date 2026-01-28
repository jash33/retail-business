/**
 * Events Configuration
 * Default values and settings for the events system
 */

import type { EventType } from '../types/events';

/**
 * Event type configuration with labels and colors
 */
export interface EventTypeConfig {
  /** Event type identifier */
  type: EventType;
  /** Display label */
  label: string;
  /** Short label for compact displays */
  shortLabel: string;
  /** Badge background color */
  color: string;
  /** Badge text color */
  textColor: string;
  /** Icon name (if using icon system) */
  icon: string;
  /** Description */
  description: string;
}

/**
 * Event type configurations
 */
export const EVENT_TYPES: Record<EventType, EventTypeConfig> = {
  'trunk-show': {
    type: 'trunk-show',
    label: 'Trunk Show',
    shortLabel: 'Trunk Show',
    color: 'var(--color-primary)',
    textColor: 'var(--color-text-inverse)',
    icon: 'shopping-bag',
    description: 'Exclusive preview events featuring designer collections',
  },
  'workshop': {
    type: 'workshop',
    label: 'Workshop',
    shortLabel: 'Workshop',
    color: 'var(--color-accent)',
    textColor: 'var(--color-text-inverse)',
    icon: 'tools',
    description: 'Hands-on learning experiences with expert instructors',
  },
  'pop-up': {
    type: 'pop-up',
    label: 'Pop-Up Shop',
    shortLabel: 'Pop-Up',
    color: 'var(--color-success)',
    textColor: 'var(--color-text-inverse)',
    icon: 'store',
    description: 'Temporary retail experiences at special locations',
  },
  'sale': {
    type: 'sale',
    label: 'Sale Event',
    shortLabel: 'Sale',
    color: 'var(--color-warning)',
    textColor: 'var(--color-text-primary)',
    icon: 'tag',
    description: 'Special sales and promotional events',
  },
  'meet-and-greet': {
    type: 'meet-and-greet',
    label: 'Meet & Greet',
    shortLabel: 'Meet & Greet',
    color: 'var(--color-accent-alt)',
    textColor: 'var(--color-text-inverse)',
    icon: 'users',
    description: 'Intimate gatherings with designers and artisans',
  },
  'other': {
    type: 'other',
    label: 'Special Event',
    shortLabel: 'Event',
    color: 'var(--color-text-secondary)',
    textColor: 'var(--color-text-inverse)',
    icon: 'calendar',
    description: 'Other special events and gatherings',
  },
};

/**
 * Events page configuration
 */
export const EVENTS_PAGE_CONFIG = {
  /** Page title */
  title: 'Events',
  /** Page description for SEO */
  description: 'Join us for trunk shows, workshops, pop-up shops, and special events. Discover exclusive experiences and connect with our community.',
  /** Events per page for pagination */
  eventsPerPage: 9,
  /** Show past events toggle default */
  showPastEventsByDefault: false,
  /** Number of featured events to show */
  featuredEventsCount: 3,
  /** Default view mode */
  defaultView: 'grid' as const,
  /** Available view modes */
  viewModes: ['grid', 'calendar', 'list'] as const,
};

/**
 * Calendar configuration
 */
export const CALENDAR_CONFIG = {
  /** First day of week (0 = Sunday, 1 = Monday) */
  firstDayOfWeek: 0,
  /** Week day labels */
  weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const,
  /** Week day full labels */
  weekDaysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const,
  /** Month labels */
  months: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ] as const,
  /** Month short labels */
  monthsShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ] as const,
};

/**
 * Event schema.org configuration
 */
export const EVENT_SCHEMA_CONFIG = {
  /** Default organizer */
  defaultOrganizer: {
    name: 'Houston Web Services',
    url: 'https://houstonwebservices.com',
  },
  /** Default event status */
  defaultEventStatus: 'EventScheduled' as const,
  /** Default attendance mode */
  defaultAttendanceMode: 'OfflineEventAttendanceMode' as const,
};

/**
 * Get event type configuration
 */
export function getEventTypeConfig(type: EventType): EventTypeConfig {
  return EVENT_TYPES[type] || EVENT_TYPES['other'];
}

/**
 * Get all event types as array
 */
export function getAllEventTypes(): EventTypeConfig[] {
  return Object.values(EVENT_TYPES);
}

/**
 * Get event type label
 */
export function getEventTypeLabel(type: EventType): string {
  return EVENT_TYPES[type]?.label || 'Event';
}

/**
 * Get event type color
 */
export function getEventTypeColor(type: EventType): string {
  return EVENT_TYPES[type]?.color || 'var(--color-primary)';
}
