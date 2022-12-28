import React from 'react';

type ExtendedProps<Props = Record<string, never>, OverrideProps = Record<string, never>> =
  OverrideProps & Omit<Props, keyof OverrideProps>;

type ElementType = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;

type PropsOf<C extends ElementType> = JSX.LibraryManagedAttributes<
  C,
  React.ComponentPropsWithoutRef<C>
>;

type ComponentProp<C> = {
  /** Polymorphic DOM element to use */
  component?: C;
};

type InheritedProps<C extends ElementType, Props = Record<string, never>> = ExtendedProps<
  PropsOf<C>,
  Props
>;

type PolymorphicRef<C> = C extends React.ElementType
  ? React.ComponentPropsWithRef<C>['ref']
  : never;

type PolymorphicComponentProps<C, Props = Record<string, never>> = C extends React.ElementType
  ? InheritedProps<C, Props & ComponentProp<C>> & { ref?: PolymorphicRef<C> }
  : Props & { component: React.ElementType };

/**
 * Wrap a component to support a polymorphic DOM element
 *
 * @author Mantine.dev <https://github.com/mantinedev/mantine>
 */
export function createPolymorphicComponent<
  ComponentDefaultType,
  Props,
  StaticComponents = Record<string, never>
>(component: any) {
  type ComponentProps<C> = PolymorphicComponentProps<C, Props>;

  type _PolymorphicComponent = <C = ComponentDefaultType>(
    props: ComponentProps<C>
  ) => React.ReactElement;

  type ComponentProperties = Omit<React.FunctionComponent<ComponentProps<any>>, never>;

  type PolymorphicComponent = _PolymorphicComponent & ComponentProperties & StaticComponents;

  return component as PolymorphicComponent;
}
