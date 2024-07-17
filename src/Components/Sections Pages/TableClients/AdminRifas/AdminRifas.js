import React from "react";
import "./AdminRifas.css";
import { RifaAPI } from "../../../../api/rifa";
import swal from "sweetalert2";
import { Dna } from "react-loader-spinner";
/* import ModalEditar from "./ModalEditar";
import { Route } from "react-router-dom"; */

const rifaController = new RifaAPI();
export default function AdminRifas() {
  const [rifas, setRifas] = React.useState([]);
  const [state, setState] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
 /*  const [rifaEditar, setRifaEditar] = React.useState({});
  const [open, setOpen] = React.useState(false); */

  const onchange = () => {
    setState(!state);
  };

  const openModalEditar = (rifa) => {
    /* setRifaEditar(rifa._id); */
    window.location.href = "/admin/rifas/edit/" + rifa._id;

  };

  React.useEffect(() => {
    setLoading(true);
    const getRifas = async () => {
      const data = await rifaController.getRifas();
      setRifas(data);
      /* setRifaEditar({}); */
    };
    getRifas();
    setLoading(false);
  }, [state]);

  const deleteRifa = async (id) => {
    swal
      .fire({
        title: "¿Estas seguro de eliminar todas las rifas?",
        text: "Una vez eliminadas no se podran recuperar",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          await rifaController.deleteAllRifas();
          onchange();
        }
      });
  };

  loading && (
    <>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </>
  );

  const createRifa = async () => {
    const create = await rifaController.createRifa(value);
    create && swal.fire("Rifa creada con exito", "", "success");
    onchange();
  };

  const totRecaudado = () => {
    let total = 0;
    rifas.forEach((rifa) => {
      total += rifa.precio;
    });
    return total;
  };

  return (
    <div className="cont-admin-rifas">
      <h1>Administrador de Rifas, total recaudado = ${totRecaudado()}</h1>
      <div class="cont-buttons-admin-rifa">
        <input
          className="input-value-rifas"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => createRifa()}
          style={
            rifas.length > 0 ? { backgroundColor: "gray", opacity: 0.5 } : {}
          }
          className="btn-crear-rifa-admin"
          disabled={rifas.length > 0 ? true : false}
        >
          Crear Rifa
        </button>
        <button
          style={
            rifas.length === 0 ? { backgroundColor: "gray", opacity: 0.5 } : {}
          }
          disabled={rifas.length < 0 ? true : false}
          className="btn-eliminar-rifa-admin"
          onClick={() => deleteRifa()}
        >
          Eliminar Rifa
        </button>
      </div>
      <table className="table-rifas">
        <thead>
          <tr>
            <th>NUMERO</th>
            <th>Nombre</th>
            <th>Codigo Identificacion</th>
            <th>Precio</th>
            <th>DNI</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {rifas.map((rifa) => (
            <tr key={rifa._id}>
              <td>{rifa.numero}</td>
              <td>{rifa.comprador}</td>
              <td>{rifa.codigoIdentificacionRifa}</td>
              <td>${rifa.precio}</td>
              <td>{rifa.dni}</td>
              <td>{rifa.telefonoComprador}</td>
              <td>{rifa.emailComprador}</td>
              <td
                style={
                  rifa.estado
                    ? { backgroundColor: "red", color: "white" }
                    : { backgroundColor: "green", color: "white" }
                }
              >
                {rifa.estado ? "No Disponible" : "Disponible"}
              </td>
              <td>
                <button className="btn-editar-rifa-admin" onClick={() => {
                  openModalEditar(rifa);
                }}>
                  Editar
                </button>
                <button className="btn-eliminar-rifa-admin-table">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
