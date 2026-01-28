/**
 * Event Utility Functions
 * Helper functions for working with events
 */

import { getCollection } from 'astro:content';
import type { EventEntry, EventType, CalendarMonth, CalendarDay, GetEventsOptions } from '../types/events';
import { CALENDAR_CONFIG, getEventTypeConfig } from '../config/events.config';

// =================================================================
// DATA FETCHING
// =================================================================

/**
 * Get all published events
 */
export async function getAllEvents(): Promise<EventEntry[]> {
  const events = await getCollection('events', ({ data }) => {
    return data.published === true;
  });
  return events;
}

/**
 * Get events with filtering options
 */
export async function getEvents(options: GetEventsOptions = {}): Promise<EventEntry[]> {
  const {
    eventType,
    upcomingOnly = false,
    featuredOnly = false,
    limit,
    offset = 0,
    sortBy = 'date',
    sortOrder = 'asc',
    startDate,
    endDate,
  } = options;

  let events = await getAllEvents();

  // Filter by event type
  if (eventType) {
    events = events.filter(event => event.data.eventType === eventType);
  }

  // Filter by featured
  if (featuredOnly) {
    events = events.filter(event => event.data.featured === true);
  }

  // Filter by date range
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  if (upcomingOnly) {
    events = events.filter(event => {
      const eventEnd = event.data.endDate || event.data.startDate;
      return eventEnd >= now;
    });
  }

  if (startDate) {
    events = events.filter(event => event.data.startDate >= startDate);
  }

  if (endDate) {
    events = events.filter(event => event.data.startDate <= endDate);
  }

  // Sort events
  events = sortEvents(events, sortBy, sortOrder);

  // Apply pagination
  if (offset > 0) {
    events = events.slice(offset);
  }

  if (limit && limit > 0) {
    events = events.slice(0, limit);
  }

  return events;
}

/**
 * Get upcoming events
 */
export async function getUpcomingEvents(limit?: number): Promise<EventEntry[]> {
  return getEvents({ upcomingOnly: true, limit, sortBy: 'date', sortOrder: 'asc' });
}

/**
 * Get featured events
 */
export async function getFeaturedEvents(limit?: number): Promise<EventEntry[]> {
  return getEvents({ featuredOnly: true, upcomingOnly: true, limit, sortBy: 'priority', sortOrder: 'asc' });
}

/**
 * Get events by type
 */
export async function getEventsByType(eventType: EventType): Promise<EventEntry[]> {
  return getEvents({ eventType, sortBy: 'date', sortOrder: 'asc' });
}

/**
 * Get events for a specific month
 */
export async function getEventsForMonth(year: number, month: number): Promise<EventEntry[]> {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);

  return getEvents({ startDate, endDate });
}

// =================================================================
// SORTING
// =================================================================

/**
 * Sort events by various criteria
 */
export function sortEvents(
  events: EventEntry[],
  sortBy: 'date' | 'priority' | 'title' = 'date',
  sortOrder: 'asc' | 'desc' = 'asc'
): EventEntry[] {
  const sorted = [...events].sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case 'date':
        comparison = a.data.startDate.getTime() - b.data.startDate.getTime();
        break;
      case 'priority':
        comparison = (a.data.priority || 999) - (b.data.priority || 999);
        break;
      case 'title':
        comparison = a.data.title.localeCompare(b.data.title);
        break;
    }

    return sortOrder === 'desc' ? -comparison : comparison;
  });

  return sorted;
}

// =================================================================
// EVENT STATUS HELPERS
// =================================================================

/**
 * Check if an event is upcoming
 */
export function isEventUpcoming(event: EventEntry): boolean {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return event.data.startDate >= now;
}

/**
 * Check if an event is happening now (ongoing)
 */
export function isEventOngoing(event: EventEntry): boolean {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startDate = new Date(
    event.data.startDate.getFullYear(),
    event.data.startDate.getMonth(),
    event.data.startDate.getDate()
  );
  const endDate = event.data.endDate
    ? new Date(
        event.data.endDate.getFullYear(),
        event.data.endDate.getMonth(),
        event.data.endDate.getDate()
      )
    : startDate;

  return today >= startDate && today <= endDate;
}

/**
 * Check if an event is past
 */
export function isEventPast(event: EventEntry): boolean {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const eventEnd = event.data.endDate || event.data.startDate;
  return eventEnd < now;
}

/**
 * Get event status
 */
export function getEventStatus(event: EventEntry): 'upcoming' | 'ongoing' | 'past' | 'cancelled' {
  if (event.data.cancelled) return 'cancelled';
  if (isEventOngoing(event)) return 'ongoing';
  if (isEventPast(event)) return 'past';
  return 'upcoming';
}

// =================================================================
// DATE FORMATTING
// =================================================================

/**
 * Format event date for display
 */
