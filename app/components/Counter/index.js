/**
 *
 * Counter
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Timer from 'components/Timer';
import messages from './messages';
import './style.scss';

function Counter() {
  return (
    <div className="counter">
      <span>
        <FormattedMessage {...messages.offer} />
      </span>
      <span className="exclusive">
        <FormattedMessage {...messages.discount} />
      </span>
      <span>
        <FormattedMessage {...messages.hosting} />
      </span>
      <div className="timer">
        <div className="arrowLeft" />
        <Timer />
        <div className="arrowRight" />
      </div>
      <button type="button">
        <FormattedMessage {...messages.start} />
      </button>
    </div>
  );
}

Counter.propTypes = {};

export default Counter;
