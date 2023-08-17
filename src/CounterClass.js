import React, { Component } from "react";

class CounterClass extends Component {
  constructor() {
    super();
    this.state = {
      val: 0,
    };
  }

  render() {
    return (
      <>
        <h1>{this.state.val}</h1>
        <button onClick={() => this.setState({ val: this.state.val + 1 })}>
          INC+
        </button>
        <button onClick={() => this.setState({ val: this.state.val - 1 })}>
          DEC-
        </button>
      </>
    );
  }
}

export default CounterClass;
