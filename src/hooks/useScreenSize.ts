import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

import { ResponsiveProp, ScreenSize, screenSize } from '~/types';
import { resolveResponsiveProp } from '~/utils';

import * as tailwind from '../../tailwind.config';

export function useScreenSize() {
  const screens = tailwind.theme?.screens as Record<ScreenSize, string>;

  // TODO: Clean this up.
  const sm = true;
  const md = useMediaQuery({ minWidth: screens.md });
  const lg = useMediaQuery({ minWidth: screens.lg });
  const xl = useMediaQuery({ minWidth: screens.xl });
  const xxl = useMediaQuery({ minWidth: screens.xxl });

  const active = [sm, md, lg, xl, xxl];
  const current = screenSize[active.indexOf(false) - 1];

  // current, matrix and tools
  return useMemo(
    () => ({
      current,
      breakpoints: { sm, md, lg, xl, xxl },
      resolve: <T>(prop: ResponsiveProp<T>) => resolveResponsiveProp(prop, current)
    }),
    active
  );
}
