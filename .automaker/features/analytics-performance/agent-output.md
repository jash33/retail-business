
🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "Explore the codebase to understand its structure. I need to implement comprehensive website performance and analytics optimization including:\n1. Google Analytics 4 integration with privacy compliance\n2. Image optimization (WebP, lazy loading, responsive images)\n3. CSS/JS minification and optimization\n4. Lighthouse performance targets (95+ scores)\n\nPlease find:\n1. The project structure (what kind of project is this - React, Next.js, vanilla HTML, etc.)\n2. Existing HTML/template files\n3. Existing CSS and JavaScript files\n4. Build configuration files (webpack, vite, package.json, etc.)\n5. Any existing analytics or performance-related code\n6. Image assets location\n\nBe thorough in exploring all relevant directories and files.",
  "subagent_type": "Explore"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\package.json"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\astro.config.mjs"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\houston-web-services\"",
  "description": "List root directory contents"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\houston-web-services\\src\" -type f -name \"*\" | head -50",
  "description": "Find all files in src directory"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\houston-web-services\\src\"",
  "description": "List src directory structure"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\houston-web-services\\public\"",
  "description": "List public directory structure"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\houston-web-services\\public\\portfolio\" -type f",
  "description": "Find all files in portfolio directory"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\layouts\\Layout.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\index.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\styles\\globals.css"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\styles\\variables.css"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\SEO.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\config\\seo.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\\portfolio.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\*.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\HeroSection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\Header.astro"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\houston-web-services\\src\\assets\" -type f",
  "description": "List all asset files"
}

🔧 Tool: Grep
Input: {
  "pattern": "analytics|gtag|google|performance|PageSpeed|Lighthouse",
  "path": "C:\\Users\\James\\Repos\\houston-web-services",
  "type": "ts,js,astro",
  "head_limit": 20
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\types\\index.ts"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\houston-web-services\\src\\pages\" -type f -name \"*.astro\" | head -10",
  "description": "List all page files"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\houston-web-services\" -type f \\( -name \"tsconfig.json\" -o -name \"astro.config.mjs\" -o -name \".env*\" \\)",
  "description": "Find config files"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\tsconfig.json"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\.gitignore"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\public\\robots.txt"
}

🔧 Tool: Bash
Input: {
  "command": "head -30 \"C:\\Users\\James\\Repos\\houston-web-services\\README.md\"",
  "description": "Read README file"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\Button.astro",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\utils\\local-business-jsonld.ts"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\houston-web-services\\src\\utils\"",
  "description": "List utility files"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\houston-web-services\\src\\types\"",
  "description": "List type files"
}

🔧 Tool: Bash
Input: {
  "command": "wc -l \"C:\\Users\\James\\Repos\\houston-web-services\\src\\types\"/*.ts 2>/dev/null | tail -1",
  "description": "Count total lines in type files"
}
Now I have a comprehensive understanding of the codebase. This is an Astro 5.x project with a well-structured component architecture. Let me read the key files I'll need to modify and then implement the analytics and performance optimization features.

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/houston-web-services/src/layouts/Layout.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/houston-web-services/package.json"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/houston-web-services/astro.config.mjs"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/houston-web-services/src/styles/globals.css"
}
Now let me read a few more files to understand the existing SEO component and check if there are any images in other formats that need optimization:

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/houston-web-services/src/components/SEO.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.{png,jpg,jpeg,gif,webp}",
  "path": "/Users/James/Repos/houston-web-services"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/houston-web-services/src/pages/index.astro"
}
Now I have a good understanding of the codebase. Let me create a comprehensive todo list and start implementing the analytics and performance optimization features.

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create Google Analytics 4 integration with privacy-compliant configuration",
      "status": "in_progress",
      "activeForm": "Creating Google Analytics 4 integration"
    },
    {
      "content": "Implement cookie consent banner component with granular controls",
      "status": "pending",
      "activeForm": "Implementing cookie consent banner"
    },
    {
      "content": "Create analytics utility functions and event tracking",
      "status": "pending",
      "activeForm": "Creating analytics utility functions"
    },
    {
      "content": "Update Layout.astro to integrate GA4 and consent components",
      "status": "pending",
      "activeForm": "Updating Layout.astro with analytics"
    },
    {
      "content": "Add image optimization utilities and lazy loading",
      "status": "pending",
      "activeForm": "Adding image optimization utilities"
    },
    {
      "content": "Update Astro config for performance optimizations",
      "status": "pending",
      "activeForm": "Updating Astro config"
    },
    {
      "content": "Add critical CSS and performance CSS utilities",
      "status": "pending",
      "activeForm": "Adding critical CSS utilities"
    },
    {
      "content": "Create performance monitoring component",
      "status": "pending",
      "activeForm": "Creating performance monitoring"
    },
    {
      "content": "Add TypeScript types for analytics and consent",
      "status": "pending",
      "activeForm": "Adding TypeScript types"
    }
  ]
}
Let me start by creating the TypeScript types for analytics and consent, then create all the necessary components and utilities:

🔧 Tool: Write
Input: {
  "file_path": "/Users/James/Repos/houston-web-services/src/types/analytics.ts",
  "content": "/**\n * =================================================================\n * ANALYTICS & CONSENT TYPE DEFINITIONS\n * =================================================================\n *\n * TypeScript types for Google Analytics 4 integration with\n * privacy-compliant configuration and cookie consent management.\n *\n * =================================================================\n */\n\n// =================================================================\n// CONSENT TYPES\n// =================================================================\n\n/**\n * Consent categories for granular user control\n */\nexport type ConsentCategory =\n  | 'necessary'      // Essential cookies (always enabled)\n  | 'analytics'      // Analytics & performance tracking\n  | 'marketing'      // Marketing & advertising cookies\n  | 'preferences';   // User preference cookies\n\n/**\n * Consent status for each category\n */\nexport type ConsentStatus = 'granted' | 'denied' | 'pending';\n\n/**\n * User consent preferences object\n */\nexport interface ConsentPreferences {\n  necessary: true;           // Always true (required for site functionality)\n  analytics: boolean;\n  marketing: boolean;\n  preferences: boolean;\n}\n\n/**\n * Full consent state including metadata\n */\nexport interface ConsentState {\n  preferences: ConsentPreferences;\n  timestamp: number;         // When consent was given/updated\n  version: string;           // Consent version for tracking policy changes\n  region?: string;           // User's region for compliance (GDPR/CCPA)\n  hasConsented: boolean;     // Whether user has made a consent choice\n}\n\n/**\n * Cookie consent banner configuration\n */\nexport interface ConsentBannerConfig {\n  /** Show banner on first visit */\n  showOnFirstVisit: boolean;\n  /** Position of the banner */\n  position: 'bottom' | 'top' | 'center';\n  /** Privacy policy URL */\n  privacyPolicyUrl: string;\n  /** Cookie policy URL */\n  cookiePolicyUrl?: string;\n  /** Company name for consent text */\n  companyName: string;\n  /** Consent version (update when policy changes) */\n  consentVersion: string;\n  /** Auto-hide after accepting */\n  autoHide: boolean;\n  /** Cookie expiration in days */\n  cookieExpireDays: number;\n}\n\n// =================================================================\n// GOOGLE ANALYTICS 4 TYPES\n// =================================================================\n\n/**\n * GA4 Configuration options\n */\nexport interface GA4Config {\n  /** GA4 Measurement ID (G-XXXXXXXXXX) */\n  measurementId: string;\n  /** Enable debug mode (development only) */\n  debug?: boolean;\n  /** Send page views automatically */\n  sendPageView?: boolean;\n  /** Enable IP anonymization (recommended for GDPR) */\n  anonymizeIp?: boolean;\n  /** Cookie domain configuration */\n  cookieDomain?: string;\n  /** Cookie expiration in seconds */\n  cookieExpires?: number;\n  /** Cookie flags */\n  cookieFlags?: string;\n  /** Data retention period */\n  dataRetention?: '14months' | '26months' | '38months' | '50months';\n}\n\n/**\n * GA4 Consent mode configuration\n * @see https://developers.google.com/tag-platform/devguides/consent\n */\nexport interface GA4ConsentMode {\n  /** Analytics storage consent */\n  analytics_storage: ConsentStatus;\n  /** Ad storage consent */\n  ad_storage: ConsentStatus;\n  /** Ad user data consent */\n  ad_user_data: ConsentStatus;\n  /** Ad personalization consent */\n  ad_personalization: ConsentStatus;\n  /** Functionality storage */\n  functionality_storage?: ConsentStatus;\n  /** Personalization storage */\n  personalization_storage?: ConsentStatus;\n  /** Security storage */\n  security_storage?: ConsentStatus;\n  /** Wait for consent update (ms) */\n  wait_for_update?: number;\n  /** Regions for this consent configuration */\n  region?: string[];\n}\n\n// =================================================================\n// EVENT TRACKING TYPES\n// =================================================================\n\n/**\n * Standard GA4 event names\n */\nexport type GA4StandardEvent =\n  | 'page_view'\n  | 'scroll'\n  | 'click'\n  | 'view_item'\n  | 'add_to_cart'\n  | 'begin_checkout'\n  | 'purchase'\n  | 'sign_up'\n  | 'login'\n  | 'search'\n  | 'share'\n  | 'generate_lead'\n  | 'select_content';\n\n/**\n * Custom event names for Houston Web Services\n */\nexport type CustomEventName =\n  | 'contact_form_start'\n  | 'contact_form_submit'\n  | 'contact_form_success'\n  | 'contact_form_error'\n  | 'service_view'\n  | 'portfolio_view'\n  | 'cta_click'\n  | 'phone_click'\n  | 'email_click'\n  | 'social_click'\n  | 'navigation_click'\n  | 'scroll_depth'\n  | 'time_on_page'\n  | 'file_download'\n  | 'video_play'\n  | 'consent_granted'\n  | 'consent_denied'\n  | 'consent_updated';\n\n/**\n * Union of all event types\n */\nexport type AnalyticsEvent = GA4StandardEvent | CustomEventName;\n\n/**\n * Base event parameters\n */\nexport interface BaseEventParams {\n  /** Event timestamp */\n  timestamp?: number;\n  /** Page path */\n  page_path?: string;\n  /** Page title */\n  page_title?: string;\n  /** Page location (URL) */\n  page_location?: string;\n  /** User engagement time */\n  engagement_time_msec?: number;\n}\n\n/**\n * Page view event parameters\n */\nexport interface PageViewParams extends BaseEventParams {\n  page_referrer?: string;\n}\n\n/**\n * Click event parameters\n */\nexport interface ClickEventParams extends BaseEventParams {\n  link_url?: string;\n  link_text?: string;\n  link_id?: string;\n  link_classes?: string;\n  outbound?: boolean;\n}\n\n/**\n * Form event parameters\n */\nexport interface FormEventParams extends BaseEventParams {\n  form_id?: string;\n  form_name?: string;\n  form_destination?: string;\n  form_submit_text?: string;\n  value?: number;\n}\n\n/**\n * Scroll event parameters\n */\nexport interface ScrollEventParams extends BaseEventParams {\n  percent_scrolled: number;\n}\n\n/**\n * CTA click event parameters\n */\nexport interface CTAEventParams extends BaseEventParams {\n  cta_text: string;\n  cta_location: string;\n  cta_destination: string;\n  cta_type?: 'primary' | 'secondary' | 'link';\n}\n\n/**\n * Lead generation event parameters\n */\nexport interface LeadEventParams extends BaseEventParams {\n  lead_source?: string;\n  value?: number;\n  currency?: string;\n  service_interest?: string;\n}\n\n/**\n * Union type for all event parameters\n */\nexport type EventParams =\n  | BaseEventParams\n  | PageViewParams\n  | ClickEventParams\n  | FormEventParams\n  | ScrollEventParams\n  | CTAEventParams\n  | LeadEventParams\n  | Record<string, unknown>;\n\n// =================================================================\n// USER PROPERTIES\n// =================================================================\n\n/**\n * Custom user properties for GA4\n */\nexport interface UserProperties {\n  /** User type (visitor, lead, customer) */\n  user_type?: 'visitor' | 'lead' | 'customer';\n  /** First visit date */\n  first_visit_date?: string;\n  /** Geographic region */\n  user_region?: string;\n  /** Referral source */\n  traffic_source?: string;\n  /** Device category */\n  device_category?: 'desktop' | 'mobile' | 'tablet';\n  /** Consent status */\n  consent_analytics?: boolean;\n  consent_marketing?: boolean;\n}\n\n// =================================================================\n// ANALYTICS SERVICE INTERFACE\n// =================================================================\n\n/**\n * Analytics service interface for abstraction\n */\nexport interface AnalyticsService {\n  /** Initialize analytics */\n  init(config: GA4Config): void;\n  /** Track an event */\n  trackEvent(eventName: AnalyticsEvent, params?: EventParams): void;\n  /** Track page view */\n  trackPageView(params?: PageViewParams): void;\n  /** Set user properties */\n  setUserProperties(properties: UserProperties): void;\n  /** Update consent */\n  updateConsent(consent: Partial<GA4ConsentMode>): void;\n  /** Check if analytics is enabled */\n  isEnabled(): boolean;\n}\n\n// =================================================================\n// PERFORMANCE METRICS\n// =================================================================\n\n/**\n * Core Web Vitals metrics\n */\nexport interface WebVitals {\n  /** Largest Contentful Paint */\n  LCP?: number;\n  /** First Input Delay */\n  FID?: number;\n  /** Cumulative Layout Shift */\n  CLS?: number;\n  /** First Contentful Paint */\n  FCP?: number;\n  /** Time to First Byte */\n  TTFB?: number;\n  /** Interaction to Next Paint */\n  INP?: number;\n}\n\n/**\n * Performance entry for tracking\n */\nexport interface PerformanceEntry {\n  name: string;\n  value: number;\n  rating: 'good' | 'needs-improvement' | 'poor';\n  delta: number;\n  id: string;\n}\n\n// =================================================================\n// GTAG TYPE DECLARATIONS\n// =================================================================\n\n/**\n * Global gtag function declaration\n */\ndeclare global {\n  interface Window {\n    gtag: (\n      command: 'config' | 'event' | 'js' | 'set' | 'consent',\n      targetId: string | Date | 'default' | 'update',\n      config?: Record<string, unknown>\n    ) => void;\n    dataLayer: unknown[];\n  }\n}\n\nexport {};\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create Google Analytics 4 integration with privacy-compliant configuration",
      "status": "in_progress",
      "activeForm": "Creating Google Analytics 4 integration"
    },
    {
      "content": "Implement cookie consent banner component with granular controls",
      "status": "pending",
      "activeForm": "Implementing cookie consent banner"
    },
    {
      "content": "Create analytics utility functions and event tracking",
      "status": "pending",
      "activeForm": "Creating analytics utility functions"
    },
    {
      "content": "Update Layout.astro to integrate GA4 and consent components",
      "status": "pending",
      "activeForm": "Updating Layout.astro with analytics"
    },
    {
      "content": "Add image optimization utilities and lazy loading",
      "status": "pending",
      "activeForm": "Adding image optimization utilities"
    },
    {
      "content": "Update Astro config for performance optimizations",
      "status": "pending",
      "activeForm": "Updating Astro config"
    },
    {
      "content": "Add critical CSS and performance CSS utilities",
      "status": "pending",
      "activeForm": "Adding critical CSS utilities"
    },
    {
      "content": "Create performance monitoring component",
      "status": "pending",
      "activeForm": "Creating performance monitoring"
    },
    {
      "content": "Add TypeScript types for analytics and consent",
      "status": "completed",
      "activeForm": "Adding TypeScript types"
    }
  ]
}
Now let me create the analytics configuration and utility functions:

