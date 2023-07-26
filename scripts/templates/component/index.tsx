import React from 'react';
import { Box, BoxProps } from '@mui/material';

export type __TEMPLATE__Props = BoxProps<'div'>

export function __TEMPLATE__({ children, ...props }: __TEMPLATE__Props) {
  return (
    <Box component="div" {...props}>
      {children}
    </Box>
  );
}
