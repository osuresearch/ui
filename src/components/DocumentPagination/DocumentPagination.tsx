import React, { forwardRef } from 'react';

import { cx, polymorphicForwardRef } from '~/utils';
import { createPolymorphicComponent } from '~/utils';

import { Icon } from '../Icon';
import { UnstyledButton } from '../UnstyledButton';

export type DocumentPaginationProps = {
  direction: 'previous' | 'next';

  children?: React.ReactNode;
};

/**
 * The Document Pagination component is used for page-by-page navigation
 * through content that is meant to be viewed in sequential order.
 *
 * It is often used for content such as books, manuals, or courses.
 *
 * ## Accessibility
 * - Each button receives either "Go to previous page" or "Go to next page"
 *  as an automatic `aria-label`
 *
 * <!-- @ruiPolymorphic -->
 */
export const DocumentPagination = polymorphicForwardRef<'button', DocumentPaginationProps>(
  ({ as, direction, children }, ref) => (
    <UnstyledButton
      as={as || 'button'}
      ref={ref}
      c={{
        light: 'primary',
        dark: 'light-contrast'
      }}
      fw="semibold"
      py="lg"
      px="md"
      w="100%"
      className={cx(
        'focus:rui-ring',
        'rui-flex',

        'rui-border-2',
        'rui-border-light',

        // Hover styles
        'hover:rui-bg-dark-shade',
        'hover:rui-border-dark-shade',
        'hover:rui-text-dark-contrast',

        // Reverse layout for next vs previous button
        { 'rui-flex-row-reverse': direction === 'next' }
      )}
      aria-label={`Go to ${direction} page`}
    >
      <Icon rotate={direction === 'previous' ? 180 : 0} name="chevron" size={26} px="sm" />
      {children}
    </UnstyledButton>
  )
);
