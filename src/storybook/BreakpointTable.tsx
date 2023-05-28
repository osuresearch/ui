
import React from 'react';
import { useScreenSize } from '../hooks';
import { ScreenSize } from '../types';
import { Icon } from '../components/Icon';
import { Group } from '../components/Group';

export function BreakpointTable({ size }: { size: ScreenSize }) {
  const { breakpoints } = useScreenSize();

  return (
    <Group justify="center" c="white" bgc={breakpoints[size] ? 'success-bold' : 'critical-bold'} px="sm" py="xs">
      <Icon name={breakpoints[size] ? 'check' : 'xmark'} />
    </Group>
  );
}
