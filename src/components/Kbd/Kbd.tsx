import React, { forwardRef } from 'react';

import { StyleSystemProps } from '~/types';
import { cx } from '~/utils';

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
    bgc="light"
    c="light-contrast"
    px="xs"
    py="xxs"
    className={cx(
      'rui-border-[1px]',
      'rui-border-b-[3px]',
      'rui-rounded-[3px]',
      'rui-border-dimmed dark:rui-border-light-shade'
    )}
  >
    {children}
  </Text>
);
