import React, { useState } from "react";
import { Button, Input, Modal } from "semantic-ui-react";
import { Client } from "../../../../../api/clients";
import { toast, ToastContainer } from "react-toastify";

const clientController = new Client();
export default function ModalSeguimiento({
  setOpenSeguimiento,
  openSeguimiento,
  client,
  onChange,
}) {
  const [link, setLink] = useState(client.linkSeguimiento);

  const addSeguimiento = async () => {
    await clientController.updateClient(client._id, { linkSeguimiento: link });
    setOpenSeguimiento(false);
    onChange();
    toast.success("Link de Seguimiento actualizado con exito", {
      autoClose: 1000,
    });
  };

  const deleteSeguimiento = async () => {
    await clientController.updateClient(client._id, { linkSeguimiento: "" });
    setOpenSeguimiento(false);
    onChange();
    toast.success("Link de Seguimiento eliminado con exito", {
      autoClose: 1000,
    });
  };

  return (
    <Modal
      closeIcon
      onClose={() => setOpenSeguimiento(false)}
      onOpen={() => setOpenSeguimiento(true)}
      open={openSeguimiento}
    >
      <Modal.Header>Seguimiento</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <h2>
            Link de Seguimiento:{" "}
            {client.linkSeguimiento ? (
              <a href={client.linkSeguimiento}>LINK SEGUIMENTO</a>
            ) : (
              "No tiene Link de Seguimiento"
            )}
          </h2>
          <Input
            onChange={(e) => {
              setLink(e.target.value);
            }}
            focus
            className="input-ver-comentarios"
            fluid
            placeholder="Link de Seguimiento"
          />
          <Button
            compact
            fluid
            color="green"
            size="small"
            className="btn-editar"
            onClick={() => {
              addSeguimiento();
            }}
          >
            Guardar
          </Button>
          <Button
            compact
            fluid
            color="red"
            size="small"
            className="btn-editar"
            onClick={() => {
              deleteSeguimiento();
            }}
          >
            Eliminar Seguimiento
          </Button>
        </Modal.Description>
      </Modal.Content>
      <ToastContainer />
    </Modal>
  );
}
