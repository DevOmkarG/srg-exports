import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, MessageCircle, X } from 'lucide-react';
import Logo from './Logo';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive ? 'bg-white/10 text-gold' : 'text-white/90 hover:text-gold'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-forest/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between sm:h-20">
        <Logo />

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message SRG Exports on WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-gold hover:text-gold"
          >
            <MessageCircle size={20} aria-hidden="true" />
          </a>
          <Link to="/contact" className="btn btn-gold !py-2.5">
            Enquire Now
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile navigation" className="border-t border-white/10 bg-forest lg:hidden">
          <ul className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-lg font-semibold ${isActive ? 'bg-white/10 text-gold' : 'text-white'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-3 flex gap-3">
              <Link to="/contact" className="btn btn-gold flex-1">
                Enquire Now
              </Link>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message SRG Exports on WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white"
              >
                <MessageCircle size={22} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
