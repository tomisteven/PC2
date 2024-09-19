import React from "react";
import "./FinanzasAdmin.css";
import url from "../../../config";
import { Table, Button } from "semantic-ui-react";
import { CobrosAPI } from "../../../api/Cobros";
import LoadingCobros from "../finanzasCLIENTE/componentes/LoadingCobros";
import swal from "sweetalert";
import TablaPendientes from "./TablaPendientes";

const client = new CobrosAPI();
export default function FinanzasAdmin() {
  const [data, setData] = React.useState({});
  let user = JSON.parse(localStorage.getItem("user"));
  const [state, setState] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const changeState = () => {
    setState(!state);
  };

  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(url + "/admin/cobros");
      const json = await response.json();
      setData(json);
      setLoading(false);
    }

    fetchData();
  }, [state]);

  const confirmarCliente = async (id) => {
    swal({
      title: "Estas seguro de confirmar este cliente?",
      text: "Una vez confirmado no podras deshacer esta acción",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const response = await client.confirmarCliente(id);
        if (response.ok) {
          swal("Cliente confirmado correctamente", {
            icon: "success",
          });
          changeState();
        } else {
          swal("Error al confirmar el cliente", {
            icon: "error",
          });
        }
      } else {
        swal("No se confirmo el cliente");
      }
    });
  };

  const onChangeAndVerifyThePassword = (e) => {
    console.log(e.target.value);
    const password = e.target.value;
    if (password === "padelcrown") {
      localStorage.setItem("user", JSON.stringify(true));
      window.location.reload();
    }
  };

  if (loading) {
    return (
      <div className="finanzas-admin-cont">
        <LoadingCobros />
      </div>
    );
  }

  return (
    <div className="finanzas-admin-cont">
      {user ? (
        <div className="tabla-table">
          <TablaPendientes data={data} confirmarCliente={confirmarCliente} />
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
                  <Table.Row key={item._id}>
                    <Table.Cell>{item.nombre}</Table.Cell>

                    <Table.Cell>{item.email}</Table.Cell>
                    <Table.Cell>{item.telefono}</Table.Cell>
                    <Table.Cell>{item.dni}</Table.Cell>
                    <Table.Cell>{item.tipoPago}</Table.Cell>
                    <Table.Cell>
                      {item.pagando ? "Pagando" : "Sin Iniciar"}
                    </Table.Cell>
                    <Table.Cell>
                      {item.confirmadoPorAdministracion ? (
                        "Confirmado"
                      ) : (
                        <Button
                          color="blue"
                          onClick={() => {
                            confirmarCliente(item._id);
                          }}
                        >
                          CONFIRMAR
                        </Button>
                      )}
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
