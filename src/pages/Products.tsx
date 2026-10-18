import Seo from '../components/Seo';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import { products } from '../data/products';

export default function Products() {
  return (
    <>
      <Seo
        title="Products | Indian Red Onion, Green Chilli & Pomegranate Supplier | SRG Exports"
        description="Browse agricultural products from India: Indian red onion exporter, fresh green chilli supplier, Indian pomegranate supplier, banana, semi-husked coconut and sesame seeds. Enquire on WhatsApp."
        path="/products"
      />
      <section className="bg-forest py-16 sm:py-24" aria-labelledby="products-title">
        <div className="container-x max-w-4xl text-center">
          <h1 id="products-title" className="text-4xl font-bold !text-white sm:text-5xl">Our Product Catalogue</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85">
            Agricultural products from India for wholesale buyers, distributors and fresh produce markets. Specifications, grades and quantities are confirmed with our team for each order.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Product list">
        <div className="container-x grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Reveal key={p.id}><ProductCard product={p} variant="full" /></Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Need a bulk quote for several products?"
        buttonLabel="Send a Bulk Enquiry"
      >
        Tell us which products, quantities and destination you are considering, and our team will respond with the details.
      </CtaBand>
    </>
  );
}
