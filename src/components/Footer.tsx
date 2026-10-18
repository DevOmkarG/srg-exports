import { Link } from 'react-router-dom';
import { MapPin, MessageCircle, Phone } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from './Navbar';
import { products } from '../data/products';
import { PHONE_DISPLAY, PHONE_TEL, buildWhatsAppUrl } from '../utils/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-forest text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo className="h-16" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Agricultural export business based in Pune, Maharashtra, India, connecting buyers with Indian agricultural products.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="mb-4 text-lg !text-white">Navigate</h2>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition hover:text-gold">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Product links">
          <h2 className="mb-4 text-lg !text-white">Products</h2>
          <ul className="space-y-2 text-sm">
            {products.map((p) => (
              <li key={p.id}>
                <Link to={`/products#${p.id}`} className="transition hover:text-gold">{p.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic">
          <h2 className="mb-4 text-lg !text-white">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li>SRG Exports<br />Contact person: Rushabh Jain</li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gold" aria-hidden="true" />
              <a href={`tel:${PHONE_TEL}`} className="hover:text-gold">{PHONE_DISPLAY}</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={16} className="text-gold" aria-hidden="true" />
              <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                WhatsApp us
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-gold" aria-hidden="true" />
              Pune, Maharashtra, India
            </li>
          </ul>
        </address>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">
        © {new Date().getFullYear()} SRG Exports. All rights reserved.
      </div>
    </footer>
  );
}
