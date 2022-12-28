import { StyleSystemProps, styleSystemPropNames } from '../types';

/**
 * Extract style system props into a separate object
 */
export function useStyleSystem(props: Record<string, any>) {
  const styleSystemProps: StyleSystemProps = Object.keys(props)
    .filter((key) => styleSystemPropNames.indexOf(key as any) >= 0)
    .reduce((v, k) => ((v[k] = props[k]), v), {} as Record<string, any>);

  const otherProps = Object.keys(props)
    .filter((key) => styleSystemPropNames.indexOf(key as any) < 0)
    .reduce((v, k) => ((v[k] = props[k]), v), {} as Record<string, any>);

  // TODO: Rest of the style system... things?

  return {
    styleSystemProps,
    otherProps
  };
}
