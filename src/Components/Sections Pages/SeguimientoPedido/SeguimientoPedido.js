import React, { useState } from "react";
import "./SeguimientoPedido.css";
import { Seguimiento } from "../../../api/seguimiento";

import { RotatingLines } from "react-loader-spinner";

const seguimiento = new Seguimiento();
export default function SeguimientoPedido() {
  const [pedido, setPedido] = useState(null);
  const [dni, setDni] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const buscarPedido = async (dni) => {
    setLoading(true);
    if (dni === "") {
      setLoading(false);
      return setError("Debe ingresar un DNI para buscar el pedido.");
    } else {
      setError(null);
      const data = await seguimiento.findClients(dni);

      data.message ? setError(data.message) : setPedido(data);
      setLoading(false);
    }
  };

  const limpiar = () => {
    setPedido(null);
    setError(null);
    setDni("");
  };

  return (
    <div className="cont-seguimiento">
      <h1>Seguimiento de pedido</h1>
      <p>Ingrese su DNI</p>
      <input
        type="text"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
        placeholder="DNI"
      />
      <button className="buscar" onClick={() => buscarPedido(dni)}>
        {loading ? (
          <RotatingLines
            color="#fff"
            height={30}
            width={30}
            radius={30}
            margin={2}
          />
        ) : (
          "Buscar"
        )}
      </button>
      <button className="limpiar" onClick={() => limpiar()}>
        Limpiar Campos
      </button>

      <div class="rows-pedidos">
        {pedido &&
          pedido.map((p, i) => (
            <div
              className="cont-info-pedido"
              style={
                pedido || error ? { display: "flex" } : { display: "none" }
              }
            >
              <div className="info-pedido">
                <h4>Pedido N° {i + 1}</h4>
                <div className="cliente">{p.nombre}</div>
                <div className="seguimiento-url">
                  Link Seguimiento Andreani:{" "}
                  {p.linkSeguimiento ? (
                    <a
                      href={p.linkSeguimiento}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Seguimiento
                    </a>
                  ) : (
                    "No disponible"
                  )}
                </div>
                <div className="fechaCompra">Fecha Compra: {p.fecha}</div>
                <div className="pedido">Pedido : {p.producto}</div>
              </div>
              <h5>Estados de tu pedido</h5>
              {p.estadoPedido.map((e, i) => {
                return (
                  <div className="cont-estado">
                    <p> {i + 1} </p>
                    <div className="estado">
                      {e.estado === "Enpaquetando"
                        ? "Empaquetando"
                        : e.estado === ""
                        ? "Confirmado en Fabrica"
                        : e.estado}
                    </div>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "gray",
                        textAlign: "right",
                        marginRight: "10px",
                      }}
                    >
                      {"Ultima Actualizacion: " + e.fecha}
                    </p>
                  </div>
                );
              })}
            </div>
          ))}
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}
