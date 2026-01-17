/**
 * =================================================================
 * ANALYTICS UTILITIES
 * =================================================================
 *
 * Utility functions for Google Analytics 4 integration including
 * event tracking, consent management, and performance monitoring.
 *
 * =================================================================
 */

import type {
  AnalyticsEvent,
  EventParams,
  PageViewParams,
  UserProperties,
  GA4ConsentMode,
  ConsentPreferences,
  ConsentState,
  WebVitals,
} from '../types/analytics';

import {
  GA4_MEASUREMENT_ID,
  ga4Config,
  defaultConsentMode,
  mapConsentToGA4,
  CONSENT_STORAGE_KEY,
  CONSENT_TIMESTAMP_KEY,
  CONSENT_VERSION_KEY,
  consentBannerConfig,
  defaultConsentPreferences,
  SCROLL_DEPTH_THRESHOLDS,
  TIME_ON_PAGE_INTERVALS,
  DOWNLOAD_EXTENSIONS,
  shouldLoadAnalytics,
} from '../config/analytics.config';

// =================================================================
// ANALYTICS INITIALIZATION
// =================================================================

let isInitialized = false;
let analyticsEnabled = false;

/**
 * Initialize Google Analytics 4 with consent mode
 */
export function initGA4(): void {
  if (typeof window === 'undefined' || isInitialized) return;

  // Check if analytics should be loaded
  if (!shouldLoadAnalytics()) {
    console.log('[Analytics] Disabled due to privacy settings');
    return;
  }

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];

  // Define gtag function
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  // Set default consent before loading GA
  window.gtag('consent', 'default', defaultConsentMode);

  // Initialize GA4
  window.gtag('js', new Date());

  // Configure GA4 with privacy settings
  window.gtag('config', GA4_MEASUREMENT_ID, {
    anonymize_ip: ga4Config.anonymizeIp,
    cookie_domain: ga4Config.cookieDomain,
    cookie_expires: ga4Config.cookieExpires,
    cookie_flags: ga4Config.cookieFlags,
    send_page_view: false, // We'll send manually after consent check
  });

  isInitialized = true;

  // Check stored consent and update
  const storedConsent = getStoredConsent();
  if (storedConsent && storedConsent.hasConsented) {
    updateConsent(storedConsent.preferences);
    analyticsEnabled = storedConsent.preferences.analytics;

    // Send initial page view if analytics is enabled
    if (analyticsEnabled) {
      trackPageView();
    }
  }

  if (ga4Config.debug) {
    console.log('[Analytics] GA4 initialized with measurement ID:', GA4_MEASUREMENT_ID);
  }
}

/**
 * Load GA4 script asynchronously
 */
export function loadGA4Script(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Window not available'));
      return;
    }

    // Check if script already exists
    if (document.querySelector(`script[src*="googletagmanager.com/gtag"]`)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;

    script.onload = () => {
      initGA4();
      resolve();
    };

    script.onerror = () => {
      reject(new Error('Failed to load GA4 script'));
    };

    document.head.appendChild(script);
  });
}

// =================================================================
// CONSENT MANAGEMENT
// =================================================================

/**
 * Get stored consent from localStorage
 */
export function getStoredConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;

    const preferences = JSON.parse(stored) as ConsentPreferences;
    const timestamp = parseInt(localStorage.getItem(CONSENT_TIMESTAMP_KEY) || '0', 10);
    const version = localStorage.getItem(CONSENT_VERSION_KEY) || '1.0.0';

    // Check if consent version matches (re-prompt if policy changed)
    if (version !== consentBannerConfig.consentVersion) {
      return null;
    }

    return {
      preferences,
      timestamp,
      version,
      hasConsented: true,
    };
  } catch {
    return null;
  }
}

/**
 * Save consent preferences to localStorage
 */
export function saveConsent(preferences: ConsentPreferences): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferences));
    localStorage.setItem(CONSENT_TIMESTAMP_KEY, Date.now().toString());
    localStorage.setItem(CONSENT_VERSION_KEY, consentBannerConfig.consentVersion);
  } catch (error) {
    console.error('[Analytics] Failed to save consent:', error);
  }
}

/**
 * Clear stored consent
 */
export function clearConsent(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
    localStorage.removeItem(CONSENT_TIMESTAMP_KEY);
    localStorage.removeItem(CONSENT_VERSION_KEY);
  } catch (error) {
    console.error('[Analytics] Failed to clear consent:', error);
  }
}

/**
 * Update GA4 consent mode
 */
