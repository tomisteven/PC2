import React, { useEffect } from "react";

export default function FinanciacionCancelada() {
  const [client, setClient] = React.useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("usuarioFinanciero"));
    const fetchData = async () => {
      const data = await fetch(
        "https://particular-bernita-digitalcode.koyeb.app/cobros/" + user._id
      );
      const dataJson = await data.json();
      setClient(dataJson);
    };
    fetchData();
  }, []);

  return <div>{
        client.cuotas.map((cuota, index) => {
          return <div key={index}>
            <h1>{cuota.estado}</h1>
            <h2>{cuota.fecha}</h2>
            <h3>{cuota.monto}</h3>
          </div>
        })

    }</div>;
}
