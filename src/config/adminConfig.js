// Centralized configuration for business ownership, contact details, and subscription payments.
// These can be overridden in your .env file.

export const ADMIN_CONFIG = {
  businessName: import.meta.env.VITE_BUSINESS_NAME || 'KoraBiz Management System',
  supportEmail: import.meta.env.VITE_ADMIN_EMAIL || 'support@korabiz.com',
  supportPhone: import.meta.env.VITE_ADMIN_PHONE || '+250 780 000 000',
  momoNumber: import.meta.env.VITE_ADMIN_MOMO_NUMBER || '0780000000',
  momoAccountName: import.meta.env.VITE_ADMIN_MOMO_NAME || 'KoraBiz Admin',
}

