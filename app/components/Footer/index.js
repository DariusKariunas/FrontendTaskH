/**
 *
 * Footer
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import icon from 'images/check.png';
import messages from './messages';
import './style.scss';

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <img src={icon} alt="i" />
          <FormattedMessage {...messages.uptime} />
        </li>
        <li>
          <img src={icon} alt="i" />
          <FormattedMessage {...messages.speed} />
        </li>
        <li>
          <img src={icon} alt="i" />
          <FormattedMessage {...messages.chat} />
        </li>
        <li>
          <img src={icon} alt="i" />
          <FormattedMessage {...messages.money} />
        </li>
      </ul>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
