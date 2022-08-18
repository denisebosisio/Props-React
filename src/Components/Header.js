import React from "react";

export default function Header(props) {
  return (
    <header>
      <h1>Olá, eu sou a {props.nome}.</h1>
      <h2>Fiz {props.idade} anos recentemente.</h2>
      <h2>
        Eu gosto muito de estudar e, no momento, estou estudando{" "}
        {props.estudando}.
      </h2>
    </header>
  );
}
