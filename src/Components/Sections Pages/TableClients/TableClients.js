import React from "react";
import { useState, useEffect } from "react";
/* import { GlobalContext } from "../../../context/GlobalState"; */
import "./TableClients.css";
import { ToastContainer } from "react-toastify";
import LoginPage from "./LoginPage/LoginPage.js";
import { Client } from "../../../api/clients";
import Swal from "sweetalert2";
import HeaderFilters from "./HeaderFilters.js";
import TableClientsBody from "./TableClientsBody.js";
import { Button } from "semantic-ui-react";

const clientController = new Client();
export default function TableClients() {
  const [state, setState] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);

  const [clientesState, setClientesState] = useState([]);
  const [loading, setLoading] = useState(true);

  const changeState = () => {
    setState(!state);
  };

  useEffect(() => {
    setLoading(true);
    clientController
      .getClients()
      .then((data) => {
        setClientesState(data);
      })
      .then(() => setLoading(false));
  }, [state]);

  const admin = localStorage.getItem("admin"); //verifica si esta logueado como admin
  if (!admin) return <LoginPage />; //si no esta logueado como admin, no puede ver la pagina

  const filterClients = (search) => {
    const filteredClients = clientesState.filter((cliente) => {
      const dniString = cliente.dni ? cliente.dni.toString() : ""; // Si cliente.dni es undefined, asigna una cadena vacía
      return (
        cliente.nombre.toLowerCase().includes(search.toLowerCase()) ||
        dniString.includes(search.toLowerCase())
      );
    });

    if (search === "") {
      changeState();
      return;
    }
    setClientesState(filteredClients);
  };

  const deleteClient = async (id) => {
    try {
      setLoading(true);
      const client = await clientController.getClient(id);
      /* setLoading(false); */
      const result = await Swal.fire({
        icon: "warning",
        title: `¿Estás seguro de eliminar a: ${client.nombre}?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "ELIMINAR",
        denyButtonText: `Cancelar`,
      });

      if (result.isConfirmed) {
        /* setLoading(true); */
        await clientController.deleteClient(id);
        setClientesState(clientesState.filter((cliente) => cliente._id !== id));
        //changeState();
        Swal.fire("Cliente eliminado con éxito", "", "success");
        setLoading(false);
      } else if (result.isDenied) {
        Swal.fire("Genial. Conservamos el Cliente", "", "info");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error al eliminar el cliente:", error);
      Swal.fire(
        "Error al eliminar el cliente",
        "Por favor, intenta de nuevo",
        "error"
      );
    }
  };

  return (
    <div className="section-clientes">
      <section class="table__header">
        <HeaderFilters
          setState={setState}
          state={state}
          clientesState={clientesState}
          filterClients={filterClients}
          setClientesState={setClientesState}
          setOpenCreate={setOpenCreate}
        />
      </section>
      <section class="table__body">
        <TableClientsBody
          setClientesState={setClientesState}
          clientesState={clientesState}
          deleteClient={deleteClient}
          loading={loading}
          changeState={changeState}
          state={state}
          setOpenCreate={setOpenCreate}
          openCreate={openCreate}
        />
      </section>
      <div className="cont-btn-go">
        <Button
          className="btn__go-up"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          color="yellow"
          icon="arrow circle up"
        />
        <Button
          className="btn__go-up"
          onClick={() => window.scrollTo({ top: 100000, behavior: "smooth" })}
          color="blue"
          icon="arrow circle down"
        />
      </div>
      <ToastContainer />
    </div>
  );
}