🔧 Tool: Write
Input: {
  "file_path": "/Users/James/Repos/houston-web-services/src/config/analytics.config.ts",
  "content": "/**\n * =================================================================\n * ANALYTICS CONFIGURATION\n * =================================================================\n *\n * Configuration for Google Analytics 4 with privacy-compliant settings\n * including GDPR/CCPA compliance, consent mode, and data retention.\n *\n * =================================================================\n */\n\nimport type {\n  GA4Config,\n  GA4ConsentMode,\n  ConsentBannerConfig,\n  ConsentPreferences,\n} from '../types/analytics';\n\n// =================================================================\n// GOOGLE ANALYTICS 4 CONFIGURATION\n// =================================================================\n\n/**\n * GA4 Measurement ID\n * Replace with your actual GA4 Measurement ID\n * Format: G-XXXXXXXXXX\n */\nexport const GA4_MEASUREMENT_ID = import.meta.env.PUBLIC_GA4_MEASUREMENT_ID || 'G-XXXXXXXXXX';\n\n/**\n * GA4 Configuration with privacy-focused settings\n */\nexport const ga4Config: GA4Config = {\n  measurementId: GA4_MEASUREMENT_ID,\n  debug: import.meta.env.DEV,\n  sendPageView: true,\n  anonymizeIp: true,\n  cookieDomain: 'auto',\n  cookieExpires: 63072000, // 2 years in seconds (GA4 default)\n  cookieFlags: 'SameSite=Lax;Secure',\n  dataRetention: '14months',\n};\n\n// =================================================================\n// CONSENT MODE CONFIGURATION\n// =================================================================\n\n/**\n * Default consent state (before user makes a choice)\n * Following Google's Consent Mode v2 requirements\n */\nexport const defaultConsentMode: GA4ConsentMode = {\n  analytics_storage: 'denied',\n  ad_storage: 'denied',\n  ad_user_data: 'denied',\n  ad_personalization: 'denied',\n  functionality_storage: 'denied',\n  personalization_storage: 'denied',\n  security_storage: 'granted', // Always granted for security\n  wait_for_update: 500, // Wait 500ms for consent update\n};\n\n/**\n * Consent mode for users who accept all cookies\n */\nexport const acceptAllConsentMode: GA4ConsentMode = {\n  analytics_storage: 'granted',\n  ad_storage: 'granted',\n  ad_user_data: 'granted',\n  ad_personalization: 'granted',\n  functionality_storage: 'granted',\n  personalization_storage: 'granted',\n  security_storage: 'granted',\n};\n\n/**\n * Consent mode for users who only accept necessary cookies\n */\nexport const necessaryOnlyConsentMode: GA4ConsentMode = {\n  analytics_storage: 'denied',\n  ad_storage: 'denied',\n  ad_user_data: 'denied',\n  ad_personalization: 'denied',\n  functionality_storage: 'denied',\n  personalization_storage: 'denied',\n  security_storage: 'granted',\n};\n\n/**\n * Map consent preferences to GA4 consent mode\n */\nexport function mapConsentToGA4(preferences: ConsentPreferences): GA4ConsentMode {\n  return {\n    analytics_storage: preferences.analytics ? 'granted' : 'denied',\n    ad_storage: preferences.marketing ? 'granted' : 'denied',\n    ad_user_data: preferences.marketing ? 'granted' : 'denied',\n    ad_personalization: preferences.marketing ? 'granted' : 'denied',\n    functionality_storage: preferences.preferences ? 'granted' : 'denied',\n    personalization_storage: preferences.preferences ? 'granted' : 'denied',\n    security_storage: 'granted',\n  };\n}\n\n// =================================================================\n// COOKIE CONSENT BANNER CONFIGURATION\n// =================================================================\n\n/**\n * Cookie consent banner configuration\n */\nexport const consentBannerConfig: ConsentBannerConfig = {\n  showOnFirstVisit: true,\n  position: 'bottom',\n  privacyPolicyUrl: '/privacy-policy',\n  cookiePolicyUrl: '/cookie-policy',\n  companyName: 'Houston Web Services',\n  consentVersion: '1.0.0',\n  autoHide: true,\n  cookieExpireDays: 365,\n};\n\n/**\n * Default consent preferences (all denied except necessary)\n */\nexport const defaultConsentPreferences: ConsentPreferences = {\n  necessary: true,\n  analytics: false,\n  marketing: false,\n  preferences: false,\n};\n\n// =================================================================\n// CONSENT STORAGE KEYS\n// =================================================================\n\nexport const CONSENT_STORAGE_KEY = 'hws_consent_preferences';\nexport const CONSENT_TIMESTAMP_KEY = 'hws_consent_timestamp';\nexport const CONSENT_VERSION_KEY = 'hws_consent_version';\n\n// =================================================================\n// EVENT TRACKING CONFIGURATION\n// =================================================================\n\n/**\n * Scroll depth thresholds for tracking (in percentages)\n */\nexport const SCROLL_DEPTH_THRESHOLDS = [25, 50, 75, 90, 100];\n\n/**\n * Time on page intervals for tracking (in seconds)\n */\nexport const TIME_ON_PAGE_INTERVALS = [30, 60, 120, 300, 600];\n\n/**\n * Engagement events to track automatically\n */\nexport const AUTO_TRACK_EVENTS = {\n  /** Track outbound link clicks */\n  outboundLinks: true,\n  /** Track file downloads */\n  fileDownloads: true,\n  /** Track scroll depth */\n  scrollDepth: true,\n  /** Track time on page */\n  timeOnPage: true,\n  /** Track form interactions */\n  formInteractions: true,\n  /** Track video plays */\n  videoPlays: true,\n  /** Track phone number clicks */\n  phoneClicks: true,\n  /** Track email link clicks */\n  emailClicks: true,\n};\n\n/**\n * File extensions to track as downloads\n */\nexport const DOWNLOAD_EXTENSIONS = [\n  'pdf',\n  'doc',\n  'docx',\n  'xls',\n  'xlsx',\n  'ppt',\n  'pptx',\n  'zip',\n  'rar',\n  '7z',\n  'csv',\n  'txt',\n];\n\n// =================================================================\n// PRIVACY COMPLIANCE\n// =================================================================\n\n/**\n * Privacy-related configuration\n */\nexport const privacyConfig = {\n  /** Data retention period in months */\n  dataRetentionMonths: 14,\n  /** Enable IP anonymization */\n  anonymizeIp: true,\n  /** Disable advertising features by default */\n  allowAdFeatures: false,\n  /** Respect Do Not Track header */\n  respectDoNotTrack: true,\n  /** GDPR regions (show consent banner) */\n  gdprRegions: ['EU', 'EEA', 'UK', 'CH'],\n  /** CCPA regions (show opt-out) */\n  ccpaRegions: ['US-CA'],\n};\n\n/**\n * Check if user has Do Not Track enabled\n */\nexport function hasDoNotTrack(): boolean {\n  if (typeof window === 'undefined') return false;\n  return (\n    navigator.doNotTrack === '1' ||\n    (window as unknown as { doNotTrack?: string }).doNotTrack === '1'\n  );\n}\n\n/**\n * Check if analytics should be loaded based on privacy settings\n */\nexport function shouldLoadAnalytics(): boolean {\n  // Respect Do Not Track if configured\n  if (privacyConfig.respectDoNotTrack && hasDoNotTrack()) {\n    return false;\n  }\n  return true;\n}\n"
}
Now let me create the analytics utility functions:

