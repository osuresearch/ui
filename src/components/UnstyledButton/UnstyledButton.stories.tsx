import React from 'react';
import { Story } from '@storybook/react';
import { Group, Avatar, Text, UnstyledButton, UnstyledButtonProps, Stack } from '@osuresearch/ui';
import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<UnstyledButtonProps>('Utilities', UnstyledButton)
  .withStyleSystemProps()
  .withBadge('atom')
  .withBadge('stable');

const Template: Story<UnstyledButtonProps> = (args) => (
  <UnstyledButton {...args}>Button</UnstyledButton>
);

export const Overview = Template.bind({});

export const ContactCard = RUIComponentStory(() => (
  <UnstyledButton>
    <Group>
      <Avatar size={40} name="Chase McManning" username="mcmanning.1" />
      <Stack gap={0}>
        <Text>Chase McManning</Text>
        <Text c="dark" fs="sm">
          mcmanning.1@osu.edu
        </Text>
      </Stack>
    </Group>
  </UnstyledButton>
));

export const PolymorphAsAnchor = RUIComponentStory(() => (
  <UnstyledButton component="a" href="https://example.com">
    Polymorphic button
  </UnstyledButton>
)).withDescription(`
  >This example is for demonstrative purposes of polymorphism.

  >**Do not** use this as-is in an application as it does not pass
  accessibility guidelines
`);
