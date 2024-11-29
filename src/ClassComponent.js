import React, { Component } from "react";
import ClassComponentChild from "./ClassComponentChild";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickAddValue = this.handleClickAddValue.bind(this);
    console.log("constructor");
  }

  handleClickAddValue() {
    this.setState({ text: this.state.value, value: "" });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps()");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount()");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount()");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate()");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate()");
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }

  render() {
    console.log("render()");
    return (
      <>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClickAddValue}>Добавить текст</button>
        <ClassComponentChild text={this.state.text}></ClassComponentChild>
      </>
    );
  }
}
export default ClassComponent;
