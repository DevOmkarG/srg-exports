import { useState } from 'react';
import { Leaf } from 'lucide-react';

interface Props {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  fallbackLabel?: string;
}

/** Image with a loading skeleton and a branded fallback if the source fails. */
export default function SafeImage({ src, alt, className = '', eager = false, fallbackLabel }: Props) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  if (status === 'error') {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-forest to-leaf text-gold ${className}`}
      >
        <Leaf size={40} aria-hidden="true" />
        {fallbackLabel && <span className="font-serif text-lg text-white/90">{fallbackLabel}</span>}
      </div>
    );
  }

  return (
    <div className={`${className.includes('absolute') ? '' : 'relative'} overflow-hidden bg-forest/10 ${className}`}>
      {status === 'loading' && <div className="absolute inset-0 animate-pulse bg-forest/10" aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${status === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}