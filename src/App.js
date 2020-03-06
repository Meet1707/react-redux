import React from "react";
import { connect } from "react-redux";
import "./App.css";
import * as actionType from "./store/actions";
import Counter from "./Counter";

const App = props => {
  return (
    <div>
      <Counter />
      <button onClick={props.onIncCounter}>Increment</button>
      <br />
      <button onClick={props.onIncCounterBy10}>Increment by 10</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onIncCounter: () => dispatch({ type: actionType.INC_COUNTER }),
    onIncCounterBy10: () => dispatch(actionType.incBy10())
  };
};

export default connect(null, mapDispatchToProps)(App);
