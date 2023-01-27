import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { ListField as Component, ListFieldProps } from './ListField';

export default RUIComponentMeta<ListFieldProps>('Internal', Component).withStyleSystemProps();

export const ListField = RUIComponentStory<ListFieldProps>((args) => (
  <Component {...args}>Component template created through newComponent.mjs</Component>
));
