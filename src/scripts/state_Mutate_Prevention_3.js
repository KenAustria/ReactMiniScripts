// filename: state-Mutate-Prevention-3.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myState: {
        myStateName: "",
        myStateEmail: "",
        myStateAge: "",
        myStateGreet: ""
      }
    };
    // myState allows all of the state's properties to be simultaneously be replaced,
    // and avoids mutating the state.
    // the whole real state cannot be simultaneously be replaced.
  }
  mySubmit = (myGreetParameter, event) => {
    event.preventDefault();
    const myStateCopy = { ...this.state.myState }; // avoids mutating the state.
    // ... copies & strips all of properties out of an object or an array.
    // { ... } places the striped out properties (back) into an object wrapper.
    myStateCopy.myStateName = this.myName.value;
    myStateCopy.myStateEmail = this.myEmail.value;
    myStateCopy.myStateAge = this.myAge.value;
    myStateCopy.myStateGreet = myGreetParameter;
    this.setState({ myState: myStateCopy });
    // replace the whole previous (my)state, with the new (copy) state.
  };
  render() {
    const myMainContainer = {
      maxWidth: "300px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#5ae",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    const myInputStyle = {
      minWidth: "70%",
      display: "block",
      margin: "4px auto",
      textAlign: "center"
    };
    return (
      <div style={myMainContainer}>
        <form onSubmit={this.mySubmit}>
          <input
            type="text"
            placeholder="Name"
            ref={myInput => {
              this.myName = myInput;
            }}
            style={myInputStyle}
          />
          <input
            type="text"
            placeholder="Email"
            ref={myInput => {
              this.myEmail = myInput;
            }}
            style={myInputStyle}
          />
          <input
            type="text"
            placeholder="Age"
            ref={myInput => {
              this.myAge = myInput;
            }}
            style={myInputStyle}
          />
          <input
            type="submit"
            value="Submit"
            onClick={event => this.mySubmit("Hello", event)}
          />
        </form>
        <MyDisplayData myProps={this.state.myState} />
      </div>
    );
  }
}
const MyDisplayDataStyle = {
  maxWidth: "60%",
  minHeight: "80px",
  margin: "0 auto",
  padding: "10px",
  backgroundColor: "#ff9",
  border: "1px solid #000"
};
// Below: {myProps} is an ES6 deconstructed version of props.myProps.
// the { } are required. the { } causes the parameter's () to be required.
const MyDisplayData = ({ myProps }) => (
  <div>
    <hr />
    <div style={MyDisplayDataStyle}>
      <div>{myProps.myStateGreet}</div>
      <div>{myProps.myStateName}</div>
      <div>{myProps.myStateEmail}</div>
      <div>{myProps.myStateAge}</div>
    </div>
  </div>
);
ReactDOM.render(<MyForm />, document.getElementById("root"));
