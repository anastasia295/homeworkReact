import React, { Component } from "react";
import ClassComponentChild from "./ClassComponentChild";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      text: "",
      isValid: true,
    };
    this.textInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleClickAddValue = this.handleClickAddValue.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
    console.log("constructor");
  }

  handleClickAddValue() {
    if (this.state.value.length > 0) {
      this.setState({ text: this.state.value, value: "" });
    }
  }

  handleChange(event) {
    if (event.target.value === "реакт") {
      this.setState({ isValid: false });
    } else {
      this.setState({ isValid: true });
    }
    this.setState({ value: event.target.value });
  }

  focusTextInput() {
    this.textInput.current.focus();
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
          ref={this.textInput}
        />
        <button
          disabled={!this.state.isValid}
          onClick={this.handleClickAddValue}
        >
          Добавить текст
        </button>
        <button onClick={this.focusTextInput}>Установить фокус</button>
        <ClassComponentChild text={this.state.text}></ClassComponentChild>
      </>
    );
  }
}
export default ClassComponent;
