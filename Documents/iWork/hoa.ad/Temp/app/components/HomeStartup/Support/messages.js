/*
 * Support Messages
 *
 * This contains all the text for the Support component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Support';

export default defineMessages({
    SupportMail: {
        id: `${scope}.SupportMail`,
        defaultMessage: 'Support Mail',
    },
    MakeACall: {
        id: `${scope}.MakeACall`,
        defaultMessage: 'Make A Call',
    },
    CallUsNow: {
        id: `${scope}.CallUsNow`,
        defaultMessage: 'Call Us Now',
    },
    details: {
        id: `${scope}.details`,
        defaultMessage: 'oice and Data Systems are crucial to the success or failure of most businesses. Many companies provide',
    },
});
