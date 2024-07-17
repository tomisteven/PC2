import React from "react";
import { Button } from "semantic-ui-react";

export default function HeaderFilters({
    clientesState,
    filterClients,
    setClientesState,
    setState,
    state,
    setOpenCreate,

}) {
  return (
    <>
     <Button
        onClick={() => {
          window.location.href = "/admin/productos";
        }}
        content="Editar Productos"
        color="purple"
        size="small"
        className="btn-editar"
      ></Button>
      <Button
        onClick={() => {
          window.location.href = "/admin/rifas";
        }}
        content="Admin Rifas"
        color="orange"
        size="small"
        className="btn-editar"
      ></Button>
      <Button
        onClick={() => {
          window.location.href = "/admin/eliminados";
        }}
        content="VER CLIENTES ELIMINADOS"
        color="red"
        size="small"
        className="btn-editar"
      ></Button>
      <Button
        onClick={() => {
          setOpenCreate(true);
        }}
        content="Crear Cliente"
        color="green"
        size="small"
        className="btn-editar"
      ></Button>

      <p>Cantidad Clientes {clientesState.length}</p>
      <div className="input-group">
        <input
          type="search"
          onChange={(e) => {
            filterClients(e.target.value);
          }}
          placeholder="Buscar..."
        />
      </div>
      <div className="header-filters">
      <Button color="black" size="small" onClick={
          () => {
            setState(!state)
          }
        } className="btn-editar">
          Volver
        </Button>
        <Button onClick={
          () => {

            setClientesState(clientesState.filter(cliente => cliente.estado === "Entregado"))
          }
        } color="green" size="small" className="btn-eliminar">
          Entregado
        </Button>

      </div>
    </>
  );
}
