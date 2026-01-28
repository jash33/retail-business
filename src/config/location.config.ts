/**
 * Location Configuration
 * Store information, hours, parking, and neighborhood details for the Visit page
 */

import type { LocationConfig } from '../types/location';

export const locationConfig: LocationConfig = {
  name: 'Houston Web Services',
  tagline: 'Your Local Web Design Partner',

  address: {
    street: '1234 Main Street',
    street2: 'Suite 200',
    city: 'Houston',
    state: 'TX',
    postalCode: '77077',
    country: 'USA',
  },

  coordinates: {
    lat: 29.7752,
    lng: -95.6091,
  },

  phone: '(832) 555-0123',
  email: 'hello@houstonwebservices.com',

  hours: [
    { days: 'Monday - Friday', open: '9:00 AM', close: '5:00 PM' },
    { days: 'Saturday', open: '10:00 AM', close: '2:00 PM' },
    { days: 'Sunday', open: '', close: '', isClosed: true },
  ],

  specialHours: [
    { name: 'New Year\'s Day', date: 'January 1', isClosed: true },
    { name: 'Independence Day', date: 'July 4', isClosed: true },
    { name: 'Thanksgiving', date: 'November 28', isClosed: true },
    { name: 'Christmas Eve', date: 'December 24', open: '9:00 AM', close: '12:00 PM' },
    { name: 'Christmas Day', date: 'December 25', isClosed: true },
  ],

  photos: [
    {
      src: '/images/location/exterior-front.jpg',
      alt: 'Houston Web Services office building exterior - modern glass facade',
      category: 'exterior',
      width: 1200,
      height: 800,
      caption: 'Our modern office in the heart of Houston',
    },
    {
      src: '/images/location/exterior-entrance.jpg',
      alt: 'Main entrance to Houston Web Services with welcoming signage',
      category: 'exterior',
      width: 1200,
      height: 800,
      caption: 'The main entrance on Main Street',
    },
    {
      src: '/images/location/interior-lobby.jpg',
      alt: 'Bright and welcoming lobby with comfortable seating',
      category: 'interior',
      width: 1200,
      height: 800,
      caption: 'Our welcoming lobby area',
    },
    {
      src: '/images/location/interior-meeting.jpg',
      alt: 'Modern meeting room with video conferencing capabilities',
      category: 'interior',
      width: 1200,
      height: 800,
      caption: 'Meeting room for client consultations',
    },
    {
      src: '/images/location/interior-workspace.jpg',
      alt: 'Open workspace with natural lighting and modern design',
      category: 'interior',
      width: 1200,
      height: 800,
      caption: 'Where the magic happens',
    },
    {
      src: '/images/location/neighborhood-street.jpg',
      alt: 'Tree-lined street view of the neighborhood',
      category: 'neighborhood',
      width: 1200,
      height: 800,
      caption: 'Beautiful tree-lined streets in our neighborhood',
    },
  ],

  parking: [
    {
      type: 'lot',
      name: 'On-Site Parking',
      details: 'Free parking available in our building lot',
      cost: 'Free for clients',
      distance: 'Adjacent to building',
      notes: 'Please park in visitor-designated spots',
    },
    {
      type: 'street',
      name: 'Street Parking',
      details: 'Metered street parking available on Main Street',
      cost: '$1.50/hour',
      distance: 'Direct access',
      notes: '2-hour limit during business hours',
    },
    {
      type: 'garage',
      name: 'Memorial City Parking Garage',
      details: 'Covered parking garage with 24/7 access',
      cost: '$2/hour, $12 daily max',
      distance: '2-minute walk',
      notes: 'Elevator access to street level',
    },
  ],

  transit: [
    {
      type: 'bus',
      name: 'METRO Bus Route 82',
      stop: 'Main Street @ Memorial',
      walkingDistance: '3-minute walk',
      details: 'Runs every 15 minutes during peak hours',
    },
    {
      type: 'rideshare',
      name: 'Uber/Lyft',
      details: 'Designated pickup/dropoff zone at building entrance',
      walkingDistance: 'Direct access',
    },
  ],

  neighborhood: [
    {
      name: 'Memorial City Mall',
      type: 'Shopping',
      description: 'Major shopping destination with dining and entertainment options',
      distance: '5-minute drive',
      link: 'https://memorialcity.com',
    },
    {
      name: 'Terry Hershey Park',
      type: 'Recreation',
      description: 'Beautiful park with walking and biking trails along Buffalo Bayou',
      distance: '10-minute walk',
    },
    {
      name: 'Local Coffee House',
      type: 'Cafe',
      description: 'Great spot for a pre-meeting coffee or casual work session',
      distance: '2-minute walk',
    },
    {
      name: 'Houston Arboretum',
      type: 'Nature',
      description: '155-acre urban nature sanctuary with hiking trails',
      distance: '15-minute drive',
    },
  ],

  // Google Maps embed URL - replace YOUR_API_KEY with actual API key
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.2!2d-95.6091!3d29.7752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ2JzMwLjciTiA5NcKwMzYnMzIuOCJX!5e0!3m2!1sen!2sus!4v1234567890',

  // Google Maps directions URL
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=29.7752,-95.6091',

  accessibility: [
    'Wheelchair accessible entrance',
    'Elevator access to all floors',
    'Accessible restrooms',
    'Reserved accessible parking spots',
    'Service animals welcome',
  ],

  amenities: [
    'Free Wi-Fi for clients',
    'Complimentary beverages',
    'Comfortable waiting area',
    'Video conferencing facilities',
    'Secure building access',
  ],
};

export default locationConfig;
