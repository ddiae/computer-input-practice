import { palette, type ColorKey } from '../tokens/colors';

export type ButtonVariant = 'primary' | 'confirm' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ColorKey;
  children: React.ReactNode;
}

const variantBase: Record<ButtonVariant, string> = {
  primary: 'rounded-3xl py-5 px-6 text-xl',
  confirm: 'rounded-xl py-3 px-5 text-base',
  ghost:   'rounded-xl py-3 px-5 text-base border-2 border-gray-200 text-gray-500 bg-white hover:bg-gray-50',
};

export default function Button({
  variant = 'primary',
  color = 'purple',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const isGhost = variant === 'ghost';
  const shadowOffset = variant === 'primary' ? '5px' : '4px';
  const translateY = variant === 'primary' ? 'active:translate-y-1.25' : 'active:translate-y-1';
  const hex = palette[color].shadow;

  const colorClasses = isGhost
    ? ''
    : `${palette[color].base} text-white shadow-[0_${shadowOffset}_0_${hex}] ${translateY} active:shadow-[0_0px_0_${hex}]`;

  return (
    <button
      className={`w-full font-black transition-all duration-100 cursor-pointer ${variantBase[variant]} ${colorClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
