import React from "react";
import { useDarkMode } from "storybook-dark-mode";
import { BackToTop, TableOfContents } from "storybook-docs-toc";
import { themes } from "@storybook/theming";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Controls,
  Stories,
} from '@storybook/blocks';

import { RUIProvider } from "../components";

export function DocsPage() {
  const dark = useDarkMode();

  const title = context.attachedCSFFile.meta.title;

  const path = title.split('/');
  const name = path[path.length - 1].trim();

  let parent = 'root';
  if (path.length > 1) {
    parent = path[path.length - 2].toLowerCase().trim();
  }

  const isComponent = context.component !== undefined
    && context.component.__docgenInfo !== undefined;


  return (
    <RUIProvider theme={useDarkMode() ? 'dark' : 'light'}>
      <Title />
      <Subtitle />
      <Description />
      <Primary />
      <Controls />
      <Stories />
    </RUIProvider>
  )
}