export function updateConsent(preferences: ConsentPreferences): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  const consentMode = mapConsentToGA4(preferences);

  window.gtag('consent', 'update', consentMode);

  analyticsEnabled = preferences.analytics;

  // Save consent
  saveConsent(preferences);

  // Track consent event
  if (preferences.analytics) {
    trackEvent('consent_granted', {
      analytics: preferences.analytics,
      marketing: preferences.marketing,
      preferences: preferences.preferences,
    });
  }

  if (ga4Config.debug) {
    console.log('[Analytics] Consent updated:', consentMode);
  }
}

/**
 * Accept all cookies
 */
export function acceptAllCookies(): void {
  const allAccepted: ConsentPreferences = {
    necessary: true,
    analytics: true,
    marketing: true,
    preferences: true,
  };

  updateConsent(allAccepted);

  // Send page view after accepting
  trackPageView();
}

/**
 * Accept only necessary cookies
 */
export function acceptNecessaryOnly(): void {
  updateConsent(defaultConsentPreferences);
}

/**
 * Check if consent has been given
 */
export function hasConsentBeenGiven(): boolean {
  const consent = getStoredConsent();
  return consent !== null && consent.hasConsented;
}

/**
 * Check if analytics is enabled
 */
export function isAnalyticsEnabled(): boolean {
  return analyticsEnabled && isInitialized;
}

// =================================================================
// EVENT TRACKING
// =================================================================

/**
 * Track a custom event
 */
export function trackEvent(eventName: AnalyticsEvent, params?: EventParams): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  // Only track if analytics is enabled (except consent events)
  if (!analyticsEnabled && !eventName.startsWith('consent_')) {
    if (ga4Config.debug) {
      console.log('[Analytics] Event blocked (no consent):', eventName);
    }
    return;
  }

  const eventParams = {
    ...params,
    timestamp: Date.now(),
  };

  window.gtag('event', eventName, eventParams);

  if (ga4Config.debug) {
    console.log('[Analytics] Event tracked:', eventName, eventParams);
  }
}

/**
 * Track page view
 */
export function trackPageView(params?: PageViewParams): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  if (!analyticsEnabled) {
    if (ga4Config.debug) {
      console.log('[Analytics] Page view blocked (no consent)');
    }
    return;
  }

  const pageParams = {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_referrer: document.referrer,
    ...params,
  };

  window.gtag('event', 'page_view', pageParams);

  if (ga4Config.debug) {
    console.log('[Analytics] Page view tracked:', pageParams);
  }
}

/**
 * Set user properties
 */
export function setUserProperties(properties: UserProperties): void {
  if (typeof window === 'undefined' || !window.gtag || !analyticsEnabled) return;

  window.gtag('set', 'user_properties', properties);

  if (ga4Config.debug) {
    console.log('[Analytics] User properties set:', properties);
  }
}

// =================================================================
// AUTOMATIC EVENT TRACKING
// =================================================================

/**
 * Initialize automatic event tracking
 */
export function initAutoTracking(): void {
  if (typeof window === 'undefined') return;

  // Track scroll depth
  initScrollTracking();

  // Track time on page
  initTimeTracking();

  // Track outbound links
  initLinkTracking();

  // Track form interactions
  initFormTracking();
}

/**
 * Track scroll depth
 */
function initScrollTracking(): void {
  const trackedThresholds = new Set<number>();

  const handleScroll = () => {
    if (!analyticsEnabled) return;

    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

    for (const threshold of SCROLL_DEPTH_THRESHOLDS) {
      if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
        trackedThresholds.add(threshold);
        trackEvent('scroll_depth', {
          percent_scrolled: threshold,
          page_path: window.location.pathname,
        });
      }
    }
  };

  // Throttle scroll events
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Track time on page
 */
function initTimeTracking(): void {
  const startTime = Date.now();
  const trackedIntervals = new Set<number>();

  const checkTime = () => {
    if (!analyticsEnabled) return;

    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);

    for (const interval of TIME_ON_PAGE_INTERVALS) {
      if (elapsedSeconds >= interval && !trackedIntervals.has(interval)) {
        trackedIntervals.add(interval);
        trackEvent('time_on_page', {
          seconds: interval,
          page_path: window.location.pathname,
        });
      }
    }
  };

  // Check every 10 seconds
  setInterval(checkTime, 10000);
}

/**
 * Track link clicks
 */
