import React from 'react';
import { cx } from '../../theme/utils';

export type TitleProps = {
  /**
   * Heading level. We support H1 through H3
   */
  level: 1 | 2 | 3;

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
 *
 * TODO: Responsive sizes. See:
 *  https://bux.osu.edu/typography/headings
 *
 * TODO: A11Y notes
 *
 */
export function Title({ level, variant = 'default', children }: TitleProps) {
  // Standard H1 - H3 styles
  const className = [
    'rui-text-h1 rui-font-black rui-font-serif',
    'rui-text-h2 rui-font-extrabold',
    'rui-text-h3 rui-font-semibold'
  ];

  return React.createElement(
    `h${level}`,
    {
      className: cx({
        // Size / weight rules
        [className[level - 1]]: variant !== 'section',
        'rui-font-sans': variant === 'sans',

        // Theme mods
        'rui-text-light-contrast': variant !== 'section',

        'rui-pb-24': level === 1,
        'rui-pb-8': level > 1,

        // Section styles. Same size regardless of H-level
        'rui-text-h2 rui-text-dark rui-font-sans rui-uppercase rui-font-normal':
          variant === 'section'
      })
    },
    children
  );
}
