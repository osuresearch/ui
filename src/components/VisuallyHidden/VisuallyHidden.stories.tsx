import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { VisuallyHidden as Component, VisuallyHiddenProps } from './VisuallyHidden';

export default {
  title: 'Utilities / VisuallyHidden',
  ...RUIComponentMeta(Component).withStyleSystemProps()
};

export const VisuallyHidden = RUIComponentStory<VisuallyHiddenProps>(
  () => <Component>Hello screen readers!</Component>
);
