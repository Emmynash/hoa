/**
 *
 * Asynchronously loads the component for Feeds
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
