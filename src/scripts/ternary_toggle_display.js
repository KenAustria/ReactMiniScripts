// filename: ternary_toggle_display.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";

class MyApp extends React.Component {
  state = {
		aBoolean: true
	};

	onToggleBoolean = () => {
		this.setState({
			aBoolean: !this.state.aBoolean
		});
	}

  render() {
    return (
      <div>
        <button onClick={this.onToggleBoolean}>
          Click to toggle display
        </button>
        {this.state.aBoolean ? <div>Hello</div> : null}
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
