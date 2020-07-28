/**
 *
 * Asynchronously loads the component for Skill
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
