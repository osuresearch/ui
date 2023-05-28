import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { FocusRing as Component, FocusRingProps } from './FocusRing';

export default {
  title: 'Utilities / FocusRing',
  ...RUIComponentMeta(Component)
};

export const FocusRing = RUIComponentStory<FocusRingProps>((args) => (
  <Component {...args}>
    <button>Button to receive focus ring</button>
  </Component>
));
