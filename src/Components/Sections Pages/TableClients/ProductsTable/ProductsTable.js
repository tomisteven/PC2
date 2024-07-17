import React, { useState, useContext } from "react";
import "./ProductsTable.css";
import { GlobalContext } from "../../../../context/GlobalState";
import { Button, Input, Image, Select } from "semantic-ui-react";
import { toast, ToastContainer } from "react-toastify";
import { Dna } from "react-loader-spinner";

import { Product } from "../../../../api/product";

const productController = new Product();

const Producto = ({ producto, changeState }) => {
  const [formValues, setFormValues] = useState({
    name: producto.name,
    category: producto.category,
    price: producto.price,
    stock: producto.stock,
    image: producto.image,
    cantidad: producto.cantidad,
    orden: producto.orden,
    url: producto.url,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSelectChange = (e, { name, value }) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleEditClick = async () => {
    formValues.price = parseInt(formValues.price);
    formValues.cantidad = parseInt(formValues.cantidad);

    const res = await productController.editProduct(formValues, producto._id);
    res
      ? toast.success("Producto editado con exito", { autoClose: 1000 })
      : toast.error("Error al editar producto", { autoClose: 1000 });

    setTimeout(() => {
      changeState();
    }, 1000);
  };

  return (
    <div className="producto-table">
      <div className="producto-table__info">
        <Image src={formValues.image} size="small" centered />
        <Input
          className="input-producto"
          size="small"
          label="Nombre"
          name="name"
          onChange={handleInputChange}
          value={formValues.name}
          fluid
        />
        <Input
          className="input-producto"
          size="small"
          label="Precio"
          name="price"
          fluid
          onChange={handleInputChange}
          value={formValues.price}
        />
        <Input
          className="input-producto"
          size="small"
          label="Categoria"
          onChange={handleInputChange}
          value={formValues.category}
          name="category"
        />
        <Input
          className="input-producto"
          size="small"
          label="URL"
          onChange={handleInputChange}
          value={formValues.url}
          name="url"
        />
        <h6>Stock</h6>
        <Select
          placeholder="Stock"
          options={[
            { key: "1", value: "true", text: "Hay Stock ? " },
            { key: true, value: true, text: "Si" },
            { key: false, value: false, text: "No" },
          ]}
          name="stock"
          onChange={handleSelectChange}
          value={formValues.stock}
          fluid
        />
        <Input
          className="input-producto"
          size="small"
          label="Imagen"
          fluid
          onChange={handleInputChange}
          name="image"
          value={formValues.image}
        />
        <Input
          className="input-producto"
          size="small"
          label="Cantidad"
          fluid
          onChange={handleInputChange}
          name="cantidad"
          value={formValues.cantidad}
        />
        <Input
          className="input-producto"
          size="small"
          label="ORDEN"
          fluid
          onChange={handleInputChange}
          name="orden"
          value={formValues.orden}
        />
      </div>
      <div className="producto-table__actions">
        <Button
          inverted
          fluid
          color="green"
          size="small"
          className="btn-editar"
          onClick={handleEditClick}
        >
          Editar
        </Button>
      </div>
    </div>
  );
};

const ListaProductos = () => {
  const [productos, setProductos] = useState(useContext(GlobalContext)[0]);
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);

  const changeState = () => {
    setState(!state);
  };

  React.useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const res = await productController.getProducts();
      res.sort((a, b) => a.orden - b.orden);
      setProductos(res);
    };
    fetchProducts();
    setLoading(false);
  }, [state]);

  return (
    <div className="cont-productos-table">
      {loading ? (
        <div className="cont-loader">
          <Dna color="#6C63FF" height={100} width={100} />
        </div>
      ) : (
        productos.map((producto) => (
          <Producto
            producto={producto}
            key={producto._id}
            changeState={changeState}
          />
        ))
      )}
      <ToastContainer />
    </div>
  );
};

export default ListaProductos;
