import React from 'react';

import { SlotProp, useSlots } from '@osuresearch/ui/hooks/useSlots';
import { StyleSystemProps } from '@osuresearch/ui/types';
import { createPolymorphicComponentV2 } from '@osuresearch/ui/utils';

export type SlotProps = {
  /**
   * Something about the header slot
   */
  headerSlot?: SlotProp<{ title: string }>;

  asideSlot?: SlotProp<{ nav: string }>;
};

export type AltBoxProps = StyleSystemProps &
  SlotProps & {
    /**
     * Contents within the box
     */
    children?: React.ReactNode;
  };

/**
 * Different polymorphic box
 */
export const AltBox = createPolymorphicComponentV2<'div', AltBoxProps>((props, ref) => {
  const { as, slot, w, children, ...componentProps } = props;

  const Component = as || 'div';

  const { headerSlot, asideSlot } = useSlots<SlotProps>(props);

  // Example of a fallback
  const Aside = asideSlot ?? ((props) => <>fallback aside</>);

  return (
    <Component {...componentProps}>
      {children}

      {headerSlot && headerSlot({ title: 'foo' })}

      <Aside nav="test" />
    </Component>
  );
});
