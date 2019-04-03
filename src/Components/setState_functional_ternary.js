// filename: setState_functional_ternary.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
const Person = props => {
  const myPersonStyle = {
    maxWidth: "300px",
    margin: "10px auto 0",
    padding: "10px 0",
    border: "1px solid #eee",
    boxShadow: "0 2px 3px #ccc",
    textAlign: "center"
  };
  const myDivStyle = { margin: "0 0 8px" };
  return (
    <div style={myPersonStyle}>
      <div onClick={props.click} style={myDivStyle}>
        I'm {props.name} and I am {props.age}.
      </div>
      <div>{props.children}</div>
      <input type="text" value={props.name} readOnly />
    </div>
  );
};
class MyComponent extends Component {
  state = { name: "Bob", age: 38, myBgdColor: "#9fb" };
  myMethod = () =>
    this.setState(prevState => {
      let myColor = prevState.myBgdColor === "#9fb" ? "#ff3" : "#9fb";
      return { myBgdColor: myColor };
    });
  render() {
    const myStyle = {
      marginBottom: "10px",
      padding: "6px",
      backgroundColor: `${this.state.myBgdColor}`
    };
    return (
      <Person click={this.myMethod} name={this.state.name} age={this.state.age}>
        <div style={myStyle}>
          <b>Click on the above text.</b>
          <br />
          I'm the children of Person.
        </div>
      </Person>
    );
  }
}
ReactDOM.render(<MyComponent />, document.getElementById("root"));
