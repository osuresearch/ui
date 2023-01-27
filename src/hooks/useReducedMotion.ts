import { useContext } from 'react';

import { RUIContext } from '../components/RUIProvider';

/**
 * Query and update the current user's reduced motion preferences
 * for the application.
 */
export function useReducedMotion() {
  const { reducedMotion, setReducedMotion } = useContext(RUIContext);

  return {
    reducedMotion,
    setReducedMotion
    // TODO: Class mods?
  };
}
