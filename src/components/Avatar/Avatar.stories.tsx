import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Group } from '../Group';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Avatar, AvatarProps } from './Avatar';

export default RUIComponentMeta<AvatarProps>('Components', Avatar).withStyleSystemProps();

export const Overview = RUIComponentStory<AvatarProps>((args) => <Avatar {...args} />, {
  name: 'Chase McManning',
  opicUsername: 'mcmanning.1',
  alt: 'Avatar for Chase McManning',
  size: 64
});

export const WithoutOPIC = RUIComponentStory(Overview, {
  name: 'Chase McManning',
  alt: 'Avatar for Chase McManning',
  label: 'CM',
  size: 64
});

export const Sizes = RUIComponentStory<AvatarProps>(
  (args) => (
    <Group>
      <Avatar {...args} size={128} />
      <Avatar {...args} size={64} />
      <Avatar {...args} size={48} />
      <Avatar {...args} size={32} />
      <Avatar {...args} size={28} />
    </Group>
  ),
  {
    name: 'Chase McManning',
    opicUsername: 'mcmanning.1',
    alt: 'Avatar for Chase McManning'
  }
);

export const Colors = RUIComponentStory<AvatarProps>(
  (args) => (
    <Stack>
      <Text>Accents</Text>
      <Group>
        <Avatar {...args} colors={['blue']} />
        <Avatar {...args} colors={['orange']} />
        <Avatar {...args} colors={['green']} />
        <Avatar {...args} colors={['pink']} />
        <Avatar {...args} colors={['violet']} />
        <Avatar {...args} colors={['aqua']} />
        <Avatar {...args} colors={['teal']} />
        <Avatar {...args} colors={['gold']} />
      </Group>

      <Text>Utilities</Text>
      <Group>
        <Avatar {...args} colors={['primary']} />
        <Avatar {...args} colors={['secondary']} />
        <Avatar {...args} colors={['tertiary']} />
        <Avatar {...args} colors={['light']} />
        <Avatar {...args} colors={['dimmed']} />
        <Avatar {...args} colors={['dark']} />
      </Group>
    </Stack>
  ),
  {
    name: 'Chase McManning',
    alt: 'Avatar for Chase McManning',
    label: 'CM',
    size: 38
  }
).withDescription('Text color will automatically use the `--contrast` token for each input color');

export const CustomPlaceholder = RUIComponentStory(Overview, {
  colors: ['dimmed'],
  label: '+12',
  alt: 'and 12 more'
});

export const WithInvalidSrc = RUIComponentStory(Overview, {
  name: 'Chase McManning',
  alt: 'Avatar for Chase McManning',
  src: 'http://example.com/invalid',
  label: 'CM',
  size: 42
});

export const Polymorphic = RUIComponentStory((args) => <Avatar as="a" {...args} />, {
  name: 'Chase McManning',
  href: 'https://github.com/McManning',
  opicUsername: 'mcmanning.1',
  alt: 'Avatar for Chase McManning',
  size: 64
});
