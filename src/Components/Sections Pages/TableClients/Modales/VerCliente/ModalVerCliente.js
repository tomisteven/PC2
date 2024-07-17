import React, { useEffect, useState } from "react";
import { Modal, Button, Input } from "semantic-ui-react";
import "./ModalVerCliente.css";
import { toast } from "react-toastify";
import { Client } from "../../../../../api/clients";
import { RotatingLines } from "react-loader-spinner";
import { Functions } from "../../functions";


const functionsController = new Functions();
const clientController = new Client();

export default function ModalVerCliente({
  openVer,
  setOpenVer,
  client,
  changeState,
}) {
  const [edit, setEdit] = useState(false);
  const [estadoPedido, setEstadoPedido] = useState("");
  const [clientState, setClientState] = useState({});
  const [loading, setLoading] = useState(false);
  const [editForm, setEditForm] = useState({});
  const [comentario, setComentario] = useState("");

  const [state, setState] = useState(false);

  const updateClient = async (id) => {
    const update = await clientController.updateClient(id, editForm);
    update && toast.success("Cliente editado con exito", { autoClose: 1000 });
    changeState();
    setEditForm({});
    setState(!state);
    setOpenVer(false);
  };

  const updateClientEstado = async (id, fechaActual) => {
    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth() + 1; // Se suma 1 porque los meses van de 0 a 11 en JavaScript
    var anio = fechaActual.getFullYear();

    // Formatea la fecha en el formato deseado (DD/MM/YYYY)
    var fechaFormateada = dia + "/" + (mes < 10 ? "0" : "") + mes + "/" + anio;

    setLoading(true);
    await clientController.addEstado(id, estadoPedido, fechaFormateada);
    setState(!state);
    setLoading(false);
    changeState();
  };

  const createNewComentario = async (id, comentario) => {
    setLoading(true);
    await clientController.addComentario(id, comentario);
    setComentario("");
    setState(!state);
    setLoading(false);
    changeState();
  };

   useEffect(() => {
    setLoading(true);
    const getClient = async () => {
      if (openVer) {
        const data = await clientController.getClient(client._id);
        setClientState(data);
        setEditForm(data);
      }
      return
    };
    setLoading(false);
    getClient();
  }, [client, state, openVer]);

  if (typeof clientState.estadoPedido === "undefined") {
    return <div></div>;
  }

  const stateOptions = [
    {
      key: "Esparando Actualizacion..",
      text: "Esperando Actualizacion..",
      value: "Esperando Actualizacion..",
    },
    {
      key: "Separacion Ingresos",
      text: "Separacion Ingresos",
      value: "Separacion Ingresos",
    },
    {
      key: "Mercado Libre",
      text: "Mercado Libre",
      value: "Mercado Libre",
    },
    {
      key: "Accesorios",
      text: "Accesorios",
      value: "Accesorios",
    },
    { key: "Devolucion", text: "Devolucion", value: "Devolucion" },
    { key: "Pendiente", text: "Pendiente", value: "Pendiente" },
    { key: "Confirmado", text: "Confirmado", value: "Confirmado" },
    {
      key: "Pre Fabricacion",
      text: "Pre Fabricacion",
      value: "Pre Fabricacion",
    },
    { key: "Moldeando", text: "Moldeando", value: "Moldeando" },
    { key: "En Masillado", text: "En Masillado", value: "En Masillado" },
    {
      key: "Colocacion de Refuezos",
      text: "Colocacion de Refuezos",
      value: "Colocacion de Refuezos",
    },
    {
      key: "Proceso de Pintado",
      text: "Proceso de Pintado",
      value: "Proceso de Pintado",
    },
    { key: "Laqueado Final", text: "Laqueado Final", value: "Laqueado Final" },
    { key: "Aujereado", text: "Aujereado", value: "Aujereado" },
    { key: "En Secado", text: "En Secado", value: "En Secado" },
    {
      key: "Ultimando Detalles en Fabrica",
      text: "Ultimando Detalles en Fabrica",
      value: "Ultimando Detalles en Fabrica",
    },
    {
      key: "En Local de Padel Crown",
      text: "En Local de Padel Crown",
      value: "En Local de Padel Crown",
    },
    { key: "Empaquetando", text: "Empaquetando", value: "Empaquetando" },
    { key: "Cancelado", text: "Cancelado", value: "Cancelado" },
    { key: "Enviado", text: "Enviado", value: "Enviado" },
    {
      key: "Recibido por Andreani",
      text: "Recibido por Andreani",
      value: "Recibido por Andreani",
    },
    {
      key: "En Distribucion",
      text: "En Distribucion",
      value: "En Distribucion",
    },
    { key: "Entregado", text: "Entregado", value: "Entregado" },
  ];

  return (
    <div>
      <Modal
        size="large"
        onClose={() => setOpenVer(false)}
        onOpen={() => setOpenVer(true)}
        open={openVer}
      >
        <Modal.Header className="modal-header-form">
          <h2>
            {client.nombre} - Fecha de Compra: {client.fechaCompra}
          </h2>
          {edit ? <span className="edit-true">MODO EDITAR</span> : null}
        </Modal.Header>
        <Modal.Content>
          <div className="cont-cliente-ver">
            <div class="cont3-cliente">
              <Modal.Description>
                <Input
                  label="Nombre"
                  type="text"
                  className="ver-producto-title-c1"
                  onChange={(e) =>
                    setEditForm({ ...editForm, nombre: e.target.value })
                  }
                  value={edit ? editForm.nombre : clientState.nombre}
                />

                <Input
                  label="Producto"
                  type="text"
                  className="ver-producto-title-c1"
                  onChange={(e) =>
                    setEditForm({ ...editForm, producto: e.target.value })
                  }
                  value={edit ? editForm.producto : clientState.producto}
                />

                <h2 className="ver-producto-title-c1">
                  Provincia: {client.provincia}
                </h2>
                <h2 className="ver-producto-title-c1">
                  Localidad: {client.localidad}
                </h2>
                <h2 className="ver-producto-title-c1">
                  Direccion: {client.direccion}
                </h2>
                <h4 className="comentarios-title">Comentarios:</h4>
                <p className="ver-cliente-comentarios">
                  {client.comentarios
                    ? clientState.comentarios.map((comentario, i) => (
                        <p key={i}>- {comentario.comentario}</p>
                      ))
                    : "No hay comentarios"}
                </p>
                <Input
                  className="ver-producto-title-c1"
                  placeholder="Agregar Comentario"
                  onChange={(e) => setComentario(e.target.value)}
                  value={comentario}
                />
                <Button
                  content="Agregar Comentario"
                  color="green"
                  loading={loading}
                  onClick={() => {
                    createNewComentario(client._id, comentario);
                  }}
                />
              </Modal.Description>
            </div>
            <div class="cont1-cliente">
              <Modal.Description>
                <div class="secion-input">
                  <p>DNI</p>
                  <input
                    type="text"
                    className="ver-producto-title-c2"
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        dni: parseInt(e.target.value),
                      })
                    }
                    value={edit ? editForm.dni : clientState.dni}
                  />
                </div>
                <div class="secion-input">
                  <p>Precio</p>
                  <input
                    type="text"
                    className="ver-producto-title-c2"
                    onChange={(e) =>
                      setEditForm({ ...editForm, precio: e.target.value })
                    }
                    value={edit ? editForm.precio : clientState.precio}
                  />
                </div>
                <div class="secion-input">
                  <p>Costo</p>
                  <input
                    type="text"
                    className="ver-producto-title-c2"
                    onChange={(e) =>
                      setEditForm({ ...editForm, costo: e.target.value })
                    }
                    value={edit ? editForm.costo : clientState.costo}
                  />
                </div>

                <div class="secion-input">
                  <p>Envio</p>
                  <input
                    type="text"
                    className="ver-producto-title-c2"
                    onChange={(e) =>
                      setEditForm({ ...editForm, envio: e.target.value })
                    }
                    value={edit ? editForm.envio : clientState.envio}
                  />
                </div>
                <div class="secion-input">
                  <p>Carbono</p>
                  <input
                    type="text"
                    className="ver-producto-title-c2"
                    onChange={(e) =>
                      setEditForm({ ...editForm, valorCarbono: e.target.value })
                    }
                    value={
                      edit ? editForm.valorCarbono : clientState.valorCarbono
                    }
                  />
                </div>
                <div class="secion-input">
                  <p>GANANCIA</p>
                  <input
                    type="text"
                    className="ver-producto-title-c2"
                    onChange={(e) =>
                      setEditForm({ ...editForm, ganancia: e.target.value })
                    }
                    value={edit ? editForm.ganancia : clientState.ganancia}
                  />
                </div>
              </Modal.Description>
            </div>
            <div class="cont2-cliente">
              <Modal.Description>
                <h5 className="cont-2-title">
                  Ultimo estado de tu pedido{" "}
                  <span>
                    {
                      clientState.estadoPedido[
                        clientState.estadoPedido.length - 1
                      ].estado
                    }
                  </span>
                </h5>{" "}
                <br />
                <div className="items-de-estados">
                  {loading ? (
                    <div className="loader-cont">
                      <RotatingLines
                        className="loader"
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="80"
                        visible={true}
                      />
                    </div>
                  ) : (
                    clientState.estadoPedido.map((estado, i) => (
                      <div key={i} className="estado-pedido">
                        <h2 className="ver-producto-title">
                          <p className="estado-estado">
                            {i + 1} {" - "}Estado:{" "}
                            {estado.estado || "No hay estado"}
                          </p>
                          <p>
                            {estado.fecha &&
                              "Fecha: " + functionsController.formatFecha(estado.fecha)
                            }
                          </p>
                        </h2>
                      </div>
                    ))
                  )}
                </div>
                <div class="secion-input-estado">
                  <h4>Agregar Nuevo Estado</h4>
                  <select
                    className="ver-producto-title-c1"
                    onChange={(e) => setEstadoPedido(e.target.value)}
                    value={estadoPedido}
                  >
                    {stateOptions.map((option) => (
                      <option value={option.value}>{option.text}</option>
                    ))}
                  </select>{" "}
                  <Button
                    content="Agregar Estado"
                    color="green"
                    onClick={async () => {
                      updateClientEstado(client._id, new Date());
                    }}
                  />
                </div>
              </Modal.Description>
            </div>
          </div>
        </Modal.Content>

        <Modal.Actions>
          {edit ? (
            <>
              <Button
                color="green"
                onClick={() => {
                  updateClient(client._id);
                  setEdit(false);
                }}
              >
                Confirmar Edicion
              </Button>
              <Button color="red" onClick={() => setEdit(false)}>
                Cancelar Edicion
              </Button>
            </>
          ) : (
            <>
              <Button color="blue" onClick={() => setEdit(!edit)}>
                Editar
              </Button>

              <Button color="red" onClick={() => setOpenVer(false)}>
                Cerrar
              </Button>
            </>
          )}
        </Modal.Actions>
      </Modal>
    </div>
  );
}