🔧 Tool: Write
Input: {
  "file_path": "/Users/James/Repos/houston-web-services/src/utils/analytics.ts",
  "content": "/**\n * =================================================================\n * ANALYTICS UTILITIES\n * =================================================================\n *\n * Utility functions for Google Analytics 4 integration including\n * event tracking, consent management, and performance monitoring.\n *\n * =================================================================\n */\n\nimport type {\n  AnalyticsEvent,\n  EventParams,\n  PageViewParams,\n  UserProperties,\n  GA4ConsentMode,\n  ConsentPreferences,\n  ConsentState,\n  WebVitals,\n} from '../types/analytics';\n\nimport {\n  GA4_MEASUREMENT_ID,\n  ga4Config,\n  defaultConsentMode,\n  mapConsentToGA4,\n  CONSENT_STORAGE_KEY,\n  CONSENT_TIMESTAMP_KEY,\n  CONSENT_VERSION_KEY,\n  consentBannerConfig,\n  defaultConsentPreferences,\n  SCROLL_DEPTH_THRESHOLDS,\n  TIME_ON_PAGE_INTERVALS,\n  DOWNLOAD_EXTENSIONS,\n  shouldLoadAnalytics,\n} from '../config/analytics.config';\n\n// =================================================================\n// ANALYTICS INITIALIZATION\n// =================================================================\n\nlet isInitialized = false;\nlet analyticsEnabled = false;\n\n/**\n * Initialize Google Analytics 4 with consent mode\n */\nexport function initGA4(): void {\n  if (typeof window === 'undefined' || isInitialized) return;\n\n  // Check if analytics should be loaded\n  if (!shouldLoadAnalytics()) {\n    console.log('[Analytics] Disabled due to privacy settings');\n    return;\n  }\n\n  // Initialize dataLayer\n  window.dataLayer = window.dataLayer || [];\n\n  // Define gtag function\n  window.gtag = function gtag(...args: unknown[]) {\n    window.dataLayer.push(args);\n  };\n\n  // Set default consent before loading GA\n  window.gtag('consent', 'default', defaultConsentMode);\n\n  // Initialize GA4\n  window.gtag('js', new Date());\n\n  // Configure GA4 with privacy settings\n  window.gtag('config', GA4_MEASUREMENT_ID, {\n    anonymize_ip: ga4Config.anonymizeIp,\n    cookie_domain: ga4Config.cookieDomain,\n    cookie_expires: ga4Config.cookieExpires,\n    cookie_flags: ga4Config.cookieFlags,\n    send_page_view: false, // We'll send manually after consent check\n  });\n\n  isInitialized = true;\n\n  // Check stored consent and update\n  const storedConsent = getStoredConsent();\n  if (storedConsent && storedConsent.hasConsented) {\n    updateConsent(storedConsent.preferences);\n    analyticsEnabled = storedConsent.preferences.analytics;\n\n    // Send initial page view if analytics is enabled\n    if (analyticsEnabled) {\n      trackPageView();\n    }\n  }\n\n  if (ga4Config.debug) {\n    console.log('[Analytics] GA4 initialized with measurement ID:', GA4_MEASUREMENT_ID);\n  }\n}\n\n/**\n * Load GA4 script asynchronously\n */\nexport function loadGA4Script(): Promise<void> {\n  return new Promise((resolve, reject) => {\n    if (typeof window === 'undefined') {\n      reject(new Error('Window not available'));\n      return;\n    }\n\n    // Check if script already exists\n    if (document.querySelector(`script[src*=\"googletagmanager.com/gtag\"]`)) {\n      resolve();\n      return;\n    }\n\n    const script = document.createElement('script');\n    script.async = true;\n    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;\n\n    script.onload = () => {\n      initGA4();\n      resolve();\n    };\n\n    script.onerror = () => {\n      reject(new Error('Failed to load GA4 script'));\n    };\n\n    document.head.appendChild(script);\n  });\n}\n\n// =================================================================\n// CONSENT MANAGEMENT\n// =================================================================\n\n/**\n * Get stored consent from localStorage\n */\nexport function getStoredConsent(): ConsentState | null {\n  if (typeof window === 'undefined') return null;\n\n  try {\n    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);\n    if (!stored) return null;\n\n    const preferences = JSON.parse(stored) as ConsentPreferences;\n    const timestamp = parseInt(localStorage.getItem(CONSENT_TIMESTAMP_KEY) || '0', 10);\n    const version = localStorage.getItem(CONSENT_VERSION_KEY) || '1.0.0';\n\n    // Check if consent version matches (re-prompt if policy changed)\n    if (version !== consentBannerConfig.consentVersion) {\n      return null;\n    }\n\n    return {\n      preferences,\n      timestamp,\n      version,\n      hasConsented: true,\n    };\n  } catch {\n    return null;\n  }\n}\n\n/**\n * Save consent preferences to localStorage\n */\nexport function saveConsent(preferences: ConsentPreferences): void {\n  if (typeof window === 'undefined') return;\n\n  try {\n    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferences));\n    localStorage.setItem(CONSENT_TIMESTAMP_KEY, Date.now().toString());\n    localStorage.setItem(CONSENT_VERSION_KEY, consentBannerConfig.consentVersion);\n  } catch (error) {\n    console.error('[Analytics] Failed to save consent:', error);\n  }\n}\n\n/**\n * Clear stored consent\n */\nexport function clearConsent(): void {\n  if (typeof window === 'undefined') return;\n\n  try {\n    localStorage.removeItem(CONSENT_STORAGE_KEY);\n    localStorage.removeItem(CONSENT_TIMESTAMP_KEY);\n    localStorage.removeItem(CONSENT_VERSION_KEY);\n  } catch (error) {\n    console.error('[Analytics] Failed to clear consent:', error);\n  }\n}\n\n/**\n * Update GA4 consent mode\n */\nexport function updateConsent(preferences: ConsentPreferences): void {\n  if (typeof window === 'undefined' || !window.gtag) return;\n\n  const consentMode = mapConsentToGA4(preferences);\n\n  window.gtag('consent', 'update', consentMode);\n\n  analyticsEnabled = preferences.analytics;\n\n  // Save consent\n  saveConsent(preferences);\n\n  // Track consent event\n  if (preferences.analytics) {\n    trackEvent('consent_granted', {\n      analytics: preferences.analytics,\n      marketing: preferences.marketing,\n      preferences: preferences.preferences,\n    });\n  }\n\n  if (ga4Config.debug) {\n    console.log('[Analytics] Consent updated:', consentMode);\n  }\n}\n\n/**\n * Accept all cookies\n */\nexport function acceptAllCookies(): void {\n  const allAccepted: ConsentPreferences = {\n    necessary: true,\n    analytics: true,\n    marketing: true,\n    preferences: true,\n  };\n\n  updateConsent(allAccepted);\n\n  // Send page view after accepting\n  trackPageView();\n}\n\n/**\n * Accept only necessary cookies\n */\nexport function acceptNecessaryOnly(): void {\n  updateConsent(defaultConsentPreferences);\n}\n\n/**\n * Check if consent has been given\n */\nexport function hasConsentBeenGiven(): boolean {\n  const consent = getStoredConsent();\n  return consent !== null && consent.hasConsented;\n}\n\n/**\n * Check if analytics is enabled\n */\nexport function isAnalyticsEnabled(): boolean {\n  return analyticsEnabled && isInitialized;\n}\n\n// =================================================================\n// EVENT TRACKING\n// =================================================================\n\n/**\n * Track a custom event\n */\nexport function trackEvent(eventName: AnalyticsEvent, params?: EventParams): void {\n  if (typeof window === 'undefined' || !window.gtag) return;\n\n  // Only track if analytics is enabled (except consent events)\n  if (!analyticsEnabled && !eventName.startsWith('consent_')) {\n    if (ga4Config.debug) {\n      console.log('[Analytics] Event blocked (no consent):', eventName);\n    }\n    return;\n  }\n\n  const eventParams = {\n    ...params,\n    timestamp: Date.now(),\n  };\n\n  window.gtag('event', eventName, eventParams);\n\n  if (ga4Config.debug) {\n    console.log('[Analytics] Event tracked:', eventName, eventParams);\n  }\n}\n\n/**\n * Track page view\n */\nexport function trackPageView(params?: PageViewParams): void {\n  if (typeof window === 'undefined' || !window.gtag) return;\n\n  if (!analyticsEnabled) {\n    if (ga4Config.debug) {\n      console.log('[Analytics] Page view blocked (no consent)');\n    }\n    return;\n  }\n\n  const pageParams = {\n    page_title: document.title,\n    page_location: window.location.href,\n    page_path: window.location.pathname,\n    page_referrer: document.referrer,\n    ...params,\n  };\n\n  window.gtag('event', 'page_view', pageParams);\n\n  if (ga4Config.debug) {\n    console.log('[Analytics] Page view tracked:', pageParams);\n  }\n}\n\n/**\n * Set user properties\n */\nexport function setUserProperties(properties: UserProperties): void {\n  if (typeof window === 'undefined' || !window.gtag || !analyticsEnabled) return;\n\n  window.gtag('set', 'user_properties', properties);\n\n  if (ga4Config.debug) {\n    console.log('[Analytics] User properties set:', properties);\n  }\n}\n\n// =================================================================\n// AUTOMATIC EVENT TRACKING\n// =================================================================\n\n/**\n * Initialize automatic event tracking\n */\nexport function initAutoTracking(): void {\n  if (typeof window === 'undefined') return;\n\n  // Track scroll depth\n  initScrollTracking();\n\n  // Track time on page\n  initTimeTracking();\n\n  // Track outbound links\n  initLinkTracking();\n\n  // Track form interactions\n  initFormTracking();\n}\n\n/**\n * Track scroll depth\n */\nfunction initScrollTracking(): void {\n  const trackedThresholds = new Set<number>();\n\n  const handleScroll = () => {\n    if (!analyticsEnabled) return;\n\n    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;\n    const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);\n\n    for (const threshold of SCROLL_DEPTH_THRESHOLDS) {\n      if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {\n        trackedThresholds.add(threshold);\n        trackEvent('scroll_depth', {\n          percent_scrolled: threshold,\n          page_path: window.location.pathname,\n        });\n      }\n    }\n  };\n\n  // Throttle scroll events\n  let ticking = false;\n  window.addEventListener('scroll', () => {\n    if (!ticking) {\n      window.requestAnimationFrame(() => {\n        handleScroll();\n        ticking = false;\n      });\n      ticking = true;\n    }\n  }, { passive: true });\n}\n\n/**\n * Track time on page\n */\nfunction initTimeTracking(): void {\n  const startTime = Date.now();\n  const trackedIntervals = new Set<number>();\n\n  const checkTime = () => {\n    if (!analyticsEnabled) return;\n\n    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);\n\n    for (const interval of TIME_ON_PAGE_INTERVALS) {\n      if (elapsedSeconds >= interval && !trackedIntervals.has(interval)) {\n        trackedIntervals.add(interval);\n        trackEvent('time_on_page', {\n          seconds: interval,\n          page_path: window.location.pathname,\n        });\n      }\n    }\n  };\n\n  // Check every 10 seconds\n  setInterval(checkTime, 10000);\n}\n\n/**\n * Track link clicks\n */\nfunction initLinkTracking(): void {\n  document.addEventListener('click', (event) => {\n    if (!analyticsEnabled) return;\n\n    const target = event.target as HTMLElement;\n    const link = target.closest('a');\n\n    if (!link) return;\n\n    const href = link.getAttribute('href');\n    if (!href) return;\n\n    // Track outbound links\n    if (href.startsWith('http') && !href.includes(window.location.hostname)) {\n      trackEvent('click', {\n        link_url: href,\n        link_text: link.textContent?.trim(),\n        outbound: true,\n      });\n    }\n\n    // Track phone clicks\n    if (href.startsWith('tel:')) {\n      trackEvent('phone_click', {\n        link_url: href,\n        page_path: window.location.pathname,\n      });\n    }\n\n    // Track email clicks\n    if (href.startsWith('mailto:')) {\n      trackEvent('email_click', {\n        link_url: href,\n        page_path: window.location.pathname,\n      });\n    }\n\n    // Track file downloads\n    const extension = href.split('.').pop()?.toLowerCase();\n    if (extension && DOWNLOAD_EXTENSIONS.includes(extension)) {\n      trackEvent('file_download', {\n        link_url: href,\n        file_extension: extension,\n        page_path: window.location.pathname,\n      });\n    }\n  });\n}\n\n/**\n * Track form interactions\n */\nfunction initFormTracking(): void {\n  document.addEventListener('focusin', (event) => {\n    if (!analyticsEnabled) return;\n\n    const target = event.target as HTMLElement;\n    const form = target.closest('form');\n\n    if (!form || form.dataset.formStartTracked) return;\n\n    form.dataset.formStartTracked = 'true';\n    trackEvent('contact_form_start', {\n      form_id: form.id || undefined,\n      form_name: form.getAttribute('name') || undefined,\n      page_path: window.location.pathname,\n    });\n  });\n\n  document.addEventListener('submit', (event) => {\n    if (!analyticsEnabled) return;\n\n    const form = event.target as HTMLFormElement;\n\n    trackEvent('contact_form_submit', {\n      form_id: form.id || undefined,\n      form_name: form.getAttribute('name') || undefined,\n      page_path: window.location.pathname,\n    });\n  });\n}\n\n// =================================================================\n// CTA TRACKING\n// =================================================================\n\n/**\n * Track CTA button clicks\n */\nexport function trackCTAClick(\n  ctaText: string,\n  ctaLocation: string,\n  ctaDestination: string,\n  ctaType: 'primary' | 'secondary' | 'link' = 'primary'\n): void {\n  trackEvent('cta_click', {\n    cta_text: ctaText,\n    cta_location: ctaLocation,\n    cta_destination: ctaDestination,\n    cta_type: ctaType,\n    page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,\n  });\n}\n\n/**\n * Track service view\n */\nexport function trackServiceView(serviceName: string, serviceId: string): void {\n  trackEvent('service_view', {\n    service_name: serviceName,\n    service_id: serviceId,\n    page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,\n  });\n}\n\n/**\n * Track portfolio item view\n */\nexport function trackPortfolioView(projectName: string, projectCategory: string): void {\n  trackEvent('portfolio_view', {\n    project_name: projectName,\n    project_category: projectCategory,\n    page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,\n  });\n}\n\n// =================================================================\n// PERFORMANCE TRACKING\n// =================================================================\n\n/**\n * Track Core Web Vitals\n */\nexport function trackWebVitals(vitals: WebVitals): void {\n  if (!analyticsEnabled) return;\n\n  Object.entries(vitals).forEach(([metric, value]) => {\n    if (value !== undefined) {\n      trackEvent('web_vitals' as AnalyticsEvent, {\n        metric_name: metric,\n        metric_value: value,\n        metric_rating: getMetricRating(metric, value),\n        page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,\n      });\n    }\n  });\n}\n\n/**\n * Get performance rating for a metric\n */\nfunction getMetricRating(metric: string, value: number): 'good' | 'needs-improvement' | 'poor' {\n  const thresholds: Record<string, [number, number]> = {\n    LCP: [2500, 4000],\n    FID: [100, 300],\n    CLS: [0.1, 0.25],\n    FCP: [1800, 3000],\n    TTFB: [800, 1800],\n    INP: [200, 500],\n  };\n\n  const [good, poor] = thresholds[metric] || [0, 0];\n\n  if (value <= good) return 'good';\n  if (value <= poor) return 'needs-improvement';\n  return 'poor';\n}\n\n// =================================================================\n// UTILITY EXPORTS\n// =================================================================\n\nexport {\n  GA4_MEASUREMENT_ID,\n  ga4Config,\n  defaultConsentPreferences,\n  consentBannerConfig,\n};\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create Google Analytics 4 integration with privacy-compliant configuration",
      "status": "completed",
      "activeForm": "Creating Google Analytics 4 integration"
    },
    {
      "content": "Implement cookie consent banner component with granular controls",
      "status": "in_progress",
      "activeForm": "Implementing cookie consent banner"
    },
    {
      "content": "Create analytics utility functions and event tracking",
      "status": "completed",
      "activeForm": "Creating analytics utility functions"
    },
    {
      "content": "Update Layout.astro to integrate GA4 and consent components",
      "status": "pending",
      "activeForm": "Updating Layout.astro with analytics"
    },
    {
      "content": "Add image optimization utilities and lazy loading",
      "status": "pending",
      "activeForm": "Adding image optimization utilities"
    },
    {
      "content": "Update Astro config for performance optimizations",
      "status": "pending",
      "activeForm": "Updating Astro config"
    },
    {
      "content": "Add critical CSS and performance CSS utilities",
      "status": "pending",
      "activeForm": "Adding critical CSS utilities"
    },
    {
      "content": "Create performance monitoring component",
      "status": "pending",
      "activeForm": "Creating performance monitoring"
    },
    {
      "content": "Add TypeScript types for analytics and consent",
      "status": "completed",
      "activeForm": "Adding TypeScript types"
    }
  ]
}
Now let me create the Cookie Consent Banner component:

