import React, { useEffect, useState } from "react";
import "./ClientsEliminados.css";
import { Button } from "semantic-ui-react";
import { Client } from "../../../../api/clients";
import sweetAlert from "sweetalert2";
import LoadBall from "../../../LoadBall";

const clientController = new Client();

export default function ClientsEliminados() {
  const [clientesState, setClientesState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [change, setChange] = useState(false);

  const changeState = () => {
    setChange(!change);
  };

  const restoreClient = async (id) => {
    setLoading(true);
    const res = await clientController.restoreClient(id);
    if (res) {
      changeState();
      setLoading(false);
    }
  };

  const eliminarPermanentemente = async (id) => {
    const res = await clientController.eliminarPermanentemente(id);
    if (res) {
      sweetAlert.fire("Cliente eliminado permanentemente", "", "success");
      changeState();
    }
  };



  const eliminarTodo = async () => {
    const res = await sweetAlert.fire({
      title: "Estas seguro? de elminar todos los clientes?",
      text: "No podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar todo!",
    });
    if (res.isConfirmed) {
      const res = await clientController.eliminarTodo();
      if (res) {
        sweetAlert.fire(
          "Eliminado!",
          "Todos los clientes eliminados.",
          "success"
        );
        changeState();
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    const getClientsElminados = async () => {
      const data = await clientController.getClientsEliminados();

      setClientesState(data.reverse());
      setLoading(false);
    };
    getClientsElminados();
  }, [change, clientesState.length]);

  return (
    <div className="section-clientes-eliminados">
      {loading ? (
        <LoadBall />
      ) : (
        <>
          <h1
            style={{
              marginTop: "80px",
              textAlign: "center",
              marginBottom: "20px",
              color: "black",
            }}
          >
            {clientesState.length === 0
              ? "No hay clientes eliminados"
              : "Clientes Eliminados"}

            <Button
              className="btn-volver-clientes"
              color="green"
              onClick={() => (window.location.href = "/admin/clientes")}
            >
              Volver a clientes
            </Button>
            <Button
            disabled={clientesState.length === 0}
              className="btn-volver-clientes"
              color="red"
              onClick={() => eliminarTodo()}
            >
              ELIMINAR TODOS
            </Button>
          </h1>

          <table className="table-clientes-eliminados">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientesState &&
                clientesState.map((cliente) => (
                  <tr key={cliente._id}>
                    <td>{cliente.nombre}</td>
                    <td>
                      <Button
                        color="blue"
                        className="btn-restore"
                        onClick={() => restoreClient(cliente._id)}
                      >
                        Restaurar
                      </Button>
                      <Button
                        color="red"
                        className="btn-restore"
                        onClick={() => eliminarPermanentemente(cliente._id)}
                      >
                        Eliminar Permanentemente
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
