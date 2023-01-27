import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import { Story } from '@storybook/react';
import React from 'react';

import { Button, Icon, UnstyledButton } from '..';
import { Avatar } from '../Avatar';
import { CloseButton } from '../CloseButton';
import { Group } from '../Group';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Chip, ChipProps } from './Chip';

export default RUIComponentMeta<ChipProps>('Components', Chip).withStyleSystemProps();

const Template: Story<ChipProps> = (args) => <Chip {...args}>Beta</Chip>;

export const Overview = RUIComponentStory(Template);

const Colors: Story<ChipProps> = (args) => (
  <Stack>
    <Text as="div">Accents</Text>
    <Group gap="xxs" wrap>
      <Chip {...args} c="blue">
        blue
      </Chip>
      <Chip {...args} c="orange">
        orange
      </Chip>
      <Chip {...args} c="green">
        green
      </Chip>
      <Chip {...args} c="brown">
        brown
      </Chip>
      <Chip {...args} c="pink">
        pink
      </Chip>
      <Chip {...args} c="violet">
        violet
      </Chip>
      <Chip {...args} c="aqua">
        aqua
      </Chip>
      <Chip {...args} c="teal">
        teal
      </Chip>
      <Chip {...args} c="gold">
        gold
      </Chip>
    </Group>
    <Text as="div">Utilities</Text>
    <Group gap="xxs" wrap>
      <Chip {...args} c="primary">
        primary
      </Chip>
      <Chip {...args} c="secondary">
        secondary
      </Chip>
      <Chip {...args} c="tertiary">
        tertiary
      </Chip>

      <Chip {...args} c="light">
        light
      </Chip>
      <Chip {...args} c="dimmed">
        dimmed
      </Chip>
      <Chip {...args} c="dark">
        dark
      </Chip>

      <Chip {...args} c="info">
        info
      </Chip>
      <Chip {...args} c="success">
        success
      </Chip>
      <Chip {...args} c="warning">
        warning
      </Chip>
      <Chip {...args} c="error">
        error
      </Chip>
    </Group>
  </Stack>
);

export const Solid = RUIComponentStory(Colors, {
  variant: 'solid'
});

export const Outline = RUIComponentStory(Colors, {
  variant: 'outline'
});

export const WithIndicator = RUIComponentStory(Colors, {
  variant: 'indicator'
});

export const WithAvatar = RUIComponentStory<ChipProps>((args) => (
  <Chip as="a" c="dimmed" href="https://github.com/McManning" target="_blank" {...args}>
    <Avatar
      alt="Avatar for Chase McManning"
      name="Chase McManning"
      opicUsername="mcmanning.1"
      my="xxs"
      size={24}
    />
    Chase McManning
  </Chip>
));

export const Clickable = RUIComponentStory<ChipProps>((args) => (
  <Chip as={Button} {...args} variant="solid" onPress={() => alert('pressed')}>
    Clickable chip
  </Chip>
));

export const Removable = RUIComponentStory<ChipProps>(
  (args) => (
    <Chip variant="solid" {...args}>
      Removable chip
    </Chip>
  ),
  {
    isRemovable: true
  }
);

export const ClickableAndRemovable = RUIComponentStory<ChipProps>(
  (args) => (
    <Chip as={Button} onPress={() => alert('pressed')} variant="solid" {...args}>
      Click me or remove me
    </Chip>
  ),
  {
    isRemovable: true
  }
);

export const Polymorphic = RUIComponentStory<ChipProps>((args) => (
  <Chip as="a" href="https://research.osu.edu" target="_blank" {...args}>
    research.osu.edu
  </Chip>
));
