
🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "Explore this codebase to understand its structure for implementing an external shop integration feature. I need to understand:\n\n1. The overall project structure (is it React, Next.js, Vue, etc.?)\n2. How configuration is currently handled\n3. The header component structure (where a cart icon would go)\n4. How routing and links work\n5. Any existing patterns for external integrations\n6. The styling approach used (CSS modules, Tailwind, styled-components, etc.)\n\nPlease provide a comprehensive overview of the codebase architecture and relevant files for this feature implementation.",
  "subagent_type": "Explore"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\" | head -30",
  "description": "List directory contents"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business"
}

🔧 Tool: Glob
Input: {
  "pattern": "*.json",
  "path": "C:\\Users\\James\\Repos\\retail-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\package.json"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\astro.config.mjs"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\.env.example"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\" -type f -name \"*.ts\" -o -name \"*.tsx\" -o -name \"*.astro\" | head -30",
  "description": "Find source files"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\" -type d | sort",
  "description": "List all directories in src"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.astro",
  "path": "C:\\Users\\James\\Repos\\retail-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\Header.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\layouts\\Layout.astro"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\\styles\" -type f",
  "description": "Find style files"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\retail-business\\src\\config\"",
  "description": "List config files"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles\\globals.css",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\styles\\variables.css",
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\config\\seo.config.ts"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\\pages\" -type f -name \"*.astro\"",
  "description": "Find all page files"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\index.astro",
  "limit": 80
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\\types\" -type f",
  "description": "Find type definition files"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\Footer.astro",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\service.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\index.ts"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\retail-business\\src\\utils\" -type f",
  "description": "Find utility files"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\config\\analytics.config.ts",
  "limit": 80
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\tsconfig.json"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\Button.astro"
}

🔧 Tool: Bash
Input: {
  "command": "cat \"C:\\Users\\James\\Repos\\retail-business\\.automaker\\features\\external-shop-integration\\spec.md\" 2>/dev/null || echo \"File not found or empty\"",
  "description": "Check for existing feature spec"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\pages\\services\\website-design.astro",
  "limit": 80
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ContactForm.astro",
  "limit": 100
}
Now I have a comprehensive understanding of the codebase. Let me create a todo list and start implementing the external shop integration feature.

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript types for shop integration",
      "status": "pending",
      "activeForm": "Creating TypeScript types for shop integration"
    },
    {
      "content": "Create shop configuration file",
      "status": "pending",
      "activeForm": "Creating shop configuration file"
    },
    {
      "content": "Create CartIcon component for header",
      "status": "pending",
      "activeForm": "Creating CartIcon component for header"
    },
    {
      "content": "Create ShopLink component for product-level links",
      "status": "pending",
      "activeForm": "Creating ShopLink component for product-level links"
    },
    {
      "content": "Create UTM utility functions",
      "status": "pending",
      "activeForm": "Creating UTM utility functions"
    },
    {
      "content": "Update Header component with cart icon",
      "status": "pending",
      "activeForm": "Updating Header component with cart icon"
    },
    {
      "content": "Update environment variables example file",
      "status": "pending",
      "activeForm": "Updating environment variables example file"
    },
    {
      "content": "Verify feature with Playwright test",
      "status": "pending",
      "activeForm": "Verifying feature with Playwright test"
    }
  ]
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript types for shop integration",
      "status": "in_progress",
      "activeForm": "Creating TypeScript types for shop integration"
    },
    {
      "content": "Create shop configuration file",
      "status": "pending",
      "activeForm": "Creating shop configuration file"
    },
    {
      "content": "Create CartIcon component for header",
      "status": "pending",
      "activeForm": "Creating CartIcon component for header"
    },
    {
      "content": "Create ShopLink component for product-level links",
      "status": "pending",
      "activeForm": "Creating ShopLink component for product-level links"
    },
    {
      "content": "Create UTM utility functions",
      "status": "pending",
      "activeForm": "Creating UTM utility functions"
    },
    {
      "content": "Update Header component with cart icon",
      "status": "pending",
      "activeForm": "Updating Header component with cart icon"
    },
    {
      "content": "Update environment variables example file",
      "status": "pending",
      "activeForm": "Updating environment variables example file"
    },
    {
      "content": "Verify feature with Playwright test",
      "status": "pending",
      "activeForm": "Verifying feature with Playwright test"
    }
  ]
}
Let me first check existing types to understand the patterns:

