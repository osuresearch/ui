import { Story } from '@storybook/react';
import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Group } from '../Group';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Badge, BadgeProps } from './Badge';

export default RUIComponentMeta<BadgeProps>('Components', Badge).withStyleSystemProps();

const Template: Story<BadgeProps> = (args) => <Badge {...args}>Beta</Badge>;

export const Overview = RUIComponentStory(Template);

const Colors: Story<BadgeProps> = (args) => (
  <Stack>
    <Text as="div">Accents</Text>
    <Group gap="xxs" wrap>
      <Badge {...args} c="blue">
        blue
      </Badge>
      <Badge {...args} c="orange">
        orange
      </Badge>
      <Badge {...args} c="green">
        green
      </Badge>
      <Badge {...args} c="brown">
        brown
      </Badge>
      <Badge {...args} c="pink">
        pink
      </Badge>
      <Badge {...args} c="violet">
        violet
      </Badge>
      <Badge {...args} c="aqua">
        aqua
      </Badge>
      <Badge {...args} c="teal">
        teal
      </Badge>
      <Badge {...args} c="gold">
        gold
      </Badge>
    </Group>
    <Text as="div">Utilities</Text>
    <Group gap="xxs" wrap>
      <Badge {...args} c="primary">
        primary
      </Badge>
      <Badge {...args} c="secondary">
        secondary
      </Badge>
      <Badge {...args} c="tertiary">
        tertiary
      </Badge>

      <Badge {...args} c="light">
        light
      </Badge>
      <Badge {...args} c="dimmed">
        dimmed
      </Badge>
      <Badge {...args} c="dark">
        dark
      </Badge>

      <Badge {...args} c="info">
        info
      </Badge>
      <Badge {...args} c="success">
        success
      </Badge>
      <Badge {...args} c="warning">
        warning
      </Badge>
      <Badge {...args} c="error">
        error
      </Badge>
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

export const Polymorphic = RUIComponentStory<BadgeProps>((args) => (
  <Badge as="a" href="https://research.osu.edu" target="_blank" {...args}>
    research.osu.edu
  </Badge>
));
