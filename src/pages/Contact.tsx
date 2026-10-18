import { MapPin, MessageCircle, Phone, User, Building2 } from 'lucide-react';
import Seo from '../components/Seo';
import ContactForm from '../components/ContactForm';
import WhatsAppButton from '../components/WhatsAppButton';
import { PHONE_DISPLAY, PHONE_TEL } from '../utils/whatsapp';

const MAP_LINK = 'https://www.google.com/maps/search/?api=1&query=Pune%2C+Maharashtra%2C+India';
const MAP_EMBED = 'https://www.google.com/maps?q=Pune,+Maharashtra,+India&output=embed';

export default function Contact() {
  const rows = [
    { icon: Building2, label: 'Company', value: 'SRG Exports' },
    { icon: User, label: 'Contact Person', value: 'Rushabh Jain' },
    { icon: Phone, label: 'Phone', value: PHONE_DISPLAY },
    { icon: MessageCircle, label: 'WhatsApp', value: PHONE_DISPLAY },
    { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra, India' },
  ];

  return (
    <>
      <Seo
        title="Contact SRG Exports | Agricultural Products Export from India"
        description="Contact SRG Exports in Pune, India for bulk enquiries on agricultural products. Send your requirements by WhatsApp or call Rushabh Jain."
        path="/contact"
      />
      <section className="bg-forest py-16 sm:py-24" aria-labelledby="contact-title">
        <div className="container-x max-w-4xl text-center">
          <h1 id="contact-title" className="text-4xl font-bold !text-white sm:text-5xl">Let’s Grow Together</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">
            Tell us what agricultural products you need, and our team will help you discuss your requirements.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3"><ContactForm /></div>

          <aside className="space-y-6 lg:col-span-2" aria-label="Contact details">
            <div className="rounded-3xl bg-white p-7 shadow-card">
              <h2 className="text-2xl font-semibold">Contact Details</h2>
              <dl className="mt-5 space-y-4">
                {rows.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon size={20} className="mt-0.5 text-leaf" aria-hidden="true" />
                    <div>
                      <dt className="text-sm text-ink/60">{label}</dt>
                      <dd className="font-semibold text-forest">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href={`tel:${PHONE_TEL}`} className="btn btn-green"><Phone size={18} aria-hidden="true" /> Call Now</a>
                <WhatsAppButton className="btn btn-gold">WhatsApp Us</WhatsAppButton>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white shadow-card">
              <iframe
                title="Map showing Pune, Maharashtra, India"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold">Our Location</h2>
                <p className="mt-1 text-sm text-ink/75">Pune, Maharashtra, India</p>
                <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-leaf underline">
                  Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
