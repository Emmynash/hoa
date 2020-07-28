/**
 *
 * Asynchronously loads the component for PortfolioDetails
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
