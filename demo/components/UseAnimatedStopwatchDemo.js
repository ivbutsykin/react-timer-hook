import React from 'react';
import { useAnimatedStopwatch } from '../../src/index';
import Button from './Button';
import TimerStyled from './TimerStyled';

export default function UseAnimatedStopwatchDemo() {
  const {
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    start,
    pause,
    reset,
  } = useAnimatedStopwatch({ autoStart: true });


  return (
    <div>
      <h2>UseAnimatedStopwatch Demo</h2>
      <TimerStyled milliseconds={milliseconds} seconds={seconds} minutes={minutes} hours={hours} days={days} />
      <Button onClick={start}>Start</Button>
      <Button onClick={pause}>Pause</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}
