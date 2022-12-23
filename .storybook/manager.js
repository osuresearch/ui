import React from 'react';
import { addons } from '@storybook/addons';

addons.setConfig({
  // isFullscreen: false,
  // showNav: true,
  // showPanel: true,
  // panelPosition: 'bottom',
  // enableShortcuts: true,
  // showToolbar: true,
  // theme: undefined,
  // selectedPanel: undefined,
  // initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
    renderLabel: (item) => {
      // console.debug(item);
      // not super useful info. I want the meta...
      return <abbr style={{fontSize: '16px' }} title="...">{item.name}</abbr>
    },
  },
  // toolbar: {
  //   title: { hidden: false },
  //   zoom: { hidden: false },
  //   eject: { hidden: false },
  //   copy: { hidden: false },
  //   fullscreen: { hidden: false },
  // },
});
