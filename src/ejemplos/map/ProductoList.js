import React from "react";
import Producto from "./Producto";

const ProductoList = (props) => {
  const listaProductos = props.lista;

  return (
    <div>
      {listaProductos.map((cadaProducto) => {
        return <Producto producto={cadaProducto} stock="5" />;
      })}
    </div>
  );
};

export default ProductoList;
