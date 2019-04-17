import React from "react";
import { connect } from "react-redux";

import { completeTodo } from "../redux/actions";

const Todo = props => {
  return (
    <div>
      <h2
        className={`${props.item.completed ? "true" : null}`}
        onClick={e => props.changeToggle(e, props.item.id)}
      >
        {props.item.value}
      </h2>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todo: state.todos
  };
};

export default connect(
  mapStateToProps,
  { completeTodo }
)(Todo);
