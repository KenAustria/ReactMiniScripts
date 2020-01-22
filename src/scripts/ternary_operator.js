// filename: ternary_operator.js
// to view, change this file's name to index.js
import React from "react";
import ReactDOM from "react-dom";
const myComp1Style = {
  padding: "4px",
  backgroundColor: "#ff6",
  borderTop: "1px solid #000"
};
const myComp2Style = {
  padding: "4px",
  backgroundColor: "#afa",
  borderTop: "1px solid #000"
};
const MyComponent1 = () => <div style={myComp1Style}>Component One</div>;
const MyComponent2 = () => <div style={myComp2Style}>Component Two</div>;
class MyContainer extends React.Component {
  state = { myCurrentComponent: true, myCount: 0 };
  componentDidMount() {
    this.myInterval = setInterval(() => {
      if (this.state.myCurrentComponent === false && this.state.myCount < 9) {
        this.setState({
          myCurrentComponent: true,
          myCount: this.state.myCount + 1
        });
      } else if (
        this.state.myCurrentComponent === true &&
        this.state.myCount < 9
      ) {
        this.setState({
          myCurrentComponent: false,
          myCount: this.state.myCount + 1
        });
      } else {
        this.setState({ myCount: this.state.myCount + 1 });
        clearInterval(this.myInterval);
      }
    }, 2000);
  }
  myForceReload() {
    window.location.reload();
  }
  render() {
    const myMainContainer = {
      maxWidth: "440px",
      margin: "10px auto",
      padding: "0",
      backgroundColor: "#eee",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    const myMessageStyle = { padding: "8px 0", fontWeight: "normal" };
    const myComponentsStyle = { padding: "8px 0", borderTop: "1px solid #000" };
    return (
      <div style={myMainContainer}>
        <div style={myMessageStyle}>
          Two components are toggling via Ternary Operator
        </div>
        {this.state.myCurrentComponent ? <MyComponent1 /> : <MyComponent2 />}
        <div style={myComponentsStyle}>
          <button onClick={this.myForceReload}>Reload this Webpage</button>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<MyContainer />, document.getElementById("root"));
