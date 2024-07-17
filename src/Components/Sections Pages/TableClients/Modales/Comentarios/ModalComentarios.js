import React from "react";
import { Button, Input, Modal } from "semantic-ui-react";
import { Client } from "../../../../../api/clients";
import { RotatingLines } from "react-loader-spinner";
import "./ModalComentarios.css";

const clientController = new Client();
export default function ModalComentarios({
  setOpenComentarios,
  openComentarios,
  client,
}) {
  const [change, setChange] = React.useState(false);
  const [clientState, setClient] = React.useState(client);

  React.useEffect(() => {
    setLoading(true);
    const getClient = async () => {
      const data = await clientController.getClient(client._id);
      setClient(data);
    };
    getClient();
    setLoading(false);
  }, [change, client]);

  const [loading, setLoading] = React.useState(false);
  const [comentario, setComentario] = React.useState("");

  console.log(clientState);

  const addComentario = async (id, comentario) => {
    setLoading(true);
    await clientController.addComentario(id, comentario);
    setChange(!change);
    setLoading(false);
    setComentario("");
  };

  return (
    <Modal
      onClose={() => setOpenComentarios(false)}
      onOpen={() => setOpenComentarios(true)}
      open={openComentarios}
      size="tiny"
    >
      <Modal.Header>Comentarios de {client.nombre}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <h4>{client.producto}</h4>
          {clientState.comentarios.map((comentario, i) => (
            <div className="comentario">
              <p>
                {i + 1} - {comentario.comentario}
              </p>
            </div>
          ))}
          <Input
            focus
            className="input-ver-comentarios"
            fluid
            value={comentario}
            placeholder="Comentarios"
            onChange={(e) => setComentario(e.target.value)}
          />
          {loading ? (
            <RotatingLines
              color="#ffaa00"
              height={35}
              width={35}
              speed={1}
              animating={true}
            />
          ) : (
            <Button
              color="yellow"
              onClick={() => addComentario(client._id, comentario)}
            >
              Agregar
            </Button>
          )}
          <Button color="red" onClick={() => setOpenComentarios(false)}>
            Cerrar
          </Button>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
