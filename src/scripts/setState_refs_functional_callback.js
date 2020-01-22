// filename: setState_refs_functional_callback.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
		myCount : 0
	}

	myCallbackFunction = myParam => {
		(this.myDivElement.innerHTML = "Count: " + myParam);
	}

	// Passing previousState will give a reliable value for your component’s state and props.
	// Here we change the state and pass callback
	incrementCountHandler = () => {
		this.setState(
			previousState => ({ myCount: previousState.myCount + 1}),
			() => this.myCallbackFunction(this.state.myCount)
		);

	}

  render() {
    const myContainer = {
      maxWidth: "200px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#eee",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
		};
		// to be refactored
		// no inline refs callback, because arrow and bind functions create a new function on every re-render
		// If ref callback is defined as inline function, it gets called twice during updates,
		// first with null and then again with the DOM element.
    return (
      <div style={myContainer}>
				<div ref={myDiv => (this.myDivElement = myDiv)}>Waiting</div>
				<button onClick={this.incrementCountHandler}>Click</button>
			</div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
