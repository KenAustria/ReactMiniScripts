// filename: lifecycle-componentDidCatch-Error.js
// this file must be named index.js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    const errorStyle = {
      display: 'inline-block',
      width: '80%',
      margin: '6px auto',
      padding: '6px',
      border: '1px solid #000',
      borderRadius: '10px',
      backgroundColor: '#800',
      color: '#ff9',
      textDecoration: 'none'
    };
    if (this.state.errorInfo) {
      return (
        <div>
          <div style={errorStyle}>
            {this.state.error && this.state.error.toString()}
          </div>
          <div style={errorStyle}>
            Component stack: {this.state.errorInfo.componentStack}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
class MyErrorCauser extends Component {
  constructor(props) {
    super(props);
    this.state = { errorStatus: false };
    this.myErrorMethod = this.myErrorMethod.bind(this);
  }
  myErrorMethod = () => {
    this.setState({ errorStatus: true });
  };
  render() {
    const divStyle = {
      display: 'inline-block',
      width: '80%',
      margin: '6px auto',
      padding: '6px',
      border: '1px solid #000',
      borderRadius: '10px',
      backgroundColor: '#ddd',
      color: '#444',
      textDecoration: 'none'
    };
    if (this.state.errorStatus === true) {
      throw new Error('error thrown');
    }
    const buttonStyle = { marginBottom: '8px', fontSize: '0.8rem' };
    return (
      <div style={divStyle}>
        <button onClick={this.myErrorMethod} style={buttonStyle}>
          Click to throw an error
        </button>
        <div>Customizing the error message</div>
      </div>
    );
  }
}

const MyApp = (props) => {
	const mainContainer = {
		maxWidth: '360px',
		minHeight: '130px',
		margin: '10px auto',
		padding: '10px 0',
		backgroundColor: '#00FFFF',
		textAlign: 'center',
		border: '1px solid #000',
		fontSize: '16px',
		fontFamily: 'Helvetica',
		fontWeight: 'normal'
	};
  return (
    <div style={mainContainer}>
      <ErrorBoundary>
        <MyErrorCauser />
      </ErrorBoundary>
    </div>
  );
}
ReactDOM.render(<MyApp />, document.getElementById('root'));
