import { useContext, useEffect, useLayoutEffect, useState } from 'react';

import { RUIContext } from '~/components/RUIProvider';
import { Theme, ThemeProp } from '~/types';
import { resolveThemeProp } from '~/utils';

export function useTheme() {
  const { theme, setTheme } = useContext(RUIContext);

  return {
    theme,
    setTheme,
    resolve: <T>(prop: ThemeProp<T>) => resolveThemeProp(prop, theme)
  };
}
