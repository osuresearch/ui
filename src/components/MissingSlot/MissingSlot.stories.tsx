import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { MissingSlot as Component, MissingSlotProps } from './MissingSlot';

export default RUIComponentMeta<MissingSlotProps>('Internal', Component);

export const MissingSlot = RUIComponentStory<MissingSlotProps>((args) => <Component {...args} />);
