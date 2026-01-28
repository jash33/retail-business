/**
 * =================================================================
 * ASTRO CONTENT COLLECTIONS CONFIGURATION
 * =================================================================
 *
 * Defines content collections with TypeScript schemas for products
 * and other content types. Uses Zod for runtime validation and
 * TypeScript type inference.
 *
 * @see https://docs.astro.build/en/guides/content-collections/
 * =================================================================
 */

import { defineCollection, z } from 'astro:content';

// =================================================================
// SHARED SCHEMAS
// =================================================================

/**
 * Schema for product images with WebP support
 */
const productImageSchema = z.object({
  /** Main image source URL */
  src: z.string().min(1, 'Image source is required'),
  /** WebP format source for modern browsers */
  srcWebP: z.string().optional(),
  /** Alt text for accessibility (required) */
  alt: z.string().min(1, 'Alt text is required for accessibility'),
  /** Image width for aspect ratio calculation */
  width: z.number().positive().optional(),
  /** Image height for aspect ratio calculation */
  height: z.number().positive().optional(),
  /** Low-resolution placeholder for blur-up effect */
  placeholder: z.string().optional(),
});

/**
 * Schema for product pricing
 */
const productPriceSchema = z.object({
  /** Current selling price */
  amount: z.number().nonnegative('Price cannot be negative'),
  /** Original price (for showing discounts) */
  originalAmount: z.number().positive().optional(),
  /** Currency code (default: USD) */
  currency: z.string().default('USD'),
  /** Whether to show decimal places */
  showDecimals: z.boolean().default(true),
}).refine(
  (data) => !data.originalAmount || data.originalAmount >= data.amount,
  { message: 'Original price must be greater than or equal to current price' }
);

/**
 * Schema for UTM tracking parameters
 */
const utmParamsSchema = z.object({
  /** Campaign source (e.g., 'website', 'newsletter') */
  source: z.string().optional(),
  /** Campaign medium (e.g., 'referral', 'banner') */
  medium: z.string().optional(),
  /** Campaign name (e.g., 'spring_sale', 'header_cart') */
  campaign: z.string().optional(),
  /** Campaign term (for paid search) */
  term: z.string().optional(),
  /** Campaign content (for A/B testing) */
  content: z.string().optional(),
}).optional();

/**
 * Schema for product metadata (SEO and social)
 */
const productMetadataSchema = z.object({
  /** SEO meta title (defaults to product name) */
  metaTitle: z.string().max(60, 'Meta title should be under 60 characters').optional(),
  /** SEO meta description */
  metaDescription: z.string().max(160, 'Meta description should be under 160 characters').optional(),
  /** Open Graph image URL */
  ogImage: z.string().url().optional(),
  /** Canonical URL if different from default */
  canonicalUrl: z.string().url().optional(),
  /** Keywords for SEO */
  keywords: z.array(z.string()).optional(),
  /** Schema.org structured data type */
  schemaType: z.enum(['Product', 'IndividualProduct', 'ProductModel']).default('Product'),
  /** Brand name */
  brand: z.string().optional(),
  /** Product SKU */
  sku: z.string().optional(),
  /** Global Trade Item Number (GTIN/UPC/EAN) */
  gtin: z.string().optional(),
  /** Manufacturer Part Number */
  mpn: z.string().optional(),
  /** Product condition */
  condition: z.enum(['NewCondition', 'UsedCondition', 'RefurbishedCondition', 'DamagedCondition']).default('NewCondition'),
  /** Availability status */
  availability: z.enum(['InStock', 'OutOfStock', 'PreOrder', 'BackOrder', 'Discontinued']).default('InStock'),
}).optional();

// =================================================================
// PRODUCT CATEGORIES
// =================================================================

/**
 * Allowed product categories
 * Extend this list as new categories are added
 */
const productCategorySchema = z.enum([
  'Bags',
  'Kitchen',
  'Home',
  'Accessories',
  'Apparel',
  'Art',
  'Jewelry',
  'Stationery',
  'Outdoor',
  'Electronics',
  'Other',
]);

// =================================================================
// BLOG CATEGORIES
// =================================================================

/**
 * Allowed blog categories for content organization
 * Supports brand storytelling and lifestyle content
 */
const blogCategorySchema = z.enum([
  'Lifestyle',
  'Brand Story',
  'Behind the Scenes',
  'Style Guide',
  'Sustainability',
  'Tips & Tricks',
  'Community',
  'Events',
  'News',
  'Other',
]);

