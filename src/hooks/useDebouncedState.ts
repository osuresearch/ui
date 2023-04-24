import { useEffect, useRef, useState } from 'react';

/**
 * @author mantine.dev
 */
export function useDebouncedState<T = any>(
  defaultValue: T,
  wait: number,
  options = { leading: false }
) {
  const [value, setValue] = useState(defaultValue);
  const timeoutRef = useRef<number>(0);
  const leadingRef = useRef(true);

  useEffect(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  }, []);

  const debouncedSetValue = (newValue: T) => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    if (leadingRef.current && options.leading) {
      setValue(newValue);
    } else {
      timeoutRef.current = window.setTimeout(() => {
        leadingRef.current = true;
        setValue(newValue);
      }, wait);
    }
    leadingRef.current = false;
  };

  return [value, debouncedSetValue] as const;
}
