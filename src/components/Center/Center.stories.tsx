import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Text } from '../Text';
import { CenterProps, Center as Component } from './Center';

export default {
  title: 'Layout / Center',
  ...RUIComponentMeta(Component)
};

export const Center = RUIComponentStory<CenterProps>((args) => (
  <div style={{ width: '400px', height: '300px', background: 'var(--rui-surface-subtle)' }}>
    <Component {...args}>
      <Text>Content to be centered</Text>
    </Component>
  </div>
));
