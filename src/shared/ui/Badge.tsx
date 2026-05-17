import { palette, type ColorKey } from '../tokens/colors';

interface BadgeProps {
  color?: ColorKey;
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ color = 'purple', children, className = '' }: BadgeProps) {
  return (
    <span
      className={`text-xs font-black px-2.5 py-1 rounded-full ${palette[color].badge} ${className}`}
    >
      {children}
    </span>
  );
}
