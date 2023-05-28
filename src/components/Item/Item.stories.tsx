import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Item as Component, ItemProps } from './Item';

export default {
  title: 'Utilities / Item',
  ...RUIComponentMeta(Component).withStyleSystemProps()
};

export const Item = RUIComponentStory<ItemProps<any>>(() => <>No example available</>);