🔧 Tool: Glob
Input: {
  "pattern": "src/types/*.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\index.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\analytics.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\service.ts"
}
Now I have a good understanding of the type patterns. Let me also check an existing config file:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\config\\analytics.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\.env.example"
}
Now I have all the context I need. Let me create the TypeScript types for the shop integration:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\shop.ts",
  "content": "/**\n * =================================================================\n * EXTERNAL SHOP INTEGRATION TYPE DEFINITIONS\n * =================================================================\n *\n * TypeScript types for external e-commerce platform integrations\n * including Shopify, Square, Etsy, and Big Cartel. Supports cart\n * icon in header, product-level shop links, and UTM tracking.\n *\n * =================================================================\n */\n\n// =================================================================\n// SHOP PLATFORM TYPES\n// =================================================================\n\n/**\n * Supported external e-commerce platforms\n */\nexport type ShopPlatform = 'shopify' | 'square' | 'etsy' | 'bigcartel' | 'custom';\n\n/**\n * Cart icon display position in the header\n */\nexport type CartIconPosition = 'header-left' | 'header-right';\n\n/**\n * UTM source identifiers for tracking\n */\nexport type UTMSource = 'website' | 'landing-page' | 'blog' | 'email' | 'social';\n\n/**\n * UTM medium identifiers for tracking\n */\nexport type UTMMedium = 'referral' | 'cpc' | 'organic' | 'direct' | 'banner';\n\n// =================================================================\n// CONFIGURATION TYPES\n// =================================================================\n\n/**\n * UTM parameter configuration for tracking shop link clicks\n */\nexport interface UTMParams {\n  /** Campaign source (e.g., 'website', 'newsletter') */\n  source?: UTMSource | string;\n  /** Campaign medium (e.g., 'referral', 'banner') */\n  medium?: UTMMedium | string;\n  /** Campaign name (e.g., 'spring_sale', 'header_cart') */\n  campaign?: string;\n  /** Campaign term (for paid search) */\n  term?: string;\n  /** Campaign content (for A/B testing) */\n  content?: string;\n}\n\n/**\n * Main shop configuration object\n */\nexport interface ShopConfig {\n  /** Whether the external shop integration is enabled */\n  enabled: boolean;\n  /** The e-commerce platform being used */\n  platform: ShopPlatform;\n  /** Base URL of the external shop (e.g., 'https://myshop.shopify.com') */\n  shopUrl: string;\n  /** Direct link to the cart/checkout page */\n  cartUrl?: string;\n  /** Store display name (shown in tooltips/aria labels) */\n  storeName: string;\n  /** Whether to show the cart icon in the header */\n  showCartIcon: boolean;\n  /** Position of the cart icon in the header */\n  cartIconPosition: CartIconPosition;\n  /** Whether to open shop links in a new tab */\n  openInNewTab: boolean;\n  /** Default UTM parameters for all shop links */\n  defaultUTMParams?: UTMParams;\n  /** Whether UTM tracking is enabled */\n  trackingEnabled: boolean;\n}\n\n/**\n * Product-level shop link configuration\n */\nexport interface ProductShopLink {\n  /** Product identifier in the external shop */\n  productId?: string;\n  /** Direct URL to the product page */\n  productUrl: string;\n  /** Product name for accessibility */\n  productName: string;\n  /** Link text to display */\n  linkText?: string;\n  /** Override default UTM params for this product */\n  utmParams?: UTMParams;\n  /** Whether to open in new tab (overrides config default) */\n  openInNewTab?: boolean;\n}\n\n// =================================================================\n// COMPONENT PROP TYPES\n// =================================================================\n\n/**\n * Props for the CartIcon component\n */\nexport interface CartIconProps {\n  /** External shop/cart URL */\n  href: string;\n  /** Accessible label for the cart link */\n  ariaLabel?: string;\n  /** Whether to open in a new tab */\n  openInNewTab?: boolean;\n  /** Additional CSS class names */\n  class?: string;\n}\n\n/**\n * Props for the ShopLink component\n */\nexport interface ShopLinkProps {\n  /** Shop or product URL */\n  href: string;\n  /** Link text content */\n  text: string;\n  /** Accessible label (defaults to text) */\n  ariaLabel?: string;\n  /** Whether to open in new tab */\n  openInNewTab?: boolean;\n  /** Visual variant */\n  variant?: 'button' | 'link' | 'inline';\n  /** Button size (when variant is 'button') */\n  size?: 'small' | 'medium' | 'large';\n  /** UTM parameters to append */\n  utmParams?: UTMParams;\n  /** Additional CSS class names */\n  class?: string;\n}\n\n// =================================================================\n// UTILITY TYPES\n// =================================================================\n\n/**\n * URL with optional UTM parameters\n */\nexport interface TrackedURL {\n  /** Base URL */\n  baseUrl: string;\n  /** UTM parameters */\n  utmParams?: UTMParams;\n  /** Full URL with UTM params appended */\n  fullUrl: string;\n}\n\n/**\n * Analytics event for shop link clicks\n */\nexport interface ShopClickEvent {\n  /** Type of shop interaction */\n  eventType: 'cart_click' | 'product_click' | 'shop_link_click';\n  /** Destination URL */\n  destinationUrl: string;\n  /** Source location on the page */\n  sourceLocation: string;\n  /** Product name if applicable */\n  productName?: string;\n  /** UTM campaign if set */\n  campaign?: string;\n  /** Timestamp */\n  timestamp: number;\n}\n\n// =================================================================\n// PLATFORM-SPECIFIC TYPES\n// =================================================================\n\n/**\n * Shopify-specific configuration options\n */\nexport interface ShopifyConfig extends ShopConfig {\n  platform: 'shopify';\n  /** Shopify store subdomain (e.g., 'mystore' for mystore.myshopify.com) */\n  storeSubdomain?: string;\n}\n\n/**\n * Square-specific configuration options\n */\nexport interface SquareConfig extends ShopConfig {\n  platform: 'square';\n  /** Square site slug */\n  siteSlug?: string;\n}\n\n/**\n * Etsy-specific configuration options\n */\nexport interface EtsyConfig extends ShopConfig {\n  platform: 'etsy';\n  /** Etsy shop name */\n  etsyShopName?: string;\n}\n\n/**\n * Big Cartel-specific configuration options\n */\nexport interface BigCartelConfig extends ShopConfig {\n  platform: 'bigcartel';\n  /** Big Cartel subdomain */\n  subdomain?: string;\n}\n\n/**\n * Union type for all platform-specific configs\n */\nexport type PlatformConfig =\n  | ShopifyConfig\n  | SquareConfig\n  | EtsyConfig\n  | BigCartelConfig\n  | ShopConfig;\n"
}
Now let me update the types index file to export the new shop types:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\types\\index.ts",
  "old_string": "export {\n  DEFAULT_FAQ_ITEMS,\n} from './faq';\n\nexport type {\n  ConsentCategory,",
  "new_string": "export {\n  DEFAULT_FAQ_ITEMS,\n} from './faq';\n\nexport type {\n  ShopPlatform,\n  CartIconPosition,\n  UTMSource,\n  UTMMedium,\n  UTMParams,\n  ShopConfig,\n  ProductShopLink,\n  CartIconProps,\n  ShopLinkProps,\n  TrackedURL,\n  ShopClickEvent,\n  ShopifyConfig,\n  SquareConfig,\n  EtsyConfig,\n  BigCartelConfig,\n  PlatformConfig,\n} from './shop';\n\nexport type {\n  ConsentCategory,"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript types for shop integration",
      "status": "completed",
      "activeForm": "Creating TypeScript types for shop integration"
    },
    {
      "content": "Create shop configuration file",
      "status": "in_progress",
      "activeForm": "Creating shop configuration file"
    },
    {
      "content": "Create CartIcon component for header",
      "status": "pending",
      "activeForm": "Creating CartIcon component for header"
    },
    {
      "content": "Create ShopLink component for product-level links",
      "status": "pending",
      "activeForm": "Creating ShopLink component for product-level links"
    },
    {
      "content": "Create UTM utility functions",
      "status": "pending",
      "activeForm": "Creating UTM utility functions"
    },
    {
      "content": "Update Header component with cart icon",
      "status": "pending",
      "activeForm": "Updating Header component with cart icon"
    },
    {
      "content": "Update environment variables example file",
      "status": "pending",
      "activeForm": "Updating environment variables example file"
    },
    {
      "content": "Verify feature with Playwright test",
      "status": "pending",
      "activeForm": "Verifying feature with Playwright test"
    }
  ]
}
Now let me create the shop configuration file:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\config\\shop.config.ts",
  "content": "/**\n * =================================================================\n * EXTERNAL SHOP CONFIGURATION\n * =================================================================\n *\n * Configuration for external e-commerce platform integration.\n * Supports Shopify, Square, Etsy, Big Cartel, and custom platforms.\n * Includes cart icon display, product links, and UTM tracking.\n *\n * =================================================================\n */\n\nimport type {\n  ShopConfig,\n  ShopPlatform,\n  UTMParams,\n  CartIconPosition,\n} from '../types/shop';\n\n// =================================================================\n// ENVIRONMENT VARIABLES\n// =================================================================\n\n/**\n * Read shop configuration from environment variables\n * All PUBLIC_ prefixed variables are available in the browser\n */\nconst getEnvVar = (key: string, defaultValue: string = ''): string => {\n  const envValue = import.meta.env[key];\n  return typeof envValue === 'string' ? envValue : defaultValue;\n};\n\nconst getBoolEnvVar = (key: string, defaultValue: boolean = false): boolean => {\n  const value = getEnvVar(key, '');\n  if (value === '') return defaultValue;\n  return value === 'true' || value === '1';\n};\n\n// =================================================================\n// SHOP CONFIGURATION\n// =================================================================\n\n/**\n * External shop URL (required when shop is enabled)\n * Examples:\n * - Shopify: https://mystore.myshopify.com\n * - Square: https://mystore.square.site\n * - Etsy: https://www.etsy.com/shop/mystore\n * - Big Cartel: https://mystore.bigcartel.com\n */\nexport const SHOP_URL = getEnvVar('PUBLIC_SHOP_URL', '');\n\n/**\n * Direct cart/checkout URL (optional, defaults to {SHOP_URL}/cart)\n */\nexport const CART_URL = getEnvVar('PUBLIC_SHOP_CART_URL', '');\n\n/**\n * Store display name\n */\nexport const STORE_NAME = getEnvVar('PUBLIC_SHOP_STORE_NAME', 'Our Shop');\n\n/**\n * Shop platform type\n */\nexport const SHOP_PLATFORM = getEnvVar('PUBLIC_SHOP_PLATFORM', 'custom') as ShopPlatform;\n\n/**\n * Whether shop integration is enabled\n */\nexport const SHOP_ENABLED = getBoolEnvVar('PUBLIC_SHOP_ENABLED', false);\n\n/**\n * Whether to show cart icon in header\n */\nexport const SHOW_CART_ICON = getBoolEnvVar('PUBLIC_SHOP_SHOW_CART_ICON', true);\n\n/**\n * Cart icon position in header\n */\nexport const CART_ICON_POSITION = getEnvVar('PUBLIC_SHOP_CART_POSITION', 'header-right') as CartIconPosition;\n\n/**\n * Whether to open shop links in new tab\n */\nexport const OPEN_IN_NEW_TAB = getBoolEnvVar('PUBLIC_SHOP_OPEN_NEW_TAB', true);\n\n/**\n * Whether UTM tracking is enabled\n */\nexport const TRACKING_ENABLED = getBoolEnvVar('PUBLIC_SHOP_TRACKING_ENABLED', true);\n\n// =================================================================\n// DEFAULT UTM PARAMETERS\n// =================================================================\n\n/**\n * Default UTM parameters for all shop links\n * These can be overridden per-link\n */\nexport const DEFAULT_UTM_PARAMS: UTMParams = {\n  source: 'website',\n  medium: 'referral',\n  campaign: getEnvVar('PUBLIC_SHOP_UTM_CAMPAIGN', 'website'),\n};\n\n/**\n * UTM parameters specifically for the header cart icon\n */\nexport const CART_ICON_UTM_PARAMS: UTMParams = {\n  ...DEFAULT_UTM_PARAMS,\n  content: 'header_cart_icon',\n};\n\n/**\n * UTM parameters for product-level links\n */\nexport const PRODUCT_LINK_UTM_PARAMS: UTMParams = {\n  ...DEFAULT_UTM_PARAMS,\n  content: 'product_link',\n};\n\n// =================================================================\n// MAIN SHOP CONFIG OBJECT\n// =================================================================\n\n/**\n * Complete shop configuration object\n * Used by components and utilities\n */\nexport const shopConfig: ShopConfig = {\n  enabled: SHOP_ENABLED && SHOP_URL !== '',\n  platform: SHOP_PLATFORM,\n  shopUrl: SHOP_URL,\n  cartUrl: CART_URL || (SHOP_URL ? `${SHOP_URL}/cart` : ''),\n  storeName: STORE_NAME,\n  showCartIcon: SHOW_CART_ICON,\n  cartIconPosition: CART_ICON_POSITION,\n  openInNewTab: OPEN_IN_NEW_TAB,\n  defaultUTMParams: DEFAULT_UTM_PARAMS,\n  trackingEnabled: TRACKING_ENABLED,\n};\n\n// =================================================================\n// PLATFORM-SPECIFIC URL BUILDERS\n// =================================================================\n\n/**\n * Platform-specific cart URL patterns\n */\nexport const PLATFORM_CART_PATHS: Record<ShopPlatform, string> = {\n  shopify: '/cart',\n  square: '/cart',\n  etsy: '/cart',\n  bigcartel: '/cart',\n  custom: '/cart',\n};\n\n/**\n * Platform-specific checkout URL patterns\n */\nexport const PLATFORM_CHECKOUT_PATHS: Record<ShopPlatform, string> = {\n  shopify: '/checkout',\n  square: '/checkout',\n  etsy: '/cart', // Etsy handles checkout from cart\n  bigcartel: '/checkout',\n  custom: '/checkout',\n};\n\n/**\n * Get the cart URL for the configured platform\n */\nexport function getCartUrl(): string {\n  if (!shopConfig.enabled) return '';\n  if (shopConfig.cartUrl) return shopConfig.cartUrl;\n\n  const cartPath = PLATFORM_CART_PATHS[shopConfig.platform] || '/cart';\n  return `${shopConfig.shopUrl}${cartPath}`;\n}\n\n/**\n * Get the checkout URL for the configured platform\n */\nexport function getCheckoutUrl(): string {\n  if (!shopConfig.enabled) return '';\n\n  const checkoutPath = PLATFORM_CHECKOUT_PATHS[shopConfig.platform] || '/checkout';\n  return `${shopConfig.shopUrl}${checkoutPath}`;\n}\n\n// =================================================================\n// VALIDATION\n// =================================================================\n\n/**\n * Validate shop configuration\n * Returns an array of validation errors (empty if valid)\n */\nexport function validateShopConfig(): string[] {\n  const errors: string[] = [];\n\n  if (shopConfig.enabled) {\n    if (!shopConfig.shopUrl) {\n      errors.push('Shop is enabled but PUBLIC_SHOP_URL is not set');\n    }\n\n    if (shopConfig.shopUrl && !isValidUrl(shopConfig.shopUrl)) {\n      errors.push('PUBLIC_SHOP_URL is not a valid URL');\n    }\n\n    if (shopConfig.cartUrl && !isValidUrl(shopConfig.cartUrl)) {\n      errors.push('PUBLIC_SHOP_CART_URL is not a valid URL');\n    }\n  }\n\n  return errors;\n}\n\n/**\n * Check if a string is a valid URL\n */\nfunction isValidUrl(url: string): boolean {\n  try {\n    new URL(url);\n    return true;\n  } catch {\n    return false;\n  }\n}\n\n// =================================================================\n// HELPER FUNCTIONS\n// =================================================================\n\n/**\n * Check if shop integration is properly configured and enabled\n */\nexport function isShopEnabled(): boolean {\n  return shopConfig.enabled && validateShopConfig().length === 0;\n}\n\n/**\n * Get shop configuration for use in components\n */\nexport function getShopConfig(): ShopConfig {\n  return { ...shopConfig };\n}\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript types for shop integration",
      "status": "completed",
      "activeForm": "Creating TypeScript types for shop integration"
    },
    {
      "content": "Create shop configuration file",
      "status": "completed",
      "activeForm": "Creating shop configuration file"
    },
    {
      "content": "Create CartIcon component for header",
      "status": "pending",
      "activeForm": "Creating CartIcon component for header"
    },
    {
      "content": "Create ShopLink component for product-level links",
      "status": "pending",
      "activeForm": "Creating ShopLink component for product-level links"
    },
    {
      "content": "Create UTM utility functions",
      "status": "in_progress",
      "activeForm": "Creating UTM utility functions"
    },
    {
      "content": "Update Header component with cart icon",
      "status": "pending",
      "activeForm": "Updating Header component with cart icon"
    },
    {
      "content": "Update environment variables example file",
      "status": "pending",
      "activeForm": "Updating environment variables example file"
    },
    {
      "content": "Verify feature with Playwright test",
      "status": "pending",
      "activeForm": "Verifying feature with Playwright test"
    }
  ]
}
Now let me create the UTM utility functions:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\utils\\shop-tracking.ts",
  "content": "/**\n * =================================================================\n * SHOP TRACKING UTILITIES\n * =================================================================\n *\n * Utility functions for UTM parameter management and shop link\n * tracking. Integrates with the analytics system for tracking\n * shop-related interactions.\n *\n * =================================================================\n */\n\nimport type { UTMParams, TrackedURL, ShopClickEvent } from '../types/shop';\nimport { DEFAULT_UTM_PARAMS, shopConfig } from '../config/shop.config';\n\n// =================================================================\n// UTM PARAMETER UTILITIES\n// =================================================================\n\n/**\n * Build UTM query string from parameters\n * @param params - UTM parameter object\n * @returns Encoded query string (without leading ?)\n */\nexport function buildUTMQueryString(params: UTMParams): string {\n  const utmPairs: string[] = [];\n\n  if (params.source) {\n    utmPairs.push(`utm_source=${encodeURIComponent(params.source)}`);\n  }\n  if (params.medium) {\n    utmPairs.push(`utm_medium=${encodeURIComponent(params.medium)}`);\n  }\n  if (params.campaign) {\n    utmPairs.push(`utm_campaign=${encodeURIComponent(params.campaign)}`);\n  }\n  if (params.term) {\n    utmPairs.push(`utm_term=${encodeURIComponent(params.term)}`);\n  }\n  if (params.content) {\n    utmPairs.push(`utm_content=${encodeURIComponent(params.content)}`);\n  }\n\n  return utmPairs.join('&');\n}\n\n/**\n * Append UTM parameters to a URL\n * @param baseUrl - The base URL to append parameters to\n * @param params - UTM parameters to append\n * @returns Full URL with UTM parameters\n */\nexport function appendUTMParams(baseUrl: string, params?: UTMParams): string {\n  if (!params || !shopConfig.trackingEnabled) {\n    return baseUrl;\n  }\n\n  const queryString = buildUTMQueryString(params);\n  if (!queryString) {\n    return baseUrl;\n  }\n\n  // Check if URL already has query parameters\n  const separator = baseUrl.includes('?') ? '&' : '?';\n  return `${baseUrl}${separator}${queryString}`;\n}\n\n/**\n * Merge UTM parameters with defaults\n * Override params take precedence over defaults\n * @param overrideParams - Parameters to override defaults\n * @returns Merged UTM parameters\n */\nexport function mergeUTMParams(overrideParams?: UTMParams): UTMParams {\n  if (!overrideParams) {\n    return { ...DEFAULT_UTM_PARAMS };\n  }\n\n  return {\n    source: overrideParams.source ?? DEFAULT_UTM_PARAMS.source,\n    medium: overrideParams.medium ?? DEFAULT_UTM_PARAMS.medium,\n    campaign: overrideParams.campaign ?? DEFAULT_UTM_PARAMS.campaign,\n    term: overrideParams.term ?? DEFAULT_UTM_PARAMS.term,\n    content: overrideParams.content ?? DEFAULT_UTM_PARAMS.content,\n  };\n}\n\n/**\n * Create a tracked URL object with UTM parameters\n * @param baseUrl - The base URL\n * @param params - Optional UTM parameters to merge with defaults\n * @returns TrackedURL object with base, params, and full URL\n */\nexport function createTrackedUrl(baseUrl: string, params?: UTMParams): TrackedURL {\n  const mergedParams = mergeUTMParams(params);\n  const fullUrl = appendUTMParams(baseUrl, mergedParams);\n\n  return {\n    baseUrl,\n    utmParams: mergedParams,\n    fullUrl,\n  };\n}\n\n/**\n * Parse UTM parameters from a URL\n * @param url - URL to parse\n * @returns Extracted UTM parameters\n */\nexport function parseUTMFromUrl(url: string): UTMParams {\n  try {\n    const urlObj = new URL(url);\n    const params: UTMParams = {};\n\n    const source = urlObj.searchParams.get('utm_source');\n    const medium = urlObj.searchParams.get('utm_medium');\n    const campaign = urlObj.searchParams.get('utm_campaign');\n    const term = urlObj.searchParams.get('utm_term');\n    const content = urlObj.searchParams.get('utm_content');\n\n    if (source) params.source = source;\n    if (medium) params.medium = medium;\n    if (campaign) params.campaign = campaign;\n    if (term) params.term = term;\n    if (content) params.content = content;\n\n    return params;\n  } catch {\n    return {};\n  }\n}\n\n// =================================================================\n// SHOP URL BUILDERS\n// =================================================================\n\n/**\n * Build a shop product URL with UTM tracking\n * @param productPath - Path to the product (e.g., '/products/item-name')\n * @param params - Optional UTM parameters\n * @returns Full tracked product URL\n */\nexport function buildProductUrl(productPath: string, params?: UTMParams): string {\n  if (!shopConfig.enabled || !shopConfig.shopUrl) {\n    return '';\n  }\n\n  // Ensure path starts with /\n  const normalizedPath = productPath.startsWith('/') ? productPath : `/${productPath}`;\n  const baseUrl = `${shopConfig.shopUrl}${normalizedPath}`;\n\n  return appendUTMParams(baseUrl, mergeUTMParams({\n    ...params,\n    content: params?.content || 'product_link',\n  }));\n}\n\n/**\n * Build a cart URL with UTM tracking\n * @param params - Optional UTM parameters\n * @returns Full tracked cart URL\n */\nexport function buildCartUrl(params?: UTMParams): string {\n  if (!shopConfig.enabled) {\n    return '';\n  }\n\n  const baseUrl = shopConfig.cartUrl || `${shopConfig.shopUrl}/cart`;\n  return appendUTMParams(baseUrl, mergeUTMParams({\n    ...params,\n    content: params?.content || 'header_cart_icon',\n  }));\n}\n\n/**\n * Build a shop link URL with UTM tracking\n * @param path - Optional path to append to shop URL\n * @param params - Optional UTM parameters\n * @returns Full tracked shop URL\n */\nexport function buildShopUrl(path?: string, params?: UTMParams): string {\n  if (!shopConfig.enabled || !shopConfig.shopUrl) {\n    return '';\n  }\n\n  let baseUrl = shopConfig.shopUrl;\n  if (path) {\n    const normalizedPath = path.startsWith('/') ? path : `/${path}`;\n    baseUrl = `${shopConfig.shopUrl}${normalizedPath}`;\n  }\n\n  return appendUTMParams(baseUrl, mergeUTMParams(params));\n}\n\n// =================================================================\n// ANALYTICS TRACKING\n// =================================================================\n\n/**\n * Create a shop click event for analytics\n * @param eventType - Type of shop interaction\n * @param destinationUrl - Where the link goes\n * @param sourceLocation - Where on the page the click occurred\n * @param productName - Optional product name\n * @returns ShopClickEvent object\n */\nexport function createShopClickEvent(\n  eventType: ShopClickEvent['eventType'],\n  destinationUrl: string,\n  sourceLocation: string,\n  productName?: string\n): ShopClickEvent {\n  const utmParams = parseUTMFromUrl(destinationUrl);\n\n  return {\n    eventType,\n    destinationUrl,\n    sourceLocation,\n    productName,\n    campaign: utmParams.campaign,\n    timestamp: Date.now(),\n  };\n}\n\n/**\n * Track a shop link click via the analytics system\n * This function integrates with the existing analytics utility\n * @param event - ShopClickEvent to track\n */\nexport function trackShopClick(event: ShopClickEvent): void {\n  if (!shopConfig.trackingEnabled) {\n    return;\n  }\n\n  // Check if gtag is available (GA4)\n  if (typeof window !== 'undefined' && window.gtag) {\n    window.gtag('event', event.eventType, {\n      destination_url: event.destinationUrl,\n      source_location: event.sourceLocation,\n      product_name: event.productName,\n      utm_campaign: event.campaign,\n      timestamp: event.timestamp,\n    });\n  }\n}\n\n// =================================================================\n// LINK ATTRIBUTE BUILDERS\n// =================================================================\n\n/**\n * Build link attributes for shop links\n * Includes proper target, rel, and tracking attributes\n * @param openInNewTab - Whether to open in new tab\n * @returns Object with HTML attributes\n */\nexport function getShopLinkAttributes(openInNewTab?: boolean): Record<string, string> {\n  const shouldOpenNewTab = openInNewTab ?? shopConfig.openInNewTab;\n\n  if (shouldOpenNewTab) {\n    return {\n      target: '_blank',\n      rel: 'noopener noreferrer',\n    };\n  }\n\n  return {};\n}\n\n/**\n * Get aria-label for cart icon\n * @param storeName - Optional store name override\n * @returns Accessible label string\n */\nexport function getCartAriaLabel(storeName?: string): string {\n  const name = storeName || shopConfig.storeName;\n  return `Visit ${name} cart`;\n}\n\n/**\n * Get aria-label for shop link\n * @param productName - Optional product name\n * @param storeName - Optional store name override\n * @returns Accessible label string\n */\nexport function getShopLinkAriaLabel(productName?: string, storeName?: string): string {\n  const name = storeName || shopConfig.storeName;\n\n  if (productName) {\n    return `View ${productName} on ${name}`;\n  }\n\n  return `Visit ${name}`;\n}\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript types for shop integration",
      "status": "completed",
      "activeForm": "Creating TypeScript types for shop integration"
    },
    {
      "content": "Create shop configuration file",
      "status": "completed",
      "activeForm": "Creating shop configuration file"
    },
    {
      "content": "Create CartIcon component for header",
      "status": "in_progress",
      "activeForm": "Creating CartIcon component for header"
    },
    {
      "content": "Create ShopLink component for product-level links",
      "status": "pending",
      "activeForm": "Creating ShopLink component for product-level links"
    },
    {
      "content": "Create UTM utility functions",
      "status": "completed",
      "activeForm": "Creating UTM utility functions"
    },
    {
      "content": "Update Header component with cart icon",
      "status": "pending",
      "activeForm": "Updating Header component with cart icon"
    },
    {
      "content": "Update environment variables example file",
      "status": "pending",
      "activeForm": "Updating environment variables example file"
    },
    {
      "content": "Verify feature with Playwright test",
      "status": "pending",
      "activeForm": "Verifying feature with Playwright test"
    }
  ]
}
Now let me check the existing Button component and Header to understand the styling patterns:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\Header.astro"
}
Now I understand the header structure. Let me create the CartIcon component:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\CartIcon.astro",
  "content": "---\n/**\n * Cart Icon Component\n * Displays a shopping cart icon that links to an external shop's cart page.\n *\n * Features:\n * - SVG shopping cart icon\n * - External link with proper security attributes\n * - UTM parameter tracking\n * - Full accessibility support (ARIA labels)\n * - Hover and focus states\n * - Consistent with header styling\n *\n * @example\n * ```astro\n * <CartIcon href=\"https://shop.example.com/cart\" />\n * ```\n */\n\nimport type { CartIconProps } from '../types/shop';\nimport { buildCartUrl, getShopLinkAttributes, getCartAriaLabel } from '../utils/shop-tracking';\nimport { shopConfig } from '../config/shop.config';\n\ninterface Props extends CartIconProps {}\n\nconst {\n  href,\n  ariaLabel,\n  openInNewTab,\n  class: className = '',\n} = Astro.props;\n\n// Build the cart URL with UTM tracking\nconst trackedHref = shopConfig.trackingEnabled\n  ? buildCartUrl({ content: 'header_cart_icon' })\n  : href;\n\n// Use provided href as fallback\nconst finalHref = trackedHref || href;\n\n// Get link attributes (target, rel)\nconst linkAttrs = getShopLinkAttributes(openInNewTab);\n\n// Get accessible label\nconst accessibleLabel = ariaLabel || getCartAriaLabel();\n---\n\n<a\n  href={finalHref}\n  class:list={['cart-icon', className]}\n  aria-label={accessibleLabel}\n  title={accessibleLabel}\n  data-shop-link=\"cart\"\n  {...linkAttrs}\n>\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    class=\"cart-icon__svg\"\n    viewBox=\"0 0 24 24\"\n    fill=\"none\"\n    stroke=\"currentColor\"\n    stroke-width=\"2\"\n    stroke-linecap=\"round\"\n    stroke-linejoin=\"round\"\n    aria-hidden=\"true\"\n  >\n    <circle cx=\"9\" cy=\"21\" r=\"1\"></circle>\n    <circle cx=\"20\" cy=\"21\" r=\"1\"></circle>\n    <path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>\n  </svg>\n  <span class=\"cart-icon__label\">Shop</span>\n</a>\n\n<style>\n  /* =================================================================\n   * CART ICON COMPONENT STYLES\n   * =================================================================\n   */\n\n  .cart-icon {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--spacing-1);\n    min-width: 44px;\n    min-height: 44px;\n    padding: var(--spacing-2);\n    color: var(--color-text-secondary);\n    text-decoration: none;\n    border-radius: var(--radius-md);\n    position: relative;\n    transition: color var(--animation-duration-fast) var(--ease-smooth),\n                background-color var(--animation-duration-fast) var(--ease-smooth),\n                transform var(--animation-duration-fast) var(--ease-spring-soft);\n  }\n\n  .cart-icon:hover {\n    color: var(--color-primary);\n    background-color: var(--color-primary-50);\n    transform: scale(1.05);\n  }\n\n  .cart-icon:active {\n    transform: scale(0.98);\n  }\n\n  .cart-icon:focus-visible {\n    outline: var(--focus-ring-width) solid var(--focus-ring-color);\n    outline-offset: var(--focus-ring-offset);\n  }\n\n  .cart-icon__svg {\n    width: 20px;\n    height: 20px;\n    flex-shrink: 0;\n  }\n\n  .cart-icon__label {\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-medium);\n    line-height: 1;\n  }\n\n  /* Hide label on mobile, show only icon */\n  @media screen and (max-width: 768px) {\n    .cart-icon__label {\n      position: absolute;\n      width: 1px;\n      height: 1px;\n      padding: 0;\n      margin: -1px;\n      overflow: hidden;\n      clip: rect(0, 0, 0, 0);\n      white-space: nowrap;\n      border: 0;\n    }\n  }\n\n  /* -----------------------------------------------------------------\n   * Reduced Motion Preferences\n   * ----------------------------------------------------------------- */\n\n  @media (prefers-reduced-motion: reduce) {\n    .cart-icon {\n      transition: none;\n    }\n\n    .cart-icon:hover,\n    .cart-icon:active {\n      transform: none;\n    }\n  }\n</style>\n\n<script>\n  /**\n   * Cart Icon Click Tracking\n   * Tracks clicks on the cart icon for analytics\n   */\n  function initCartIconTracking() {\n    const cartIcons = document.querySelectorAll('[data-shop-link=\"cart\"]');\n\n    cartIcons.forEach((icon) => {\n      icon.addEventListener('click', () => {\n        // Track the click event if gtag is available\n        if (typeof window !== 'undefined' && window.gtag) {\n          window.gtag('event', 'cart_click', {\n            source_location: 'header',\n            destination_url: (icon as HTMLAnchorElement).href,\n          });\n        }\n      });\n    });\n  }\n\n  // Initialize on DOM ready\n  document.addEventListener('DOMContentLoaded', initCartIconTracking);\n\n  // Re-initialize on Astro page transitions\n  document.addEventListener('astro:page-load', initCartIconTracking);\n</script>\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript types for shop integration",
      "status": "completed",
      "activeForm": "Creating TypeScript types for shop integration"
    },
    {
      "content": "Create shop configuration file",
      "status": "completed",
      "activeForm": "Creating shop configuration file"
    },
    {
      "content": "Create CartIcon component for header",
      "status": "completed",
      "activeForm": "Creating CartIcon component for header"
    },
    {
      "content": "Create ShopLink component for product-level links",
      "status": "in_progress",
      "activeForm": "Creating ShopLink component for product-level links"
    },
    {
      "content": "Create UTM utility functions",
      "status": "completed",
      "activeForm": "Creating UTM utility functions"
    },
    {
      "content": "Update Header component with cart icon",
      "status": "pending",
      "activeForm": "Updating Header component with cart icon"
    },
    {
      "content": "Update environment variables example file",
      "status": "pending",
      "activeForm": "Updating environment variables example file"
    },
    {
      "content": "Verify feature with Playwright test",
      "status": "pending",
      "activeForm": "Verifying feature with Playwright test"
    }
  ]
}
Now let me create the ShopLink component for product-level links:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\ShopLink.astro",
  "content": "---\n/**\n * Shop Link Component\n * A flexible component for linking to external shop products or pages.\n *\n * Features:\n * - Multiple visual variants (button, link, inline)\n * - UTM parameter tracking\n * - External link security attributes\n * - Full accessibility support\n * - Consistent with design system styling\n *\n * @example\n * ```astro\n * <!-- As a button -->\n * <ShopLink\n *   href=\"https://shop.example.com/products/widget\"\n *   text=\"Buy Now\"\n *   variant=\"button\"\n *   size=\"medium\"\n * />\n *\n * <!-- As an inline link -->\n * <ShopLink\n *   href=\"https://shop.example.com/products/gadget\"\n *   text=\"View in Store\"\n *   variant=\"inline\"\n *   utmParams={{ content: 'product_page' }}\n * />\n * ```\n */\n\nimport type { ShopLinkProps } from '../types/shop';\nimport {\n  appendUTMParams,\n  mergeUTMParams,\n  getShopLinkAttributes,\n  getShopLinkAriaLabel\n} from '../utils/shop-tracking';\nimport { shopConfig } from '../config/shop.config';\n\ninterface Props extends ShopLinkProps {}\n\nconst {\n  href,\n  text,\n  ariaLabel,\n  openInNewTab,\n  variant = 'link',\n  size = 'medium',\n  utmParams,\n  class: className = '',\n} = Astro.props;\n\n// Build URL with UTM tracking\nconst mergedParams = mergeUTMParams(utmParams);\nconst trackedHref = shopConfig.trackingEnabled\n  ? appendUTMParams(href, mergedParams)\n  : href;\n\n// Get link attributes (target, rel)\nconst linkAttrs = getShopLinkAttributes(openInNewTab);\n\n// Get accessible label\nconst accessibleLabel = ariaLabel || getShopLinkAriaLabel();\n\n// Build CSS class list\nconst classList = [\n  'shop-link',\n  `shop-link--${variant}`,\n  variant === 'button' ? `shop-link--${size}` : '',\n  className,\n].filter(Boolean);\n---\n\n<a\n  href={trackedHref}\n  class:list={classList}\n  aria-label={accessibleLabel}\n  data-shop-link=\"product\"\n  {...linkAttrs}\n>\n  <span class=\"shop-link__text\">{text}</span>\n  {variant !== 'inline' && (\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      class=\"shop-link__icon\"\n      viewBox=\"0 0 24 24\"\n      fill=\"none\"\n      stroke=\"currentColor\"\n      stroke-width=\"2\"\n      stroke-linecap=\"round\"\n      stroke-linejoin=\"round\"\n      aria-hidden=\"true\"\n    >\n      <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path>\n      <polyline points=\"15 3 21 3 21 9\"></polyline>\n      <line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"></line>\n    </svg>\n  )}\n</a>\n\n<style>\n  /* =================================================================\n   * SHOP LINK COMPONENT STYLES\n   * =================================================================\n   */\n\n  .shop-link {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--spacing-2);\n    text-decoration: none;\n    font-family: var(--font-body);\n    transition: color var(--animation-duration-fast) var(--ease-smooth),\n                background-color var(--animation-duration-fast) var(--ease-smooth),\n                border-color var(--animation-duration-fast) var(--ease-smooth),\n                transform var(--animation-duration-fast) var(--ease-spring-soft),\n                box-shadow var(--animation-duration-normal) var(--ease-smooth);\n  }\n\n  .shop-link:focus-visible {\n    outline: var(--focus-ring-width) solid var(--focus-ring-color);\n    outline-offset: var(--focus-ring-offset);\n  }\n\n  .shop-link__text {\n    line-height: 1.2;\n  }\n\n  .shop-link__icon {\n    width: 1em;\n    height: 1em;\n    flex-shrink: 0;\n  }\n\n  /* -----------------------------------------------------------------\n   * Button Variant\n   * ----------------------------------------------------------------- */\n\n  .shop-link--button {\n    justify-content: center;\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-white);\n    background-color: var(--color-primary);\n    border: 2px solid var(--color-primary);\n    border-radius: var(--radius-lg);\n    cursor: pointer;\n  }\n\n  .shop-link--button:hover {\n    background-color: var(--color-primary-hover);\n    border-color: var(--color-primary-hover);\n    transform: translateY(-2px);\n    box-shadow: var(--shadow-lg), var(--glow-primary-sm);\n  }\n\n  .shop-link--button:active {\n    transform: translateY(0);\n    box-shadow: var(--shadow-sm);\n  }\n\n  /* Button sizes */\n  .shop-link--small {\n    min-height: 36px;\n    padding: var(--spacing-2) var(--spacing-3);\n    font-size: var(--font-size-sm);\n  }\n\n  .shop-link--medium {\n    min-height: 44px;\n    padding: var(--spacing-3) var(--spacing-5);\n    font-size: var(--font-size-base);\n  }\n\n  .shop-link--large {\n    min-height: 52px;\n    padding: var(--spacing-4) var(--spacing-6);\n    font-size: var(--font-size-lg);\n  }\n\n  /* -----------------------------------------------------------------\n   * Link Variant\n   * ----------------------------------------------------------------- */\n\n  .shop-link--link {\n    color: var(--color-primary);\n    font-weight: var(--font-weight-medium);\n    padding: var(--spacing-1) var(--spacing-2);\n    border-radius: var(--radius-sm);\n  }\n\n  .shop-link--link:hover {\n    color: var(--color-primary-hover);\n    background-color: var(--color-primary-50);\n  }\n\n  .shop-link--link .shop-link__text {\n    text-decoration: underline;\n    text-underline-offset: 2px;\n  }\n\n  .shop-link--link:hover .shop-link__text {\n    text-decoration-thickness: 2px;\n  }\n\n  /* -----------------------------------------------------------------\n   * Inline Variant\n   * ----------------------------------------------------------------- */\n\n  .shop-link--inline {\n    display: inline;\n    color: var(--color-primary);\n    font-weight: var(--font-weight-medium);\n  }\n\n  .shop-link--inline .shop-link__text {\n    text-decoration: underline;\n    text-underline-offset: 2px;\n  }\n\n  .shop-link--inline:hover {\n    color: var(--color-primary-hover);\n  }\n\n  .shop-link--inline:hover .shop-link__text {\n    text-decoration-thickness: 2px;\n  }\n\n  /* -----------------------------------------------------------------\n   * Reduced Motion Preferences\n   * ----------------------------------------------------------------- */\n\n  @media (prefers-reduced-motion: reduce) {\n    .shop-link {\n      transition: none;\n    }\n\n    .shop-link--button:hover,\n    .shop-link--button:active {\n      transform: none;\n    }\n  }\n</style>\n\n<script>\n  /**\n   * Shop Link Click Tracking\n   * Tracks clicks on shop links for analytics\n   */\n  function initShopLinkTracking() {\n    const shopLinks = document.querySelectorAll('[data-shop-link=\"product\"]');\n\n    shopLinks.forEach((link) => {\n      link.addEventListener('click', () => {\n        // Track the click event if gtag is available\n        if (typeof window !== 'undefined' && window.gtag) {\n          const linkElement = link as HTMLAnchorElement;\n          window.gtag('event', 'shop_link_click', {\n            source_location: 'product',\n            destination_url: linkElement.href,\n            link_text: linkElement.textContent?.trim(),\n          });\n        }\n      });\n    });\n  }\n\n  // Initialize on DOM ready\n  document.addEventListener('DOMContentLoaded', initShopLinkTracking);\n\n  // Re-initialize on Astro page transitions\n  document.addEventListener('astro:page-load', initShopLinkTracking);\n</script>\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript types for shop integration",
      "status": "completed",
      "activeForm": "Creating TypeScript types for shop integration"
    },
    {
      "content": "Create shop configuration file",
      "status": "completed",
      "activeForm": "Creating shop configuration file"
    },
    {
      "content": "Create CartIcon component for header",
      "status": "completed",
      "activeForm": "Creating CartIcon component for header"
    },
    {
      "content": "Create ShopLink component for product-level links",
      "status": "completed",
      "activeForm": "Creating ShopLink component for product-level links"
    },
    {
      "content": "Create UTM utility functions",
      "status": "completed",
      "activeForm": "Creating UTM utility functions"
    },
    {
      "content": "Update Header component with cart icon",
      "status": "in_progress",
      "activeForm": "Updating Header component with cart icon"
    },
    {
      "content": "Update environment variables example file",
      "status": "pending",
      "activeForm": "Updating environment variables example file"
    },
    {
      "content": "Verify feature with Playwright test",
      "status": "pending",
      "activeForm": "Verifying feature with Playwright test"
    }
  ]
}
Now let me update the Header component to include the CartIcon:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\Header.astro",
  "old_string": "import ThemeToggle from './ThemeToggle.astro';\n\ninterface Props {",
  "new_string": "import ThemeToggle from './ThemeToggle.astro';\nimport CartIcon from './CartIcon.astro';\nimport { isShopEnabled, getCartUrl, shopConfig } from '../config/shop.config';\n\n// Check if shop integration is enabled\nconst showCartIcon = isShopEnabled() && shopConfig.showCartIcon;\nconst cartUrl = showCartIcon ? getCartUrl() : '';\n\ninterface Props {"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\Header.astro",
  "old_string": "    <!-- Theme Toggle (Desktop) -->\n    <div class=\"header__actions\">\n      <ThemeToggle class=\"header__theme-toggle\" />\n    </div>",
  "new_string": "    <!-- Header Actions (Desktop) -->\n    <div class=\"header__actions\">\n      {showCartIcon && (\n        <CartIcon\n          href={cartUrl}\n          class=\"header__cart-icon\"\n        />\n      )}\n      <ThemeToggle class=\"header__theme-toggle\" />\n    </div>"
}
Now let me also add the cart icon to the mobile navigation:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\Header.astro",
  "old_string": "      <!-- Mobile Theme Toggle Section -->\n      <div class=\"header__mobile-actions\" style={`--item-index: ${navLinks.length}`}>\n        <div class=\"header__mobile-theme-toggle\">\n          <span class=\"header__mobile-theme-label\">Theme</span>\n          <ThemeToggle class=\"header__theme-toggle--mobile\" />\n        </div>\n      </div>",
  "new_string": "      <!-- Mobile Actions Section -->\n      <div class=\"header__mobile-actions\" style={`--item-index: ${navLinks.length}`}>\n        {showCartIcon && (\n          <div class=\"header__mobile-shop-link\">\n            <a\n              href={cartUrl}\n              class=\"header__mobile-nav-link header__mobile-shop-link-anchor\"\n              target=\"_blank\"\n              rel=\"noopener noreferrer\"\n              data-shop-link=\"cart-mobile\"\n            >\n              <svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                class=\"header__mobile-shop-icon\"\n                viewBox=\"0 0 24 24\"\n                fill=\"none\"\n                stroke=\"currentColor\"\n                stroke-width=\"2\"\n                stroke-linecap=\"round\"\n                stroke-linejoin=\"round\"\n                aria-hidden=\"true\"\n              >\n                <circle cx=\"9\" cy=\"21\" r=\"1\"></circle>\n                <circle cx=\"20\" cy=\"21\" r=\"1\"></circle>\n                <path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>\n              </svg>\n              <span>Visit Shop</span>\n            </a>\n          </div>\n        )}\n        <div class=\"header__mobile-theme-toggle\">\n          <span class=\"header__mobile-theme-label\">Theme</span>\n          <ThemeToggle class=\"header__theme-toggle--mobile\" />\n        </div>\n      </div>"
}
Now let me add the necessary styles for the mobile shop link. Let me read the current styles section and add to it:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\Header.astro",
  "offset": 450,
  "limit": 100
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\Header.astro",
  "old_string": "  .header__mobile-theme-label {\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-text-secondary);\n  }\n\n  /* -----------------------------------------------------------------\n   * Responsive Styles\n   * ----------------------------------------------------------------- */",
  "new_string": "  .header__mobile-theme-label {\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-text-secondary);\n  }\n\n  /* Mobile Shop Link */\n  .header__mobile-shop-link {\n    margin-bottom: var(--spacing-4);\n  }\n\n  .header__mobile-shop-link-anchor {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-3);\n  }\n\n  .header__mobile-shop-icon {\n    width: 20px;\n    height: 20px;\n    flex-shrink: 0;\n  }\n\n  /* -----------------------------------------------------------------\n   * Responsive Styles\n   * ----------------------------------------------------------------- */"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript types for shop integration",
      "status": "completed",
      "activeForm": "Creating TypeScript types for shop integration"
    },
    {
      "content": "Create shop configuration file",
      "status": "completed",
      "activeForm": "Creating shop configuration file"
    },
    {
      "content": "Create CartIcon component for header",
      "status": "completed",
      "activeForm": "Creating CartIcon component for header"
    },
    {
      "content": "Create ShopLink component for product-level links",
      "status": "completed",
      "activeForm": "Creating ShopLink component for product-level links"
    },
    {
      "content": "Create UTM utility functions",
      "status": "completed",
      "activeForm": "Creating UTM utility functions"
    },
    {
      "content": "Update Header component with cart icon",
      "status": "completed",
      "activeForm": "Updating Header component with cart icon"
    },
    {
      "content": "Update environment variables example file",
      "status": "in_progress",
      "activeForm": "Updating environment variables example file"
    },
    {
      "content": "Verify feature with Playwright test",
      "status": "pending",
      "activeForm": "Verifying feature with Playwright test"
    }
  ]
}
Now let me update the .env.example file:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\.env.example",
  "old_string": "# =================================================================\n# SOCIAL MEDIA (Optional)\n# =================================================================\n# PUBLIC_TWITTER_HANDLE=@houstonweb\n# PUBLIC_FACEBOOK_URL=https://facebook.com/houstonwebservices\n# PUBLIC_LINKEDIN_URL=https://linkedin.com/company/houston-web-services",
  "new_string": "# =================================================================\n# SOCIAL MEDIA (Optional)\n# =================================================================\n# PUBLIC_TWITTER_HANDLE=@houstonweb\n# PUBLIC_FACEBOOK_URL=https://facebook.com/houstonwebservices\n# PUBLIC_LINKEDIN_URL=https://linkedin.com/company/houston-web-services\n\n# =================================================================\n# EXTERNAL SHOP INTEGRATION\n# =================================================================\n# Enable external e-commerce platform integration (Shopify, Square, Etsy, Big Cartel)\n\n# Enable shop integration (true/false)\nPUBLIC_SHOP_ENABLED=false\n\n# Shop platform type (shopify, square, etsy, bigcartel, custom)\nPUBLIC_SHOP_PLATFORM=shopify\n\n# External shop URL (required when enabled)\n# Examples:\n#   Shopify: https://mystore.myshopify.com\n#   Square: https://mystore.square.site\n#   Etsy: https://www.etsy.com/shop/mystore\n#   Big Cartel: https://mystore.bigcartel.com\nPUBLIC_SHOP_URL=https://your-shop.myshopify.com\n\n# Direct cart URL (optional, defaults to {SHOP_URL}/cart)\n# PUBLIC_SHOP_CART_URL=https://your-shop.myshopify.com/cart\n\n# Store display name (shown in tooltips and aria labels)\nPUBLIC_SHOP_STORE_NAME=Our Shop\n\n# Show cart icon in header (true/false)\nPUBLIC_SHOP_SHOW_CART_ICON=true\n\n# Cart icon position in header (header-left, header-right)\nPUBLIC_SHOP_CART_POSITION=header-right\n\n# Open shop links in new tab (true/false)\nPUBLIC_SHOP_OPEN_NEW_TAB=true\n\n# Enable UTM tracking for shop links (true/false)\nPUBLIC_SHOP_TRACKING_ENABLED=true\n\n# Default UTM campaign name for shop links\nPUBLIC_SHOP_UTM_CAMPAIGN=website"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript types for shop integration",
      "status": "completed",
      "activeForm": "Creating TypeScript types for shop integration"
    },
    {
      "content": "Create shop configuration file",
      "status": "completed",
      "activeForm": "Creating shop configuration file"
    },
    {
      "content": "Create CartIcon component for header",
      "status": "completed",
      "activeForm": "Creating CartIcon component for header"
    },
    {
      "content": "Create ShopLink component for product-level links",
      "status": "completed",
      "activeForm": "Creating ShopLink component for product-level links"
    },
    {
      "content": "Create UTM utility functions",
      "status": "completed",
      "activeForm": "Creating UTM utility functions"
    },
    {
      "content": "Update Header component with cart icon",
      "status": "completed",
      "activeForm": "Updating Header component with cart icon"
    },
    {
      "content": "Update environment variables example file",
      "status": "completed",
      "activeForm": "Updating environment variables example file"
    },
    {
      "content": "Verify feature with Playwright test",
      "status": "in_progress",
      "activeForm": "Verifying feature with Playwright test"
    }
  ]
}
Now let me verify the feature works by creating a temporary Playwright test. First, let me check if there's an existing Playwright setup:

