import React from "react";
import "./tablaPendiente.css";

export default function TablaPendientes({
  data,
  state,
  setState,
  confirmarCliente,
}) {
  const [cuotasPendientes, setCuotasPendientes] = React.useState([]);

  const goToClient = (id) => {
    window.location.href = `/admin/cobros/5423456756/${id}`;
  };

  React.useEffect(() => {
    setCuotasPendientes([]);
    const findCuotas = async () => {
      for (let cuota = 0; cuota < data.length; cuota++) {
        data[cuota].cuotasAPagar.map((c) => {
          if (c.estado === "Pendiente de Aprobación") {
            setCuotasPendientes((prev) => [
              ...prev,
              {
                cliente_id: data[cuota]._id,
                cuota_id: data[cuota]._id,
                cliente: data[cuota].nombre,
                username: data[cuota].username,
                email: data[cuota].email,
                telefono: data[cuota].telefono,
              },
            ]);
          }
          return null;
        });
      }
    };
    findCuotas();
  }, [state, data]);

  return (
    <div>
      <h5>PAGOS PARA CONFIRMAR</h5>
      {cuotasPendientes &&
        cuotasPendientes.map((cuota) => {
          return (
            <div key={cuota.username} className="cuota-pendiente-cont">
              <p className="cuota-pendiente-cont-p">
                <strong>CLIENTE: </strong> {cuota.cliente}
              </p>
              <p className="cuota-pendiente-cont-p">
                <strong>EMAIL: </strong> {cuota.email}
              </p>
              <p className="cuota-pendiente-cont-p">
                <strong>USUARIO: </strong> {cuota.username}
              </p>
              <p className="cuota-pendiente-cont-p">
                <strong>TELEFONO: </strong> {cuota.telefono}
              </p>
              <button
                className="cuota-pendiente-cont-btn"
                onClick={() => goToClient(cuota.cliente_id)}
              >
                Ver Cliente
              </button>
            </div>
          );
        })}
    </div>
  );
}
