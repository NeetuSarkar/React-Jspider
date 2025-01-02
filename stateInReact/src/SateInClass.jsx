import React, { Component } from "react";

export default class SateInClass extends Component {
  constructor() {
    super();
    this.state = {
      name: "Neetu",
      count: 0,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.count);
  };
  changeName = () => {
    this.state.name === "Neetu"
      ? this.setState({ name: "Virat" })
      : this.setState({ name: "Neetu" });
  };
  render() {
    return (
      <div>
        <h1>State in Class Component</h1>
        <h2 style={{ color: "orangered" }}>Name: {this.state.name}</h2>
        <h2 style={{ color: "orangered" }}>Count: {this.state.count}</h2>
        <button
          style={{
            marginRight: "10px",
            backgroundColor: "orchid",
            fontSize: "1.25rem",
          }}
          onClick={this.increment}
        >
          Increment
        </button>
        <button
          style={{ backgroundColor: "orchid", fontSize: "1.25rem" }}
          onClick={this.changeName}
        >
          Change Name
        </button>
      </div>
    );
  }
}
