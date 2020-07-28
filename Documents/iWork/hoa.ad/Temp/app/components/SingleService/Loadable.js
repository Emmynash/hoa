/**
 *
 * Asynchronously loads the component for SingleService
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
