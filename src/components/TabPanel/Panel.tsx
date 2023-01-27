import React, { useRef } from 'react';
import { AriaTabPanelProps, useTabPanel } from 'react-aria';
import { TabListState } from 'react-stately';

import { cx } from '../../utils';
import { FocusRing } from '../FocusRing';
import { Paper } from '../Paper';
import { TabPanelVariant } from './TabPanel';

export type PanelProps = AriaTabPanelProps & {
  variant?: TabPanelVariant;
  state: TabListState<HTMLDivElement>;
};

export function Panel({ variant, state, ...props }: PanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { tabPanelProps } = useTabPanel(props, state, ref);

  return (
    <FocusRing>
      <Paper
        bgc={variant === 'default' ? 'light-tint' : 'clear'}
        ref={ref}
        p={variant === 'default' ? 'xl' : 0}
        className={cx(
          // The default tab panel has a border below the content
          { 'rui-border-b-2 rui-border-light-shade': variant === 'default' }
        )}
        {...tabPanelProps}
      >
        {state.selectedItem?.props.children}
      </Paper>
    </FocusRing>
  );
}
