import React from "react";
import { Icon } from "semantic-ui-react";
import "./SectionEnvios.css";

const SectionEnvios = () => (
  <div className="cont-section-envios">
    <h2 className="title-section-steps">Tu compra segura con destino a donde quieras!</h2>
    <div className="section-envios">
      <div class="item-section-step">
        <Icon name="shopping cart" size="huge" className="icon-steps" />
        <div class="info-step">
          <h3>Realiza tu compra!</h3>
          <p>
            Compra desde nuestra pagina online de manera segura <a href="222.padelcrowm.com.ar">Tienda Online</a>
          </p>
        </div>
      </div>
      <Icon name="arrow right" className="icons-row" color="green" size="large" />
      <div class="item-section-step">
        <Icon name="box" size="huge" className="icon-steps" />
        <div className="info-step">
          <h3>Recibimos tu compra!</h3>
          <p>Ahora nos encargamos de preparar tu pedido y despacharlo!</p>
        </div>
      </div>
      <Icon name="arrow right" className="icons-row" color="green" size="large" />
      <div class="item-section-step">
        <Icon name="shipping fast" size="huge" className="icon-steps" />
        <div class="info-step">
        <h3>Ahora Recibí tu pedido!</h3>
        <p>Enviamos tu pedido a tu domicilio y un codigo de seguimiento para que lo visualices!</p>
        </div>
      </div>
    </div>
  </div>
);

export default SectionEnvios;
