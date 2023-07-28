import React from 'react';

import { Box, BoxProps } from '@mui/material';

export interface TabPanelProps extends BoxProps<'div'> {
  isSelected: boolean;
  children: React.ReactNode;
}

export function TabPanel(props: TabPanelProps) {
  const { children, isSelected, ...other } = props;

  return (
    <Box role="tabpanel" hidden={!isSelected} {...other}>
      {isSelected && <Box sx={{ p: 2 }}>{children}</Box>}
    </Box>
  );
}
