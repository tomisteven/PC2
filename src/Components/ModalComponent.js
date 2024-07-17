import React from "react";
import { Button, Image, Modal, Label } from "semantic-ui-react";
import "./ModalComponent.css";
import icon_pelota from "../assets/tenis.webp";
import logoActual from "../assets/LOGO ACTUAL.webp";

export default function ModalComponent({ open, setOpen, productImage }) {
  return (
    <div>
      {" "}
      <Modal
        size="large"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Imagen Agrandada</Modal.Header>
        <Modal.Content image>
          <div className="cont-modal-flex">
            <div class="cont1">
              <Image
                size="medium"
                src={productImage.image}
                className="img-paleta-modal"
              />

              <Modal.Description>
                <h2 className="product-modal-title">{productImage.name}</h2>
                <p className="contenedor-description-modal">
                  {productImage.description ? (
                    productImage.description.map((d, i) => (
                      <div className="cont-description-modal-item" key={i}>
                        <img
                          className="img-description-modal"
                          src={icon_pelota}
                          alt=""
                        />
                        <span className="item-descrpition-span-modal" key={i}>
                          {d}
                        </span>
                      </div>
                    ))
                  ) : (
                    <span>Sin descripcion</span>
                  )}
                </p>

                <Button
                  className="btn-add-cart-modal"
                  disabled={!productImage.stock}
                  color="teal"
                  size="mini"
                  icon="question"
                  label={"Que pala me conviene?"}
                  onClick={() => {
                    window.location.href = "/test";
                  }}
                ></Button>
                <Button
                  className="btn-add-cart-modal"
                  disabled={!productImage.stock}
                  color="orange"
                  size="mini"
                  icon="dollar sign"
                  label={
                    productImage.stock ? (
                      <Label size="tiny" color="green">
                        $
                        {new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "ARS",
                        }).format(productImage.price)}
                      </Label>
                    ) : (
                      <Label size="tiny" color="red">
                        Sin Stock
                      </Label>
                    )
                  }
                ></Button>
              </Modal.Description>
            </div>
            <div class="cont2">
              <Image
                size="medium"
                src={logoActual}
                circular
                className="img-padelcrown"
              />
            </div>
          </div>
        </Modal.Content>

        <Modal.Actions>
          <Button color="violet" onClick={
            () => {
              window.location.href = productImage.url;
            }

          }>VER MAS FOTOS</Button>
          <Button color="red" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            as="a"
            href={productImage.url}
            target="_blank"
            color="green"
            size="small"
            className="btn-link"
          >
            Comprar en Tienda Online
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
