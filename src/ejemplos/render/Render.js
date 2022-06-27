import React, { useState } from "react";
import ItemListContainer from "../../components/ItemListContainer";

const Render = () => {
  const condicion = true;

  let [consoleOnInit, setConsoleOnInit] = useState(true);
  let [consoleFunction, setConsoleFunction] = useState(true);
  let [consoleUseEffect, setConsoleUseEffect] = useState(true);

  function handdleOnInit() {
    setConsoleOnInit(!consoleOnInit);
  }

  function handdleFunction() {
    setConsoleFunction(!consoleFunction);
  }

  function handdleUseEffect() {
    setConsoleUseEffect(!consoleUseEffect);
  }
  return (
    <div>
      <div className="d-flex console-inputs">
        <h5>Consoles</h5>
        <div>
          <label>On Init</label>
          <input
            type="checkbox"
            name="onInit"
            checked={consoleOnInit}
            onChange={handdleOnInit}
          ></input>
        </div>
        <div>
          <label>Function</label>
          <input
            type="checkbox"
            name="onInit"
            checked={consoleFunction}
            onChange={handdleFunction}
          ></input>
        </div>
        <div>
          <label>Use Effect</label>
          <input
            type="checkbox"
            name="consoleUseEffect"
            checked={consoleUseEffect}
            onChange={handdleUseEffect}
          ></input>
        </div>
      </div>
      <ItemListContainer
        initial={5}
        consoleLvl={{ consoleOnInit, consoleFunction, consoleUseEffect }}
      />
    </div>
  );
};

export default Render;
