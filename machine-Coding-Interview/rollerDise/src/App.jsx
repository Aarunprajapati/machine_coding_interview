import React, { useState } from "react";

const App = () => {
  const [rollCount, setRollCount] = useState("");
  const [rollValue, setRollValue] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setRollCount(value);

    if (!value) {
      setRollValue([]);
    }
  };

  const handleRole = (e) => {
    e.preventDefault();
    if (rollCount > 12 || rollCount < 1)
      return alert("min value 1 or max value 12");

    if (!rollCount) {
      setRollValue([]);
      return;
    }

    const randomValue = Array.from({ length: rollCount }, () => {
      return Math.floor(Math.random() * 6) + 1;
    });
    setRollValue(randomValue);
  };

  return (
    <div className="flex my-10 flex-col items-center h-screen">
      <h1 className="text-2xl">Roller Dise Game</h1>
      <div className="w-full my-4">
        <form
          onSubmit={handleRole}
          className="flex justify-center items-center max-w-xl gap-4 mx-auto"
        >
          <input
            type="number"
            min={1}
            max={12}
            autoFocus
            className="border border-blue-400  px-4 py-2 w-[80%]"
            value={rollCount}
            onChange={handleChange}
            placeholder="Enter your Digits"
          />
          <button
            type="submit"
            className="w-[20%] bg-blue-600 text-white py-2 px-4 rounded-lg "
          >
            Roll
          </button>
        </form>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {rollValue.length > 0 &&
          rollValue.map((item, index) => {
            return (
              <span key={index} className="px-4 bg-blue-300 py-2 rounded-xl">
                {item}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default App;
