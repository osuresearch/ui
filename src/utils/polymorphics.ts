import { forwardRef } from 'react';

export type AsProp<C extends React.ElementType> = {
  /**
   * Change the root element of this component to either
   * an intrinsic element or React component.
   */
  as?: C;
};

type ComponentPropsWithoutAs<P = Record<string, never>> =
  P extends any
    ? ('as' extends keyof P
        ? Omit<P, 'as'>
        : P
      )
    : P;

export type PolymorphicComponentProp<C extends React.ElementType, Props = Record<string, never>> =
  Props & ComponentPropsWithoutAs<React.ComponentPropsWithoutRef<C>> & AsProp<C>;

// TODO: Extract children proptype from Props instead of using 'any' above.
// Some components, such as Unstyled List, use a narrower type for children.

export type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = Record<string, never>
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

export type PolymorphicForwardRefRenderFunction<P> = <C extends React.ElementType, R extends P>(
  props: PolymorphicComponentPropWithRef<C, R>,
  ref?: PolymorphicRef<C>
) => React.ReactElement | null;

/**
 * Construct a forward ref component that can be used as a polymorphic.
 *
 * This ensures type safety when matching the `as` prop against the polymorphic element.
 *
 * The template parameter `T` ensures that TypeScript understands the default type when
 * one is not specified - in order to validate properties on the underlying element.
 *
 * Your implementation MUST fallback to the same type as `T` when an `as` prop is not specified.
 */
export function polymorphicForwardRef<T extends React.ElementType, P = Record<string, never>>(
  render: PolymorphicForwardRefRenderFunction<P>
) {
  return forwardRef(render) as <C extends React.ElementType = T>(
    props: PolymorphicComponentPropWithRef<C, P>
  ) => React.ReactElement | null;
}
