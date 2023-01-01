import { useMediaQuery } from 'react-responsive';
import resolveConfig from 'tailwindcss/resolveConfig';

import { ScreenSize, screenSize } from '~/types';

import tailwindConfig from '../../tailwind.config.js';

const tailwind = resolveConfig(tailwindConfig);

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
