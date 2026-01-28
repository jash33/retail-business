
🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "I need to implement Product schema JSON-LD markup for product pages. First, explore the codebase to understand:\n\n1. The overall project structure - what framework is being used (React, Next.js, Vue, etc.)\n2. How product pages are structured\n3. If there's any existing schema markup or JSON-LD implementation\n4. How product data is structured (what fields are available for price, availability, images, brand, reviews)\n5. Any existing SEO-related components or utilities\n\nPlease search for:\n- Product page components/templates\n- Existing JSON-LD or schema markup\n- Product data models/types\n- SEO components\n\nProvide a comprehensive summary of what you find so I can plan the implementation.",
  "subagent_type": "Explore"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\package.json"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/types/**/*.{ts,tsx}"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\index.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\SEO.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\products\\[slug].astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ProductDetails.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\seo.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\product.ts"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/src/types/content-collections.ts"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/src/content/products/**"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\content-collections.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\content\\products\\premium-canvas-tote.md"
}

🔧 Tool: Grep
Input: {
  "pattern": "JSON-LD|json-ld|schema|structured data",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src",
  "output_mode": "files_with_matches"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\content\\config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\utils\\products.ts",
  "limit": 100
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\" -name \"*.astro\" -path \"*product*\" -type f | head -20",
  "description": "Find product-related Astro files"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\layouts\\Layout.astro",
  "limit": 100
}

🔧 Tool: Grep
Input: {
  "pattern": "aggregateRating|Review|rating",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src",
  "output_mode": "files_with_matches"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\demo\\product-card.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\products\\index.astro",
  "limit": 80
}
Excellent! The exploration reveals that there's already a solid foundation with partial Product schema implementation. Now let me review the current implementation files to understand exactly what needs to be enhanced:

🔧 Tool: Read
Input: {
  "file_path": "/Users/user/repos/astro-retail-business/src/types/seo.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/user/repos/astro-retail-business/src/components/SEO.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/user/repos/astro-retail-business/src/pages/products/[slug].astro"
}
Let me find the correct paths:

🔧 Tool: Glob
Input: {
  "pattern": "**/*.{astro,ts,tsx}"
}

🔧 Tool: Bash
Input: {
  "command": "pwd && ls -la",
  "description": "Check current directory"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.{astro,ts,tsx}",
  "path": "C:/Users/James/Repos/retail-business"
}
Good, now let me read the key files for understanding the current implementation:

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/types/seo.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/components/SEO.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/pages/products/**/*.astro",
  "path": "C:/Users/James/Repos/retail-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/pages/products/[slug].astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/content/**/*.{ts,md,mdx}",
  "path": "C:/Users/James/Repos/retail-business"
}
Now let me read the content config to understand the product schema:

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/content/config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/content/products/premium-canvas-tote.md"
}
Now I have a comprehensive understanding of the codebase. Let me create a plan for enhancing the Product schema JSON-LD implementation.

**Current Status:**
- Basic Product schema already exists with name, description, price, brand, SKU, and basic offers
- The schema is generated in `[slug].astro` and processed through `SEO.astro` component
- Content already supports many fields that aren't being used in the schema

**Needed Enhancements:**
1. Add GTIN (Global Trade Item Number) support
2. Add MPN (Manufacturer Part Number) support  
3. Add product condition mapping
4. Enhance offers with seller information
5. Enhance AggregateRating interface to match Google's requirements
6. Add Review support for individual reviews
7. Include additional recommended Product schema fields

Let me implement these enhancements:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Enhance ProductSchema interface in seo.ts",
      "status": "in_progress",
      "activeForm": "Enhancing ProductSchema interface"
    },
    {
      "content": "Update generateProductSchema function in SEO.astro",
      "status": "pending",
      "activeForm": "Updating generateProductSchema function"
    },
    {
      "content": "Enhance product page schema generation in [slug].astro",
      "status": "pending",
      "activeForm": "Enhancing product page schema generation"
    },
    {
      "content": "Verify schema output and Google Rich Results compatibility",
      "status": "pending",
      "activeForm": "Verifying schema output"
    }
  ]
}

🔧 Tool: Edit
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/types/seo.ts",
  "old_string": "/**\n * Product structured data\n */\nexport interface ProductSchema {\n  type: 'Product';\n  /** Product name */\n  name: string;\n  /** Product description */\n  description?: string;\n  /** Product image URL(s) */\n  image?: string | string[];\n  /** Product brand */\n  brand?: string;\n  /** Product SKU */\n  sku?: string;\n  /** Price and availability */\n  offers?: {\n    price: number;\n    priceCurrency: string;\n    availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'Discontinued';\n    url?: string;\n    validFrom?: string;\n    priceValidUntil?: string;\n  };\n  /** Aggregate rating */\n  aggregateRating?: {\n    ratingValue: number;\n    reviewCount: number;\n  };\n}",
  "new_string": "/**\n * Product offer structured data (Schema.org Offer)\n * Represents pricing and availability information\n */\nexport interface ProductOffer {\n  /** Current price (required for rich results) */\n  price: number;\n  /** Currency code (ISO 4217, e.g., 'USD', 'EUR') */\n  priceCurrency: string;\n  /** Availability status */\n  availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'BackOrder' | 'Discontinued' | 'SoldOut' | 'LimitedAvailability' | 'OnlineOnly' | 'InStoreOnly';\n  /** URL for this specific offer */\n  url?: string;\n  /** Date the price becomes valid (ISO 8601) */\n  validFrom?: string;\n  /** Date the price is valid until (ISO 8601) - Required for offers with sale prices */\n  priceValidUntil?: string;\n  /** Item condition */\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  /** Seller information */\n  seller?: {\n    name: string;\n    url?: string;\n  };\n  /** Shipping details */\n  shippingDetails?: {\n    shippingRate?: {\n      value: number;\n      currency: string;\n    };\n    shippingDestination?: string;\n    deliveryTime?: {\n      minDays: number;\n      maxDays: number;\n    };\n  };\n  /** Return policy URL */\n  hasMerchantReturnPolicy?: {\n    returnPolicyCategory?: 'MerchantReturnFiniteReturnWindow' | 'MerchantReturnNotPermitted' | 'MerchantReturnUnlimitedWindow';\n    merchantReturnDays?: number;\n    returnMethod?: 'ReturnByMail' | 'ReturnAtKiosk' | 'ReturnInStore';\n    returnFees?: 'FreeReturn' | 'ReturnFeesCustomerResponsibility';\n  };\n}\n\n/**\n * Individual review structured data\n */\nexport interface ProductReview {\n  /** Reviewer name */\n  author: string;\n  /** Review date (ISO 8601) */\n  datePublished: string;\n  /** Review body text */\n  reviewBody?: string;\n  /** Review rating */\n  reviewRating: {\n    ratingValue: number;\n    bestRating?: number;\n    worstRating?: number;\n  };\n}\n\n/**\n * Product structured data\n * Enhanced to support Google Rich Results for products\n * @see https://developers.google.com/search/docs/appearance/structured-data/product\n */\nexport interface ProductSchema {\n  type: 'Product';\n  /** Product name (required) */\n  name: string;\n  /** Product description */\n  description?: string;\n  /** Product image URL(s) - at least one image is required for rich results */\n  image?: string | string[];\n  /** Product brand */\n  brand?: string;\n  /** Product SKU (Stock Keeping Unit) */\n  sku?: string;\n  /** Global Trade Item Number (GTIN-8, GTIN-12/UPC, GTIN-13/EAN, GTIN-14) */\n  gtin?: string;\n  /** GTIN-8 (8-digit) */\n  gtin8?: string;\n  /** GTIN-12/UPC (12-digit) */\n  gtin12?: string;\n  /** GTIN-13/EAN (13-digit) */\n  gtin13?: string;\n  /** GTIN-14 (14-digit) */\n  gtin14?: string;\n  /** Manufacturer Part Number */\n  mpn?: string;\n  /** Product model */\n  model?: string;\n  /** Product color */\n  color?: string;\n  /** Product material */\n  material?: string;\n  /** Product size */\n  size?: string;\n  /** Product weight */\n  weight?: string;\n  /** Product category */\n  category?: string;\n  /** Product URL */\n  url?: string;\n  /** Price and availability (can be single offer or array for variants) */\n  offers?: ProductOffer | ProductOffer[];\n  /** Aggregate rating from all reviews */\n  aggregateRating?: {\n    /** Average rating value (required) */\n    ratingValue: number;\n    /** Best possible rating (default: 5) */\n    bestRating?: number;\n    /** Worst possible rating (default: 1) */\n    worstRating?: number;\n    /** Number of ratings */\n    ratingCount?: number;\n    /** Number of reviews (required if no ratingCount) */\n    reviewCount?: number;\n  };\n  /** Individual product reviews */\n  review?: ProductReview | ProductReview[];\n}"
}

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/types/seo.ts"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/types/seo.ts",
  "old_string": "/**\n * Product structured data\n */\nexport interface ProductSchema {\n  type: 'Product';\n  /** Product name */\n  name: string;\n  /** Product description */\n  description?: string;\n  /** Product image URL(s) */\n  image?: string | string[];\n  /** Product brand */\n  brand?: string;\n  /** Product SKU */\n  sku?: string;\n  /** Price and availability */\n  offers?: {\n    price: number;\n    priceCurrency: string;\n    availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'Discontinued';\n    url?: string;\n    validFrom?: string;\n    priceValidUntil?: string;\n  };\n  /** Aggregate rating */\n  aggregateRating?: {\n    ratingValue: number;\n    reviewCount: number;\n  };\n}",
  "new_string": "// ============================================================================\n// Product Schema Types (Enhanced for Google Rich Results)\n// ============================================================================\n\n/**\n * Product offer structured data (Schema.org Offer)\n * Represents pricing and availability information\n * @see https://schema.org/Offer\n */\nexport interface ProductOffer {\n  /** Current price (required for rich results) */\n  price: number;\n  /** Currency code (ISO 4217, e.g., 'USD', 'EUR') */\n  priceCurrency: string;\n  /** Availability status */\n  availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'BackOrder' | 'Discontinued' | 'SoldOut' | 'LimitedAvailability' | 'OnlineOnly' | 'InStoreOnly';\n  /** URL for this specific offer */\n  url?: string;\n  /** Date the price becomes valid (ISO 8601) */\n  validFrom?: string;\n  /** Date the price is valid until (ISO 8601) - Required for offers with sale prices */\n  priceValidUntil?: string;\n  /** Item condition */\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  /** Seller information */\n  seller?: {\n    name: string;\n    url?: string;\n  };\n  /** Shipping details */\n  shippingDetails?: {\n    shippingRate?: {\n      value: number;\n      currency: string;\n    };\n    shippingDestination?: string;\n    deliveryTime?: {\n      minDays: number;\n      maxDays: number;\n    };\n  };\n  /** Return policy information */\n  hasMerchantReturnPolicy?: {\n    returnPolicyCategory?: 'MerchantReturnFiniteReturnWindow' | 'MerchantReturnNotPermitted' | 'MerchantReturnUnlimitedWindow';\n    merchantReturnDays?: number;\n    returnMethod?: 'ReturnByMail' | 'ReturnAtKiosk' | 'ReturnInStore';\n    returnFees?: 'FreeReturn' | 'ReturnFeesCustomerResponsibility';\n  };\n}\n\n/**\n * Individual review structured data\n * @see https://schema.org/Review\n */\nexport interface ProductReview {\n  /** Reviewer name */\n  author: string;\n  /** Review date (ISO 8601) */\n  datePublished: string;\n  /** Review body text */\n  reviewBody?: string;\n  /** Review rating */\n  reviewRating: {\n    ratingValue: number;\n    bestRating?: number;\n    worstRating?: number;\n  };\n}\n\n/**\n * Product aggregate rating for schema\n * @see https://schema.org/AggregateRating\n */\nexport interface ProductAggregateRating {\n  /** Average rating value (required) */\n  ratingValue: number;\n  /** Best possible rating (default: 5) */\n  bestRating?: number;\n  /** Worst possible rating (default: 1) */\n  worstRating?: number;\n  /** Number of ratings */\n  ratingCount?: number;\n  /** Number of reviews (required if no ratingCount) */\n  reviewCount?: number;\n}\n\n/**\n * Product structured data\n * Enhanced to support Google Rich Results for products\n * @see https://developers.google.com/search/docs/appearance/structured-data/product\n */\nexport interface ProductSchema {\n  type: 'Product';\n  /** Product name (required) */\n  name: string;\n  /** Product description */\n  description?: string;\n  /** Product image URL(s) - at least one image is required for rich results */\n  image?: string | string[];\n  /** Product brand */\n  brand?: string;\n  /** Product SKU (Stock Keeping Unit) */\n  sku?: string;\n  /** Global Trade Item Number (GTIN - generic, auto-detected length) */\n  gtin?: string;\n  /** GTIN-8 (8-digit) */\n  gtin8?: string;\n  /** GTIN-12/UPC (12-digit) */\n  gtin12?: string;\n  /** GTIN-13/EAN (13-digit) */\n  gtin13?: string;\n  /** GTIN-14 (14-digit) */\n  gtin14?: string;\n  /** Manufacturer Part Number */\n  mpn?: string;\n  /** Product model */\n  model?: string;\n  /** Product color */\n  color?: string;\n  /** Product material */\n  material?: string;\n  /** Product size */\n  size?: string;\n  /** Product category */\n  category?: string;\n  /** Product URL */\n  url?: string;\n  /** Item condition for the product */\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  /** Price and availability (can be single offer or array for variants) */\n  offers?: ProductOffer | ProductOffer[];\n  /** Aggregate rating from all reviews */\n  aggregateRating?: ProductAggregateRating;\n  /** Individual product reviews */\n  review?: ProductReview | ProductReview[];\n}\n\n// ============================================================================\n// End of Product Schema Types\n// ============================================================================"
}

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/types/seo.ts"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/types/seo.ts",
  "old_string": "// ============================================================================\n// End of LocalBusiness Schema Types\n// ============================================================================\n\n/**\n * Product structured data\n */\nexport interface ProductSchema {\n  type: 'Product';\n  /** Product name */\n  name: string;\n  /** Product description */\n  description?: string;\n  /** Product image URL(s) */\n  image?: string | string[];\n  /** Product brand */\n  brand?: string;\n  /** Product SKU */\n  sku?: string;\n  /** Price and availability */\n  offers?: {\n    price: number;\n    priceCurrency: string;\n    availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'Discontinued';\n    url?: string;\n    validFrom?: string;\n    priceValidUntil?: string;\n  };\n  /** Aggregate rating */\n  aggregateRating?: {\n    ratingValue: number;\n    reviewCount: number;\n  };\n}\n\n/**\n * Breadcrumb structured data\n */",
  "new_string": "// ============================================================================\n// End of LocalBusiness Schema Types\n// ============================================================================\n\n// ============================================================================\n// Product Schema Types (Enhanced for Google Rich Results)\n// ============================================================================\n\n/**\n * Product offer structured data (Schema.org Offer)\n * Represents pricing and availability information\n * @see https://schema.org/Offer\n */\nexport interface ProductOffer {\n  /** Current price (required for rich results) */\n  price: number;\n  /** Currency code (ISO 4217, e.g., 'USD', 'EUR') */\n  priceCurrency: string;\n  /** Availability status */\n  availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'BackOrder' | 'Discontinued' | 'SoldOut' | 'LimitedAvailability' | 'OnlineOnly' | 'InStoreOnly';\n  /** URL for this specific offer */\n  url?: string;\n  /** Date the price becomes valid (ISO 8601) */\n  validFrom?: string;\n  /** Date the price is valid until (ISO 8601) - Required for offers with sale prices */\n  priceValidUntil?: string;\n  /** Item condition */\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  /** Seller information */\n  seller?: {\n    name: string;\n    url?: string;\n  };\n  /** Shipping details */\n  shippingDetails?: {\n    shippingRate?: {\n      value: number;\n      currency: string;\n    };\n    shippingDestination?: string;\n    deliveryTime?: {\n      minDays: number;\n      maxDays: number;\n    };\n  };\n  /** Return policy information */\n  hasMerchantReturnPolicy?: {\n    returnPolicyCategory?: 'MerchantReturnFiniteReturnWindow' | 'MerchantReturnNotPermitted' | 'MerchantReturnUnlimitedWindow';\n    merchantReturnDays?: number;\n    returnMethod?: 'ReturnByMail' | 'ReturnAtKiosk' | 'ReturnInStore';\n    returnFees?: 'FreeReturn' | 'ReturnFeesCustomerResponsibility';\n  };\n}\n\n/**\n * Individual review structured data\n * @see https://schema.org/Review\n */\nexport interface ProductReview {\n  /** Reviewer name */\n  author: string;\n  /** Review date (ISO 8601) */\n  datePublished: string;\n  /** Review body text */\n  reviewBody?: string;\n  /** Review rating */\n  reviewRating: {\n    ratingValue: number;\n    bestRating?: number;\n    worstRating?: number;\n  };\n}\n\n/**\n * Product aggregate rating for schema\n * @see https://schema.org/AggregateRating\n */\nexport interface ProductAggregateRating {\n  /** Average rating value (required) */\n  ratingValue: number;\n  /** Best possible rating (default: 5) */\n  bestRating?: number;\n  /** Worst possible rating (default: 1) */\n  worstRating?: number;\n  /** Number of ratings */\n  ratingCount?: number;\n  /** Number of reviews (required if no ratingCount) */\n  reviewCount?: number;\n}\n\n/**\n * Product structured data\n * Enhanced to support Google Rich Results for products\n * @see https://developers.google.com/search/docs/appearance/structured-data/product\n */\nexport interface ProductSchema {\n  type: 'Product';\n  /** Product name (required) */\n  name: string;\n  /** Product description */\n  description?: string;\n  /** Product image URL(s) - at least one image is required for rich results */\n  image?: string | string[];\n  /** Product brand */\n  brand?: string;\n  /** Product SKU (Stock Keeping Unit) */\n  sku?: string;\n  /** Global Trade Item Number (GTIN - generic, auto-detected length) */\n  gtin?: string;\n  /** GTIN-8 (8-digit) */\n  gtin8?: string;\n  /** GTIN-12/UPC (12-digit) */\n  gtin12?: string;\n  /** GTIN-13/EAN (13-digit) */\n  gtin13?: string;\n  /** GTIN-14 (14-digit) */\n  gtin14?: string;\n  /** Manufacturer Part Number */\n  mpn?: string;\n  /** Product model */\n  model?: string;\n  /** Product color */\n  color?: string;\n  /** Product material */\n  material?: string;\n  /** Product size */\n  size?: string;\n  /** Product category */\n  category?: string;\n  /** Product URL */\n  url?: string;\n  /** Item condition for the product */\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  /** Price and availability (can be single offer or array for variants) */\n  offers?: ProductOffer | ProductOffer[];\n  /** Aggregate rating from all reviews */\n  aggregateRating?: ProductAggregateRating;\n  /** Individual product reviews */\n  review?: ProductReview | ProductReview[];\n}\n\n// ============================================================================\n// End of Product Schema Types\n// ============================================================================\n\n/**\n * Breadcrumb structured data\n */"
}
There seems to be a file modification issue. Let me try a different approach - write the complete file:

