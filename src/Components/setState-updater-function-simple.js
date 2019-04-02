// filename: setState-Updater-Function-Simple.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = { myObject: { myObjA: 1, myObjB: 2, myObjC: 3, myObjD: 4 } };

	componentWillMount() {
    this.setState(prevState => {
      const myObjectClone = Object.assign({}, prevState.myObject);
      myObjectClone.myObjB = prevState.myObject.myObjB + 7;
      return { myObject: myObjectClone };
    });
	}

  render() {
    return <div>{this.state.myObject.myObjB}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
