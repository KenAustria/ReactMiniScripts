// filename: setState_async_tester.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyApp extends Component {
  state = { username: "Kenneth" };

  shortenNameHandler = () => this.setState({ username: "Ken" });
  componentDidUpdate = () => console.log(this.state.username); // immediate
  render() {
    const myMainContainer = {
      maxWidth: "200px",
      margin: "10px auto",
      padding: "6px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000"
    };
    return (
      <div style={myMainContainer}>
        <button onClick={this.shortenNameHandler}>Shorten Name</button>
        <span>{this.state.username}</span>
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
