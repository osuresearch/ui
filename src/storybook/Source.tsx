
import React from 'react';

import {
  Source as SBSource,
  SourceProps
} from '@storybook/blocks';

// TODO: Get source blocks to match theme.
// Ref: https://github.com/storybookjs/storybook/issues/9641

export function Source(props: SourceProps) {
  // const { error } = props as SourceErrorProps;
  // if (error) {
  //   return <EmptyBlock>{error}</EmptyBlock>;
  // }

  // const { language, code, dark, format, ...rest } = props;

  // const syntaxHighlighter = (
  //   <StyledSyntaxHighlighter
  //     bordered
  //     copyable
  //     format={format}
  //     language={language}
  //     className="docblock-source"
  //     {...rest}
  //   >
  //     {code}
  //   </StyledSyntaxHighlighter>
  // );
  // if (typeof dark === 'undefined') {
  //   return syntaxHighlighter;
  // }
  // const overrideTheme = dark ? themes.dark : themes.light;
  // return <ThemeProvider theme={convert(overrideTheme)}>{syntaxHighlighter}</ThemeProvider>;

}
