
import React from 'react';
import { useScreenSize } from '../../src/hooks';
import { ScreenSize } from '../../src/types';
import { Icon } from '../../src/components/Icon';
import { Group } from '../../src/components/Group';

export function BreakpointTable({ size }: { size: ScreenSize }) {
  const { breakpoints } = useScreenSize();

  return (
    <Group justify="center" c="white" bgc={breakpoints[size] ? 'success-bold' : 'critical-bold'} px="sm" py="xs">
      <Icon name={breakpoints[size] ? 'check' : 'xmark'} />
    </Group>
  );
}