// =================================================================
// BLOG SCHEMAS
// =================================================================

/**
 * Schema for blog featured images
 */
const blogImageSchema = z.object({
  /** Image source URL */
  src: z.string().min(1, 'Image source is required'),
  /** Alt text for accessibility */
  alt: z.string().min(1, 'Alt text is required for accessibility'),
  /** Image width */
  width: z.number().positive().optional(),
  /** Image height */
  height: z.number().positive().optional(),
  /** Image caption (optional) */
  caption: z.string().optional(),
  /** Credit/attribution */
  credit: z.string().optional(),
});

/**
 * Schema for blog author information
 */
const blogAuthorSchema = z.object({
  /** Author name */
  name: z.string().min(1, 'Author name is required'),
  /** Author avatar image URL */
  avatar: z.string().optional(),
  /** Author bio/description */
  bio: z.string().optional(),
  /** Author social links */
  social: z.object({
    twitter: z.string().optional(),
    instagram: z.string().optional(),
    linkedin: z.string().optional(),
  }).optional(),
});

/**
 * Schema for blog SEO metadata
 */
const blogSeoSchema = z.object({
  /** SEO meta title (defaults to article title) */
  metaTitle: z.string().max(60, 'Meta title should be under 60 characters').optional(),
  /** SEO meta description */
  metaDescription: z.string().max(160, 'Meta description should be under 160 characters').optional(),
  /** Open Graph image URL (defaults to featured image) */
  ogImage: z.string().optional(),
  /** Canonical URL if different from default */
  canonicalUrl: z.string().url().optional(),
  /** Keywords for SEO */
  keywords: z.array(z.string()).optional(),
  /** Focus keyword for SEO optimization */
  focusKeyword: z.string().optional(),
  /** Prevent search engine indexing */
  noIndex: z.boolean().default(false),
  /** Prevent link following */
  noFollow: z.boolean().default(false),
}).optional();

// =================================================================
// BLOG COLLECTION
// =================================================================

/**
 * Blog collection schema
 * Defines all fields for blog articles with validation
 * Supports brand storytelling and lifestyle content
 */
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // ----- Required Fields -----
    /** Article title */
    title: z.string().min(1, 'Article title is required'),
    /** Brief article description/excerpt */
    description: z.string().min(1, 'Description is required'),
    /** Publication date */
    pubDate: z.coerce.date(),
    /** Article category */
    category: blogCategorySchema,

    // ----- Featured Image -----
    /** Featured image for the article */
    featuredImage: blogImageSchema.optional(),

    // ----- Author Information -----
    /** Article author */
    author: blogAuthorSchema.optional(),

    // ----- Content Organization -----
    /** Tags for additional filtering */
    tags: z.array(z.string()).default([]),
    /** Estimated reading time in minutes */
    readingTime: z.number().positive().optional(),

    // ----- Article Status -----
    /** Whether the article is published */
    published: z.boolean().default(true),
    /** Whether the article is featured on homepage/blog index */
    featured: z.boolean().default(false),
    /** Whether the article is a draft */
    draft: z.boolean().default(false),

    // ----- Display Options -----
    /** Custom excerpt (if different from description) */
    excerpt: z.string().optional(),
    /** Display order priority (lower numbers appear first) */
    priority: z.number().int().default(999),

    // ----- Dates -----
    /** Last updated date */
    updatedDate: z.coerce.date().optional(),

    // ----- Related Content -----
    /** Related article slugs */
    relatedPosts: z.array(z.string()).optional(),
    /** Related product slugs */
    relatedProducts: z.array(z.string()).optional(),

    // ----- SEO & Metadata -----
    /** SEO metadata */
    seo: blogSeoSchema,
  }),
});

// =================================================================
// PRODUCTS COLLECTION
// =================================================================

/**
 * Products collection schema
 * Defines all fields for product content with validation
 */
