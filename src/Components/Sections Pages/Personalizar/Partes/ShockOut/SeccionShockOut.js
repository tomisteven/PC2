import React from 'react'
import "./SeccionShockOut.css";
import shot1 from "../../../../../assets/oneshot1.png";
import shot2 from "../../../../../assets/oneshot2.png";

export default function SeccionShockOut({
  setLoading, shockOuts,
  setPaso, paso
}) {


  const changeForm = (key, value) => {
    setLoading(true);
    localStorage.setItem(key, value);
    setTimeout(() => {
      setLoading(false);

    }, 200);
  }

  return (
    <div className="cont-seccion-rugoso">
      <h5 className="title-sections">
        Elige el nucleo de tu paleta Ideal !
      </h5>
      <ul className="ul-shocks">
        <li className="li-shock">
          <p>
            <span className="span-title-s">One Shot</span>: <span className="span-sub"> Un solo aujero en toda la paleta </span>:  + Potencia + Control + Superficie de punto dulce{" "}  <span className="span-sub"> Precio $10000</span>
          </p>
        </li>
      </ul>

      <h3>Solo seleccionar si lo desea!</h3>
      <div class="options-shocks">
        <div class="option-shock">
          <img
            src={shot1}
            alt=""
          />

          <label class="cyberpunk-checkbox-label">
            <input
              value={"Diamante"}
              onChange={(e) => {
                changeForm("shockOut", e.target.value);
                localStorage.setItem("precioShockOut", 10000);
              }}
              type="checkbox"
              checked={shockOuts === "Diamante"}
              class="cyberpunk-checkbox"
            />
            1 Aujero Diamnte, $10000
          </label>
        </div>

        <div class="option-shock">
          <img
            src={shot2}
            alt=""
          />
          <label class="cyberpunk-checkbox-label">
            <input
              value={"Redonda"}
              checked={shockOuts === "Redonda"}
              onChange={(e) => {
                changeForm("shockOut", e.target.value);
                localStorage.setItem("precioShockOut", 10000);
              }}
              type="checkbox"
              class="cyberpunk-checkbox"
            />
            1 Aujero Redonda, $10000
          </label>
        </div>

      </div>
    </div>
  )
}
