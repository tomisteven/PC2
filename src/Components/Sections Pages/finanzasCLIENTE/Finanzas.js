import React, { useEffect, useState } from "react";
import "./Finanzas.css";
import PanelCliente from "./componentes/PanelCliente";
import Login from "./componentes/Login";

export default function Finanzas() {
  const user = JSON.parse(localStorage.getItem("usuarioFinanciero"));
  const [data, setData] = useState([]);
  const [login$, setLogin$] = useState(false);

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        const data = await fetch(
          "https://paderlcrown-server.onrender.com/cobros/" + user._id
        );
        const dataJson = await data.json();
        setData(dataJson);
      };
      fetchData();
    }
  }, [login$, data, user]);

  return (
    <div className="cobros-container">
      {user ? <PanelCliente /> : <Login state={setLogin$} valor={login$} />}
    </div>
  );
}
