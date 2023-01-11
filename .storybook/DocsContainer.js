import React from "react";
import { useDarkMode } from "storybook-dark-mode";
import { BackToTop, TableOfContents } from "storybook-docs-toc";
import { themes } from "@storybook/theming";

import {
  DocsContainer as BaseContainer,
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';

import darkTheme from './Theme.dark';
import lightTheme from './Theme.light';

import { RUIProvider } from '../src/components/RUIProvider';
import { Chip } from '../src/components/Chip';
import { Stack } from '../src/components/Stack';
import { Group } from '../src/components/Group';
import { Link } from '../src/components/Link';
import { Text } from '../src/components/Text';
import { Code } from '../src/components/Code';
import { Divider } from '../src/components/Divider';
import { Space } from '../src/components/Space';
import { TabPanel } from '../src/components/TabPanel';
import { Item } from '../src/components/Item';
import { Image } from '../src/components/Image';

export const DocsContainer = ({ children, context }) => {
  const dark = useDarkMode();

  const path = context.title.split('/');
  const name = path[path.length - 1].trim();

  let parent = 'root';
  if (path.length > 1) {
    parent = path[path.length - 2].toLowerCase().trim();
  }

  const isComponent = context.component !== undefined
    && context.component.__docgenInfo !== undefined;

  // TODO: I want to use @decorators in the docs for components
  // to mark them as beta, alpha, whatever. As well as various
  // other flags (atomics) so we don't do that in stories.
  // But that gets stripped via Storybook
  // (see: https://github.com/storybookjs/storybook/issues/18162)

  // So, FOR NOW, I have a hacky syntax for RUI decorators
  // where I hide the decorators in HTML comments so they don't
  // get parsed out.
  const atomics = isComponent && [...(context.component?.__docgenInfo.description.matchAll(
    /@ruiAtomic\s+(\w+)/g
  )) ?? []];

  const status = isComponent && [...(context.component?.__docgenInfo.description.matchAll(
    /@ruiStatus\s+(\w+)/g
  )) ?? []];

  const isPolymorphic = isComponent && context.component?.__docgenInfo.description.indexOf('@ruiPolymorphic') >= 0;
  console.log(context, context.componentStories());

  const hasAdditionalStories = context.componentStories().length > 1;

  // Base container ref:
  // https://github.com/storybookjs/storybook/blob/d772d382f8a26ab1d31b876239e3a3613c106e3b/code/ui/blocks/src/blocks/DocsContainer.tsx

  return (
    <RUIProvider theme={useDarkMode() ? 'dark' : 'light'}>
      <BaseContainer
        context={{
          ...context,
          storyById: (id) => {
            const storyContext = context.storyById(id);
            return {
              ...storyContext,
              parameters: {
                ...storyContext?.parameters,
                docs: {
                  ...storyContext?.parameters?.docs,
                  theme: dark ? darkTheme : lightTheme,
                },
              },
            };
          },
        }}
      >
        <TableOfContents title="On this page" className="rui-toc" />

        <Stack gap={0} style={{ paddingRight: 200, height: '100%' }} align="stretch" justify="apart">

          {/* Markdown or MDX documentation page */}
          {!isComponent &&
          <Stack gap={0} align="stretch">
            {children}
          </Stack>
          }

          {/* Refactor of component docs layout */}
          {isComponent && (
          <Stack gap="lg" align="stretch">
            <Group align="center">
              <Title />
              <Group>
                {atomics.map((atomic) =>
                  <Chip>Atomic: {atomic[1]}</Chip>
                )}

                {status.map((value) =>
                  <Chip>Status: {value[1]}</Chip>
                )}

                {isPolymorphic &&
                  <Chip c="green" as="a" href="/?path=/docs/getting-started-polymorphic-components--page">Polymorphic</Chip>
                }
              </Group>
            </Group>

            <Subtitle />

            <Stack>
              <Code>
                import &#123; {name} &#125; from '@osuresearch/ui'
              </Code>
            </Stack>

            {/* TODO: Somehow split description up */}
            <Description />

            {/* SVG diagram, if one exists */}
            <Image
              src={`./${name}.svg`}
              alt={`Component diagram for ${name}`}
            />

            <Primary />

            <TabPanel variant="simple" align="stretch">
              {hasAdditionalStories &&
              <Item key="examples" title="Examples">
                <Space h="xl" />
                <Stories title="Examples" />
              </Item>
              }
              <Item key="props" title="Props">
                <Space />
                <ArgsTable story={PRIMARY_STORY} />
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
          )}

          <Stack gap={0} align="stretch">
            <Divider />

            <Group justify="apart">
              <Text fs="xs" c="dark" style={{ whiteSpace: 'nowrap' }}>
                {useDarkMode() ? '✨ ' : '💖 '}
                <Link href="https://github.com/McManning" target="_blank">
                  Chase McManning
                </Link> and <Link href="https://github.com/osuresearch/ui/graphs/contributors" target="_blank">
                  contributors
                </Link>
              </Text>
              <Text fs="xs" c="dark">
                If you have a disability and experience difficulty accessing this content,
                contact <Link href="mailto:oraccessibility@osu.edu">oraccessibility@osu.edu</Link>
              </Text>
            </Group>
          </Stack>
        </Stack>

        <BackToTop className="rui-top" />

      </BaseContainer>
    </RUIProvider>
  );
};
