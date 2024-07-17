import React, { useEffect } from "react";
import "./Rifas.css";
import Swal from "sweetalert2";
import ModalForm from "./ModalForm";
import { RifaAPI } from "../../../api/rifa";
import { Progress } from "semantic-ui-react";
import pelotita from "../../../assets/load-ball.png";
import { Blocks } from "react-loader-spinner";

const rifaAPI = new RifaAPI();

export default function Rifas() {
  const [open, setOpen] = React.useState(false);
  const [seleccionadas, setSeleccionadas] = React.useState([]);
  const [precioTotal, setPrecioTotal] = React.useState(0);
  const [rifas, setRifas] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [change, setChange] = React.useState(false);

  const vendidas = rifas.filter((r) => r.estado).length;

  const urlParams = new URLSearchParams(window.location.search);
  const $rifa_asignada = urlParams.get("ok");
  const $codigoRifa = urlParams.get("codigo");

  const onChange = () => {
    setChange(!change);
  };

  useEffect(() => {
    setPrecioTotal(0);
    setSeleccionadas([]);
    if ($rifa_asignada === "true") {
      Swal.fire({
        icon: "success",
        title: "Felicidades!",
        text:
          "Tu pago fue procesado con exito y tus rifas asignadas correctamente! Tu codigo de rifa es: " +
          $codigoRifa +
          " Guardalo por las dudas!",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.replace("/rifas");
        }
      });
    }
    setLoading(true);
    rifaAPI
      .getRifasDisponibles(true)
      .then((res) => {
        setRifas(res);
        console.log(res);
      })
      .finally(() => setLoading(false));
  }, [$rifa_asignada, $codigoRifa, change]);

  //Funcion para agregar una rifa a la lista de rifas seleccionadas
  const addRifa = (rifa) => {
    //Validacion para que no se pueda seleccionar una rifa ya seleccionada
    if (
      rifas.filter((r) => r.numero === rifa.numero && r.estado).length === 0 &&
      seleccionadas.length < 1
    ) {
      const updatedRifas = rifas.map((r) =>
        r.numero === rifa.numero ? { ...r, estado: true } : r
      );
      setRifas(updatedRifas);
      //fijamos el precio total de la rifa
      setPrecioTotal(3000);
      setSeleccionadas([...seleccionadas, rifa]);
    }

    if (seleccionadas.length === 1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Solo puedes seleccionar 1 rifa! Para comprar mas, debes finalizar la compra! y volver a seleccionar!",
      });
    }
    //Switch para calcular el precio total de las rifas seleccionadas
    /* switch (seleccionadas.length + 1) {
      case 1:
        setPrecioTotal(2000);
        break;
      default:
        setPrecioTotal(0);
        break;
    } */
  };

  //Funcion para quitar una rifa de la lista de rifas seleccionadas
  const quitRifa = (rifa) => {
    const updatedRifas = rifas.map((r) =>
      r.numero === rifa.numero ? { ...r, estado: false } : r
    );
    setRifas(updatedRifas);
    setSeleccionadas(seleccionadas.filter((r) => r.numero !== rifa.numero));
    switch (seleccionadas.length - 1) {
      case 1:
        setPrecioTotal(1);
        break;
      case 2:
        setPrecioTotal(2);
        break;
      case 3:
        setPrecioTotal(3);
        break;
      case 4:
        setPrecioTotal(4);
        break;
      case 5:
        setPrecioTotal(5);
        break;
      default:
        setPrecioTotal(0);
        break;
    }
  };

  return (
    <div className="contenedor-rifas">
      {loading ? (
        <div className="cont-loading">
          <Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
          />
        </div>
      ) : (
        <>
          <div className="cont-seleccionadas">
            <button className="btn-recargar-rifas" onClick={() => onChange()}>
              Recargar Pagina!
            </button>
            <h5>
              Progreso de Rifas vendidas{": "} {vendidas}/{rifas.length}
            </h5>
            <Progress
              className="progress-bar-cont"
              size="medium"
              total={rifas.length}
              value={vendidas}
              progress
              success
              warning
            />
            <div className="cont-seleccionadas-seleccionadas">
              <h2>Rifas Seleccionadas</h2>
              {seleccionadas.length > 0 ? (
                seleccionadas.map((rifa) => (
                  <div className="rifa-seleccionada" key={rifa._id}>
                    <img
                      className="peotita-seleccionadas"
                      src={pelotita}
                      alt=""
                    />
                    <h3>Rifa: {rifa.numero}</h3>
                    <button onClick={() => quitRifa(rifa)}>X</button>
                  </div>
                ))
              ) : (
                <p>No hay rifas seleccionadas</p>
              )}
            </div>

            <h4>Total: ${precioTotal}</h4>
            <div class="cont-buttons-rifa-actions">
              <button
                className="btn-comprar-rifa"
                onClick={() => {
                  seleccionadas.length === 0
                    ? Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Debes seleccionar al menos una rifa",
                      })
                    : setOpen(true);
                }}
              >
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Comprar</span>
              </button>
              <button
                className="btn-limpiar-rifas"
                onClick={() =>
                  setSeleccionadas([]) & setPrecioTotal(0) & setChange(!change)
                }
              >
                Limpiar
              </button>
            </div>
          </div>

          <div className="cont-rifa">
            {rifas.length === 0 ? (
              <div className="cont-crear-rifa">
                <h3>No hay Rifa activa actualmente!</h3>
                <p>Visite nuestras redes para enterarse novedades</p>
              </div>
            ) : (
              rifas.map((rifa) => (
                <div
                  key={rifa._id}
                  className="card"
                  style={
                    rifa.estado
                      ? {
                          opacity: 0.4,
                          pointerEvents: "none",
                          backgroundColor: "#eb7d00",
                        }
                      : {}
                  }
                >
                  <div className="card-border-top">
                    <img src={pelotita} alt="" />
                  </div>
                  <div
                    className="img"
                    style={rifa.estado ? { color: "#000000" } : {}}
                  >
                    {rifa.numero}
                  </div>
                  <button
                    className="btn-agregar-rifa"
                    style={
                      rifa.estado
                        ? { backgroundColor: "#ff0000" }
                        : { backgroundColor: "#00b212" }
                    }
                    onClick={() => addRifa(rifa)}
                  >
                    {rifa.estado
                      ? `${rifa.codigoIdentificacionRifa}`
                      : "Agregar"}
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="cont-info">
            <h2>Informacion de la rifa</h2>
            <ul>
              <li>
                <h3>1. El precio de la rifa es de $3000</h3>
              </li>
              <li>
                <h3>3. Solo puedes seleccionar una vez cada rifa</h3>
              </li>
              <li>
                <h3>4. Solo puedes comprar la rifas seleccionada</h3>
              </li>
              <li>
                <h2>1 x $3000</h2>
              </li>

              <li>
                <h2>Solo se puede comprar de a 1 rifa</h2>
              </li>
            </ul>
          </div>
          <ModalForm
            open={open}
            setOpen={setOpen}
            rifas={[...seleccionadas]}
            precioTotal={precioTotal}
          />
        </>
      )}
    </div>
  );
}
