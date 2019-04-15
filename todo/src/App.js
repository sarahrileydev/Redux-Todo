import React, { Component } from "react";
import "./App.css";

import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          todo: "meditate",
          id: 123,
          completed: false
        },
        {
          todo: "walk dogs",
          id: 124,
          completed: false
        },
        {
          todo: "write code",
          id: 125,
          completed: false
        }
      ]
    };
  }
  render() {
    return ( 
    <div className="App">
    <h1>Todo List</h1>
    <ItemForm />
    <ItemList list={this.state.list}/>
    </div>
    );
  }
}

export default App;
