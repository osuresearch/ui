import { CenterProps, Center as Component, Icon, Text } from '@osuresearch/ui';
import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<CenterProps>('Layout', Component)
  .withStyleSystemProps()
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
