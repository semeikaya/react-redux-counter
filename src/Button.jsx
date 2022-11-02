import React from "react";
import { useDispatch } from "react-redux";

const Button = () => {
  const dispatch = useDispatch();

  function handleUp() {
    dispatch({ type: "plus", payload: 10 });
  }

  function handleDown() {
    dispatch({ type: "minus" });
  }

  return (
    <>
      <button className="plus" onClick={handleUp}>+</button>
      <button className="minus" onClick={handleDown}>-</button>
    </>
  );
};

export default Button;
