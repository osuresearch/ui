import { CollectionChildren } from '@react-types/shared';
import React, { forwardRef } from 'react';

import { StyleSystemProps } from '../../types';
import { Group } from '../Group';
import { Heading } from '../Heading';
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
      <Heading as="div" level={3}>
        <Group gap={0}>
          {variant === 'ordered' && (
            <Text bgc="surface-bold" py="xxs" mr="md" miw={32} h={32} ta="center">
              {(item.index || 0) + 1}
            </Text>
          )}
          {item.textValue}
        </Group>
      </Heading>
      <Text as="div" mb="xxl" ml={variant === 'ordered' ? 'xxl' : 0}>
        {item.rendered}
      </Text>
    </div>
  );
}

/**
 * An article written in list format.
 */
export const Listicle = forwardRef<HTMLOListElement, ListicleProps>(
  ({ variant = 'ordered', children, ...props }, ref) => (
    <UnstyledList
      as={variant === 'ordered' ? 'ol' : 'ul'}
      ref={ref}
      {...props}
      selectionMode="none" // Listicles are not interactive
      disabledBehavior="all"
      renderRow={(props) => <ListicleItem variant={variant} {...props} />}
    >
      {children as any}
    </UnstyledList>
  )
);
