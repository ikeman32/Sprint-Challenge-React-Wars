import React from "react";
import "./App.css";
import { Characters } from "./components/People";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const Header = styled.h1`
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;

    position: relative;
    animation: animatetop 1s;

    @keyframes animatetop {
      from {
        top: -300px;
        opacity: 0;
      }
      to {
        top: 0;
        opacity: 1;
      }
    }
  `;

  return (
    <div className="App">
      <Header>React Wars</Header>
      <Characters />
    </div>
  );
};

export default App;
