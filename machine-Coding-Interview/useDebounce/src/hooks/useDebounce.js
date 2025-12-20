import React, { useCallback, useRef } from "react";

const useDebounce = (fn, delay) => {
  const timerRef = useRef(null);

  const debouncedFn = useCallback(
    (...arg) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => fn.apply(this, arg), delay);
    },
    [fn, delay]
  );
  return debouncedFn;
};

export default useDebounce;
