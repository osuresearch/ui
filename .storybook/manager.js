import React from 'react';
import { addons } from '@storybook/addons';

addons.setConfig({
  // isFullscreen: false,
  // showNav: true,
  // showPanel: true,
  // panelPosition: 'bottom',
  // enableShortcuts: true,
  // showToolbar: false,
  // theme: undefined,
  // selectedPanel: undefined,
  // initialActive: 'sidebar',
  sidebar: {
    // showRoots: false,
    collapsedRoots: [
      'components',
      'utilities',
      'bux-stuff',
      'contributing'
    ],
    renderLabel: (item) => {
      // not super useful info. I want the meta...
      // TODO: No inline hacking
      // type: story, root, component
      // parent: components, depth: 1
      // isLeaf, isRoot, isComponent, renderLabel
      return (
        <div className={`rui-link--${item.type}`}>
          {item.name}
        </div>
      )
    },
  },
  // toolbar: {
  //   title: { hidden: true },
  //   zoom: { hidden: true },
  //   eject: { hidden: true },
  //   copy: { hidden: true },
  //   fullscreen: { hidden: true },
  // },
});
