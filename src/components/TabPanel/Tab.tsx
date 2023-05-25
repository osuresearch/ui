import { Node, Orientation } from '@react-types/shared';
import React, { useRef } from 'react';
import { useTab } from 'react-aria';
import { TabListState } from 'react-stately';

import { cx } from '../../utils';
import { Box } from '../Box';
import { FocusRing } from '../FocusRing';
import { TabPanelVariant } from './TabPanel';

export type TabProps = {
  variant?: TabPanelVariant;
  item: Node<HTMLDivElement>;
  state: TabListState<HTMLDivElement>;
  orientation?: Orientation;
};

export function Tab({ variant, item, state, orientation }: TabProps) {
  const { key, rendered } = item;
  const ref = useRef<HTMLButtonElement>(null);
  const { tabProps, isSelected, isDisabled } = useTab({ key }, state, ref);

  return (
    <FocusRing>
      <Box
        as="button"
        ref={ref}
        c="neutral"
        px="md"
        py="sm"
        className={cx(
          // Default style - border around the selected item
          {
            'border-2 border-b-0 border-clear': variant === 'default' && !isDisabled,
            'aria-selected:border-interactive-selected': variant === 'default' && !isDisabled
          },

          {
            // hover style (bg matches the Panel bars)
            'hover:bg-interactive-subtle-hover': !isDisabled,
            'hover:shadow-underline-interactive': !isDisabled,
            'hover:cursor-not-allowed': isDisabled
          }
        )}
        {...tabProps}
      >
        {rendered}
      </Box>
    </FocusRing>
  );
}
