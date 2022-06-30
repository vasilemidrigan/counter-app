import React, { useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import "./index.css";

export default function App() {
  const [result, setResult] = useState(0);

  function addition() {
    setResult((prevResult) => {
      return prevResult + 1;
    });
  }

  function subtraction() {
    setResult((prevResult) => {
      return prevResult - 1;
    });
  }

  return (
    <div className="App">
      <Output data={result} />
      <Input add={addition} subtract={subtraction} />
    </div>
  );
}
