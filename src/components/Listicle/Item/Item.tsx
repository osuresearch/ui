import React, { forwardRef, ReactNode, useContext } from 'react';
import { cx } from '../../../theme/utils';
import { Text } from '../../Text';
import { ListicleVariant } from '../Listicle';

export type ItemProps = {
  index?: number;
  variant?: ListicleVariant;
  title: ReactNode;
  children: ReactNode;
};

const itemClasses = {
  root: 'rui-flex text-h3 rui-items-center',
  counter: 'rui-bg-dimmed-tint rui-py-4 rui-w-32 rui-mr-16 rui-text-center'
};

export const Item = forwardRef<HTMLElement, ItemProps>(
  ({ variant, index, title, children }, ref) => (
    // NOTE: Listicle in BUX uses 1.25rem/1.5 line height for header text.
    // It's inconsistent with the rest of the font steps elsewhere in the app.

    <div>
      <Text fw="semibold" mb="sm" className={itemClasses.root}>
        {variant === 'ordered' && <div className={itemClasses.counter}>{index}</div>}
        {title}
      </Text>
      <Text mb="xxl" ml={variant === 'ordered' ? 'xxl' : undefined}>
        {children}
      </Text>
    </div>
  )
);
