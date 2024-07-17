import React from "react";
import "./BtnSeguimiento.css";
import { Icon } from "semantic-ui-react";

export default function BtnSeguimiento({titulo, icono, link, color}) {
  return (
    <button
    style={{
      backgroundColor: color
    }}
      onClick={() => {
        window.location.href = link;
      }}
      class="btn-seguimiento"
    >
       {titulo} {" "} <Icon name={icono}/>
    </button>
  );
}
