import React, { useEffect } from "react";
import LoadingCobros from "./LoadingCobros";
import { CobrosAPI } from "../../../../api/Cobros";
import "./EditarDatosPersonales.css";

const cobrosController = new CobrosAPI();
export default function EditarDatosPersonales({
  stateLocalStorage,
  setStateLocalStorage,
}) {
  const [client, setClient] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [changeState, setChangeState] = React.useState(false);

  useEffect(() => {
    //setLoading(true);
    const user = JSON.parse(localStorage.getItem("usuarioFinanciero"));
    const fetchData = async () => {
      const data = await fetch(
        "https://paderlcrown-server.onrender.com/cobros/" + user._id
      );
      const dataJson = await data.json();
      setClient(dataJson);
    };
    fetchData();
    setLoading(false);
  }, [changeState]);

  const handleChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };

  const confirmEdit = async () => {
    setLoading(true);
    const edit = await cobrosController.editClientById(client._id, client);

    if (edit.ok) {
      setChangeState(!changeState);
      setStateLocalStorage(!stateLocalStorage);
    } else {
      alert("Error al editar los datos");
    }
  };

  if (loading) {
    return <LoadingCobros />;
  }

  return (
    <div className="cont-editar-datos">
      <h1>Editar Datos Personales</h1>
      <form className="cont-form">
        <input
          onChange={handleChange}
          name="nombre"
          type="text"
          placeholder="Nombre"
          value={client.nombre}
        />
        <input
          onChange={handleChange}
          name="apellido"
          type="text"
          placeholder="Apellido"
          value={client.apellido}
        />
        <input
          onChange={handleChange}
          name="dni"
          type="text"
          placeholder="Documento"
          value={client.dni}
        />
        <input
          onChange={handleChange}
          name="telefono"
          type="text"
          placeholder="Telefono"
          value={client.telefono}
        />
        <input
          onChange={handleChange}
          name="email"
          type="text"
          placeholder="Email"
          value={client.email}
        />

        <input
          name="username"
          type="text"
          placeholder="Username"
          value={client.username}
        />
        <input
          onChange={handleChange}
          type="text"
          name="direccion"
          placeholder="Direccion"
          value={client.direccion}
        />
        <input
          onChange={handleChange}
          name="password"
          type="text"
          placeholder="Password"
          value={client.password}
        />
      </form>
      <button className="btn-editar-datos" onClick={() => confirmEdit()}>
        {loading ? "Guardando..." : "Confirmar"}
      </button>
    </div>
  );
}
