/**
 * Form Validation Utilities
 * Comprehensive validation functions for the contact form with
 * support for real-time validation and detailed error messages.
 */

import type {
  ContactFormData,
  ContactFormErrors,
  ValidationConfig,
} from '../types/contact-form';
import { DEFAULT_VALIDATION_CONFIG } from '../types/contact-form';

/**
 * Email validation regex
 * Follows RFC 5322 standard for email validation
 */
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

/**
 * US Phone number validation regex
 * Accepts formats: (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890, +1 123 456 7890
 */
const US_PHONE_REGEX = /^(\+1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s.\-]?[0-9]{3}[\s.\-]?[0-9]{4}$/;

/**
 * Check if a string contains potentially dangerous HTML/script content
 */
const DANGEROUS_CONTENT_REGEX = /<script|<\/script|javascript:|on\w+\s*=/i;

/**
 * Validate a single name field
 */
export function validateName(
  name: string,
  config: ValidationConfig = DEFAULT_VALIDATION_CONFIG
): string | undefined {
  const trimmed = name.trim();

  if (!trimmed) {
    return 'Name is required';
  }

  if (trimmed.length < 2) {
    return 'Name must be at least 2 characters';
  }

  if (trimmed.length > config.maxNameLength) {
    return `Name must be less than ${config.maxNameLength} characters`;
  }

  if (DANGEROUS_CONTENT_REGEX.test(trimmed)) {
    return 'Name contains invalid characters';
  }

  return undefined;
}

/**
 * Validate email address
 */
export function validateEmail(
  email: string,
  config: ValidationConfig = DEFAULT_VALIDATION_CONFIG
): string | undefined {
  const trimmed = email.trim();

  if (!trimmed) {
    return 'Email is required';
  }

  if (trimmed.length > config.maxEmailLength) {
    return `Email must be less than ${config.maxEmailLength} characters`;
  }

  if (!EMAIL_REGEX.test(trimmed)) {
    return 'Please enter a valid email address';
  }

  return undefined;
}

/**
 * Validate phone number (optional field)
 * Uses US phone format
 */
export function validatePhone(
  phone: string,
  config: ValidationConfig = DEFAULT_VALIDATION_CONFIG
): string | undefined {
  const trimmed = phone.trim();

  // Phone is optional, so empty is valid
  if (!trimmed) {
    return undefined;
  }

  if (trimmed.length > config.maxPhoneLength) {
    return `Phone must be less than ${config.maxPhoneLength} characters`;
  }

  if (!US_PHONE_REGEX.test(trimmed)) {
    return 'Please enter a valid US phone number';
  }

  return undefined;
}

/**
 * Validate business name (optional field)
 */
export function validateBusinessName(
  businessName: string,
  config: ValidationConfig = DEFAULT_VALIDATION_CONFIG
): string | undefined {
  const trimmed = businessName.trim();

  // Business name is optional, so empty is valid
  if (!trimmed) {
    return undefined;
  }

  if (trimmed.length > config.maxBusinessNameLength) {
    return `Business name must be less than ${config.maxBusinessNameLength} characters`;
  }

  if (DANGEROUS_CONTENT_REGEX.test(trimmed)) {
    return 'Business name contains invalid characters';
  }

  return undefined;
}

/**
 * Validate project type selection
 */
export function validateProjectType(projectType: string): string | undefined {
  if (!projectType) {
    return 'Please select a project type';
  }

  return undefined;
}

/**
 * Validate budget range selection
 */
export function validateBudgetRange(budgetRange: string): string | undefined {
  if (!budgetRange) {
    return 'Please select a budget range';
  }

  return undefined;
}

/**
 * Validate message content
 */
export function validateMessage(
  message: string,
  config: ValidationConfig = DEFAULT_VALIDATION_CONFIG
): string | undefined {
  const trimmed = message.trim();

  if (!trimmed) {
    return 'Message is required';
  }

  if (trimmed.length < config.minMessageLength) {
    return `Message must be at least ${config.minMessageLength} characters`;
  }

  if (trimmed.length > config.maxMessageLength) {
    return `Message must be less than ${config.maxMessageLength} characters`;
  }

  if (DANGEROUS_CONTENT_REGEX.test(trimmed)) {
    return 'Message contains invalid content';
  }

  return undefined;
}

/**
 * Validate the entire form
 * Returns an object with all validation errors
 */
export function validateContactForm(
  data: ContactFormData,
  config: ValidationConfig = DEFAULT_VALIDATION_CONFIG
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const nameError = validateName(data.name, config);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(data.email, config);
  if (emailError) errors.email = emailError;

  const phoneError = validatePhone(data.phone, config);
  if (phoneError) errors.phone = phoneError;

  const businessNameError = validateBusinessName(data.businessName, config);
  if (businessNameError) errors.businessName = businessNameError;

  const projectTypeError = validateProjectType(data.projectType);
  if (projectTypeError) errors.projectType = projectTypeError;

  const budgetRangeError = validateBudgetRange(data.budgetRange);
  if (budgetRangeError) errors.budgetRange = budgetRangeError;

  const messageError = validateMessage(data.message, config);
  if (messageError) errors.message = messageError;

  return errors;
}

/**
 * Check if the form has any errors
 */
export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}

/**
 * Validate honeypot field (should be empty)
 */
export function validateHoneypot(honeypotValue: string): boolean {
  return honeypotValue.trim() === '';
}

/**
 * Validate form submission time (spam prevention)
 * Returns true if enough time has passed
 */
export function validateSubmitTime(
  startTime: number,
  config: ValidationConfig = DEFAULT_VALIDATION_CONFIG
): boolean {
  const elapsedTime = Date.now() - startTime;
  return elapsedTime >= config.minSubmitTime;
}

/**
 * Sanitize input string (basic XSS prevention)
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Get character count display for message field
 */
export function getCharacterCount(
  message: string,
  config: ValidationConfig = DEFAULT_VALIDATION_CONFIG
): { current: number; min: number; max: number; isValid: boolean } {
  const current = message.trim().length;
  return {
    current,
    min: config.minMessageLength,
    max: config.maxMessageLength,
    isValid: current >= config.minMessageLength && current <= config.maxMessageLength,
  };
}
