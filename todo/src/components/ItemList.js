import React from "react";
import Item from "./Item";
import { connect } from "react-redux";

import { addTodo, completeTodo } from "../redux/actions";

class ItemList extends React.Component {

  changeToggle = (e, id) => {
    e.preventDefault();
    this.props.completeTodo(id);
  };


  render() {
    // console.log("itemlist props", this.props.todos);
    
    return (
      <div className="item-list">
        {this.props.todos.map(item => (
          // console.log(item)

          <Item key={item.id} item={item} changeToggle={this.changeToggle}/>
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
    addTodo, completeTodo
  }
)(ItemList);
