import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { ListField as Component, ListFieldProps } from './ListField';

export default {
  title: 'Internal / ListField',
  ...RUIComponentMeta(Component).withStyleSystemProps()
};

export const ListField = RUIComponentStory<ListFieldProps>((args) => (
  <Component {...args}>Component template created through newComponent.mjs</Component>
));
