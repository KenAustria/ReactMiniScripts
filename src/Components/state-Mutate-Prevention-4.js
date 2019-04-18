// filename: state-Mutate-Prevention-4.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
const Person = props => {
  const personStyle = {
    maxWidth: "300px",
    margin: "10px auto",
    padding: "10px",
    backgroundColor: "#bbb",
    border: "1px solid #eee",
    boxShadow: "0 2px 3px #555",
    textAlign: "center"
  };
  const messageStyle = { display: "inline-block", marginBottom: "8px" };
  const inputStyle = { textAlign: "center" };
  return (
    <div style={personStyle}>
      <div style={messageStyle}>
        {props.name} {props.age}
      </div>
      <br />
      <input
        type="text"
        onChange={props.changed}
        value={props.name}
        style={inputStyle}
      />
    </div>
  );
};
class App extends Component {
  state = {
    persons: [
      { id: "asfa1", name: "Max", age: 28 },
      { id: "vasdf1", name: "Alyson", age: 29 },
      { id: "asdf11", name: "Stephanie", age: 26 }
    ]
  };
  nameChangedHandler = (event, id) => {
    const persons = this.state.persons.map(person => {
      return person.id === id
        ? { ...person, name: event.target.value }
        : person;
    });
    this.setState({ persons });
  };
  render() {
    const myContainer = {
      maxWidth: "380px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#9cf",
      textAlign: "center",
      border: "1px solid #000"
    };
    const personsDom = (
      <div>
        {this.state.persons.map((person, index) => {
          return (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              changed={event => this.nameChangedHandler(event, person.id)}
            />
          );
        })}
      </div>
    );
    return <div style={myContainer}>{personsDom}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
