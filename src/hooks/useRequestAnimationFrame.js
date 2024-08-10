/* eslint-disable */
import { useEffect, useRef, useCallback } from 'react';

export default function useRequestAnimationFrame(callback) {
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const animate = useCallback((time) => {
    if (previousTimeRef.current) callback(time - previousTimeRef.current);
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  });

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);
}