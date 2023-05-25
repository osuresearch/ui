import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Item as Component, ItemProps } from './Item';

export default RUIComponentMeta<ItemProps<any>>('Utilities', Component);

export const Item = RUIComponentStory<ItemProps<any>>(() => <>No example available</>);
