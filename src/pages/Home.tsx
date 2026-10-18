import { Link } from 'react-router-dom';
import { Globe, MessageSquareText, PackageCheck, ShieldCheck } from 'lucide-react';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';
import SafeImage from '../components/SafeImage';
import CtaBand from '../components/CtaBand';
import { PORT_IMAGE, products } from '../data/products';

const features = [
  { icon: ShieldCheck, title: 'Quality-Focused Sourcing', text: 'We aim to source produce with attention to quality and to confirm specifications with you before an order.' },
  { icon: PackageCheck, title: 'Careful Packaging', text: 'We discuss packaging options with each buyer so produce is handled with care on its journey.' },
  { icon: MessageSquareText, title: 'Reliable Communication', text: 'You deal directly with our team, with clear answers and timely follow-up on your enquiry.' },
  { icon: Globe, title: 'Export-Oriented Service', text: 'We help coordinate requirements, documentation and shipment for international buyers.' },
];

export default function Home() {
  return (
    <>
      <Seo
        title="SRG Exports | Agricultural Exporter in India"
        description="SRG Exports, Pune, India: agricultural products export from India including Indian red onion, fresh green chilli, Indian pomegranate, banana, coconut and sesame seeds for bulk buyers."
        path="/"
      />
      <Hero />

      <section className="section" aria-labelledby="highlights-title">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <h2 id="highlights-title" className="text-3xl font-semibold sm:text-4xl">Our Products</h2>
            <p className="mt-3 text-ink/75">Fresh produce and selected commodities for importers, wholesalers and distributors.</p>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <Reveal key={p.id}><ProductCard product={p} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section" aria-labelledby="why-title">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <h2 id="why-title" className="text-3xl font-semibold sm:text-4xl">Why Choose SRG Exports?</h2>
            <p className="mt-3 text-ink/75">Our service commitments to every buyer.</p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <Reveal key={title}>
                <div className="h-full rounded-3xl border border-forest/10 bg-cream p-7 transition hover:border-gold">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-gold">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="global-title">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="group overflow-hidden rounded-3xl shadow-card">
              <SafeImage src={PORT_IMAGE} alt="Cargo containers stacked at a shipping port" fallbackLabel="Global trade" className="aspect-[4/3] w-full" />
            </div>
          </Reveal>
          <Reveal>
            <h2 id="global-title" className="text-3xl font-semibold sm:text-4xl">From Indian Farms to Global Markets</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/80">
              We work to connect international buyers with agricultural products sourced from India, with a focus on quality, clear communication, and dependable business relationships.
            </p>
            <Link to="/about" className="btn btn-green mt-7">About SRG Exports</Link>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Looking for a Reliable Agricultural Supply Partner?" buttonLabel="Discuss Your Requirements" />
    </>
  );
}
