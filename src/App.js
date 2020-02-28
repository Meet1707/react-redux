import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h3>Counter: {this.props.ctr}</h3>
        <button onClick={this.props.onIncCounter}>Increment</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onIncCounter: () => dispatch({ type: "INC_COUNTER" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
