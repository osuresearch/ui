import React from "react";
import { DocsContainer as BaseContainer } from "@storybook/addon-docs/blocks";
import { useDarkMode } from "storybook-dark-mode";
import { BackToTop, TableOfContents } from "storybook-docs-toc";
import { themes } from "@storybook/theming";

import darkTheme from './Theme.dark';
import lightTheme from './Theme.light';

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
    'layout', 'components', 'utilities', 'bux stuff'
  ].indexOf(parent) >= 0 && name !== 'Overview';

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

        <TableOfContents className="rui-toc" />
        {children}
        <BackToTop className="rui-top" />
      </BaseContainer>
    </div>
  );
};