🔧 Tool: Write
Input: {
  "file_path": "/Users/James/Repos/houston-web-services/src/components/CookieConsent.astro",
  "content": "---\n/**\n * Cookie Consent Banner Component\n *\n * GDPR/CCPA compliant cookie consent banner with granular controls.\n * Supports accept all, reject all, and custom preferences.\n *\n * @example\n * ```astro\n * <CookieConsent />\n * ```\n */\n\nimport { consentBannerConfig } from '../config/analytics.config';\n\ninterface Props {\n  /** Override privacy policy URL */\n  privacyPolicyUrl?: string;\n  /** Override cookie policy URL */\n  cookiePolicyUrl?: string;\n  /** Override company name */\n  companyName?: string;\n}\n\nconst {\n  privacyPolicyUrl = consentBannerConfig.privacyPolicyUrl,\n  cookiePolicyUrl = consentBannerConfig.cookiePolicyUrl,\n  companyName = consentBannerConfig.companyName,\n} = Astro.props;\n---\n\n<!-- Cookie Consent Banner -->\n<div\n  id=\"cookie-consent-banner\"\n  class=\"cookie-consent\"\n  role=\"dialog\"\n  aria-modal=\"true\"\n  aria-labelledby=\"cookie-consent-title\"\n  aria-describedby=\"cookie-consent-description\"\n  hidden\n>\n  <div class=\"cookie-consent__container\">\n    <div class=\"cookie-consent__content\">\n      <h2 id=\"cookie-consent-title\" class=\"cookie-consent__title\">\n        Cookie Preferences\n      </h2>\n      <p id=\"cookie-consent-description\" class=\"cookie-consent__description\">\n        We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.\n        You can choose which cookies you're comfortable with below.\n      </p>\n\n      <!-- Cookie Categories -->\n      <div class=\"cookie-consent__categories\" id=\"cookie-categories\">\n        <!-- Necessary Cookies (Always enabled) -->\n        <div class=\"cookie-category\">\n          <div class=\"cookie-category__header\">\n            <label class=\"cookie-category__label\">\n              <input\n                type=\"checkbox\"\n                checked\n                disabled\n                aria-describedby=\"necessary-description\"\n              />\n              <span class=\"cookie-category__checkbox cookie-category__checkbox--disabled\"></span>\n              <span class=\"cookie-category__name\">Necessary</span>\n              <span class=\"cookie-category__badge\">Always Active</span>\n            </label>\n          </div>\n          <p id=\"necessary-description\" class=\"cookie-category__description\">\n            Essential cookies required for the website to function properly. These cannot be disabled.\n          </p>\n        </div>\n\n        <!-- Analytics Cookies -->\n        <div class=\"cookie-category\">\n          <div class=\"cookie-category__header\">\n            <label class=\"cookie-category__label\">\n              <input\n                type=\"checkbox\"\n                id=\"consent-analytics\"\n                name=\"analytics\"\n                aria-describedby=\"analytics-description\"\n              />\n              <span class=\"cookie-category__checkbox\"></span>\n              <span class=\"cookie-category__name\">Analytics</span>\n            </label>\n          </div>\n          <p id=\"analytics-description\" class=\"cookie-category__description\">\n            Help us understand how visitors interact with our website by collecting anonymous usage data.\n          </p>\n        </div>\n\n        <!-- Marketing Cookies -->\n        <div class=\"cookie-category\">\n          <div class=\"cookie-category__header\">\n            <label class=\"cookie-category__label\">\n              <input\n                type=\"checkbox\"\n                id=\"consent-marketing\"\n                name=\"marketing\"\n                aria-describedby=\"marketing-description\"\n              />\n              <span class=\"cookie-category__checkbox\"></span>\n              <span class=\"cookie-category__name\">Marketing</span>\n            </label>\n          </div>\n          <p id=\"marketing-description\" class=\"cookie-category__description\">\n            Used to deliver personalized advertisements and measure the effectiveness of ad campaigns.\n          </p>\n        </div>\n\n        <!-- Preferences Cookies -->\n        <div class=\"cookie-category\">\n          <div class=\"cookie-category__header\">\n            <label class=\"cookie-category__label\">\n              <input\n                type=\"checkbox\"\n                id=\"consent-preferences\"\n                name=\"preferences\"\n                aria-describedby=\"preferences-description\"\n              />\n              <span class=\"cookie-category__checkbox\"></span>\n              <span class=\"cookie-category__name\">Preferences</span>\n            </label>\n          </div>\n          <p id=\"preferences-description\" class=\"cookie-category__description\">\n            Remember your settings and preferences for a more personalized experience.\n          </p>\n        </div>\n      </div>\n\n      <!-- Links -->\n      <div class=\"cookie-consent__links\">\n        <a href={privacyPolicyUrl} class=\"cookie-consent__link\">Privacy Policy</a>\n        {cookiePolicyUrl && (\n          <>\n            <span class=\"cookie-consent__link-separator\">|</span>\n            <a href={cookiePolicyUrl} class=\"cookie-consent__link\">Cookie Policy</a>\n          </>\n        )}\n      </div>\n    </div>\n\n    <!-- Actions -->\n    <div class=\"cookie-consent__actions\">\n      <button\n        type=\"button\"\n        id=\"cookie-reject-all\"\n        class=\"cookie-consent__button cookie-consent__button--secondary\"\n      >\n        Reject All\n      </button>\n      <button\n        type=\"button\"\n        id=\"cookie-save-preferences\"\n        class=\"cookie-consent__button cookie-consent__button--secondary\"\n      >\n        Save Preferences\n      </button>\n      <button\n        type=\"button\"\n        id=\"cookie-accept-all\"\n        class=\"cookie-consent__button cookie-consent__button--primary\"\n      >\n        Accept All\n      </button>\n    </div>\n  </div>\n</div>\n\n<!-- Floating Cookie Settings Button (shown after consent) -->\n<button\n  type=\"button\"\n  id=\"cookie-settings-toggle\"\n  class=\"cookie-settings-toggle\"\n  aria-label=\"Open cookie settings\"\n  hidden\n>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"20\" height=\"20\" aria-hidden=\"true\">\n    <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z\"/>\n  </svg>\n</button>\n\n<style>\n  /* Cookie Consent Banner Styles */\n  .cookie-consent {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: var(--z-modal, 9999);\n    background: var(--color-background, #ffffff);\n    border-top: 1px solid var(--color-border, #e5e7eb);\n    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);\n    transform: translateY(100%);\n    transition: transform var(--duration-300, 300ms) var(--ease-out, ease-out);\n  }\n\n  .cookie-consent[data-visible=\"true\"] {\n    transform: translateY(0);\n  }\n\n  .cookie-consent__container {\n    max-width: var(--container-xl, 1280px);\n    margin: 0 auto;\n    padding: var(--spacing-6, 1.5rem);\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-4, 1rem);\n  }\n\n  @media (min-width: 1024px) {\n    .cookie-consent__container {\n      flex-direction: row;\n      align-items: flex-start;\n      gap: var(--spacing-8, 2rem);\n    }\n  }\n\n  .cookie-consent__content {\n    flex: 1;\n  }\n\n  .cookie-consent__title {\n    font-size: var(--font-size-lg, 1.125rem);\n    font-weight: var(--font-weight-semibold, 600);\n    color: var(--color-text-primary, #111827);\n    margin-bottom: var(--spacing-2, 0.5rem);\n  }\n\n  .cookie-consent__description {\n    font-size: var(--font-size-sm, 0.875rem);\n    color: var(--color-text-secondary, #6b7280);\n    line-height: var(--line-height-relaxed, 1.625);\n    margin-bottom: var(--spacing-4, 1rem);\n  }\n\n  /* Cookie Categories */\n  .cookie-consent__categories {\n    display: none;\n    flex-direction: column;\n    gap: var(--spacing-3, 0.75rem);\n    margin-bottom: var(--spacing-4, 1rem);\n    padding: var(--spacing-4, 1rem);\n    background: var(--color-background-muted, #f9fafb);\n    border-radius: var(--radius-lg, 0.5rem);\n  }\n\n  .cookie-consent__categories[data-expanded=\"true\"] {\n    display: flex;\n  }\n\n  .cookie-category {\n    padding-bottom: var(--spacing-3, 0.75rem);\n    border-bottom: 1px solid var(--color-border-light, #e5e7eb);\n  }\n\n  .cookie-category:last-child {\n    padding-bottom: 0;\n    border-bottom: none;\n  }\n\n  .cookie-category__header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .cookie-category__label {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-2, 0.5rem);\n    cursor: pointer;\n    font-size: var(--font-size-sm, 0.875rem);\n  }\n\n  .cookie-category__label input {\n    position: absolute;\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  .cookie-category__checkbox {\n    width: 18px;\n    height: 18px;\n    border: 2px solid var(--color-border, #d1d5db);\n    border-radius: var(--radius-sm, 0.25rem);\n    background: var(--color-background, #ffffff);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all var(--duration-150, 150ms) var(--ease-in-out, ease-in-out);\n    flex-shrink: 0;\n  }\n\n  .cookie-category__checkbox::after {\n    content: '';\n    width: 10px;\n    height: 10px;\n    background: var(--color-primary, #365395);\n    border-radius: 2px;\n    opacity: 0;\n    transform: scale(0);\n    transition: all var(--duration-150, 150ms) var(--ease-in-out, ease-in-out);\n  }\n\n  .cookie-category__label input:checked + .cookie-category__checkbox {\n    border-color: var(--color-primary, #365395);\n  }\n\n  .cookie-category__label input:checked + .cookie-category__checkbox::after {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  .cookie-category__checkbox--disabled {\n    background: var(--color-background-muted, #f3f4f6);\n    border-color: var(--color-border-light, #e5e7eb);\n  }\n\n  .cookie-category__label input:disabled + .cookie-category__checkbox--disabled::after {\n    opacity: 1;\n    transform: scale(1);\n    background: var(--color-text-tertiary, #9ca3af);\n  }\n\n  .cookie-category__name {\n    font-weight: var(--font-weight-medium, 500);\n    color: var(--color-text-primary, #111827);\n  }\n\n  .cookie-category__badge {\n    font-size: var(--font-size-xs, 0.75rem);\n    color: var(--color-text-tertiary, #9ca3af);\n    background: var(--color-background, #ffffff);\n    padding: var(--spacing-0-5, 0.125rem) var(--spacing-2, 0.5rem);\n    border-radius: var(--radius-full, 9999px);\n    margin-left: auto;\n  }\n\n  .cookie-category__description {\n    font-size: var(--font-size-xs, 0.75rem);\n    color: var(--color-text-tertiary, #6b7280);\n    margin-top: var(--spacing-1, 0.25rem);\n    padding-left: calc(18px + var(--spacing-2, 0.5rem));\n  }\n\n  /* Links */\n  .cookie-consent__links {\n    display: flex;\n    gap: var(--spacing-2, 0.5rem);\n    font-size: var(--font-size-xs, 0.75rem);\n  }\n\n  .cookie-consent__link {\n    color: var(--color-primary, #365395);\n    text-decoration: none;\n  }\n\n  .cookie-consent__link:hover {\n    text-decoration: underline;\n  }\n\n  .cookie-consent__link-separator {\n    color: var(--color-text-tertiary, #9ca3af);\n  }\n\n  /* Actions */\n  .cookie-consent__actions {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--spacing-2, 0.5rem);\n    align-items: center;\n  }\n\n  @media (min-width: 1024px) {\n    .cookie-consent__actions {\n      flex-direction: column;\n      flex-shrink: 0;\n    }\n  }\n\n  .cookie-consent__button {\n    padding: var(--spacing-2, 0.5rem) var(--spacing-4, 1rem);\n    border-radius: var(--radius-md, 0.375rem);\n    font-size: var(--font-size-sm, 0.875rem);\n    font-weight: var(--font-weight-medium, 500);\n    cursor: pointer;\n    transition: all var(--duration-150, 150ms) var(--ease-in-out, ease-in-out);\n    white-space: nowrap;\n    min-width: 120px;\n    text-align: center;\n  }\n\n  .cookie-consent__button--primary {\n    background: var(--color-primary, #365395);\n    color: var(--color-text-on-primary, #ffffff);\n    border: 1px solid var(--color-primary, #365395);\n  }\n\n  .cookie-consent__button--primary:hover {\n    background: var(--color-primary-600, #2d4680);\n  }\n\n  .cookie-consent__button--secondary {\n    background: transparent;\n    color: var(--color-text-secondary, #6b7280);\n    border: 1px solid var(--color-border, #d1d5db);\n  }\n\n  .cookie-consent__button--secondary:hover {\n    background: var(--color-background-muted, #f9fafb);\n    color: var(--color-text-primary, #111827);\n  }\n\n  .cookie-consent__button:focus-visible {\n    outline: 2px solid var(--color-primary, #365395);\n    outline-offset: 2px;\n  }\n\n  /* Cookie Settings Toggle Button */\n  .cookie-settings-toggle {\n    position: fixed;\n    bottom: var(--spacing-4, 1rem);\n    left: var(--spacing-4, 1rem);\n    z-index: var(--z-modal, 9998);\n    width: 44px;\n    height: 44px;\n    border-radius: var(--radius-full, 9999px);\n    background: var(--color-primary, #365395);\n    color: var(--color-text-on-primary, #ffffff);\n    border: none;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));\n    transition: all var(--duration-150, 150ms) var(--ease-in-out, ease-in-out);\n  }\n\n  .cookie-settings-toggle:hover {\n    background: var(--color-primary-600, #2d4680);\n    transform: scale(1.05);\n  }\n\n  .cookie-settings-toggle:focus-visible {\n    outline: 2px solid var(--color-primary, #365395);\n    outline-offset: 2px;\n  }\n\n  .cookie-settings-toggle[hidden] {\n    display: none;\n  }\n\n  /* Animation for banner */\n  @media (prefers-reduced-motion: reduce) {\n    .cookie-consent {\n      transition: none;\n    }\n  }\n</style>\n\n<script>\n  import {\n    loadGA4Script,\n    getStoredConsent,\n    acceptAllCookies,\n    acceptNecessaryOnly,\n    updateConsent,\n    initAutoTracking,\n    trackPageView,\n    isAnalyticsEnabled,\n  } from '../utils/analytics';\n  import type { ConsentPreferences } from '../types/analytics';\n\n  // DOM Elements\n  const banner = document.getElementById('cookie-consent-banner') as HTMLElement;\n  const categories = document.getElementById('cookie-categories') as HTMLElement;\n  const settingsToggle = document.getElementById('cookie-settings-toggle') as HTMLButtonElement;\n\n  const acceptAllBtn = document.getElementById('cookie-accept-all') as HTMLButtonElement;\n  const rejectAllBtn = document.getElementById('cookie-reject-all') as HTMLButtonElement;\n  const savePrefsBtn = document.getElementById('cookie-save-preferences') as HTMLButtonElement;\n\n  const analyticsCheckbox = document.getElementById('consent-analytics') as HTMLInputElement;\n  const marketingCheckbox = document.getElementById('consent-marketing') as HTMLInputElement;\n  const preferencesCheckbox = document.getElementById('consent-preferences') as HTMLInputElement;\n\n  /**\n   * Show the consent banner\n   */\n  function showBanner(): void {\n    banner.hidden = false;\n    banner.setAttribute('data-visible', 'true');\n    categories.setAttribute('data-expanded', 'true');\n    settingsToggle.hidden = true;\n\n    // Focus trap\n    acceptAllBtn.focus();\n  }\n\n  /**\n   * Hide the consent banner\n   */\n  function hideBanner(): void {\n    banner.setAttribute('data-visible', 'false');\n\n    // Wait for animation to complete\n    setTimeout(() => {\n      banner.hidden = true;\n      settingsToggle.hidden = false;\n    }, 300);\n  }\n\n  /**\n   * Get current preferences from checkboxes\n   */\n  function getCurrentPreferences(): ConsentPreferences {\n    return {\n      necessary: true,\n      analytics: analyticsCheckbox.checked,\n      marketing: marketingCheckbox.checked,\n      preferences: preferencesCheckbox.checked,\n    };\n  }\n\n  /**\n   * Set checkbox states from preferences\n   */\n  function setCheckboxStates(preferences: ConsentPreferences): void {\n    analyticsCheckbox.checked = preferences.analytics;\n    marketingCheckbox.checked = preferences.marketing;\n    preferencesCheckbox.checked = preferences.preferences;\n  }\n\n  /**\n   * Initialize consent banner\n   */\n  async function initConsentBanner(): Promise<void> {\n    // Check for stored consent\n    const storedConsent = getStoredConsent();\n\n    if (storedConsent && storedConsent.hasConsented) {\n      // User has already consented\n      setCheckboxStates(storedConsent.preferences);\n      settingsToggle.hidden = false;\n\n      // Load GA4 if analytics is enabled\n      if (storedConsent.preferences.analytics) {\n        await loadGA4Script();\n        initAutoTracking();\n      }\n    } else {\n      // Show consent banner\n      showBanner();\n    }\n  }\n\n  // Event Listeners\n  acceptAllBtn.addEventListener('click', async () => {\n    // Set all checkboxes to checked\n    analyticsCheckbox.checked = true;\n    marketingCheckbox.checked = true;\n    preferencesCheckbox.checked = true;\n\n    // Load GA4 and accept all\n    await loadGA4Script();\n    acceptAllCookies();\n    initAutoTracking();\n\n    hideBanner();\n  });\n\n  rejectAllBtn.addEventListener('click', () => {\n    // Set all checkboxes to unchecked\n    analyticsCheckbox.checked = false;\n    marketingCheckbox.checked = false;\n    preferencesCheckbox.checked = false;\n\n    acceptNecessaryOnly();\n    hideBanner();\n  });\n\n  savePrefsBtn.addEventListener('click', async () => {\n    const preferences = getCurrentPreferences();\n\n    // Load GA4 if analytics is enabled\n    if (preferences.analytics) {\n      await loadGA4Script();\n      initAutoTracking();\n    }\n\n    updateConsent(preferences);\n\n    // Track page view if analytics is now enabled\n    if (preferences.analytics && isAnalyticsEnabled()) {\n      trackPageView();\n    }\n\n    hideBanner();\n  });\n\n  settingsToggle.addEventListener('click', () => {\n    showBanner();\n  });\n\n  // Handle Escape key\n  document.addEventListener('keydown', (event) => {\n    if (event.key === 'Escape' && !banner.hidden) {\n      // Don't allow closing without making a choice\n      acceptAllBtn.focus();\n    }\n  });\n\n  // Initialize on page load\n  document.addEventListener('DOMContentLoaded', initConsentBanner);\n\n  // Re-initialize on Astro page transitions\n  document.addEventListener('astro:page-load', initConsentBanner);\n</script>\n"
}
Now let me create the Google Analytics component and Performance Monitor component:

