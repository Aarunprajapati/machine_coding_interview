import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [isRuning, setIsruning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRuning) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isRuning]);

  const handlePlay = () => {
    setIsruning(true);
  };
  const handlePause = () => {
    setIsruning(false);
  };

  const handleReset = () => {
    setIsruning(false);
    setTime(0);
  };

  const handleAdvance = () => {
    setTime((prev) => prev + 10);
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen w-full">
      <h1 className="text-2xl">Stopwatch</h1>
      <span>{time}</span>

      <div className="flex gap-2 py-4">
        <button
          className="border border-blue-500 px-4 py-2 rounded-xl cursor-pointer"
          onClick={handlePlay}
        >
          Play
        </button>
        <button
          className="border border-red-500 px-4 py-2 rounded-xl cursor-pointer"
          onClick={handlePause}
        >
          pause
        </button>
        <button
          className="border border-blue-500 bg-red-600 text-white px-4 py-2 cursor-pointer rounded-xl"
          onClick={handleReset}
        >
          reset
        </button>
        <button
          className="border border-blue-500 bg-red-600 text-white px-4 py-2 cursor-pointer rounded-xl"
          onClick={handleAdvance}
        >
          Advance
        </button>
      </div>
    </div>
  );
};

export default App;
