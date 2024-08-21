import React from "react";
import { useEffect, useState } from "react";
import LoadingCobros from "./LoadingCobros";
import { CobrosAPI } from "../../../../api/Cobros";
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Modal,
  Button,
  ModalContent,
  ModalDescription,
  Header,
  ModalActions,
} from "semantic-ui-react";
import swal from "sweetalert";

const cobrosController = new CobrosAPI();
export default function InfoCliente({
  setStateLocalStorage,
  stateLocalStorage,
}) {
  const [loading, setLoading] = useState(false);
  const [cliente, setCliente] = useState({});
  const [cuota, setCuota] = useState({});
  const [state, setState] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const path = window.location.pathname;

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await cobrosController.getClientById(
        localStorage.getItem("idUserFinanciero")
      );
      setCliente(res);
      setLoading(false);
    };

    fetchData();
  }, [path, state]);

  if (loading || !cliente) {
    return <LoadingCobros />;
  }

  const confirmarNuevoPago = async (idCliente, idCuota, producto) => {
    swal({
      title: "Estas seguro?",
      text: "Una vez confirmado tu pago te notificaremos si se aprobo o no!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        setLoading(true);
        const res = await cobrosController.crearNuevoPago(
          idCliente,
          idCuota,
          producto
        );
        setLoading(false);
        if (res.ok) {
          swal("El pago fue confirmado con exito!", {
            icon: "success",
          });
          setStateLocalStorage(!stateLocalStorage);
          setState(!state);
        } else {
          swal("Hubo un error al confirmar el pago", {
            icon: "error",
          });
        }
      } else {
        swal("Operacion cancelada", {
          icon: "info",
        });
      }
    });
  };

  if (!cliente) {
    return <LoadingCobros />;
  }

  const acomodarFecha = (fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString();
  };

  return (
    <div>
      {loading ? (
        <LoadingCobros />
      ) : (
        <div className="cont-table-cuotas-pagar">
          <h1>Fianciaciones Activas</h1>
          <div class="cont-info-financiacion">
            <h3 className="info-producto">Tipo de Pago: {cliente.tipoPago}</h3>
            <h3 className="info-producto">
              Tipo de Pago: ${cliente.totalAbonado}
            </h3>
            <h3 className="info-producto">Producto: {cliente.producto}</h3>
            <h3 className="info-producto">
              Estado: {cliente.estadoActual ? "Pagando" : "Vencida"}
            </h3>
            <h3 className="info-producto">Interes por cuota: 0</h3>
          </div>

          <Table
            textAlign="center"
            celled
            color="green"
            key="d"
            selectable
            structured
            striped
            className="table-cuotas-pagar"
            style={{
              width: "1100px",
              marginTop: "20px",
            }}
          >
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Numero de Cuota</TableHeaderCell>
                <TableHeaderCell>Fecha de Vencimiento</TableHeaderCell>
                <TableHeaderCell>Monto</TableHeaderCell>
                <TableHeaderCell>Estado</TableHeaderCell>
                <TableHeaderCell className="cell-pago">Pago</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cliente.cuotas &&
                cliente.cuotasAPagar.map((cuota) => (
                  <TableRow>
                    <TableCell>{cuota.cuota || "No especificado"}</TableCell>
                    <TableCell>{acomodarFecha(cuota.fechaPago)}</TableCell>
                    <TableCell>$ {cuota.valor || "No especificado"}</TableCell>
                    <TableCell>
                      {cuota.estado === true ? "PAGO RECIBIDO" : "PENDIENTE"}
                    </TableCell>
                    <TableCell className="cont-actions-table">
                      <Button
                        color="blue"
                        size="tiny"
                        onClick={() => {
                          setShowModal(true);
                          setCuota(cuota);
                        }}
                      >
                        Datos de Cuenta
                      </Button>
                      <button
                        disabled={cuota.estado === "Pendiente de Aprobación"}
                        className="btn-crear-pago"
                        onClick={() =>
                          confirmarNuevoPago(
                            localStorage.getItem("idUserFinanciero"),
                            cuota._id,
                            cliente.producto
                          )
                        }
                        style={
                          cuota.estado === "Pendiente de Aprobación"
                            ? {
                                backgroundColor: "green",
                                opacity: 0.5,
                                cursor: "not-allowed",
                              }
                            : { backgroundColor: "purple" }
                        }
                      >
                        {cuota.estado}
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <Modal
            onClose={() => setShowModal(false)}
            onOpen={() => setShowModal(true)}
            open={showModal}
          >
            <ModalContent image>
              <ModalDescription className="modal-description">
                <h2>
                  Cuota numero {cuota.cuota} de {cliente.cuotas}
                </h2>
                <p className="p-cuota-valor">
                  Valor a transferir $ {cuota.valor}
                </p>
                <p className="p-cuota-motivo">
                  Agregar en Motivo de transferencia: "{cliente.username} - C
                  {cuota.cuota}"
                </p>
                <Header className="modal-header">
                  <h5>Transferi el valor de tu cuota</h5>
                </Header>
                <p className="modal-info-p">
                  Transferi el valor de tu cuota a la siguiente cuenta:
                </p>
                <p>
                  BANCO: <span className="span-modal">Banco Nacion</span>
                </p>
                <p>
                  Nombre de la cuenta:{" "}
                  <span className="span-modal">Facundo agustin ayala</span>
                </p>
                <p>
                  ALIAS:{" "}
                  <span className="span-modal" id="textoacopiar">
                    Padelcrown23
                  </span>
                  <Button color="gray" icon="copy" className="btn-copiar" />
                </p>
                <p>
                  CBU: <span className="span-modal">123456789</span>
                </p>
                <p>
                  CUIT: <span className="span-modal">123456789</span>
                </p>
                <h4>
                  Una vez transferido el dinero, aguardar confirmacion de
                  recepcion por parte de la administracion de padelcrown, una
                  vez aprobada en tu panel figurara que la cuota se abono
                  correctamente.
                </h4>
              </ModalDescription>
            </ModalContent>
            <ModalActions>
              <Button
                content="Cerrar y proceder a notificar pago"
                labelPosition="right"
                icon="checkmark"
                onClick={() => setShowModal(false)}
                positive
              />
            </ModalActions>
          </Modal>
        </div>
      )}{" "}
    </div>
  );
}
