import React from "react";

import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Inicio = () => {
  const greeting = '¡Bienvenidos a Ojala!';

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemListContainer/>
      </div>
  );
};

export default Inicio;