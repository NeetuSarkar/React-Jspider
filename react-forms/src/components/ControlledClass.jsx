import React, { Component } from "react";

class ControlledClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "",
    };
  }

  handleChange = (event) => {
    console.log(event);
    this.setState({ val: event.target.value });
  };

  handleClick = () => {
    console.log(this.state.val);
  };

  clearInput = () => {
    this.setState({ val: "" });
  };

  render() {
    return (
      <div>
        <h1>{"Controlled form in a class comp".toUpperCase()}</h1>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={this.handleChange}
          value={this.state.val}
        />
        <button onClick={this.handleClick}>Print Name</button>
        <h1>{this.state.val}</h1>
        <button onClick={this.clearInput}>Clear the Input</button>
      </div>
    );
  }
}

export default ControlledClass;
