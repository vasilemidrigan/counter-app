import React from "react";

export default function Input(props) {
  return (
    <div className="Input">
      <button onClick={props.subtract}>-</button>
      <button onClick={props.add}>+</button>
    </div>
  );
}
