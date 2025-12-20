import React, { useState } from "react";
import useMemoization from "./hooks/useMemoization";

const App = () => {
  const [data, setData] = useState(null);

  const square = (n) => {
    console.log("Calculating square...");
    return n * n;
  };
  
  const memoizedData = useMemoization(square, 500);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    const result = memoizedData(value);
    console.log("result", result)
    setData(result);
  };


  return (
    <div className="flex justify-center flex-col items-center w-full">
      <h1 className="text-2xl font-semibold">Memoization</h1>
      <p className=" text-xl font-normal">
        nenoization is the optimzation technique where you store your result of
        an expensive computation
      </p>
      <div className="my-2">
        <input
          className="px-4 py-2 border border-blue-200"
          placeholder="Enter your digits"
          onChange={handleChange}
        />
      </div>
      <div>Square: {data}</div>
    </div>
  );
};

export default App;
