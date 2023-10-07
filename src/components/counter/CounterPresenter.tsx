import React from "react";

const CounterPresenter = ({ count, handlePlus, handleMinus }) => {
  return (
    <div style={{ display: "flex" }}>
      <button onClick={handleMinus}>-</button>
      {count}
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

export default CounterPresenter;
