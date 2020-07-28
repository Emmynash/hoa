/**
 *
 * Asynchronously loads the component for BusinessService
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
