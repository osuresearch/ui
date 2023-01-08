import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Badge } from '../Badge';
import { Button, ButtonProps } from '../Button';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { Paper } from '../Paper';

export default RUIComponentMeta<ButtonProps>('Components', Button).withStyleSystemProps();

export const Overview = RUIComponentStory<ButtonProps>((args) => <Button {...args}>Button</Button>);

export const Primary = RUIComponentStory(Overview, {
  variant: 'primary'
}).withDescription(`
  Use a primary button to highlight the strongest call to action on a page.
  Primary buttons should only appear once per container and not every
  screen requires a primary button.
`);

export const Subtle = RUIComponentStory(Overview, {
  variant: 'subtle'
}).withDescription(`
  Use subtle buttons along with primary buttons for secondary actions,
  such as "Cancel".
`);

export const Disabled = RUIComponentStory(Overview, {
  isDisabled: true
});

export const WithIcon = RUIComponentStory(Overview, {
  variant: 'subtle',
  leftSlot: <Icon name="heart" size={20} c="pink" />
}).withDescription('Use icons when you want to convey meaning quicker');

export const WithBadge = RUIComponentStory(Overview, {
  variant: 'default',
  rightSlot: <Badge c="dimmed">+99</Badge>
}).withDescription('Use badges when you want to indicate a value');

export const WithAccent = RUIComponentStory<ButtonProps>(
  (args) => (
    <Group wrap>
      <Paper p="md" bgc="clear">
        <Button {...args}>Click me</Button>
      </Paper>
      <Paper p="md" bgc="white" c="black">
        <Button {...args}>Click me</Button>
      </Paper>
      <Paper p="md" bgc="black" c="white">
        <Button {...args}>Click me</Button>
      </Paper>
      <Paper p="md" bgc="light" c="light-contrast">
        <Button {...args}>Click me</Button>
      </Paper>
      <Paper p="md" bgc="dimmed" c="dimmed-contrast">
        <Button {...args}>Click me</Button>
      </Paper>
      <Paper p="md" bgc="dark" c="dark-contrast">
        <Button {...args}>Click me</Button>
      </Paper>
      <Paper p="md" bgc="blue" c="blue-contrast">
        <Button {...args}>Click me</Button>
      </Paper>
      <Paper p="md" bgc="orange" c="orange-contrast">
        <Button {...args}>Click me</Button>
      </Paper>
      <Paper p="md" bgc="green" c="green-contrast">
        <Button {...args}>Click me</Button>
      </Paper>
      <Paper p="md" bgc="brown" c="brown-contrast">
        <Button {...args}>Click me</Button>
      </Paper>
      <Paper p="md" bgc="pink" c="pink-contrast">
        <Button {...args}>Click me</Button>
      </Paper>
      <Paper p="md" bgc="violet" c="violet-contrast">
        <Button {...args}>Click me</Button>
      </Paper>
      <Paper p="md" bgc="aqua" c="aqua-contrast">
        <Button {...args}>Click me</Button>
      </Paper>
      <Paper p="md" bgc="teal" c="teal-contrast">
        <Button {...args}>Click me</Button>
      </Paper>
      <Paper p="md" bgc="gold" c="gold-contrast">
        <Button {...args}>Click me</Button>
      </Paper>
    </Group>
  ),
  {
    variant: 'accented'
  }
).withDescription(`
  The \`accented\` button variant can be used against accented backgrounds. 

  You should not use an accented button against the primary color.
`);
