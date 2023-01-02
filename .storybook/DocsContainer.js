import React from "react";
import { DocsContainer as BaseContainer } from "@storybook/addon-docs/blocks";
import { useDarkMode } from "storybook-dark-mode";
import { BackToTop, TableOfContents } from "storybook-docs-toc";
import { themes } from "@storybook/theming";

import darkTheme from './Theme.dark';
import lightTheme from './Theme.light';

import { Badge } from '../src/components/Badge';
import { Group } from "../src/components/Group";

export const DocsContainer = ({ children, context }) => {
  const dark = useDarkMode();

  const path = context.title.split('/');
  const name = path[path.length - 1].trim();

  let parent = 'root';
  if (path.length > 1) {
    parent = path[path.length - 2].toLowerCase().trim();
  }

  // TODO: Smarter check. Can I pull the source folder path?
  let isComponent = [
    'layout', 'components', 'utilities', 'bux stuff', 'forms'
  ].indexOf(parent) >= 0 && name !== 'Overview';

  console.debug(context);

  // TODO: I want to use @decorators in the docs for components
  // to mark them as beta, alpha, whatever. As well as various
  // other flags (atomics) so we don't do that in stories.
  // But that gets stripped via Storybook
  // (see: https://github.com/storybookjs/storybook/issues/18162)

  // So, FOR NOW, I have a hacky syntax for RUI decorators
  // where I hide the decorators in HTML comments so they don't
  // get parsed out.
  const atomics = [...(context.component?.__docgenInfo.description.matchAll(
    /@ruiAtomic\s+(\w+)/g
  )) ?? []];
  console.debug(atomics);

  const status = [...(context.component?.__docgenInfo.description.matchAll(
    /@ruiStatus\s+(\w+)/g
  )) ?? []];
  console.debug(status);

  const isPolymorphic = context.component?.__docgenInfo.description.indexOf('@ruiPolymorphic') >= 0;

  return (
    <div data-theme={useDarkMode() ? 'dark' : 'light'}>
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
        {isComponent &&
        <code className="rui-import">
          import &#123; {name} &#125; from '@osuresearch/ui'
        </code>
        }

        <Group mb="lg">
          {atomics.map((atomic) =>
            <Badge>Atomic: {atomic[1]}</Badge>
          )}

          {status.map((value) =>
            <Badge>Status: {value[1]}</Badge>
          )}

          {isPolymorphic &&
            <Badge>Polymorphic</Badge>
          }
        </Group>

        <TableOfContents className="rui-toc" />
        {children}
        <BackToTop className="rui-top" />
      </BaseContainer>
    </div>
  );
};
