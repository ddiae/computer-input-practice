import { palette, type ColorKey } from './colors';

export const btn3DShadow = (color: ColorKey, size: 'md' | 'sm' = 'md') => {
  const hex = palette[color].shadow;
  return size === 'md'
    ? `shadow-[0_5px_0_${hex}] active:translate-y-1.25 active:shadow-[0_0px_0_${hex}]`
    : `shadow-[0_4px_0_${hex}] active:translate-y-1 active:shadow-[0_0px_0_${hex}]`;
};
