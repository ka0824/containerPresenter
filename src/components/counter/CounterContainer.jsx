import React, { useState } from "react";
import CounterPresenter from "./CounterPresenter";

const CounterContainer = () => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <CounterPresenter
      count={count}
      handlePlus={handlePlus}
      handleMinus={handleMinus}
    ></CounterPresenter>
  );
};

export default CounterContainer;
