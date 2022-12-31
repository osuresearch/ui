import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { LegacyBox as BoxComponent, BoxProps } from '../LegacyBox';

export default RUIComponentMeta<BoxProps>('Utilities', BoxComponent)
  .withStyleSystemProps()
  .withBadge('stable');

export const Box = RUIComponentStory<BoxProps>((args) => (
  <BoxComponent {...args}>
    You can consider the Box component to be the abstraction over the CSS box model that we expose
    through more complex components.
  </BoxComponent>
));
