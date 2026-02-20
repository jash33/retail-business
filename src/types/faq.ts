/**
 * FAQ Accordion Types
 * Type definitions for the FAQ accordion component.
 */

/**
 * Represents a single FAQ item
 */
export interface FAQItem {
  /** Unique identifier for the FAQ item */
  id: string;
  /** The question text */
  question: string;
  /** The answer content (can include HTML for formatting) */
  answer: string;
  /** Optional category for grouping FAQs */
  category?: FAQCategory;
}

/**
 * FAQ category options for organizing questions
 */
export type FAQCategory =
  | 'shipping'
  | 'returns'
  | 'orders'
  | 'store-info'
  | 'general';

/**
 * Props for the FAQAccordion component
 */
export interface FAQAccordionProps {
  /** Array of FAQ items to display */
  items: FAQItem[];
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Whether multiple panels can be open at once */
  allowMultiple?: boolean;
  /** Index of initially expanded item (null for all collapsed) */
  initialExpanded?: number | null;
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
}

/**
 * State for a single accordion item
 */
export interface FAQAccordionItemState {
  /** Whether the item is currently expanded */
  isExpanded: boolean;
  /** Unique ID for ARIA relationships */
  triggerId: string;
  /** Unique ID for the panel content */
  panelId: string;
}

/**
 * Default FAQ items for HTX Flowers homepage
 * Condensed to the most common questions about flower delivery
 */
export const DEFAULT_FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-delivery',
    question: 'Do you offer same-day delivery?',
    answer: `Yes! <strong>Same-day delivery</strong> is available for orders placed before 2 PM on most arrangements. We deliver throughout the Energy Corridor, Memorial, Katy, and Sugar Land. Delivery fees start at $9.99 depending on location.`,
    category: 'shipping',
  },
  {
    id: 'faq-freshness',
    question: 'How long will my flowers last?',
    answer: `Our flowers come with a <strong>7-day freshness guarantee</strong>. With proper care (fresh water, flower food, and a cool location), most arrangements last 7–14 days. If your flowers don't meet expectations, we'll replace them—no questions asked.`,
    category: 'general',
  },
  {
    id: 'faq-store-hours',
    question: 'What are your shop hours?',
    answer: `<strong>Mon–Fri: 8 AM – 6 PM</strong>, <strong>Sat: 9 AM – 5 PM</strong>, <strong>Sun: 10 AM – 2 PM</strong>. We're located at 12847 Westheimer Rd in the Energy Corridor with free parking.`,
    category: 'store-info',
  },
  {
    id: 'faq-weddings',
    question: 'Do you do wedding flowers?',
    answer: `Absolutely! We specialize in <strong>wedding florals</strong> including bridal bouquets, centerpieces, ceremony installations, and corsages. Schedule a free consultation to discuss your vision—we book 3–6 months in advance.`,
    category: 'general',
  },
  {
    id: 'faq-custom',
    question: 'Can I request a custom arrangement?',
    answer: `Yes! Tell us your color preferences, budget, and occasion, and our designers will create something unique. <strong>Custom orders</strong> typically need 24–48 hours notice. Call us at (832) 555-ROSE or stop by the shop.`,
    category: 'orders',
  },
];

/**
 * Extended FAQ items for dedicated FAQ page
 * Complete set of frequently asked questions
 */
