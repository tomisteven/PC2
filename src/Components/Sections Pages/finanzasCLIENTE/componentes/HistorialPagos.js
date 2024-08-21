import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import "./HistorialPagos.css";
import LoadingCobros from "./LoadingCobros";

export default function HistorialPagos() {
  const [loading, setLoading] = useState(false);
  const [client, setClient] = React.useState({});
  useEffect(() => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("usuarioFinanciero"));
    const fetchData = async () => {
      const data = await fetch(
        "https://paderlcrown-server.onrender.com/cobros/" + user._id
      );
      const dataJson = await data.json();
      setClient(dataJson);
      console.log(dataJson);
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(client.historial);

  const formatFecha = (fecha) => {
    const date = new Date(fecha);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <div className="cont-tabel-historial-pagos">
      <h3>Historial de Pagos</h3>
      {loading ? (
        <LoadingCobros />
      ) : (
        <Table striped celled stackable color="orange">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Cuota</Table.HeaderCell>
              <Table.HeaderCell>Producto</Table.HeaderCell>
              <Table.HeaderCell>Fecha Pago</Table.HeaderCell>
              <Table.HeaderCell>Monto</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {client.historial &&
              client.historial.map((historial, index) => {
                return (
                  <Table.Row key={index}>
                    <Table.Cell>{historial.cuota}</Table.Cell>
                    <Table.Cell>{historial.producto}</Table.Cell>
                    <Table.Cell>{formatFecha(historial.fecha)}</Table.Cell>
                    <Table.Cell>$ {historial.monto}</Table.Cell>
                  </Table.Row>
                );
              })}
          </Table.Body>
        </Table>
      )}
    </div>
  );
}
