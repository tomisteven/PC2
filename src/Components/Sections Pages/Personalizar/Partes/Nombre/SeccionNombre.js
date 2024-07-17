import React from "react";

export default function SeccionNombre() {

  const onChangeInput = (e) => {
    localStorage.setItem("nombre", e.target.value);
  }

  return (
    <div className="cont-seccion-material">
      <h5 className="title-sections">
        El Nombre que se le pondra a la paleta en Vinilo, $1500 adicionales, Si no lo quiere no complete este campo
      </h5>
      <input onChange={
        (e) => {
          onChangeInput(e);
        }
      } className="input-nombre-sticker" defaultValue={localStorage.getItem("nombre")} placeholder="Ingresa Nombre de la Paleta" type="text"/>
    </div>
  );
}
