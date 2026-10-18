import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Product } from '../data/products';
import SafeImage from './SafeImage';
import WhatsAppButton from './WhatsAppButton';
import { productEnquiryMessage } from '../utils/whatsapp';

interface Props {
  product: Product;
  variant?: 'compact' | 'full';
}

export default function ProductCard({ product, variant = 'compact' }: Props) {
  const full = variant === 'full';
  return (
    <article
      id={full ? product.id : undefined}
      className="group flex scroll-mt-24 flex-col overflow-hidden rounded-3xl bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <SafeImage
        src={product.image}
        alt={product.imageAlt}
        fallbackLabel={product.name}
        className="aspect-[4/3] w-full"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/75">{full ? product.description : product.short}</p>

        {full && (
          <dl className="mt-5 divide-y divide-forest/10 rounded-2xl bg-cream px-4 text-sm">
            {product.specs.map((s) => (
              <div key={s.label} className="flex justify-between gap-4 py-2.5">
                <dt className="font-semibold text-forest">{s.label}</dt>
                <dd className="text-right text-ink/70">{s.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-6 flex flex-wrap gap-3 pt-1">
          {full ? (
            <WhatsAppButton message={productEnquiryMessage(product.name)} className="btn btn-gold w-full">
              Enquire on WhatsApp
            </WhatsAppButton>
          ) : (
            <>
              <Link to={`/products#${product.id}`} className="btn btn-ghost-dark !px-5 !py-2.5">
                View Details <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <WhatsAppButton message={productEnquiryMessage(product.name)} className="btn btn-gold !px-5 !py-2.5" icon={false}>
                Enquire Now
              </WhatsAppButton>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
