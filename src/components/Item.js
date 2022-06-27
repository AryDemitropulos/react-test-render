import React, { useState, useEffect } from "react";

const Item = (props) => {
  const nombreComponente = "Componente Item";
  const [contador, setContador] = useState(props.initial);
  const { consoleOnInit, consoleFunction, consoleUseEffect } = props.consoleLvl;

  useEffect(() => {
    if (consoleUseEffect) console.log(nombreComponente, "useEffect", contador);
  });

  //console.log(nombreComponente, contador);
  if (consoleOnInit) console.log(nombreComponente, "onInit", contador);

  function onAdd(increment) {
    setContador(contador + increment);
    if (consoleFunction) console.log(nombreComponente, "setContador", contador);
  }

  return (
    <div className="d-flex d-col component">
      <h4>{nombreComponente}</h4>
      <h5>Contador: {contador}</h5>
      <div className="btn-container d-flex">
        <button onClick={() => onAdd(-1)}>-</button>
        <button onClick={() => onAdd(+1)}>+</button>
        <button>No Hace nada</button>
      </div>
    </div>
  );
};

export default Item;
