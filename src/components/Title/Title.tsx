import React, { forwardRef } from 'react';

import { Box, FontFamily, FontWeight } from '@osuresearch/ui';
import { cx } from '@osuresearch/ui/theme';
import { createPolymorphicComponent } from '@osuresearch/ui/utils';

export type TitleProps = {
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

const _Title = forwardRef<HTMLHeadingElement, TitleProps & { component: any }>(
  ({ component, level, variant, children }, ref) => (
    <Box
      component={component ? component : `h${level}`}
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

/**
 * H1 through H3 heading levels.
 *
 * TODO: Responsive sizes. See:
 *  https://bux.osu.edu/typography/headings
 *
 * ### Accessibility
 *
 * - TODO
 *
 * ### Polymorphic Component
 *
 * You can use `component` prop to change the root element for this component.
 * If omitted, the root element will use `h1` through `h3` depending on the
 * specified `level`.
 *
 * Use polymorphics when you need to display content as a header, but without
 * using the semantic header elements that may cause problems for screen readers.
 */
export const Title = createPolymorphicComponent<'h1', TitleProps>(_Title);
