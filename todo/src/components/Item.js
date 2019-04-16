import React from "react";
// import { connect } from "react-redux";

// import {addTodo} from "../redux/actions";

const Item = props => {
  console.log("items", props)
  return (
    <div className="item">
    <h2>{props.item.value}</h2>
    </div>
  );
}

export default Item;