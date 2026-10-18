import { useState, type ChangeEvent, type FormEvent } from 'react';
import { MessageCircle } from 'lucide-react';
import { products } from '../data/products';
import { buildWhatsAppUrl, contactFormMessage } from '../utils/whatsapp';

type FormState = {
  name: string;
  company: string;
  email: string;
  country: string;
  product: string;
  quantity: string;
  message: string;
};
type Errors = Partial<Record<keyof FormState, string>>;

const empty: FormState = { name: '', company: '', email: '', country: '', product: '', quantity: '', message: '' };
const productOptions = [...products.map((p) => p.name), 'Other'];

function validate(v: FormState): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = 'Enter your full name.';
  if (!v.email.trim()) e.email = 'Enter your business email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Enter a valid email address.';
  if (!v.country.trim()) e.country = 'Enter your country.';
  if (!v.product) e.product = 'Choose a product.';
  if (!v.quantity.trim()) e.quantity = 'Enter an estimated quantity.';
  if (!v.message.trim()) e.message = 'Describe your requirements.';
  return e;
}

const inputClass =
  'mt-1.5 w-full rounded-xl border border-forest/20 bg-white px-4 py-3 text-base text-ink placeholder:text-ink/40 focus:border-leaf focus:outline-none focus:ring-2 focus:ring-gold';

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as keyof FormState]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setOpened(false);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      document.getElementById(`field-${first}`)?.focus();
      return;
    }
    const url = buildWhatsAppUrl(contactFormMessage(values));
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win) window.location.href = url;
    setOpened(true);
  };

  const field = (key: keyof FormState, label: string, required = true) => (
    <div>
      <label htmlFor={`field-${key}`} className="text-sm font-semibold text-forest">
        {label}
        {required ? <span aria-hidden="true"> *</span> : <span className="font-normal text-ink/60"> (optional)</span>}
      </label>
      {key === 'message' ? (
        <textarea
          id="field-message" name="message" rows={5} value={values.message} onChange={onChange}
          required aria-invalid={!!errors.message} aria-describedby={errors.message ? 'err-message' : undefined}
          className={inputClass} placeholder="Product details, packaging needs, destination port, timeline..."
        />
      ) : (
        <input
          id={`field-${key}`} name={key} value={values[key]} onChange={onChange}
          type={key === 'email' ? 'email' : 'text'} required={required}
          autoComplete={key === 'email' ? 'email' : key === 'name' ? 'name' : key === 'company' ? 'organization' : key === 'country' ? 'country-name' : 'off'}
          aria-invalid={!!errors[key]} aria-describedby={errors[key] ? `err-${key}` : undefined}
          className={inputClass}
        />
      )}
      {errors[key] && <p id={`err-${key}`} className="mt-1 text-sm text-red-700" role="alert">{errors[key]}</p>}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-white p-6 shadow-card sm:p-8" aria-label="Business enquiry form">
      <div className="grid gap-5 sm:grid-cols-2">
        {field('name', 'Full Name')}
        {field('company', 'Company Name', false)}
        {field('email', 'Business Email')}
        {field('country', 'Country')}
        <div>
          <label htmlFor="field-product" className="text-sm font-semibold text-forest">Product Interested In <span aria-hidden="true">*</span></label>
          <select
            id="field-product" name="product" value={values.product} onChange={onChange} required
            aria-invalid={!!errors.product} aria-describedby={errors.product ? 'err-product' : undefined} className={inputClass}
          >
            <option value="">Select a product</option>
            {productOptions.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
          {errors.product && <p id="err-product" className="mt-1 text-sm text-red-700" role="alert">{errors.product}</p>}
        </div>
        {field('quantity', 'Estimated Quantity')}
      </div>
      <div className="mt-5">{field('message', 'Message or Requirements')}</div>

      <p className="mt-5 rounded-xl bg-cream p-4 text-sm text-ink/80">
        When you press the button, your WhatsApp application will open with your enquiry already written. Your enquiry is only sent once you press <strong>Send</strong> in WhatsApp.
      </p>

      <button type="submit" className="btn btn-gold mt-5 w-full sm:w-auto">
        <MessageCircle size={18} aria-hidden="true" /> Send Enquiry via WhatsApp
      </button>

      {opened && (
        <p role="status" className="mt-4 text-sm text-forest">
          WhatsApp should now be open. Please press Send there to deliver your enquiry. If nothing opened, message us directly at +91 9665081181.
        </p>
      )}
    </form>
  );
}
