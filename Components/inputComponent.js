import React, { Component } from "react";
import "../style.scss";

class TextAreaInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onInputChange(e.target.value);
  }

  render() {
    const inputValue = this.props.inputValue;
    const placeHolder = this.props.placeHolder;
    return (
      <div>
        <textarea
          name="inputContainer"
          onChange={this.handleChange}
          id="inputContainer"
          value={inputValue}
          cols="200"
          rows="10"
          placeholder={placeHolder}
          className="textarea"
        ></textarea>
      </div>
    );
  }
}
export default TextAreaInput;