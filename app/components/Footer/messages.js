/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Footer';

export default defineMessages({
  uptime: {
    id: `${scope}.uptime`,
    defaultMessage: 'Guaranteed 99.9% Uptime',
  },
  speed: {
    id: `${scope}.speed`,
    defaultMessage: 'Superior Speed Perfomance',
  },
  chat: {
    id: `${scope}.chat`,
    defaultMessage: '24/7 Support Chat',
  },
  money: {
    id: `${scope}.money`,
    defaultMessage: '30-Day Money-Back Guarantee',
  },
});
