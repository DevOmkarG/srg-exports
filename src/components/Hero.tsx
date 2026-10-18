import { Link } from 'react-router-dom';
import { Globe2, MapPin, MessageCircle, PackageCheck, Sprout } from 'lucide-react';
import SafeImage from './SafeImage';
import { HERO_IMAGE, products } from '../data/products';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const showcase = ['red-onion', 'pomegranate', 'green-chilli']
  .map((id) => products.find((p) => p.id === id))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const stats = [
  { icon: Sprout, value: `${products.length}`, label: 'Export products' },
  { icon: MapPin, value: 'Pune', label: 'Maharashtra, India' },
  { icon: PackageCheck, value: 'Bulk', label: 'Wholesale supply' },
  { icon: Globe2, value: 'Global', label: 'Buyers welcome' },
];

const tilt = ['lg:-rotate-3 lg:translate-y-6', 'lg:rotate-2 lg:-translate-y-2', 'lg:-rotate-2 lg:translate-y-10'];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-forest" aria-labelledby="hero-title">
      {/* Background photo with slow cinematic zoom */}
      <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
        <SafeImage src={HERO_IMAGE} alt="" eager className="hero-zoom h-full w-full" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest via-forest/85 to-forest/20" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest/90 via-transparent to-forest/40" aria-hidden="true" />
      <div className="absolute -right-24 top-10 -z-10 h-96 w-96 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />

      <div className="container-x grid items-center gap-12 pb-10 pt-16 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:pb-52 lg:pt-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-gold" aria-hidden="true" />
            Agricultural Exporter · Pune, India
          </span>

          <h1 id="hero-title" className="mt-6 text-4xl font-bold leading-[1.1] !text-white sm:text-6xl">
            Freshness from India.{' '}
            <span className="bg-gradient-to-r from-gold via-[#f6d27a] to-gold bg-clip-text text-transparent">
              Quality for the World.
            </span>
          </h1>

          <p className="mt-5 text-lg font-semibold text-gold sm:text-xl">
            Your Trusted Partner for Premium Indian Agricultural Products.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Connecting Indian agriculture with global markets through quality sourcing, careful handling, and reliable export solutions.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/products" className="btn btn-gold">Explore Our Products</Link>
            <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
              <MessageCircle size={18} aria-hidden="true" /> Chat on WhatsApp
              <span className="sr-only"> (opens WhatsApp in a new tab)</span>
            </a>
          </div>
        </div>

        {/* Floating product photo cards */}
        <div className="hidden grid-cols-3 gap-4 lg:grid" aria-hidden="true">
          {showcase.map((p, i) => (
            <Link
              key={p.id}
              to={`/products#${p.id}`}
              tabIndex={-1}
              className={`hero-float group block overflow-hidden rounded-3xl border border-white/25 bg-white/10 p-1.5 shadow-2xl backdrop-blur transition duration-500 hover:z-10 hover:scale-105 hover:rotate-0 ${tilt[i]}`}
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              <div className="overflow-hidden rounded-[1.25rem]">
                <SafeImage src={p.image} alt="" fallbackLabel={p.name} className="aspect-[3/4] w-full" />
              </div>
              <p className="px-2 pb-1.5 pt-2.5 text-center font-serif text-sm font-semibold text-white">{p.name}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Glass stats strip */}
      <div className="relative lg:absolute lg:inset-x-0 lg:bottom-0">
        <div className="container-x pb-6 sm:pb-8">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md lg:grid-cols-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 bg-forest/60 px-4 py-4 sm:px-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <dd className="font-serif text-xl font-bold leading-none text-white sm:text-2xl">{value}</dd>
                  <dt className="mt-1 text-xs text-white/70 sm:text-sm">{label}</dt>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}