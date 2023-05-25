import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Avatar } from '../Avatar';
import { Group } from '../Group';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { UnstyledButton, UnstyledButtonProps } from './UnstyledButton';

export default RUIComponentMeta<UnstyledButtonProps>(
  'Unstyled',
  UnstyledButton
).withStyleSystemProps();

export const Overview = RUIComponentStory<UnstyledButtonProps>((args) => (
  <UnstyledButton {...args}>Button</UnstyledButton>
));

export const Disabled = RUIComponentStory(Overview, {
  isDisabled: true
});

export const OnPress = RUIComponentStory(Overview, {
  onPress: () => alert('Clicked!')
}).withDescription(
  'This is similar to the standard `onClick` event, but normalized to support all interaction methods (mouse, keyboard, and touch) equally.'
);

export const ContactCard = RUIComponentStory(() => (
  <UnstyledButton>
    <Group p="xs">
      <Avatar
        alt="Chase McManning contact"
        size={40}
        name="Chase McManning"
        opicUsername="mcmanning.1"
      />
      <Stack gap={0}>
        <Text>Chase McManning</Text>
        <Text c="neutral-subtle" fs="sm">
          mcmanning.1@osu.edu
        </Text>
      </Stack>
    </Group>
  </UnstyledButton>
));

export const Polymorphic = RUIComponentStory(() => (
  <UnstyledButton as="a" href="https://example.com">
    Polymorphic button
  </UnstyledButton>
));
