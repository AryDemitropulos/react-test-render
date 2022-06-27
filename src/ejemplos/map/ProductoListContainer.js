import React, { useEffect, useState } from "react";
import ProductoList from "./ProductoList";

const productosDesdeBackend = [
  { nombre: "producto 1", precio: 50 },
  { nombre: "producto 2", precio: 25 },
  { nombre: "producto 3", precio: 12 },
  { nombre: "producto 4", precio: 32 },
  { nombre: "producto 5", precio: 43 },
  { nombre: "producto 5", precio: 43 },
  { nombre: "producto 5", precio: 43 },
];

const ProductoListContainer = () => {
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      //Cuerpo de la promesa
      setTimeout(() => {
        resolve(productosDesdeBackend);
      }, 2000);
    }).then((productos) => {
      setListaProductos(productos);
    });
  });

  return (
    <div>
      <ProductoList lista={listaProductos} />
    </div>
  );
};

export default ProductoListContainer;
