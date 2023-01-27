import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Paper } from '../Paper';
import { ArrowProps, Arrow as Component } from './Arrow';

export default RUIComponentMeta<ArrowProps>('Utilities', Component);

export const Arrow = RUIComponentStory<ArrowProps>(
  (args) => (
    <Paper bgc="primary" w={80} h={80}>
      <Component {...args} placement="top" />
      <Component {...args} placement="bottom" />
      <Component {...args} placement="left" />
      <Component {...args} placement="right" />
    </Paper>
  ),
  {
    c: 'primary'
  }
);
