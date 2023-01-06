import React from 'react';

import { Item as Component, ItemProps } from '@osuresearch/ui';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<ItemProps<any>>('Utilities', Component);

export const Item = RUIComponentStory<ItemProps<any>>((args) => <>No example available</>);
