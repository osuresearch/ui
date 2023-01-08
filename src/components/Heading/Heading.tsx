import React from 'react';

import { FontFamily, FontWeight } from '~/types';
import { polymorphicForwardRef } from '~/utils';

import { Box } from '../Box';

export type HeadingProps = {
  /**
   * Heading level. We support H1 through H4
   */
  level: 1 | 2 | 3 | 4;

  /**
   * The `sans` variant overrides serif for all heading levels.
   */
  variant?: 'default' | 'sans';

  children: React.ReactNode;
};

// Font classes per heading level
const className = ['rui-text-h1', 'rui-text-h2', 'rui-text-h3', 'rui-text-h4'];

// Font weight per heading level
const fw: FontWeight[] = ['black', 'extrabold', 'semibold', 'semibold'];

// Font family per heading level
const ff: FontFamily[] = ['serif', 'sans', 'sans', 'sans'];

/**
 * H1 through H4 heading levels.
 *
 * <!-- @ruiPolymorphic -->
 */
export const Heading = polymorphicForwardRef<'h1', HeadingProps>(
  ({ as, level, variant, children }, ref) => (
    <Box
      ref={ref}
      as={as ? as : `h${level}`}
      c="light-contrast"
      // Sans variant forces sans for all levels.
      ff={variant === 'sans' ? 'sans' : ff[level - 1]}
      fw={fw[level - 1]}
      // H1 has additional padding at the bottom
      pb={level === 1 ? 'lg' : 'xs'}
      className={className[level - 1]}
    >
      {children}
    </Box>
  )
);
