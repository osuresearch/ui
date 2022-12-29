import { forwardRef } from 'react';

export type AsProp<C extends React.ElementType> = {
  as?: C;
};

export type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicComponentProp<C extends React.ElementType, Props = Record<string, never>> =
  Props &
    AsProp<C> & { children?: any } & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;
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
 * This ensures type safety when matching the `as` prop against the polymorphic element
 */
export function polymorphicForwardRef<P = Record<string, never>>(
  render: PolymorphicForwardRefRenderFunction<P>
) {
  return forwardRef(render) as <C extends React.ElementType = 'div'>(
    props: PolymorphicComponentPropWithRef<C, P>
  ) => React.ReactElement | null;
}
