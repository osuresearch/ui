import { CollectionBase } from '@react-types/shared';

import React, { useId } from 'react';

import { useListState } from 'react-stately';

import { Box, BoxProps, Tab as MuiTab, Tabs as MuiTabs } from '@mui/material';

import { Item } from '../Item';
import { TabPanel } from './TabPanel';

export interface TabsProps extends Omit<BoxProps<'div'>, 'children'>, CollectionBase<typeof Item> {}

/**
 * Wrapper around MUI tabs to introduce additional accessible labeling and statefulness
 */
export function Tabs({ children, ...props }: TabsProps) {
  const id = useId();
  const state = useListState({
    ...props,
    defaultSelectedKeys: [0],
    selectionBehavior: 'toggle',
    selectionMode: 'single',
    children,
  });

  const handleChange = (event: React.SyntheticEvent, key: React.Key) => {
    state.selectionManager.setSelectedKeys(new Set([key]));
  };

  const selected = Array.from(state.selectionManager.selectedKeys)[0];

  return (
    <Box component="div" {...props}>
      <MuiTabs value={selected} onChange={handleChange} aria-label="basic tabs example">
        {Array.from(state.collection).map((item, idx) => (
          <MuiTab
            label={item.textValue}
            key={idx}
            id={`${id}-tab-${idx}`}
            aria-controls={`${id}-tabpanel-${idx}`}
          />
        ))}
      </MuiTabs>

      {Array.from(state.collection).map((item, idx) => (
        <TabPanel
          key={idx}
          id={`${id}-tabpanel-${idx}`}
          isSelected={state.selectionManager.isSelected(idx)}
          aria-labelledby={`${id}-tab-${idx}`}
        >
          {item.rendered}
        </TabPanel>
      ))}
    </Box>
  );
}
