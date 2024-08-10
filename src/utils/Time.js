export default class Time {
  static getTimeFromMilliseconds(ms) {
    const totalMilliseconds = Math.ceil(ms);
    const days = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((totalMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((totalMilliseconds % (1000 * 60)) / 1000);
    const milliseconds = Math.floor(totalMilliseconds % 1000);

    return {
      totalMilliseconds,
      milliseconds,
      seconds,
      minutes,
      hours,
      days,
    };
  }

  static getTimeFromSeconds(secs) {
    const totalSeconds = Math.ceil(secs);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return {
      totalSeconds,
      seconds,
      minutes,
      hours,
      days,
    };
  }

  static getMillisecondsFromExpiry(expiry, shouldRound) {
    const now = new Date().getTime();
    const milliSecondsDistance = expiry - now;
    if (milliSecondsDistance > 0) {
      return shouldRound ? Math.round(milliSecondsDistance) : milliSecondsDistance;
    }
    return 0;
  }

  static getSecondsFromExpiry(expiry, shouldRound) {
    const now = new Date().getTime();
    const milliSecondsDistance = expiry - now;
    if (milliSecondsDistance > 0) {
      const val = milliSecondsDistance / 1000;
      return shouldRound ? Math.round(val) : val;
    }
    return 0;
  }

  static getMillisecondsFromPrevTime(prevTime, shouldRound) {
    const now = new Date().getTime();
    const milliSecondsDistance = now - prevTime;
    if (milliSecondsDistance > 0) {
      return shouldRound ? Math.round(milliSecondsDistance) : milliSecondsDistance;
    }
    return 0;
  }

  static getSecondsFromPrevTime(prevTime, shouldRound) {
    const now = new Date().getTime();
    const milliSecondsDistance = now - prevTime;
    if (milliSecondsDistance > 0) {
      const val = milliSecondsDistance / 1000;
      return shouldRound ? Math.round(val) : val;
    }
    return 0;
  }

  static getSecondsFromTimeNow() {
    const now = new Date();
    const currentTimestamp = now.getTime();
    const offset = (now.getTimezoneOffset() * 60);
    return (currentTimestamp / 1000) - offset;
  }

  static getFormattedTimeFromSeconds(totalSeconds, format) {
    const { seconds: secondsValue, minutes, hours } = Time.getTimeFromSeconds(totalSeconds);
    let ampm = '';
    let hoursValue = hours;

    if (format === '12-hour') {
      ampm = hours >= 12 ? 'pm' : 'am';
      hoursValue = hours % 12;
    }

    return {
      seconds: secondsValue,
      minutes,
      hours: hoursValue,
      ampm,
    };
  }
}
