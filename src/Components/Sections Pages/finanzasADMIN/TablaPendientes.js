import React, { useState, useEffect, useMemo } from "react";
import "./tablaPendiente.css";

export default function TablaPendientes({
  data,
  state,
  setState,
  confirmarCliente,
}) {
  const [cuotasPendientes, setCuotasPendientes] = useState([]);

  const goToClient = (id) => {
    window.location.href = `/admin/cobros/5423456756/${id}`;
  };

  // Verificar si `data` es un array válido antes de procesarlo
  const processedCuotas = useMemo(() => {
    if (!Array.isArray(data)) return [];

    return data.reduce((acc, cliente) => {
      const cuotasPendientesCliente = cliente.cuotasAPagar
        .filter((c) => c.estado === "Pendiente de Aprobación")
        .map(() => ({
          cliente_id: cliente._id,
          cuota_id: cliente._id,
          cliente: cliente.nombre,
          username: cliente.username,
          email: cliente.email,
          telefono: cliente.telefono,
        }));
      return [...acc, ...cuotasPendientesCliente];
    }, []);
  }, [data]);

  useEffect(() => {
    setCuotasPendientes(processedCuotas);
  }, [processedCuotas]);

  return (
    <>
      <h5>PAGOS PARA CONFIRMAR</h5>
      {cuotasPendientes.length > 0 ? (
        cuotasPendientes.map((cuota) => (
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
        ))
      ) : (
        <p>No hay pagos pendientes por confirmar.</p>
      )}
    </>
  );
}
