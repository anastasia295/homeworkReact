import React, { Component } from "react";

class ClassComponentChild extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Текст: {this.props.text}</div>
      </div>
    );
  }
}
export default ClassComponentChild;
