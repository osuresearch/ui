import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { FocusRing as Component, FocusRingProps } from './FocusRing';

export default RUIComponentMeta<FocusRingProps>('Utilities', Component);

export const FocusRing = RUIComponentStory<FocusRingProps>((args) => (
  <Component {...args}>
    <button>Button to receive focus ring</button>
  </Component>
));
