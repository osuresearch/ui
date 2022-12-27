import { Node, Orientation } from '@react-types/shared';
import React, { useRef } from 'react';
import { useTab } from 'react-aria';
import { TabListState } from 'react-stately';

import { Box, Ring } from '@osuresearch/ui';
import { cx } from '@osuresearch/ui/theme';

export type TabProps = {
  item: Node<HTMLDivElement>;
  state: TabListState<HTMLDivElement>;
  orientation?: Orientation;
};

export function Tab({ item, state, orientation }: TabProps) {
  const { key, rendered } = item;
  const ref = useRef<HTMLDivElement>(null);
  const { tabProps, isSelected, isDisabled } = useTab({ key }, state, ref);

  return (
    <Box
      ref={ref}
      c="light-contrast"
      px="md"
      py="sm"
      className={cx(
        // Base styles
        'rui-border-2 rui-border-b-0 rui-border-clear',
        'rui-cursor-pointer',
        // 'focus:rui-ring rui-outline-none',

        // aria-selected style
        'aria-selected:rui-border-light-shade',

        // hover style (bg matches the Panel bars)
        'hover:rui-bg-light-shade',
        'hover:rui-shadow-underline-dark'
      )}
      {...tabProps}
    >
      {rendered}
    </Box>
  );
}
