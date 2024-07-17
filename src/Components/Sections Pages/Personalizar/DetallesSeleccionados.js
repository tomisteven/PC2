import React from "react";
import "./DetallesSeleccionados.css";

export default function DetallesSeleccionados({ form, clientInfo }) {
  const calularTotal = () => {
    let total =
      parseInt(localStorage.getItem("precioMaterial")) +
      parseInt(localStorage.getItem("precioRugoso")) + parseInt(localStorage.getItem("precioShockOut"));
    return total;
  };

  const borrarTodo = () => {
    localStorage.setItem("forma", "");
    localStorage.setItem("material", "");
    localStorage.setItem("nucleo", "");
    localStorage.setItem("peso", "");
    localStorage.setItem("rugoso", "");
    localStorage.setItem("shockOut", "");
    localStorage.setItem("precioMaterial", "");
    localStorage.setItem("precioRugoso", "");
    localStorage.setItem("precioShockOut", "");

    window.location.reload();
  }

  return (
    <div class="cont-precios-detalles">
      <h4 className="title-personalizar">Detalles de tu paleta</h4>
      <h5 className="title-personalizar"><span className="span-client">→ Cliente:</span> {clientInfo.nombre || ""}</h5>
      <div class="cont-precio">
        <div class="cont-precio-info">
          <p class="precio-title">· Forma: {
            form.forma !== "" ? <span>{form.forma}</span> : ""
          }</p>
          <p class="precio-precio">$0</p>
        </div>
        <div class="cont-precio-info">
          <p class="precio-title">· Material: {
            form.material !== "" ? <span>{form.material}</span> : ""
          }</p>
          <p className="precio-precio">${form.precioMaterial || 0}</p>
        </div>

        <div class="cont-precio-info">
          <p class="precio-title">· Nucleo: {
            form.nucleo !== "" ? <span>{form.nucleo}</span> : ""
          }</p>
          <p className="precio-precio">${0}</p>
        </div>
        <div class="cont-precio-info">
          <p class="precio-title">· Rugoso: {form.rugoso !== "" ? <span>{form.rugoso}</span> : ""}</p>
          <p className="precio-precio">${form.precioRugoso || 0}</p>
        </div>

        <div class="cont-precio-info">
          <p class="precio-title">· Peso: {
            form.peso !== "" ? <span>{form.peso}</span> : " "

          } Gr</p>
          <p className="precio-precio">${0}</p>
        </div>
        <div class="label-total">
          <h5>Total: ${calularTotal() || 0} </h5>
        </div>
        <div class="label-confirmar" onClick={
          () => {
            borrarTodo();
          }
        }>
          <h5>Borrar Todo</h5>
        </div>
      </div>
    </div>
  );
}
