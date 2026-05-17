import { palette, type ColorKey } from '../tokens/colors';

export type CardVariant = 'gradient' | 'white';

interface CardProps {
  variant?: CardVariant;
  color?: ColorKey;
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  variant = 'white',
  color = 'purple',
  children,
  className = '',
}: CardProps) {
  const base = 'rounded-3xl shadow-md p-5';

  const bgClass =
    variant === 'gradient'
      ? `bg-linear-to-br ${palette[color].bg}`
      : 'bg-white';

  return (
    <div className={`${base} ${bgClass} ${className}`}>
      {children}
    </div>
  );
}
