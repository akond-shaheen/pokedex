import React, { useState, useEffect } from "react";

const BestPokemon = ({ pokemon }) => {
  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
      <ul>
        {pokemon.abilities.map((element, index) => {
          return <li key={index}>{element.ability.name}</li>;
        })}
      </ul>
    </div>
  );
};
const BestPokemonFetcher = () => {
  const [bestPokemon, setBestPokemon] = useState(null);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((response) => response.json())
      .then((data) => setBestPokemon(data));
  }, []);

  return !bestPokemon ? null : <BestPokemon pokemon={bestPokemon} />;
};

export default BestPokemonFetcher;
