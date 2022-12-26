import React, { Children, cloneElement, forwardRef, isValidElement, ReactNode } from 'react';
import { cx } from '../../theme/utils';
import { Box } from '../Box';
import { DefaultProps, ForwardRefWithStaticComponents } from '../../types';
import { Item, ItemProps } from './Item/Item';

export type ListicleVariant = 'ordered' | 'unordered';

export type ListicleProps = DefaultProps & {
  variant?: ListicleVariant;

  /** <Listicle.Item /> components only */
  children: ReactNode;
};

type ListicleComponent = ForwardRefWithStaticComponents<
  ListicleProps,
  {
    Item: typeof Item;
  }
>;

/**
 * An article written in list format.
 */
export const Listicle: ListicleComponent = forwardRef<HTMLDivElement, ListicleProps>(
  ({ variant = 'ordered', children, ...props }, ref) => {
    const items = Children.map(children, (child, index) => {
      if (!isValidElement<ItemProps>(child)) {
        return child;
      }

      return cloneElement(child, {
        variant,
        index: index + 1
      });
    });

    return (
      <Box
        ref={ref}
        component="div"
        className={cx(
          {
            // your additional classes
          },
          props.className
        )}
        {...props}
      >
        {items}
      </Box>
    );
  }
) as any;

Listicle.Item = Item;