const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // ----- Required Fields -----
    /** Product name/title */
    name: z.string().min(1, 'Product name is required'),
    /** Product price configuration */
    price: productPriceSchema,
    /** Brief product description */
    description: z.string().min(1, 'Description is required'),
    /** Primary product image */
    image: productImageSchema,
    /** Product category */
    category: productCategorySchema,
    /** Direct URL to product page in external shop */
    shopUrl: z.string().url('Shop URL must be a valid URL'),

    // ----- Optional Image Fields -----
    /** Secondary image shown on hover */
    hoverImage: productImageSchema.optional(),
    /** Additional product images for gallery */
    images: z.array(productImageSchema).optional(),

    // ----- Optional Content Fields -----
    /** Short product tagline (appears above title) */
    tagline: z.string().optional(),
    /** Extended editorial description for featured display */
    editorialDescription: z.string().optional(),

    // ----- Product Status Flags -----
    /** Whether the product is featured on homepage */
    featured: z.boolean().default(false),
    /** Whether the product is new */
    isNew: z.boolean().default(false),
    /** Whether the product is on sale */
    onSale: z.boolean().default(false),
    /** Whether the product is sold out */
    soldOut: z.boolean().default(false),
    /** Whether the product is available for pre-order */
    preOrder: z.boolean().default(false),
    /** Whether the product is published/visible */
    published: z.boolean().default(true),

    // ----- Display Options -----
    /** Aspect ratio for the image container */
    aspectRatio: z.enum(['4:5', '1:1']).default('4:5'),
    /** Custom CTA button text (default: "Shop Now") */
    ctaText: z.string().default('Shop Now'),
    /** Whether to open shop link in new tab */
    openInNewTab: z.boolean().default(true),
    /** Display order priority (lower numbers appear first) */
    priority: z.number().int().default(999),

    // ----- Tracking & Analytics -----
    /** UTM parameters for shop link tracking */
    utmParams: utmParamsSchema,

    // ----- Metadata & SEO -----
    /** Product metadata for SEO and structured data */
    metadata: productMetadataSchema,

    // ----- Dates -----
    /** Date the product was added */
    dateAdded: z.date().optional(),
    /** Date the product was last updated */
    dateUpdated: z.date().optional(),
    /** Date the sale ends (if on sale) */
    saleEndDate: z.date().optional(),

    // ----- Inventory -----
    /** Stock quantity (optional, for display purposes) */
    stockQuantity: z.number().int().nonnegative().optional(),
    /** Low stock threshold */
    lowStockThreshold: z.number().int().nonnegative().default(5),

    // ----- Variants (for reference only, actual variants in shop) -----
    /** Available colors */
    colors: z.array(z.string()).optional(),
    /** Available sizes */
    sizes: z.array(z.string()).optional(),
    /** Available materials */
    materials: z.array(z.string()).optional(),

    // ----- Related Products -----
    /** IDs of related products (by slug) */
    relatedProducts: z.array(z.string()).optional(),
  }),
});

// =================================================================
// EVENT CATEGORIES
// =================================================================

/**
 * Allowed event types
 */
const eventTypeSchema = z.enum([
  'trunk-show',
  'workshop',
  'pop-up',
  'sale',
  'meet-and-greet',
  'other',
]);

// =================================================================
// EVENT SCHEMAS
// =================================================================

/**
 * Schema for event images
 */
const eventImageSchema = z.object({
  /** Image source URL */
  src: z.string().min(1, 'Image source is required'),
  /** Alt text for accessibility */
  alt: z.string().min(1, 'Alt text is required for accessibility'),
  /** Image width */
  width: z.number().positive().optional(),
  /** Image height */
  height: z.number().positive().optional(),
});

/**
 * Schema for event address
 */
const eventAddressSchema = z.object({
  /** Venue/location name */
  venue: z.string().optional(),
  /** Street address */
  street: z.string().min(1, 'Street address is required'),
  /** City */
  city: z.string().min(1, 'City is required'),
  /** State/region */
  state: z.string().min(1, 'State is required'),
  /** Postal/ZIP code */
  zip: z.string().min(1, 'ZIP code is required'),
  /** Country (defaults to US) */
  country: z.string().default('US'),
});

/**
 * Schema for event coordinates
 */
const eventCoordinatesSchema = z.object({
  /** Latitude */
  lat: z.number(),
  /** Longitude */
  lng: z.number(),
}).optional();

/**
 * Schema for event pricing
 */
const eventPricingSchema = z.object({
  /** Ticket price (0 for free) */
  price: z.number().nonnegative().default(0),
  /** Currency code */
  currency: z.string().default('USD'),
  /** Is this event free? */
  isFree: z.boolean().default(true),
  /** Price description */
  priceDescription: z.string().optional(),
}).optional();