🔧 Tool: Write
Input: {
  "file_path": "/Users/James/Repos/houston-web-services/src/components/GoogleAnalytics.astro",
  "content": "---\n/**\n * Google Analytics 4 Component\n *\n * Loads GA4 script asynchronously with privacy-compliant configuration.\n * Works with the CookieConsent component for GDPR/CCPA compliance.\n *\n * @example\n * ```astro\n * ---\n * import GoogleAnalytics from '../components/GoogleAnalytics.astro';\n * ---\n * <head>\n *   <GoogleAnalytics />\n * </head>\n * ```\n */\n\nimport { GA4_MEASUREMENT_ID, ga4Config } from '../config/analytics.config';\n\ninterface Props {\n  /** Override measurement ID */\n  measurementId?: string;\n  /** Enable debug mode */\n  debug?: boolean;\n}\n\nconst {\n  measurementId = GA4_MEASUREMENT_ID,\n  debug = ga4Config.debug,\n} = Astro.props;\n\n// Don't render if no valid measurement ID\nconst shouldRender = measurementId && measurementId !== 'G-XXXXXXXXXX';\n---\n\n{shouldRender && (\n  <>\n    <!-- Google Analytics 4 - Loaded conditionally based on consent -->\n    <script\n      is:inline\n      define:vars={{ measurementId, debug, anonymizeIp: ga4Config.anonymizeIp }}\n    >\n      // Initialize dataLayer and gtag\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        window.dataLayer.push(arguments);\n      }\n      window.gtag = gtag;\n\n      // Set default consent state (denied until user accepts)\n      gtag('consent', 'default', {\n        analytics_storage: 'denied',\n        ad_storage: 'denied',\n        ad_user_data: 'denied',\n        ad_personalization: 'denied',\n        functionality_storage: 'denied',\n        personalization_storage: 'denied',\n        security_storage: 'granted',\n        wait_for_update: 500,\n      });\n\n      // Initialize timestamp\n      gtag('js', new Date());\n\n      // Configure GA4 with privacy settings\n      gtag('config', measurementId, {\n        anonymize_ip: anonymizeIp,\n        send_page_view: false, // Controlled by consent\n        debug_mode: debug,\n      });\n\n      if (debug) {\n        console.log('[GA4] Initialized with consent mode, waiting for user consent');\n      }\n    </script>\n\n    <!--\n      GA4 Script Loading Strategy:\n      - Script is NOT loaded until user gives consent\n      - The CookieConsent component handles loading via loadGA4Script()\n      - This prevents any tracking before consent is given\n    -->\n    <noscript>\n      <!-- GA4 requires JavaScript -->\n    </noscript>\n  </>\n)}\n"
}

🔧 Tool: Write
Input: {
  "file_path": "/Users/James/Repos/houston-web-services/src/components/PerformanceMonitor.astro",
  "content": "---\n/**\n * Performance Monitor Component\n *\n * Monitors Core Web Vitals and performance metrics, reporting them\n * to Google Analytics when consent is given.\n *\n * Metrics tracked:\n * - LCP (Largest Contentful Paint)\n * - FID (First Input Delay) / INP (Interaction to Next Paint)\n * - CLS (Cumulative Layout Shift)\n * - FCP (First Contentful Paint)\n * - TTFB (Time to First Byte)\n *\n * @example\n * ```astro\n * ---\n * import PerformanceMonitor from '../components/PerformanceMonitor.astro';\n * ---\n * <PerformanceMonitor />\n * ```\n */\n\ninterface Props {\n  /** Enable debug logging */\n  debug?: boolean;\n  /** Report to Google Analytics */\n  reportToGA?: boolean;\n}\n\nconst {\n  debug = import.meta.env.DEV,\n  reportToGA = true,\n} = Astro.props;\n---\n\n<script is:inline define:vars={{ debug, reportToGA }}>\n  // Performance monitoring using web-vitals patterns\n  (function() {\n    'use strict';\n\n    // Thresholds for Core Web Vitals (good/needs-improvement/poor)\n    const THRESHOLDS = {\n      LCP: [2500, 4000],\n      FID: [100, 300],\n      CLS: [0.1, 0.25],\n      FCP: [1800, 3000],\n      TTFB: [800, 1800],\n      INP: [200, 500],\n    };\n\n    /**\n     * Get rating for a metric value\n     */\n    function getRating(name, value) {\n      const threshold = THRESHOLDS[name];\n      if (!threshold) return 'unknown';\n      if (value <= threshold[0]) return 'good';\n      if (value <= threshold[1]) return 'needs-improvement';\n      return 'poor';\n    }\n\n    /**\n     * Report metric to GA4 (if enabled and consent given)\n     */\n    function reportMetric(name, value, rating) {\n      if (debug) {\n        console.log(`[Performance] ${name}: ${value.toFixed(2)} (${rating})`);\n      }\n\n      if (reportToGA && typeof window.gtag === 'function') {\n        // Only report if analytics consent is given\n        // The gtag function will handle consent internally\n        window.gtag('event', 'web_vitals', {\n          event_category: 'Web Vitals',\n          event_label: name,\n          value: Math.round(value),\n          metric_name: name,\n          metric_value: value,\n          metric_rating: rating,\n          non_interaction: true,\n        });\n      }\n    }\n\n    /**\n     * Observe Largest Contentful Paint (LCP)\n     */\n    function observeLCP() {\n      if (!('PerformanceObserver' in window)) return;\n\n      try {\n        const observer = new PerformanceObserver((entryList) => {\n          const entries = entryList.getEntries();\n          const lastEntry = entries[entries.length - 1];\n          const value = lastEntry.startTime;\n          reportMetric('LCP', value, getRating('LCP', value));\n        });\n\n        observer.observe({ type: 'largest-contentful-paint', buffered: true });\n      } catch (e) {\n        if (debug) console.warn('[Performance] LCP observation not supported');\n      }\n    }\n\n    /**\n     * Observe First Input Delay (FID)\n     */\n    function observeFID() {\n      if (!('PerformanceObserver' in window)) return;\n\n      try {\n        const observer = new PerformanceObserver((entryList) => {\n          const entries = entryList.getEntries();\n          entries.forEach((entry) => {\n            const value = entry.processingStart - entry.startTime;\n            reportMetric('FID', value, getRating('FID', value));\n          });\n        });\n\n        observer.observe({ type: 'first-input', buffered: true });\n      } catch (e) {\n        if (debug) console.warn('[Performance] FID observation not supported');\n      }\n    }\n\n    /**\n     * Observe Cumulative Layout Shift (CLS)\n     */\n    function observeCLS() {\n      if (!('PerformanceObserver' in window)) return;\n\n      let clsValue = 0;\n      let clsEntries = [];\n\n      try {\n        const observer = new PerformanceObserver((entryList) => {\n          const entries = entryList.getEntries();\n\n          entries.forEach((entry) => {\n            // Only count layout shifts without recent user input\n            if (!entry.hadRecentInput) {\n              clsValue += entry.value;\n              clsEntries.push(entry);\n            }\n          });\n        });\n\n        observer.observe({ type: 'layout-shift', buffered: true });\n\n        // Report final CLS on page hide\n        document.addEventListener('visibilitychange', () => {\n          if (document.visibilityState === 'hidden' && clsEntries.length > 0) {\n            reportMetric('CLS', clsValue, getRating('CLS', clsValue));\n          }\n        });\n      } catch (e) {\n        if (debug) console.warn('[Performance] CLS observation not supported');\n      }\n    }\n\n    /**\n     * Observe First Contentful Paint (FCP)\n     */\n    function observeFCP() {\n      if (!('PerformanceObserver' in window)) return;\n\n      try {\n        const observer = new PerformanceObserver((entryList) => {\n          const entries = entryList.getEntries();\n          entries.forEach((entry) => {\n            if (entry.name === 'first-contentful-paint') {\n              const value = entry.startTime;\n              reportMetric('FCP', value, getRating('FCP', value));\n            }\n          });\n        });\n\n        observer.observe({ type: 'paint', buffered: true });\n      } catch (e) {\n        if (debug) console.warn('[Performance] FCP observation not supported');\n      }\n    }\n\n    /**\n     * Measure Time to First Byte (TTFB)\n     */\n    function measureTTFB() {\n      if (!('performance' in window) || !performance.getEntriesByType) return;\n\n      try {\n        const navEntry = performance.getEntriesByType('navigation')[0];\n        if (navEntry) {\n          const value = navEntry.responseStart - navEntry.requestStart;\n          reportMetric('TTFB', value, getRating('TTFB', value));\n        }\n      } catch (e) {\n        if (debug) console.warn('[Performance] TTFB measurement failed');\n      }\n    }\n\n    /**\n     * Observe Interaction to Next Paint (INP) - replaces FID in Core Web Vitals\n     */\n    function observeINP() {\n      if (!('PerformanceObserver' in window)) return;\n\n      const interactions = [];\n\n      try {\n        const observer = new PerformanceObserver((entryList) => {\n          const entries = entryList.getEntries();\n\n          entries.forEach((entry) => {\n            // INP considers all interactions, not just first input\n            if (entry.interactionId) {\n              interactions.push(entry.duration);\n            }\n          });\n        });\n\n        observer.observe({ type: 'event', buffered: true, durationThreshold: 16 });\n\n        // Report INP on page hide (p98 of all interactions)\n        document.addEventListener('visibilitychange', () => {\n          if (document.visibilityState === 'hidden' && interactions.length > 0) {\n            // Calculate 98th percentile (p98) of interactions\n            interactions.sort((a, b) => a - b);\n            const p98Index = Math.ceil(interactions.length * 0.98) - 1;\n            const inpValue = interactions[p98Index] || interactions[interactions.length - 1];\n            reportMetric('INP', inpValue, getRating('INP', inpValue));\n          }\n        });\n      } catch (e) {\n        if (debug) console.warn('[Performance] INP observation not supported');\n      }\n    }\n\n    /**\n     * Initialize all performance observers\n     */\n    function init() {\n      // Wait for the page to be fully loaded\n      if (document.readyState === 'complete') {\n        startObserving();\n      } else {\n        window.addEventListener('load', startObserving);\n      }\n    }\n\n    function startObserving() {\n      // Use requestIdleCallback or setTimeout to avoid blocking\n      const scheduleObserver = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));\n\n      scheduleObserver(() => {\n        observeLCP();\n        observeFID();\n        observeCLS();\n        observeFCP();\n        observeINP();\n        measureTTFB();\n\n        if (debug) {\n          console.log('[Performance] Core Web Vitals monitoring initialized');\n        }\n      });\n    }\n\n    // Initialize\n    init();\n  })();\n</script>\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create Google Analytics 4 integration with privacy-compliant configuration",
      "status": "completed",
      "activeForm": "Creating Google Analytics 4 integration"
    },
    {
      "content": "Implement cookie consent banner component with granular controls",
      "status": "completed",
      "activeForm": "Implementing cookie consent banner"
    },
    {
      "content": "Create analytics utility functions and event tracking",
      "status": "completed",
      "activeForm": "Creating analytics utility functions"
    },
    {
      "content": "Update Layout.astro to integrate GA4 and consent components",
      "status": "in_progress",
      "activeForm": "Updating Layout.astro with analytics"
    },
    {
      "content": "Add image optimization utilities and lazy loading",
      "status": "pending",
      "activeForm": "Adding image optimization utilities"
    },
    {
      "content": "Update Astro config for performance optimizations",
      "status": "pending",
      "activeForm": "Updating Astro config"
    },
    {
      "content": "Add critical CSS and performance CSS utilities",
      "status": "pending",
      "activeForm": "Adding critical CSS utilities"
    },
    {
      "content": "Create performance monitoring component",
      "status": "completed",
      "activeForm": "Creating performance monitoring"
    },
    {
      "content": "Add TypeScript types for analytics and consent",
      "status": "completed",
      "activeForm": "Adding TypeScript types"
    }
  ]
}
Now let me update the Layout.astro to integrate all the analytics and consent components:

🔧 Tool: Edit
Input: {
  "file_path": "/Users/James/Repos/houston-web-services/src/layouts/Layout.astro",
  "old_string": "---\n/**\n * Base Layout Component\n * Provides the HTML structure and SEO configuration for all pages.\n *\n * @example\n * ```astro\n * <Layout\n *   title=\"Page Title\"\n *   description=\"Page description for SEO\"\n * >\n *   <main>Page content here</main>\n * </Layout>\n * ```\n */\n\n// Import global styles including design system variables\nimport '../styles/globals.css';\n\nimport SEO from '../components/SEO.astro';\nimport Header from '../components/Header.astro';\nimport Footer from '../components/Footer.astro';\nimport type { SEOProps } from '../types/seo';\nimport { seoConfig } from '../config/seo.config';",
  "new_string": "---\n/**\n * Base Layout Component\n * Provides the HTML structure and SEO configuration for all pages.\n * Includes performance optimizations and privacy-compliant analytics.\n *\n * @example\n * ```astro\n * <Layout\n *   title=\"Page Title\"\n *   description=\"Page description for SEO\"\n * >\n *   <main>Page content here</main>\n * </Layout>\n * ```\n */\n\n// Import global styles including design system variables\nimport '../styles/globals.css';\n\nimport SEO from '../components/SEO.astro';\nimport Header from '../components/Header.astro';\nimport Footer from '../components/Footer.astro';\nimport GoogleAnalytics from '../components/GoogleAnalytics.astro';\nimport CookieConsent from '../components/CookieConsent.astro';\nimport PerformanceMonitor from '../components/PerformanceMonitor.astro';\nimport type { SEOProps } from '../types/seo';\nimport { seoConfig } from '../config/seo.config';"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/houston-web-services/src/layouts/Layout.astro"
}

