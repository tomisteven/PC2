import React, { useEffect } from "react";
import "./HistorialFinalizadas.css";
import LoadingCobros from "./LoadingCobros";

export default function HistorialFinalizadas() {
  const [client, setClient] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("usuarioFinanciero"));
    const fetchData = async () => {
      const data = await fetch(
        "https://paderlcrown-server.onrender.com/cobros/" + user._id
      );
      const dataJson = await data.json();
      setClient(dataJson);
    };
    fetchData();
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingCobros />;
  }

  return (
    <div className="cont-historial">
      {client.historialFinanciacion > 0 ? (
        client.historialFinanciacion.map((historial, index) => {
          return (
            <div key={index}>
              <h1>{historial.tipo}</h1>
              <h2>{historial.producto}</h2>
              <h3>{historial.interes}</h3>
              {historial.cuotas.map((cuota, index) => {
                return (
                  <div key={index}>
                    <h1>{cuota.cuota}</h1>
                    <h2>{cuota.pagada}</h2>
                    <h3>{cuota.valor}</h3>
                    <h3>{cuota.fechaPago}</h3>
                  </div>
                );
              })}
            </div>
          );
        })
      ) : (
        <h1 className="sin-financiacion-historial">
          No hay historial de financiaciones
        </h1>
      )}
    </div>
  );
}
