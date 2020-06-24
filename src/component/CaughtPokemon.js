import React, { useState } from "react";

const CaughtPokemon = (prop) => {
  const [totalCaught, setTotalCaught] = useState(0);

  const incrementTotal = () => setTotalCaught(totalCaught + 1);

  return (
    <div>
      <p>
        Caught {totalCaught} Pokemon on {prop.date}
      </p>

      <button onClick={incrementTotal}>Increment</button>
    </div>
  );
};

export default CaughtPokemon;
