import { CollectionChildren } from '@react-types/shared';
import React, { forwardRef } from 'react';

import { StyleSystemProps } from '../../types';
import { Group } from '../Group';
import { Header } from '../Header';
import { Text } from '../Text';
import { RowSlotProps, UnstyledList } from '../UnstyledList';

export type ListicleVariant = 'ordered' | 'unordered';

export type ListicleProps = StyleSystemProps & {
  variant?: ListicleVariant;

  /** `Item` components only */
  children: CollectionChildren<any>;
};

type ListicleItemProps = RowSlotProps & {
  variant: ListicleVariant;
};

function ListicleItem({ item, checkboxProps, variant, ...rowProps }: ListicleItemProps) {
  return (
    <div {...rowProps}>
      <Header as="div" level={3}>
        <Group gap={0}>
          {variant === 'ordered' && (
            <Text bgc="dimmed-tint" py="xxs" mr="md" miw={32} h={32} ta="center">
              {(item.index || 0) + 1}
            </Text>
          )}
          {item.textValue}
        </Group>
      </Header>
      <Text as="div" mb="xxl" ml={variant === 'ordered' ? 'xxl' : 0}>
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
      {children as any}
    </UnstyledList>
  )
);
