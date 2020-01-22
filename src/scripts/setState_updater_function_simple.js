// filename: setState_updater_function_simple.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = { myObject: { myObjA: 1, myObjB: 2, myObjC: 3, myObjD: 4 } };

	// deprecate lifecycle method
	// componentWillMount() {
  //   this.setState(prevState => {
  //     const myObjectClone = Object.assign({}, prevState.myObject);
  //     myObjectClone.myObjB = prevState.myObject.myObjB + 7;
  //     return { myObject: myObjectClone };
  //   });
	// }

	componentDidMount() {
		const myObjectClone = { ...this.state.myObject};
		myObjectClone.myObjB = this.state.myObject.myObjB + 7;
		this.setState({
			myObject: myObjectClone
		});
	}

  render() {
    return <div>{this.state.myObject.myObjB}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
