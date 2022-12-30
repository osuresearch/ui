import { CollectionChildren, Node } from '@react-types/shared';
import React, { Children, ReactNode, cloneElement, forwardRef, isValidElement } from 'react';

import { StyleSystemProps } from '../../types';
import { Box } from '../Box';
import { Group } from '../Group';
import { Text } from '../Text';
import { Title } from '../Title';
import { RowSlotProps, UnstyledList } from '../UnstyledList';

export type ListicleVariant = 'ordered' | 'unordered';

export type ListicleProps = StyleSystemProps & {
  variant?: ListicleVariant;

  /** <Item /> components only */
  children: CollectionChildren<any>;
};

type ListicleItemProps = RowSlotProps & {
  variant: ListicleVariant;
};

const itemClasses = {
  root: 'rui-flex text-h3 rui-items-center',
  counter: 'rui-bg-dimmed-tint rui-py-4 rui-w-32 rui-mr-16 rui-text-center'
};

function ListicleItem({ item, checkboxProps, variant, ...rowProps }: ListicleItemProps) {
  return (
    <div {...rowProps}>
      <Title component="div" level={3}>
        <Group gap={0}>
          {variant === 'ordered' && (
            <Text bgc="dimmed-tint" py="xxs" mr="md" w="xl" ta="center">
              {(item.index || 0) + 1}
            </Text>
          )}
          {item.textValue}
        </Group>
      </Title>
      <Text component="div" mb="xxl" ml={variant === 'ordered' ? 'xxl' : 0}>
        {item.rendered}
      </Text>
    </div>
  );
}

/**
 * An article written in list format.
 *
 * ## Differences from BUX
 *
 * - Bux uses a semantic H2 element but with a style that is not
 * documented in their headings guide. It uses `var(--ifm-h2-font-size)`
 * with a 1.5rem versus their `.bux-h2` class that uses a 1.75rem. I've
 * decided to go with the visual representation of the H3 while not
 * using any header element semantically, as there's no guarantee where
 * a Listicle would live within the DOM.
 */
export const Listicle = forwardRef<HTMLOListElement, ListicleProps>(
  ({ variant = 'ordered', children, ...props }, ref) => (
    <UnstyledList
      as={variant === 'ordered' ? 'ol' : 'ul'}
      ref={ref}
      {...props}
      selectionMode="none" // Listicles are not interactive
      disabledBehavior="all"
      rowSlot={(props) => <ListicleItem variant={variant} {...props} />}
    >
      {children}
    </UnstyledList>
  )
);
