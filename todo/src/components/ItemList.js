import React from "react";
import Item from "./Item";
import { connect } from "react-redux";

import { addTodo } from "../redux/actions";

class ItemList extends React.Component {
  render() {
    console.log("itemlist props", this.props.todos);
    return (
      <div className="item-list">
        {this.props.todos.map(item => (
          // console.log(item)

          <Item key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {
    addTodo
  }
)(ItemList);
