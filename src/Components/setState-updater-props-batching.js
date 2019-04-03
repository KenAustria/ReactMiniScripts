// filename: setState_updater_props_batching.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyStateComponent extends Component {
  state = { myNumber: 0 };

	myContainerStyle = {
    maxWidth: "360px",
    margin: "10px auto",
    padding: "6px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };

	componentDidMount() {
    this.myMethod();
  }

	myMethod = () => {
    this.setState((prevState, props) => {
			return { myNumber: props.myNumberProps + 1 };
    });
    this.setState((prevState, props) => {
      return { myNumber: props.myNumberProps + 1 };
    });
    this.setState((prevState, props) => {
      return { myNumber: props.myNumberProps + 1 };
    });
    this.setState((prevState, props) => {
      return { myNumber: props.myNumberProps + 1 };
    });
    // above: only the last setState is applied.
  };

	render() {
    return (
      <div style={this.myContainerStyle}>
        <div>
          Using setState()'s<br />
          updater function's props parameter<br />
          still batches multiple setState()s<br />
          If it didn't batch,<br />
          the number below would be: 44<br />
          <hr />
					Only the last setState is applied.<br />
          {this.state.myNumber}
          <hr />
          prevProps isn't used, because,<br />
          it's props not prevProps, because, the props parameter value will not
          change.
        </div>
      </div>
    );
  }
}

class MyPropsComponent extends Component {
  render() {
    return <MyStateComponent myNumberProps={10} />;
  }
}
ReactDOM.render(<MyPropsComponent />, document.getElementById("root"));
