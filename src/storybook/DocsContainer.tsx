import {
  ArgsTable,
  DocsContainer as BaseContainer,
  Controls,
  Description,
  DocsContainerProps,
  Primary,
  Source,
  Stories,
  Subtitle,
  Title,
} from '@storybook/blocks';
import { useDarkMode } from 'storybook-dark-mode';

import React from 'react';

import { Box, Divider, Link, Stack, Typography } from '@mui/material';

import { Item, Tabs } from '../components';
import { RUIProvider } from '../components/RUIProvider';
import { dark, light } from '../storybook/theme';
import { MUIDocsContainer } from './MUIDocsContainer';
import { RUIMeta, getComponentSpecs } from './utils';

function DocsFooter() {
  return (
    <Stack gap={0} alignItems="stretch" px={1}>
      <Divider />

      <Stack direction="row" justifyContent="space-between" p={1} gap={2}>
        <Typography fontSize={14} whiteSpace="nowrap">
          {useDarkMode() ? '✨ ' : '💖 '}
          <Link href="https://github.com/McManning" target="_blank">
            Chase McManning
          </Link>{' '}
          and{' '}
          <Link href="https://github.com/osuresearch/ui/graphs/contributors" target="_blank">
            contributors
          </Link>
        </Typography>
        <Typography fontSize={14}>
          If you have a disability and experience difficulty accessing this content, contact{' '}
          <Link href="mailto:oraccessibility@osu.edu">oraccessibility@osu.edu</Link>
        </Typography>
      </Stack>
    </Stack>
  );
}

export function ComponentContainer({ meta }: { meta: RUIMeta<any> }) {
  const { name, parent, atomics, status, isPolymorphic, isInternal, isDev, isMUI } =
    getComponentSpecs(meta);

  const hasAdditionalStories = true; // meta.componentStoriesValue.length > 1;

  if (isMUI) {
    return <MUIDocsContainer meta={meta} />;
  }

  return (
    <Stack p={4}>
      <Typography variant="h1">{name}</Typography>

      <Source code={`import { ${name} } from "@osuresearch/ui"`} />

      <Description />

      <Tabs>
        {hasAdditionalStories && (
          <Item key="examples" textValue="Examples">
            <Stories title="" />
          </Item>
        )}
        <Item key="props" textValue="Props">
          <Controls />
        </Item>
      </Tabs>
    </Stack>
  );
}

function MDXContainer({ meta, children }: any) {
  return <Stack p={4}>{children}</Stack>;
}

export function DocsContainer({ children, ...props }: any) {
  const meta = props.context.attachedCSFFile?.meta as RUIMeta<any>;
  const darkMode = useDarkMode();

  const isComponent = meta?.component !== undefined;

  return (
    <RUIProvider theme={darkMode ? 'dark' : 'light'}>
      <BaseContainer {...props} theme={darkMode ? dark : light}>
        {/* <Stack gap={0} style={{ paddingRight: 200, height: '100%' }} align="stretch" justify="apart"> */}
        {/* <div className="sb-unstyled typography"> */}
        <div className="sb-unstyled">
          {isComponent && <ComponentContainer meta={meta} />}
          {!isComponent && <MDXContainer meta={meta}>{children}</MDXContainer>}
          <DocsFooter />
        </div>
      </BaseContainer>
    </RUIProvider>
  );
}
