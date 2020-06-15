import React from "react";

const BestPokemon = (prop) => {
  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
      <ul>
        {prop.ability.map((element, index) => {
          return <li>{element}</li>;
        })}
      </ul>
    </div>
  );
};

export default BestPokemon;
