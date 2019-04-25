/*
 * Counter Messages
 *
 * This contains all the text for the Counter component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Counter';

export default defineMessages({
  offer: {
    id: `${scope}.offer`,
    defaultMessage: 'New Year Offer',
  },
  discount: {
    id: `${scope}.discount`,
    defaultMessage: '82% OFF ',
  },
  hosting: {
    id: `${scope}.hosting`,
    defaultMessage: 'Web Hosting',
  },
  start: {
    id: `${scope}.hosting`,
    defaultMessage: 'Get started now',
  },
});
