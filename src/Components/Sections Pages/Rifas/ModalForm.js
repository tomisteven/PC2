import React from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ModalForm.form";
import { RifaAPI } from "../../../api/rifa";

//IMPLEMENTAR YUP Y FORMIK
//

const rifaAPI = new RifaAPI();

export default function ModalForm({ open, setOpen, rifas, precioTotal }) {
  const [loading, setLoading] = React.useState(false);
  const numeros = rifas.map((rifa) => rifa.numero);

  const onSubmit = async (values) => {
    setLoading(true);
    const body = {
      nombre: values.nombre,
      dni: values.dni,
      email: values.email,
      telefono: values.telefono,
      rifas: numeros,
      precio: precioTotal,
    };

    const res = await rifaAPI.createPayment(body);
    setLoading(false);
    res.ok
      ? window.location.href = res.pay
      : alert(
          "Error al procesar el pago, tus rifa/s no fueron asignadas ya que las adquirio otra persona!  Recomendamos actualizar la pagina para cargar las nuevas rifas disponibles"
        );

    setOpen(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Modal
      dimmer="blurring"
      closeOnDimmerClick={false}
      size="small"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>Estas a un paso de comprar tus rifas! </Modal.Header>
      <Modal.Content>
        <p>
          Completa tus datos para asignarte las rifas! Si hay datos faltantes no
          se podra asignar un ganador!
        </p>
        <h1
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "baseline",
          }}
        >
          Rifas Seleccionadas:{" "}
          {rifas.map((rifa) => {
            return (
              <p>
                {"( "}
                {rifa.numero} {" )"}
              </p>
            );
          })}
        </h1>
        <Modal.Description>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group widths="2">
              <Form.Input
                onChange={formik.handleChange}
                value={formik.values.nombre}
                fluid
                name="nombre"
                label="Nombre Completo"
                placeholder="Nombre Completo"
                error={formik.errors.nombre}
              />
              <Form.Input
                value={formik.values.dni}
                onChange={formik.handleChange}
                name="dni"
                fluid
                label="DNI"
                placeholder="12345678"
                error={formik.errors.dni}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
                error={formik.errors.email}
              />
              <Form.Input
                fluid
                label="Telefono"
                placeholder="1133445599"
                value={formik.values.telefono}
                onChange={formik.handleChange}
                name="telefono"
                error={formik.errors.telefono}
              />
            </Form.Group>
            <Button
              type="submit"
              content="PROCEDER A PAGAR"
              labelPosition="right"
              loading={loading}
              icon={loading ? "spinner" : "credit card outline"}
              //onClick={() => setOpen(false)}
              positive
            />
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          Cancelar
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
