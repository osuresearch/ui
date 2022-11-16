
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Grid } from './Grid';
import { Row } from './Row';
import { Col } from './Col';

export default {
  title: 'Layout/Grid',
  component: Grid,
  subcomponents: { Row, Col }
} as ComponentMeta<typeof Grid>;

export const Empty: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const OneRow: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    <Grid.Row>
      <Grid.Col>
        Content 1
      </Grid.Col>
      <Grid.Col>
        Content 2
      </Grid.Col>
    </Grid.Row>
  </Grid>
);