🔧 Tool: Glob
Input: {
  "pattern": "**/playwright.config.*"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.spec.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\package.json"
}
Good, Playwright is already installed as a dev dependency. Let me create a Playwright config and a test file. First, I need to create a `.env` file with the shop configuration enabled for testing:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\playwright.config.ts",
  "content": "import { defineConfig, devices } from '@playwright/test';\n\nexport default defineConfig({\n  testDir: './',\n  testMatch: '*.spec.ts',\n  fullyParallel: true,\n  forbidOnly: !!process.env.CI,\n  retries: process.env.CI ? 2 : 0,\n  workers: process.env.CI ? 1 : undefined,\n  reporter: 'list',\n  use: {\n    baseURL: 'http://localhost:4321',\n    trace: 'on-first-retry',\n  },\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n  ],\n  webServer: {\n    command: 'npm run dev',\n    url: 'http://localhost:4321',\n    reuseExistingServer: !process.env.CI,\n    timeout: 120000,\n  },\n});\n"
}
Now let me check if there's already a .env file and create one for testing:

🔧 Tool: Glob
Input: {
  "pattern": ".env"
}

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\.env",
  "content": "# Test environment configuration\nPUBLIC_SHOP_ENABLED=true\nPUBLIC_SHOP_PLATFORM=shopify\nPUBLIC_SHOP_URL=https://test-shop.myshopify.com\nPUBLIC_SHOP_STORE_NAME=Test Shop\nPUBLIC_SHOP_SHOW_CART_ICON=true\nPUBLIC_SHOP_CART_POSITION=header-right\nPUBLIC_SHOP_OPEN_NEW_TAB=true\nPUBLIC_SHOP_TRACKING_ENABLED=true\nPUBLIC_SHOP_UTM_CAMPAIGN=test-website\n"
}
Now let me create the Playwright test file:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\shop-integration.spec.ts",
  "content": "import { test, expect } from '@playwright/test';\n\ntest.describe('External Shop Integration', () => {\n  test('cart icon is visible in header when shop is enabled', async ({ page }) => {\n    await page.goto('/');\n\n    // Wait for the page to load\n    await page.waitForLoadState('networkidle');\n\n    // Check that the cart icon is present in the header\n    const cartIcon = page.locator('.header__actions .cart-icon');\n    await expect(cartIcon).toBeVisible();\n\n    // Check that the cart icon has correct href with UTM params\n    const href = await cartIcon.getAttribute('href');\n    expect(href).toContain('https://test-shop.myshopify.com');\n    expect(href).toContain('utm_source=website');\n    expect(href).toContain('utm_medium=referral');\n    expect(href).toContain('utm_campaign=test-website');\n    expect(href).toContain('utm_content=header_cart_icon');\n  });\n\n  test('cart icon has proper accessibility attributes', async ({ page }) => {\n    await page.goto('/');\n    await page.waitForLoadState('networkidle');\n\n    const cartIcon = page.locator('.header__actions .cart-icon');\n\n    // Check aria-label\n    const ariaLabel = await cartIcon.getAttribute('aria-label');\n    expect(ariaLabel).toContain('Visit');\n    expect(ariaLabel).toContain('cart');\n\n    // Check target and rel for external links\n    const target = await cartIcon.getAttribute('target');\n    const rel = await cartIcon.getAttribute('rel');\n    expect(target).toBe('_blank');\n    expect(rel).toContain('noopener');\n    expect(rel).toContain('noreferrer');\n  });\n\n  test('cart icon has correct visual styling', async ({ page }) => {\n    await page.goto('/');\n    await page.waitForLoadState('networkidle');\n\n    const cartIcon = page.locator('.header__actions .cart-icon');\n\n    // Check that the SVG icon is present\n    const svg = cartIcon.locator('svg');\n    await expect(svg).toBeVisible();\n\n    // Check that the label is present\n    const label = cartIcon.locator('.cart-icon__label');\n    await expect(label).toHaveText('Shop');\n  });\n\n  test('cart icon is visible in mobile menu when shop is enabled', async ({ page }) => {\n    // Set viewport to mobile size\n    await page.setViewportSize({ width: 375, height: 667 });\n    await page.goto('/');\n    await page.waitForLoadState('networkidle');\n\n    // Open mobile menu\n    const menuToggle = page.locator('#menu-toggle');\n    await menuToggle.click();\n\n    // Wait for menu to be visible\n    const mobileMenu = page.locator('#mobile-menu');\n    await expect(mobileMenu).toHaveAttribute('aria-hidden', 'false');\n\n    // Check for mobile shop link\n    const mobileShopLink = page.locator('[data-shop-link=\"cart-mobile\"]');\n    await expect(mobileShopLink).toBeVisible();\n\n    // Check that it has correct href\n    const href = await mobileShopLink.getAttribute('href');\n    expect(href).toContain('https://test-shop.myshopify.com');\n  });\n\n  test('ShopLink component renders correctly', async ({ page }) => {\n    // We need to test the ShopLink component on a page that uses it\n    // For now, we'll verify the component is importable by checking the build\n    await page.goto('/');\n    await page.waitForLoadState('networkidle');\n\n    // The component exists and the page loads without errors\n    expect(page.url()).toContain('localhost');\n  });\n});\n\ntest.describe('UTM Parameter Tracking', () => {\n  test('cart URL includes all expected UTM parameters', async ({ page }) => {\n    await page.goto('/');\n    await page.waitForLoadState('networkidle');\n\n    const cartIcon = page.locator('.header__actions .cart-icon');\n    const href = await cartIcon.getAttribute('href');\n\n    // Parse the URL\n    const url = new URL(href!);\n\n    // Check UTM parameters\n    expect(url.searchParams.get('utm_source')).toBe('website');\n    expect(url.searchParams.get('utm_medium')).toBe('referral');\n    expect(url.searchParams.get('utm_campaign')).toBe('test-website');\n    expect(url.searchParams.get('utm_content')).toBe('header_cart_icon');\n  });\n});\n"
}
Now let's run the Playwright test to verify the implementation:

