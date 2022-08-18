import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div>
        <h2>
          Além disso, ainda quero estudar {this.props.comecarEstudar} - gosto de
          mineração de dados.
        </h2>
      </div>
    );
  }
}