🔧 Tool: Bash
Input: {
  "command": "cat \"C:/Users/James/Repos/retail-business/src/types/seo.ts\"",
  "description": "Read seo.ts file contents"
}

🔧 Tool: Write
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/types/seo.ts",
  "content": "/**\n * SEO Component TypeScript Types\n * Provides type definitions for all SEO-related metadata\n */\n\n/**\n * Standard meta tag configuration\n */\nexport interface MetaTags {\n  /** Page title - will be combined with site name using titleTemplate */\n  title: string;\n  /** Meta description for search engines (recommended: 150-160 characters) */\n  description: string;\n  /** Meta keywords (comma-separated, optional as modern SEO relies less on this) */\n  keywords?: string;\n  /** Robots directive (e.g., 'index, follow', 'noindex, nofollow') */\n  robots?: string;\n  /** Author of the content */\n  author?: string;\n}\n\n/**\n * Open Graph metadata for social sharing (Facebook, LinkedIn, etc.)\n */\nexport interface OpenGraphTags {\n  /** og:title - Title for social sharing (defaults to meta title) */\n  title?: string;\n  /** og:description - Description for social sharing (defaults to meta description) */\n  description?: string;\n  /** og:image - Image URL for social sharing (must be absolute URL) */\n  image?: string;\n  /** og:image:alt - Alt text for the og:image */\n  imageAlt?: string;\n  /** og:image:width - Width of the og:image in pixels */\n  imageWidth?: number;\n  /** og:image:height - Height of the og:image in pixels */\n  imageHeight?: number;\n  /** og:url - Canonical URL for the page */\n  url?: string;\n  /** og:type - Type of content (website, article, product, etc.) */\n  type?: 'website' | 'article' | 'product' | 'profile' | 'book' | 'music.song' | 'music.album' | 'video.movie' | 'video.episode';\n  /** og:site_name - Name of the website */\n  siteName?: string;\n  /** og:locale - Locale in format language_TERRITORY (e.g., 'en_US') */\n  locale?: string;\n  /** og:locale:alternate - Array of alternate locales */\n  localeAlternate?: string[];\n}\n\n/**\n * Twitter Card metadata\n */\nexport interface TwitterTags {\n  /** twitter:card - Card type (summary, summary_large_image, app, player) */\n  card?: 'summary' | 'summary_large_image' | 'app' | 'player';\n  /** twitter:site - @username of the website */\n  site?: string;\n  /** twitter:creator - @username of content creator */\n  creator?: string;\n  /** twitter:title - Title for Twitter (defaults to og:title or meta title) */\n  title?: string;\n  /** twitter:description - Description for Twitter (defaults to og:description or meta description) */\n  description?: string;\n  /** twitter:image - Image URL for Twitter (defaults to og:image) */\n  image?: string;\n  /** twitter:image:alt - Alt text for the twitter:image */\n  imageAlt?: string;\n}\n\n/**\n * Language and locale configuration for international SEO\n */\nexport interface LanguageConfig {\n  /** HTML lang attribute (e.g., 'en', 'es', 'fr') */\n  lang?: string;\n  /** hreflang alternate language versions */\n  alternateLanguages?: Array<{\n    /** Language code (e.g., 'en', 'es', 'x-default') */\n    hreflang: string;\n    /** URL of the alternate version */\n    href: string;\n  }>;\n}\n\n/**\n * Article-specific structured data\n */\nexport interface ArticleSchema {\n  type: 'Article' | 'NewsArticle' | 'BlogPosting';\n  /** Article headline */\n  headline: string;\n  /** Article description */\n  description?: string;\n  /** Author name or array of author names */\n  author: string | string[];\n  /** Date the article was published (ISO 8601) */\n  datePublished: string;\n  /** Date the article was last modified (ISO 8601) */\n  dateModified?: string;\n  /** Featured image URL */\n  image?: string | string[];\n  /** Publisher information */\n  publisher?: {\n    name: string;\n    logo?: string;\n  };\n  /** Article section/category */\n  articleSection?: string;\n  /** Word count */\n  wordCount?: number;\n}\n\n// ============================================================================\n// LocalBusiness Schema Types (Enhanced for Local SEO)\n// ============================================================================\n\n/** Opening hours specification for LocalBusiness */\nexport interface OpeningHoursSpecification {\n  dayOfWeek: DayOfWeek | DayOfWeek[];\n  opens: string;\n  closes: string;\n  validFrom?: string;\n  validThrough?: string;\n}\n\n/** Days of the week for opening hours */\nexport type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday' | 'PublicHolidays';\n\n/** Geographic coordinates */\nexport interface GeoCoordinates {\n  latitude: number;\n  longitude: number;\n}\n\n/** Service area definition */\nexport interface ServiceArea {\n  type: 'GeoCircle' | 'PostalCode' | 'City' | 'State' | 'AdministrativeArea';\n  geoMidpoint?: GeoCoordinates;\n  geoRadius?: number;\n  name?: string;\n  addressLocality?: string;\n  addressRegion?: string;\n  postalCode?: string | string[];\n  addressCountry?: string;\n}\n\n/** Aggregate rating for reviews */\nexport interface AggregateRating {\n  ratingValue: number;\n  bestRating?: number;\n  worstRating?: number;\n  ratingCount?: number;\n  reviewCount?: number;\n}\n\n/** Price range indicator */\nexport type PriceRange = '$' | '$$' | '$$$' | '$$$$' | string;\n\n/** LocalBusiness subtypes */\nexport type LocalBusinessType =\n  | 'LocalBusiness' | 'ProfessionalService' | 'Store' | 'Restaurant'\n  | 'MedicalBusiness' | 'FinancialService' | 'LegalService' | 'RealEstateAgent'\n  | 'TravelAgency' | 'AutoRepair' | 'HealthAndBeautyBusiness'\n  | 'HomeAndConstructionBusiness' | 'InternetCafe' | 'SportsActivityLocation'\n  | 'EntertainmentBusiness' | 'FoodEstablishment' | 'LodgingBusiness';\n\n/** Complete postal address */\nexport interface PostalAddress {\n  streetAddress?: string;\n  addressLocality?: string;\n  addressRegion?: string;\n  postalCode?: string;\n  addressCountry?: string;\n}\n\n/** Contact point with extended options */\nexport interface ContactPoint {\n  telephone?: string;\n  email?: string;\n  contactType?: string;\n  availableLanguage?: string | string[];\n  contactOption?: string | string[];\n  areaServed?: string | string[];\n  hoursAvailable?: OpeningHoursSpecification[];\n}\n\n/** Special announcement (e.g., COVID-19 updates) */\nexport interface SpecialAnnouncement {\n  name: string;\n  text: string;\n  datePosted: string;\n  expires?: string;\n  category?: string;\n  url?: string;\n}\n\n/** Organization structured data (basic) */\nexport interface OrganizationSchema {\n  type: 'Organization';\n  name: string;\n  description?: string;\n  url?: string;\n  logo?: string;\n  contactPoint?: ContactPoint;\n  sameAs?: string[];\n  address?: PostalAddress;\n}\n\n/** LocalBusiness structured data (comprehensive for local SEO) */\nexport interface LocalBusinessSchema {\n  type: LocalBusinessType;\n  name: string;\n  alternateName?: string;\n  description?: string;\n  url?: string;\n  logo?: string;\n  image?: string | string[];\n  telephone?: string;\n  faxNumber?: string;\n  email?: string;\n  contactPoint?: ContactPoint | ContactPoint[];\n  sameAs?: string[];\n  address?: PostalAddress;\n  geo?: GeoCoordinates;\n  areaServed?: ServiceArea | ServiceArea[] | string | string[];\n  openingHoursSpecification?: OpeningHoursSpecification[];\n  openingHours?: string | string[];\n  priceRange?: PriceRange;\n  currenciesAccepted?: string;\n  paymentAccepted?: string | string[];\n  aggregateRating?: AggregateRating;\n  foundingDate?: string;\n  founder?: string | string[];\n  numberOfEmployees?: number | { minValue: number; maxValue: number };\n  taxID?: string;\n  vatID?: string;\n  duns?: string;\n  naics?: string;\n  isicV4?: string;\n  legalName?: string;\n  slogan?: string;\n  specialAnnouncement?: SpecialAnnouncement;\n  hasDriveThroughService?: boolean;\n  hasMenu?: string;\n  acceptsReservations?: boolean;\n  makesOffer?: string[];\n  knowsAbout?: string[];\n  knowsLanguage?: string | string[];\n  parentOrganization?: { name: string; url?: string; };\n  identifier?: { type: string; value: string; }[];\n}\n\n// ============================================================================\n// End of LocalBusiness Schema Types\n// ============================================================================\n\n// ============================================================================\n// Product Schema Types (Enhanced for Google Rich Results)\n// ============================================================================\n\n/**\n * Product offer structured data (Schema.org Offer)\n * Represents pricing and availability information\n * @see https://schema.org/Offer\n */\nexport interface ProductOffer {\n  /** Current price (required for rich results) */\n  price: number;\n  /** Currency code (ISO 4217, e.g., 'USD', 'EUR') */\n  priceCurrency: string;\n  /** Availability status */\n  availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'BackOrder' | 'Discontinued' | 'SoldOut' | 'LimitedAvailability' | 'OnlineOnly' | 'InStoreOnly';\n  /** URL for this specific offer */\n  url?: string;\n  /** Date the price becomes valid (ISO 8601) */\n  validFrom?: string;\n  /** Date the price is valid until (ISO 8601) - Required for offers with sale prices */\n  priceValidUntil?: string;\n  /** Item condition */\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  /** Seller information */\n  seller?: {\n    name: string;\n    url?: string;\n  };\n  /** Shipping details */\n  shippingDetails?: {\n    shippingRate?: {\n      value: number;\n      currency: string;\n    };\n    shippingDestination?: string;\n    deliveryTime?: {\n      minDays: number;\n      maxDays: number;\n    };\n  };\n  /** Return policy information */\n  hasMerchantReturnPolicy?: {\n    returnPolicyCategory?: 'MerchantReturnFiniteReturnWindow' | 'MerchantReturnNotPermitted' | 'MerchantReturnUnlimitedWindow';\n    merchantReturnDays?: number;\n    returnMethod?: 'ReturnByMail' | 'ReturnAtKiosk' | 'ReturnInStore';\n    returnFees?: 'FreeReturn' | 'ReturnFeesCustomerResponsibility';\n  };\n}\n\n/**\n * Individual review structured data\n * @see https://schema.org/Review\n */\nexport interface ProductReview {\n  /** Reviewer name */\n  author: string;\n  /** Review date (ISO 8601) */\n  datePublished: string;\n  /** Review body text */\n  reviewBody?: string;\n  /** Review rating */\n  reviewRating: {\n    ratingValue: number;\n    bestRating?: number;\n    worstRating?: number;\n  };\n}\n\n/**\n * Product aggregate rating for schema\n * @see https://schema.org/AggregateRating\n */\nexport interface ProductAggregateRating {\n  /** Average rating value (required) */\n  ratingValue: number;\n  /** Best possible rating (default: 5) */\n  bestRating?: number;\n  /** Worst possible rating (default: 1) */\n  worstRating?: number;\n  /** Number of ratings */\n  ratingCount?: number;\n  /** Number of reviews (required if no ratingCount) */\n  reviewCount?: number;\n}\n\n/**\n * Product structured data\n * Enhanced to support Google Rich Results for products\n * @see https://developers.google.com/search/docs/appearance/structured-data/product\n */\nexport interface ProductSchema {\n  type: 'Product';\n  /** Product name (required) */\n  name: string;\n  /** Product description */\n  description?: string;\n  /** Product image URL(s) - at least one image is required for rich results */\n  image?: string | string[];\n  /** Product brand */\n  brand?: string;\n  /** Product SKU (Stock Keeping Unit) */\n  sku?: string;\n  /** Global Trade Item Number (GTIN - generic, auto-detected length) */\n  gtin?: string;\n  /** GTIN-8 (8-digit) */\n  gtin8?: string;\n  /** GTIN-12/UPC (12-digit) */\n  gtin12?: string;\n  /** GTIN-13/EAN (13-digit) */\n  gtin13?: string;\n  /** GTIN-14 (14-digit) */\n  gtin14?: string;\n  /** Manufacturer Part Number */\n  mpn?: string;\n  /** Product model */\n  model?: string;\n  /** Product color */\n  color?: string;\n  /** Product material */\n  material?: string;\n  /** Product size */\n  size?: string;\n  /** Product category */\n  category?: string;\n  /** Product URL */\n  url?: string;\n  /** Item condition for the product */\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  /** Price and availability (can be single offer or array for variants) */\n  offers?: ProductOffer | ProductOffer[];\n  /** Aggregate rating from all reviews */\n  aggregateRating?: ProductAggregateRating;\n  /** Individual product reviews */\n  review?: ProductReview | ProductReview[];\n}\n\n// ============================================================================\n// End of Product Schema Types\n// ============================================================================\n\n/**\n * Breadcrumb structured data\n */\nexport interface BreadcrumbSchema {\n  type: 'BreadcrumbList';\n  /** Array of breadcrumb items in order */\n  items: Array<{\n    /** Display name of the breadcrumb */\n    name: string;\n    /** URL of the breadcrumb (optional for last item) */\n    url?: string;\n  }>;\n}\n\n/**\n * WebPage structured data\n */\nexport interface WebPageSchema {\n  type: 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage' | 'CollectionPage';\n  /** Page name */\n  name: string;\n  /** Page description */\n  description?: string;\n  /** Page URL */\n  url?: string;\n  /** Last reviewed date */\n  lastReviewed?: string;\n  /** Primary image */\n  primaryImageOfPage?: string;\n}\n\n/**\n * Union type for all supported JSON-LD schema types\n */\nexport type JsonLdSchema =\n  | ArticleSchema\n  | OrganizationSchema\n  | LocalBusinessSchema\n  | ProductSchema\n  | BreadcrumbSchema\n  | WebPageSchema;\n\n/**\n * Custom meta tag definition\n */\nexport interface CustomMetaTag {\n  /** Meta tag name attribute (mutually exclusive with property and httpEquiv) */\n  name?: string;\n  /** Meta tag property attribute (for Open Graph) */\n  property?: string;\n  /** Meta tag http-equiv attribute */\n  httpEquiv?: string;\n  /** Meta tag content */\n  content: string;\n}\n\n/**\n * Main SEO component props\n */\nexport interface SEOProps {\n  // === Required Props ===\n  /** Page title (required) */\n  title: string;\n  /** Meta description (required, recommended: 150-160 characters) */\n  description: string;\n\n  // === Optional Standard Meta Tags ===\n  /** Meta keywords (comma-separated) */\n  keywords?: string;\n  /** Robots directive */\n  robots?: string;\n  /** Content author */\n  author?: string;\n\n  // === URL Configuration ===\n  /** Canonical URL for the page */\n  canonicalUrl?: string;\n  /** Base URL for the site (used to make image URLs absolute) */\n  siteUrl?: string;\n\n  // === Open Graph Configuration ===\n  /** Open Graph tags configuration */\n  openGraph?: OpenGraphTags;\n\n  // === Twitter Configuration ===\n  /** Twitter Card tags configuration */\n  twitter?: TwitterTags;\n\n  // === Structured Data ===\n  /** JSON-LD structured data schema(s) */\n  jsonLd?: JsonLdSchema | JsonLdSchema[];\n\n  // === Language & Locale ===\n  /** HTML lang attribute */\n  lang?: string;\n  /** Alternate language versions for hreflang */\n  alternateLanguages?: LanguageConfig['alternateLanguages'];\n\n  // === Title Configuration ===\n  /** Title template (use %s as placeholder for title) */\n  titleTemplate?: string;\n  /** Whether to disable the title template for this page */\n  noTitleTemplate?: boolean;\n\n  // === Image Configuration ===\n  /** Default/fallback image for social sharing */\n  image?: string;\n  /** Alt text for the default image */\n  imageAlt?: string;\n\n  // === Additional Configuration ===\n  /** Custom additional meta tags */\n  additionalMetaTags?: CustomMetaTag[];\n  /** Additional link tags */\n  additionalLinkTags?: Array<{\n    rel: string;\n    href: string;\n    hreflang?: string;\n    type?: string;\n    sizes?: string;\n  }>;\n\n  // === Charset & Viewport (usually use defaults) ===\n  /** Charset (default: 'UTF-8') */\n  charset?: string;\n  /** Viewport content (default: 'width=device-width, initial-scale=1') */\n  viewport?: string;\n\n  // === Theme & App Configuration ===\n  /** Theme color for browsers */\n  themeColor?: string;\n  /** Apple mobile web app title */\n  appleMobileWebAppTitle?: string;\n  /** Application name */\n  applicationName?: string;\n}\n\n/**\n * Site-wide SEO defaults configuration\n */\nexport interface SEOConfig {\n  /** Site name used in title template and og:site_name */\n  siteName: string;\n  /** Base URL of the site */\n  siteUrl: string;\n  /** Default title template */\n  titleTemplate: string;\n  /** Default meta description */\n  defaultDescription: string;\n  /** Default language */\n  defaultLang: string;\n  /** Default locale for Open Graph */\n  defaultLocale: string;\n  /** Default image for social sharing */\n  defaultImage: string;\n  /** Default image alt text */\n  defaultImageAlt: string;\n  /** Twitter @username for the site */\n  twitterSite?: string;\n  /** Default Twitter card type */\n  twitterCardType: TwitterTags['card'];\n  /** Default Open Graph type */\n  defaultOgType: OpenGraphTags['type'];\n  /** Default robots directive */\n  defaultRobots: string;\n  /** Theme color */\n  themeColor?: string;\n  /** LocalBusiness information for structured data */\n  localBusiness?: LocalBusinessSchema;\n  /** Organization information for structured data (legacy, prefer localBusiness) */\n  organization?: OrganizationSchema | LocalBusinessSchema;\n}\n"
}

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/types/seo.ts"
}

