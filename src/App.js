import React, { Component } from "react";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    display: flex;
    justify-items: center;
  }

`;

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header nome="Denise" idade={23} estudando="Mandarim" />
        <br />
        <main>
          <Main comecarEstudar="BackEnd" />
        </main>
        <br />
        <Footer dramaCoreano="Vincenzo"></Footer>
      </>
    );
  }
}
