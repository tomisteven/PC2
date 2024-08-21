import React, { useEffect, useState, useMemo } from "react";
import { CobrosAPI } from "../../../../api/Cobros";
import { Product } from "../../../../api/product";

import "./NuevaFinanciacion.css";

import Paso1 from "./pasosDeFinanciacion/Paso1";
import Paso2 from "./pasosDeFinanciacion/Paso2";
import Paso3 from "./pasosDeFinanciacion/Paso3";

const clientController = new CobrosAPI();
const ProductController = new Product();

export default function NuevaFinanciacion({ setStateLocalStorage }) {
  const usuario = useMemo(
    () => JSON.parse(localStorage.getItem("usuarioFinanciero")),
    []
  );
  const userId1 = useMemo(
    () => usuario._id || localStorage.getItem("idUserFinanciero"),
    [usuario]
  );

  const [products, setProducts] = useState([]);
  const [financiacion, setFinanciacion] = useState({});
  const [loading, setLoading] = useState(false);
  const [simulacroFinanciacion, setSimulacroFinanciacion] = useState([]);
  const [paso, setPaso] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const productos = await ProductController.getProducts();
        const productosFinales = productos.filter(
          (producto) => producto.price > 70000 && producto.stock
        );

        setProducts(
          productosFinales.map((producto) => ({
            key: producto._id,
            text: `${producto.name} - $${producto.price}`,
            image: { avatar: false, src: producto.image },
            value: producto.name,
            price: producto.price,
          }))
        );
      } catch (error) {
        alert("Error en el servidor, intente más tarde");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleProductoChange = (e, data) => {
    const selectedProduct = data.options.find(
      (option) => option.value === data.value
    );
    setFinanciacion((prev) => ({
      ...prev,
      producto: data.value,
      precio: selectedProduct.price,
    }));
  };

  const handleTipoFinanciacionChange = (e, data) => {
    setFinanciacion((prev) => ({
      ...prev,
      tipoFinanciacion: data.value,
    }));
  };

  switch (paso) {
    case 1:
      return (
        <Paso1
          products={products}
          financiacion={financiacion}
          setFinanciacion={setFinanciacion}
          simulacroFinanciacion={simulacroFinanciacion}
          setSimulacroFinanciacion={setSimulacroFinanciacion}
          paso={paso}
          setPaso={setPaso}
          userId1={userId1}
          clientController={clientController}
          setLoading={setLoading}
          loading={loading}
          handleProductoChange={handleProductoChange}
        />
      );

    case 2:
      return (
        <Paso2
          handleTipoFinanciacionChange={handleTipoFinanciacionChange}
          paso={paso}
          setPaso={setPaso}
        />
      );
    case 3:
      return (
        <Paso3
          financiacion={financiacion}
          userId1={userId1}
          usuario={usuario}
          clientController={clientController}
          setLoading={setLoading}
          setStateLocalStorage={setStateLocalStorage}
        />
      );
    default:
      return null;
  }
}
