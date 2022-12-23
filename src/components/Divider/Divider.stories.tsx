import React from 'react';
import { Group, Stack, Text } from '@osuresearch/ui';
import { Divider, DividerProps } from './Divider';
import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<DividerProps>('Layout', Divider).withBadge('stable');

export const Horizontal = RUIComponentStory<DividerProps>(
  (args) => (
    <Stack gap={0}>
      <Text>First line</Text>
      <Divider {...args} />
      <Text>Second line</Text>
    </Stack>
  ),
  { gap: 'md', orientation: 'horizontal' }
);

export const Vertical = RUIComponentStory<DividerProps>(
  (args) => (
    <Group gap={0}>
      <Text>First line</Text>
      <Divider {...args} />
      <Text>Second line</Text>
    </Group>
  ),
  { gap: 'md', orientation: 'vertical' }
);
