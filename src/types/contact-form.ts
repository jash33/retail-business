/**
 * Contact Form Type Definitions
 * Type definitions for the contact form component including
 * form data, validation, and submission states.
 */

/**
 * Project type options for the dropdown
 */
export type ProjectType =
  | ''
  | 'website-design'
  | 'website-redesign'
  | 'e-commerce'
  | 'web-application'
  | 'seo-optimization'
  | 'maintenance'
  | 'consultation'
  | 'other';

/**
 * Budget range options
 */
export type BudgetRange =
  | ''
  | 'under-500'
  | '500-1000'
  | '1000-2500'
  | '2500-5000'
  | '5000-plus'
  | 'not-sure';

/**
 * Contact form field data
 */
export interface ContactFormData {
  /** User's full name (required) */
  name: string;
  /** User's email address (required, validated) */
  email: string;
  /** User's phone number (optional, validated if provided) */
  phone: string;
  /** User's business or company name (optional) */
  businessName: string;
  /** Type of project (required) */
  projectType: ProjectType;
  /** Budget range for the project (required) */
  budgetRange: BudgetRange;
  /** Project description or inquiry message (required, min length) */
  message: string;
}

/**
 * Validation error messages for each field
 */
export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  projectType?: string;
  budgetRange?: string;
  message?: string;
  /** General form-level error (spam detection, etc.) */
  form?: string;
}

/**
 * Touched state for each field (for showing validation after interaction)
 */
export interface ContactFormTouched {
  name: boolean;
  email: boolean;
  phone: boolean;
  businessName: boolean;
  projectType: boolean;
  budgetRange: boolean;
  message: boolean;
}

/**
 * Form submission status
 */
export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Complete form state
 */
export interface ContactFormState {
  /** Form field values */
  data: ContactFormData;
  /** Validation errors */
  errors: ContactFormErrors;
  /** Fields that have been touched */
  touched: ContactFormTouched;
  /** Current form status */
  status: FormStatus;
  /** Error message from server */
  serverError?: string;
}

/**
 * Project type option for dropdown
 */
export interface ProjectTypeOption {
  value: ProjectType;
  label: string;
}

/**
 * Budget range option for dropdown/radio
 */
export interface BudgetRangeOption {
  value: BudgetRange;
  label: string;
}

/**
 * Validation configuration
 */
export interface ValidationConfig {
  /** Minimum message length */
  minMessageLength: number;
  /** Maximum message length */
  maxMessageLength: number;
  /** Maximum name length */
  maxNameLength: number;
  /** Maximum business name length */
  maxBusinessNameLength: number;
  /** Maximum email length */
  maxEmailLength: number;
  /** Maximum phone length */
  maxPhoneLength: number;
  /** Minimum time to fill form (spam prevention) in milliseconds */
  minSubmitTime: number;
}

/**
 * Default validation configuration
 */
export const DEFAULT_VALIDATION_CONFIG: ValidationConfig = {
  minMessageLength: 25,
  maxMessageLength: 2000,
  maxNameLength: 100,
  maxBusinessNameLength: 150,
  maxEmailLength: 254,
  maxPhoneLength: 20,
  minSubmitTime: 3000, // 3 seconds
};

/**
 * Project type options
 */
export const PROJECT_TYPE_OPTIONS: ProjectTypeOption[] = [
  { value: '', label: 'Select a project type' },
  { value: 'website-design', label: 'New Website Design' },
  { value: 'website-redesign', label: 'Website Redesign' },
  { value: 'e-commerce', label: 'E-Commerce Store' },
  { value: 'web-application', label: 'Web Application' },
  { value: 'seo-optimization', label: 'SEO Optimization' },
  { value: 'maintenance', label: 'Website Maintenance' },
  { value: 'consultation', label: 'Consultation' },
  { value: 'other', label: 'Other' },
];

/**
 * Budget range options
 */
export const BUDGET_RANGE_OPTIONS: BudgetRangeOption[] = [
  { value: '', label: 'Select your budget range' },
  { value: 'under-500', label: 'Under $500' },
  { value: '500-1000', label: '$500 - $1,000' },
  { value: '1000-2500', label: '$1,000 - $2,500' },
  { value: '2500-5000', label: '$2,500 - $5,000' },
  { value: '5000-plus', label: '$5,000+' },
  { value: 'not-sure', label: "Not sure yet" },
];

/**
 * Initial form data
 */
export const INITIAL_FORM_DATA: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  businessName: '',
  projectType: '',
  budgetRange: '',
  message: '',
};

/**
 * Initial touched state
 */
export const INITIAL_TOUCHED: ContactFormTouched = {
  name: false,
  email: false,
  phone: false,
  businessName: false,
  projectType: false,
  budgetRange: false,
  message: false,
};
