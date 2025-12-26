import { useEffect, useState } from "react";

// red: 4000ms
// orange: 1000ms
// green: 3000ms

const App = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    let timer;

    if (color == "red") {
      setTimeout(() => {
        setColor("orange");
      }, 4000);
    }
    if (color == "orange") {
      setTimeout(() => {
        setColor("green");
      }, 1000);
    }
    if (color == "green") {
      setTimeout(() => {
        setColor("red");
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [color]);

  return (
    <div className="container flex justify-center flex-col items-center">
      <h1 className="text-2xl">Traffic Lights</h1>
      <div className="flex flex-col justify-center items-center gap-4 mt-4">
        <span
          className={`border rounded-full w-12 h-12`}
          style={{ background: color == "red" ? "red" : "#fff" }}
        ></span>
        <span
          className="border rounded-full w-12 h-12"
          style={{ background: color == "orange" ? "orange" : "#fff" }}
        ></span>
        <span
          className="border rounded-full w-12 h-12"
          style={{ background: color == "green" ? "green" : "#fff" }}
        >
          {" "}
        </span>
      </div>
    </div>
  );
};

export default App;
