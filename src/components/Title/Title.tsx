import React from 'react';
import { cx } from '../../styles';

export type TitleProps = {
  /**
   * Heading order. We support H1 through H3
   */
  order: 1 | 2 | 3;

  /**
   * The `sans` variant overrides sansSerif for H1.
   *
   * The `section` variant can be used to divide content into sections.
   * All heading levels will look the same, so choose the one that is
   * appropriate for a11y.
   */
  variant?: 'default' | 'sans' | 'section';

  children: React.ReactNode;
};

/**
 * H1 through H3 heading levels.
 */
export function Title({ order, variant = 'default', children }: TitleProps) {
  // Standard H1 - H3 styles
  const className = [
    'text-h1 font-black font-serif',
    'text-h2 font-extrabold',
    'text-h3 font-semibold'
  ];

  return React.createElement(
    `h${order}`,
    {
      className: cx({
        // Size / weight rules
        [className[order - 1]]: variant !== 'section',
        'font-sans': variant === 'sans',

        // Theme mods
        'text-black dark:text-white': variant !== 'section',

        // Section styles. Same size regardless of H1-H3 level
        'text-h2 text-gray-shade-40 dark:text-gray-tint-60 font-sans uppercase font-normal':
          variant === 'section'
      })
    },
    children
  );
}
