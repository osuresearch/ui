import React, { forwardRef } from 'react';

import { Box } from '@osuresearch/ui';

import { DefaultProps } from '~/types';
import { cx } from '~/utils';

export type RingProps = {
  children?: React.ReactNode;
};

/**
 * Applies a standard focus ring to all children.
 *
 * ## Accessibility
 * - a11y info (used aria tags, keyboard behaviour, etc)
 */
export const Ring = forwardRef<HTMLDivElement, RingProps>(({ children }, ref) => (
  <div className="rui-outline-none focus:rui-ring" ref={ref}>
    {children}
  </div>
));
