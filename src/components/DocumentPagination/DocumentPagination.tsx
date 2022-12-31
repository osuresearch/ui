import React, { forwardRef } from 'react';

import { cx } from '~/utils';
import { createPolymorphicComponent } from '~/utils';

import { Icon } from '../Icon';
import { UnstyledButton } from '../UnstyledButton';

export type DocumentPaginationProps = {
  direction: 'previous' | 'next';

  children?: React.ReactNode;
};

export const _DocumentPagination = forwardRef<
  HTMLButtonElement,
  DocumentPaginationProps & { component: any }
>(({ direction, children, ...props }, ref) => (
  <UnstyledButton
    c={{
      light: 'primary',
      dark: 'light-contrast'
    }}
    fw="semibold"
    py="lg"
    px="md"
    w="full"
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
));

/**
 * The Document Pagination component is used for page-by-page navigation
 * through content that is meant to be viewed in sequential order.
 *
 * It is often used for content such as books, manuals, or courses.
 *
 * ## Polymorphic Component
 *
 * You can use `component` prop to change the root element for this component.
 *
 * ## Accessibility
 *
 * -  Each button receives either "Go to previous page" or "Go to next page"
 *    as an automatic `aria-label`
 */
export const DocumentPagination =
  createPolymorphicComponent<'button', DocumentPaginationProps>(_DocumentPagination);
