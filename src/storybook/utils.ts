import { ArgTypes, Meta, ReactRenderer, Story, StoryObj } from '@storybook/react';
import { ComponentAnnotations, StoryAnnotations } from '@storybook/types';

import React, { ComponentProps, ComponentType, JSXElementConstructor } from 'react';

export type RUIBadge = 'beta' | 'stable' | 'deprecated' | 'experimental' | 'atom' | 'molecule';

export type RUIMeta<T> = ComponentAnnotations<ReactRenderer, ComponentProps<ComponentType<T>>> & {
  withStyleSystemProps(): RUIMeta<T>;

  withArgTypes(argTypes: Partial<ArgTypes<T>>): RUIMeta<T>;

  /**
   * Add a new badge to the component
   *
   * Depends on https://storybook.js.org/addons/@geometricpanda/storybook-addon-badges
   */
  // withBadge(badge: RUIBadge): RUIMeta<T>;

  // withSubcomponent(name: string): RUIMeta<T>;
};

/**
 * Generate Storybook metadata for a component.
 *
 * This exposes a number of factory methods for appending
 * additional metadata onto the generated Storybook metadata.
 *
 * @param category  Navigation category. E.g. `"Components"` or `"Utilities / Experimental"`
 * @param component Target component
 * @returns
 */
export function RUIComponentMeta<T>(component: ComponentType<T>): RUIMeta<T> {
  // ComponentAnnotations<ReactRenderer, ComponentProps<typeof component>> {

  const meta: Meta<typeof component> = {
    component,
    argTypes: {},
    excludeStories: /(_.*)/,
    parameters: {
      badges: [],
    },
  };

  return {
    ...meta,
    withStyleSystemProps: function () {
      this.argTypes = {
        ...(styleSystemArgTypes() as Partial<ArgTypes<T>>),
        ...this.argTypes,
      };
      return this;
    },
    withArgTypes(argTypes: Partial<ArgTypes<T>>): RUIMeta<T> {
      this.argTypes = {
        ...this.argTypes,
        ...argTypes,
      };
      return this;
    },
  };
}

// type Story = StoryObj<typeof Conditional>;

// // Retval needs to be: StoryAnnotations<ReactRenderer, ButtonProps>

// // Where T is ComponentProps of something.
// export type RUIStory<T> = Story<T> & {
//   withDescription(markdown: string): RUIStory<T>;
// };

// // type RUIStory<T> = StoryAnnotations<ReactRenderer, ComponentProps<ComponentType<T>>>

// export function RUIComponentStory<T>(template: Story<T>, args: Partial<T> = {}): RUIStory<T> {
//   const instance = template.bind({}) as RUIStory<T>;
//   instance.args = args;
//   instance.parameters = {
//     docs: {
//       // Pull raw source to get story hooks/states
//       // source: {
//       //   type: 'code',
//       // },
//       // // Custom transformer to strip out RUIComponent factories from sample code.
//       // transformSource(snippet: string, context: StoryContext) {
//       //   console.log(context);
//       //   return snippet;
//       // },
//       // TODO: the above doesn't work. Some stories are just RUIComponentStory(Template).
//       // Figure out something else.
//     },
//   };

//   instance.withDescription = (markdown: string) => {
//     instance.parameters = {
//       ...instance.parameters,
//       docs: {
//         description: {
//           story: markdown,
//         },
//       },
//     };

//     return instance;
//   };

//   return instance;
// }

// /**
//  * Automatically organize style system props a Storybook ArgsTable
//  */
// export function styleSystemArgTypes() {
//   const margin = {
//     options: spacing,
//     table: {
//       category: 'Style System',
//       subcategory: 'Margin',
//     },
//   };

//   const padding = {
//     options: spacing,
//     table: {
//       category: 'Style System',
//       subcategory: 'Padding',
//     },
//   };

//   const size = {
//     table: {
//       category: 'Style System',
//       subcategory: 'Size',
//     },
//   };

//   const color = {
//     options: colors,
//     control: 'select',
//     table: {
//       category: 'Style System',
//       subcategory: 'Color',
//     },
//   };

//   const font = (options: readonly string[]) => ({
//     options,
//     table: {
//       category: 'Style System',
//       subcategory: 'Font',
//     },
//   });

//   const layout = {
//     table: {
//       category: 'Style System',
//       subcategory: 'Layout',
//     },
//   };

//   return {
//     p: padding,
//     px: padding,
//     py: padding,
//     pt: padding,
//     pb: padding,
//     pl: padding,
//     pr: padding,

//     m: margin,
//     mx: margin,
//     my: margin,
//     mt: margin,
//     mb: margin,
//     ml: margin,
//     mr: margin,

//     w: size,
//     h: size,
//     miw: size,
//     maw: size,
//     mih: size,
//     mah: size,

//     c: color,
//     bgc: color,

//     ff: font(fontFamily),
//     fw: font(fontWeight),
//     fs: font(fontSize),

//     gridArea: layout,
//     gridSpan: layout,
//   };
// }

export function getDocgenInfo(meta: RUIMeta<any>) {
  if (meta && (meta.component as any).__docgenInfo !== undefined) {
    return (meta.component as any).__docgenInfo;
  }

  return {
    description: '',
    displayName: '',
    props: {},
  };
}

export function getComponentSpecs(meta: RUIMeta<any>) {
  const docgen = getDocgenInfo(meta);

  // TODO: I want to use @decorators in the docs for components
  // to mark them as beta, alpha, whatever. As well as various
  // other flags (atomics) so we don't do that in stories.
  // But that gets stripped via Storybook
  // (see: https://github.com/storybookjs/storybook/issues/18162)

  // So, FOR NOW, I have a hacky syntax for RUI decorators
  // where I hide the decorators in HTML comments so they don't
  // get parsed out.
  const atomics = [...docgen.description.matchAll(/@ruiAtomic\s+(.*)-->/g)];

  const status = [...docgen.description.matchAll(/@ruiStatus\s+(.*)-->/g)];

  const isPolymorphic = docgen.description.indexOf('@ruiPolymorphic') >= 0;
  const isInternal = (meta.title ?? '').indexOf('Internal') === 0;
  const isDev = status.length > 0 && status[0][1].trim() === 'In Development';

  const path = (meta.title ?? '').split('/');
  const name = path[path.length - 1].trim();

  let parent = 'root';
  if (path.length > 1) {
    parent = path[path.length - 2].toLowerCase().trim();
  }

  const isMUI = parent.startsWith('mui');

  return {
    name,
    parent,
    atomics,
    status,
    isPolymorphic,
    isInternal,
    isDev,
    isMUI,
  };
}
