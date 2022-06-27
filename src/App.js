import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import { useState } from "react";
import Producto from "./ejemplos/map/Producto";
import ProductoList from "./ejemplos/map/ProductoList";
import ProductoListContainer from "./ejemplos/map/ProductoListContainer";
import Render from "./ejemplos/render/Render";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Productos:</h1>
        <Render />
      </header>
    </div>
  );
}

export default App;
