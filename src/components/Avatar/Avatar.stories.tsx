import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Group } from '../Group';
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

export const CustomPlaceholder = RUIComponentStory(Overview, {
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
