import React, { Component } from "react";
import { TodoList, Form } from "./components";
import {
  addTodo,
  genID,
  findToDo,
  toggleToDo,
  updateToDo,
  removeToDo
} from "./lib/helpers";
import "./App.css";

class App extends Component {
  state = {
    currentTodo: "",
    todos: [
      { id: 1, name: "Do this", checked: true },
      { id: 2, name: "Do that", checked: false },
      { id: 3, name: "Do another one", checked: false }
    ]
  };

  handleRemove = id => {
    const newList = removeToDo(this.state.todos, id);
    this.setState({ todos: newList });
  };

  handleUpdate = id => {
    let toDo = findToDo(this.state.todos, id);
    const toggledToDo = toggleToDo(toDo);
    const updatedList = updateToDo(this.state.todos, toggledToDo);
    this.setState({ todos: updatedList });
  };

  handleChange = evt => {
    this.setState({ currentTodo: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    let newTodos = addTodo(this.state.todos, {
      id: genID(),
      name: this.state.currentTodo,
      checked: false
    });
    this.setState({ todos: newTodos, currentTodo: "", errorMessage: "" });
  };

  handleEmptySubmit = evt => {
    evt.preventDefault();
    this.setState({ errorMessage: "Please provide a todo item" });
  };

  render() {
    const submit = this.state.currentTodo
      ? this.handleSubmit
      : this.handleEmptySubmit;
    return (
      <div>
        {this.state.errorMessage && <span>{this.state.errorMessage}</span>}
        <Form
          handleChange={this.handleChange}
          currentTodo={this.state.currentTodo}
          handleSubmit={submit}
        />
        <TodoList
          todos={this.state.todos}
          handleUpdate={this.handleUpdate}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