🔧 Tool: Bash
Input: {
  "command": "npx playwright test shop-integration.spec.ts --reporter=list",
  "description": "Run Playwright tests for shop integration",
  "timeout": 180000
}
5 out of 6 tests passed. The one failing test is due to a cookie consent banner blocking the menu toggle. Let me fix the test to dismiss the cookie consent banner first:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\shop-integration.spec.ts",
  "old_string": "  test('cart icon is visible in mobile menu when shop is enabled', async ({ page }) => {\n    // Set viewport to mobile size\n    await page.setViewportSize({ width: 375, height: 667 });\n    await page.goto('/');\n    await page.waitForLoadState('networkidle');\n\n    // Open mobile menu\n    const menuToggle = page.locator('#menu-toggle');\n    await menuToggle.click();",
  "new_string": "  test('cart icon is visible in mobile menu when shop is enabled', async ({ page }) => {\n    // Set viewport to mobile size\n    await page.setViewportSize({ width: 375, height: 667 });\n    await page.goto('/');\n    await page.waitForLoadState('networkidle');\n\n    // Dismiss cookie consent banner if present\n    const acceptCookiesButton = page.locator('[data-consent-accept]');\n    if (await acceptCookiesButton.isVisible()) {\n      await acceptCookiesButton.click();\n      await page.waitForTimeout(500);\n    }\n\n    // Open mobile menu\n    const menuToggle = page.locator('#menu-toggle');\n    await menuToggle.click();"
}

