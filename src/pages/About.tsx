import { Link } from 'react-router-dom';
import { Eye, Handshake, Lightbulb, Search, Sprout, Target, Users } from 'lucide-react';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';

const values = [
  { icon: Sprout, label: 'Quality' },
  { icon: Handshake, label: 'Integrity' },
  { icon: Search, label: 'Transparency' },
  { icon: Users, label: 'Customer Relationships' },
  { icon: Lightbulb, label: 'Continuous Improvement' },
];

const steps = [
  'Product Enquiry',
  'Requirement Discussion',
  'Product and Specification Confirmation',
  'Packaging and Logistics Coordination',
  'Shipment Coordination',
];

export default function About() {
  return (
    <>
      <Seo
        title="About SRG Exports | Agricultural Exporter in Pune, India"
        description="SRG Exports is a Pune-based agricultural export business connecting buyers with Indian red onions, green chillies, pomegranates, bananas, coconuts and sesame seeds."
        path="/about"
      />
      <section className="bg-forest py-16 sm:py-24" aria-labelledby="about-title">
        <div className="container-x max-w-4xl">
          <h1 id="about-title" className="text-4xl font-bold !text-white sm:text-5xl">About SRG Exports</h1>
          <div className="mt-8 space-y-4 text-lg leading-relaxed text-white/85">
            <p>SRG Exports is an agricultural export business based in Pune, Maharashtra, India. We focus on connecting buyers with Indian agricultural products, including fresh produce and selected agricultural commodities.</p>
            <p>Our product range includes red onions, green chillies, pomegranates, bananas, semi-husked coconuts, and sesame seeds.</p>
            <p>Our goal is to build long-term business relationships through transparent communication, quality-focused sourcing, and attentive customer service.</p>
            <p>We welcome enquiries from importers, wholesalers, distributors, and businesses interested in sourcing agricultural products from India.</p>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Vision and mission">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-white p-8 shadow-card">
              <Eye className="text-gold" size={30} aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-semibold">Our Vision</h2>
              <p className="mt-3 text-ink/80">To build lasting international partnerships and connect Indian agricultural products with global markets.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="h-full rounded-3xl bg-white p-8 shadow-card">
              <Target className="text-gold" size={30} aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-semibold">Our Mission</h2>
              <p className="mt-3 text-ink/80">To serve buyers with responsive communication, product information, and dependable agricultural supply coordination.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white section" aria-labelledby="values-title">
        <div className="container-x">
          <h2 id="values-title" className="text-3xl font-semibold sm:text-4xl">Our Values</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map(({ icon: Icon, label }) => (
              <li key={label} className="flex flex-col items-center rounded-3xl bg-cream p-6 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-gold">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="mt-4 font-serif text-lg font-semibold text-forest">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="container-x">
          <h2 id="process-title" className="text-3xl font-semibold sm:text-4xl">Our Export Process</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s} className="relative rounded-3xl bg-white p-6 shadow-card">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold font-serif text-lg font-bold text-forest">{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold leading-snug">{s}</h3>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-ink/80">
            Actual availability, commercial terms, documentation, and shipment arrangements are confirmed for each order.
          </p>
          <Link to="/products" className="btn btn-gold mt-8">Explore Our Products</Link>
        </div>
      </section>
    </>
  );
}
