import React, { forwardRef, ReactNode, useContext } from 'react';
import { cx } from '../../../styles';
import { Text } from '../../Text';
import { ListicleVariant } from '../Listicle';

export type ItemProps = {
  index?: number;
  variant?: ListicleVariant;
  title: ReactNode;
  children: ReactNode;
};

const itemClasses = {
  root: 'flex text-h3 font-semibold mb-sm items-center',
  counter: 'bg-gray-tint-60 dark:bg-gray-shade-60 py-4 w-32 mr-16 text-center'
};

export const Item = forwardRef<HTMLElement, ItemProps>(
  ({ variant, index, title, children }, ref) => (
    // NOTE: Listicle in BUX uses 1.25rem/1.5 line height for header text.
    // It's inconsistent with the rest of the font steps elsewhere in the app.

    <div>
      <Text className={itemClasses.root}>
        {variant === 'ordered' && <div className={itemClasses.counter}>{index}</div>}
        {title}
      </Text>
      <Text className={cx('mb-xxl', { 'ml-48': variant === 'ordered' })}>{children}</Text>
    </div>
  )
);
