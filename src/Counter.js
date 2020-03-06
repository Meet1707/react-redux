import React from "react";
import { connect } from "react-redux";

const Counter = props => {
  return (
    <h3>
      Counter: {props.ctr}
      <br />
      name: {props.name}
    </h3>
  );
};

const mapStateToProps = state => {
  return {
    ctr: state.reducer.counter,
    name: state.reducer2.name
  };
};

export default connect(mapStateToProps)(Counter);
