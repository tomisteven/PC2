import React from "react";
import "./FinanzasAdmin.css";
import url from "../../../config";
import { Table, Button } from "semantic-ui-react";

export default function FinanzasAdmin() {
  const [data, setData] = React.useState({});
  let user = JSON.parse(localStorage.getItem("user"));

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(url + "/admin/cobros");
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, []);

  const onChangeAndVerifyThePassword = (e) => {
    console.log(e.target.value);
    const password = e.target.value;
    if (password === "padelcrown") {
      localStorage.setItem("user", JSON.stringify(true));
      window.location.reload();
    }
  };

  return (
    <div className="finanzas-admin-cont">
      {user ? (
        <div className="tabla-table">
          <h1>Finanzas Admin</h1>
          <Table
            celled
            striped
            size="large"
            structured
            color="green"
            className="table-admin-finanzas"
          >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Nombre</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Telefono</Table.HeaderCell>
                <Table.HeaderCell>DNI</Table.HeaderCell>
                <Table.HeaderCell>Tipo de Pago</Table.HeaderCell>
                <Table.HeaderCell>PAGANDO</Table.HeaderCell>
                <Table.HeaderCell>CONFIRMARDO</Table.HeaderCell>
                <Table.HeaderCell>ACCIONES</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {data.length > 0 &&
                data.map((item) => (
                  <Table.Row>
                    <Table.Cell>{item.nombre}</Table.Cell>

                    <Table.Cell>{item.email}</Table.Cell>
                    <Table.Cell>{item.telefono}</Table.Cell>
                    <Table.Cell>{item.dni}</Table.Cell>
                    <Table.Cell>{item.tipoPago}</Table.Cell>
                    <Table.Cell>
                      {item.pagando ? "Pagando" : "Sin Iniciar"}
                    </Table.Cell>
                    <Table.Cell>
                      {item.confirmadoPorAdministracion
                        ? "Confirmado"
                        : "Confirmar Cliente"}
                    </Table.Cell>
                    <Table.Cell>
                      <Button
                      color="green"
                        onClick={() => {
                          window.location.href = `/admin/cobros/5423456756/${item._id}`;
                        }}
                      >
                        VER
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
      ) : (
        <div className="input-log">
          <h1>Ingrese la contraseña de acceso</h1>
          <input
            onChange={(e) => onChangeAndVerifyThePassword(e)}
            type="text"
            placeholder="ingrese la contraseña de acceso"
          />
        </div>
      )}
    </div>
  );
}
