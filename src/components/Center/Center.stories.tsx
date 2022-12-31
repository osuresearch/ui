import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Icon } from '../Icon';
import { Text } from '../Text';
import { CenterProps, Center as Component } from './Center';

export default RUIComponentMeta<CenterProps>('Layout', Component)
  .withBadge('experimental')
  .withBadge('atom');

export const Center = RUIComponentStory<CenterProps>((args) => (
  <Component {...args}>
    <Icon name="xmark" size={25} />
    <Icon name="xmark" size={30} />
    <Icon name="xmark" size={35} />
    <Text>Text content</Text>
    <Icon name="xmark" size={35} />
    <Icon name="xmark" size={30} />
    <Icon name="xmark" size={25} />
  </Component>
));
