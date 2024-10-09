import React from "react";
import { CobrosAPI } from "../../../api/Cobros";
import "./FinanzasAdminCLIENTE.css";
import { Table, Button } from "semantic-ui-react";
import LoadingCobros from "../finanzasCLIENTE/componentes/LoadingCobros";
import swal from "sweetalert";

const client = new CobrosAPI();
export default function FinanzasAdminCLIENTE() {
  const id = window.location.pathname.split("/")[4];
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [cuotasPendientes, setCuotasPendientes] = React.useState([]);
  const [state, setState] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const response = await client.getClientById(id);
      const c = await response.cuotasAPagar.filter(
        (cuota) => cuota.estado === "Pendiente de Aprobación"
      );

      setData(response);
      setCuotasPendientes(c);
    }
    fetchData();
    setLoading(false);
  }, [state, id]);

  if (loading) {
    return (
      <div className="cliente-admin-finanzas">
        <LoadingCobros />
      </div>
    );
  }

  const onChangeState = () => {
    setState(!state);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const confirmEdit = async () => {
    setLoading(true);
    const edit = await client.editClientById(data._id, data);
    if (edit.ok) {
      onChangeState();
      swal("Datos editados correctamente", {
        icon: "success",
      });
      setLoading(false);
    } else {
      swal("Error al editar los datos", {
        icon: "error",
      });
      setLoading(false);
    }
  };

  const rechazarCuota = (cuota) => {
    swal({
      title: "¿Estas seguro de rechazar esta cuota?",
      text: "Una vez rechazada no se podra deshacer",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willConfirm) => {
      if (willConfirm) {
        const res = await client.rechazarPago(id, cuota._id);
        res && onChangeState();
        swal("Cuota rechazada", {
          icon: "success",
        });
      } else {
        swal("No se ha rechazado la cuota");
      }
    });
  };

  const verificarCuotas = (cuota) => {
    swal({
      title: "¿Estas seguro de confirmar estas cuotas?",
      text: "Una vez confirmadas no se podran deshacer",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willConfirm) => {
      if (willConfirm) {
        const res = await client.varificarPago(id, cuota._id);
        res && onChangeState();
        swal("Cuotas confirmadas", {
          icon: "success",
        });
      } else {
        swal("No se han confirmado las cuotas");
      }
    });
  };
  const convertirFecha = (fecha) => {
    const date = new Date(fecha);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <div>
      <div className="cliente-admin-finanzas">
        <Button
          icon="arrow circle left"
          color="green"
          onClick={() => (window.location.href = "/admin/cobros/5423456756")}
        />
        <div className="cont-inputs-cliente">
          <h5>Datos Personales</h5>
          <div class="cont-input-label">
            <label for="">Nombre</label>
            <input
              name="nombre"
              onChange={handleChange}
              value={data.nombre}
              type="text"
              placeholder="Datos Personales"
            />
          </div>
          <div class="cont-input-label">
            <label for="">Apellido</label>
            <input
              name="apellido"
              onChange={handleChange}
              value={data.apellido}
              type="text"
              placeholder="Datos Personales"
            />
          </div>
          <div class="cont-input-label">
            <label for="">Email</label>
            <input
              name="email"
              onChange={handleChange}
              value={data.email}
              type="text"
              placeholder="Datos Personales"
            />
          </div>
          <div class="cont-input-label">
            <label for="">DNI</label>
            <input
              name="dni"
              onChange={handleChange}
              value={data.dni}
              type="text"
              placeholder="Datos Personales"
            />
          </div>
          <div class="cont-input-label">
            <label for="">Fecha Creacion</label>
            <input
              value={data.fechaCreacion}
              type="text"
              placeholder="Datos Personales"
            />
          </div>
          <div class="cont-input-label">
            <label for="">Pagando</label>
            <input
              value={data.pagando ? "Si" : "No"}
              disabled
              type="text"
              placeholder="Datos Personales"
            />
          </div>
          <div class="cont-input-label">
            <label for="">Tipo de Pago</label>
            <input
              value={data.tipoPago}
              disabled
              type="text"
              placeholder="Datos Personales"
            />
          </div>

          <div class="cont-input-label">
            <label for="">Cuotas</label>
            <input
              value={data.cuotas}
              disabled
              type="text"
              placeholder="Datos Personales"
            />
          </div>
          <div class="cont-input-label">
            <label for="">Direccion</label>
            <input
              name="direccion"
              onChange={handleChange}
              value={data.direccion}
              type="text"
              placeholder="Datos Personales"
            />
          </div>
          <div class="cont-input-label">
            <label for="">Provincia</label>
            <input
              name="provincia"
              onChange={handleChange}
              value={data.provincia}
              type="text"
              placeholder="Datos Personales"
            />
          </div>

          <Button color="blue" onClick={() => confirmEdit()}>
            Editar
          </Button>
        </div>

        <div class="table-cuotas-cliente">
          <h5>Cuotas a pagar</h5>
          <Table celled color="red" selectable structured striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>CUOTA</Table.HeaderCell>
                <Table.HeaderCell>VALOR</Table.HeaderCell>
                <Table.HeaderCell>Fecha de pago</Table.HeaderCell>
                <Table.HeaderCell>PAGADA</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {data.cuotas &&
                data.cuotasAPagar.map((item) => (
                  <Table.Row className={item.pagada ? "cuota-pagada" : null}>
                    <Table.Cell>{item.cuota}</Table.Cell>
                    <Table.Cell>{item.valor}</Table.Cell>
                    <Table.Cell>{item.fechaPago}</Table.Cell>
                    <Table.Cell>
                      {item.pagada ? "Pagada" : "Sin Pagar"}
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
          <h5>Cuotas abonadas pendientes a confirmar</h5>
          <Table celled color="green" selectable structured striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>CUOTA</Table.HeaderCell>
                <Table.HeaderCell>VALOR</Table.HeaderCell>
                <Table.HeaderCell>Fecha de pago</Table.HeaderCell>
                <Table.HeaderCell>CONFIRMAR</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {cuotasPendientes &&
                cuotasPendientes.map((item) => (
                  <Table.Row>
                    <Table.Cell>{item.cuota}</Table.Cell>
                    <Table.Cell>{item.valor}</Table.Cell>
                    <Table.Cell>{item.fechaPago}</Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        icon="check"
                        color="green"
                        onClick={() => verificarCuotas(item)}
                      />
                      <Button
                        icon="close"
                        color="red"
                        onClick={() => rechazarCuota(item)}
                      />
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
      </div>
      <div class="cont-historial-pagos">
        <h5>Historial de pagos totales</h5>
        <Table celled color="pink" selectable structured striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>CUOTA</Table.HeaderCell>
              <Table.HeaderCell>VALOR</Table.HeaderCell>
              <Table.HeaderCell>Producto</Table.HeaderCell>
              <Table.HeaderCell>Fecha de pago</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data.historial &&
              data.historial.map((item) => (
                <Table.Row>
                  <Table.Cell>{item.cuota}</Table.Cell>
                  <Table.Cell>{item.monto}</Table.Cell>
                  <Table.Cell>{item.producto}</Table.Cell>
                  <Table.Cell>{convertirFecha(item.fecha)}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
