import React from "react";
import UpdatedComponent from "./hoc";

function Person1({ money, handleIncrease }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "stretch",
      }}
    >
      <h1>Person1 bids Rs {money}</h1>
      <button onClick={handleIncrease}>Increase Button</button>
    </div>
  );
}

export default UpdatedComponent(Person1);
