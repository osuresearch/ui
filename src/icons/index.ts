// Iconify icon bundle configuration for all icons we support
// Ref: https://docs.iconify.design/icon-components/bundles/
import { addIcon } from '@iconify/react/dist/offline';

import * as brand from './brand';
import * as navigation from './navigation';
import * as social from './social';
import * as system from './system';

export const groups: Record<string, any> = {
  brand: { ...brand },
  social: { ...social },
  system: { ...system },
  navigation: { ...navigation }
};

export const all: Record<string, any> = {
  ...brand,
  ...social,
  ...system,
  ...navigation
};

// export const collection = {
//   prefix: 'rui',
//   icons: Object.keys(all).reduce((agg, key) => {
//     agg[key] = all[key].default;
//     return agg;
//   }, {} as any),
//   width: 24,
//   height: 24
// };

export function loadAllIcons() {
  // addIcon() is faster under the hood - less validation steps

  Object.keys(all).forEach((name) => {
    addIcon(name, all[name].default);
  });
}
