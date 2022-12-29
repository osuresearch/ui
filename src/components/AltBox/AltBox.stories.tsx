import { DOMAttributes, FocusableElement, FocusableRef, Node } from '@react-types/shared';
import React, { forwardRef, useRef } from 'react';

import { AltBoxProps, AltBox as Component } from '@osuresearch/ui';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<AltBoxProps<'div'>>('Utilities', Component)
  .withStyleSystemProps()
  .withBadge('experimental');

export const Overview = RUIComponentStory<AltBoxProps<'div'>>((args) => (
  <Component {...args}>Lorem ipsum blah blah blah</Component>
));

export const AsParagraph = RUIComponentStory<AltBoxProps<'p'>>((args) => (
  <Component as="p" {...args}>
    Lorem ipsum blah blah blah
  </Component>
));

export const AsAnchor = RUIComponentStory<AltBoxProps<'a'>>((args) => (
  <Component as="a" href="https://research.osu.edu" {...args}>
    research.osu.edu
  </Component>
));

export const WithRef = RUIComponentStory<AltBoxProps<'a'>>((args) => {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Component ref={ref} as="a" href="https://research.osu.edu" referrerPolicy="" {...args}>
      research.osu.edu
    </Component>
  );
});

export const WithMultipleChildren = RUIComponentStory<AltBoxProps<'a'>>((args) => (
  <Component as="a" href="https://research.osu.edu" {...args}>
    <div>Foo</div>
    <div>Bar</div>
  </Component>
));

function useFocusableElementRef(ref: React.RefObject<FocusableElement>) {
  // noop
  // React-Aria uses this pattern often for refs into its hooks.
}

type MyComponentProps = {
  children?: React.ReactNode;
};

const MyComponent = ({ children }: MyComponentProps) => <div>{children}</div>;

export const AsCustom = RUIComponentStory<AltBoxProps<typeof MyComponent>>((args) => (
  <Component as={MyComponent} {...args}>
    research.osu.edu
  </Component>
));

const MyComponentWithRef = forwardRef<HTMLTableElement, MyComponentProps>(({ children }, ref) => (
  <table ref={ref}>{children}</table>
));

export const AsCustomWithRef = RUIComponentStory<AltBoxProps<typeof MyComponentWithRef>>((args) => {
  const ref = useRef<HTMLTableElement>(null);

  return (
    <Component as={MyComponentWithRef} ref={ref} {...args}>
      research.osu.edu
    </Component>
  );
});

export const WithSlot = RUIComponentStory<AltBoxProps<'a'>>((args) => {
  const ref = useRef<HTMLDivElement>(null);

  useFocusableElementRef(ref);

  return (
    <Component as="a" href="#" headerSlot={({ title }) => <div>header slot: {title}</div>}>
      content
    </Component>
  );
});

export const WithInvalidRef = RUIComponentStory<AltBoxProps<'a'>>((args) => {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <Component ref={ref} as="a" href="https://research.osu.edu" {...args}>
      research.osu.edu
    </Component>
  );
});

export const WithFocusableRef = RUIComponentStory<AltBoxProps<'a'>>((args) => {
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
    <Component ref={ref3} as="a" href="https://research.osu.edu" {...args}>
      research.osu.edu
      <MyComponentWithRef ref={ref4}>ref component</MyComponentWithRef>
    </Component>
  );
});

export const WithSlotToFunc = RUIComponentStory<AltBoxProps<'a'>>((args) => {
  const ref = useRef<HTMLDivElement>(null);

  useFocusableElementRef(ref);

  return (
    <Component as="a" href="#" headerSlot={(props) => <div>slotted callback</div>}>
      content
    </Component>
  );
});

// Test case that shows my implementation still needs the same
// Typescript workaround that Mantine has implemented
// Ref: https://mantine.dev/guides/polymorphic/#with-typescript
export const WithOnClick = RUIComponentStory<AltBoxProps<'button'>>((args) => (
  <Component<'button'>
    as="button"
    onClick={(event) => console.log(event)}
    ref={(node) => console.log(node)}
    {...args}
  >
    button element
  </Component>
));