export const EXTENDED_FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-shipping-options',
    question: 'What shipping options do you offer?',
    answer: `We offer several shipping options to fit your needs. <strong>Standard Shipping</strong> (5–7 business days) is free on orders over $75. <strong>Expedited Shipping</strong> (2–3 business days) is available for a flat rate of $9.99. <strong>Next-Day Shipping</strong> is available for $14.99 on orders placed before 2 PM CT. All orders include tracking information sent to your email as soon as your package ships. We currently ship throughout the continental United States.`,
    category: 'shipping',
  },
  {
    id: 'faq-return-policy',
    question: 'What is your return and exchange policy?',
    answer: `We want you to love your purchase! Items can be returned or exchanged within <strong>30 days</strong> of delivery, provided they are in their original condition with tags attached. To start a return, visit our Returns Center or contact our customer service team. Refunds are processed within 5–7 business days after we receive your item. Please note that sale items, personalized products, and gift cards are final sale and cannot be returned.`,
    category: 'returns',
  },
  {
    id: 'faq-gift-cards',
    question: 'Do you sell gift cards?',
    answer: `Yes! We offer both <strong>physical gift cards</strong> available in-store and <strong>digital e-gift cards</strong> that can be purchased online and delivered instantly via email. Gift cards are available in denominations of $25, $50, $75, $100, and $150. They never expire and can be used for any purchase in-store or online. E-gift cards can also include a personalized message—perfect for birthdays, holidays, or just because.`,
    category: 'orders',
  },
  {
    id: 'faq-store-hours',
    question: 'What are your store hours and location?',
    answer: `Our Houston retail location is open <strong>Monday–Saturday from 10 AM to 7 PM</strong> and <strong>Sunday from 12 PM to 5 PM</strong>. We're located at 1234 Main Street in the Heights neighborhood, with free parking available behind the building. Holiday hours may vary—check our website or social media for seasonal updates. Our online store is always open 24/7 so you can shop anytime!`,
    category: 'store-info',
  },
  {
    id: 'faq-custom-orders',
    question: 'Can I place a custom or personalized order?',
    answer: `Absolutely! We love creating custom pieces for our customers. Popular custom options include <strong>monogramming and engraving</strong>, <strong>custom color or size requests</strong>, <strong>gift baskets and curated bundles</strong>, and <strong>bulk or corporate orders</strong>. Custom orders typically take 2–3 weeks to complete. To get started, visit us in-store or fill out our custom order request form online. We'll follow up within 24 hours with a quote and estimated timeline.`,
    category: 'orders',
  },
  {
    id: 'faq-order-tracking',
    question: 'How can I track my order?',
    answer: `Once your order ships, you'll receive a confirmation email with a tracking number and a link to follow your package in real time. You can also log into your account on our website and view your order status under "My Orders." If your tracking hasn't updated in more than 48 hours or you have any concerns about your delivery, please reach out to our customer service team and we'll look into it right away.`,
    category: 'shipping',
  },
  {
    id: 'faq-payment-methods',
    question: 'What payment methods do you accept?',
    answer: `We accept a wide range of payment options for your convenience. <strong>In-store:</strong> Visa, Mastercard, American Express, Discover, Apple Pay, Google Pay, and cash. <strong>Online:</strong> All major credit and debit cards, PayPal, Apple Pay, Google Pay, and Shop Pay. We also accept gift cards as full or partial payment. For custom or bulk orders over $500, we offer payment plans—just ask our team for details.`,
    category: 'general',
  },
  {
    id: 'faq-loyalty-program',
    question: 'Do you have a rewards or loyalty program?',
    answer: `Yes! Our <strong>Rewards Club</strong> is free to join and lets you earn points on every purchase. For every $1 you spend, you earn 1 point. Once you reach 100 points, you'll receive a $10 reward to use on your next purchase. Members also enjoy <strong>early access to new arrivals and sales</strong>, a <strong>birthday discount of 15% off</strong>, and <strong>exclusive member-only promotions</strong>. Sign up in-store or create an account online to start earning today.`,
    category: 'general',
  },
  {
    id: 'faq-damaged-items',
    question: 'What if my order arrives damaged or incorrect?',
    answer: `We're sorry if something went wrong with your order! If your item arrives damaged, defective, or isn't what you ordered, please <strong>contact us within 48 hours of delivery</strong> with your order number and a photo of the issue. We'll arrange a free replacement or full refund—no need to ship the damaged item back in most cases. Your satisfaction is our top priority and we'll make it right as quickly as possible.`,
    category: 'returns',
  },
  {
    id: 'faq-in-store-pickup',
    question: 'Do you offer in-store pickup for online orders?',
    answer: `Yes! <strong>Buy Online, Pick Up In-Store (BOPIS)</strong> is available for most items. Simply choose "In-Store Pickup" at checkout and select our Houston location. You'll receive an email notification when your order is ready—usually within 2 hours during business hours. Orders are held for 7 days at our pickup counter. This is a great option if you want to skip shipping costs and get your items the same day.`,
    category: 'store-info',
  },
];
