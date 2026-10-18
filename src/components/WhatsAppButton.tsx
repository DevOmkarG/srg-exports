import type { ReactNode } from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface Props {
  message?: string;
  children?: ReactNode;
  className?: string;
  icon?: boolean;
}

/** Link that opens WhatsApp (app on mobile, WhatsApp Web / desktop app on desktop) with a pre-filled message. */
export default function WhatsAppButton({ message, children, className = 'btn btn-gold', icon = true }: Props) {
  return (
    <a href={buildWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer" className={className}>
      {icon && <MessageCircle size={18} aria-hidden="true" />}
      {children ?? 'Enquire on WhatsApp'}
      <span className="sr-only"> (opens WhatsApp in a new tab)</span>
    </a>
  );
}
