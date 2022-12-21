import React from "react";
import { DocsContainer as BaseContainer } from "@storybook/addon-docs/blocks";
import { useDarkMode } from "storybook-dark-mode";
import { themes } from "@storybook/theming";

import darkTheme from './Theme.dark';
import lightTheme from './Theme.light';

export const DocsContainer = ({ children, context }) => {
  const dark = useDarkMode();

  return (
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
      <div className={useDarkMode() ? 'dark' : 'light'}>
        {children}
      </div>
    </BaseContainer>
  );
};
