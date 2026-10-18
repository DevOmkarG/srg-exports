import { Link } from 'react-router-dom';

export default function Logo({ className = 'h-11 sm:h-14' }: { className?: string }) {
  return (
    <Link to="/" className="flex items-center" aria-label="SRG Exports home">
      <img
        src="/logo.png"
        alt="SRG Exports - Bringing Indian farm fresh to the world"
        width={900}
        height={343}
        className={`w-auto ${className}`}
      />
    </Link>
  );
}
