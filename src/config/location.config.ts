/**
 * Location Configuration - HTX Flowers
 * Store information, hours, parking, and neighborhood details
 */

import type { LocationConfig } from '../types/location';

export const locationConfig: LocationConfig = {
  name: 'HTX Flowers',
  tagline: 'Fresh Blooms, Heartfelt Moments',

  address: {
    street: '12847 Westheimer Road',
    street2: '',
    city: 'Houston',
    state: 'TX',
    postalCode: '77077',
    country: 'USA',
  },

  coordinates: {
    lat: 29.7373,
    lng: -95.5981,
  },

  phone: '(832) 555-ROSE',
  email: 'hello@htxflowers.com',

  hours: [
    { days: 'Monday - Friday', open: '8:00 AM', close: '6:00 PM' },
    { days: 'Saturday', open: '9:00 AM', close: '5:00 PM' },
    { days: 'Sunday', open: '10:00 AM', close: '2:00 PM' },
  ],

  specialHours: [
    { name: 'Valentine\'s Day', date: 'February 14', open: '6:00 AM', close: '8:00 PM' },
    { name: 'Mother\'s Day', date: 'May 11', open: '7:00 AM', close: '6:00 PM' },
    { name: 'Easter Sunday', date: 'April 20', open: '8:00 AM', close: '1:00 PM' },
    { name: 'Thanksgiving', date: 'November 27', isClosed: true },
    { name: 'Christmas Eve', date: 'December 24', open: '8:00 AM', close: '12:00 PM' },
    { name: 'Christmas Day', date: 'December 25', isClosed: true },
  ],

  photos: [
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
      alt: 'HTX Flowers storefront with colorful flower displays',
      category: 'exterior',
      width: 1200,
      height: 800,
      caption: 'Our welcoming storefront in the Energy Corridor',
    },
    {
      src: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1200&h=800&fit=crop',
      alt: 'Beautiful flower arrangements inside the shop',
      category: 'interior',
      width: 1200,
      height: 800,
      caption: 'Fresh arrangements crafted daily',
    },
    {
      src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&h=800&fit=crop',
      alt: 'Colorful bouquets ready for delivery',
      category: 'interior',
      width: 1200,
      height: 800,
      caption: 'Browse our ready-to-go bouquets',
    },
    {
      src: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=1200&h=800&fit=crop',
      alt: 'Florist workspace with fresh flowers',
      category: 'interior',
      width: 1200,
      height: 800,
      caption: 'Our design studio where the magic happens',
    },
  ],

  parking: [
    {
      type: 'lot',
      name: 'Store Parking',
      details: 'Free parking in our dedicated lot',
      cost: 'Free',
      distance: 'Steps from entrance',
      notes: '15 spots available',
    },
    {
      type: 'street',
      name: 'Street Parking',
      details: 'Additional parking on Westheimer',
      cost: 'Free',
      distance: 'Direct access',
      notes: 'No time limit',
    },
  ],

  transit: [
    {
      type: 'bus',
      name: 'METRO Bus Route 82',
      stop: 'Westheimer @ Dairy Ashford',
      walkingDistance: '5-minute walk',
      details: 'Runs every 20 minutes',
    },
    {
      type: 'rideshare',
      name: 'Uber/Lyft',
      details: 'Easy pickup at storefront',
      walkingDistance: 'Direct access',
    },
  ],

  neighborhood: [
    {
      name: 'Memorial City Mall',
      type: 'Shopping',
      description: 'Major shopping and dining destination',
      distance: '5-minute drive',
      link: 'https://memorialcity.com',
    },
    {
      name: 'Terry Hershey Park',
      type: 'Recreation',
      description: 'Beautiful trails along Buffalo Bayou',
      distance: '10-minute drive',
    },
    {
      name: 'City Centre',
      type: 'Shopping',
      description: 'Upscale outdoor shopping and dining',
      distance: '3-minute drive',
    },
    {
      name: 'Energy Corridor',
      type: 'Business',
      description: 'Houston\'s premier business district',
      distance: 'We\'re in the heart of it!',
    },
  ],

  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.2!2d-95.5981!3d29.7373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ0JzE0LjMiTiA5NcKwMzUnNTMuMiJX!5e0!3m2!1sen!2sus!4v1234567890',

  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=29.7373,-95.5981',

  accessibility: [
    'Wheelchair accessible entrance',
    'Wide aisles throughout store',
    'Accessible restrooms',
    'Reserved accessible parking',
    'Service animals welcome',
  ],

  amenities: [
    'Complimentary gift wrapping',
    'Same-day delivery',
    'Custom arrangement consultations',
    'Wedding planning appointments',
    'Subscription flower service',
    'Corporate account options',
  ],
};

export default locationConfig;
