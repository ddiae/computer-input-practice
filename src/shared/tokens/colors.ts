export const palette = {
  purple: {
    base: 'bg-purple-400',
    shadow: '#7c3aed',
    text: 'text-purple-600',
    bg: 'from-purple-100 to-violet-50',
    badge: 'bg-purple-100 text-purple-700',
  },
  pink: {
    base: 'bg-pink-400',
    shadow: '#be185d',
    text: 'text-pink-600',
    bg: 'from-pink-100 to-rose-50',
    badge: 'bg-pink-100 text-pink-700',
  },
  sky: {
    base: 'bg-sky-400',
    shadow: '#0369a1',
    text: 'text-sky-600',
    bg: 'from-blue-100 to-sky-50',
    badge: 'bg-blue-100 text-blue-700',
  },
  green: {
    base: 'bg-green-400',
    shadow: '#15803d',
    text: 'text-green-600',
    bg: 'from-green-100 to-emerald-50',
    badge: 'bg-green-100 text-green-700',
  },
  yellow: {
    base: 'bg-yellow-400',
    shadow: '#b45309',
    text: 'text-yellow-600',
    bg: 'from-yellow-100 to-amber-50',
    badge: 'bg-yellow-100 text-yellow-700',
  },
} as const;

export type ColorKey = keyof typeof palette;

export const pageBg = 'bg-linear-to-br from-purple-50 via-pink-50 to-yellow-50';
