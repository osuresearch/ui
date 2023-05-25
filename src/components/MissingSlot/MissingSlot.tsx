import React from 'react';

import { Icon } from '../Icon';
import { Text } from '../Text';

export type MissingSlotProps = Record<string, never>;

/**
 * Placeholder to render for a slot that requires a component.
 *
 * TODO: Might drop this and replace with just throwing exceptions.
 * Only use case currently is Diff where we don't need it for apps
 * that don't support diffing.
 *
 * @internal
 */
export function MissingSlot() {
  return (
    <Text c="critical">
      <Icon name="code" /> Slot NAME is missing.
    </Text>
  );
}

export function makeMissingSlot(name: string) {
  return () => (
    <Text c="critical">
      <Icon name="code" /> Slot `{name}` is missing.
    </Text>
  );
}
