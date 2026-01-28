/**
 * =================================================================
 * EVENT TYPES
 * =================================================================
 *
 * TypeScript types for the events content system.
 * Used across event components and pages.
 *
 * @see src/content/config.ts for Zod schemas
 * =================================================================
 */

import type { CollectionEntry } from 'astro:content';

// =================================================================
// COLLECTION TYPES
// =================================================================

/**
 * Event entry from Astro content collection
 */
export type EventEntry = CollectionEntry<'events'>;

/**
 * Event data (frontmatter)
 */
export type EventData = EventEntry['data'];

// =================================================================
// EVENT TYPE CATEGORIES
// =================================================================

/**
 * Available event types
 */
export type EventType =
  | 'trunk-show'
  | 'workshop'
  | 'pop-up'
  | 'sale'
  | 'meet-and-greet'
  | 'other';

/**
 * Event status
 */
export type EventStatus =
  | 'upcoming'
  | 'ongoing'
  | 'past'
  | 'cancelled';

/**
 * Event attendance mode (for schema.org)
 */
export type EventAttendanceMode =
  | 'offline'
  | 'online'
  | 'mixed';

// =================================================================
// EVENT ADDRESS
// =================================================================

/**
 * Event location address
 */
export interface EventAddress {
  /** Venue/location name */
  venue?: string;
  /** Street address */
  street: string;
  /** City */
  city: string;
  /** State/region */
  state: string;
  /** Postal/ZIP code */
  zip: string;
  /** Country */
  country?: string;
}

/**
 * Event coordinates for mapping
 */
export interface EventCoordinates {
  /** Latitude */
  lat: number;
  /** Longitude */
  lng: number;
}

// =================================================================
// EVENT IMAGE
// =================================================================

/**
 * Event image
 */
export interface EventImage {
  /** Image source URL */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Image width */
  width?: number;
  /** Image height */
  height?: number;
}

// =================================================================
// EVENT PRICING
// =================================================================

/**
 * Event pricing/ticket information
 */
export interface EventPricing {
  /** Ticket price (0 for free) */
  price: number;
  /** Currency code */
  currency?: string;
  /** Is this event free? */
  isFree?: boolean;
  /** Price description (e.g., "Starting from $50") */
  priceDescription?: string;
}

// =================================================================
// EVENT WITH COUNT (for filters)
// =================================================================

/**
 * Event type with count for filtering UI
 */
export interface EventTypeWithCount {
  /** Event type */
  type: EventType;
  /** Display label */
  label: string;
  /** Number of events of this type */
  count: number;
}

// =================================================================
// COMPONENT PROPS
// =================================================================

/**
 * Props for EventCard component
 */
export interface EventCardProps {
  /** Event entry */
  event: EventEntry;
  /** Card size variant */
  variant?: 'default' | 'featured' | 'compact' | 'list';
  /** Whether to show the event type badge */
  showType?: boolean;
  /** Whether to show the location */
  showLocation?: boolean;
  /** Whether to show the time */
  showTime?: boolean;
  /** Whether to show the registration button */
  showRegistration?: boolean;
  /** Custom CSS class */
  class?: string;
}

/**
 * Props for EventCalendar component
 */
export interface EventCalendarProps {
  /** Array of events to display */
  events: EventEntry[];
  /** Initial month to display (0-11) */
  initialMonth?: number;
  /** Initial year to display */
  initialYear?: number;
  /** Whether to show navigation */
  showNavigation?: boolean;
  /** Custom CSS class */
  class?: string;
}

/**
 * Props for EventGrid component
 */
export interface EventGridProps {
  /** Array of events to display */
  events: EventEntry[];
  /** Number of columns on desktop */
  columns?: 2 | 3 | 4;
  /** Layout variant */
  layout?: 'grid' | 'list';
  /** Custom CSS class */
  class?: string;
}

/**
 * Props for EventFilters component
 */
export interface EventFiltersProps {
  /** Available event types with counts */
  eventTypes: EventTypeWithCount[];
  /** Currently selected event type */
  activeType?: string;
  /** Base URL for filter links */
  baseUrl?: string;
  /** Custom CSS class */
  class?: string;
}

// =================================================================
// CALENDAR TYPES
// =================================================================

/**
 * Calendar day data
 */
export interface CalendarDay {
  /** Day of month (1-31) */
  date: number;
  /** Full date object */
  fullDate: Date;
  /** Whether this day is in the current month */
  isCurrentMonth: boolean;
  /** Whether this day is today */
  isToday: boolean;
  /** Events on this day */
  events: EventEntry[];
}

/**
 * Calendar month data
 */
export interface CalendarMonth {
  /** Month (0-11) */
  month: number;
  /** Year */
  year: number;
  /** Month name */
  monthName: string;
  /** Days in the calendar view (includes padding days) */
  days: CalendarDay[];
}

// =================================================================
// UTILITY TYPES
// =================================================================

/**
 * Options for fetching events
 */
