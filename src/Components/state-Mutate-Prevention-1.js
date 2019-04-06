// filename: state-Mutate-Prevention-1.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const ItemData = props => {
	const ItemDataStyle = {
    maxWidth: "300px",
    margin: "0 auto",
    padding: "10px",
    backgroundColor: "#bbb",
    border: "1px solid #eee",
    borderRadius: "12px",
    boxShadow: "0 2px 3px #555",
    textAlign: "center"
	};
	const inputStyle = {
    width: "90%",
    marginBottom: "10px",
    textAlign: "center",
    fontSize: "1.0rem"
  };
  return (
    <div style={ItemDataStyle}>
			<input
				type="text"
				style={inputStyle}
				value={props.itemPropName}
				onChange={props.changedPropMethod}
			/>
			<div>My value is: {props.itemPropName}</div>
    </div>
  );
};

class App extends Component {
	state = {
    selectedItem: {
      itemData: { itemName: "", itemDesc: "" },
      itemOffer: { offerId: "" }
    },
    count: ""
	};

	handleStatusChange = event => {
    const myLocal_selectedItem_ItemData_Object = {
      ...this.state.selectedItem.itemData
    };
    myLocal_selectedItem_ItemData_Object.itemName = event.target.value;
    const myLocal_selectedItem_Object = { ...this.state.selectedItem };
    myLocal_selectedItem_Object.itemData = myLocal_selectedItem_ItemData_Object;
    this.setState({ selectedItem: myLocal_selectedItem_Object });
  };

  render() {
		const myContainer = {
      maxWidth: "380px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#9cf",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "normal"
    };
    return (
      <div style={myContainer}>
				<ItemData
					itemPropName={this.state.selectedItem.itemData.itemName}
					changedPropMethod={this.handleStatusChange}
				/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
