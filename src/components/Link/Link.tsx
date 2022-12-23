import React, { MouseEventHandler } from 'react';
import { cx } from '../../theme';

export type LinkProps = {
  href?: string;

  /**
   * Optional handler for when the button is clicked
   */
  onClick?: MouseEventHandler<HTMLAnchorElement>;

  variant?: 'default' | 'white';

  children?: React.ReactNode;
};

/**
 * Display links with theme styles
 *
 * ### Accessibility
 *
 * Your link should always describe where it will take users. Users tend to scan text
 * online, and elements that stand out (like links) grab attention.
 * Clear links can help users navigate more quickly.
 *
 * For example, instead of "Learn more," use "Learn how to reset your passphrase."
 *
 * Links must have at least 4.5:1 contrast with the background (3:1 for large text)
 * to meet WCAG 2 Level AA.
 */
export function Link({ href, onClick, variant = 'default', children }: LinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={
        href
          ? cx({
              'cursor-pointer': true,
              'border-b': true,

              // Default theme
              'text-link border-link': variant === 'default',
              'hover:text-neutral-100 hover:border-neutral-100': variant === 'default',
              'hover:bg-neutral-40': variant === 'default',
              'visited:text-visited visited:border-visited': variant === 'default',

              // White theme
              'text-white border-white': variant === 'white',
              'hover:text-black hover:border-black': variant === 'white',
              'hover:bg-white': variant === 'white'
            })
          : ''
      }
    >
      {children}
    </a>
  );
}
