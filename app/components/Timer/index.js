/**
 *
 * Timer
 *
 */

import React from 'react';
import './style.scss';

class Timer extends React.PureComponent {
  state = {
    days: null,
    hours: null,
    mins: null,
    seconds: null,
  };

  componentDidMount() {
    const launchDate = new Date('Dec 31, 2019 23:59:59');
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;
      this.setState({ days: Math.floor(distance / (1000 * 60 * 60 * 24)) });
      this.setState({
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
      });
      this.setState({
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      });
      this.setState({
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });

      if (distance < 0) {
        clearInterval(interval);
        console.log('Time is out...');
      }
    }, 1000);
  }

  render() {
    const { days, hours, mins, seconds } = this.state;

    return (
      <div className="timer">
        <div className="new-timer-holder">
          <div className="new-timer-holder-col">{days}</div>
          <div className="new-timer-holder-col_text">DAYS</div>
        </div>
        <div className="new-timer-holder">
          <div className="new-timer-holder-col">{hours}</div>
          <div className="new-timer-holder-col_text">HOURS</div>
        </div>
        <div className="new-timer-holder">
          <div className="new-timer-holder-col">{mins}</div>
          <div className="new-timer-holder-col_text">MINUTES</div>
        </div>
        <div className="new-timer-holder">
          <div className="new-timer-holder-col">{seconds}</div>
          <div className="new-timer-holder-col_text">SECONDS</div>
        </div>
      </div>
    );
  }
}
Timer.propTypes = {};

export default Timer;
