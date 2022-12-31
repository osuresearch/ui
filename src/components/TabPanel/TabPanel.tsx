import { CollectionChildren, Orientation } from '@react-types/shared';
import React, { Key, forwardRef, useEffect, useRef, useState } from 'react';
import { AriaTabListProps, useTabList } from 'react-aria';
import { useTabListState } from 'react-stately';

import { StyleSystemProps } from '~/types';
import { cx } from '~/utils';

import { Box } from '../Box';
import { Group } from '../Group';
import { Stack } from '../Stack';
import { Panel } from './Panel';
import { Tab } from './Tab';

export type TabPanelProps = StyleSystemProps & {
  // AriaTabListProps re-declared to load into Storybook
  // TODO: Don't do this.
  // See: https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  // (except I only want *specific* props exposed to end users)

  /** The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with. */
  disabledKeys?: Iterable<Key>;

  /** The currently selected key in the collection (controlled). */
  selectedKey?: Key | null;
  /** The initial selected key in the collection (uncontrolled). */
  defaultSelectedKey?: Key;
  /** Handler that is called when the selection changes. */
  onSelectionChange?: (key: Key) => any;

  /**
   * Tab bar orientation.
   *
   * TODO: Not implemented
   */
  orientation?: Orientation;

  /**
   * Whether the tabs are disabled.
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

  const ref = useRef<HTMLDivElement>(null);
  const state = useTabListState(ariaTabListProps);
  const { tabListProps } = useTabList(ariaTabListProps, state, ref);

  const [activeTabStyle, setActiveTabStyle] = useState({
    width: 0,
    transform: 'translateX(0)'
  });

  // Animate the current tab underline to follow the active tab
  useEffect(() => {
    const tab = ref.current?.querySelector<HTMLDivElement>('[role="tab"][aria-selected="true"]');

    setActiveTabStyle({
      width: tab?.offsetWidth ?? 0,
      transform: `translateX(${tab?.offsetLeft ?? 0}px)`
    });
  }, [state.selectedKey]);

  return (
    <Stack gap={0} className="rui-border-b-2 rui-border-light-shade">
      <Group
        ref={ref}
        gap={0}
        className="rui-relative rui-border-b-4 rui-border-light-shade"
        {...tabListProps}
      >
        <div
          className={cx(
            // Positioning
            'rui-absolute rui-bottom-0 rui-left-0 ',

            // Visual
            'rui-border-2 rui-border-clear rui-shadow-underline-primary',

            // Animation. TODO: Collapse
            'rui-transition-transform rui-duration-300 rui-ease-decelerate-max'
          )}
          style={{ ...activeTabStyle }}
        />
        {[...state.collection].map((tab) => (
          <Tab key={tab.key} item={tab} state={state} orientation={props.orientation} />
        ))}
      </Group>
      <Panel key={state.selectedItem?.key} state={state} />
    </Stack>
  );
}

/**
 * A TabPanel is a tabbed interface component where each tab is associated
 * with a panel containing information related to that tab.
 *
 * ## Accessibility
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
  (
    {
      orientation = 'horizontal',
      isDisabled = false,
      disabledKeys,
      selectedKey,
      defaultSelectedKey,
      onSelectionChange,
      children,
      ...styleSystemProps
    },
    ref
  ) => (
    <Box ref={ref} {...styleSystemProps}>
      <TabPanelImpl
        orientation={orientation}
        isDisabled={isDisabled}
        disabledKeys={disabledKeys}
        selectedKey={selectedKey}
        defaultSelectedKey={defaultSelectedKey}
        onSelectionChange={onSelectionChange}
        keyboardActivation="manual"
      >
        {children}
      </TabPanelImpl>
    </Box>
  )
);
