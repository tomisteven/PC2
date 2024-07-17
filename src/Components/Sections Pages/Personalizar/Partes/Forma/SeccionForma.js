import React from "react";
import "./SeccionForma.css";

export default function SeccionForma({
  formas,
  setLoading,
  setItems,
  items,
  setPaso,
  paso,
}) {
  const changeForm = (key, value) => {
    setLoading(true);
    localStorage.setItem(key, value);
    setTimeout(() => {
      setLoading(false);
      setPaso(paso + 1);
    }, 200);
  };

  return (
    <div className="cont-seccion-forma">
      <h5 className="title-sections">Elige la forma de tu paleta</h5>
      <ul className="ul-materiales">
        <li className="li-materiales">
          <p>
            <span className="span-title">Redonda (Control)</span>,{" "}
            <span className="span-sub"> Ventajas </span>: Punto dulce amplio en
            el centro. Balance medio. Precision en los golpes. Paleta de 90/100
            en Control.{" "}
          </p>
        </li>

        <li className="li-materiales">
          <p>
            <span className="span-title">Diamante (Potencia)</span>,{" "}
            <span className="span-sub"> Ventajas </span>: Genera mas potencia y
            control, ideal para jugadores que buscan un punto dulce bien aplio y
            que no quieran perder potencia, es un balance entre las 3 formas{" "}
          </p>
        </li>
        <li className="li-materiales">
          <p>
            <span className="span-title">Gota (Potencia) </span> ,{" "}
            <span className="span-sub"> Ventajas </span>: Formato de potencia.
            Balance medio-Alto. Paleta con relacion 90/100 de Potencia.
            Presicion y control.{" "}
          </p>
        </li>
      </ul>
      <div className="options-formas">
        <div className="option-forma">
          <img
            src="https://res.cloudinary.com/didw6uakh/image/upload/v1697044428/FULL_CARBONO_REDONDO_sdih9v.png "
            alt=""
          />

          <label className="cyberpunk-checkbox-label">
            <input
              type="checkbox"
              value={"Redonda"}
              checked={formas === "Redonda"}
              className="cyberpunk-checkbox"
              onChange={(e) => {
                changeForm("forma", e.target.value);
              }}
            />
            Redonda (Control)
          </label>
        </div>

        <div className="option-forma">
          <img
            src="https://res.cloudinary.com/didw6uakh/image/upload/v1697044429/FULL_CARBONO_DIAMANTE_v7ojrw.png"
            alt=""
          />
          <label className="cyberpunk-checkbox-label">
            <input
              value={"Diamante"}
              checked={formas === "Diamante"}
              onChange={(e) => {
                changeForm("forma", e.target.value);
              }}
              type="checkbox"
              className="cyberpunk-checkbox"
            />
            Diamante (Potencia)
          </label>
        </div>
        <div className="option-forma">
          <img
            src="https://res.cloudinary.com/didw6uakh/image/upload/v1697044428/FULL_CARBONO_DIAMANTE_TIPO_ATOS_y4hffr.png"
            alt=""
          />

          <label className="cyberpunk-checkbox-label">
            <input
              value={"Gota"}
              onChange={(e) => {
                changeForm("forma", e.target.value);
              }}
              type="checkbox"
              checked={formas === "Gota"}
              className="cyberpunk-checkbox"
            />
            Gota (Potencia)
          </label>
        </div>

      </div>
    </div>
  );
}
