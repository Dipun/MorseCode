import React, { Component } from "react";
//import "./App.css";
import TextAreaInput from "./Components/inputComponent";
import {morse} from "./Utils/morseCodes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      code: "text"
    };
    this.unknown = "?";
  }

  getMorseCode = e => {
    const spacer = " ";
    let morseCode = [];
    console.log(e);
    if(e !== ""){
    let text = [...e.toLowerCase()] ;
    morseCode = text.map(inputText => morse[inputText] );
    }
    return morseCode.join(spacer);
  };
  getText = e => {
    const spacer = "";
    let decodeText = [];
    let input = e.toLowerCase();
    let morseCode = input.split(" ");
    console.log(input);
    decodeText = morseCode.map(inputCode => Object.keys(morse).find(key => morse[key] === inputCode));
    return decodeText.join(spacer);
  };

  handleTextCodeChange = inputValue => {
    this.setState({ code: "text", inputValue: inputValue });
  };

  handleMorseCodeChange = inputValue => {
    this.setState({ code: "morse", inputValue: inputValue });
  };

  render() {
    let code, inputValue;
    ({code,inputValue} = {code : this.state.code, inputValue : this.state.inputValue})
    const textCode = code === "morse" ? this.getText(inputValue) : inputValue;
    const morseCode =
      code === "text" ? this.getMorseCode(inputValue) : inputValue;
    return (
      <div>
        <header>
          <h1>Morse Encoder And Decoder</h1>
        </header>
        <div className="entry-content">
          <p>Turn the text you type into Morse Code and vice versa!</p>
          <p>
            Simply enter some text into the top box.Your text will be turned
            into dots and dashes that define the Morse Code characters and you
            can decode the Morse code also.
          </p>
          <p>
            <a href="https://en.wikipedia.org/wiki/Morse_code">
              Info on Morse Code
            </a>
          </p>
          <div className="morse">
            <p> Your plain text!</p>
            <TextAreaInput
              inputValue={textCode}
              onInputChange={this.handleTextCodeChange}
              placeHolder="Enter some text here,Your morse code will appear in the below area."
            />
            <p>Your morse code!</p>
            <TextAreaInput
              inputValue={morseCode}
              onInputChange={this.handleMorseCodeChange}
              placeHolder="Enter some Morse code here,Your decoded text will appear in the above area."
            />
          </div>
          <p>
            If you like this Morse Code Encoder &nbsp; / decoder and would like
            info on including the plugin&nbsp;on your own website (it’s free!),
            then you can find more info{" "}
            <a
              title="Morse Encode Plugin"
              href="http://www.jdhorn.com/web-toys/morse-encode/morse-encode-plugin/?csspreview=true"
            >
              right here.
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;