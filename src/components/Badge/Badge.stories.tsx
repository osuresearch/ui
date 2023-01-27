import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';

import { Button } from '../Button';
import { Group } from '../Group';
import { IconButton } from '../IconButton';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Badge, BadgeProps } from './Badge';

export default RUIComponentMeta<BadgeProps>('Components', Badge);

export const Overview = RUIComponentStory<BadgeProps>(
  (args) => (
    <Badge {...args}>
      <Button>Unread</Button>
    </Badge>
  ),
  {
    count: 123
  }
);

export const Colors = RUIComponentStory<BadgeProps>(
  (args) => (
    <Stack>
      <Text as="div">Utilities</Text>
      <Group gap="sm" wrap>
        <Badge {...args} c="primary">
          <Button>primary</Button>
        </Badge>
        <Badge {...args} c="secondary">
          <Button>secondary</Button>
        </Badge>
        <Badge {...args} c="tertiary">
          <Button>tertiary</Button>
        </Badge>

        <Badge {...args} c="light">
          <Button>light</Button>
        </Badge>
        <Badge {...args} c="dimmed">
          <Button>dimmed</Button>
        </Badge>
        <Badge {...args} c="dark">
          <Button>dark</Button>
        </Badge>

        <Badge {...args} c="info">
          <Button>info</Button>
        </Badge>
        <Badge {...args} c="success">
          <Button>success</Button>
        </Badge>
        <Badge {...args} c="warning">
          <Button>warning</Button>
        </Badge>
        <Badge {...args} c="error">
          <Button>error</Button>
        </Badge>
      </Group>
      <Text as="div">Accents</Text>
      <Group gap="sm" wrap>
        <Badge {...args} c="blue">
          <Button>blue</Button>
        </Badge>
        <Badge {...args} c="orange">
          <Button>orange</Button>
        </Badge>
        <Badge {...args} c="green">
          <Button>green</Button>
        </Badge>
        <Badge {...args} c="brown">
          <Button>brown</Button>
        </Badge>
        <Badge {...args} c="pink">
          <Button>pink</Button>
        </Badge>
        <Badge {...args} c="violet">
          <Button>violet</Button>
        </Badge>
        <Badge {...args} c="aqua">
          <Button>aqua</Button>
        </Badge>
        <Badge {...args} c="teal">
          <Button>teal</Button>
        </Badge>
        <Badge {...args} c="gold">
          <Button>gold</Button>
        </Badge>
      </Group>
    </Stack>
  ),
  {
    count: undefined
  }
);

export const Controlled = RUIComponentStory<BadgeProps>(
  (args) => {
    const [count, setCount] = useState(5);

    return (
      <Group gap="md">
        <Badge {...args} count={count}>
          <Button>Unread</Button>
        </Badge>

        <Group gap={0}>
          <IconButton
            label="Reduce count"
            name="dash"
            onPress={() => setCount((c) => Math.max(c - 1, 0))}
          />

          <IconButton label="Increase count" name="plus" onPress={() => setCount((c) => c + 1)} />
        </Group>
      </Group>
    );
  },
  { maxCount: 20 }
).withDescription(`
  When the \`count\` is specified and reaches zero, the badge will be removed.
`);

export const WithIconButton = RUIComponentStory<BadgeProps>(
  (args) => (
    <Badge {...args}>
      <IconButton label="My alerts" name="bellFill" size={26} />
    </Badge>
  ),
  {
    count: 6
  }
);

export const WithPingAnimation = RUIComponentStory<BadgeProps>(
  (args) => (
    <Badge {...args}>
      <IconButton label="My email" name="envelope" size={32} p={0} iconProps={{ p: 0 }} />
    </Badge>
  ),
  {
    ping: true
  }
);
