import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Paper } from '../Paper';
import { Stack } from '../Stack';
import { Grid, GridProps } from './Grid';

export default RUIComponentMeta<GridProps>('Layout', Grid).withStyleSystemProps();

export const Overview = RUIComponentStory<GridProps>(
  (args) => (
    <Grid {...args}>
      <Paper as="header" bgc="aqua" c="aqua-contrast" gridArea="header">
        Header
      </Paper>
      <Paper as="aside" bgc="green" c="green-contrast" gridArea="aside">
        Aside
      </Paper>
      <Paper as="main" bgc="gold" c="gold-contrast" gridArea="content">
        Content
      </Paper>
      <Paper as="footer" bgc="teal" c="teal-contrast" gridArea="footer">
        Footer
      </Paper>
    </Grid>
  ),
  {
    h: '450px',
    areas: ['header  header', 'aside   content', 'footer  footer'],
    columns: ['1fr', '3fr'],
    rows: ['80px', 'auto', '100px'],
    gap: 'sm'
  }
);

export const Responsive = RUIComponentStory(Overview, {
  h: '450px',
  areas: {
    sm: ['header', 'content', 'aside', 'footer'],
    md: ['header  header', 'aside   content', 'footer  footer']
  },
  columns: {
    sm: ['auto'],
    md: ['1fr', '3fr']
  },
  rows: {
    sm: ['50px', 'auto', 'auto', '100px'],
    md: ['80px', 'auto', '100px']
  },
  gap: {
    sm: 'xs',
    md: 'sm'
  }
}).withDescription(
  'All layout properties support responsive objects to allow per-breakpoint changes'
);

export const TwelveColumns = RUIComponentStory<GridProps>(
  (args) => (
    <Stack gap="sm">
      <Grid {...args}>
        <Paper bgc="aqua" c="aqua-contrast" gridSpan={{ sm: 12, md: 8 }}>
          sm 12, md 8
        </Paper>
        <Paper bgc="aqua" c="aqua-contrast" gridSpan={{ sm: 6, md: 4 }}>
          sm 6, md 4
        </Paper>
      </Grid>
      <Grid {...args}>
        <Paper bgc="gold" c="gold-contrast" gridSpan={{ sm: 6, md: 4 }}>
          sm 6, md 4
        </Paper>
        <Paper bgc="gold" c="gold-contrast" gridSpan={{ sm: 6, md: 4 }}>
          sm 6, md 4
        </Paper>
        <Paper bgc="gold" c="gold-contrast" gridSpan={{ sm: 6, md: 4 }}>
          sm 6, md 4
        </Paper>
      </Grid>
      <Grid {...args}>
        <Paper bgc="orange" c="orange-contrast" gridSpan={6}>
          sm 6
        </Paper>
        <Paper bgc="orange" c="orange-contrast" gridSpan={6}>
          sm 6
        </Paper>
      </Grid>
    </Stack>
  ),
  {
    h: '150px',
    columns: ['repeat(12, minmax(0, 1fr))'],
    gap: 'sm'
  }
).withDescription(`
  For the traditional 12 column grid experience, you can use the style system prop \`gridSpan\`
  to define per-breakpoint column spans.
`);

// https://getbootstrap.com/docs/5.0/layout/grid/#mix-and-match
