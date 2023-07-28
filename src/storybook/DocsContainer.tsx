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
import dark from './Theme.dark';
import light from './Theme.light';
import { RUIMeta } from './utils';

function getDocgenInfo(meta: RUIMeta<any>) {
  if (meta && (meta.component as any).__docgenInfo !== undefined) {
    return (meta.component as any).__docgenInfo;
  }

  return {
    description: '',
    displayName: '',
    props: {},
  };
}

function getComponentSpecs(meta: RUIMeta<any>) {
  const docgen = getDocgenInfo(meta);

  // TODO: I want to use @decorators in the docs for components
  // to mark them as beta, alpha, whatever. As well as various
  // other flags (atomics) so we don't do that in stories.
  // But that gets stripped via Storybook
  // (see: https://github.com/storybookjs/storybook/issues/18162)

  // So, FOR NOW, I have a hacky syntax for RUI decorators
  // where I hide the decorators in HTML comments so they don't
  // get parsed out.
  const atomics = [...docgen.description.matchAll(/@ruiAtomic\s+(.*)-->/g)];

  const status = [...docgen.description.matchAll(/@ruiStatus\s+(.*)-->/g)];

  const isPolymorphic = docgen.description.indexOf('@ruiPolymorphic') >= 0;
  const isInternal = (meta.title ?? '').indexOf('Internal') === 0;
  const isDev = status.length > 0 && status[0][1].trim() === 'In Development';

  const path = (meta.title ?? '').split('/');
  const name = path[path.length - 1].trim();

  let parent = 'root';
  if (path.length > 1) {
    parent = path[path.length - 2].toLowerCase().trim();
  }

  const isMUI = parent.startsWith('mui');

  return {
    name,
    parent,
    atomics,
    status,
    isPolymorphic,
    isInternal,
    isDev,
    isMUI,
  };
}

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

  // TODO: Link to MUI docs
  if (isMUI) {
    return (
      <Stack p={4}>
        <Typography variant="h1">{name}</Typography>
        <Source code={`import { ${name} } from "@mui/material"`} />
        <Stories title="" />
      </Stack>
    );
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
    <RUIProvider>
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
