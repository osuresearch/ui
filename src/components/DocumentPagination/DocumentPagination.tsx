import React from 'react';
import { cx } from '../../styles';
import { UnstyledButton } from '../UnstyledButton';
import { Icon } from '../Icon';

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
 *
 * * Each button receives either "Go to previous page" or "Go to next page" as an automatic `aria-label`
 *
 */
export function DocumentPagination({ direction, children }: DocumentPaginationProps) {
  return (
    <UnstyledButton
      className={cx(
        'flex',
        'w-full',
        'p-xl',

        'border-2',
        'font-semibold',
        'border-gray-tint-90',
        'text-scarlet',

        // Hover styles
        'hover:bg-gray-shade-60',
        'hover:text-white',

        // Dark mode assumes dark background
        'dark:border-gray-shade-80',
        'dark:text-white',

        // Reverse layout for next vs previous button
        { 'flex-row-reverse': direction === 'next' }
      )}
      aria-label={`Go to ${direction} page`}
    >
      <Icon
        className={cx({
          'rotate-180': direction === 'previous'
        })}
        name="chevron"
        size={24}
        px="sm"
      />
      {children}
    </UnstyledButton>
  );
}

// TODO: Polymorphic for anchor support?
