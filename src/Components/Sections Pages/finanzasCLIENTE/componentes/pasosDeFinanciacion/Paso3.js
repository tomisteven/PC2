import React, { useCallback } from "react";
import { Button } from "semantic-ui-react";

export default function Paso3({
  financiacion,
  userId1,
  usuario,
  clientController,
  setLoading,
  setStateLocalStorage,
}) {
  const generarNuevaFinanciacion = useCallback(async () => {
    if (usuario.financiacion.length > 0) {
      alert(
        "Ya tienes una financiación activa, debes terminarla para poder solicitar una nueva"
      );
      return;
    }
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
        tipo: financiacion.tipoFinanciacion,
        confirmacion: true,
      });
      if (!data.ok) {
        alert(data.error);
      } else {
        alert("Financiación Generada con Éxito!");
        setStateLocalStorage((prevState) => !prevState);
        window.location.href = "activas";
      }
    } finally {
      setLoading(false);
    }
  }, [
    financiacion,
    userId1,
    setStateLocalStorage,
    usuario.financiacion.length,
    clientController,
    setLoading,
  ]);

  return (
    <div className="cont-nueva-financiacion">
      <h3>
        Perfecto, para terminar debes aceptar las condiciones de financiación!
      </h3>
      <p>
        Al presionar el botón "Finalizar" aceptas las condiciones de
        financiación y se generará un contrato de financiación que será enviado
        a tu correo electrónico.
      </p>
      <Button primary onClick={generarNuevaFinanciacion}>
        Finalizar y Aceptar Condiciones
      </Button>
    </div>
  );
}