export interface GetEventsOptions {
  /** Filter by event type */
  eventType?: EventType;
  /** Only include upcoming events */
  upcomingOnly?: boolean;
  /** Only include featured events */
  featuredOnly?: boolean;
  /** Maximum number of events to return */
  limit?: number;
  /** Number of events to skip */
  offset?: number;
  /** Sort order */
  sortBy?: 'date' | 'priority' | 'title';
  /** Sort direction */
  sortOrder?: 'asc' | 'desc';
  /** Start date filter */
  startDate?: Date;
  /** End date filter */
  endDate?: Date;
}

/**
 * Paginated events result
 */
export interface PaginatedEvents {
  /** Events for the current page */
  events: EventEntry[];
  /** Total number of events */
  total: number;
  /** Current page number */
  page: number;
  /** Total number of pages */
  totalPages: number;
  /** Whether there's a next page */
  hasNextPage: boolean;
  /** Whether there's a previous page */
  hasPrevPage: boolean;
}

// =================================================================
// SEO TYPES
// =================================================================

/**
 * Event-specific SEO data
 */
export interface EventSEO {
  /** Page title */
  title: string;
  /** Meta description */
  description: string;
  /** Open Graph image */
  ogImage?: string;
  /** Canonical URL */
  canonicalUrl?: string;
  /** Event start date (ISO string) */
  startDate?: string;
  /** Event end date (ISO string) */
  endDate?: string;
  /** Event location */
  location?: string;
}

// =================================================================
// SCHEMA.ORG EVENT TYPES
// =================================================================

/**
 * Schema.org Event structured data
 */
export interface EventSchema {
  '@context': 'https://schema.org';
  '@type': 'Event';
  name: string;
  description?: string;
  startDate: string;
  endDate?: string;
  eventStatus?: 'EventScheduled' | 'EventCancelled' | 'EventPostponed' | 'EventRescheduled';
  eventAttendanceMode?: 'OfflineEventAttendanceMode' | 'OnlineEventAttendanceMode' | 'MixedEventAttendanceMode';
  location?: {
    '@type': 'Place';
    name?: string;
    address?: {
      '@type': 'PostalAddress';
      streetAddress?: string;
      addressLocality?: string;
      addressRegion?: string;
      postalCode?: string;
      addressCountry?: string;
    };
    geo?: {
      '@type': 'GeoCoordinates';
      latitude: number;
      longitude: number;
    };
  };
  image?: string | string[];
  offers?: {
    '@type': 'Offer';
    url?: string;
    price?: number | string;
    priceCurrency?: string;
    availability?: 'InStock' | 'SoldOut' | 'PreOrder';
    validFrom?: string;
  };
  organizer?: {
    '@type': 'Organization';
    name: string;
    url?: string;
  };
  performer?: {
    '@type': 'Person' | 'Organization';
    name: string;
  };
}

// =================================================================
// HELPER FUNCTIONS
// =================================================================

/**
 * Get display label for event type
 */
export function getEventTypeLabel(type: EventType): string {
  const labels: Record<EventType, string> = {
    'trunk-show': 'Trunk Show',
    'workshop': 'Workshop',
    'pop-up': 'Pop-Up Shop',
    'sale': 'Sale Event',
    'meet-and-greet': 'Meet & Greet',
    'other': 'Event',
  };
  return labels[type] || 'Event';
}

/**
 * Get color for event type badge
 */
export function getEventTypeColor(type: EventType): string {
  const colors: Record<EventType, string> = {
    'trunk-show': 'var(--color-primary)',
    'workshop': 'var(--color-accent)',
    'pop-up': 'var(--color-success)',
    'sale': 'var(--color-warning)',
    'meet-and-greet': 'var(--color-accent-alt)',
    'other': 'var(--color-text-secondary)',
  };
  return colors[type] || 'var(--color-primary)';
}

/**
 * Check if an event is upcoming
 */
export function isEventUpcoming(startDate: Date): boolean {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return startDate >= now;
}

/**
 * Check if an event is happening today
 */
export function isEventToday(startDate: Date, endDate?: Date): boolean {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());

  if (endDate) {
    const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    return today >= start && today <= end;
  }

  return today.getTime() === start.getTime();
}

/**
 * Format event date for display
 */
export function formatEventDate(
  startDate: Date,
  endDate?: Date,
  options?: { includeYear?: boolean; includeDay?: boolean }
): string {
  const { includeYear = true, includeDay = true } = options || {};

  const formatOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    ...(includeYear && { year: 'numeric' }),
    ...(includeDay && { weekday: 'long' }),
  };

  const startStr = startDate.toLocaleDateString('en-US', formatOptions);

  if (!endDate || startDate.getTime() === endDate.getTime()) {
    return startStr;
  }

  // Same month
  if (startDate.getMonth() === endDate.getMonth() && startDate.getFullYear() === endDate.getFullYear()) {
    return `${startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${endDate.getDate()}, ${endDate.getFullYear()}`;
  }

  // Different months
  const endStr = endDate.toLocaleDateString('en-US', formatOptions);
  return `${startStr} - ${endStr}`;
}

/**
 * Format event time for display
 */
export function formatEventTime(startTime?: string, endTime?: string): string {
  if (!startTime) return '';

  const formatTime = (time: string): string => {
    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return minutes === 0
      ? `${displayHours} ${period}`
      : `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  const start = formatTime(startTime);

  if (!endTime) return start;

  const end = formatTime(endTime);
  return `${start} - ${end}`;
}
