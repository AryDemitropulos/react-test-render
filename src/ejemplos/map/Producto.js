import React from "react";

const Producto = (props) => {
  console.log(props);

  const producto = props.producto;

  return (
    <div>
      <h4>{producto.nombre}</h4>
      <h5>$ {producto.precio}</h5>
    </div>
  );
};

export default Producto;
