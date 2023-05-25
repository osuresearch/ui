import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';

import { Button } from '../Button';
import { Group } from '../Group';
import { IconButton } from '../IconButton';
import { Stack } from '../Stack';
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

        <Badge {...args} c="info">
          <Button>info</Button>
        </Badge>
        <Badge {...args} c="success">
          <Button>success</Button>
        </Badge>
        <Badge {...args} c="caution">
          <Button>caution</Button>
        </Badge>
        <Badge {...args} c="critical">
          <Button>critical</Button>
        </Badge>
      </Group>
      <Group gap="sm" wrap>
        <Badge {...args} c="accent01">
          <Button>accent01</Button>
        </Badge>
        <Badge {...args} c="accent02">
          <Button>accent02</Button>
        </Badge>
        <Badge {...args} c="accent03">
          <Button>accent03</Button>
        </Badge>
        <Badge {...args} c="accent04">
          <Button>accent04</Button>
        </Badge>
        <Badge {...args} c="accent05">
          <Button>accent05</Button>
        </Badge>
        <Badge {...args} c="accent06">
          <Button>accent06</Button>
        </Badge>
        <Badge {...args} c="accent07">
          <Button>accent07</Button>
        </Badge>
        <Badge {...args} c="accent08">
          <Button>accent08</Button>
        </Badge>
        <Badge {...args} c="accent09">
          <Button>accent09</Button>
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
