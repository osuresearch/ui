import { useLayoutEffect, useState } from 'react';

import { Theme } from '~/types';

export function useTheme(): Theme {
  const [theme, setTheme] = useState<Theme>('light');

  useLayoutEffect(() => {
    // TODO: More efficient method. This is terrible
    // but I need something to work with atm.
    // Will probably use a context + global RUI provider
    // that also handles all the other stuff we need (toast portals, etc)

    const el = document.querySelector('[data-theme]');
    if (el) {
      setTheme(el.getAttribute('data-theme') as Theme);
    }
  }, []);

  return theme;
}
