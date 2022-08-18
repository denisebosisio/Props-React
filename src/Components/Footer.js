import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <h2>Meu dorama favorito é: {this.props.dramaCoreano}</h2>
        <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/5/5b/Vincenzo_TV_series.jpg/250px-Vincenzo_TV_series.jpg" />
      </footer>
    );
  }
}