export function formatEventDate(
  startDate: Date,
  endDate?: Date,
  options?: { includeYear?: boolean; includeDay?: boolean }
): string {
  const { includeYear = true, includeDay = false } = options || {};

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
  if (
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getFullYear() === endDate.getFullYear()
  ) {
    return `${startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${endDate.getDate()}${includeYear ? `, ${endDate.getFullYear()}` : ''}`;
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

/**
 * Format event date and time for schema.org (ISO 8601)
 */
export function formatEventDateTimeISO(date: Date, time?: string): string {
  if (!time) {
    return date.toISOString().split('T')[0];
  }

  const [hours, minutes] = time.split(':').map(Number);
  const dateTime = new Date(date);
  dateTime.setHours(hours, minutes, 0, 0);
  return dateTime.toISOString();
}

// =================================================================
// CALENDAR HELPERS
// =================================================================

/**
 * Generate calendar data for a month
 */
export function generateCalendarMonth(
  year: number,
  month: number,
  events: EventEntry[]
): CalendarMonth {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startDayOfWeek = firstDay.getDay();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days: CalendarDay[] = [];

  // Add days from previous month to fill the first week
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevMonthYear = month === 0 ? year - 1 : year;
  const daysInPrevMonth = new Date(prevMonthYear, prevMonth + 1, 0).getDate();

  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const date = daysInPrevMonth - i;
    const fullDate = new Date(prevMonthYear, prevMonth, date);
    days.push({
      date,
      fullDate,
      isCurrentMonth: false,
      isToday: fullDate.getTime() === today.getTime(),
      events: getEventsForDate(events, fullDate),
    });
  }

  // Add days of current month
  for (let date = 1; date <= daysInMonth; date++) {
    const fullDate = new Date(year, month, date);
    days.push({
      date,
      fullDate,
      isCurrentMonth: true,
      isToday: fullDate.getTime() === today.getTime(),
      events: getEventsForDate(events, fullDate),
    });
  }

  // Add days from next month to fill the last week
  const remainingDays = 42 - days.length; // 6 weeks * 7 days
  const nextMonth = month === 11 ? 0 : month + 1;
  const nextMonthYear = month === 11 ? year + 1 : year;

  for (let date = 1; date <= remainingDays; date++) {
    const fullDate = new Date(nextMonthYear, nextMonth, date);
    days.push({
      date,
      fullDate,
      isCurrentMonth: false,
      isToday: fullDate.getTime() === today.getTime(),
      events: getEventsForDate(events, fullDate),
    });
  }

  return {
    month,
    year,
    monthName: CALENDAR_CONFIG.months[month],
    days,
  };
}

/**
 * Get events for a specific date
 */
export function getEventsForDate(events: EventEntry[], date: Date): EventEntry[] {
  const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  return events.filter(event => {
    const startDate = new Date(
      event.data.startDate.getFullYear(),
      event.data.startDate.getMonth(),
      event.data.startDate.getDate()
    );
    const endDate = event.data.endDate
      ? new Date(
          event.data.endDate.getFullYear(),
          event.data.endDate.getMonth(),
          event.data.endDate.getDate()
        )
      : startDate;

    return targetDate >= startDate && targetDate <= endDate;
  });
}

// =================================================================
// CATEGORY HELPERS
// =================================================================

/**
 * Get unique event types with counts
 */
export function getEventTypesWithCounts(events: EventEntry[]): Array<{
  type: EventType;
  label: string;
  count: number;
}> {
  const typeMap = new Map<EventType, number>();

  events.forEach(event => {
    const count = typeMap.get(event.data.eventType) || 0;
    typeMap.set(event.data.eventType, count + 1);
  });

  return Array.from(typeMap.entries())
    .map(([type, count]) => ({
      type,
      label: getEventTypeConfig(type).label,
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

// =================================================================
// SCHEMA.ORG HELPERS
// =================================================================

/**
 * Generate schema.org Event structured data
 */
export function generateEventSchema(event: EventEntry, siteUrl: string): object {
  const { data } = event;

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: data.title,
    description: data.description,
    startDate: formatEventDateTimeISO(data.startDate, data.startTime),
    eventStatus: data.cancelled
      ? 'https://schema.org/EventCancelled'
      : 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  };

  // Add end date
  if (data.endDate || data.endTime) {
    schema.endDate = formatEventDateTimeISO(
      data.endDate || data.startDate,
      data.endTime
    );
  }

  // Add location
  if (data.address) {
    schema.location = {
      '@type': 'Place',
      name: data.address.venue || 'Event Venue',
      address: {
        '@type': 'PostalAddress',
        streetAddress: data.address.street,
        addressLocality: data.address.city,
        addressRegion: data.address.state,
        postalCode: data.address.zip,
        addressCountry: data.address.country || 'US',
      },
    };

    if (data.coordinates) {
      schema.location.geo = {
        '@type': 'GeoCoordinates',
        latitude: data.coordinates.lat,
        longitude: data.coordinates.lng,
      };
    }
  }

  // Add image
  if (data.featuredImage) {
    schema.image = data.featuredImage.src.startsWith('http')
      ? data.featuredImage.src
      : `${siteUrl}${data.featuredImage.src}`;
  }

  // Add offers (tickets/registration)
  if (data.registrationUrl || data.ticketUrl || data.pricing) {
    schema.offers = {
      '@type': 'Offer',
      url: data.ticketUrl || data.registrationUrl,
      price: data.pricing?.price || 0,
      priceCurrency: data.pricing?.currency || 'USD',
      availability: 'https://schema.org/InStock',
    };
  }

  // Add organizer
  if (data.organizer) {
    schema.organizer = {
      '@type': 'Organization',
      name: data.organizer,
      url: siteUrl,
    };
  }

  return schema;
}

// =================================================================
// URL HELPERS
// =================================================================

/**
 * Generate event URL
 */
export function getEventUrl(event: EventEntry): string {
  return `/events/${event.slug}`;
}

/**
 * Generate event type filter URL
 */
export function getEventTypeFilterUrl(type: EventType | null, baseUrl = '/events'): string {
  if (!type) return baseUrl;
  return `${baseUrl}?type=${type}`;
}
