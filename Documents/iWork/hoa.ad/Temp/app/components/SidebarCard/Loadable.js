/**
 *
 * Asynchronously loads the component for SidebarCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
