
import React from 'react';
import { useScreenSize } from '../../src/hooks';
import { ScreenSize } from '../../src/types';
import { Icon } from '../../src/components/Icon';
import { Box } from '../../src/components/Box';

export function BreakpointTable({ size }: { size: ScreenSize }) {
  const { breakpoints } = useScreenSize();

  return (
    <Box c="white" bgc={breakpoints[size] ? 'success' : 'error'} px="sm" py="xs">
      <Icon name={breakpoints[size] ? 'check' : 'xmark'} />
    </Box>
  );
}
