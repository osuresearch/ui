
import { ArgTypes, Meta, Story } from '@storybook/react';
import { brandColors, fontFamily, fontSize, fontWeight, spacing, systemColors } from '../src/types';

export type RUIBadge = 'beta' | 'stable' | 'deprecated' | 'experimental';

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
  component: React.FunctionComponent<T>
): RUIMeta<T> {

  return {
    title: category + '/' + component.displayName,
    component,
    subcomponents: {},
    argTypes: {},
    parameters: {
      badges: []
    },
    excludeStories: /_.*/,

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
  instance.parameters = {};
  instance.withDescription = (markdown: string) => {
    instance.parameters = {
      ...instance.parameters,
      docs: {
        description: {
          story: markdown
        }
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

  const themeColor = {
    options: [...systemColors, ...brandColors],
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

  return {
    m: margin,
    mx: margin,
    my: margin,
    mt: margin,
    mb: margin,
    ml: margin,
    mr: margin,

    p: padding,
    px: padding,
    py: padding,
    pt: padding,
    pb: padding,
    pl: padding,
    pr: padding,

    w: size,
    h: size,
    miw: size,
    maw: size,
    mih: size,
    mah: size,

    c: themeColor,
    ff: font(fontFamily),
    fw: font(fontWeight),
    fs: font(fontSize),
  }
}
