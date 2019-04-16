import React from "react";
import { connect } from 'react-redux';
import {addTodo} from "../redux/actions";

class ItemForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleBtnClick = e => {
    e.preventDefault();
    this.props.addTodo(this.state.item);
    // this.setState({
    //   item: ""
    // });
  };

  render() {
    return (
      <div className="form">
        <form>
          <input
            type="text"
            name="item"
            value={this.state.item}
            placeholder="Add todo..."
            onChange={this.handleChanges}
          />
          <button onClick={this.handleBtnClick}>Add Item</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(ItemForm);
