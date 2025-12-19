import React, { useEffect, useRef, useState } from "react";

const useThrottle = (func, delay) => {
  const [throttleValues, setThrottleValues] = useState(func);

  const lastExecution = useRef(0);

  useEffect(() => {
    const handler = setTimeout(() => {
      const now = Date.now();
      const isElapsed = now - lastExecution.current;

      if (isElapsed >= delay) {
        setThrottleValues(func);
        lastExecution.current = now;
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [func, delay]);

  return throttleValues;
};

export default useThrottle;
