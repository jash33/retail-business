/**
 * Type Exports
 * Re-exports all types for convenient importing
 */

export type {
  MetaTags,
  OpenGraphTags,
  TwitterTags,
  LanguageConfig,
  ArticleSchema,
  OrganizationSchema,
  ProductSchema,
  BreadcrumbSchema,
  WebPageSchema,
  JsonLdSchema,
  CustomMetaTag,
  SEOProps,
  SEOConfig,
} from './seo';

export type {
  ButtonVariant,
  ButtonSize,
  IconPosition,
  ButtonProps,
  ButtonState,
} from './button';

export type {
  Service,
  ServiceCTA,
  ServiceCardProps,
  ServicesSectionProps,
} from './service';

export type {
  ProjectType,
  BudgetRange,
  ContactFormData,
  ContactFormErrors,
  ContactFormTouched,
  FormStatus,
  ContactFormState,
  ProjectTypeOption,
  BudgetRangeOption,
  ValidationConfig,
} from './contact-form';

export {
  DEFAULT_VALIDATION_CONFIG,
  PROJECT_TYPE_OPTIONS,
  BUDGET_RANGE_OPTIONS,
  INITIAL_FORM_DATA,
  INITIAL_TOUCHED,
} from './contact-form';


export type {
  HeroCTA,
  HeroSectionProps,
  HeroVideoConfig,
  HeroParallaxConfig,
  HeroOverlayPosition,
  HeroEditorialProps,
  RetailHeroProps,
  VideoHeroGradientType,
  VideoHeroProps,
} from './hero';

export type {
  TechnologyCategory,
  ProjectCategory,
  ProjectLink,
  TechnologyTag,
  ProjectImage,
  Project,
  ProjectCardProps,
  FilterOption,
  PortfolioSectionProps,
} from './portfolio';

export {
  PROJECT_CATEGORIES,
  TECHNOLOGY_CATEGORIES,
} from './portfolio';

export type {
  TrustSignal,
  CTAButton,
  ContactCTAProps,
} from './contact-cta';

export type {
  FAQItem,
  FAQCategory,
  FAQAccordionProps,
  FAQAccordionItemState,
} from './faq';

export {
  DEFAULT_FAQ_ITEMS,
} from './faq';

export type {
  ShopPlatform,
  CartIconPosition,
  UTMSource,
  UTMMedium,
  UTMParams,
  ShopConfig,
  ProductShopLink,
  CartIconProps,
  ShopLinkProps,
  TrackedURL,
  ShopClickEvent,
  ShopifyConfig,
  SquareConfig,
  EtsyConfig,
  BigCartelConfig,
  PlatformConfig,
} from './shop';

export type {
  ConsentCategory,
  ConsentStatus,
  ConsentPreferences,
  ConsentState,
  ConsentBannerConfig,
  GA4Config,
  GA4ConsentMode,
  GA4StandardEvent,
  CustomEventName,
  AnalyticsEvent,
  BaseEventParams,
  PageViewParams,
  ClickEventParams,
  FormEventParams,
  ScrollEventParams,
  CTAEventParams,
  LeadEventParams,
  EventParams,
  UserProperties,
  AnalyticsService,
  WebVitals,
  PerformanceEntry,
} from './analytics';

export type {
  ProductImage,
  CurrencyCode,
  ProductPrice,
  AspectRatio,
  ProductCardProps,
  ProductGridProps,
} from './product';

export {
  formatPrice,
  calculateDiscount,
  getAspectRatioCss,
} from './product';

export type {
  FeaturedProduct,
  FeaturedProductsSectionProps,
  FeaturedProductsConfig,
} from './featured-product';

export {
  sortByPriority,
  filterAvailable,
} from './featured-product';

// Content Collections Types
export type {
  ProductEntry,
  ProductData,
  ProductSlug,
  ProductCardData,
  FeaturedProductData,
  ProductAvailability,
  ProductSortOption,
  ProductFilterOptions,
} from './content-collections';

export {
  isProductCategory,
  isProductSortOption,
  isProductAvailability,
} from './content-collections';

// Collection Types
export type {
  CollectionImage,
  CollectionAspectRatio,
  CollectionCardProps,
  CollectionOverlayPosition,
  CollectionGridLayout,
  CollectionGridProps,
} from './collection';

export {
  getCollectionAspectRatioCss,
  formatItemCount,
  getOverlayPositionStyles,
} from './collection';

// Lookbook Types
export type {
  LookbookAspectRatio,
  OverlayPosition,
  LookbookTextOverlay,
  ProductTag,
  LookbookItemSize,
  LookbookItem,
  LookbookLayout,
  LookbookGridProps,
} from './lookbook';

export {
  getLookbookAspectRatioCss,
  getOverlayPositionClass,
  validateTagPosition,
} from './lookbook';

// New Arrivals Carousel Types
export type {
  NavigationPosition,
  AutoScrollConfig,
  ResponsiveColumns,
  GapSize,
  NewArrivalsCarouselProps,
  NewArrivalsCarouselConfig,
  ScrollDirection,
  CarouselState,
} from './new-arrivals-carousel';

export {
  getGapCss,
  calculateVisibleItems,
  DEFAULT_COLUMNS,
  DEFAULT_AUTO_SCROLL,
} from './new-arrivals-carousel';
