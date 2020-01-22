// filename: state-Mutate-Prevention-2.js
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
  //-------------------------------------------------------------------------------------------------
  return (
    <div style={personStyle}>
      <div onClick={props.click} style={messageStyle}>
        {props.name} {props.age}: Click this text
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
//==================================================================================================
class App extends Component {
  state = {
    persons: [
      { id: "asfa1", name: "Max", age: 28 },
      { id: "vasdf1", name: "Manu", age: 29 },
      { id: "asdf11", name: "Stephanie", age: 26 }
    ],
    showPersons: false
  };
  //-------------------------------------------------------------------------------------------------
  myContainer = {
    maxWidth: "380px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#9cf",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica",
    fontWeight: "lighter"
  };
  buttonStyle = {
    margin: "8px",
    padding: "8px",
    backgroundColor: "#fff",
    border: "1px solid #000",
    font: "inherit",
    cursor: "pointer",
    outline: "none"
  };
  //-------------------------------------------------------------------------------------------------
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id; // needed because the index changes evey time an item is deleted.
    });
    const personsClone = [...this.state.persons];
    // extract & copy all of the object literals out of the state >persons array.
    // since it's stripped out of an array, make it an array (again).
    const personClone = { ...this.state.persons[personIndex] };
    // extract & copy the raw data of the state >persons array >indicated item.
    // since it's stripped out of an object, make it an object literal (again).
    // const personClone = Object.assign({}, this.state.persons[personIndex]);// alternative technique.
    personClone.name = event.target.value;
    // whatever is inside the input field becomes the new name value.
    // now, this person object (copy) has its name property updated.
    // its id & age properties have not been altered.
    personsClone[personIndex] = personClone;
    // replace the specified persons >array item (an object literal) ...
    // with the new updated object literal.
    // in this object literal, only its name property has been altered.
    // this happens with every alteration (key stroke) inside the text field.
    this.setState({ persons: personsClone });
    // replace the real state >persons array (of objects), with this copy.
  };
  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); // remove the specified (one) object literal.
    this.setState({ persons: persons });
  };
  togglePersonsHandler = () => {
    this.setState(prevState => {
      return { showPersons: !prevState.showPersons };
    });
  };
  //-------------------------------------------------------------------------------------------------
  render() {
    let personsDom = null;
    if (this.state.showPersons) {
      personsDom = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div style={this.myContainer}>
        <button style={this.buttonStyle} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {personsDom}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
