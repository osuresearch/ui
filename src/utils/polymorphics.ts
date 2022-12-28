import { forwardRef } from 'react';

// Part of this implementation was built off of:
// https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/

/**
 * An element that can be the `as` prop of a polymorphic component.
 *
 * This supports all intrinsic elements, class components, and function components.
 */
type AllowableElementType = React.ElementType;

type AsProp<C extends AllowableElementType> = {
  /**
   * An element that can be the target of a polymorphic component.
   *
   * This supports all intrinsic elements, class components, and functional components.
   */
  as?: C;
};

type PolymorphicComponentProp<C extends AllowableElementType, Props = Record<string, never>> =
  React.PropsWithChildren<Props & AsProp<C>> &
    Omit<React.ComponentPropsWithoutRef<C>, keyof (AsProp<C> & Props)>;

type PolymorphicComponentPropWithRef<
  C extends AllowableElementType,
  Props = Record<string, never>
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

export type PolymorphicRef<C extends AllowableElementType> = React.ComponentPropsWithRef<C>['ref'];

/**
 * Factory to build a component with polymorph props and ref forwarding.
 */
export function createPolymorphicComponentV2<DefaultType extends AllowableElementType, Props>(
  component: <ElementType extends AllowableElementType>(
    props: PolymorphicComponentProp<ElementType, Props>,
    ref: PolymorphicRef<ElementType>
  ) => React.ReactNode
) {
  return forwardRef(component as any) as <ElementType extends AllowableElementType = DefaultType>(
    props: PolymorphicComponentPropWithRef<ElementType, Props>
  ) => React.ReactElement | null;
}
