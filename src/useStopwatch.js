import { useState, useCallback } from 'react';
import { Time } from './utils';
import { useInterval } from './hooks';

export default function useStopwatch({ autoStart, offsetTimestamp, delay = 1000 } = {}) {
  const [passedMilliseconds, setPassedMilliseconds] = useState(Time.getMillisecondsFromExpiry(offsetTimestamp, false) || 0);
  const [prevTime, setPrevTime] = useState(new Date());
  const [milliseconds, setMilliseconds] = useState(passedMilliseconds + Time.getMillisecondsFromPrevTime(prevTime || 0, true));
  const [isRunning, setIsRunning] = useState(autoStart);

  useInterval(() => {
    setMilliseconds(passedMilliseconds + Time.getMillisecondsFromPrevTime(prevTime, true));
  }, isRunning ? delay : null);

  const start = useCallback(() => {
    const newPrevTime = new Date();
    setPrevTime(newPrevTime);
    setIsRunning(true);
    setMilliseconds(passedMilliseconds + Time.getMillisecondsFromPrevTime(newPrevTime, true));
  }, [passedMilliseconds]);

  const pause = useCallback(() => {
    setPassedMilliseconds(milliseconds);
    setIsRunning(false);
  }, [milliseconds]);

  const reset = useCallback((offset = 0, newAutoStart = true) => {
    const newPassedMilliseconds = Time.getMillisecondsFromExpiry(offset, true) || 0;
    const newPrevTime = new Date();
    setPrevTime(newPrevTime);
    setPassedMilliseconds(newPassedMilliseconds);
    setIsRunning(newAutoStart);
    setMilliseconds(newPassedMilliseconds + Time.getMillisecondsFromPrevTime(newPrevTime, true));
  }, []);

  return {
    ...Time.getTimeFromMilliseconds(milliseconds), start, pause, reset, isRunning,
  };
}
