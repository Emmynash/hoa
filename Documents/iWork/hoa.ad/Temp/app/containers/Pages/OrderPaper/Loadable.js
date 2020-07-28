/**
 *
 * Asynchronously loads the component for ItService
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
