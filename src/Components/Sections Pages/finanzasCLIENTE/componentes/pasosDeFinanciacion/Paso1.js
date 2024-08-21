import React, { useCallback } from "react";
import { Button, Dropdown } from "semantic-ui-react";
import LoadingCobros from "../LoadingCobros";

export default function Paso1({
  products,
  financiacion,
  simulacroFinanciacion,
  paso,
  setPaso,
  userId1,
  clientController,
  setLoading,
  loading,
  setSimulacroFinanciacion,
  handleProductoChange,
}) {
  const acomodarFecha = useCallback((fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString();
  }, []);

  const simularFinanciacion = useCallback(async () => {
    if (!financiacion.producto) {
      alert("Debes seleccionar un producto para continuar");
      return;
    }
    setLoading(true);
    try {
      const data = await clientController.simularFinanciacion({
        userId: userId1,
        producto: financiacion.producto,
        precio: financiacion.precio,
        confirmacion: false,
      });
      setSimulacroFinanciacion(data);
    } finally {
      setLoading(false);
    }
  }, [
    financiacion,
    userId1,
    clientController,
    setLoading,
    setSimulacroFinanciacion,
  ]);

  if (loading) {
    return <LoadingCobros />;
  }
  return (
    <div className="cont-nueva-financiacion">
      <h3>Financia tus productos con FinanzasCrown!</h3>
      <p>
        Selecciona los productos que deseas financiar y presiona el botón
        "Siguiente" para continuar con el proceso de financiación.
      </p>
      <p>
        <strong>
          IMPORTANTE, SI YA TIENES UNA FINANCIACIÓN ACTIVA NO PODRÁS GENERAR UNA
          NUEVA HASTA FINALIZARLA.
        </strong>
      </p>
      <Dropdown
        className="dropdown-productos"
        placeholder="Buscar Productos"
        value={financiacion.producto}
        selection
        search
        options={products}
        onChange={handleProductoChange}
      />
      {simulacroFinanciacion.length > 0 && (
        <div className="simulacro-financiacion">
          <div className="cont-simulacro-cuotas">
            {simulacroFinanciacion.map((simulacion) => (
              <div
                key={simulacion.tipo}
                className="simulacion-financiacion-cuotas"
              >
                <h6 className="title-cuota">
                  {simulacion.tipo} Interes: {simulacion.interes * 100}%
                </h6>
                {simulacion.cuotas.map((cuota) => (
                  <div key={cuota.cuota} className="info-cuota-simulacro">
                    <strong>Cuota {cuota.cuota}</strong> - Valor: ${cuota.valor}{" "}
                    -<strong>{acomodarFecha(cuota.fechaPago)}</strong>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
      <Button color="green" onClick={simularFinanciacion}>
        Simular Financiaciones con el producto seleccionado
      </Button>
      <div className="cont-botones-financiacion">
        <button
          className="btn-nueva-financiacion-atras"
          onClick={() => setPaso(paso - 1)}
        >
          Atrás {paso}/3
        </button>
        <button
          className="btn-nueva-financiacion"
          onClick={() => setPaso(paso + 1)}
        >
          Siguiente {paso}/3
        </button>
      </div>
    </div>
  );
}
