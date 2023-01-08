import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Item as Component, ItemProps } from './Item';

export default RUIComponentMeta<ItemProps<any>>('Utilities', Component);

export const Item = RUIComponentStory<ItemProps<any>>((args) => <>No example available</>);
