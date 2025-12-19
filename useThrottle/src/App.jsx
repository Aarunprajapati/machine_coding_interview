import React, { useEffect, useState } from "react";
import useThrottle from "./hooks/useThrottle";

const App = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: windowSize.height });
    
  };

  const throttleHandleResize = useThrottle(handleResize, 500 )

  useEffect(() => {
    window.addEventListener("resize", throttleHandleResize);

    return () => window.removeEventListener("resize", throttleHandleResize);
  }, []);

  return (
    <div>
      <h1>
        Use of Throttling {windowSize.width} x {windowSize.height}
      </h1>
    </div>
  );
};

export default App;
