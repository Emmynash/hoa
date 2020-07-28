/**
 *
 * Asynchronously loads the component for StartupService
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