🔧 Tool: Edit
Input: {
  "file_path": "/Users/James/Repos/houston-web-services/src/layouts/Layout.astro",
  "old_string": "---\n/**\n * Base Layout Component\n * Provides the HTML structure and SEO configuration for all pages.\n *\n * @example\n * ```astro\n * <Layout\n *   title=\"Page Title\"\n *   description=\"Page description for SEO\"\n * >\n *   <main>Page content here</main>\n * </Layout>\n * ```\n */\n\n// Import global styles including design system variables\nimport '../styles/globals.css';\n\nimport SEO from '../components/SEO.astro';\nimport Header from '../components/Header.astro';\nimport Footer from '../components/Footer.astro';\nimport type { SEOProps } from '../types/seo';\nimport { seoConfig } from '../config/seo.config';",
  "new_string": "---\n/**\n * Base Layout Component\n * Provides the HTML structure and SEO configuration for all pages.\n * Includes performance optimizations and privacy-compliant analytics.\n *\n * @example\n * ```astro\n * <Layout\n *   title=\"Page Title\"\n *   description=\"Page description for SEO\"\n * >\n *   <main>Page content here</main>\n * </Layout>\n * ```\n */\n\n// Import global styles including design system variables\nimport '../styles/globals.css';\n\nimport SEO from '../components/SEO.astro';\nimport Header from '../components/Header.astro';\nimport Footer from '../components/Footer.astro';\nimport GoogleAnalytics from '../components/GoogleAnalytics.astro';\nimport CookieConsent from '../components/CookieConsent.astro';\nimport PerformanceMonitor from '../components/PerformanceMonitor.astro';\nimport type { SEOProps } from '../types/seo';\nimport { seoConfig } from '../config/seo.config';"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/houston-web-services/src/layouts/Layout.astro"
}

🔧 Tool: Write
Input: {
  "file_path": "/Users/James/Repos/houston-web-services/src/layouts/Layout.astro",
  "content": "---\n/**\n * Base Layout Component\n * Provides the HTML structure and SEO configuration for all pages.\n * Includes performance optimizations and privacy-compliant analytics.\n *\n * @example\n * ```astro\n * <Layout\n *   title=\"Page Title\"\n *   description=\"Page description for SEO\"\n * >\n *   <main>Page content here</main>\n * </Layout>\n * ```\n */\n\n// Import global styles including design system variables\nimport '../styles/globals.css';\n\nimport SEO from '../components/SEO.astro';\nimport Header from '../components/Header.astro';\nimport Footer from '../components/Footer.astro';\nimport GoogleAnalytics from '../components/GoogleAnalytics.astro';\nimport CookieConsent from '../components/CookieConsent.astro';\nimport PerformanceMonitor from '../components/PerformanceMonitor.astro';\nimport type { SEOProps } from '../types/seo';\nimport { seoConfig } from '../config/seo.config';\n\n// Extend SEOProps but make title and description optional with defaults\ninterface Props extends Partial<SEOProps> {\n  /** Page title (defaults to site name) */\n  title?: string;\n  /** Page description (defaults to site default description) */\n  description?: string;\n  /** Additional classes for the body element */\n  bodyClass?: string;\n  /** Disable analytics for this page */\n  disableAnalytics?: boolean;\n}\n\nconst {\n  title = seoConfig.siteName,\n  description = seoConfig.defaultDescription,\n  bodyClass = '',\n  lang = seoConfig.defaultLang,\n  disableAnalytics = false,\n  ...seoProps\n} = Astro.props;\n---\n\n<!doctype html>\n<html lang={lang}>\n\t<head>\n\t\t<!-- Charset must be within first 1024 bytes -->\n\t\t<meta charset=\"UTF-8\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\n\t\t<!-- Preconnect to external resources for performance -->\n\t\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n\t\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n\n\t\t<!-- DNS prefetch for analytics (loaded conditionally) -->\n\t\t<link rel=\"dns-prefetch\" href=\"https://www.googletagmanager.com\" />\n\n\t\t<SEO\n\t\t\ttitle={title}\n\t\t\tdescription={description}\n\t\t\t{...seoProps}\n\t\t/>\n\n\t\t<link rel=\"icon\" type=\"image/svg+xml\" href=\"/favicon.svg\" />\n\n\t\t<!-- Google Analytics 4 (consent-based) -->\n\t\t{!disableAnalytics && <GoogleAnalytics />}\n\n\t\t<!-- Slot for additional head content -->\n\t\t<slot name=\"head\" />\n\t</head>\n\t<body class={bodyClass}>\n\t\t<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>\n\t\t<Header currentPath={Astro.url.pathname} />\n\t\t<div id=\"main-content\">\n\t\t\t<slot />\n\t\t</div>\n\t\t<Footer />\n\n\t\t<!-- Cookie Consent Banner (GDPR/CCPA compliant) -->\n\t\t{!disableAnalytics && <CookieConsent />}\n\n\t\t<!-- Performance Monitoring (Core Web Vitals) -->\n\t\t{!disableAnalytics && <PerformanceMonitor />}\n\t</body>\n</html>\n\n<style>\n\thtml,\n\tbody {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\n\t/* Sticky footer layout using flexbox */\n\tbody {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmin-height: 100vh;\n\t}\n\n\t#main-content {\n\t\tflex: 1 0 auto;\n\t}\n</style>\n"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/houston-web-services/src/layouts/Layout.astro"
}

🔧 Tool: Write
Input: {
  "file_path": "/Users/James/Repos/houston-web-services/src/layouts/Layout.astro",
  "content": "---\n/**\n * Base Layout Component\n * Provides the HTML structure and SEO configuration for all pages.\n * Includes performance optimizations and privacy-compliant analytics.\n *\n * @example\n * ```astro\n * <Layout\n *   title=\"Page Title\"\n *   description=\"Page description for SEO\"\n * >\n *   <main>Page content here</main>\n * </Layout>\n * ```\n */\n\n// Import global styles including design system variables\nimport '../styles/globals.css';\n\nimport SEO from '../components/SEO.astro';\nimport Header from '../components/Header.astro';\nimport Footer from '../components/Footer.astro';\nimport GoogleAnalytics from '../components/GoogleAnalytics.astro';\nimport CookieConsent from '../components/CookieConsent.astro';\nimport PerformanceMonitor from '../components/PerformanceMonitor.astro';\nimport type { SEOProps } from '../types/seo';\nimport { seoConfig } from '../config/seo.config';\n\n// Extend SEOProps but make title and description optional with defaults\ninterface Props extends Partial<SEOProps> {\n  /** Page title (defaults to site name) */\n  title?: string;\n  /** Page description (defaults to site default description) */\n  description?: string;\n  /** Additional classes for the body element */\n  bodyClass?: string;\n  /** Disable analytics for this page */\n  disableAnalytics?: boolean;\n}\n\nconst {\n  title = seoConfig.siteName,\n  description = seoConfig.defaultDescription,\n  bodyClass = '',\n  lang = seoConfig.defaultLang,\n  disableAnalytics = false,\n  ...seoProps\n} = Astro.props;\n---\n\n<!doctype html>\n<html lang={lang}>\n\t<head>\n\t\t<!-- Charset must be within first 1024 bytes -->\n\t\t<meta charset=\"UTF-8\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\n\t\t<!-- Preconnect to external resources for performance -->\n\t\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n\t\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n\n\t\t<!-- DNS prefetch for analytics (loaded conditionally) -->\n\t\t<link rel=\"dns-prefetch\" href=\"https://www.googletagmanager.com\" />\n\n\t\t<SEO\n\t\t\ttitle={title}\n\t\t\tdescription={description}\n\t\t\t{...seoProps}\n\t\t/>\n\n\t\t<link rel=\"icon\" type=\"image/svg+xml\" href=\"/favicon.svg\" />\n\n\t\t<!-- Google Analytics 4 (consent-based) -->\n\t\t{!disableAnalytics && <GoogleAnalytics />}\n\n\t\t<!-- Slot for additional head content -->\n\t\t<slot name=\"head\" />\n\t</head>\n\t<body class={bodyClass}>\n\t\t<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>\n\t\t<Header currentPath={Astro.url.pathname} />\n\t\t<div id=\"main-content\">\n\t\t\t<slot />\n\t\t</div>\n\t\t<Footer />\n\n\t\t<!-- Cookie Consent Banner (GDPR/CCPA compliant) -->\n\t\t{!disableAnalytics && <CookieConsent />}\n\n\t\t<!-- Performance Monitoring (Core Web Vitals) -->\n\t\t{!disableAnalytics && <PerformanceMonitor />}\n\t</body>\n</html>\n\n<style>\n\thtml,\n\tbody {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\n\t/* Sticky footer layout using flexbox */\n\tbody {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmin-height: 100vh;\n\t}\n\n\t#main-content {\n\t\tflex: 1 0 auto;\n\t}\n</style>\n"
}

🔧 Tool: Bash
Input: {
  "command": "cat \"/Users/James/Repos/houston-web-services/src/layouts/Layout.astro\"",
  "description": "Read Layout.astro file"
}

🔧 Tool: Bash
Input: {
  "command": "pwd && ls -la",
  "description": "Check current directory"
}
I see - the Windows path format needs adjusting. Let me check the correct path:

