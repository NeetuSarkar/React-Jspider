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
    this.setState({ name: "Virat" });
  };
  render() {
    return (
      <div>
        <h1>State in Class Component</h1>
        <h2 style={{ color: "orangered" }}>Name: {this.state.name}</h2>
        <h2 style={{ color: "orangered" }}>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}
