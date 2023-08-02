import { Source, Stories } from '@storybook/blocks';
import { ExternalLink } from 'src/components';

import React from 'react';

import { Stack, Typography } from '@mui/material';

import { RUIMeta, getComponentSpecs } from './utils';

export function MUIDocsContainer({ meta }: { meta: RUIMeta<any> }) {
  const { name, parent, atomics, status, isPolymorphic, isInternal, isDev } =
    getComponentSpecs(meta);

  const hasAdditionalStories = true; // meta.componentStoriesValue.length > 1;

  const slug = name.replace(/[A-Z]/g, (x) => '-' + x.toLowerCase());

  // TODO: Link to MUI docs
  return (
    <Stack p={4}>
      <Typography variant="h1">{name}</Typography>
      <Source code={`import { ${name} } from "@mui/material"`} />
      <Typography>
        Read the documentation at{' '}
        <ExternalLink href={`https://mui.com/material-ui/react${slug}`}>
          https://mui.com/material-ui/react{slug}
        </ExternalLink>
      </Typography>

      <Stories title="" />
    </Stack>
  );
}
