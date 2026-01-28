/**
 * Location Page Type Definitions
 * Types for the Visit/Location page including store hours, parking info, and gallery
 */

/**
 * Store hours for a specific day or range of days
 */
export interface StoreHours {
  /** Day(s) of the week */
  days: string;
  /** Opening time (e.g., "9:00 AM") */
  open: string;
  /** Closing time (e.g., "5:00 PM") */
  close: string;
  /** Whether the store is closed on this day */
  isClosed?: boolean;
}

/**
 * Special hours for holidays or events
 */
export interface SpecialHours {
  /** Name of the holiday or event */
  name: string;
  /** Date in readable format */
  date: string;
  /** Opening time (optional if closed) */
  open?: string;
  /** Closing time (optional if closed) */
  close?: string;
  /** Whether the store is closed */
  isClosed?: boolean;
}

/**
 * Location photo for gallery
 */
export interface LocationPhoto {
  /** Image source URL */
  src: string;
  /** WebP version of the image */
  srcWebP?: string;
  /** Alt text for accessibility */
  alt: string;
  /** Photo category */
  category: 'exterior' | 'interior' | 'neighborhood';
  /** Image width */
  width?: number;
  /** Image height */
  height?: number;
  /** Caption for the photo */
  caption?: string;
}

/**
 * Parking option at or near the location
 */
export interface ParkingOption {
  /** Type of parking */
  type: 'street' | 'lot' | 'garage' | 'valet';
  /** Name or description */
  name: string;
  /** Details about this parking option */
  details: string;
  /** Cost information */
  cost?: string;
  /** Distance from location */
  distance?: string;
  /** Additional notes */
  notes?: string;
}

/**
 * Transit option for getting to the location
 */
export interface TransitOption {
  /** Type of transit */
  type: 'metro' | 'bus' | 'rail' | 'bike' | 'rideshare';
  /** Route or line name */
  name: string;
  /** Stop or station name */
  stop?: string;
  /** Walking distance/time from stop */
  walkingDistance?: string;
  /** Additional details */
  details?: string;
}

/**
 * Neighborhood highlight or nearby point of interest
 */
export interface NeighborhoodHighlight {
  /** Name of the place */
  name: string;
  /** Type/category */
  type: string;
  /** Description */
  description: string;
  /** Distance from location */
  distance?: string;
  /** Website or external link */
  link?: string;
}

/**
 * Address information
 */
export interface LocationAddress {
  /** Street address line 1 */
  street: string;
  /** Street address line 2 (suite, unit, etc.) */
  street2?: string;
  /** City */
  city: string;
  /** State/Region */
  state: string;
  /** Postal/ZIP code */
  postalCode: string;
  /** Country */
  country: string;
}

/**
 * Geographic coordinates
 */
export interface LocationCoordinates {
  /** Latitude */
  lat: number;
  /** Longitude */
  lng: number;
}

/**
 * Complete location configuration
 */
export interface LocationConfig {
  /** Business name */
  name: string;
  /** Tagline or short description */
  tagline?: string;
  /** Full address */
  address: LocationAddress;
  /** Geographic coordinates for map */
  coordinates: LocationCoordinates;
  /** Phone number */
  phone: string;
  /** Email address */
  email: string;
  /** Regular store hours */
  hours: StoreHours[];
  /** Special hours for holidays */
  specialHours?: SpecialHours[];
  /** Photo gallery */
  photos: LocationPhoto[];
  /** Parking information */
  parking: ParkingOption[];
  /** Public transit options */
  transit?: TransitOption[];
  /** Neighborhood highlights */
  neighborhood: NeighborhoodHighlight[];
  /** Google Maps embed URL */
  googleMapsEmbedUrl: string;
  /** Google Maps directions URL */
  googleMapsDirectionsUrl: string;
  /** Accessibility features */
  accessibility?: string[];
  /** Amenities available */
  amenities?: string[];
}
