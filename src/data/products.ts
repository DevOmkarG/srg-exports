export interface Spec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  short: string;
  description: string;
  image: string;
  imageAlt: string;
  specs: Spec[];
}

const CONFIRM = 'Confirm with our team';
const specs = (...labels: string[]): Spec[] => labels.map((label) => ({ label, value: CONFIRM }));

// Image URLs are remote (Unsplash). If one ever fails, <SafeImage> shows a branded fallback.
// To use your own photos, put files in /public/images and change the paths below, e.g. '/images/red-onion.jpg'.
const u = (id: string, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const products: Product[] = [
  {
    id: 'red-onion',
    name: 'Red Onion',
    short: 'Indian red onions for wholesale buyers and distributors.',
    description: 'Indian red onions for wholesale buyers, distributors, and international agricultural markets.',
    image: u('photo-1618512496248-a07fe83aa8cb'),
    imageAlt: 'Fresh red onions piled together',
    specs: specs('Available sizes', 'Colour', 'Quality grade', 'Packaging options', 'Minimum order quantity', 'Availability'),
  },
  {
    id: 'green-chilli',
    name: 'Green Chilli',
    short: 'Fresh Indian green chillies for wholesale supply.',
    description: 'Fresh Indian green chillies for wholesale supply and international buyers.',
    image: u('photo-1588252303782-cb80119abd6d'),
    imageAlt: 'Fresh green chillies',
    specs: specs('Variety', 'Size', 'Quality grade', 'Packaging', 'Availability'),
  },
  {
    id: 'pomegranate',
    name: 'Pomegranate',
    short: 'Indian pomegranates for fresh produce markets.',
    description: 'Indian pomegranates for wholesale buyers and fresh produce markets.',
    image: u('photo-1615485290382-441e4d049cb5'),
    imageAlt: 'Ripe red pomegranates',
    specs: specs('Variety', 'Fruit size', 'Quality grade', 'Packaging', 'Availability'),
  },
  {
    id: 'banana',
    name: 'Banana',
    short: 'Indian bananas for bulk supply and distributors.',
    description: 'Indian bananas for bulk supply, distributors, and fresh produce markets.',
    image: u('photo-1571771894821-ce9b6c11b08e'),
    imageAlt: 'A bunch of fresh bananas',
    specs: specs('Variety', 'Size', 'Maturity stage', 'Packaging', 'Availability'),
  },
  {
    id: 'semi-husked-coconut',
    name: 'Semi-Husked Coconut',
    short: 'Semi-husked coconuts for wholesale and distribution.',
    description: 'Semi-husked coconuts for wholesale buyers and agricultural product distributors.',
    image: u('photo-1550828520-4cb496926fc9'),
    imageAlt: 'Semi-husked coconuts',
    specs: specs('Size', 'Quality', 'Packaging', 'Availability'),
  },
  {
    id: 'sesame-seeds',
    name: 'Sesame Seeds',
    short: 'Indian sesame seeds for wholesale agricultural trade.',
    description: 'Indian sesame seeds for wholesale agricultural trade and business buyers.',
    image: u('photo-1612257999756-4cd5ab5f5a8d'),
    imageAlt: 'Sesame seeds in a bowl',
    specs: specs('Variety', 'Colour', 'Quality specifications', 'Packaging', 'Availability'),
  },
];

export const HERO_IMAGE = u('photo-1500382017468-9049fed747ef', 1800);
export const PORT_IMAGE = u('photo-1494412574643-ff11b0a5c1c3', 1600);