🔧 Tool: Write
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/types/seo.ts",
  "content": "/**\n * SEO Component TypeScript Types\n * Provides type definitions for all SEO-related metadata\n */\n\n/**\n * Standard meta tag configuration\n */\nexport interface MetaTags {\n  /** Page title - will be combined with site name using titleTemplate */\n  title: string;\n  /** Meta description for search engines (recommended: 150-160 characters) */\n  description: string;\n  /** Meta keywords (comma-separated, optional as modern SEO relies less on this) */\n  keywords?: string;\n  /** Robots directive (e.g., 'index, follow', 'noindex, nofollow') */\n  robots?: string;\n  /** Author of the content */\n  author?: string;\n}\n\n/**\n * Open Graph metadata for social sharing (Facebook, LinkedIn, etc.)\n */\nexport interface OpenGraphTags {\n  /** og:title - Title for social sharing (defaults to meta title) */\n  title?: string;\n  /** og:description - Description for social sharing (defaults to meta description) */\n  description?: string;\n  /** og:image - Image URL for social sharing (must be absolute URL) */\n  image?: string;\n  /** og:image:alt - Alt text for the og:image */\n  imageAlt?: string;\n  /** og:image:width - Width of the og:image in pixels */\n  imageWidth?: number;\n  /** og:image:height - Height of the og:image in pixels */\n  imageHeight?: number;\n  /** og:url - Canonical URL for the page */\n  url?: string;\n  /** og:type - Type of content (website, article, product, etc.) */\n  type?: 'website' | 'article' | 'product' | 'profile' | 'book' | 'music.song' | 'music.album' | 'video.movie' | 'video.episode';\n  /** og:site_name - Name of the website */\n  siteName?: string;\n  /** og:locale - Locale in format language_TERRITORY (e.g., 'en_US') */\n  locale?: string;\n  /** og:locale:alternate - Array of alternate locales */\n  localeAlternate?: string[];\n}\n\n/**\n * Twitter Card metadata\n */\nexport interface TwitterTags {\n  /** twitter:card - Card type (summary, summary_large_image, app, player) */\n  card?: 'summary' | 'summary_large_image' | 'app' | 'player';\n  /** twitter:site - @username of the website */\n  site?: string;\n  /** twitter:creator - @username of content creator */\n  creator?: string;\n  /** twitter:title - Title for Twitter (defaults to og:title or meta title) */\n  title?: string;\n  /** twitter:description - Description for Twitter (defaults to og:description or meta description) */\n  description?: string;\n  /** twitter:image - Image URL for Twitter (defaults to og:image) */\n  image?: string;\n  /** twitter:image:alt - Alt text for the twitter:image */\n  imageAlt?: string;\n}\n\n/**\n * Language and locale configuration for international SEO\n */\nexport interface LanguageConfig {\n  /** HTML lang attribute (e.g., 'en', 'es', 'fr') */\n  lang?: string;\n  /** hreflang alternate language versions */\n  alternateLanguages?: Array<{\n    /** Language code (e.g., 'en', 'es', 'x-default') */\n    hreflang: string;\n    /** URL of the alternate version */\n    href: string;\n  }>;\n}\n\n/**\n * Article-specific structured data\n */\nexport interface ArticleSchema {\n  type: 'Article' | 'NewsArticle' | 'BlogPosting';\n  /** Article headline */\n  headline: string;\n  /** Article description */\n  description?: string;\n  /** Author name or array of author names */\n  author: string | string[];\n  /** Date the article was published (ISO 8601) */\n  datePublished: string;\n  /** Date the article was last modified (ISO 8601) */\n  dateModified?: string;\n  /** Featured image URL */\n  image?: string | string[];\n  /** Publisher information */\n  publisher?: {\n    name: string;\n    logo?: string;\n  };\n  /** Article section/category */\n  articleSection?: string;\n  /** Word count */\n  wordCount?: number;\n}\n\n// ============================================================================\n// LocalBusiness Schema Types (Enhanced for Local SEO)\n// ============================================================================\n\n/** Opening hours specification for LocalBusiness */\nexport interface OpeningHoursSpecification {\n  dayOfWeek: DayOfWeek | DayOfWeek[];\n  opens: string;\n  closes: string;\n  validFrom?: string;\n  validThrough?: string;\n}\n\n/** Days of the week for opening hours */\nexport type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday' | 'PublicHolidays';\n\n/** Geographic coordinates */\nexport interface GeoCoordinates {\n  latitude: number;\n  longitude: number;\n}\n\n/** Service area definition */\nexport interface ServiceArea {\n  type: 'GeoCircle' | 'PostalCode' | 'City' | 'State' | 'AdministrativeArea';\n  geoMidpoint?: GeoCoordinates;\n  geoRadius?: number;\n  name?: string;\n  addressLocality?: string;\n  addressRegion?: string;\n  postalCode?: string | string[];\n  addressCountry?: string;\n}\n\n/** Aggregate rating for reviews */\nexport interface AggregateRating {\n  ratingValue: number;\n  bestRating?: number;\n  worstRating?: number;\n  ratingCount?: number;\n  reviewCount?: number;\n}\n\n/** Price range indicator */\nexport type PriceRange = '$' | '$$' | '$$$' | '$$$$' | string;\n\n/** LocalBusiness subtypes */\nexport type LocalBusinessType =\n  | 'LocalBusiness' | 'ProfessionalService' | 'Store' | 'Restaurant'\n  | 'MedicalBusiness' | 'FinancialService' | 'LegalService' | 'RealEstateAgent'\n  | 'TravelAgency' | 'AutoRepair' | 'HealthAndBeautyBusiness'\n  | 'HomeAndConstructionBusiness' | 'InternetCafe' | 'SportsActivityLocation'\n  | 'EntertainmentBusiness' | 'FoodEstablishment' | 'LodgingBusiness';\n\n/** Complete postal address */\nexport interface PostalAddress {\n  streetAddress?: string;\n  addressLocality?: string;\n  addressRegion?: string;\n  postalCode?: string;\n  addressCountry?: string;\n}\n\n/** Contact point with extended options */\nexport interface ContactPoint {\n  telephone?: string;\n  email?: string;\n  contactType?: string;\n  availableLanguage?: string | string[];\n  contactOption?: string | string[];\n  areaServed?: string | string[];\n  hoursAvailable?: OpeningHoursSpecification[];\n}\n\n/** Special announcement (e.g., COVID-19 updates) */\nexport interface SpecialAnnouncement {\n  name: string;\n  text: string;\n  datePosted: string;\n  expires?: string;\n  category?: string;\n  url?: string;\n}\n\n/** Organization structured data (basic) */\nexport interface OrganizationSchema {\n  type: 'Organization';\n  name: string;\n  description?: string;\n  url?: string;\n  logo?: string;\n  contactPoint?: ContactPoint;\n  sameAs?: string[];\n  address?: PostalAddress;\n}\n\n/** LocalBusiness structured data (comprehensive for local SEO) */\nexport interface LocalBusinessSchema {\n  type: LocalBusinessType;\n  name: string;\n  alternateName?: string;\n  description?: string;\n  url?: string;\n  logo?: string;\n  image?: string | string[];\n  telephone?: string;\n  faxNumber?: string;\n  email?: string;\n  contactPoint?: ContactPoint | ContactPoint[];\n  sameAs?: string[];\n  address?: PostalAddress;\n  geo?: GeoCoordinates;\n  areaServed?: ServiceArea | ServiceArea[] | string | string[];\n  openingHoursSpecification?: OpeningHoursSpecification[];\n  openingHours?: string | string[];\n  priceRange?: PriceRange;\n  currenciesAccepted?: string;\n  paymentAccepted?: string | string[];\n  aggregateRating?: AggregateRating;\n  foundingDate?: string;\n  founder?: string | string[];\n  numberOfEmployees?: number | { minValue: number; maxValue: number };\n  taxID?: string;\n  vatID?: string;\n  duns?: string;\n  naics?: string;\n  isicV4?: string;\n  legalName?: string;\n  slogan?: string;\n  specialAnnouncement?: SpecialAnnouncement;\n  hasDriveThroughService?: boolean;\n  hasMenu?: string;\n  acceptsReservations?: boolean;\n  makesOffer?: string[];\n  knowsAbout?: string[];\n  knowsLanguage?: string | string[];\n  parentOrganization?: { name: string; url?: string; };\n  identifier?: { type: string; value: string; }[];\n}\n\n// ============================================================================\n// End of LocalBusiness Schema Types\n// ============================================================================\n\n// ============================================================================\n// Product Schema Types (Enhanced for Google Rich Results)\n// ============================================================================\n\n/**\n * Product offer structured data (Schema.org Offer)\n * Represents pricing and availability information\n * @see https://schema.org/Offer\n */\nexport interface ProductOffer {\n  /** Current price (required for rich results) */\n  price: number;\n  /** Currency code (ISO 4217, e.g., 'USD', 'EUR') */\n  priceCurrency: string;\n  /** Availability status */\n  availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'BackOrder' | 'Discontinued' | 'SoldOut' | 'LimitedAvailability' | 'OnlineOnly' | 'InStoreOnly';\n  /** URL for this specific offer */\n  url?: string;\n  /** Date the price becomes valid (ISO 8601) */\n  validFrom?: string;\n  /** Date the price is valid until (ISO 8601) - Required for offers with sale prices */\n  priceValidUntil?: string;\n  /** Item condition */\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  /** Seller information */\n  seller?: {\n    name: string;\n    url?: string;\n  };\n  /** Shipping details */\n  shippingDetails?: {\n    shippingRate?: {\n      value: number;\n      currency: string;\n    };\n    shippingDestination?: string;\n    deliveryTime?: {\n      minDays: number;\n      maxDays: number;\n    };\n  };\n  /** Return policy information */\n  hasMerchantReturnPolicy?: {\n    returnPolicyCategory?: 'MerchantReturnFiniteReturnWindow' | 'MerchantReturnNotPermitted' | 'MerchantReturnUnlimitedWindow';\n    merchantReturnDays?: number;\n    returnMethod?: 'ReturnByMail' | 'ReturnAtKiosk' | 'ReturnInStore';\n    returnFees?: 'FreeReturn' | 'ReturnFeesCustomerResponsibility';\n  };\n}\n\n/**\n * Individual review structured data\n * @see https://schema.org/Review\n */\nexport interface ProductReview {\n  /** Reviewer name */\n  author: string;\n  /** Review date (ISO 8601) */\n  datePublished: string;\n  /** Review body text */\n  reviewBody?: string;\n  /** Review rating */\n  reviewRating: {\n    ratingValue: number;\n    bestRating?: number;\n    worstRating?: number;\n  };\n}\n\n/**\n * Product aggregate rating for schema\n * @see https://schema.org/AggregateRating\n */\nexport interface ProductAggregateRating {\n  /** Average rating value (required) */\n  ratingValue: number;\n  /** Best possible rating (default: 5) */\n  bestRating?: number;\n  /** Worst possible rating (default: 1) */\n  worstRating?: number;\n  /** Number of ratings */\n  ratingCount?: number;\n  /** Number of reviews (required if no ratingCount) */\n  reviewCount?: number;\n}\n\n/**\n * Product structured data\n * Enhanced to support Google Rich Results for products\n * @see https://developers.google.com/search/docs/appearance/structured-data/product\n */\nexport interface ProductSchema {\n  type: 'Product';\n  /** Product name (required) */\n  name: string;\n  /** Product description */\n  description?: string;\n  /** Product image URL(s) - at least one image is required for rich results */\n  image?: string | string[];\n  /** Product brand */\n  brand?: string;\n  /** Product SKU (Stock Keeping Unit) */\n  sku?: string;\n  /** Global Trade Item Number (GTIN - generic, auto-detected length) */\n  gtin?: string;\n  /** GTIN-8 (8-digit) */\n  gtin8?: string;\n  /** GTIN-12/UPC (12-digit) */\n  gtin12?: string;\n  /** GTIN-13/EAN (13-digit) */\n  gtin13?: string;\n  /** GTIN-14 (14-digit) */\n  gtin14?: string;\n  /** Manufacturer Part Number */\n  mpn?: string;\n  /** Product model */\n  model?: string;\n  /** Product color */\n  color?: string;\n  /** Product material */\n  material?: string;\n  /** Product size */\n  size?: string;\n  /** Product category */\n  category?: string;\n  /** Product URL */\n  url?: string;\n  /** Item condition for the product */\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  /** Price and availability (can be single offer or array for variants) */\n  offers?: ProductOffer | ProductOffer[];\n  /** Aggregate rating from all reviews */\n  aggregateRating?: ProductAggregateRating;\n  /** Individual product reviews */\n  review?: ProductReview | ProductReview[];\n}\n\n// ============================================================================\n// End of Product Schema Types\n// ============================================================================\n\n/**\n * Breadcrumb structured data\n */\nexport interface BreadcrumbSchema {\n  type: 'BreadcrumbList';\n  /** Array of breadcrumb items in order */\n  items: Array<{\n    /** Display name of the breadcrumb */\n    name: string;\n    /** URL of the breadcrumb (optional for last item) */\n    url?: string;\n  }>;\n}\n\n/**\n * WebPage structured data\n */\nexport interface WebPageSchema {\n  type: 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage' | 'CollectionPage';\n  /** Page name */\n  name: string;\n  /** Page description */\n  description?: string;\n  /** Page URL */\n  url?: string;\n  /** Last reviewed date */\n  lastReviewed?: string;\n  /** Primary image */\n  primaryImageOfPage?: string;\n}\n\n/**\n * Union type for all supported JSON-LD schema types\n */\nexport type JsonLdSchema =\n  | ArticleSchema\n  | OrganizationSchema\n  | LocalBusinessSchema\n  | ProductSchema\n  | BreadcrumbSchema\n  | WebPageSchema;\n\n/**\n * Custom meta tag definition\n */\nexport interface CustomMetaTag {\n  /** Meta tag name attribute (mutually exclusive with property and httpEquiv) */\n  name?: string;\n  /** Meta tag property attribute (for Open Graph) */\n  property?: string;\n  /** Meta tag http-equiv attribute */\n  httpEquiv?: string;\n  /** Meta tag content */\n  content: string;\n}\n\n/**\n * Main SEO component props\n */\nexport interface SEOProps {\n  // === Required Props ===\n  /** Page title (required) */\n  title: string;\n  /** Meta description (required, recommended: 150-160 characters) */\n  description: string;\n\n  // === Optional Standard Meta Tags ===\n  /** Meta keywords (comma-separated) */\n  keywords?: string;\n  /** Robots directive */\n  robots?: string;\n  /** Content author */\n  author?: string;\n\n  // === URL Configuration ===\n  /** Canonical URL for the page */\n  canonicalUrl?: string;\n  /** Base URL for the site (used to make image URLs absolute) */\n  siteUrl?: string;\n\n  // === Open Graph Configuration ===\n  /** Open Graph tags configuration */\n  openGraph?: OpenGraphTags;\n\n  // === Twitter Configuration ===\n  /** Twitter Card tags configuration */\n  twitter?: TwitterTags;\n\n  // === Structured Data ===\n  /** JSON-LD structured data schema(s) */\n  jsonLd?: JsonLdSchema | JsonLdSchema[];\n\n  // === Language & Locale ===\n  /** HTML lang attribute */\n  lang?: string;\n  /** Alternate language versions for hreflang */\n  alternateLanguages?: LanguageConfig['alternateLanguages'];\n\n  // === Title Configuration ===\n  /** Title template (use %s as placeholder for title) */\n  titleTemplate?: string;\n  /** Whether to disable the title template for this page */\n  noTitleTemplate?: boolean;\n\n  // === Image Configuration ===\n  /** Default/fallback image for social sharing */\n  image?: string;\n  /** Alt text for the default image */\n  imageAlt?: string;\n\n  // === Additional Configuration ===\n  /** Custom additional meta tags */\n  additionalMetaTags?: CustomMetaTag[];\n  /** Additional link tags */\n  additionalLinkTags?: Array<{\n    rel: string;\n    href: string;\n    hreflang?: string;\n    type?: string;\n    sizes?: string;\n  }>;\n\n  // === Charset & Viewport (usually use defaults) ===\n  /** Charset (default: 'UTF-8') */\n  charset?: string;\n  /** Viewport content (default: 'width=device-width, initial-scale=1') */\n  viewport?: string;\n\n  // === Theme & App Configuration ===\n  /** Theme color for browsers */\n  themeColor?: string;\n  /** Apple mobile web app title */\n  appleMobileWebAppTitle?: string;\n  /** Application name */\n  applicationName?: string;\n}\n\n/**\n * Site-wide SEO defaults configuration\n */\nexport interface SEOConfig {\n  /** Site name used in title template and og:site_name */\n  siteName: string;\n  /** Base URL of the site */\n  siteUrl: string;\n  /** Default title template */\n  titleTemplate: string;\n  /** Default meta description */\n  defaultDescription: string;\n  /** Default language */\n  defaultLang: string;\n  /** Default locale for Open Graph */\n  defaultLocale: string;\n  /** Default image for social sharing */\n  defaultImage: string;\n  /** Default image alt text */\n  defaultImageAlt: string;\n  /** Twitter @username for the site */\n  twitterSite?: string;\n  /** Default Twitter card type */\n  twitterCardType: TwitterTags['card'];\n  /** Default Open Graph type */\n  defaultOgType: OpenGraphTags['type'];\n  /** Default robots directive */\n  defaultRobots: string;\n  /** Theme color */\n  themeColor?: string;\n  /** LocalBusiness information for structured data */\n  localBusiness?: LocalBusinessSchema;\n  /** Organization information for structured data (legacy, prefer localBusiness) */\n  organization?: OrganizationSchema | LocalBusinessSchema;\n}\n"
}

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/types/seo.ts"
}

