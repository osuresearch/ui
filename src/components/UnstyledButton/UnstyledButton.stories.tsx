import { Story } from '@storybook/react';
import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Avatar } from '../Avatar';
import { Group } from '../Group';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { UnstyledButton, UnstyledButtonProps } from './UnstyledButton';

export default RUIComponentMeta<UnstyledButtonProps>('Utilities', UnstyledButton)
  .withStyleSystemProps()
  .withBadge('atom')
  .withBadge('stable');

const Template: Story<UnstyledButtonProps> = (args) => (
  <UnstyledButton {...args}>Button</UnstyledButton>
);

export const Overview = Template.bind({});

export const ContactCard = RUIComponentStory((args) => (
  <UnstyledButton>
    <Group>
      <Avatar
        alt="Chase McManning contact"
        size={40}
        name="Chase McManning"
        opicUsername="mcmanning.1"
      />
      <Stack gap={0}>
        <Text>Chase McManning</Text>
        <Text c="dark" fs="sm">
          mcmanning.1@osu.edu
        </Text>
      </Stack>
    </Group>
  </UnstyledButton>
));

export const PolymorphAsAnchor = RUIComponentStory((args) => (
  <UnstyledButton as="a" href="https://example.com">
    Polymorphic button
  </UnstyledButton>
)).withDescription(`
  >This example is for demonstrative purposes of polymorphism.

  >**Do not** use this as-is in an application as it does not pass
  accessibility guidelines
`);
