import React, { useCallback, useRef } from "react";

const useMemoization = (fn, delay) => {
  const cache = useRef({});

  const memoizedFun = useCallback(
    (...args) => {
      const key = JSON.stringify(args);
      if (cache.current[key] !== undefined) {
         console.log("🟢 From cache:", cache.current);
        return cache[key];
      }

      console.log("🔴 Calculating:", key);
      const result = fn(...args)
      cache.current[key] = result;  
      return result;
    },
    [fn, delay]
  );

  return memoizedFun;
};

export default useMemoization;
