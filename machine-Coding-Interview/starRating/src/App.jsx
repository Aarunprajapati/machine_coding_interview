import React from "react";
import { useState } from "react";

const App = () => {
  const starArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [rating, setRating] = useState(null);

  const handleStar = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
      <h1>Star Rating</h1>

      {/* Single flex container */}
      <div style={{ display: "flex" }}>
        {starArray.map((_, index) => (
          <span
            key={index}
            onClick={() => handleStar(index)}
            style={{
              height: 28,
              width: 28,
              borderRadius: "50%",
              cursor: "pointer",
              backgroundColor: rating > index ? "gold" : "gray",
              ...(index % 2 !== 0
                ? { marginRight: "2px" }
                : { marginLeft: "2px" }),
            }}
          />
        ))}
      </div>

      <p>Rating: {rating / 2}</p>
    </div>
  );
};
export default App;
