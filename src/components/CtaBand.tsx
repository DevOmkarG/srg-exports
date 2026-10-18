import type { ReactNode } from 'react';
import WhatsAppButton from './WhatsAppButton';

interface Props {
  title: string;
  buttonLabel: string;
  message?: string;
  children?: ReactNode;
}

/** Green call-to-action band whose button opens WhatsApp with a pre-filled message. */
export default function CtaBand({ title, buttonLabel, message, children }: Props) {
  return (
    <section className="bg-leaf" aria-labelledby="cta-title">
      <div className="container-x flex flex-col items-center py-16 text-center">
        <h2 id="cta-title" className="max-w-3xl text-3xl font-semibold !text-white sm:text-4xl">{title}</h2>
        {children && <p className="mt-4 max-w-2xl text-white/85">{children}</p>}
        <WhatsAppButton message={message} className="btn btn-gold mt-8">{buttonLabel}</WhatsAppButton>
      </div>
    </section>
  );
}
