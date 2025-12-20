import { useCallback, useRef } from "react";

const useThrottle = (fn, delay) => {
  const lastCall = useRef(0);

  const throttledFn = useCallback(
    (...args) => {
      const now = Date.now();

      if (now - lastCall.current >= delay) {
        lastCall.current = now;
        fn(...args);
      }
    },
    [fn, delay]
  );

  return throttledFn;
};

export default useThrottle;
