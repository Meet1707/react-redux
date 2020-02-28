import React from "react";
import { connect } from "react-redux";

const Counter = props => {
  return <h3>Counter: {props.ctr}</h3>;
};

const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};

export default connect(mapStateToProps)(Counter);