🔧 Tool: Write
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/types/seo.ts",
  "content": "/**\n * SEO Component TypeScript Types\n * Provides type definitions for all SEO-related metadata\n */\n\n/**\n * Standard meta tag configuration\n */\nexport interface MetaTags {\n  /** Page title - will be combined with site name using titleTemplate */\n  title: string;\n  /** Meta description for search engines (recommended: 150-160 characters) */\n  description: string;\n  /** Meta keywords (comma-separated, optional as modern SEO relies less on this) */\n  keywords?: string;\n  /** Robots directive (e.g., 'index, follow', 'noindex, nofollow') */\n  robots?: string;\n  /** Author of the content */\n  author?: string;\n}\n\n/**\n * Open Graph metadata for social sharing (Facebook, LinkedIn, etc.)\n */\nexport interface OpenGraphTags {\n  /** og:title - Title for social sharing (defaults to meta title) */\n  title?: string;\n  /** og:description - Description for social sharing (defaults to meta description) */\n  description?: string;\n  /** og:image - Image URL for social sharing (must be absolute URL) */\n  image?: string;\n  /** og:image:alt - Alt text for the og:image */\n  imageAlt?: string;\n  /** og:image:width - Width of the og:image in pixels */\n  imageWidth?: number;\n  /** og:image:height - Height of the og:image in pixels */\n  imageHeight?: number;\n  /** og:url - Canonical URL for the page */\n  url?: string;\n  /** og:type - Type of content (website, article, product, etc.) */\n  type?: 'website' | 'article' | 'product' | 'profile' | 'book' | 'music.song' | 'music.album' | 'video.movie' | 'video.episode';\n  /** og:site_name - Name of the website */\n  siteName?: string;\n  /** og:locale - Locale in format language_TERRITORY (e.g., 'en_US') */\n  locale?: string;\n  /** og:locale:alternate - Array of alternate locales */\n  localeAlternate?: string[];\n}\n\n/**\n * Twitter Card metadata\n */\nexport interface TwitterTags {\n  /** twitter:card - Card type (summary, summary_large_image, app, player) */\n  card?: 'summary' | 'summary_large_image' | 'app' | 'player';\n  /** twitter:site - @username of the website */\n  site?: string;\n  /** twitter:creator - @username of content creator */\n  creator?: string;\n  /** twitter:title - Title for Twitter (defaults to og:title or meta title) */\n  title?: string;\n  /** twitter:description - Description for Twitter (defaults to og:description or meta description) */\n  description?: string;\n  /** twitter:image - Image URL for Twitter (defaults to og:image) */\n  image?: string;\n  /** twitter:image:alt - Alt text for the twitter:image */\n  imageAlt?: string;\n}\n\n/**\n * Language and locale configuration for international SEO\n */\nexport interface LanguageConfig {\n  /** HTML lang attribute (e.g., 'en', 'es', 'fr') */\n  lang?: string;\n  /** hreflang alternate language versions */\n  alternateLanguages?: Array<{\n    /** Language code (e.g., 'en', 'es', 'x-default') */\n    hreflang: string;\n    /** URL of the alternate version */\n    href: string;\n  }>;\n}\n\n/**\n * Article-specific structured data\n */\nexport interface ArticleSchema {\n  type: 'Article' | 'NewsArticle' | 'BlogPosting';\n  /** Article headline */\n  headline: string;\n  /** Article description */\n  description?: string;\n  /** Author name or array of author names */\n  author: string | string[];\n  /** Date the article was published (ISO 8601) */\n  datePublished: string;\n  /** Date the article was last modified (ISO 8601) */\n  dateModified?: string;\n  /** Featured image URL */\n  image?: string | string[];\n  /** Publisher information */\n  publisher?: {\n    name: string;\n    logo?: string;\n  };\n  /** Article section/category */\n  articleSection?: string;\n  /** Word count */\n  wordCount?: number;\n}\n\n// ============================================================================\n// LocalBusiness Schema Types (Enhanced for Local SEO)\n// ============================================================================\n\n/** Opening hours specification for LocalBusiness */\nexport interface OpeningHoursSpecification {\n  dayOfWeek: DayOfWeek | DayOfWeek[];\n  opens: string;\n  closes: string;\n  validFrom?: string;\n  validThrough?: string;\n}\n\n/** Days of the week for opening hours */\nexport type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday' | 'PublicHolidays';\n\n/** Geographic coordinates */\nexport interface GeoCoordinates {\n  latitude: number;\n  longitude: number;\n}\n\n/** Service area definition */\nexport interface ServiceArea {\n  type: 'GeoCircle' | 'PostalCode' | 'City' | 'State' | 'AdministrativeArea';\n  geoMidpoint?: GeoCoordinates;\n  geoRadius?: number;\n  name?: string;\n  addressLocality?: string;\n  addressRegion?: string;\n  postalCode?: string | string[];\n  addressCountry?: string;\n}\n\n/** Aggregate rating for reviews */\nexport interface AggregateRating {\n  ratingValue: number;\n  bestRating?: number;\n  worstRating?: number;\n  ratingCount?: number;\n  reviewCount?: number;\n}\n\n/** Price range indicator */\nexport type PriceRange = '$' | '$$' | '$$$' | '$$$$' | string;\n\n/** LocalBusiness subtypes */\nexport type LocalBusinessType =\n  | 'LocalBusiness' | 'ProfessionalService' | 'Store' | 'Restaurant'\n  | 'MedicalBusiness' | 'FinancialService' | 'LegalService' | 'RealEstateAgent'\n  | 'TravelAgency' | 'AutoRepair' | 'HealthAndBeautyBusiness'\n  | 'HomeAndConstructionBusiness' | 'InternetCafe' | 'SportsActivityLocation'\n  | 'EntertainmentBusiness' | 'FoodEstablishment' | 'LodgingBusiness';\n\n/** Complete postal address */\nexport interface PostalAddress {\n  streetAddress?: string;\n  addressLocality?: string;\n  addressRegion?: string;\n  postalCode?: string;\n  addressCountry?: string;\n}\n\n/** Contact point with extended options */\nexport interface ContactPoint {\n  telephone?: string;\n  email?: string;\n  contactType?: string;\n  availableLanguage?: string | string[];\n  contactOption?: string | string[];\n  areaServed?: string | string[];\n  hoursAvailable?: OpeningHoursSpecification[];\n}\n\n/** Special announcement (e.g., COVID-19 updates) */\nexport interface SpecialAnnouncement {\n  name: string;\n  text: string;\n  datePosted: string;\n  expires?: string;\n  category?: string;\n  url?: string;\n}\n\n/** Organization structured data (basic) */\nexport interface OrganizationSchema {\n  type: 'Organization';\n  name: string;\n  description?: string;\n  url?: string;\n  logo?: string;\n  contactPoint?: ContactPoint;\n  sameAs?: string[];\n  address?: PostalAddress;\n}\n\n/** LocalBusiness structured data (comprehensive for local SEO) */\nexport interface LocalBusinessSchema {\n  type: LocalBusinessType;\n  name: string;\n  alternateName?: string;\n  description?: string;\n  url?: string;\n  logo?: string;\n  image?: string | string[];\n  telephone?: string;\n  faxNumber?: string;\n  email?: string;\n  contactPoint?: ContactPoint | ContactPoint[];\n  sameAs?: string[];\n  address?: PostalAddress;\n  geo?: GeoCoordinates;\n  areaServed?: ServiceArea | ServiceArea[] | string | string[];\n  openingHoursSpecification?: OpeningHoursSpecification[];\n  openingHours?: string | string[];\n  priceRange?: PriceRange;\n  currenciesAccepted?: string;\n  paymentAccepted?: string | string[];\n  aggregateRating?: AggregateRating;\n  foundingDate?: string;\n  founder?: string | string[];\n  numberOfEmployees?: number | { minValue: number; maxValue: number };\n  taxID?: string;\n  vatID?: string;\n  duns?: string;\n  naics?: string;\n  isicV4?: string;\n  legalName?: string;\n  slogan?: string;\n  specialAnnouncement?: SpecialAnnouncement;\n  hasDriveThroughService?: boolean;\n  hasMenu?: string;\n  acceptsReservations?: boolean;\n  makesOffer?: string[];\n  knowsAbout?: string[];\n  knowsLanguage?: string | string[];\n  parentOrganization?: { name: string; url?: string; };\n  identifier?: { type: string; value: string; }[];\n}\n\n// ============================================================================\n// End of LocalBusiness Schema Types\n// ============================================================================\n\n// ============================================================================\n// Product Schema Types (Enhanced for Google Rich Results)\n// ============================================================================\n\n/**\n * Product offer structured data (Schema.org Offer)\n * Represents pricing and availability information\n * @see https://schema.org/Offer\n */\nexport interface ProductOffer {\n  /** Current price (required for rich results) */\n  price: number;\n  /** Currency code (ISO 4217, e.g., 'USD', 'EUR') */\n  priceCurrency: string;\n  /** Availability status */\n  availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'BackOrder' | 'Discontinued' | 'SoldOut' | 'LimitedAvailability' | 'OnlineOnly' | 'InStoreOnly';\n  /** URL for this specific offer */\n  url?: string;\n  /** Date the price becomes valid (ISO 8601) */\n  validFrom?: string;\n  /** Date the price is valid until (ISO 8601) - Required for offers with sale prices */\n  priceValidUntil?: string;\n  /** Item condition */\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  /** Seller information */\n  seller?: {\n    name: string;\n    url?: string;\n  };\n  /** Shipping details */\n  shippingDetails?: {\n    shippingRate?: {\n      value: number;\n      currency: string;\n    };\n    shippingDestination?: string;\n    deliveryTime?: {\n      minDays: number;\n      maxDays: number;\n    };\n  };\n  /** Return policy information */\n  hasMerchantReturnPolicy?: {\n    returnPolicyCategory?: 'MerchantReturnFiniteReturnWindow' | 'MerchantReturnNotPermitted' | 'MerchantReturnUnlimitedWindow';\n    merchantReturnDays?: number;\n    returnMethod?: 'ReturnByMail' | 'ReturnAtKiosk' | 'ReturnInStore';\n    returnFees?: 'FreeReturn' | 'ReturnFeesCustomerResponsibility';\n  };\n}\n\n/**\n * Individual review structured data\n * @see https://schema.org/Review\n */\nexport interface ProductReview {\n  /** Reviewer name */\n  author: string;\n  /** Review date (ISO 8601) */\n  datePublished: string;\n  /** Review body text */\n  reviewBody?: string;\n  /** Review rating */\n  reviewRating: {\n    ratingValue: number;\n    bestRating?: number;\n    worstRating?: number;\n  };\n}\n\n/**\n * Product aggregate rating for schema\n * @see https://schema.org/AggregateRating\n */\nexport interface ProductAggregateRating {\n  /** Average rating value (required) */\n  ratingValue: number;\n  /** Best possible rating (default: 5) */\n  bestRating?: number;\n  /** Worst possible rating (default: 1) */\n  worstRating?: number;\n  /** Number of ratings */\n  ratingCount?: number;\n  /** Number of reviews (required if no ratingCount) */\n  reviewCount?: number;\n}\n\n/**\n * Product structured data\n * Enhanced to support Google Rich Results for products\n * @see https://developers.google.com/search/docs/appearance/structured-data/product\n */\nexport interface ProductSchema {\n  type: 'Product';\n  /** Product name (required) */\n  name: string;\n  /** Product description */\n  description?: string;\n  /** Product image URL(s) - at least one image is required for rich results */\n  image?: string | string[];\n  /** Product brand */\n  brand?: string;\n  /** Product SKU (Stock Keeping Unit) */\n  sku?: string;\n  /** Global Trade Item Number (GTIN - generic, auto-detected length) */\n  gtin?: string;\n  /** GTIN-8 (8-digit) */\n  gtin8?: string;\n  /** GTIN-12/UPC (12-digit) */\n  gtin12?: string;\n  /** GTIN-13/EAN (13-digit) */\n  gtin13?: string;\n  /** GTIN-14 (14-digit) */\n  gtin14?: string;\n  /** Manufacturer Part Number */\n  mpn?: string;\n  /** Product model */\n  model?: string;\n  /** Product color */\n  color?: string;\n  /** Product material */\n  material?: string;\n  /** Product size */\n  size?: string;\n  /** Product category */\n  category?: string;\n  /** Product URL */\n  url?: string;\n  /** Item condition for the product */\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  /** Price and availability (can be single offer or array for variants) */\n  offers?: ProductOffer | ProductOffer[];\n  /** Aggregate rating from all reviews */\n  aggregateRating?: ProductAggregateRating;\n  /** Individual product reviews */\n  review?: ProductReview | ProductReview[];\n}\n\n// ============================================================================\n// End of Product Schema Types\n// ============================================================================\n\n/**\n * Breadcrumb structured data\n */\nexport interface BreadcrumbSchema {\n  type: 'BreadcrumbList';\n  /** Array of breadcrumb items in order */\n  items: Array<{\n    /** Display name of the breadcrumb */\n    name: string;\n    /** URL of the breadcrumb (optional for last item) */\n    url?: string;\n  }>;\n}\n\n/**\n * WebPage structured data\n */\nexport interface WebPageSchema {\n  type: 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage' | 'CollectionPage';\n  /** Page name */\n  name: string;\n  /** Page description */\n  description?: string;\n  /** Page URL */\n  url?: string;\n  /** Last reviewed date */\n  lastReviewed?: string;\n  /** Primary image */\n  primaryImageOfPage?: string;\n}\n\n/**\n * Union type for all supported JSON-LD schema types\n */\nexport type JsonLdSchema =\n  | ArticleSchema\n  | OrganizationSchema\n  | LocalBusinessSchema\n  | ProductSchema\n  | BreadcrumbSchema\n  | WebPageSchema;\n\n/**\n * Custom meta tag definition\n */\nexport interface CustomMetaTag {\n  /** Meta tag name attribute (mutually exclusive with property and httpEquiv) */\n  name?: string;\n  /** Meta tag property attribute (for Open Graph) */\n  property?: string;\n  /** Meta tag http-equiv attribute */\n  httpEquiv?: string;\n  /** Meta tag content */\n  content: string;\n}\n\n/**\n * Main SEO component props\n */\nexport interface SEOProps {\n  // === Required Props ===\n  /** Page title (required) */\n  title: string;\n  /** Meta description (required, recommended: 150-160 characters) */\n  description: string;\n\n  // === Optional Standard Meta Tags ===\n  /** Meta keywords (comma-separated) */\n  keywords?: string;\n  /** Robots directive */\n  robots?: string;\n  /** Content author */\n  author?: string;\n\n  // === URL Configuration ===\n  /** Canonical URL for the page */\n  canonicalUrl?: string;\n  /** Base URL for the site (used to make image URLs absolute) */\n  siteUrl?: string;\n\n  // === Open Graph Configuration ===\n  /** Open Graph tags configuration */\n  openGraph?: OpenGraphTags;\n\n  // === Twitter Configuration ===\n  /** Twitter Card tags configuration */\n  twitter?: TwitterTags;\n\n  // === Structured Data ===\n  /** JSON-LD structured data schema(s) */\n  jsonLd?: JsonLdSchema | JsonLdSchema[];\n\n  // === Language & Locale ===\n  /** HTML lang attribute */\n  lang?: string;\n  /** Alternate language versions for hreflang */\n  alternateLanguages?: LanguageConfig['alternateLanguages'];\n\n  // === Title Configuration ===\n  /** Title template (use %s as placeholder for title) */\n  titleTemplate?: string;\n  /** Whether to disable the title template for this page */\n  noTitleTemplate?: boolean;\n\n  // === Image Configuration ===\n  /** Default/fallback image for social sharing */\n  image?: string;\n  /** Alt text for the default image */\n  imageAlt?: string;\n\n  // === Additional Configuration ===\n  /** Custom additional meta tags */\n  additionalMetaTags?: CustomMetaTag[];\n  /** Additional link tags */\n  additionalLinkTags?: Array<{\n    rel: string;\n    href: string;\n    hreflang?: string;\n    type?: string;\n    sizes?: string;\n  }>;\n\n  // === Charset & Viewport (usually use defaults) ===\n  /** Charset (default: 'UTF-8') */\n  charset?: string;\n  /** Viewport content (default: 'width=device-width, initial-scale=1') */\n  viewport?: string;\n\n  // === Theme & App Configuration ===\n  /** Theme color for browsers */\n  themeColor?: string;\n  /** Apple mobile web app title */\n  appleMobileWebAppTitle?: string;\n  /** Application name */\n  applicationName?: string;\n}\n\n/**\n * Site-wide SEO defaults configuration\n */\nexport interface SEOConfig {\n  /** Site name used in title template and og:site_name */\n  siteName: string;\n  /** Base URL of the site */\n  siteUrl: string;\n  /** Default title template */\n  titleTemplate: string;\n  /** Default meta description */\n  defaultDescription: string;\n  /** Default language */\n  defaultLang: string;\n  /** Default locale for Open Graph */\n  defaultLocale: string;\n  /** Default image for social sharing */\n  defaultImage: string;\n  /** Default image alt text */\n  defaultImageAlt: string;\n  /** Twitter @username for the site */\n  twitterSite?: string;\n  /** Default Twitter card type */\n  twitterCardType: TwitterTags['card'];\n  /** Default Open Graph type */\n  defaultOgType: OpenGraphTags['type'];\n  /** Default robots directive */\n  defaultRobots: string;\n  /** Theme color */\n  themeColor?: string;\n  /** LocalBusiness information for structured data */\n  localBusiness?: LocalBusinessSchema;\n  /** Organization information for structured data (legacy, prefer localBusiness) */\n  organization?: OrganizationSchema | LocalBusinessSchema;\n}\n"
}
Let me try using the Edit tool to make the change in smaller increments:

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/types/seo.ts",
  "offset": 253,
  "limit": 40
}