function initLinkTracking(): void {
  document.addEventListener('click', (event) => {
    if (!analyticsEnabled) return;

    const target = event.target as HTMLElement;
    const link = target.closest('a');

    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Track outbound links
    if (href.startsWith('http') && !href.includes(window.location.hostname)) {
      trackEvent('click', {
        link_url: href,
        link_text: link.textContent?.trim(),
        outbound: true,
      });
    }

    // Track phone clicks
    if (href.startsWith('tel:')) {
      trackEvent('phone_click', {
        link_url: href,
        page_path: window.location.pathname,
      });
    }

    // Track email clicks
    if (href.startsWith('mailto:')) {
      trackEvent('email_click', {
        link_url: href,
        page_path: window.location.pathname,
      });
    }

    // Track file downloads
    const extension = href.split('.').pop()?.toLowerCase();
    if (extension && DOWNLOAD_EXTENSIONS.includes(extension)) {
      trackEvent('file_download', {
        link_url: href,
        file_extension: extension,
        page_path: window.location.pathname,
      });
    }
  });
}

/**
 * Track form interactions
 */
function initFormTracking(): void {
  document.addEventListener('focusin', (event) => {
    if (!analyticsEnabled) return;

    const target = event.target as HTMLElement;
    const form = target.closest('form');

    if (!form || form.dataset.formStartTracked) return;

    form.dataset.formStartTracked = 'true';
    trackEvent('contact_form_start', {
      form_id: form.id || undefined,
      form_name: form.getAttribute('name') || undefined,
      page_path: window.location.pathname,
    });
  });

  document.addEventListener('submit', (event) => {
    if (!analyticsEnabled) return;

    const form = event.target as HTMLFormElement;

    trackEvent('contact_form_submit', {
      form_id: form.id || undefined,
      form_name: form.getAttribute('name') || undefined,
      page_path: window.location.pathname,
    });
  });
}

// =================================================================
// CTA TRACKING
// =================================================================

/**
 * Track CTA button clicks
 */
export function trackCTAClick(
  ctaText: string,
  ctaLocation: string,
  ctaDestination: string,
  ctaType: 'primary' | 'secondary' | 'link' = 'primary'
): void {
  trackEvent('cta_click', {
    cta_text: ctaText,
    cta_location: ctaLocation,
    cta_destination: ctaDestination,
    cta_type: ctaType,
    page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
  });
}

/**
 * Track service view
 */
export function trackServiceView(serviceName: string, serviceId: string): void {
  trackEvent('service_view', {
    service_name: serviceName,
    service_id: serviceId,
    page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
  });
}

/**
 * Track portfolio item view
 */
export function trackPortfolioView(projectName: string, projectCategory: string): void {
  trackEvent('portfolio_view', {
    project_name: projectName,
    project_category: projectCategory,
    page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
  });
}

// =================================================================
// ERROR TRACKING
// =================================================================

/**
 * Track 404 page not found errors
 * Helps identify broken links and missing pages
 */
export function track404Error(
  attemptedPath: string,
  referrer?: string
): void {
  trackEvent('page_not_found', {
    page_path: attemptedPath,
    page_referrer: referrer || (typeof document !== 'undefined' ? document.referrer : undefined),
    page_location: typeof window !== 'undefined' ? window.location.href : undefined,
    timestamp: Date.now(),
  });

  if (ga4Config.debug) {
    console.log('[Analytics] 404 Error tracked:', {
      path: attemptedPath,
      referrer: referrer,
    });
  }
}

// =================================================================
// PERFORMANCE TRACKING
// =================================================================

/**
 * Track Core Web Vitals
 */
export function trackWebVitals(vitals: WebVitals): void {
  if (!analyticsEnabled) return;

  Object.entries(vitals).forEach(([metric, value]) => {
    if (value !== undefined) {
      trackEvent('web_vitals' as AnalyticsEvent, {
        metric_name: metric,
        metric_value: value,
        metric_rating: getMetricRating(metric, value),
        page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
      });
    }
  });
}

/**
 * Get performance rating for a metric
 */
function getMetricRating(metric: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds: Record<string, [number, number]> = {
    LCP: [2500, 4000],
    FID: [100, 300],
    CLS: [0.1, 0.25],
    FCP: [1800, 3000],
    TTFB: [800, 1800],
    INP: [200, 500],
  };

  const [good, poor] = thresholds[metric] || [0, 0];

  if (value <= good) return 'good';
  if (value <= poor) return 'needs-improvement';
  return 'poor';
}

// =================================================================
// UTILITY EXPORTS
// =================================================================

export {
  GA4_MEASUREMENT_ID,
  ga4Config,
  defaultConsentPreferences,
  consentBannerConfig,
};
