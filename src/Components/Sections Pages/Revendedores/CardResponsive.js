import React from "react";
import "./responsiveCard.css";
import { Icon } from "semantic-ui-react";

export default function CardResponsive({ datosH, datosV }) {
  return (
    <div className="cont-card-revendedores-responsive">
      <div className="card-revendedores-responsive">
        <div className="card-revendedores-responsive-v">
          {datosV.map((d) => (
            <div className="card-revendedores-responsive-v-cont-item">
              <h5>{d.name}</h5>
              <p><span className="span-card">Celular:</span> {d.contacto}</p>
              <p><span className="span-card">Direccion:</span> {d.direccion}</p>
              <p><span className="span-card">Direccion:</span> {d.localidad}</p>

              <a href={d.mapa}>
                <Icon size="big" name="map marker alternate" />
              </a>
              <a href={d.instagram}>
                <Icon size="big" name="instagram" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
