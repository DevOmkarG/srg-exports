import { Link } from 'react-router-dom';
import SafeImage from './SafeImage';
import { HERO_IMAGE } from '../data/products';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-forest" aria-labelledby="hero-title">
      <SafeImage
        src={HERO_IMAGE}
        alt="Green agricultural fields under a soft morning sky"
        eager
        className="absolute inset-0 -z-10 h-full w-full"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest/95 via-forest/80 to-forest/30" aria-hidden="true" />

      <div className="container-x py-24 sm:py-32 lg:py-44">
        <div className="max-w-2xl">
          <h1 id="hero-title" className="text-4xl font-bold leading-tight !text-white sm:text-6xl">
            Freshness from India. Quality for the World.
          </h1>
          <p className="mt-5 text-xl font-semibold text-gold sm:text-2xl">
            Your Trusted Partner for Premium Indian Agricultural Products.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Connecting Indian agriculture with global markets through quality sourcing, careful handling, and reliable export solutions.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/products" className="btn btn-gold">Explore Our Products</Link>
            <Link to="/contact" className="btn btn-ghost-light">Contact Our Team</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
