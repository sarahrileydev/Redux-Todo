import React from "react";
import { connect } from "react-redux";

import {addTodo} from "../redux/actions";

const Item = props => {
  console.log(props)
  return (
    <div className="item">
    <h2>{props.item.value}</h2>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    item: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(Item);