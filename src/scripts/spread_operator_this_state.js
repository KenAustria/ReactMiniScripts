// filename: spread-operator-this-state.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyExternalComponent extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.myThree}</h3>
        {/* above: props has access to the whole MyApp constructor data. */}
      </div>
    );
  }
}

class MyApp extends Component {
	state = {
		myOne: "01",
		myTwo: "02",
		myThree: "03",
		myFour: "04",
		myFive: "05"
	}

  render() {
    const myMainContainer = {
      maxWidth: "300px",
      margin: "10px auto",
      padding: "0",
      backgroundColor: "#eee",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
		};

    return (
      <div style={myMainContainer}>
        <MyExternalComponent {...this.state} />
        {/* above: the spread operator contains the whole constructor data. */}
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