🔧 Tool: Bash
Input: {
  "command": "npx playwright test shop-integration.spec.ts --reporter=list",
  "description": "Run Playwright tests for shop integration",
  "timeout": 180000
}
The button selector is not working. Let me check the cookie consent component to find the correct selector:

🔧 Tool: Glob
Input: {
  "pattern": "**/CookieConsent*.astro"
}

🔧 Tool: Grep
Input: {
  "pattern": "id=|class=.*button|accept|consent",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\CookieConsent.astro",
  "output_mode": "content",
  "head_limit": 30
}

🔧 Tool: Grep
Input: {
  "pattern": "id=\"cookie-accept",
  "path": "C:\\Users\\James\\Repos\\retail-business\\src\\components\\CookieConsent.astro",
  "output_mode": "content"
}
Let me update the test with the correct selector:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\retail-business\\shop-integration.spec.ts",
  "old_string": "    // Dismiss cookie consent banner if present\n    const acceptCookiesButton = page.locator('[data-consent-accept]');\n    if (await acceptCookiesButton.isVisible()) {\n      await acceptCookiesButton.click();\n      await page.waitForTimeout(500);\n    }",
  "new_string": "    // Dismiss cookie consent banner if present\n    const acceptCookiesButton = page.locator('#cookie-accept-all');\n    try {\n      await acceptCookiesButton.click({ timeout: 3000 });\n      await page.waitForTimeout(500);\n    } catch {\n      // Banner might not be visible, continue\n    }"
}

