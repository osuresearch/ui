import { FocusableElement } from '@react-types/shared';
import React, { forwardRef, useRef } from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Box, BoxProps } from './Box';

export default RUIComponentMeta<BoxProps>('Layout', Box)
  .withStyleSystemProps()
  .withBadge('atom')
  .withBadge('stable');

export const Overview = RUIComponentStory<BoxProps>((args) => (
  <Box {...args}>Lorem ipsum blah blah blah</Box>
));

export const AsParagraph = RUIComponentStory<BoxProps>((args) => (
  <Box as="p" {...args}>
    Lorem ipsum blah blah blah
  </Box>
));

export const AsAnchor = RUIComponentStory<BoxProps>((args) => (
  <Box as="a" href="https://research.osu.edu" {...args}>
    research.osu.edu
  </Box>
));

export const WithRef = RUIComponentStory<BoxProps>((args) => {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Box ref={ref} as="a" href="https://research.osu.edu" referrerPolicy="" {...args}>
      research.osu.edu
    </Box>
  );
});

export const WithMultipleChildren = RUIComponentStory<BoxProps>((args) => (
  <Box as="a" href="https://research.osu.edu" {...args}>
    <div>Foo</div>
    <div>Bar</div>
  </Box>
));

function useFocusableElementRef(ref: React.RefObject<FocusableElement>) {
  // noop
  // React-Aria uses this pattern often for refs into its hooks.
}

type MyComponentProps = {
  children?: React.ReactNode;
};

const MyComponent = ({ children }: MyComponentProps) => <div>{children}</div>;

export const AsCustom = RUIComponentStory<BoxProps>((args) => (
  <Box as={MyComponent} {...args}>
    research.osu.edu
  </Box>
));

const MyComponentWithRef = forwardRef<HTMLTableElement, MyComponentProps>(({ children }, ref) => (
  <table ref={ref}>{children}</table>
));

export const AsCustomWithRef = RUIComponentStory<BoxProps>((args) => {
  const ref = useRef<HTMLTableElement>(null);

  return (
    <Box as={MyComponentWithRef} ref={ref} {...args}>
      research.osu.edu
    </Box>
  );
});

export const WithInvalidRef = RUIComponentStory<BoxProps>((args) => {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    // @ts-ignore expect this to be an invalid ref
    <Box ref={ref} as="a" href="https://research.osu.edu" {...args}>
      research.osu.edu
    </Box>
  );
});

export const WithFocusableRef = RUIComponentStory<BoxProps>((args) => {
  const ref = useRef<FocusableElement>(null);
  const ref2 = useRef<React.ElementType<FocusableElement>>(null);
  const ref3 = useRef<HTMLAnchorElement>(null);
  const ref4 = useRef<HTMLTableElement>(null);

  // I guess the idea is that it'd only be polymorphable to
  // native DOM elements, not our own that may or may not
  // spread props correctly... safer tbh. But.. complex to deal with :/

  useFocusableElementRef(ref);
  useFocusableElementRef(ref3);
  useFocusableElementRef(ref4);

  return (
    <Box ref={ref3} as="a" href="https://research.osu.edu" {...args}>
      research.osu.edu
      <MyComponentWithRef ref={ref4}>ref component</MyComponentWithRef>
    </Box>
  );
});

// Test case that shows my implementation still needs the same
// Typescript workaround that Mantine has implemented
// Ref: https://mantine.dev/guides/polymorphic/#with-typescript
export const WithOnClick = RUIComponentStory<BoxProps>((args) => (
  <Box<'button'>
    as="button"
    onClick={(event) => console.log(event)}
    ref={(node) => console.log(node)}
    {...args}
  >
    button element
  </Box>
));