🔧 Tool: Bash
Input: {
  "command": "ls -la src/layouts/",
  "description": "Check layouts directory"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/Layout.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\layouts\\Layout.astro"
}

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\layouts\\Layout.astro",
  "content": "---\n/**\n * Base Layout Component\n * Provides the HTML structure and SEO configuration for all pages.\n * Includes performance optimizations and privacy-compliant analytics.\n *\n * @example\n * ```astro\n * <Layout\n *   title=\"Page Title\"\n *   description=\"Page description for SEO\"\n * >\n *   <main>Page content here</main>\n * </Layout>\n * ```\n */\n\n// Import global styles including design system variables\nimport '../styles/globals.css';\n\nimport SEO from '../components/SEO.astro';\nimport Header from '../components/Header.astro';\nimport Footer from '../components/Footer.astro';\nimport GoogleAnalytics from '../components/GoogleAnalytics.astro';\nimport CookieConsent from '../components/CookieConsent.astro';\nimport PerformanceMonitor from '../components/PerformanceMonitor.astro';\nimport type { SEOProps } from '../types/seo';\nimport { seoConfig } from '../config/seo.config';\n\n// Extend SEOProps but make title and description optional with defaults\ninterface Props extends Partial<SEOProps> {\n  /** Page title (defaults to site name) */\n  title?: string;\n  /** Page description (defaults to site default description) */\n  description?: string;\n  /** Additional classes for the body element */\n  bodyClass?: string;\n  /** Disable analytics for this page */\n  disableAnalytics?: boolean;\n}\n\nconst {\n  title = seoConfig.siteName,\n  description = seoConfig.defaultDescription,\n  bodyClass = '',\n  lang = seoConfig.defaultLang,\n  disableAnalytics = false,\n  ...seoProps\n} = Astro.props;\n---\n\n<!doctype html>\n<html lang={lang}>\n\t<head>\n\t\t<!-- Charset must be within first 1024 bytes -->\n\t\t<meta charset=\"UTF-8\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\n\t\t<!-- Preconnect to external resources for performance -->\n\t\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n\t\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n\n\t\t<!-- DNS prefetch for analytics (loaded conditionally) -->\n\t\t<link rel=\"dns-prefetch\" href=\"https://www.googletagmanager.com\" />\n\n\t\t<SEO\n\t\t\ttitle={title}\n\t\t\tdescription={description}\n\t\t\t{...seoProps}\n\t\t/>\n\n\t\t<link rel=\"icon\" type=\"image/svg+xml\" href=\"/favicon.svg\" />\n\n\t\t<!-- Google Analytics 4 (consent-based) -->\n\t\t{!disableAnalytics && <GoogleAnalytics />}\n\n\t\t<!-- Slot for additional head content -->\n\t\t<slot name=\"head\" />\n\t</head>\n\t<body class={bodyClass}>\n\t\t<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>\n\t\t<Header currentPath={Astro.url.pathname} />\n\t\t<div id=\"main-content\">\n\t\t\t<slot />\n\t\t</div>\n\t\t<Footer />\n\n\t\t<!-- Cookie Consent Banner (GDPR/CCPA compliant) -->\n\t\t{!disableAnalytics && <CookieConsent />}\n\n\t\t<!-- Performance Monitoring (Core Web Vitals) -->\n\t\t{!disableAnalytics && <PerformanceMonitor />}\n\t</body>\n</html>\n\n<style>\n\thtml,\n\tbody {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\n\t/* Sticky footer layout using flexbox */\n\tbody {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmin-height: 100vh;\n\t}\n\n\t#main-content {\n\t\tflex: 1 0 auto;\n\t}\n</style>\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create Google Analytics 4 integration with privacy-compliant configuration",
      "status": "completed",
      "activeForm": "Creating Google Analytics 4 integration"
    },
    {
      "content": "Implement cookie consent banner component with granular controls",
      "status": "completed",
      "activeForm": "Implementing cookie consent banner"
    },
    {
      "content": "Create analytics utility functions and event tracking",
      "status": "completed",
      "activeForm": "Creating analytics utility functions"
    },
    {
      "content": "Update Layout.astro to integrate GA4 and consent components",
      "status": "completed",
      "activeForm": "Updating Layout.astro with analytics"
    },
    {
      "content": "Add image optimization utilities and lazy loading",
      "status": "in_progress",
      "activeForm": "Adding image optimization utilities"
    },
    {
      "content": "Update Astro config for performance optimizations",
      "status": "pending",
      "activeForm": "Updating Astro config"
    },
    {
      "content": "Add critical CSS and performance CSS utilities",
      "status": "pending",
      "activeForm": "Adding critical CSS utilities"
    },
    {
      "content": "Create performance monitoring component",
      "status": "completed",
      "activeForm": "Creating performance monitoring"
    },
    {
      "content": "Add TypeScript types for analytics and consent",
      "status": "completed",
      "activeForm": "Adding TypeScript types"
    }
  ]
}
Now let me create the optimized image component with lazy loading and responsive images support:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\components\\OptimizedImage.astro",
  "content": "---\n/**\n * Optimized Image Component\n *\n * A performance-optimized image component that supports:\n * - Lazy loading (native or intersection observer)\n * - Responsive images with srcset\n * - WebP format with fallback\n * - Proper width/height to prevent CLS\n * - Loading placeholder/blur-up effect\n *\n * @example Basic usage:\n * ```astro\n * <OptimizedImage\n *   src=\"/images/hero.jpg\"\n *   alt=\"Hero image\"\n *   width={1200}\n *   height={630}\n * />\n * ```\n *\n * @example With responsive sizes:\n * ```astro\n * <OptimizedImage\n *   src=\"/images/portfolio/project.jpg\"\n *   alt=\"Project screenshot\"\n *   width={800}\n *   height={600}\n *   sizes=\"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw\"\n *   responsive\n * />\n * ```\n */\n\ninterface Props {\n  /** Image source URL */\n  src: string;\n  /** Alternative text for accessibility */\n  alt: string;\n  /** Image width (required for CLS prevention) */\n  width: number;\n  /** Image height (required for CLS prevention) */\n  height: number;\n  /** CSS class for the image */\n  class?: string;\n  /** Loading strategy: 'lazy' | 'eager' */\n  loading?: 'lazy' | 'eager';\n  /** Decoding hint */\n  decoding?: 'async' | 'sync' | 'auto';\n  /** Fetch priority */\n  fetchPriority?: 'high' | 'low' | 'auto';\n  /** Sizes attribute for responsive images */\n  sizes?: string;\n  /** Generate responsive srcset */\n  responsive?: boolean;\n  /** Use blur-up placeholder */\n  placeholder?: boolean;\n  /** Custom srcset */\n  srcset?: string;\n  /** Object fit style */\n  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';\n  /** Object position */\n  objectPosition?: string;\n}\n\nconst {\n  src,\n  alt,\n  width,\n  height,\n  class: className = '',\n  loading = 'lazy',\n  decoding = 'async',\n  fetchPriority = 'auto',\n  sizes,\n  responsive = false,\n  placeholder = false,\n  srcset,\n  objectFit,\n  objectPosition,\n} = Astro.props;\n\n// Generate responsive widths for srcset\nconst responsiveWidths = [320, 480, 640, 768, 1024, 1280, 1536, 1920];\n\n// Function to get WebP version of an image\nfunction getWebPSrc(imageSrc: string): string {\n  if (imageSrc.endsWith('.svg')) return imageSrc;\n  const lastDot = imageSrc.lastIndexOf('.');\n  if (lastDot === -1) return imageSrc;\n  return imageSrc.substring(0, lastDot) + '.webp';\n}\n\n// Function to generate srcset string\nfunction generateSrcSet(imageSrc: string, widths: number[]): string {\n  return widths\n    .filter(w => w <= width) // Only include widths smaller than original\n    .map(w => {\n      // For dynamic image resizing, you would append width parameter\n      // This assumes images are pre-generated at various sizes\n      return `${imageSrc} ${w}w`;\n    })\n    .join(', ');\n}\n\n// Compute srcset\nconst computedSrcSet = srcset || (responsive ? generateSrcSet(src, responsiveWidths) : undefined);\n\n// Compute sizes (default responsive sizes)\nconst computedSizes = sizes || (responsive\n  ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'\n  : undefined);\n\n// Check if image is SVG (no WebP conversion needed)\nconst isSVG = src.endsWith('.svg');\n\n// Compute style object\nconst imageStyle = [\n  objectFit && `object-fit: ${objectFit}`,\n  objectPosition && `object-position: ${objectPosition}`,\n].filter(Boolean).join('; ');\n\n// Compute aspect ratio for placeholder\nconst aspectRatio = width / height;\n---\n\n<div\n  class:list={['optimized-image-wrapper', { 'has-placeholder': placeholder }]}\n  style={`aspect-ratio: ${aspectRatio};`}\n>\n  {!isSVG ? (\n    <picture>\n      {/* WebP source for modern browsers */}\n      <source\n        type=\"image/webp\"\n        srcset={computedSrcSet ? computedSrcSet.replace(/\\.(jpg|jpeg|png|gif)/gi, '.webp') : getWebPSrc(src)}\n        sizes={computedSizes}\n      />\n      {/* Fallback for older browsers */}\n      <img\n        src={src}\n        alt={alt}\n        width={width}\n        height={height}\n        loading={loading}\n        decoding={decoding}\n        fetchpriority={fetchPriority}\n        class:list={['optimized-image', className]}\n        srcset={computedSrcSet}\n        sizes={computedSizes}\n        style={imageStyle || undefined}\n      />\n    </picture>\n  ) : (\n    <img\n      src={src}\n      alt={alt}\n      width={width}\n      height={height}\n      loading={loading}\n      decoding={decoding}\n      fetchpriority={fetchPriority}\n      class:list={['optimized-image', className]}\n      style={imageStyle || undefined}\n    />\n  )}\n\n  {/* Placeholder overlay for blur-up effect */}\n  {placeholder && (\n    <div class=\"optimized-image-placeholder\" aria-hidden=\"true\"></div>\n  )}\n</div>\n\n<style>\n  .optimized-image-wrapper {\n    position: relative;\n    overflow: hidden;\n    background-color: var(--color-background-muted, #f3f4f6);\n  }\n\n  .optimized-image {\n    display: block;\n    width: 100%;\n    height: auto;\n    transition: opacity var(--duration-300, 300ms) var(--ease-out, ease-out);\n  }\n\n  /* Placeholder for blur-up effect */\n  .has-placeholder .optimized-image {\n    opacity: 0;\n  }\n\n  .has-placeholder .optimized-image.loaded {\n    opacity: 1;\n  }\n\n  .optimized-image-placeholder {\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(\n      135deg,\n      var(--color-background-muted, #f3f4f6) 0%,\n      var(--color-background-subtle, #e5e7eb) 50%,\n      var(--color-background-muted, #f3f4f6) 100%\n    );\n    background-size: 200% 200%;\n    animation: shimmer 1.5s ease-in-out infinite;\n  }\n\n  .has-placeholder .optimized-image.loaded + .optimized-image-placeholder {\n    opacity: 0;\n    pointer-events: none;\n  }\n\n  @keyframes shimmer {\n    0% {\n      background-position: 200% 0;\n    }\n    100% {\n      background-position: -200% 0;\n    }\n  }\n\n  /* Respect reduced motion */\n  @media (prefers-reduced-motion: reduce) {\n    .optimized-image-placeholder {\n      animation: none;\n    }\n  }\n</style>\n\n<script>\n  // Add loaded class when image finishes loading\n  document.addEventListener('DOMContentLoaded', () => {\n    const images = document.querySelectorAll('.optimized-image');\n\n    images.forEach((img) => {\n      const imgElement = img as HTMLImageElement;\n\n      if (imgElement.complete) {\n        imgElement.classList.add('loaded');\n      } else {\n        imgElement.addEventListener('load', () => {\n          imgElement.classList.add('loaded');\n        });\n      }\n    });\n  });\n\n  // Re-run on Astro page transitions\n  document.addEventListener('astro:page-load', () => {\n    const images = document.querySelectorAll('.optimized-image:not(.loaded)');\n\n    images.forEach((img) => {\n      const imgElement = img as HTMLImageElement;\n\n      if (imgElement.complete) {\n        imgElement.classList.add('loaded');\n      } else {\n        imgElement.addEventListener('load', () => {\n          imgElement.classList.add('loaded');\n        });\n      }\n    });\n  });\n</script>\n"
}
Now let me update the Astro config with performance optimizations and add CSS performance utilities:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\astro.config.mjs"
}

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\astro.config.mjs",
  "content": "// @ts-check\nimport { defineConfig } from 'astro/config';\nimport sitemap from '@astrojs/sitemap';\n\n// https://astro.build/config\nexport default defineConfig({\n  // IMPORTANT: Set this to your actual production domain\n  site: 'https://houston-web-services.com',\n\n  // Build optimizations\n  build: {\n    // Inline stylesheets smaller than 4kb\n    inlineStylesheets: 'auto',\n  },\n\n  // Vite configuration for bundling optimizations\n  vite: {\n    build: {\n      // Enable CSS code splitting\n      cssCodeSplit: true,\n      // Minify CSS and JS in production\n      minify: 'esbuild',\n      // Target modern browsers for smaller bundles\n      target: 'es2020',\n      // Rollup options for tree shaking and code splitting\n      rollupOptions: {\n        output: {\n          // Manual chunks for better caching\n          manualChunks: {\n            // Separate vendor chunks if needed in the future\n          },\n        },\n      },\n    },\n    // CSS preprocessing options\n    css: {\n      devSourcemap: true,\n    },\n    // Optimize dependencies\n    optimizeDeps: {\n      // Include dependencies that need pre-bundling\n      include: [],\n    },\n  },\n\n  // Compression is handled at the server/CDN level\n  // These options configure how Astro builds assets\n\n  // Prefetch configuration for faster navigation\n  prefetch: {\n    prefetchAll: false, // Only prefetch visible links\n    defaultStrategy: 'hover', // Prefetch on hover\n  },\n\n  integrations: [\n    sitemap({\n      // Exclude any admin, private, or utility routes if they exist\n      filter: (page) =>\n        !page.includes('/admin') &&\n        !page.includes('/private') &&\n        !page.includes('/api/'),\n      // Customize sitemap entries if needed\n      serialize(item) {\n        // Default priority and changefreq\n        item.changefreq = 'weekly';\n        item.priority = 0.7;\n        // Home page gets higher priority\n        if (item.url.endsWith('/')) {\n          item.priority = 1.0;\n        }\n        return item;\n      },\n    }),\n  ],\n\n  // Server configuration\n  server: {\n    // Enable compression in dev\n    headers: {\n      // Security headers\n      'X-Content-Type-Options': 'nosniff',\n      'X-Frame-Options': 'SAMEORIGIN',\n      'X-XSS-Protection': '1; mode=block',\n    },\n  },\n});\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create Google Analytics 4 integration with privacy-compliant configuration",
      "status": "completed",
      "activeForm": "Creating Google Analytics 4 integration"
    },
    {
      "content": "Implement cookie consent banner component with granular controls",
      "status": "completed",
      "activeForm": "Implementing cookie consent banner"
    },
    {
      "content": "Create analytics utility functions and event tracking",
      "status": "completed",
      "activeForm": "Creating analytics utility functions"
    },
    {
      "content": "Update Layout.astro to integrate GA4 and consent components",
      "status": "completed",
      "activeForm": "Updating Layout.astro with analytics"
    },
    {
      "content": "Add image optimization utilities and lazy loading",
      "status": "completed",
      "activeForm": "Adding image optimization utilities"
    },
    {
      "content": "Update Astro config for performance optimizations",
      "status": "completed",
      "activeForm": "Updating Astro config"
    },
    {
      "content": "Add critical CSS and performance CSS utilities",
      "status": "in_progress",
      "activeForm": "Adding critical CSS utilities"
    },
    {
      "content": "Create performance monitoring component",
      "status": "completed",
      "activeForm": "Creating performance monitoring"
    },
    {
      "content": "Add TypeScript types for analytics and consent",
      "status": "completed",
      "activeForm": "Adding TypeScript types"
    }
  ]
}
Now let me add critical CSS utilities and performance CSS:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\styles\\performance.css",
  "content": "/**\n * =================================================================\n * HOUSTON WEB SERVICES - PERFORMANCE STYLES\n * =================================================================\n *\n * CSS utilities and optimizations for achieving high Lighthouse scores.\n * Includes critical rendering path optimizations, CLS prevention,\n * and accessibility enhancements.\n *\n * =================================================================\n */\n\n/* =================================================================\n * LAYOUT SHIFT PREVENTION (CLS)\n * =================================================================\n * Prevent Cumulative Layout Shift by reserving space for async content\n */\n\n/* Image containers with aspect ratio */\n.aspect-ratio-box {\n  position: relative;\n  width: 100%;\n  height: 0;\n}\n\n.aspect-ratio-box > * {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n/* Common aspect ratios */\n.aspect-16-9 { padding-bottom: 56.25%; }\n.aspect-4-3 { padding-bottom: 75%; }\n.aspect-1-1 { padding-bottom: 100%; }\n.aspect-21-9 { padding-bottom: 42.86%; }\n.aspect-3-2 { padding-bottom: 66.67%; }\n\n/* Modern aspect-ratio property with fallback */\n@supports (aspect-ratio: 1) {\n  .aspect-ratio-box {\n    height: auto;\n    padding-bottom: 0 !important;\n  }\n\n  .aspect-ratio-box > * {\n    position: static;\n  }\n\n  .aspect-16-9 { aspect-ratio: 16 / 9; }\n  .aspect-4-3 { aspect-ratio: 4 / 3; }\n  .aspect-1-1 { aspect-ratio: 1 / 1; }\n  .aspect-21-9 { aspect-ratio: 21 / 9; }\n  .aspect-3-2 { aspect-ratio: 3 / 2; }\n}\n\n/* Font loading optimization - prevent FOIT */\n.fonts-loading body {\n  /* Use system fonts while custom fonts load */\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;\n}\n\n.fonts-loaded body {\n  font-family: var(--font-body);\n}\n\n.fonts-loading h1,\n.fonts-loading h2,\n.fonts-loading h3,\n.fonts-loading h4,\n.fonts-loading h5,\n.fonts-loading h6 {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;\n}\n\n.fonts-loaded h1,\n.fonts-loaded h2,\n.fonts-loaded h3,\n.fonts-loaded h4,\n.fonts-loaded h5,\n.fonts-loaded h6 {\n  font-family: var(--font-heading);\n}\n\n/* =================================================================\n * CONTENT VISIBILITY (RENDERING OPTIMIZATION)\n * =================================================================\n * Use content-visibility to defer rendering of off-screen content\n */\n\n.content-visibility-auto {\n  content-visibility: auto;\n  contain-intrinsic-size: auto 500px;\n}\n\n/* Apply to sections that are likely below the fold */\nsection:not(:first-of-type) {\n  content-visibility: auto;\n  contain-intrinsic-size: auto 600px;\n}\n\n/* =================================================================\n * IMAGE OPTIMIZATION UTILITIES\n * =================================================================\n */\n\n/* Lazy load images */\nimg[loading=\"lazy\"] {\n  /* Placeholder background while loading */\n  background-color: var(--color-background-muted, #f3f4f6);\n  background-image: linear-gradient(\n    90deg,\n    var(--color-background-muted, #f3f4f6) 0%,\n    var(--color-background-subtle, #e5e7eb) 20%,\n    var(--color-background-muted, #f3f4f6) 40%\n  );\n  background-size: 200% 100%;\n}\n\n/* Responsive images should scale properly */\n.responsive-image {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n\n/* High priority images (LCP candidates) */\n.priority-image {\n  /* Ensure these images render immediately */\n  content-visibility: visible;\n}\n\n/* =================================================================\n * ANIMATION PERFORMANCE\n * =================================================================\n * GPU-accelerated animations for smooth performance\n */\n\n/* Use transform and opacity for animations (GPU accelerated) */\n.animate-fade-in {\n  animation: fadeIn var(--duration-300, 300ms) var(--ease-out, ease-out);\n}\n\n.animate-slide-up {\n  animation: slideUp var(--duration-300, 300ms) var(--ease-out, ease-out);\n}\n\n.animate-scale-in {\n  animation: scaleIn var(--duration-200, 200ms) var(--ease-out, ease-out);\n}\n\n@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes scaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n/* Will-change for elements that will animate */\n.will-animate {\n  will-change: transform, opacity;\n}\n\n/* Remove will-change after animation completes */\n.animation-complete {\n  will-change: auto;\n}\n\n/* =================================================================\n * RENDER BLOCKING PREVENTION\n * =================================================================\n */\n\n/* Critical above-the-fold content visibility */\n.above-fold {\n  content-visibility: visible !important;\n}\n\n/* Non-critical content can be lazily rendered */\n.below-fold {\n  content-visibility: auto;\n  contain-intrinsic-size: auto 400px;\n}\n\n/* =================================================================\n * ACCESSIBILITY PERFORMANCE\n * =================================================================\n * Maintain accessibility while optimizing performance\n */\n\n/* Focus indicator optimization (prevents layout shift) */\n:focus-visible {\n  outline: 2px solid var(--color-primary, #365395);\n  outline-offset: 2px;\n  /* Use box-shadow instead of outline for rounded elements */\n}\n\n/* Focus within containers */\n.focus-within-ring:focus-within {\n  box-shadow: 0 0 0 2px var(--color-primary, #365395);\n}\n\n/* High contrast mode support */\n@media (prefers-contrast: high) {\n  :focus-visible {\n    outline-width: 3px;\n  }\n\n  a, button {\n    text-decoration-thickness: 2px;\n  }\n}\n\n/* =================================================================\n * PRINT STYLES\n * =================================================================\n * Optimized print styles\n */\n\n@media print {\n  /* Hide non-essential elements */\n  header,\n  footer,\n  nav,\n  .cookie-consent,\n  .cookie-settings-toggle,\n  .skip-link {\n    display: none !important;\n  }\n\n  /* Ensure readability */\n  body {\n    font-size: 12pt;\n    line-height: 1.5;\n    color: #000;\n    background: #fff;\n  }\n\n  /* Page breaks */\n  h1, h2, h3 {\n    page-break-after: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n    page-break-inside: avoid;\n  }\n\n  /* Links */\n  a[href^=\"http\"]:after {\n    content: \" (\" attr(href) \")\";\n    font-size: 0.8em;\n    color: #666;\n  }\n}\n\n/* =================================================================\n * LOADING STATES\n * =================================================================\n * Optimized loading indicators\n */\n\n/* Skeleton loading animation */\n.skeleton {\n  background: linear-gradient(\n    90deg,\n    var(--color-background-muted, #f3f4f6) 25%,\n    var(--color-background-subtle, #e5e7eb) 50%,\n    var(--color-background-muted, #f3f4f6) 75%\n  );\n  background-size: 200% 100%;\n  animation: skeleton-loading 1.5s infinite;\n  border-radius: var(--radius-base, 4px);\n}\n\n@keyframes skeleton-loading {\n  0% { background-position: 200% 0; }\n  100% { background-position: -200% 0; }\n}\n\n/* Respect reduced motion for skeletons */\n@media (prefers-reduced-motion: reduce) {\n  .skeleton {\n    animation: none;\n    background: var(--color-background-muted, #f3f4f6);\n  }\n}\n\n/* Skeleton variants */\n.skeleton-text {\n  height: 1em;\n  margin-bottom: 0.5em;\n}\n\n.skeleton-text-sm {\n  height: 0.875em;\n  width: 80%;\n}\n\n.skeleton-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n}\n\n.skeleton-image {\n  width: 100%;\n  padding-bottom: 56.25%; /* 16:9 aspect ratio */\n}\n\n.skeleton-button {\n  height: 44px;\n  width: 120px;\n  border-radius: var(--radius-md, 6px);\n}\n\n/* =================================================================\n * CRITICAL CSS MARKERS\n * =================================================================\n * Classes to help identify critical vs non-critical CSS\n */\n\n/* Mark elements that need critical CSS */\n.critical {\n  /* This class helps identify critical elements */\n}\n\n/* Mark elements that can use deferred CSS */\n.deferred {\n  /* This class helps identify non-critical elements */\n}\n"
}
Now let me update the globals.css to import the performance styles:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\styles\\globals.css"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\styles\\globals.css",
  "old_string": "/* Import design system variables */\n@import './variables.css';",
  "new_string": "/* Import design system variables */\n@import './variables.css';\n\n/* Import performance utilities */\n@import './performance.css';"
}
Now let me update the types/index.ts to export the analytics types:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\types\\index.ts"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\src\\types\\index.ts",
  "old_string": "export {\n  DEFAULT_FAQ_ITEMS,\n} from './faq';",
  "new_string": "export {\n  DEFAULT_FAQ_ITEMS,\n} from './faq';\n\nexport type {\n  ConsentCategory,\n  ConsentStatus,\n  ConsentPreferences,\n  ConsentState,\n  ConsentBannerConfig,\n  GA4Config,\n  GA4ConsentMode,\n  GA4StandardEvent,\n  CustomEventName,\n  AnalyticsEvent,\n  BaseEventParams,\n  PageViewParams,\n  ClickEventParams,\n  FormEventParams,\n  ScrollEventParams,\n  CTAEventParams,\n  LeadEventParams,\n  EventParams,\n  UserProperties,\n  AnalyticsService,\n  WebVitals,\n  PerformanceEntry,\n} from './analytics';"
}
Now let me create a server configuration file for deployment with compression and caching headers:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\public\\_headers",
  "content": "# =================================================================\n# HOUSTON WEB SERVICES - HTTP HEADERS CONFIGURATION\n# =================================================================\n# This file configures HTTP headers for static hosting (Netlify, Cloudflare Pages, etc.)\n# For optimal performance and security in production environments.\n# =================================================================\n\n# Default headers for all paths\n/*\n  # Security Headers\n  X-Content-Type-Options: nosniff\n  X-Frame-Options: SAMEORIGIN\n  X-XSS-Protection: 1; mode=block\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()\n\n  # Content Security Policy (adjust as needed for your analytics/scripts)\n  # Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com https://analytics.google.com\n\n# Static assets - Long cache (1 year)\n/_astro/*\n  Cache-Control: public, max-age=31536000, immutable\n\n# Images - Medium cache (30 days)\n/images/*\n  Cache-Control: public, max-age=2592000, stale-while-revalidate=86400\n\n/portfolio/*\n  Cache-Control: public, max-age=2592000, stale-while-revalidate=86400\n\n# Fonts - Long cache (1 year)\n/fonts/*\n  Cache-Control: public, max-age=31536000, immutable\n\n# SVG files - Medium cache (7 days)\n/*.svg\n  Cache-Control: public, max-age=604800\n\n# Favicon - Medium cache (7 days)\n/favicon.svg\n  Cache-Control: public, max-age=604800\n\n# HTML pages - Short cache with revalidation\n/*.html\n  Cache-Control: public, max-age=0, must-revalidate\n\n/\n  Cache-Control: public, max-age=0, must-revalidate\n\n# Sitemap and robots - Short cache\n/sitemap*.xml\n  Cache-Control: public, max-age=86400\n\n/robots.txt\n  Cache-Control: public, max-age=86400\n"
}
Now let me create an example .env file with documentation for the analytics configuration:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\houston-web-services\\.env.example",
  "content": "# =================================================================\n# HOUSTON WEB SERVICES - ENVIRONMENT VARIABLES\n# =================================================================\n# Copy this file to .env and update with your actual values.\n# Never commit the actual .env file to version control.\n# =================================================================\n\n# =================================================================\n# GOOGLE ANALYTICS 4\n# =================================================================\n# Your GA4 Measurement ID (format: G-XXXXXXXXXX)\n# Get this from Google Analytics: Admin > Data Streams > Web Stream\nPUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX\n\n# =================================================================\n# SITE CONFIGURATION\n# =================================================================\n# Production site URL (used for canonical URLs and social sharing)\nPUBLIC_SITE_URL=https://houston-web-services.com\n\n# =================================================================\n# CONTACT INFORMATION (Optional - for structured data)\n# =================================================================\n# PUBLIC_CONTACT_EMAIL=hello@houston-web-services.com\n# PUBLIC_CONTACT_PHONE=+1-713-555-0123\n\n# =================================================================\n# SOCIAL MEDIA (Optional)\n# =================================================================\n# PUBLIC_TWITTER_HANDLE=@houstonweb\n# PUBLIC_FACEBOOK_URL=https://facebook.com/houstonwebservices\n# PUBLIC_LINKEDIN_URL=https://linkedin.com/company/houston-web-services\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create Google Analytics 4 integration with privacy-compliant configuration",
      "status": "completed",
      "activeForm": "Creating Google Analytics 4 integration"
    },
    {
      "content": "Implement cookie consent banner component with granular controls",
      "status": "completed",
      "activeForm": "Implementing cookie consent banner"
    },
    {
      "content": "Create analytics utility functions and event tracking",
      "status": "completed",
      "activeForm": "Creating analytics utility functions"
    },
    {
      "content": "Update Layout.astro to integrate GA4 and consent components",
      "status": "completed",
      "activeForm": "Updating Layout.astro with analytics"
    },
    {
      "content": "Add image optimization utilities and lazy loading",
      "status": "completed",
      "activeForm": "Adding image optimization utilities"
    },
    {
      "content": "Update Astro config for performance optimizations",
      "status": "completed",
      "activeForm": "Updating Astro config"
    },
    {
      "content": "Add critical CSS and performance CSS utilities",
      "status": "completed",
      "activeForm": "Adding critical CSS utilities"
    },
    {
      "content": "Create performance monitoring component",
      "status": "completed",
      "activeForm": "Creating performance monitoring"
    },
    {
      "content": "Add TypeScript types for analytics and consent",
      "status": "completed",
      "activeForm": "Adding TypeScript types"
    }
  ]
}
Now let me verify the build works by running a build command:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/houston-web-services && npm run build 2>&1",
  "description": "Build the Astro project to verify configuration",
  "timeout": 120000
}
The build completed successfully. Let me also verify the generated output to ensure everything is configured correctly:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/houston-web-services && head -100 dist/index.html",
  "description": "Check generated HTML for analytics integration"
}
The build is working and I can see the analytics components are being included (preconnect to fonts.googleapis.com and dns-prefetch for googletagmanager.com are visible). Let me check that the cookie consent component is also included:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/houston-web-services && grep -l \"cookie-consent\" dist/*.html dist/**/*.html 2>/dev/null | head -5",
  "description": "Check for cookie consent in build output"
}
All pages have the cookie consent component. Let me also check that the performance CSS is being bundled:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/houston-web-services && grep -l \"skeleton\" dist/_astro/*.css 2>/dev/null | head -3",
  "description": "Check for performance CSS in build output"
}
The performance CSS is being bundled. Now let me list all the files that were created/modified:

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/houston-web-services && git status --short",
  "description": "List all changed files"
}
Let me provide a comprehensive summary of what was implemented:

