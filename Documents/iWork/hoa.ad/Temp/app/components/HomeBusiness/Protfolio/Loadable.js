/**
 *
 * Asynchronously loads the component for Protfolio
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
