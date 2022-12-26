import { Item as RSItem, ItemProps as RSItemProps } from 'react-stately';

export type ItemProps<T> = RSItemProps<T>;

/**
 * The Item component is shared between many collection components to ensure
 * they have a consistent interface that can be learned once and applied
 * everywhere.
 *
 * Item only defines the data, not the rendering, visual appearance, or behaviour.
 * This is up to the individual collection component (e.g. Menu or TabPanel) to implement.
 *
 * This is a simple wrapper over React Stately's Item componnent.
 * For detailed information, see [React Stately's collection docs](https://react-spectrum.adobe.com/react-stately/collections.html)
 */
export const Item = RSItem;