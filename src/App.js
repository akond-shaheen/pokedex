import React from "react";
import { render } from "@testing-library/react";
import Logo from "./component/Logo";
import BestPokemon from "./component/BestPokemon";
import CaughtPokemon from "./component/CaughtPokemon";

function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();

  return (
    <div>
      <Logo appname="Pokedex" />
      <BestPokemon ability={abilities} />
      <CaughtPokemon day={date} />
    </div>
  );
}

export default App;
