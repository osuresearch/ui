import React from "react";
import { useDarkMode } from "storybook-dark-mode";
import { BackToTop, TableOfContents } from "storybook-docs-toc";

import {
  DocsContainer as BaseContainer,
  DocsContainerProps,
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  Controls
} from '@storybook/blocks';

import { RUIProvider } from '../components/RUIProvider';
import { Chip } from '../components/Chip';
import { Stack } from '../components/Stack';
import { Group } from '../components/Group';
import { Link } from '../components/Link';
import { Text } from '../components/Text';
import { Code } from '../components/Code';
import { Divider } from '../components/Divider';
import { Space } from '../components/Space';
import { TabPanel } from '../components/TabPanel';
import { Item } from '../components/Item';
import { Admonition } from '../components/Admonition';
import { Prose } from '../components/Prose';
import { Heading } from '../components/Heading';
import { RUIMeta } from "./utils";

import light from './Theme.light';
import dark from './Theme.dark';

import '../theme/index.css';
import './hacks.css';

function getDocgenInfo(meta: RUIMeta<any>) {
  if ((meta.component as any).__docgenInfo !== undefined) {
    return (meta.component as any).__docgenInfo;
  }

  return {
    description: '',
    displayName: '',
    props: {}
  }
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
  const atomics = [...(docgen.description.matchAll(
    /@ruiAtomic\s+(.*)-->/g
  ))];

  const status = [...(docgen.description.matchAll(
    /@ruiStatus\s+(.*)-->/g
  ))];

  const isPolymorphic = docgen.description.indexOf('@ruiPolymorphic') >= 0;
  const isInternal = (meta.title ?? '').indexOf('Internal') === 0;
  const isDev = status.length > 0 && status[0][1].trim() === 'In Development';

  const path = (meta.title ?? '').split('/');
  const name = path[path.length - 1].trim();

  let parent = 'root';
  if (path.length > 1) {
    parent = path[path.length - 2].toLowerCase().trim();
  }

  return {
    name,
    parent,
    atomics,
    status,
    isPolymorphic,
    isInternal,
    isDev,
  }
}

function DocsFooter() {
  return (
    <Stack gap={0} align="stretch">
      <Divider />

      <Group justify="apart">
        <Text fs="xs" c="neutral-subtle" style={{ whiteSpace: 'nowrap' }}>
          {useDarkMode() ? '✨ ' : '💖 '}
          <Link href="https://github.com/McManning" target="_blank">
            Chase McManning
          </Link> and <Link href="https://github.com/osuresearch/ui/graphs/contributors" target="_blank">
            contributors
          </Link>
        </Text>
        <Text fs="xs" c="neutral-subtle">
          If you have a disability and experience difficulty accessing this content,
          contact <Link href="mailto:oraccessibility@osu.edu">oraccessibility@osu.edu</Link>
        </Text>
      </Group>
    </Stack>
  );
}

export function ComponentContainer({ meta }: { meta: RUIMeta<any> }) {
  const { name, parent, atomics, status, isPolymorphic, isInternal, isDev } = getComponentSpecs(meta);

  const hasAdditionalStories = true; // meta.componentStoriesValue.length > 1;

  return (
    <>
      {isInternal && (
        <Admonition variant="caution" mb="lg">
          This is an internal component to Research UI and the API is not guaranteed to
          be stable between minor releases. Usage by consumers is strongly discouraged.
        </Admonition>
      )}

      {isDev && (
        <Admonition variant="caution" title="In development" mb="lg">
          This is an in development component in the Research UI
          and the API is not guaranteed to be stable between minor releases.
        </Admonition>
      )}

      <Stack gap="lg" align="stretch">
        <Group>
          <Heading level={1}>{name}</Heading>
          <Group>
            {atomics.map((atomic, i) =>
              <Chip key={i} c="accent06">Atomic: {atomic[1]}</Chip>
            )}

            {status.map((value, i) =>
              <Chip key={i} c="accent01">Status: {value[1]}</Chip>
            )}

            {isPolymorphic &&
              <Chip c="accent03">Polymorphic</Chip>
            }
          </Group>
        </Group>

        <Stack>
          <Code>
            import &#123; {name} &#125; from &quot;@osuresearch/ui&quot;
          </Code>
          <Prose>
            <Description />
          </Prose>
        </Stack>

        {/* <Primary /> */}

        <TabPanel variant="simple" align="stretch">
          {hasAdditionalStories &&
          <Item key="examples" title="Examples">
            <Stories title="" />
          </Item>
          }
          <Item key="props" title="Props">
            <Space />
            <Controls />
          </Item>
          {/* <Item key="ctx" title="Storybook Context">
            <pre>
              <code>
                {JSON.stringify(context, undefined, 2)}
              </code>
            </pre>
          </Item> */}
        </TabPanel>
      </Stack>
    </>
  );
}

function MDXContainer({ meta, children }: any) {
  return (
    <Prose>
      {children}
    </Prose>
  )
}

export function DocsContainer({ children, ...props }: any) {
  const meta = props.context.attachedCSFFile.meta as RUIMeta<any>;
  const darkMode = useDarkMode();

  const isComponent = meta.component !== undefined;

  console.log(props.context);

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

        {/* @ts-ignore className *does* work, it's just not typed right */}
        <BackToTop className="rui-top" />

      </BaseContainer>
    </RUIProvider>
  )
};
