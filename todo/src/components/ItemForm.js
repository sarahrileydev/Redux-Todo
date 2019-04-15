import React from "react";

class ItemForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div className="form">
        <form>
          <input
            type="text"
            name="input"
            value={this.state.input}
            placeholder="Add todo..."
          />
        </form>
      </div>
    );
  }
}

export default ItemForm;