/**
 * Schema for event SEO metadata
 */
const eventSeoSchema = z.object({
  /** SEO meta title */
  metaTitle: z.string().max(60, 'Meta title should be under 60 characters').optional(),
  /** SEO meta description */
  metaDescription: z.string().max(160, 'Meta description should be under 160 characters').optional(),
  /** Open Graph image URL */
  ogImage: z.string().optional(),
  /** Canonical URL */
  canonicalUrl: z.string().url().optional(),
  /** Keywords for SEO */
  keywords: z.array(z.string()).optional(),
}).optional();

// =================================================================
// EVENTS COLLECTION
// =================================================================

/**
 * Events collection schema
 * Defines all fields for events with validation
 * Supports trunk shows, workshops, pop-ups, and other events
 */
const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // ----- Required Fields -----
    /** Event title */
    title: z.string().min(1, 'Event title is required'),
    /** Brief event description */
    description: z.string().min(1, 'Description is required'),
    /** Event type */
    eventType: eventTypeSchema,
    /** Event start date */
    startDate: z.coerce.date(),
    /** Event end date (optional, defaults to same day) */
    endDate: z.coerce.date().optional(),

    // ----- Time Fields -----
    /** Start time (24h format, e.g., "14:00") */
    startTime: z.string().regex(/^\d{2}:\d{2}$/, 'Time must be in HH:MM format').optional(),
    /** End time (24h format, e.g., "18:00") */
    endTime: z.string().regex(/^\d{2}:\d{2}$/, 'Time must be in HH:MM format').optional(),

    // ----- Location Fields -----
    /** Event address */
    address: eventAddressSchema,
    /** Map coordinates */
    coordinates: eventCoordinatesSchema,

    // ----- Image Fields -----
    /** Featured image */
    featuredImage: eventImageSchema.optional(),
    /** Additional gallery images */
    images: z.array(eventImageSchema).optional(),

    // ----- Registration/Tickets -----
    /** Registration URL */
    registrationUrl: z.string().url().optional(),
    /** External ticket URL */
    ticketUrl: z.string().url().optional(),
    /** Event capacity */
    capacity: z.number().int().positive().optional(),
    /** Pricing information */
    pricing: eventPricingSchema,

    // ----- Event Status -----
    /** Whether the event is published */
    published: z.boolean().default(true),
    /** Whether the event is featured */
    featured: z.boolean().default(false),
    /** Whether the event is cancelled */
    cancelled: z.boolean().default(false),
    /** Display order priority */
    priority: z.number().int().default(999),

    // ----- Additional Info -----
    /** Tags for filtering */
    tags: z.array(z.string()).default([]),
    /** Organizer name */
    organizer: z.string().optional(),
    /** Special guests or performers */
    specialGuests: z.array(z.string()).optional(),
    /** What to bring/expect */
    whatToBring: z.array(z.string()).optional(),

    // ----- SEO -----
    /** SEO metadata */
    seo: eventSeoSchema,
  }),
});

// =================================================================
// EXPORT COLLECTIONS
// =================================================================

export const collections = {
  products: productsCollection,
  blog: blogCollection,
  events: eventsCollection,
};

// =================================================================
// TYPE EXPORTS
// =================================================================

/**
 * Re-export inferred types for use in components
 * These types are automatically derived from the Zod schemas
 */
export type ProductImage = z.infer<typeof productImageSchema>;
export type ProductPrice = z.infer<typeof productPriceSchema>;
export type UTMParams = z.infer<typeof utmParamsSchema>;
export type ProductMetadata = z.infer<typeof productMetadataSchema>;
export type ProductCategory = z.infer<typeof productCategorySchema>;

// Blog collection types
export type BlogCategory = z.infer<typeof blogCategorySchema>;
export type BlogImage = z.infer<typeof blogImageSchema>;
export type BlogAuthor = z.infer<typeof blogAuthorSchema>;
export type BlogSeo = z.infer<typeof blogSeoSchema>;

// Event collection types
export type EventTypeEnum = z.infer<typeof eventTypeSchema>;
export type EventImage = z.infer<typeof eventImageSchema>;
export type EventAddress = z.infer<typeof eventAddressSchema>;
export type EventCoordinates = z.infer<typeof eventCoordinatesSchema>;
export type EventPricing = z.infer<typeof eventPricingSchema>;
export type EventSeo = z.infer<typeof eventSeoSchema>;
