import React from "react";
import "./App.css";

import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <ItemForm />
      <ItemList />
    </div>
  );
}

export default App;
