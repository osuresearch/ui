import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';

import { Button } from '../Button';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { Space } from '../Space';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Box } from '../Box';
import { Tooltip, TooltipProps } from './Tooltip';

export default RUIComponentMeta<TooltipProps>('Components', Tooltip);

export const Overview = RUIComponentStory<TooltipProps>(
  (args) => (
    <Box p="xxl">
      <Tooltip {...args}>
        <Button>Button</Button>
      </Tooltip>
    </Box>
  ),
  {
    contentSlot: 'Tooltip content'
  }
);

export const AdjacentTips = RUIComponentStory<TooltipProps>((args) => (
  <Group p="xxl">
    <Tooltip {...args} contentSlot="Tooltip for button 1">
      <Button>Button 1</Button>
    </Tooltip>
    <Tooltip {...args} contentSlot="Tooltip for button 2">
      <Button>Button 2</Button>
    </Tooltip>
    <Tooltip {...args} contentSlot="Tooltip for button 3">
      <Button>Button 3</Button>
    </Tooltip>
  </Group>
)).withDescription(`
  If you hover over the first button, the tooltip will be shown after a delay.
  Hovering over the second and third buttons show the tooltip immediately.
`);

export const Controlled = RUIComponentStory<TooltipProps>(
  (args) => {
    const [open, setOpen] = useState(false);
    return (
      <Stack p="xxl">
        <Text>Tooltip is {open ? 'visible' : 'not visible'}</Text>
        <Tooltip {...args} isOpen={open} onOpenChange={setOpen}>
          <Button>Button</Button>
        </Tooltip>
      </Stack>
    );
  },
  {
    contentSlot: 'Controlled tooltip'
  }
);

export const NoDelay = RUIComponentStory<TooltipProps>(
  (args) => (
    <Box p="xxl">
      <Tooltip {...args}>
        <Button>Make instant tooltip</Button>
      </Tooltip>
    </Box>
  ),
  {
    contentSlot: 'Instant tooltip ☕',
    delay: 0
  }
);

export const Disabled = RUIComponentStory(Overview, {
  isDisabled: true
});

// TODO: Bad example, since the target can't be tabbed to.
export const HelpIcon = RUIComponentStory<TooltipProps>(
  (args) => (
    <Box p="xxl">
      <Tooltip {...args}>
        <Icon c="dark" name="questionCircle" aria-label="Help with this feature" />
      </Tooltip>
    </Box>
  ),
  {
    contentSlot: 'Elements dedicated to help should have instant tooltips',
    delay: 0,
    placement: 'bottom left'
  }
);

export const LongContent = RUIComponentStory(Overview, {
  contentSlot: (
    <>
      long content that also includes <Text c="green" fw="bold">text formatting</Text>, icons{' '}
      <Icon name="heartFill" c="pink" />, and a whole bunch of text on a single line to see if it
      wraps.
      <Space />
      And maybe even a list for good measure:
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </>
  )
});

export const WithPlacement = RUIComponentStory<TooltipProps>(
  (args) => (
    <Group p="xxl">
      <Tooltip {...args} placement="left">
        <Button>👈</Button>
      </Tooltip>

      <Tooltip {...args} placement="top">
        <Button>👆</Button>
      </Tooltip>

      <Tooltip {...args} placement="bottom">
        <Button>👇</Button>
      </Tooltip>

      <Tooltip {...args} placement="right">
        <Button>👉</Button>
      </Tooltip>
    </Group>
  ),
  {
    contentSlot: '💥'
  }
).withDescription(`
  Note that left/right placement does not work as expected within a Storybook Docs iframe.
  View in canvas mode instead.
`)
