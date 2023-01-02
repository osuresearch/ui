import { StyleSystemPropName, StyleSystemProps, styleSystemPropNames } from '~/types';

/**
 * Extract style system props from the given prop set.
 *
 * This allows just the style system props to be safely passed down a chain
 * of components to the final resolver.
 */
export function useStyleSystemProps(props: Record<string, any>): StyleSystemProps {
  return Object.keys(props)
    .filter((k) => styleSystemPropNames.indexOf(k as StyleSystemPropName) >= 0)
    .reduce((a, k) => ((a[k] = props[k]), a), {} as { [K: string]: any });
}
