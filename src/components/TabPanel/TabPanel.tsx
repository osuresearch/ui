import { Box, Group, Stack, StackProps } from '@osuresearch/ui';
import { CollectionChildren, Orientation } from '@react-types/shared';
import React, { forwardRef, useRef } from 'react';
import { AriaTabListProps, useTabList } from 'react-aria';
import { useTabListState } from 'react-stately';

import { cx } from '@osuresearch/ui/theme';
import { DefaultProps } from '@osuresearch/ui/types';

import { Panel } from './Panel';
import { Tab } from './Tab';

export type TabPanelProps = DefaultProps & {
  /**
   * Tab bar orientation.
   *
   * TODO: Not implemented
   */
  orientation?: Orientation;

  /**
   * Whether the tabs are disabled.
   *
   * Shows that a selection exists, but is not available.
   */
  isDisabled?: boolean;

  /**
   * An `<Item>` component per tab.
   */
  children: CollectionChildren<HTMLDivElement>;
};

/**
 * This implementation wrapper exists so that I can hide some
 * AriaTabListProps and standardize usage.
 */
function TabPanelImpl(props: AriaTabListProps<HTMLDivElement>) {
  const ariaTabListProps = props as AriaTabListProps<HTMLDivElement>;

  const listRef = useRef<HTMLDivElement>(null);
  const state = useTabListState(ariaTabListProps);
  const { tabListProps } = useTabList(ariaTabListProps, state, listRef);

  // TODO: Rework focus states (all across the board)
  // I'm still not happy with it.

  return (
    <Stack gap={0} className="rui-border-b-2 rui-border-light-shade">
      <Group
        ref={listRef}
        gap={0}
        className="rui-border-b-4 rui-border-light-shade"
        {...tabListProps}
      >
        {[...state.collection].map((tab) => (
          <Tab key={tab.key} item={tab} state={state} orientation={props.orientation} />
        ))}
      </Group>
      <Panel
        className="focus:rui-ring rui-outline-none"
        key={state.selectedItem?.key}
        state={state}
      />
    </Stack>
  );
}

/**
 * A TabPanel is a tabbed interface component where each tab is associated
 * with a panel containing information related to that tab.
 *
 * ### Accessibility
 * - Pressing the arrow keys while focus is on a tab will switch selection to the adjacent tab in that direction
 * - Pressing `Space` or `Enter` will activate the selected tab
 * - `Home` will move focus to the first tab
 * - `End` will move focus to the last tab
 *
 * ## Differences from BUX
 * - Tabs require explicit activation with `Space` or `Enter`
 * - Keyboard focus is more apparent when navigating through tabs with a keyboard
 */
export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ orientation = 'horizontal', isDisabled = false, children, ...styleSystemProps }, ref) => (
    <Box ref={ref} {...styleSystemProps}>
      <TabPanelImpl orientation={orientation} isDisabled={isDisabled} keyboardActivation="manual">
        {children}
      </TabPanelImpl>
    </Box>
  )
);
