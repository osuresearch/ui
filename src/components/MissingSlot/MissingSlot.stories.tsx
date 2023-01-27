import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { MissingSlot as Component, MissingSlotProps } from './MissingSlot';

export default RUIComponentMeta<MissingSlotProps>('Internal', Component);

export const MissingSlot = RUIComponentStory<MissingSlotProps>((args) => <Component {...args} />);
