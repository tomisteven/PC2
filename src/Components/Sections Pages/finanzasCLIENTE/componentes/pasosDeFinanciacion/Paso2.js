import React, { useMemo } from "react";
import { Dropdown } from "semantic-ui-react";

export default function Paso2({ handleTipoFinanciacionChange, paso, setPaso }) {
  const tipoFinanciacion = useMemo(
    () => [
      {
        key: "1",
        text: "Semanal (1 Cuotas cada 7 Dias, 4 cuotas Totales, Duracion 30 dias, 0% INTERES)",
        value: "Semanal",
      },
      {
        key: "2",
        text: "Quincenal (1 Cuotas cada 15 Dias, 4 cuotas Totales, Duracion 45 dias, 0% INTERES)",
        value: "Quincenal",
      },
      {
        key: "3",
        text: "Mensual (2 Cuotas cada 30 Dias, 2 cuotas Totales, Duracion 60 dias, 10% INTERES)",
        value: "Mensual",
      },
    ],
    []
  );

  return (
    <div className="cont-nueva-financiacion">
      <h3>Selecciona tu tipo de Financiación! </h3>
      <p className="p-financiacion">
        Selecciona el tipo de financiación que deseas y presiona el botón
        "Siguiente" para continuar con el proceso de financiación. Para más
        Información sobre los modos de financiación, visita nuestra sección de{" "}
        <a href="condiciones">condiciones de financiación</a>
      </p>
      <Dropdown
        className="dropdown-productos"
        placeholder="Seleccionar Tipo de financiación!"
        selection
        search
        options={tipoFinanciacion}
        onChange={handleTipoFinanciacionChange}
      />
      <div className="cont-botones-financiacion">
        <button
          className="btn-nueva-financiacion-atras"
          onClick={() => setPaso(paso - 1)}
        >
          Atrás {paso}/3
        </button>
        <button
          className="btn-nueva-financiacion"
          onClick={() => setPaso(paso + 1)}
        >
          Siguiente {paso}/3
        </button>
      </div>
    </div>
  );
}
