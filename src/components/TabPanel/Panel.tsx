import { Box } from '@osuresearch/ui';
import React, { useRef } from 'react';
import { AriaTabPanelProps, useTabPanel } from 'react-aria';
import { TabListState } from 'react-stately';

export type PanelProps = AriaTabPanelProps & {
  className: string;
  state: TabListState<HTMLDivElement>;
};

export function Panel({ className, state, ...props }: PanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { tabPanelProps } = useTabPanel(props, state, ref);

  // TODO: BUX just darkens the border slightly when focused.
  // But ... do we actually want to do that?
  // https://bux.osu.edu/page-elements/tabpanel
  return (
    <Box ref={ref} className={className} p="xl" {...tabPanelProps}>
      {state.selectedItem?.props.children}
    </Box>
  );
}
