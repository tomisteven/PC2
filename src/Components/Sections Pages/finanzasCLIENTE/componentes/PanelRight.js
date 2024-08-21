import React from "react";
import { Routes, Route } from "react-router-dom";
import InfoCliente from "./InfoCliente.js";
import { Label, LabelDetail, Button, Icon } from "semantic-ui-react";
import CondicionesFinanciacion from "./CondicionesFinanciacion.js";
/* import FinanciacionCancelada from "./FinanciacionCancelada.js"; */
import HistorialFinalizadas from "./HistorialFinalizadas.js";
import NuevaFinanciacion from "./NuevaFinanciacion.js";
import HistorialPagos from "./HistorialPagos.js";
import EditarDatosPersonales from "./EditarDatosPersonales.js";
import { useEffect } from "react";
import LoadingCobros from "./LoadingCobros.js";

export default function PanelRight({
  setStateLocalStorage,
  stateLocalStorage,
}) {
  const [loading, setLoading] = React.useState(true);
  const [client, setClient] = React.useState({});

  const user = JSON.parse(localStorage.getItem("usuarioFinanciero"));

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("usuarioFinanciero"));
    const fetchData = async () => {
      const data = await fetch(
        "https://paderlcrown-server.onrender.com/cobros/" + user._id
      );
      const dataJson = await data.json();
      setClient(dataJson);
      localStorage.removeItem("usuarioFinanciero");
      localStorage.setItem("usuarioFinanciero", JSON.stringify(dataJson));
    };
    fetchData();

    setLoading(false);
    //console.log("Actualizando datos de usuario en PanelRight");
  }, [stateLocalStorage]);

  if (!user.confirmadoPorAdministracion) {
    return (
      <div
        className="panel-right"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon loading name="spinner" size="huge" />
        <h1>Esperando confirmacion por parte de la administracion..</h1>
        <h4>
          Te avisaremos por email o WhatsApp cuando tu perfil este disponible
        </h4>
        <p>
          Estamos analizando tu perfil para permitirte ser parte de Finanzas
          Crown!
        </p>
      </div>
    );
  }
  return (
    <div className="panel-right">
      <div className="panel-right-info-cliente">
        {loading ? (
          <LoadingCobros />
        ) : (
          <>
            <Label color="green">
              Nombre
              <LabelDetail>{client.nombre}</LabelDetail>
            </Label>
            <Label color="blue">
              Apellido
              <LabelDetail>{client.apellido || "No especifica"}</LabelDetail>
            </Label>
            <Label color="pink">
              DNI
              <LabelDetail>{client.dni || "No especifica"}</LabelDetail>
            </Label>
            <Label color="red">
              Email
              <LabelDetail>{client.email}</LabelDetail>
            </Label>
            <Label color="black">
              Telefono
              <LabelDetail>{client.telefono}</LabelDetail>
            </Label>

            <Label color="teal">
              Direccion
              <LabelDetail>{client.direccion}</LabelDetail>
            </Label>
            <Label color="purple">
              Cuotas
              <LabelDetail>{client.cuotas}</LabelDetail>
            </Label>
            <Label color="brown">
              Estado Actual
              <LabelDetail>
                {client.estadoActual ? "Pagando" : "Esperando confirmacion"}
              </LabelDetail>
            </Label>

            <Label color="violet">
              Fecha Creacion
              <LabelDetail>{client.fechaCreacion}</LabelDetail>
            </Label>
            <Label color="blue">
              UserName
              <LabelDetail>{client.username}</LabelDetail>
            </Label>
            <Label color="green">
              Password
              <LabelDetail>{client.password}</LabelDetail>
            </Label>
          </>
        )}

        <Button
          className="btn-whatsapp-rigth"
          color="green"
          circular
          icon="whatsapp"
          size="big"
        />
      </div>

      <Routes className="router-links">
        <Route path="/" element={<CondicionesFinanciacion />} />
        <Route
          path="financiacion/crear"
          element={
            <NuevaFinanciacion
              setStateLocalStorage={setStateLocalStorage}
              stateLocalStorage={stateLocalStorage}
            />
          }
        />
        <Route
          path="financiacion/activas"
          element={
            <InfoCliente
              setStateLocalStorage={setStateLocalStorage}
              stateLocalStorage={stateLocalStorage}
            />
          }
        />
        <Route
          path="financiacion/finalizadas"
          element={<HistorialFinalizadas />}
        />
        <Route path="financiacion/pagos" element={<HistorialPagos />} />
        <Route
          path="financiacion/editar-datos"
          element={
            <EditarDatosPersonales
              setStateLocalStorage={setStateLocalStorage}
              stateLocalStorage={stateLocalStorage}
            />
          }
        />
      </Routes>
    </div>
  );
}