🔧 Tool: Edit
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/types/seo.ts",
  "old_string": "// ============================================================================\n// End of LocalBusiness Schema Types\n// ============================================================================\n\n/**\n * Product structured data\n */\nexport interface ProductSchema {\n  type: 'Product';\n  /** Product name */\n  name: string;\n  /** Product description */\n  description?: string;\n  /** Product image URL(s) */\n  image?: string | string[];\n  /** Product brand */\n  brand?: string;\n  /** Product SKU */\n  sku?: string;\n  /** Price and availability */\n  offers?: {\n    price: number;\n    priceCurrency: string;\n    availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'Discontinued';\n    url?: string;\n    validFrom?: string;\n    priceValidUntil?: string;\n  };\n  /** Aggregate rating */\n  aggregateRating?: {\n    ratingValue: number;\n    reviewCount: number;\n  };\n}\n\n/**\n * Breadcrumb structured data\n */",
  "new_string": "// ============================================================================\n// End of LocalBusiness Schema Types\n// ============================================================================\n\n// ============================================================================\n// Product Schema Types (Enhanced for Google Rich Results)\n// ============================================================================\n\n/**\n * Product offer structured data (Schema.org Offer)\n * Represents pricing and availability information\n * @see https://schema.org/Offer\n */\nexport interface ProductOffer {\n  /** Current price (required for rich results) */\n  price: number;\n  /** Currency code (ISO 4217, e.g., 'USD', 'EUR') */\n  priceCurrency: string;\n  /** Availability status */\n  availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'BackOrder' | 'Discontinued' | 'SoldOut' | 'LimitedAvailability' | 'OnlineOnly' | 'InStoreOnly';\n  /** URL for this specific offer */\n  url?: string;\n  /** Date the price becomes valid (ISO 8601) */\n  validFrom?: string;\n  /** Date the price is valid until (ISO 8601) - Required for offers with sale prices */\n  priceValidUntil?: string;\n  /** Item condition */\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  /** Seller information */\n  seller?: {\n    name: string;\n    url?: string;\n  };\n  /** Shipping details */\n  shippingDetails?: {\n    shippingRate?: {\n      value: number;\n      currency: string;\n    };\n    shippingDestination?: string;\n    deliveryTime?: {\n      minDays: number;\n      maxDays: number;\n    };\n  };\n  /** Return policy information */\n  hasMerchantReturnPolicy?: {\n    returnPolicyCategory?: 'MerchantReturnFiniteReturnWindow' | 'MerchantReturnNotPermitted' | 'MerchantReturnUnlimitedWindow';\n    merchantReturnDays?: number;\n    returnMethod?: 'ReturnByMail' | 'ReturnAtKiosk' | 'ReturnInStore';\n    returnFees?: 'FreeReturn' | 'ReturnFeesCustomerResponsibility';\n  };\n}\n\n/**\n * Individual review structured data\n * @see https://schema.org/Review\n */\nexport interface ProductReview {\n  /** Reviewer name */\n  author: string;\n  /** Review date (ISO 8601) */\n  datePublished: string;\n  /** Review body text */\n  reviewBody?: string;\n  /** Review rating */\n  reviewRating: {\n    ratingValue: number;\n    bestRating?: number;\n    worstRating?: number;\n  };\n}\n\n/**\n * Product aggregate rating for schema\n * @see https://schema.org/AggregateRating\n */\nexport interface ProductAggregateRating {\n  /** Average rating value (required) */\n  ratingValue: number;\n  /** Best possible rating (default: 5) */\n  bestRating?: number;\n  /** Worst possible rating (default: 1) */\n  worstRating?: number;\n  /** Number of ratings */\n  ratingCount?: number;\n  /** Number of reviews (required if no ratingCount) */\n  reviewCount?: number;\n}\n\n/**\n * Product structured data\n * Enhanced to support Google Rich Results for products\n * @see https://developers.google.com/search/docs/appearance/structured-data/product\n */\nexport interface ProductSchema {\n  type: 'Product';\n  /** Product name (required) */\n  name: string;\n  /** Product description */\n  description?: string;\n  /** Product image URL(s) - at least one image is required for rich results */\n  image?: string | string[];\n  /** Product brand */\n  brand?: string;\n  /** Product SKU (Stock Keeping Unit) */\n  sku?: string;\n  /** Global Trade Item Number (GTIN - generic, auto-detected length) */\n  gtin?: string;\n  /** GTIN-8 (8-digit) */\n  gtin8?: string;\n  /** GTIN-12/UPC (12-digit) */\n  gtin12?: string;\n  /** GTIN-13/EAN (13-digit) */\n  gtin13?: string;\n  /** GTIN-14 (14-digit) */\n  gtin14?: string;\n  /** Manufacturer Part Number */\n  mpn?: string;\n  /** Product model */\n  model?: string;\n  /** Product color */\n  color?: string;\n  /** Product material */\n  material?: string;\n  /** Product size */\n  size?: string;\n  /** Product category */\n  category?: string;\n  /** Product URL */\n  url?: string;\n  /** Item condition for the product */\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  /** Price and availability (can be single offer or array for variants) */\n  offers?: ProductOffer | ProductOffer[];\n  /** Aggregate rating from all reviews */\n  aggregateRating?: ProductAggregateRating;\n  /** Individual product reviews */\n  review?: ProductReview | ProductReview[];\n}\n\n// ============================================================================\n// End of Product Schema Types\n// ============================================================================\n\n/**\n * Breadcrumb structured data\n */"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:/Users/James/Repos/retail-business\" && git checkout src/types/seo.ts",
  "description": "Reset seo.ts to clean state"
}

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/types/seo.ts",
  "offset": 250,
  "limit": 45
}

🔧 Tool: Edit
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/types/seo.ts",
  "old_string": "// ============================================================================\n// End of LocalBusiness Schema Types\n// ============================================================================\n\n/**\n * Product structured data\n */\nexport interface ProductSchema {\n  type: 'Product';\n  /** Product name */\n  name: string;\n  /** Product description */\n  description?: string;\n  /** Product image URL(s) */\n  image?: string | string[];\n  /** Product brand */\n  brand?: string;\n  /** Product SKU */\n  sku?: string;\n  /** Price and availability */\n  offers?: {\n    price: number;\n    priceCurrency: string;\n    availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'Discontinued';\n    url?: string;\n    validFrom?: string;\n    priceValidUntil?: string;\n  };\n  /** Aggregate rating */\n  aggregateRating?: {\n    ratingValue: number;\n    reviewCount: number;\n  };\n}\n\n/**\n * Breadcrumb structured data\n */\nexport interface BreadcrumbSchema {",
  "new_string": "// ============================================================================\n// End of LocalBusiness Schema Types\n// ============================================================================\n\n// ============================================================================\n// Product Schema Types (Enhanced for Google Rich Results)\n// ============================================================================\n\n/**\n * Product offer structured data (Schema.org Offer)\n * Represents pricing and availability information\n * @see https://schema.org/Offer\n */\nexport interface ProductOffer {\n  /** Current price (required for rich results) */\n  price: number;\n  /** Currency code (ISO 4217, e.g., 'USD', 'EUR') */\n  priceCurrency: string;\n  /** Availability status */\n  availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'BackOrder' | 'Discontinued' | 'SoldOut' | 'LimitedAvailability' | 'OnlineOnly' | 'InStoreOnly';\n  /** URL for this specific offer */\n  url?: string;\n  /** Date the price becomes valid (ISO 8601) */\n  validFrom?: string;\n  /** Date the price is valid until (ISO 8601) - Required for offers with sale prices */\n  priceValidUntil?: string;\n  /** Item condition */\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  /** Seller information */\n  seller?: {\n    name: string;\n    url?: string;\n  };\n  /** Shipping details */\n  shippingDetails?: {\n    shippingRate?: {\n      value: number;\n      currency: string;\n    };\n    shippingDestination?: string;\n    deliveryTime?: {\n      minDays: number;\n      maxDays: number;\n    };\n  };\n  /** Return policy information */\n  hasMerchantReturnPolicy?: {\n    returnPolicyCategory?: 'MerchantReturnFiniteReturnWindow' | 'MerchantReturnNotPermitted' | 'MerchantReturnUnlimitedWindow';\n    merchantReturnDays?: number;\n    returnMethod?: 'ReturnByMail' | 'ReturnAtKiosk' | 'ReturnInStore';\n    returnFees?: 'FreeReturn' | 'ReturnFeesCustomerResponsibility';\n  };\n}\n\n/**\n * Individual review structured data\n * @see https://schema.org/Review\n */\nexport interface ProductReview {\n  /** Reviewer name */\n  author: string;\n  /** Review date (ISO 8601) */\n  datePublished: string;\n  /** Review body text */\n  reviewBody?: string;\n  /** Review rating */\n  reviewRating: {\n    ratingValue: number;\n    bestRating?: number;\n    worstRating?: number;\n  };\n}\n\n/**\n * Product aggregate rating for schema\n * @see https://schema.org/AggregateRating\n */\nexport interface ProductAggregateRating {\n  /** Average rating value (required) */\n  ratingValue: number;\n  /** Best possible rating (default: 5) */\n  bestRating?: number;\n  /** Worst possible rating (default: 1) */\n  worstRating?: number;\n  /** Number of ratings */\n  ratingCount?: number;\n  /** Number of reviews (required if no ratingCount) */\n  reviewCount?: number;\n}\n\n/**\n * Product structured data\n * Enhanced to support Google Rich Results for products\n * @see https://developers.google.com/search/docs/appearance/structured-data/product\n */\nexport interface ProductSchema {\n  type: 'Product';\n  /** Product name (required) */\n  name: string;\n  /** Product description */\n  description?: string;\n  /** Product image URL(s) - at least one image is required for rich results */\n  image?: string | string[];\n  /** Product brand */\n  brand?: string;\n  /** Product SKU (Stock Keeping Unit) */\n  sku?: string;\n  /** Global Trade Item Number (GTIN - generic, auto-detected length) */\n  gtin?: string;\n  /** GTIN-8 (8-digit) */\n  gtin8?: string;\n  /** GTIN-12/UPC (12-digit) */\n  gtin12?: string;\n  /** GTIN-13/EAN (13-digit) */\n  gtin13?: string;\n  /** GTIN-14 (14-digit) */\n  gtin14?: string;\n  /** Manufacturer Part Number */\n  mpn?: string;\n  /** Product model */\n  model?: string;\n  /** Product color */\n  color?: string;\n  /** Product material */\n  material?: string;\n  /** Product size */\n  size?: string;\n  /** Product category */\n  category?: string;\n  /** Product URL */\n  url?: string;\n  /** Item condition for the product */\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  /** Price and availability (can be single offer or array for variants) */\n  offers?: ProductOffer | ProductOffer[];\n  /** Aggregate rating from all reviews */\n  aggregateRating?: ProductAggregateRating;\n  /** Individual product reviews */\n  review?: ProductReview | ProductReview[];\n}\n\n// ============================================================================\n// End of Product Schema Types\n// ============================================================================\n\n/**\n * Breadcrumb structured data\n */\nexport interface BreadcrumbSchema {"
}

🔧 Tool: Bash
Input: {
  "command": "cat \"C:/Users/James/Repos/retail-business/src/types/seo.ts\" | sed -n '253,290p'",
  "description": "Read seo.ts lines 253-290"
}
Let me read the file, then immediately write:

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/types/seo.ts"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/types/seo.ts",
  "old_string": "/**\n * Product structured data\n */\nexport interface ProductSchema {\n  type: 'Product';\n  /** Product name */\n  name: string;\n  /** Product description */\n  description?: string;\n  /** Product image URL(s) */\n  image?: string | string[];\n  /** Product brand */\n  brand?: string;\n  /** Product SKU */\n  sku?: string;\n  /** Price and availability */\n  offers?: {\n    price: number;\n    priceCurrency: string;\n    availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'Discontinued';\n    url?: string;\n    validFrom?: string;\n    priceValidUntil?: string;\n  };\n  /** Aggregate rating */\n  aggregateRating?: {\n    ratingValue: number;\n    reviewCount: number;\n  };\n}",
  "new_string": "// ============================================================================\n// Product Schema Types (Enhanced for Google Rich Results)\n// ============================================================================\n\n/**\n * Product offer structured data (Schema.org Offer)\n * @see https://schema.org/Offer\n */\nexport interface ProductOffer {\n  price: number;\n  priceCurrency: string;\n  availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'BackOrder' | 'Discontinued' | 'SoldOut' | 'LimitedAvailability' | 'OnlineOnly' | 'InStoreOnly';\n  url?: string;\n  validFrom?: string;\n  priceValidUntil?: string;\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  seller?: { name: string; url?: string; };\n}\n\n/**\n * Individual review structured data\n * @see https://schema.org/Review\n */\nexport interface ProductReview {\n  author: string;\n  datePublished: string;\n  reviewBody?: string;\n  reviewRating: { ratingValue: number; bestRating?: number; worstRating?: number; };\n}\n\n/**\n * Product aggregate rating for schema\n * @see https://schema.org/AggregateRating\n */\nexport interface ProductAggregateRating {\n  ratingValue: number;\n  bestRating?: number;\n  worstRating?: number;\n  ratingCount?: number;\n  reviewCount?: number;\n}\n\n/**\n * Product structured data - Enhanced for Google Rich Results\n * @see https://developers.google.com/search/docs/appearance/structured-data/product\n */\nexport interface ProductSchema {\n  type: 'Product';\n  name: string;\n  description?: string;\n  image?: string | string[];\n  brand?: string;\n  sku?: string;\n  gtin?: string;\n  gtin8?: string;\n  gtin12?: string;\n  gtin13?: string;\n  gtin14?: string;\n  mpn?: string;\n  model?: string;\n  color?: string;\n  material?: string;\n  size?: string;\n  category?: string;\n  url?: string;\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  offers?: ProductOffer | ProductOffer[];\n  aggregateRating?: ProductAggregateRating;\n  review?: ProductReview | ProductReview[];\n}\n\n// ============================================================================\n// End of Product Schema Types\n// ============================================================================"
}
There's clearly some ongoing modification issue. Let me try a different approach - write the entire content to the file directly:

