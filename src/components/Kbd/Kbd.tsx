import React from 'react';

import { cx } from '../../utils';
import { Text } from '../Text';

export type KbdProps = {
  children?: React.ReactNode;
};

/**
 * Display keyboard button or keys combination
 */
export const Kbd = ({ children }: KbdProps) => (
  <Text
    as="kbd"
    ff="mono"
    fs="xs"
    bgc="surface"
    c="neutral"
    px="xs"
    py="xxs"
    className={cx(
      'border-[1px]',
      'border-b-[3px]',
      'rounded-[3px]',
      'border-surface-bold'
    )}
  >
    {children}
  </Text>
);
