import React from "react";
import { Icon, Label, LabelDetail } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

export default function PanelLeft() {
  const user = JSON.parse(localStorage.getItem("usuarioFinanciero"));
  const navigate = useNavigate();
  const useNavigated = window.location.pathname.split("/")[3];

  return (
    <div className="panel-left">
      <Label color={user.confirmadoPorAdministracion ? "green" : "red"}>
        Confirmacion de financiacion
        <LabelDetail>
          {user.confirmadoPorAdministracion ? "ACEPTADO" : "PENDIENTE"}
        </LabelDetail>
      </Label>
      <div className="info-padel-left">
        <button
          disabled={!user.confirmadoPorAdministracion}
          onClick={() => {
            navigate("financiacion/crear");
          }}
          className="btn-panel-left"
          style={{
            backgroundColor: "#4b8c49",
            justifyContent: "center",
            opacity: user.confirmadoPorAdministracion ? 1 : 0.5,
            border: "1.5px solid white",
          }}
        >
          {user.estadoActual
            ? "Ya tienes una financiación activa"
            : "Generar Nueva Financiación"}
        </button>
        <button
          disabled={!user.confirmadoPorAdministracion}
          style={{
            backgroundColor:
              window.location.pathname.split("/")[1] === "cobros-online"
                ? "#005994"
                : "#4fa0d6",

            opacity: user.confirmadoPorAdministracion ? 1 : 0.5,
          }}
          className="btn-panel-left"
          onClick={() => {
            navigate("");
          }}
        >
          <Icon
            className="icon-button-left"
            name="book"
            size="big"
            color="white"
          />
          Condiciones de Financiación
        </button>
        <button
          disabled={!user.confirmadoPorAdministracion}
          style={{
            backgroundColor: useNavigated === "activas" ? "#005994" : "#4fa0d6",
            opacity: user.confirmadoPorAdministracion ? 1 : 0.5,
          }}
          className="btn-panel-left"
          onClick={() => {
            navigate("financiacion/activas");
          }}
        >
          <Icon
            className="icon-button-left"
            name="power"
            size="big"
            color="white"
          />
          Ver Financiaciones Activas
        </button>

        <button
          disabled={!user.confirmadoPorAdministracion}
          style={{
            backgroundColor:
              useNavigated === "finalizadas" ? "#005994" : "#4fa0d6",
            opacity: user.confirmadoPorAdministracion ? 1 : 0.5,
          }}
          className="btn-panel-left"
          onClick={() => {
            navigate("financiacion/finalizadas");
          }}
        >
          <Icon
            className="icon-button-left"
            name="check"
            size="big"
            color="white"
          />
          Ver Financiaciones Finalizadas
        </button>
        <button
          disabled={!user.confirmadoPorAdministracion}
          className="btn-panel-left"
          style={{
            backgroundColor: useNavigated === "pagos" ? "#005994" : "#4fa0d6",
            opacity: user.confirmadoPorAdministracion ? 1 : 0.5,
          }}
          onClick={() => {
            navigate("financiacion/pagos");
          }}
        >
          <Icon
            className="icon-button-left"
            name="dollar"
            size="big"
            color="white"
          />
          Ver Historial de Pagos
        </button>
        <button
          disabled={!user.confirmadoPorAdministracion}
          className="btn-panel-left"
          style={{
            backgroundColor: useNavigated === "editar" ? "#005994" : "#4fa0d6",
            opacity: user.confirmadoPorAdministracion ? 1 : 0.5,
          }}
          onClick={() => {
            navigate("financiacion/editar-datos");
          }}
        >
          <Icon
            className="icon-button-left"
            name="user"
            size="big"
            color="white"
          />
          Editar Datos Personales
        </button>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("usuarioFinanciero");
          localStorage.removeItem("idUserFinanciero");
          window.location.reload();
        }}
        className="logout-btn"
      >
        Logout
      </button>
    </div>
  );
}
