import React from 'react'
import "./SeccionRugoso.css";


export default function SeccionRugoso({
  setLoading, rugosos,
  setPaso, paso
}) {

  const changeForm = (key, value) => {
    setLoading(true);
    const precio = value === "Sin Rugoso" ? 0  : 5000;
    localStorage.setItem(key, value);
    localStorage.setItem("precioRugoso", precio);
    setTimeout(() => {
      setLoading(false);
      setPaso(paso + 1 );
    }, 200);
  }



  return (
    <div className="cont-seccion-rugoso">
      <h5 className="title-sections">
        Elige la superficie de tu pala Ideal con Rugoso o sin Rugoso
      </h5>
      <ul className="ul-rugosos">
        <li  className="li-rugoso">
          <p>
            <span className="span-title">Con Rugosidad</span>, <span className="span-sub"> ventajas </span>: Genera mejor agarre de la pelota dandole mejor efecto en el golpe, añade 5 Gramos extra al peso de la paleta{" "}
          </p>
        </li>
        <li className="li-rugoso">
          <p>
            <span className="span-title">Sin Rugosidad </span> , <span className="span-sub"> ventajas </span>: Caras de la paleta lisa.{" "}
          </p>
        </li>
      </ul>
      <div class="options-rugosos">
        <div class="option-rugoso">
          <img
            src={"https://res.cloudinary.com/didw6uakh/image/upload/v1697044429/12K_EDICI%C3%93N_LIMITADA_cykhs1.png"}
            alt=""
          />

          <label class="cyberpunk-checkbox-label">
            <input
              value={"Sin Rugoso"}
              onChange={(e) => {
                changeForm("rugoso", e.target.value);
              }}
              type="checkbox"
              checked={rugosos === "Sin Rugoso"}
              class="cyberpunk-checkbox"
            />
            Sin Rugosidad, $0
          </label>
        </div>
        <div class="option-rugoso">
          <img
            src={"https://res.cloudinary.com/didw6uakh/image/upload/v1697044429/rugosa_uuv7yh.png"}
            alt=""
          />
          <label class="cyberpunk-checkbox-label">
            <input
              value={"Rugoso"}
              checked={rugosos === "Rugoso"}
              onChange={(e) => {
                changeForm("rugoso", e.target.value);
              }}
              type="checkbox"
              class="cyberpunk-checkbox"
            />
            Con Rugosidad, $5.000
          </label>
        </div>
      </div>
    </div>
  )
}