🔧 Tool: Bash
Input: {
  "command": "cat > \"C:/Users/James/Repos/retail-business/src/types/seo.ts\" << 'ENDOFFILE'\n/**\n * SEO Component TypeScript Types\n * Provides type definitions for all SEO-related metadata\n */\n\n/**\n * Standard meta tag configuration\n */\nexport interface MetaTags {\n  /** Page title - will be combined with site name using titleTemplate */\n  title: string;\n  /** Meta description for search engines (recommended: 150-160 characters) */\n  description: string;\n  /** Meta keywords (comma-separated, optional as modern SEO relies less on this) */\n  keywords?: string;\n  /** Robots directive (e.g., 'index, follow', 'noindex, nofollow') */\n  robots?: string;\n  /** Author of the content */\n  author?: string;\n}\n\n/**\n * Open Graph metadata for social sharing (Facebook, LinkedIn, etc.)\n */\nexport interface OpenGraphTags {\n  /** og:title - Title for social sharing (defaults to meta title) */\n  title?: string;\n  /** og:description - Description for social sharing (defaults to meta description) */\n  description?: string;\n  /** og:image - Image URL for social sharing (must be absolute URL) */\n  image?: string;\n  /** og:image:alt - Alt text for the og:image */\n  imageAlt?: string;\n  /** og:image:width - Width of the og:image in pixels */\n  imageWidth?: number;\n  /** og:image:height - Height of the og:image in pixels */\n  imageHeight?: number;\n  /** og:url - Canonical URL for the page */\n  url?: string;\n  /** og:type - Type of content (website, article, product, etc.) */\n  type?: 'website' | 'article' | 'product' | 'profile' | 'book' | 'music.song' | 'music.album' | 'video.movie' | 'video.episode';\n  /** og:site_name - Name of the website */\n  siteName?: string;\n  /** og:locale - Locale in format language_TERRITORY (e.g., 'en_US') */\n  locale?: string;\n  /** og:locale:alternate - Array of alternate locales */\n  localeAlternate?: string[];\n}\n\n/**\n * Twitter Card metadata\n */\nexport interface TwitterTags {\n  /** twitter:card - Card type (summary, summary_large_image, app, player) */\n  card?: 'summary' | 'summary_large_image' | 'app' | 'player';\n  /** twitter:site - @username of the website */\n  site?: string;\n  /** twitter:creator - @username of content creator */\n  creator?: string;\n  /** twitter:title - Title for Twitter (defaults to og:title or meta title) */\n  title?: string;\n  /** twitter:description - Description for Twitter (defaults to og:description or meta description) */\n  description?: string;\n  /** twitter:image - Image URL for Twitter (defaults to og:image) */\n  image?: string;\n  /** twitter:image:alt - Alt text for the twitter:image */\n  imageAlt?: string;\n}\n\n/**\n * Language and locale configuration for international SEO\n */\nexport interface LanguageConfig {\n  /** HTML lang attribute (e.g., 'en', 'es', 'fr') */\n  lang?: string;\n  /** hreflang alternate language versions */\n  alternateLanguages?: Array<{\n    /** Language code (e.g., 'en', 'es', 'x-default') */\n    hreflang: string;\n    /** URL of the alternate version */\n    href: string;\n  }>;\n}\n\n/**\n * Article-specific structured data\n */\nexport interface ArticleSchema {\n  type: 'Article' | 'NewsArticle' | 'BlogPosting';\n  /** Article headline */\n  headline: string;\n  /** Article description */\n  description?: string;\n  /** Author name or array of author names */\n  author: string | string[];\n  /** Date the article was published (ISO 8601) */\n  datePublished: string;\n  /** Date the article was last modified (ISO 8601) */\n  dateModified?: string;\n  /** Featured image URL */\n  image?: string | string[];\n  /** Publisher information */\n  publisher?: {\n    name: string;\n    logo?: string;\n  };\n  /** Article section/category */\n  articleSection?: string;\n  /** Word count */\n  wordCount?: number;\n}\n\n// ============================================================================\n// LocalBusiness Schema Types (Enhanced for Local SEO)\n// ============================================================================\n\n/** Opening hours specification for LocalBusiness */\nexport interface OpeningHoursSpecification {\n  dayOfWeek: DayOfWeek | DayOfWeek[];\n  opens: string;\n  closes: string;\n  validFrom?: string;\n  validThrough?: string;\n}\n\n/** Days of the week for opening hours */\nexport type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday' | 'PublicHolidays';\n\n/** Geographic coordinates */\nexport interface GeoCoordinates {\n  latitude: number;\n  longitude: number;\n}\n\n/** Service area definition */\nexport interface ServiceArea {\n  type: 'GeoCircle' | 'PostalCode' | 'City' | 'State' | 'AdministrativeArea';\n  geoMidpoint?: GeoCoordinates;\n  geoRadius?: number;\n  name?: string;\n  addressLocality?: string;\n  addressRegion?: string;\n  postalCode?: string | string[];\n  addressCountry?: string;\n}\n\n/** Aggregate rating for reviews */\nexport interface AggregateRating {\n  ratingValue: number;\n  bestRating?: number;\n  worstRating?: number;\n  ratingCount?: number;\n  reviewCount?: number;\n}\n\n/** Price range indicator */\nexport type PriceRange = '$' | '$$' | '$$$' | '$$$$' | string;\n\n/** LocalBusiness subtypes */\nexport type LocalBusinessType =\n  | 'LocalBusiness' | 'ProfessionalService' | 'Store' | 'Restaurant'\n  | 'MedicalBusiness' | 'FinancialService' | 'LegalService' | 'RealEstateAgent'\n  | 'TravelAgency' | 'AutoRepair' | 'HealthAndBeautyBusiness'\n  | 'HomeAndConstructionBusiness' | 'InternetCafe' | 'SportsActivityLocation'\n  | 'EntertainmentBusiness' | 'FoodEstablishment' | 'LodgingBusiness';\n\n/** Complete postal address */\nexport interface PostalAddress {\n  streetAddress?: string;\n  addressLocality?: string;\n  addressRegion?: string;\n  postalCode?: string;\n  addressCountry?: string;\n}\n\n/** Contact point with extended options */\nexport interface ContactPoint {\n  telephone?: string;\n  email?: string;\n  contactType?: string;\n  availableLanguage?: string | string[];\n  contactOption?: string | string[];\n  areaServed?: string | string[];\n  hoursAvailable?: OpeningHoursSpecification[];\n}\n\n/** Special announcement (e.g., COVID-19 updates) */\nexport interface SpecialAnnouncement {\n  name: string;\n  text: string;\n  datePosted: string;\n  expires?: string;\n  category?: string;\n  url?: string;\n}\n\n/** Organization structured data (basic) */\nexport interface OrganizationSchema {\n  type: 'Organization';\n  name: string;\n  description?: string;\n  url?: string;\n  logo?: string;\n  contactPoint?: ContactPoint;\n  sameAs?: string[];\n  address?: PostalAddress;\n}\n\n/** LocalBusiness structured data (comprehensive for local SEO) */\nexport interface LocalBusinessSchema {\n  type: LocalBusinessType;\n  name: string;\n  alternateName?: string;\n  description?: string;\n  url?: string;\n  logo?: string;\n  image?: string | string[];\n  telephone?: string;\n  faxNumber?: string;\n  email?: string;\n  contactPoint?: ContactPoint | ContactPoint[];\n  sameAs?: string[];\n  address?: PostalAddress;\n  geo?: GeoCoordinates;\n  areaServed?: ServiceArea | ServiceArea[] | string | string[];\n  openingHoursSpecification?: OpeningHoursSpecification[];\n  openingHours?: string | string[];\n  priceRange?: PriceRange;\n  currenciesAccepted?: string;\n  paymentAccepted?: string | string[];\n  aggregateRating?: AggregateRating;\n  foundingDate?: string;\n  founder?: string | string[];\n  numberOfEmployees?: number | { minValue: number; maxValue: number };\n  taxID?: string;\n  vatID?: string;\n  duns?: string;\n  naics?: string;\n  isicV4?: string;\n  legalName?: string;\n  slogan?: string;\n  specialAnnouncement?: SpecialAnnouncement;\n  hasDriveThroughService?: boolean;\n  hasMenu?: string;\n  acceptsReservations?: boolean;\n  makesOffer?: string[];\n  knowsAbout?: string[];\n  knowsLanguage?: string | string[];\n  parentOrganization?: { name: string; url?: string; };\n  identifier?: { type: string; value: string; }[];\n}\n\n// ============================================================================\n// End of LocalBusiness Schema Types\n// ============================================================================\n\n// ============================================================================\n// Product Schema Types (Enhanced for Google Rich Results)\n// ============================================================================\n\n/**\n * Product offer structured data (Schema.org Offer)\n * Represents pricing and availability information\n * @see https://schema.org/Offer\n */\nexport interface ProductOffer {\n  /** Current price (required for rich results) */\n  price: number;\n  /** Currency code (ISO 4217, e.g., 'USD', 'EUR') */\n  priceCurrency: string;\n  /** Availability status */\n  availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'BackOrder' | 'Discontinued' | 'SoldOut' | 'LimitedAvailability' | 'OnlineOnly' | 'InStoreOnly';\n  /** URL for this specific offer */\n  url?: string;\n  /** Date the price becomes valid (ISO 8601) */\n  validFrom?: string;\n  /** Date the price is valid until (ISO 8601) - Required for offers with sale prices */\n  priceValidUntil?: string;\n  /** Item condition */\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  /** Seller information */\n  seller?: {\n    name: string;\n    url?: string;\n  };\n}\n\n/**\n * Individual review structured data\n * @see https://schema.org/Review\n */\nexport interface ProductReview {\n  /** Reviewer name */\n  author: string;\n  /** Review date (ISO 8601) */\n  datePublished: string;\n  /** Review body text */\n  reviewBody?: string;\n  /** Review rating */\n  reviewRating: {\n    ratingValue: number;\n    bestRating?: number;\n    worstRating?: number;\n  };\n}\n\n/**\n * Product aggregate rating for schema\n * @see https://schema.org/AggregateRating\n */\nexport interface ProductAggregateRating {\n  /** Average rating value (required) */\n  ratingValue: number;\n  /** Best possible rating (default: 5) */\n  bestRating?: number;\n  /** Worst possible rating (default: 1) */\n  worstRating?: number;\n  /** Number of ratings */\n  ratingCount?: number;\n  /** Number of reviews (required if no ratingCount) */\n  reviewCount?: number;\n}\n\n/**\n * Product structured data\n * Enhanced to support Google Rich Results for products\n * @see https://developers.google.com/search/docs/appearance/structured-data/product\n */\nexport interface ProductSchema {\n  type: 'Product';\n  /** Product name (required) */\n  name: string;\n  /** Product description */\n  description?: string;\n  /** Product image URL(s) - at least one image is required for rich results */\n  image?: string | string[];\n  /** Product brand */\n  brand?: string;\n  /** Product SKU (Stock Keeping Unit) */\n  sku?: string;\n  /** Global Trade Item Number (GTIN - generic, auto-detected length) */\n  gtin?: string;\n  /** GTIN-8 (8-digit) */\n  gtin8?: string;\n  /** GTIN-12/UPC (12-digit) */\n  gtin12?: string;\n  /** GTIN-13/EAN (13-digit) */\n  gtin13?: string;\n  /** GTIN-14 (14-digit) */\n  gtin14?: string;\n  /** Manufacturer Part Number */\n  mpn?: string;\n  /** Product model */\n  model?: string;\n  /** Product color */\n  color?: string;\n  /** Product material */\n  material?: string;\n  /** Product size */\n  size?: string;\n  /** Product category */\n  category?: string;\n  /** Product URL */\n  url?: string;\n  /** Item condition for the product */\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  /** Price and availability (can be single offer or array for variants) */\n  offers?: ProductOffer | ProductOffer[];\n  /** Aggregate rating from all reviews */\n  aggregateRating?: ProductAggregateRating;\n  /** Individual product reviews */\n  review?: ProductReview | ProductReview[];\n}\n\n// ============================================================================\n// End of Product Schema Types\n// ============================================================================\n\n/**\n * Breadcrumb structured data\n */\nexport interface BreadcrumbSchema {\n  type: 'BreadcrumbList';\n  /** Array of breadcrumb items in order */\n  items: Array<{\n    /** Display name of the breadcrumb */\n    name: string;\n    /** URL of the breadcrumb (optional for last item) */\n    url?: string;\n  }>;\n}\n\n/**\n * WebPage structured data\n */\nexport interface WebPageSchema {\n  type: 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage' | 'CollectionPage';\n  /** Page name */\n  name: string;\n  /** Page description */\n  description?: string;\n  /** Page URL */\n  url?: string;\n  /** Last reviewed date */\n  lastReviewed?: string;\n  /** Primary image */\n  primaryImageOfPage?: string;\n}\n\n/**\n * Union type for all supported JSON-LD schema types\n */\nexport type JsonLdSchema =\n  | ArticleSchema\n  | OrganizationSchema\n  | LocalBusinessSchema\n  | ProductSchema\n  | BreadcrumbSchema\n  | WebPageSchema;\n\n/**\n * Custom meta tag definition\n */\nexport interface CustomMetaTag {\n  /** Meta tag name attribute (mutually exclusive with property and httpEquiv) */\n  name?: string;\n  /** Meta tag property attribute (for Open Graph) */\n  property?: string;\n  /** Meta tag http-equiv attribute */\n  httpEquiv?: string;\n  /** Meta tag content */\n  content: string;\n}\n\n/**\n * Main SEO component props\n */\nexport interface SEOProps {\n  // === Required Props ===\n  /** Page title (required) */\n  title: string;\n  /** Meta description (required, recommended: 150-160 characters) */\n  description: string;\n\n  // === Optional Standard Meta Tags ===\n  /** Meta keywords (comma-separated) */\n  keywords?: string;\n  /** Robots directive */\n  robots?: string;\n  /** Content author */\n  author?: string;\n\n  // === URL Configuration ===\n  /** Canonical URL for the page */\n  canonicalUrl?: string;\n  /** Base URL for the site (used to make image URLs absolute) */\n  siteUrl?: string;\n\n  // === Open Graph Configuration ===\n  /** Open Graph tags configuration */\n  openGraph?: OpenGraphTags;\n\n  // === Twitter Configuration ===\n  /** Twitter Card tags configuration */\n  twitter?: TwitterTags;\n\n  // === Structured Data ===\n  /** JSON-LD structured data schema(s) */\n  jsonLd?: JsonLdSchema | JsonLdSchema[];\n\n  // === Language & Locale ===\n  /** HTML lang attribute */\n  lang?: string;\n  /** Alternate language versions for hreflang */\n  alternateLanguages?: LanguageConfig['alternateLanguages'];\n\n  // === Title Configuration ===\n  /** Title template (use %s as placeholder for title) */\n  titleTemplate?: string;\n  /** Whether to disable the title template for this page */\n  noTitleTemplate?: boolean;\n\n  // === Image Configuration ===\n  /** Default/fallback image for social sharing */\n  image?: string;\n  /** Alt text for the default image */\n  imageAlt?: string;\n\n  // === Additional Configuration ===\n  /** Custom additional meta tags */\n  additionalMetaTags?: CustomMetaTag[];\n  /** Additional link tags */\n  additionalLinkTags?: Array<{\n    rel: string;\n    href: string;\n    hreflang?: string;\n    type?: string;\n    sizes?: string;\n  }>;\n\n  // === Charset & Viewport (usually use defaults) ===\n  /** Charset (default: 'UTF-8') */\n  charset?: string;\n  /** Viewport content (default: 'width=device-width, initial-scale=1') */\n  viewport?: string;\n\n  // === Theme & App Configuration ===\n  /** Theme color for browsers */\n  themeColor?: string;\n  /** Apple mobile web app title */\n  appleMobileWebAppTitle?: string;\n  /** Application name */\n  applicationName?: string;\n}\n\n/**\n * Site-wide SEO defaults configuration\n */\nexport interface SEOConfig {\n  /** Site name used in title template and og:site_name */\n  siteName: string;\n  /** Base URL of the site */\n  siteUrl: string;\n  /** Default title template */\n  titleTemplate: string;\n  /** Default meta description */\n  defaultDescription: string;\n  /** Default language */\n  defaultLang: string;\n  /** Default locale for Open Graph */\n  defaultLocale: string;\n  /** Default image for social sharing */\n  defaultImage: string;\n  /** Default image alt text */\n  defaultImageAlt: string;\n  /** Twitter @username for the site */\n  twitterSite?: string;\n  /** Default Twitter card type */\n  twitterCardType: TwitterTags['card'];\n  /** Default Open Graph type */\n  defaultOgType: OpenGraphTags['type'];\n  /** Default robots directive */\n  defaultRobots: string;\n  /** Theme color */\n  themeColor?: string;\n  /** LocalBusiness information for structured data */\n  localBusiness?: LocalBusinessSchema;\n  /** Organization information for structured data (legacy, prefer localBusiness) */\n  organization?: OrganizationSchema | LocalBusinessSchema;\n}\nENDOFFILE",
  "description": "Write enhanced seo.ts types file"
}
Let me use a file-based approach:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:/Users/James/Repos/retail-business\" && node -e \"\nconst fs = require('fs');\nconst content = \\`/**\n * SEO Component TypeScript Types\n * Provides type definitions for all SEO-related metadata\n */\n\n/**\n * Standard meta tag configuration\n */\nexport interface MetaTags {\n  /** Page title - will be combined with site name using titleTemplate */\n  title: string;\n  /** Meta description for search engines (recommended: 150-160 characters) */\n  description: string;\n  /** Meta keywords (comma-separated, optional as modern SEO relies less on this) */\n  keywords?: string;\n  /** Robots directive (e.g., 'index, follow', 'noindex, nofollow') */\n  robots?: string;\n  /** Author of the content */\n  author?: string;\n}\n\n/**\n * Open Graph metadata for social sharing (Facebook, LinkedIn, etc.)\n */\nexport interface OpenGraphTags {\n  /** og:title - Title for social sharing (defaults to meta title) */\n  title?: string;\n  /** og:description - Description for social sharing (defaults to meta description) */\n  description?: string;\n  /** og:image - Image URL for social sharing (must be absolute URL) */\n  image?: string;\n  /** og:image:alt - Alt text for the og:image */\n  imageAlt?: string;\n  /** og:image:width - Width of the og:image in pixels */\n  imageWidth?: number;\n  /** og:image:height - Height of the og:image in pixels */\n  imageHeight?: number;\n  /** og:url - Canonical URL for the page */\n  url?: string;\n  /** og:type - Type of content (website, article, product, etc.) */\n  type?: 'website' | 'article' | 'product' | 'profile' | 'book' | 'music.song' | 'music.album' | 'video.movie' | 'video.episode';\n  /** og:site_name - Name of the website */\n  siteName?: string;\n  /** og:locale - Locale in format language_TERRITORY (e.g., 'en_US') */\n  locale?: string;\n  /** og:locale:alternate - Array of alternate locales */\n  localeAlternate?: string[];\n}\n\n/**\n * Twitter Card metadata\n */\nexport interface TwitterTags {\n  /** twitter:card - Card type (summary, summary_large_image, app, player) */\n  card?: 'summary' | 'summary_large_image' | 'app' | 'player';\n  /** twitter:site - @username of the website */\n  site?: string;\n  /** twitter:creator - @username of content creator */\n  creator?: string;\n  /** twitter:title - Title for Twitter (defaults to og:title or meta title) */\n  title?: string;\n  /** twitter:description - Description for Twitter (defaults to og:description or meta description) */\n  description?: string;\n  /** twitter:image - Image URL for Twitter (defaults to og:image) */\n  image?: string;\n  /** twitter:image:alt - Alt text for the twitter:image */\n  imageAlt?: string;\n}\n\n/**\n * Language and locale configuration for international SEO\n */\nexport interface LanguageConfig {\n  /** HTML lang attribute (e.g., 'en', 'es', 'fr') */\n  lang?: string;\n  /** hreflang alternate language versions */\n  alternateLanguages?: Array<{\n    /** Language code (e.g., 'en', 'es', 'x-default') */\n    hreflang: string;\n    /** URL of the alternate version */\n    href: string;\n  }>;\n}\n\n/**\n * Article-specific structured data\n */\nexport interface ArticleSchema {\n  type: 'Article' | 'NewsArticle' | 'BlogPosting';\n  headline: string;\n  description?: string;\n  author: string | string[];\n  datePublished: string;\n  dateModified?: string;\n  image?: string | string[];\n  publisher?: { name: string; logo?: string; };\n  articleSection?: string;\n  wordCount?: number;\n}\n\n// ============================================================================\n// LocalBusiness Schema Types (Enhanced for Local SEO)\n// ============================================================================\n\nexport interface OpeningHoursSpecification {\n  dayOfWeek: DayOfWeek | DayOfWeek[];\n  opens: string;\n  closes: string;\n  validFrom?: string;\n  validThrough?: string;\n}\n\nexport type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday' | 'PublicHolidays';\n\nexport interface GeoCoordinates {\n  latitude: number;\n  longitude: number;\n}\n\nexport interface ServiceArea {\n  type: 'GeoCircle' | 'PostalCode' | 'City' | 'State' | 'AdministrativeArea';\n  geoMidpoint?: GeoCoordinates;\n  geoRadius?: number;\n  name?: string;\n  addressLocality?: string;\n  addressRegion?: string;\n  postalCode?: string | string[];\n  addressCountry?: string;\n}\n\nexport interface AggregateRating {\n  ratingValue: number;\n  bestRating?: number;\n  worstRating?: number;\n  ratingCount?: number;\n  reviewCount?: number;\n}\n\nexport type PriceRange = '\\$' | '\\$\\$' | '\\$\\$\\$' | '\\$\\$\\$\\$' | string;\n\nexport type LocalBusinessType =\n  | 'LocalBusiness' | 'ProfessionalService' | 'Store' | 'Restaurant'\n  | 'MedicalBusiness' | 'FinancialService' | 'LegalService' | 'RealEstateAgent'\n  | 'TravelAgency' | 'AutoRepair' | 'HealthAndBeautyBusiness'\n  | 'HomeAndConstructionBusiness' | 'InternetCafe' | 'SportsActivityLocation'\n  | 'EntertainmentBusiness' | 'FoodEstablishment' | 'LodgingBusiness';\n\nexport interface PostalAddress {\n  streetAddress?: string;\n  addressLocality?: string;\n  addressRegion?: string;\n  postalCode?: string;\n  addressCountry?: string;\n}\n\nexport interface ContactPoint {\n  telephone?: string;\n  email?: string;\n  contactType?: string;\n  availableLanguage?: string | string[];\n  contactOption?: string | string[];\n  areaServed?: string | string[];\n  hoursAvailable?: OpeningHoursSpecification[];\n}\n\nexport interface SpecialAnnouncement {\n  name: string;\n  text: string;\n  datePosted: string;\n  expires?: string;\n  category?: string;\n  url?: string;\n}\n\nexport interface OrganizationSchema {\n  type: 'Organization';\n  name: string;\n  description?: string;\n  url?: string;\n  logo?: string;\n  contactPoint?: ContactPoint;\n  sameAs?: string[];\n  address?: PostalAddress;\n}\n\nexport interface LocalBusinessSchema {\n  type: LocalBusinessType;\n  name: string;\n  alternateName?: string;\n  description?: string;\n  url?: string;\n  logo?: string;\n  image?: string | string[];\n  telephone?: string;\n  faxNumber?: string;\n  email?: string;\n  contactPoint?: ContactPoint | ContactPoint[];\n  sameAs?: string[];\n  address?: PostalAddress;\n  geo?: GeoCoordinates;\n  areaServed?: ServiceArea | ServiceArea[] | string | string[];\n  openingHoursSpecification?: OpeningHoursSpecification[];\n  openingHours?: string | string[];\n  priceRange?: PriceRange;\n  currenciesAccepted?: string;\n  paymentAccepted?: string | string[];\n  aggregateRating?: AggregateRating;\n  foundingDate?: string;\n  founder?: string | string[];\n  numberOfEmployees?: number | { minValue: number; maxValue: number };\n  taxID?: string;\n  vatID?: string;\n  duns?: string;\n  naics?: string;\n  isicV4?: string;\n  legalName?: string;\n  slogan?: string;\n  specialAnnouncement?: SpecialAnnouncement;\n  hasDriveThroughService?: boolean;\n  hasMenu?: string;\n  acceptsReservations?: boolean;\n  makesOffer?: string[];\n  knowsAbout?: string[];\n  knowsLanguage?: string | string[];\n  parentOrganization?: { name: string; url?: string; };\n  identifier?: { type: string; value: string; }[];\n}\n\n// ============================================================================\n// Product Schema Types (Enhanced for Google Rich Results)\n// ============================================================================\n\n/**\n * Product offer structured data (Schema.org Offer)\n * @see https://schema.org/Offer\n */\nexport interface ProductOffer {\n  price: number;\n  priceCurrency: string;\n  availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'BackOrder' | 'Discontinued' | 'SoldOut' | 'LimitedAvailability' | 'OnlineOnly' | 'InStoreOnly';\n  url?: string;\n  validFrom?: string;\n  priceValidUntil?: string;\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  seller?: { name: string; url?: string; };\n}\n\n/**\n * Individual review structured data\n * @see https://schema.org/Review\n */\nexport interface ProductReview {\n  author: string;\n  datePublished: string;\n  reviewBody?: string;\n  reviewRating: { ratingValue: number; bestRating?: number; worstRating?: number; };\n}\n\n/**\n * Product aggregate rating for schema\n * @see https://schema.org/AggregateRating\n */\nexport interface ProductAggregateRating {\n  ratingValue: number;\n  bestRating?: number;\n  worstRating?: number;\n  ratingCount?: number;\n  reviewCount?: number;\n}\n\n/**\n * Product structured data - Enhanced for Google Rich Results\n * @see https://developers.google.com/search/docs/appearance/structured-data/product\n */\nexport interface ProductSchema {\n  type: 'Product';\n  name: string;\n  description?: string;\n  image?: string | string[];\n  brand?: string;\n  sku?: string;\n  gtin?: string;\n  gtin8?: string;\n  gtin12?: string;\n  gtin13?: string;\n  gtin14?: string;\n  mpn?: string;\n  model?: string;\n  color?: string;\n  material?: string;\n  size?: string;\n  category?: string;\n  url?: string;\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  offers?: ProductOffer | ProductOffer[];\n  aggregateRating?: ProductAggregateRating;\n  review?: ProductReview | ProductReview[];\n}\n\n// ============================================================================\n// End of Product Schema Types\n// ============================================================================\n\nexport interface BreadcrumbSchema {\n  type: 'BreadcrumbList';\n  items: Array<{ name: string; url?: string; }>;\n}\n\nexport interface WebPageSchema {\n  type: 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage' | 'CollectionPage';\n  name: string;\n  description?: string;\n  url?: string;\n  lastReviewed?: string;\n  primaryImageOfPage?: string;\n}\n\nexport type JsonLdSchema =\n  | ArticleSchema\n  | OrganizationSchema\n  | LocalBusinessSchema\n  | ProductSchema\n  | BreadcrumbSchema\n  | WebPageSchema;\n\nexport interface CustomMetaTag {\n  name?: string;\n  property?: string;\n  httpEquiv?: string;\n  content: string;\n}\n\nexport interface SEOProps {\n  title: string;\n  description: string;\n  keywords?: string;\n  robots?: string;\n  author?: string;\n  canonicalUrl?: string;\n  siteUrl?: string;\n  openGraph?: OpenGraphTags;\n  twitter?: TwitterTags;\n  jsonLd?: JsonLdSchema | JsonLdSchema[];\n  lang?: string;\n  alternateLanguages?: LanguageConfig['alternateLanguages'];\n  titleTemplate?: string;\n  noTitleTemplate?: boolean;\n  image?: string;\n  imageAlt?: string;\n  additionalMetaTags?: CustomMetaTag[];\n  additionalLinkTags?: Array<{ rel: string; href: string; hreflang?: string; type?: string; sizes?: string; }>;\n  charset?: string;\n  viewport?: string;\n  themeColor?: string;\n  appleMobileWebAppTitle?: string;\n  applicationName?: string;\n}\n\nexport interface SEOConfig {\n  siteName: string;\n  siteUrl: string;\n  titleTemplate: string;\n  defaultDescription: string;\n  defaultLang: string;\n  defaultLocale: string;\n  defaultImage: string;\n  defaultImageAlt: string;\n  twitterSite?: string;\n  twitterCardType: TwitterTags['card'];\n  defaultOgType: OpenGraphTags['type'];\n  defaultRobots: string;\n  themeColor?: string;\n  localBusiness?: LocalBusinessSchema;\n  organization?: OrganizationSchema | LocalBusinessSchema;\n}\n\\`;\nfs.writeFileSync('src/types/seo.ts', content);\nconsole.log('File written successfully');\n\"",
  "description": "Write seo.ts file using Node.js"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:/Users/James/Repos/retail-business\" && cat src/types/seo.ts | head -5",
  "description": "Check current state of seo.ts"
}
Let me try a simpler approach - make the changes step by step with smaller edits:

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/types/seo.ts",
  "offset": 250,
  "limit": 50
}

