import { Box } from '@osuresearch/ui';
import React, { MouseEventHandler } from 'react';

import { cx } from '@osuresearch/ui/theme';
import { DefaultProps } from '@osuresearch/ui/types';

export type LinkProps = DefaultProps & {
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
export function Link({
  href,
  onClick,
  variant = 'default',
  className,
  children,
  ...props
}: LinkProps) {
  return (
    <Box
      component="a"
      href={href}
      onClick={onClick}
      className={cx(
        href
          ? {
              'rui-cursor-pointer': true,
              'rui-border-b': true,

              // Default theme
              'rui-text-link rui-border-link': variant === 'default',
              'hover:rui-text-light-contrast': variant === 'default',
              'hover:rui-bg-light-shade hover:rui-border-light-contrast':
                variant === 'default' || variant === 'white',
              'visited:rui-text-visited visited:rui-border-visited': variant === 'default',

              // White theme
              'rui-text-white rui-border-white': variant === 'white',
              'hover:rui-text-black hover:rui-border-white hover:rui-bg-white': variant === 'white'
            }
          : '',
        className
      )}
      {...props}
    >
      {children}
    </Box>
  );
}
