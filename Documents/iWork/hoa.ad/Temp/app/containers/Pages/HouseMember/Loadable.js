/**
 *
 * Asynchronously loads the component for BlogGrid
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