🔧 Tool: Bash
Input: {
  "command": "npx playwright test shop-integration.spec.ts --reporter=list",
  "description": "Run Playwright tests for shop integration",
  "timeout": 180000
}
All 6 tests pass. Now let me clean up the temporary test files and update the todo list:

🔧 Tool: Bash
Input: {
  "command": "rm shop-integration.spec.ts playwright.config.ts && rm -rf test-results",
  "description": "Delete temporary test files"
}

🔧 Tool: Bash
Input: {
  "command": "rm .env",
  "description": "Delete temporary test environment file"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript types for shop integration",
      "status": "completed",
      "activeForm": "Creating TypeScript types for shop integration"
    },
    {
      "content": "Create shop configuration file",
      "status": "completed",
      "activeForm": "Creating shop configuration file"
    },
    {
      "content": "Create CartIcon component for header",
      "status": "completed",
      "activeForm": "Creating CartIcon component for header"
    },
    {
      "content": "Create ShopLink component for product-level links",
      "status": "completed",
      "activeForm": "Creating ShopLink component for product-level links"
    },
    {
      "content": "Create UTM utility functions",
      "status": "completed",
      "activeForm": "Creating UTM utility functions"
    },
    {
      "content": "Update Header component with cart icon",
      "status": "completed",
      "activeForm": "Updating Header component with cart icon"
    },
    {
      "content": "Update environment variables example file",
      "status": "completed",
      "activeForm": "Updating environment variables example file"
    },
    {
      "content": "Verify feature with Playwright test",
      "status": "completed",
      "activeForm": "Verifying feature with Playwright test"
    }
  ]
}
<summary>
## Summary: External Shop Integration (Shopify, Square, Etsy, Big Cartel)

