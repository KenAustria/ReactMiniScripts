// filename: setState_only_update_inner_array.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyApp extends Component {
  state = {
    game: {
      gameDate: "",
      place: "",
      result: [
        { win: false, team: "Warriors", checkboxName: "Game1" },
        { win: false, team: "Spurs", checkboxName: "Game2" },
        { win: false, team: "Bulls", checkboxName: "Game3" },
        { win: false, team: "Heat", checkboxName: "Game4" }
      ]
    }
  };
  myContainerStyle = {
    maxWidth: "320px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000"
  };
  myMainSectionStyle = {
    maxWidth: "90%",
    margin: "0 auto 6px",
    padding: "8px 0 8px 10px",
    backgroundColor: "#ff9",
    textAlign: "left",
    border: "1px solid #000",
    borderRadius: "10px"
  };
  handleChange = (event, myItemObject) => {
    const myResultClone = this.state.game.result.map(myCurrItem => {
      return myCurrItem.checkboxName === myItemObject
        ? { ...myCurrItem, win: event.target.checked }
        : myCurrItem;
    });
    this.setState({ game: { result: myResultClone } });
  };
  render() {
    const myCheckboxButtons = this.state.game.result.map(myCurrentItem => (
      <div key={myCurrentItem.checkboxName} style={this.myMainSectionStyle}>
        <input
          type="checkbox"
          name={myCurrentItem.checkboxName}
          checked={myCurrentItem.checkboxName.win}
          onChange={event => this.handleChange(event, myCurrentItem.checkboxName)}
        />
        <span>{myCurrentItem.team}</span>
        <span>{myCurrentItem.win && ": Winner"}</span>
      </div>
    ));
    return (
      <div style={this.myContainerStyle}>
        <div>Basketball</div>
        <hr />
        {myCheckboxButtons}
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
// a radio button cannot be used in this situation.
// a radio button must interact with at least one other radio button.
//
// to make each team interact with each other via radio buttons, then,
// change each input type="checkbox" attribute to type="radio".
// change each input name attribute to name="theSameName", then,
// alter the win logic.
//
// the game object doesn't need to be cloned, because it isn't aware that
// the contents of the result array are altered.
// to test, comment out the setState(), console.log(this.state.game);
// toggle a checkbox. if the game object alters, then mutation is occuring.
//
// IMPORTANT (below)
// note how setState({game:{result:myResultClone}}); embedded objects are accessed.
// if a property exists & the updating content doesn't include that existing property,
// then, the existing property isn't touched.
// meaning, the existing property isn't removed.