🔧 Tool: Edit
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/types/seo.ts",
  "old_string": "// ============================================================================\n// End of LocalBusiness Schema Types\n// ============================================================================\n\n/**\n * Product structured data\n */\nexport interface ProductSchema {\n  type: 'Product';\n  /** Product name */\n  name: string;\n  /** Product description */\n  description?: string;\n  /** Product image URL(s) */\n  image?: string | string[];\n  /** Product brand */\n  brand?: string;\n  /** Product SKU */\n  sku?: string;\n  /** Price and availability */\n  offers?: {\n    price: number;\n    priceCurrency: string;\n    availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'Discontinued';\n    url?: string;\n    validFrom?: string;\n    priceValidUntil?: string;\n  };\n  /** Aggregate rating */\n  aggregateRating?: {\n    ratingValue: number;\n    reviewCount: number;\n  };\n}\n\n/**\n * Breadcrumb structured data\n */",
  "new_string": "// ============================================================================\n// End of LocalBusiness Schema Types\n// ============================================================================\n\n// ============================================================================\n// Product Schema Types (Enhanced for Google Rich Results)\n// ============================================================================\n\n/** Product offer structured data @see https://schema.org/Offer */\nexport interface ProductOffer {\n  price: number;\n  priceCurrency: string;\n  availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'BackOrder' | 'Discontinued' | 'SoldOut' | 'LimitedAvailability' | 'OnlineOnly' | 'InStoreOnly';\n  url?: string;\n  validFrom?: string;\n  priceValidUntil?: string;\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  seller?: { name: string; url?: string; };\n}\n\n/** Individual review structured data @see https://schema.org/Review */\nexport interface ProductReview {\n  author: string;\n  datePublished: string;\n  reviewBody?: string;\n  reviewRating: { ratingValue: number; bestRating?: number; worstRating?: number; };\n}\n\n/** Product aggregate rating @see https://schema.org/AggregateRating */\nexport interface ProductAggregateRating {\n  ratingValue: number;\n  bestRating?: number;\n  worstRating?: number;\n  ratingCount?: number;\n  reviewCount?: number;\n}\n\n/** Product structured data - Enhanced for Google Rich Results @see https://developers.google.com/search/docs/appearance/structured-data/product */\nexport interface ProductSchema {\n  type: 'Product';\n  name: string;\n  description?: string;\n  image?: string | string[];\n  brand?: string;\n  sku?: string;\n  gtin?: string;\n  gtin8?: string;\n  gtin12?: string;\n  gtin13?: string;\n  gtin14?: string;\n  mpn?: string;\n  model?: string;\n  color?: string;\n  material?: string;\n  size?: string;\n  category?: string;\n  url?: string;\n  itemCondition?: 'NewCondition' | 'UsedCondition' | 'RefurbishedCondition' | 'DamagedCondition';\n  offers?: ProductOffer | ProductOffer[];\n  aggregateRating?: ProductAggregateRating;\n  review?: ProductReview | ProductReview[];\n}\n\n// ============================================================================\n// End of Product Schema Types\n// ============================================================================\n\n/**\n * Breadcrumb structured data\n */"
}
Now let me update the todo list and move on to the next task - updating the generateProductSchema function in SEO.astro:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Enhance ProductSchema interface in seo.ts",
      "status": "completed",
      "activeForm": "Enhancing ProductSchema interface"
    },
    {
      "content": "Update generateProductSchema function in SEO.astro",
      "status": "in_progress",
      "activeForm": "Updating generateProductSchema function"
    },
    {
      "content": "Enhance product page schema generation in [slug].astro",
      "status": "pending",
      "activeForm": "Enhancing product page schema generation"
    },
    {
      "content": "Verify schema output and Google Rich Results compatibility",
      "status": "pending",
      "activeForm": "Verifying schema output"
    }
  ]
}

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/components/SEO.astro",
  "offset": 250,
  "limit": 60
}
Now I need to update the generateProductSchema function to support all the new enhanced fields. Let me also check the import statements:

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/components/SEO.astro",
  "offset": 38,
  "limit": 25
}
I need to add the new imports for ProductOffer, ProductReview, and ProductAggregateRating. Let me update the imports and the generateProductSchema function:

🔧 Tool: Edit
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/components/SEO.astro",
  "old_string": "import type {\n  SEOProps,\n  JsonLdSchema,\n  ArticleSchema,\n  OrganizationSchema,\n  ProductSchema,\n  BreadcrumbSchema,\n  WebPageSchema,\n  CustomMetaTag,\n} from '../types/seo';",
  "new_string": "import type {\n  SEOProps,\n  JsonLdSchema,\n  ArticleSchema,\n  OrganizationSchema,\n  ProductSchema,\n  ProductOffer,\n  ProductReview,\n  ProductAggregateRating,\n  BreadcrumbSchema,\n  WebPageSchema,\n  CustomMetaTag,\n} from '../types/seo';"
}

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/components/SEO.astro",
  "offset": 38,
  "limit": 25
}

🔧 Tool: Edit
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/components/SEO.astro",
  "old_string": "import type {\n  SEOProps,\n  JsonLdSchema,\n  ArticleSchema,\n  OrganizationSchema,\n  ProductSchema,\n  BreadcrumbSchema,\n  WebPageSchema,\n  CustomMetaTag,\n} from '../types/seo';",
  "new_string": "import type {\n  SEOProps,\n  JsonLdSchema,\n  ArticleSchema,\n  OrganizationSchema,\n  ProductSchema,\n  ProductOffer,\n  ProductReview,\n  ProductAggregateRating,\n  BreadcrumbSchema,\n  WebPageSchema,\n  CustomMetaTag,\n} from '../types/seo';"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:/Users/James/Repos/retail-business\" && sed -n '39,48p' src/components/SEO.astro",
  "description": "Check import section"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:/Users/James/Repos/retail-business\" && sed -i \"s/ProductSchema,$/ProductSchema,\\\\n  ProductOffer,\\\\n  ProductReview,\\\\n  ProductAggregateRating,/\" src/components/SEO.astro",
  "description": "Add new imports to SEO.astro"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:/Users/James/Repos/retail-business\" && sed -n '39,53p' src/components/SEO.astro",
  "description": "Verify import updates"
}
Now let me update the generateProductSchema function:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:/Users/James/Repos/retail-business\" && sed -n '254,300p' src/components/SEO.astro",
  "description": "Check generateProductSchema function"
}

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/components/SEO.astro",
  "offset": 254,
  "limit": 55
}