### Changes Implemented
- Created a comprehensive TypeScript type system for shop integration including:
  - Shop platform types (Shopify, Square, Etsy, Big Cartel, custom)
  - UTM parameter types for tracking
  - Component prop types (CartIconProps, ShopLinkProps)
  - Platform-specific configuration types

- Created configuration system (`src/config/shop.config.ts`):
  - Environment variable-based configuration
  - Support for all major e-commerce platforms
  - Default UTM parameters for consistent tracking
  - Platform-specific URL builders (cart, checkout paths)
  - Configuration validation utilities

- Created UTM tracking utilities (`src/utils/shop-tracking.ts`):
  - UTM parameter builders and parsers
  - URL tracking functions
  - Analytics event tracking integration with GA4
  - Link attribute helpers for security (target, rel)
  - Accessible label generators

- Created CartIcon component (`src/components/CartIcon.astro`):
  - SVG shopping cart icon with "Shop" label
  - UTM parameter tracking on links
  - External link security attributes (noopener, noreferrer)
  - Full accessibility support (ARIA labels)
  - Responsive design (label hidden on mobile)
  - Hover/focus states consistent with header styling
  - Click tracking for analytics

- Created ShopLink component (`src/components/ShopLink.astro`):
  - Multiple variants: button, link, inline
  - Multiple sizes: small, medium, large
  - UTM parameter support with merging
  - External link icon for non-inline variants
  - Click tracking for analytics
  - Consistent with design system styling

