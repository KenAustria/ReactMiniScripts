// filename: table_populate_map.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myStateData: [
        { myId: 1, myName: "Foo", myAge: "30" },
        { myId: 2, myName: "Bar", myAge: "22" },
        { myId: 3, myName: "Baz", myAge: "35" }
      ]
    };
  }
  render() {
    const myContainer = {
      maxWidth: "300px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ff9",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    return (
      <div style={myContainer}>
        <div>Populate a Table - map()</div>
        <hr />
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.myStateData.map((myPerson, i) => (
              <TableRow myPropData={myPerson} key={i} />
            ))}
            {/* above: <TableRow /> class with a React required attribute inside it:  key={i}.
            this invokes class TableRow's render() method,
            <td> one gets & places its value (via the map() method) in its table row,
            then <td> two, then <td> three,
            then map() does the same for the next myStateData >Object.
            here, the (React manditory) "i" parameter and key={i} ...
            represents the current HTML element. */}
          </tbody>
        </table>
      </div>
    );
  }
}
class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.myPropData.myId}</td>
        <td>{this.props.myPropData.myName}</td>
        <td>{this.props.myPropData.myAge}</td>
      </tr>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
