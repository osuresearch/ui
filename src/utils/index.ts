import classNames from 'classnames';

// Re-export mergeProps, we use it everywhere.
export { mergeProps } from '@react-aria/utils';

export * from './polymorphics';
export * from './createPolymorphicComponent';
export * from './theme';

export function cx(...args: classNames.ArgumentArray): string {
  return classNames(args);
}

/**
 * Your typical ref merge. This version supports our polymorphic refs.
 */
export function mergeRefs<T = any>(
  ...refs: Array<React.MutableRefObject<T> | React.LegacyRef<T> | undefined>
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null && ref !== undefined) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}

// TODO: Support var args. I'd like a single
// const [margin, padding, ...rest] = splitProps(props, marginProps, paddingProps, ...)
export function splitProps<P extends { [K: string]: any }>(propNames: readonly string[], props: P) {
  const names = Object.keys(props);
  const matched = names
    .filter((k) => propNames.indexOf(k) >= 0)
    .reduce((a, k) => ((a[k] = props[k]), a), {} as { [K: string]: any });

  const unmatched = names
    .filter((k) => propNames.indexOf(k) < 0)
    .reduce((a, k) => ((a[k] = props[k]), a), {} as { [K: string]: any });

  return [matched, unmatched];
}