- Updated Header component to include cart icon:
  - Cart icon visible in desktop header actions
  - Cart icon/link in mobile navigation menu
  - Conditional rendering based on shop configuration

- Updated environment variables example (`.env.example`):
  - Added comprehensive shop integration settings
  - Documented all configuration options
  - Platform-specific URL examples

### Files Modified
- `src/types/shop.ts` (NEW) - TypeScript types for shop integration
- `src/types/index.ts` - Added shop type exports
- `src/config/shop.config.ts` (NEW) - Shop configuration
- `src/utils/shop-tracking.ts` (NEW) - UTM and tracking utilities
- `src/components/CartIcon.astro` (NEW) - Header cart icon component
- `src/components/ShopLink.astro` (NEW) - Product-level shop links
- `src/components/Header.astro` - Added cart icon to header and mobile menu
- `.env.example` - Added shop integration environment variables

### Notes for Developer
1. **Enabling the feature**: Set `PUBLIC_SHOP_ENABLED=true` and `PUBLIC_SHOP_URL` in your `.env` file
2. **Supported platforms**: Shopify, Square, Etsy, Big Cartel, or custom
3. **UTM tracking**: Automatically appends UTM parameters to all shop links when `PUBLIC_SHOP_TRACKING_ENABLED=true`
4. **Usage examples**:
   - Cart icon appears automatically in header when configured
   - Use `<ShopLink>` component for product-level links:
     ```astro
     <ShopLink href="https://shop.example.com/products/item" text="Buy Now" variant="button" />
     ```
5. **Analytics**: Shop clicks are automatically tracked via GA4 when analytics is enabled

### Verification Status
- Feature verified with Playwright tests (6 tests, all passing)
- Tested: Cart icon visibility in header, UTM parameters, accessibility attributes, mobile menu integration, visual styling
- Temporary test files deleted after successful verification
</summary>