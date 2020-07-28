/**
 *
 * Asynchronously loads the component for FlowUs
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
