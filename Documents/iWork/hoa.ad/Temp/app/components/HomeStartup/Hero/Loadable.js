/**
 *
 * Asynchronously loads the component for StartupHero
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
