import React from "react";
import "./App.css";
import TodoList from "./ToDo";

class App extends React.Component {
  // Don't use class variables other than state, props

  // You can also just say state = {items: [], text: "" }
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <br />
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
            name="text"
          />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }

  handleChange = (e) => {
    // Always use set state
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Stop form submit
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  };
}

export default App;
