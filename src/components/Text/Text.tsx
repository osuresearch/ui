import React, { forwardRef } from 'react';
import { cx } from '../../theme';
import { DefaultProps, ThemeColor } from '../../types';
import { Box } from '../Box';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';
import { tc, fs as _fs, fw as _fw } from '../../theme';

export type TextProps = DefaultProps & {
  /** Text alignment */
  ta?: 'left' | 'right' | 'center';

  /** Render as a `span` element */
  span?: boolean;

  children: React.ReactNode;
};

const _Text = forwardRef<HTMLDivElement, TextProps>(
  (
    { style, className, children, ta = 'left', c = 'neutral-100', span = false, ...others },
    ref
  ) => (
    <Box
      style={style}
      component={span ? 'span' : 'div'}
      ref={ref}
      c={c}
      className={cx(
        {
          // Alignment
          'text-left': ta === 'left',
          'text-right': ta === 'right',
          'text-center': ta === 'center'
        },
        className
      )}
      {...others}
    >
      {children}
    </Box>
  )
);

/**
 * Use the Text component to display text content while maintaining theme styles
 */
export const Text = createPolymorphicComponent<'div', TextProps>(_Text);
