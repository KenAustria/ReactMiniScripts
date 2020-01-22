// filename: Spread-Operator-Array-to-Object.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";
const App = () => {
  const myArray = ["a", "b", "c"];
  const myNewObject = { ...myArray };
  console.log(myNewObject); // {0: "a", 1: "b", 2: "c"}
  return "";
};
ReactDOM.render(<App />, document.getElementById("root"));
