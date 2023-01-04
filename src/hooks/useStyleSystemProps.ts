import { StyleSystemPropName, StyleSystemProps, styleSystemPropNames } from '~/types';

/**
 * Extract style system props from the given prop set.
 *
 * This allows just the style system props to be safely passed down a chain
 * of components to the final resolver while leaving the rest of the props
 * available for other elements.
 */
export function useStyleSystemProps<T extends Record<string, any>>(
  props: T
): [StyleSystemProps, T] {
  const styleSystemProps: StyleSystemProps = Object.keys(props)
    .filter((key) => styleSystemPropNames.indexOf(key as any) >= 0)
    .reduce((v, k) => ((v[k] = props[k]), v), {} as Record<string, any>);

  const otherProps = Object.keys(props)
    .filter((key) => styleSystemPropNames.indexOf(key as any) < 0)
    .reduce((v, k) => ((v[k] = props[k]), v), {} as Record<string, any>) as T;

  return [styleSystemProps, otherProps];
}
