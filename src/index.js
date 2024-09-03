import React from "react";
import ReactDOM from "react-dom";
import Confetti from "react-confetti";
import greet from "./greet"; //Import the greet function from the greet.js module
import "./styles.css";

const GreetingMessage = greet("Clare"); // Use the greet function to generate the message

function App() {
  return (
    <div className="App">
      <h1>{GreetingMessage}</h1>
      <Confetti />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
