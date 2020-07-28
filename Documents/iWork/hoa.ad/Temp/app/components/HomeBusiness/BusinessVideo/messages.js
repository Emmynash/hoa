/*
 * BusinessVideo Messages
 *
 * This contains all the text for the BusinessVideo component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.BusinessVideo';

export default defineMessages({
    latestideo: {
        id: `${scope}.latestideo`,
        defaultMessage: 'Latest video',
    },
    header: {
        id: `${scope}.header`,
        defaultMessage: "2020 Budget Addressed",
    },
    detail: {
        id: `${scope}.detail`,
        defaultMessage: 'Speaker of the Adamawa State House of Assembly, Hon. Aminu Iya Abbas addressing the Hon. Members on the 2020 Budget Estimate and Proposal.',
    },
});
