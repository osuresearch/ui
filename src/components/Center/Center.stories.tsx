import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Text } from '../Text';
import { CenterProps, Center as Component } from './Center';

export default RUIComponentMeta<CenterProps>('Layout', Component);

export const Center = RUIComponentStory<CenterProps>((args) => (
  <div style={{ width: '300px', height: '200px', background: 'var(--rui-surface)' }}>
    <Component {...args}>
      <Text>Content to be centered</Text>
    </Component>
  </div>
));
