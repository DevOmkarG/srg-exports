/** WhatsApp number in international format, digits only (no +, spaces or dashes). */
export const WHATSAPP_NUMBER = '919665081181';
export const PHONE_DISPLAY = '+91 9665081181';
export const PHONE_TEL = '+919665081181';

export const GENERAL_ENQUIRY_MESSAGE =
  'Hello SRG Exports, I would like to enquire about your agricultural products for bulk purchase. Please share the available products, specifications, packaging options, and pricing.';

/** Build a wa.me link with a properly URL-encoded message. */
export function buildWhatsAppUrl(message: string = GENERAL_ENQUIRY_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function productEnquiryMessage(productName: string): string {
  return `Hello SRG Exports, I would like to enquire about ${productName} for bulk purchase. Please share the available specifications, packaging options, and pricing.`;
}

export interface EnquiryDetails {
  name: string;
  company: string;
  email: string;
  country: string;
  product: string;
  quantity: string;
  message: string;
}

export function contactFormMessage(d: EnquiryDetails): string {
  return [
    'Hello SRG Exports, I would like to send a business enquiry.',
    '',
    `Name: ${d.name}`,
    `Company: ${d.company || 'Not provided'}`,
    `Email: ${d.email}`,
    `Country: ${d.country}`,
    `Product: ${d.product}`,
    `Estimated quantity: ${d.quantity}`,
    '',
    `Requirements: ${d.message}`,
  ].join('\n');
}
