/**
 *
 * Asynchronously loads the component for Pokedex
 *
 */

import LoadingIndicator from 'components/LoadingIndicator';
import React from 'react';
import loadable from 'utils/loadable';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});
