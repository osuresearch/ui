
import { ArgTypes, Meta, Story } from '@storybook/react';
import { fontFamily, fontSize, fontWeight, spacing } from '../src/types';
import React from 'react';
import { colors } from '../src/types';

export type RUIBadge = 'beta' | 'stable' | 'deprecated' | 'experimental' | 'atom' | 'molecule';

export type RUIMeta<T> = Meta<T> & {
  withStyleSystemProps(): RUIMeta<T>;

  /**
   * Add a new badge to the component
   *
   * Depends on https://storybook.js.org/addons/@geometricpanda/storybook-addon-badges
   */
  withBadge(badge: RUIBadge): RUIMeta<T>;

  withSubcomponent(name: string): RUIMeta<T>;

  withArgTypes(argTypes: Partial<ArgTypes<T>>): RUIMeta<T>;
}

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
export function RUIComponentMeta<T>(
  category: string,
  component: React.ComponentType<T>
): RUIMeta<T> {

  return {
    title: category + '/' + component.displayName,
    id: category + '/' + component.displayName,
    component,
    subcomponents: {},
    argTypes: {},
    parameters: {
      badges: []
    },
    excludeStories: /(_.*)/,

    withStyleSystemProps: function () {
      this.argTypes = {
        ...styleSystemArgTypes() as Partial<ArgTypes<T>>,
        ...this.argTypes
      };
      return this;
    },
    withBadge: function (badge: RUIBadge) {
      if (!this.parameters)
        this.parameters = {};

      this.parameters.badges = [
        ...this.parameters.badges,
        badge
      ]

      // Encode the badge onto the `title` prop for the Sidebar
      // if (badge === 'beta')
      //   this.title += ' 🔨';
      // else if (badge === 'experimental')
      //   this.title += ' 🧪';
      // else if (badge === 'atom')
      //   this.title += ' 🤏';

      // TODO: The above breaks components where
      // the export name is the same as the component
      // to collapse it down to a single page.

      return this;
    },
    withSubcomponent: function (name: string) {
      this.subcomponents = {
        ...this.subcomponents,
        [`${component.displayName}.${name}`]: (component as Record<string, any>)[name]
      };

      return this;
    },
    withArgTypes(argTypes: Partial<ArgTypes<T>>): RUIMeta<T> {
      this.argTypes = {
        ...this.argTypes,
        ...argTypes
      };
      return this;
    }
  };
}

export type RUIStory<T> = Story<T> & {
  withDescription(markdown: string): RUIStory<T>
}

export function RUIComponentStory<T>(
  template: Story<T>,
  args: Partial<T> = {}
): RUIStory<T> {
  const instance = template.bind({}) as RUIStory<T>;
  instance.args = args;
  instance.parameters = {
    docs: {
      // Pull raw source to get story hooks/states
      // source: {
      //   type: 'code',
      // },
      // // Custom transformer to strip out RUIComponent factories from sample code.
      // transformSource(snippet: string, context: StoryContext) {
      //   console.log(context);
      //   return snippet;
      // },

      // TODO: the above doesn't work. Some stories are just RUIComponentStory(Template).
      // Figure out something else.
    },
  };

  instance.withDescription = (markdown: string) => {
    instance.parameters = {
      ...instance.parameters,
      docs: {
        description: {
          story: markdown
        },
      }
    };

    return instance;
  }

  return instance;
}

/**
 * Automatically organize style system props a Storybook ArgsTable
 */
export function styleSystemArgTypes() {
  const margin = {
    options: spacing,
    table: {
      category: 'Style System',
      subcategory: 'Margin',
    }
  }

  const padding = {
    options: spacing,
    table: {
      category: 'Style System',
      subcategory: 'Padding',
    }
  }

  const size = {
    table: {
      category: 'Style System',
      subcategory: 'Size',
    }
  }

  const color = {
    options: colors,
    control: 'select',
    table: {
      category: 'Style System',
      subcategory: 'Color',
    }
  }

  const font = (options: readonly string[]) => {
    return {
      options,
      table: {
        category: 'Style System',
        subcategory: 'Font',
      }
    }
  }

  const layout = {
    table: {
      category: 'Style System',
      subcategory: 'Layout',
    }
  }

  return {
    p: padding,
    px: padding,
    py: padding,
    pt: padding,
    pb: padding,
    pl: padding,
    pr: padding,

    m: margin,
    mx: margin,
    my: margin,
    mt: margin,
    mb: margin,
    ml: margin,
    mr: margin,

    w: size,
    h: size,
    miw: size,
    maw: size,
    mih: size,
    mah: size,

    c: color,
    bgc: color,

    ff: font(fontFamily),
    fw: font(fontWeight),
    fs: font(fontSize),

    gridArea: layout,
  }
}
