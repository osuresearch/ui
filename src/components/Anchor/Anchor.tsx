import React, { MouseEventHandler } from 'react';
import { cx } from '../../styles';

export type AnchorProps = {
  href: string;

  /**
   * Optional handler for when the button is clicked
   */
  onClick?: MouseEventHandler<HTMLAnchorElement>;

  variant?: 'default' | 'alternate' | 'scarlet';

  children?: React.ReactNode;
};

/**
 * Display links with theme styles
 */
export function Anchor({ href, onClick, variant = 'default', children }: AnchorProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cx({
        'cursor-pointer': true,
        'border-b': true,

        // Primary theme
        'text-scarlet dark:text-white': variant === 'default',
        'border-scarlet dark:border-white': variant === 'default',
        'hover:text-gray-shade-80': variant === 'default',
        'hover:border-gray-shade-80': variant === 'default',
        'hover:bg-gray-tint-80 dark:hover:bg-gray-shade-40': variant === 'default',
        'visited:text-visited dark:visited:text-visited-light': variant === 'default',
        'visited:border-visited dark:visited:border-visited-light': variant === 'default'

        // TODO: Alternate, scarlet?
      })}
    >
      {children}
    </a>
  );
}
