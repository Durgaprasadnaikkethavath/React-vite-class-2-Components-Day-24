import React, { Component } from "react";

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      currentTask: "",
    };
  }

  handleAddTask = () => {
    console.log("inside function");

    if (this.state.currentTask) {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, prevState.currentTask],
        currentTask: "",
      }));
    }
    this.display();
  };

  handleChange = (e) => {
    this.setState({
      currentTask: e.target.value,
    });
  };

  display = () => {
    console.log(this.state.tasks);
  };
  render() {
    return (
      <>
        <h1>TodoList</h1>
        <input
          type="text"
          placeholder="Enter your task"
          onChange={this.handleChange}
        />
        <button onClick={() => this.handleAddTask()}>Submit</button>
        <ul>
          {this.state.tasks.map((task) => (
            <li>{task}</li>
          ))}
        </ul>
      </>
    );
  }
}
