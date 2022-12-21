import React from 'react';
import { cx } from '../../styles';
import { ThemeSize } from '../../types';

export type SpaceProps = {
  h?: ThemeSize;
  w?: ThemeSize;
};

/**
 * Add horizontal or vertical spacing between elements
 */
export function Space({ h = 'sm', w = 'sm' }: SpaceProps) {
  return (
    <div
      className={cx({
        // Vertical spacing
        'h-sm': h === 'sm',
        'h-md': h === 'md',
        'h-lg': h === 'lg',
        'h-xl': h === 'xl',

        // Horizontal spacing
        'w-sm': w === 'sm',
        'w-md': w === 'md',
        'w-lg': w === 'lg',
        'w-xl': w === 'xl'
      })}
    />
  );
}