<summary>
## Summary: Comprehensive Website Performance and Analytics Optimization

### Changes Implemented

#### Google Analytics 4 Integration (GDPR/CCPA Compliant)
- Created privacy-focused GA4 configuration with IP anonymization, consent mode v2, and data retention policies
- Implemented cookie consent banner with granular controls (necessary, analytics, marketing, preferences)
- GA4 script loads asynchronously and only after user consent is granted
- Support for Do Not Track browser setting
- Configurable via environment variables (PUBLIC_GA4_MEASUREMENT_ID)

#### Cookie Consent Banner
- GDPR/CCPA compliant with accept all, reject all, and save preferences options
- Granular consent categories with clear descriptions
- Accessible with full keyboard navigation and ARIA support
- Floating settings button to re-open preferences after initial consent
- Consent stored in localStorage with version tracking for policy updates

#### Analytics Event Tracking
- Automatic tracking for: scroll depth, time on page, outbound links, file downloads, phone clicks, email clicks, form interactions
- Custom event functions for CTA clicks, service views, portfolio views
- Lead generation event tracking
- Consent update tracking

#### Performance Monitoring (Core Web Vitals)
- Real-time monitoring of LCP, FID/INP, CLS, FCP, and TTFB
- Automatic reporting to GA4 when consent is given
- Rating system (good/needs-improvement/poor) based on Google's thresholds

#### Image Optimization
- OptimizedImage component with WebP support and fallback
- Native lazy loading with loading="lazy" attribute
- Responsive images support with srcset and sizes attributes
- Width/height attributes to prevent CLS
- Shimmer placeholder effect for loading states

#### CSS/JS Performance Optimizations
- Astro config updated with Vite optimizations (CSS code splitting, minification, tree shaking)
- Performance CSS utilities for CLS prevention, skeleton loading, and GPU-accelerated animations
- Content-visibility optimizations for below-the-fold content
- Preconnect/DNS prefetch for external resources
- Print styles for optimized printing

#### Build & Deployment
- HTTP headers configuration file for caching (1 year for static assets)
- Security headers (X-Content-Type-Options, X-Frame-Options, etc.)
- Prefetch configuration for faster navigation
- Environment variables template (.env.example)

### Files Created
- `src/types/analytics.ts` - TypeScript types for analytics and consent
- `src/config/analytics.config.ts` - GA4 and consent configuration
- `src/utils/analytics.ts` - Analytics utility functions and event tracking
- `src/components/CookieConsent.astro` - Cookie consent banner component
- `src/components/GoogleAnalytics.astro` - GA4 script loading component
- `src/components/PerformanceMonitor.astro` - Core Web Vitals monitoring
- `src/components/OptimizedImage.astro` - Performance-optimized image component
- `src/styles/performance.css` - Performance CSS utilities
- `public/_headers` - HTTP caching headers configuration
- `.env.example` - Environment variables template

### Files Modified
- `src/layouts/Layout.astro` - Integrated analytics, consent, and performance components
- `src/styles/globals.css` - Added performance CSS import
- `src/types/index.ts` - Added analytics type exports
- `astro.config.mjs` - Added Vite build optimizations and prefetch config

### Notes for Developer
1. **Set GA4 Measurement ID**: Copy `.env.example` to `.env` and update `PUBLIC_GA4_MEASUREMENT_ID` with your actual GA4 measurement ID (G-XXXXXXXXXX)

2. **Privacy Policy Pages**: Create `/privacy-policy` and `/cookie-policy` pages (referenced in consent banner)

3. **Testing Analytics**: 
   - Use GA4 Debug View in Google Analytics
   - Check Real-Time reports after accepting cookies
   - Use browser dev tools to verify consent storage

4. **Lighthouse Targets**: The implementation targets 95+ scores by:
   - Deferring non-critical JS/CSS
   - Lazy loading images below the fold
   - Preventing layout shifts with proper image dimensions
   - Preconnecting to required origins
   - Using modern image formats (WebP)

5. **Server Configuration**: Deploy the `_headers` file for Netlify/Cloudflare, or configure equivalent headers in your server (nginx/Apache) for optimal caching

6. **Image Conversion**: For full WebP support, convert existing images to WebP format alongside originals. The OptimizedImage component will automatically use WebP where supported.
</summary>