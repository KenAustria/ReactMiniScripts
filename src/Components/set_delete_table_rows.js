// filename: set_delete-table-rows.js (using the Set() method).
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const myTableRowStyle = { width: "90%", backgroundColor: "#7cf" };
const myTableDataStyle = {
  padding: "8px 12px",
  backgroundColor: "#ddd",
  textAlign: "center"
};
const MyTableRow = props => {
  return (
    <tr style={myTableRowStyle}>
      <td style={myTableDataStyle}>{props.myId}</td>
      <td style={myTableDataStyle}>{props.myName}</td>
      <td style={myTableDataStyle}>
        <input
          type="checkbox"
          name="mySelected"
          checked={props.myCheckboxStatus}
          onChange={props.mySelectedTableRowMethod}
        />
      </td>
    </tr>
  );
};
const MyInput = props => (
  <input
    value={props.myCurrentName}
    placeholder="Name"
    onChange={props.myNameMethod}
  />
);
class MyTable extends Component {
  mySelectedTableRows = new Set([]);
  // this is used to store checked table rows that will be deleted.
  //----------------------------------------------------------------------------------------------
  state = {
    myCurrentName: "",
    myTableData: []
  };
  //----------------------------------------------------------------------------------------------
  myContainerStyle = {
    maxWidth: "500px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#bbb",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  myTableStyle = { width: "90%", margin: "0 auto", border: "1px solid #000" };
  myTableHeadBodyStyle = { borderBottom: "1px solid #000" };
  //----------------------------------------------------------------------------------------------
  myNameMethod = event => {
    let myCurrentCharacters = event.target.value;
    this.setState({ myCurrentName: myCurrentCharacters });
  };
  myAddTableRowMethod = props => {
    const myTableDataClone = [...this.state.myTableData]; // clone the whole array.
    const myNewId = myTableDataClone.length + "x";
    const myNewName = this.state.myCurrentName;
    myTableDataClone.push({
      myId: myNewId,
      myName: myNewName,
      myCheckboxStatus: false
    });
    this.setState({ myCurrentName: "", myTableData: myTableDataClone });
  };
  mySelectedTableRowMethod = (myBoxId, myboxStatus) => {
    const myTableDataIndex = this.state.myTableData.findIndex(myItem => {
      return myItem.myId === myBoxId;
      // needed because the index changes evey time an item is deleted.
    });
    const myTableDataClone = [...this.state.myTableData]; // clone the whole array.
    const myTableDataObjectClone = {
      ...this.state.myTableData[myTableDataIndex]
    };
    // above: clone the current array item.
    myTableDataObjectClone.myCheckboxStatus = !myboxStatus; // toggle checkbox status.
    // above: set the new (inverse) property value, inside the object.
    myTableDataClone[myTableDataIndex] = myTableDataObjectClone;
    // above: replace the current array object, with the updated object.
    if (myboxStatus) {
      // if the checkbox is checked.
      // note: if checked (true), this means the checkbox was just unchecked, because,
      // the setState() has not (yet) updated.
      this.mySelectedTableRows.delete(myBoxId);
      // if myId exists, remove the newly unchecked myId property from the array.
    } else {
      this.mySelectedTableRows.add(myBoxId);
    }
    // above: if myId doesn't exist, add the newly checked myId property to the array.
    this.setState({ myTableData: myTableDataClone });
  };
  myDeleteTableRowMethod = () => {
    let myFilteredInTableData = this.state.myTableData.filter(
      myItem => !this.mySelectedTableRows.has(myItem.myId)
    ); // above: don't include table rows that are inside the mySelectedTableRows array.
    // the state > myTableData contains table rows that ...
    // are not inside the mySelectedTableRows array.
    this.setState({ myTableData: myFilteredInTableData });
    this.mySelectedTableRows.clear();
  };
  //----------------------------------------------------------------------------------------------
  render() {
    return (
      <div style={this.myContainerStyle}>
        <table style={this.myTableStyle}>
          <thead style={this.myTableHeadBodyStyle}>
            <tr style={myTableRowStyle}>
              <th style={myTableDataStyle}>Name</th>
              <th style={myTableDataStyle}>
                <MyInput
                  myCurrentName={this.state.myCurrentName}
                  myNameMethod={this.myNameMethod}
                />
              </th>
              <th style={myTableDataStyle}>
                <button onClick={this.myAddTableRowMethod}>Add new data</button>
              </th>
            </tr>
          </thead>
          <thead style={this.myTableHeadBodyStyle}>
            <tr style={myTableRowStyle}>
              <th style={myTableDataStyle}>Id</th>
              <th style={myTableDataStyle}>Name</th>
              <th style={myTableDataStyle}>
                <button onClick={this.myDeleteTableRowMethod}>
                  Delete selected
                </button>
              </th>
            </tr>
          </thead>
          <tbody style={this.myTableHeadBodyStyle}>
            {this.state.myTableData.map(
              ({ myId, myName, myCheckboxStatus }) => {
                return (
                  <MyTableRow
                    key={myId + myName}
                    myId={myId}
                    myName={myName}
                    myCheckboxStatus={myCheckboxStatus}
                    mySelectedTableRowMethod={() =>
                      this.mySelectedTableRowMethod(myId, myCheckboxStatus)
                    }
                  />
                );
              }
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
ReactDOM.render(<MyTable />, document.getElementById("root"));