🔧 Tool: Edit
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/components/SEO.astro",
  "old_string": "function generateProductSchema(schema: ProductSchema): object {\n  const images = schema.image\n    ? Array.isArray(schema.image)\n      ? schema.image.map((img) => toAbsoluteUrl(img, siteUrl))\n      : [toAbsoluteUrl(schema.image, siteUrl)]\n    : undefined;\n\n  return {\n    '@context': 'https://schema.org',\n    '@type': 'Product',\n    name: escapeHtml(schema.name),\n    description: schema.description ? escapeHtml(schema.description) : undefined,\n    image: images,\n    brand: schema.brand\n      ? {\n          '@type': 'Brand',\n          name: schema.brand,\n        }\n      : undefined,\n    sku: schema.sku,\n    offers: schema.offers\n      ? {\n          '@type': 'Offer',\n          price: schema.offers.price,\n          priceCurrency: schema.offers.priceCurrency,\n          availability: schema.offers.availability\n            ? `https://schema.org/${schema.offers.availability}`\n            : undefined,\n          url: schema.offers.url || computedCanonicalUrl,\n          validFrom: schema.offers.validFrom,\n          priceValidUntil: schema.offers.priceValidUntil,\n        }\n      : undefined,\n    aggregateRating: schema.aggregateRating\n      ? {\n          '@type': 'AggregateRating',\n          ratingValue: schema.aggregateRating.ratingValue,\n          reviewCount: schema.aggregateRating.reviewCount,\n        }\n      : undefined,\n  };\n}",
  "new_string": "/**\n * Generates a single offer object for Product schema\n */\nfunction generateOfferSchema(offer: ProductOffer, defaultUrl: string): object {\n  return {\n    '@type': 'Offer',\n    price: offer.price,\n    priceCurrency: offer.priceCurrency,\n    availability: offer.availability\n      ? `https://schema.org/${offer.availability}`\n      : undefined,\n    url: offer.url || defaultUrl,\n    validFrom: offer.validFrom,\n    priceValidUntil: offer.priceValidUntil,\n    itemCondition: offer.itemCondition\n      ? `https://schema.org/${offer.itemCondition}`\n      : undefined,\n    seller: offer.seller\n      ? {\n          '@type': 'Organization',\n          name: offer.seller.name,\n          url: offer.seller.url,\n        }\n      : undefined,\n  };\n}\n\n/**\n * Generates a single review object for Product schema\n */\nfunction generateReviewSchema(review: ProductReview): object {\n  return {\n    '@type': 'Review',\n    author: {\n      '@type': 'Person',\n      name: review.author,\n    },\n    datePublished: review.datePublished,\n    reviewBody: review.reviewBody,\n    reviewRating: {\n      '@type': 'Rating',\n      ratingValue: review.reviewRating.ratingValue,\n      bestRating: review.reviewRating.bestRating || 5,\n      worstRating: review.reviewRating.worstRating || 1,\n    },\n  };\n}\n\n/**\n * Generates comprehensive Product schema JSON-LD for Google Rich Results\n * @see https://developers.google.com/search/docs/appearance/structured-data/product\n */\nfunction generateProductSchema(schema: ProductSchema): object {\n  const images = schema.image\n    ? Array.isArray(schema.image)\n      ? schema.image.map((img) => toAbsoluteUrl(img, siteUrl))\n      : [toAbsoluteUrl(schema.image, siteUrl)]\n    : undefined;\n\n  // Handle single offer or array of offers\n  let offers: object | object[] | undefined;\n  if (schema.offers) {\n    if (Array.isArray(schema.offers)) {\n      offers = schema.offers.map((offer) => generateOfferSchema(offer, computedCanonicalUrl));\n    } else {\n      offers = generateOfferSchema(schema.offers, computedCanonicalUrl);\n    }\n  }\n\n  // Handle single review or array of reviews\n  let reviews: object | object[] | undefined;\n  if (schema.review) {\n    if (Array.isArray(schema.review)) {\n      reviews = schema.review.map(generateReviewSchema);\n    } else {\n      reviews = generateReviewSchema(schema.review);\n    }\n  }\n\n  return {\n    '@context': 'https://schema.org',\n    '@type': 'Product',\n    name: escapeHtml(schema.name),\n    description: schema.description ? escapeHtml(schema.description) : undefined,\n    image: images,\n    brand: schema.brand\n      ? {\n          '@type': 'Brand',\n          name: schema.brand,\n        }\n      : undefined,\n    sku: schema.sku,\n    gtin: schema.gtin,\n    gtin8: schema.gtin8,\n    gtin12: schema.gtin12,\n    gtin13: schema.gtin13,\n    gtin14: schema.gtin14,\n    mpn: schema.mpn,\n    model: schema.model,\n    color: schema.color,\n    material: schema.material,\n    size: schema.size,\n    category: schema.category,\n    url: schema.url || computedCanonicalUrl,\n    itemCondition: schema.itemCondition\n      ? `https://schema.org/${schema.itemCondition}`\n      : undefined,\n    offers: offers,\n    aggregateRating: schema.aggregateRating\n      ? {\n          '@type': 'AggregateRating',\n          ratingValue: schema.aggregateRating.ratingValue,\n          bestRating: schema.aggregateRating.bestRating || 5,\n          worstRating: schema.aggregateRating.worstRating || 1,\n          ratingCount: schema.aggregateRating.ratingCount,\n          reviewCount: schema.aggregateRating.reviewCount,\n        }\n      : undefined,\n    review: reviews,\n  };\n}"
}
Now let me update the product page to use the new enhanced schema fields:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Enhance ProductSchema interface in seo.ts",
      "status": "completed",
      "activeForm": "Enhancing ProductSchema interface"
    },
    {
      "content": "Update generateProductSchema function in SEO.astro",
      "status": "completed",
      "activeForm": "Updating generateProductSchema function"
    },
    {
      "content": "Enhance product page schema generation in [slug].astro",
      "status": "in_progress",
      "activeForm": "Enhancing product page schema generation"
    },
    {
      "content": "Verify schema output and Google Rich Results compatibility",
      "status": "pending",
      "activeForm": "Verifying schema output"
    }
  ]
}

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/pages/products/[slug].astro",
  "offset": 55,
  "limit": 50
}
Now let me update the product schema generation to use all the new enhanced fields:

🔧 Tool: Edit
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/pages/products/[slug].astro",
  "old_string": "// Build Product schema for SEO\nconst productSchema: ProductSchema = {\n  type: 'Product',\n  name: data.name,\n  description: data.editorialDescription || data.description,\n  image: galleryImages.map(img => img.src),\n  brand: data.metadata?.brand,\n  sku: data.metadata?.sku,\n  offers: {\n    price: data.price.amount,\n    priceCurrency: data.price.currency || 'USD',\n    availability: data.soldOut\n      ? 'OutOfStock'\n      : data.metadata?.availability || 'InStock',\n    url: Astro.url.href,\n    priceValidUntil: data.saleEndDate?.toISOString().split('T')[0],\n  },\n};",
  "new_string": "// Determine product availability status\nconst getAvailability = () => {\n  if (data.soldOut) return 'OutOfStock';\n  if (data.preOrder) return 'PreOrder';\n  if (data.stockQuantity !== undefined && data.stockQuantity <= 0) return 'OutOfStock';\n  if (data.stockQuantity !== undefined && data.stockQuantity <= (data.lowStockThreshold || 5)) return 'LimitedAvailability';\n  return data.metadata?.availability || 'InStock';\n};\n\n// Build comprehensive Product schema for SEO (Google Rich Results)\nconst productSchema: ProductSchema = {\n  type: 'Product',\n  name: data.name,\n  description: data.editorialDescription || data.description,\n  image: galleryImages.map(img => img.src),\n  brand: data.metadata?.brand,\n  sku: data.metadata?.sku,\n  gtin: data.metadata?.gtin,\n  mpn: data.metadata?.mpn,\n  category: data.category,\n  url: Astro.url.href,\n  // Map product condition from metadata\n  itemCondition: data.metadata?.condition,\n  // Map first color if available\n  color: data.colors?.[0],\n  // Map first material if available\n  material: data.materials?.[0],\n  // Map first size if available\n  size: data.sizes?.[0],\n  offers: {\n    price: data.price.amount,\n    priceCurrency: data.price.currency || 'USD',\n    availability: getAvailability(),\n    url: Astro.url.href,\n    priceValidUntil: data.saleEndDate?.toISOString().split('T')[0],\n    itemCondition: data.metadata?.condition,\n  },\n};"
}

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/pages/products/[slug].astro",
  "offset": 55,
  "limit": 30
}

🔧 Tool: Edit
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/pages/products/[slug].astro",
  "old_string": "// Build Product schema for SEO\nconst productSchema: ProductSchema = {\n  type: 'Product',\n  name: data.name,\n  description: data.editorialDescription || data.description,\n  image: galleryImages.map(img => img.src),\n  brand: data.metadata?.brand,\n  sku: data.metadata?.sku,\n  offers: {\n    price: data.price.amount,\n    priceCurrency: data.price.currency || 'USD',\n    availability: data.soldOut\n      ? 'OutOfStock'\n      : data.metadata?.availability || 'InStock',\n    url: Astro.url.href,\n    priceValidUntil: data.saleEndDate?.toISOString().split('T')[0],\n  },\n};",
  "new_string": "// Determine product availability status for schema\nconst getAvailability = () => {\n  if (data.soldOut) return 'OutOfStock' as const;\n  if (data.preOrder) return 'PreOrder' as const;\n  if (data.stockQuantity !== undefined && data.stockQuantity <= 0) return 'OutOfStock' as const;\n  if (data.stockQuantity !== undefined && data.stockQuantity <= (data.lowStockThreshold || 5)) return 'LimitedAvailability' as const;\n  return data.metadata?.availability || 'InStock' as const;\n};\n\n// Build comprehensive Product schema for SEO (Google Rich Results)\n// @see https://developers.google.com/search/docs/appearance/structured-data/product\nconst productSchema: ProductSchema = {\n  type: 'Product',\n  name: data.name,\n  description: data.editorialDescription || data.description,\n  image: galleryImages.map(img => img.src),\n  brand: data.metadata?.brand,\n  sku: data.metadata?.sku,\n  gtin: data.metadata?.gtin,\n  mpn: data.metadata?.mpn,\n  category: data.category,\n  url: Astro.url.href,\n  itemCondition: data.metadata?.condition,\n  color: data.colors?.[0],\n  material: data.materials?.[0],\n  size: data.sizes?.[0],\n  offers: {\n    price: data.price.amount,\n    priceCurrency: data.price.currency || 'USD',\n    availability: getAvailability(),\n    url: Astro.url.href,\n    priceValidUntil: data.saleEndDate?.toISOString().split('T')[0],\n    itemCondition: data.metadata?.condition,\n  },\n};"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:/Users/James/Repos/retail-business\" && sed -n '62,79p' src/pages/products/\\\\[slug\\\\].astro",
  "description": "Check current schema in product page"
}

🔧 Tool: Read
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/pages/products/[slug].astro",
  "offset": 60,
  "limit": 25
}

🔧 Tool: Edit
Input: {
  "file_path": "C:/Users/James/Repos/retail-business/src/pages/products/[slug].astro",
  "old_string": "// Build Product schema for SEO\nconst productSchema: ProductSchema = {\n  type: 'Product',\n  name: data.name,\n  description: data.editorialDescription || data.description,\n  image: galleryImages.map(img => img.src),\n  brand: data.metadata?.brand,\n  sku: data.metadata?.sku,\n  offers: {\n    price: data.price.amount,\n    priceCurrency: data.price.currency || 'USD',\n    availability: data.soldOut\n      ? 'OutOfStock'\n      : data.metadata?.availability || 'InStock',\n    url: Astro.url.href,\n    priceValidUntil: data.saleEndDate?.toISOString().split('T')[0],\n  },\n};\n\n// Build Breadcrumb items for visual navigation",
  "new_string": "// Determine product availability status for schema\nconst getAvailability = (): ProductSchema['offers'] extends { availability?: infer A } ? A : never => {\n  if (data.soldOut) return 'OutOfStock';\n  if (data.preOrder) return 'PreOrder';\n  if (data.stockQuantity !== undefined && data.stockQuantity <= 0) return 'OutOfStock';\n  if (data.stockQuantity !== undefined && data.stockQuantity <= (data.lowStockThreshold || 5)) return 'LimitedAvailability';\n  return data.metadata?.availability || 'InStock';\n};\n\n// Build comprehensive Product schema for SEO (Google Rich Results)\n// @see https://developers.google.com/search/docs/appearance/structured-data/product\nconst productSchema: ProductSchema = {\n  type: 'Product',\n  name: data.name,\n  description: data.editorialDescription || data.description,\n  image: galleryImages.map(img => img.src),\n  brand: data.metadata?.brand,\n  sku: data.metadata?.sku,\n  gtin: data.metadata?.gtin,\n  mpn: data.metadata?.mpn,\n  category: data.category,\n  url: Astro.url.href,\n  itemCondition: data.metadata?.condition,\n  color: data.colors?.[0],\n  material: data.materials?.[0],\n  size: data.sizes?.[0],\n  offers: {\n    price: data.price.amount,\n    priceCurrency: data.price.currency || 'USD',\n    availability: getAvailability(),\n    url: Astro.url.href,\n    priceValidUntil: data.saleEndDate?.toISOString().split('T')[0],\n    itemCondition: data.metadata?.condition,\n  },\n};\n\n// Build Breadcrumb items for visual navigation"
}
Now let me verify the changes and test the build:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Enhance ProductSchema interface in seo.ts",
      "status": "completed",
      "activeForm": "Enhancing ProductSchema interface"
    },
    {
      "content": "Update generateProductSchema function in SEO.astro",
      "status": "completed",
      "activeForm": "Updating generateProductSchema function"
    },
    {
      "content": "Enhance product page schema generation in [slug].astro",
      "status": "completed",
      "activeForm": "Enhancing product page schema generation"
    },
    {
      "content": "Verify schema output and Google Rich Results compatibility",
      "status": "in_progress",
      "activeForm": "Verifying schema output"
    }
  ]
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:/Users/James/Repos/retail-business\" && npm run build 2>&1 | head -50",
  "description": "Build project to verify changes",
  "timeout": 120000
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:/Users/James/Repos/retail-business\" && npm run build 2>&1 | tail -30",
  "description": "Check build completion",
  "timeout": 120000
}
The build completed successfully. Now let me verify the generated JSON-LD output by checking one of the built product pages:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:/Users/James/Repos/retail-business\" && grep -o '<script type=\"application/ld+json\">[^<]*</script>' dist/products/premium-canvas-tote/index.html | head -1 | sed 's/<script type=\"application\\/ld+json\">//' | sed 's/<\\/script>//' | node -e \"const input = require('fs').readFileSync(0, 'utf8'); try { console.log(JSON.stringify(JSON.parse(input), null, 2)); } catch(e) { console.log(input); }\"",
  "description": "Check Product schema JSON-LD output"
}
Excellent! The Product schema JSON-LD is being generated correctly with all the enhanced fields. Let me also check the Breadcrumb schema:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:/Users/James/Repos/retail-business\" && grep -o '<script type=\"application/ld+json\">[^<]*</script>' dist/products/premium-canvas-tote/index.html | tail -1 | sed 's/<script type=\"application\\/ld+json\">//' | sed 's/<\\/script>//' | node -e \"const input = require('fs').readFileSync(0, 'utf8'); try { console.log(JSON.stringify(JSON.parse(input), null, 2)); } catch(e) { console.log(input); }\"",
  "description": "Check Breadcrumb schema JSON-LD output"
}
Both schemas are being generated correctly. Let me update the todo list and provide the final summary:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Enhance ProductSchema interface in seo.ts",
      "status": "completed",
      "activeForm": "Enhancing ProductSchema interface"
    },
    {
      "content": "Update generateProductSchema function in SEO.astro",
      "status": "completed",
      "activeForm": "Updating generateProductSchema function"
    },
    {
      "content": "Enhance product page schema generation in [slug].astro",
      "status": "completed",
      "activeForm": "Enhancing product page schema generation"
    },
    {
      "content": "Verify schema output and Google Rich Results compatibility",
      "status": "completed",
      "activeForm": "Verifying schema output"
    }
  ]
}
Let me verify all the changes made:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:/Users/James/Repos/retail-business\" && git diff --stat",
  "description": "Show files changed"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:/Users/James/Repos/retail-business\" && git diff src/types/seo.ts src/components/SEO.astro \"src/pages/products/[slug].astro\" --stat",
  "description": "Show changes to relevant files"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:/Users/James/Repos/retail-business\" && git diff --stat -- src/types/seo.ts src/components/SEO.astro \"src/pages/products/[slug].astro\"",
  "description": "Show changes to relevant files"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:/Users/James/Repos/retail-business\" && git diff -- \"src/pages/products/[slug].astro\" | head -50",
  "description": "Show product page changes"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:/Users/James/Repos/retail-business\" && git status \"src/pages/products/[slug].astro\"",
  "description": "Check status of product page"
}
<summary>
## Summary: Add Product schema JSON-LD to product pages

### Changes Implemented
- **Enhanced ProductSchema interface** (`src/types/seo.ts`):
  - Added `ProductOffer` interface with extended fields (availability, itemCondition, seller, validFrom, priceValidUntil)
  - Added `ProductReview` interface for individual reviews
  - Added `ProductAggregateRating` interface with bestRating, worstRating, ratingCount, reviewCount
  - Extended `ProductSchema` interface with:
    - GTIN identifiers (gtin, gtin8, gtin12, gtin13, gtin14)
    - Manufacturer Part Number (mpn)
    - Product attributes (model, color, material, size, category)
    - Item condition support
    - URL field
    - Support for array of offers (for variants)
    - Review support (single or array)

- **Updated generateProductSchema function** (`src/components/SEO.astro`):
  - Added helper functions `generateOfferSchema()` and `generateReviewSchema()`
  - Enhanced main `generateProductSchema()` to support:
    - All new GTIN and identifier fields
    - Product attributes (color, material, size, category)
    - Item condition with proper Schema.org URL format
    - Single or multiple offers (for variant support)
    - Aggregate ratings with all standard fields
    - Single or multiple reviews

- **Enhanced product page schema generation** (`src/pages/products/[slug].astro`):
  - Added `getAvailability()` helper function with intelligent availability detection:
    - Sold out → 'OutOfStock'
    - Pre-order → 'PreOrder'
    - Zero stock → 'OutOfStock'
    - Low stock (≤ threshold) → 'LimitedAvailability'
    - Otherwise → 'InStock' (or from metadata)
  - Maps all available product metadata to schema:
    - GTIN, MPN from metadata
    - Category, color, material, size from product data
    - Item condition from metadata

### Files Modified
- `src/types/seo.ts` - Added ProductOffer, ProductReview, ProductAggregateRating interfaces; Enhanced ProductSchema
- `src/components/SEO.astro` - Added helper functions and enhanced generateProductSchema
- `src/pages/products/[slug].astro` - Enhanced product schema generation with all new fields

### Generated Schema Example
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Premium Canvas Tote",
  "description": "...",
  "image": ["https://..."],
  "brand": { "@type": "Brand", "name": "Houston Web Services" },
  "sku": "TOTE-CANVAS-001",
  "color": "Natural Tan",
  "material": "Waxed Canvas",
  "category": "Bags",
  "url": "https://.../products/premium-canvas-tote/",
  "itemCondition": "https://schema.org/NewCondition",
  "offers": {
    "@type": "Offer",
    "price": 89.99,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "...",
    "itemCondition": "https://schema.org/NewCondition"
  }
}
```

### Notes for Developer
- Build verified successful with `npm run build`
- Schema follows Google's Product structured data guidelines
- To enable rich results with reviews/ratings, add review data to product content (ProductReview/ProductAggregateRating fields are ready)
- To add GTIN/MPN, include them in product's `metadata.gtin` and `metadata.mpn` fields
- Use Google's Rich Results Test (https://search.google.com/test/rich-results) to validate schema output
- For multiple product variants, use array of offers with different prices/availability
</summary>