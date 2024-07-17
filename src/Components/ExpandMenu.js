import React from "react";
import { Button, Label } from "semantic-ui-react";
import "./ExpandMenu.css";

export default function ExpandMenu({
  productsSelected,
  setProductsSelected,
  setStateCart,
}) {
  const sendWhatssap = () => {
    const message =
      "Hola, me gustaria comprar los siguientes productos: " +
      productsSelected.map((item) => item.name).join(", ") +
      " que vi en la Web Gracias!";
    const url = `https://api.whatsapp.com/send?phone=+541164764108&text=${message}`;
    window.open(url, "_blank");
  };
  return (
    <div className="menu-expandible">
      <div className="cont-title-menu-expandible">
      <div className="cont-btn">

          <div className="tag-price">
            <Label size="large" as="a" color="blue" tag>
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "ARS",
              }).format(productsSelected.reduce((a, b) => a + b.price, 0))}
            </Label>
          </div>
          <div>
            <Button
              color="green"
              icon="whatsapp"
              label={
                <Label color="blue" size="large">
                  Comprar
                </Label>
              }
              onClick={() => {
                sendWhatssap();
              }}
            ></Button>

            <Button
              color="red"
              icon="trash"
              label={
                <Label color="blue" size="large">
                  Vaciar Carrito
                </Label>
              }
              onClick={() => {
                setProductsSelected([]);
              }}
            ></Button>
          </div>
        </div>
        <h3 className="">Productos Seleccionados</h3>
        <p>Para comprar seleccione el boton de WhatssApp</p>
        <Button
          className="btn-close-menu-expandible"
          icon="close"
          size="mini"
          color="red"
          circular
          onClick={() => {
            document
              .querySelector(".menu-expandible")
              .classList.toggle("active");

            setStateCart(false);
          }}
        />
        <span className="span"></span>

      </div>
      {productsSelected.length === 0 ? (
        <div className="cont-empty">
          <h5>No hay productos seleccionados</h5>
        </div>
      ) : (
        <ul className="ul-products">
          {productsSelected.map((item, k) => (
            <>
              <li className="li-product" key={k}>
                <div className="cont-img">
                  <img className="img-selected" src={item.image} alt="" />
                </div>
                <div className="card-body-selected">
                  <h5 className="card-body-name">{item.name}</h5>
                  <Label as="a" color="teal" tag>
                    ${item.price}
                  </Label>
                </div>
              </li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
}
