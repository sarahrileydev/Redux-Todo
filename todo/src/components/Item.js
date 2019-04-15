import React from "react";

const Item = props => {
  return (
    <div className="item">
    <h2>{props.item.todo}</h2>
    </div>
  );
}
export default Item;