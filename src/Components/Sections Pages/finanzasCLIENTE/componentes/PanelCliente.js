import React, { useEffect } from "react";
import url from "../../../../config";
import "./PanelCliente.css";
import "./PanelResponsive.css"
import PanelLeft from "./PanelLeft.js";
import PanelRight from "./PanelRight.js";

export default function PanelCliente() {
  const [stateLocalStorage, setStateLocalStorage] = React.useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("usuarioFinanciero"));
    const fetchData = async () => {
      const data = await fetch(url + "/cobros/" + user._id);
      const dataJson = await data.json();
      localStorage.setItem("usuarioFinanciero", JSON.stringify(dataJson));
    };
    console.log("Actualizando datos de usuario en PanelCliente");
    fetchData();
  }, [stateLocalStorage]);

  return (
    <div className="panel-financiero-container">
      <PanelLeft
        setStateLocalStorage={setStateLocalStorage}
        stateLocalStorage={stateLocalStorage}
      />
      <PanelRight
        setStateLocalStorage={setStateLocalStorage}
        stateLocalStorage={stateLocalStorage}
      />
    </div>
  );
}
