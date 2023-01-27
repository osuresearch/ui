import React, { ForwardRefRenderFunction } from 'react';

/**
 * Render prop slot on a component
 */
export type SlotProp<Props> = React.ReactNode | ((props: Props) => React.ReactNode);

export type SlotPropWithRef<Ref, Props> = ForwardRefRenderFunction<Ref, Props>;
// (props: P, ref: ForwardedRef<T>): ReactElement | null;

// Basically a variant on TypeScript's builtin Parameters<Type>
// but we group everything into a single props param
export type SlotRenderer<T extends (props: any) => any> = T extends (args: infer P) => any
  ? P
  : never;

/**
 * Extract and convert slot props into render props
 */
export function useSlots<Props extends Record<string, any>>(props: Props) {
  // Run through all slots and reduce to render components
  const slotProps = Object.keys(props)
    .filter((k) => k.endsWith('Slot'))
    .reduce((a, k) => {
      const slot = props[k];

      if (typeof slot === 'function') {
        a[k] = slot;
      } else {
        // TODO: Can we pass it down as props?
        a[k] = () => slot;
      }

      return a;
    }, {} as Record<string, any>);

  // Re-type props over to render components
  // We also make sure we carry the P from each SlotProps<P>
  // into the renderer type to keep types strict

  type Param<K extends keyof Props> = SlotRenderer<Props[K]>;

  return slotProps as {
    [K in keyof Props]: (props: Param<K>) => JSX.Element;
  };
}
