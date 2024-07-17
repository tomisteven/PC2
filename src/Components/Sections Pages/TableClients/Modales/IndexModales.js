import React from "react";
import ModalVerCliente from "./VerCliente/ModalVerCliente";
import ModalCrearCliente from "./CrearCliente/ModalCrearCliente.js";
import ModalSeguimiento from "./Seguimiento/ModalSeguimiento.js";

export default function Modales({
  setOpenVer,
  openVer,
  client,
  changeState,
  setOpenComentarios,
  openComentarios,
  setOpenSeguimiento,
  openSeguimiento,
  setOpenCreate,
  openCreate,
  clientes,
  setClientesState
}) {
  return (
    <div>
      <ModalVerCliente
        changeState={changeState}
        setOpenVer={setOpenVer}
        openVer={openVer}
        client={client}
        setOpenComentarios={setOpenComentarios}
        openComentarios={openComentarios}
      />

      <ModalSeguimiento
        setOpenSeguimiento={setOpenSeguimiento}
        openSeguimiento={openSeguimiento}
        client={client}
        onChange={changeState}
      />

      <ModalCrearCliente setClientesState={setClientesState} clientes={clientes} setOpenCreate={setOpenCreate} openCreate={openCreate}  changeState={changeState} />
    </div>
  );
}
