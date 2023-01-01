import { useMediaQuery } from 'react-responsive';

import { ScreenSize, screenSize } from '~/types';

import * as tailwind from '../../tailwind.config';

export function useScreenSize(): [ScreenSize, Record<ScreenSize, boolean>] {
  const screens = tailwind.theme?.screens as Record<ScreenSize, string>;

  const sm = true;
  const md = useMediaQuery({ minWidth: screens.md });
  const lg = useMediaQuery({ minWidth: screens.lg });
  const xl = useMediaQuery({ minWidth: screens.xl });
  const xxl = useMediaQuery({ minWidth: screens.xxl });

  const active = [sm, md, lg, xl, xxl];

  // current, matrix
  return [screenSize[active.indexOf(false)], { sm, md, lg, xl, xxl }];
}
