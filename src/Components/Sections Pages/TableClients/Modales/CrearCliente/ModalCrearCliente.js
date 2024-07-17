import React from "react";
import { Modal, Form, Button } from "semantic-ui-react";
import "./ModalCrearCliente.css";
import { Client } from "../../../../../api/clients";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "../../CreateClientForm";

const clientController = new Client();
export default function ModalCrearCliente({
  setOpenCreate,
  openCreate,
  changeState,
  clientes,
  setClientesState
}) {

  //console.log("clientes", clientes);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: async (values) => {
      const res = await clientController.createClient(values);
      //console.log("res", res);
      res.status === 201
        ? toast.success("Cliente creado con exito", {
            autoClose: 1000,
            theme: "colored",
          })
        : toast.error("Error al crear cliente", {
            autoClose: 1000,
            theme: "colored",
          });
          clientes.unshift(res.data);

      /* changeState(); */

      setOpenCreate(false);
      formik.resetForm();
    },
  });

  const stateOptions = [
    {
      key: "Esparando Actualizacion..",
      text: "Esperando Actualizacion..",
      value: "Esperando Actualizacion..",
    },
    {
      key: "Separacionn Ingresos",
      text: "Separacion Ingresos",
      value: "Separacion Ingresos",
    },
    {
      key: "Mercado Libre",
      text: "Mercado Libre",
      value: "Mercado Libre",
    },
    {
      key: "Accesorios",
      text: "Accesorios",
      value: "Accesorios",
    },
    { key: "Devolucion", text: "Devolucion", value: "Devolucion" },
    { key: "Pendiente", text: "Pendiente", value: "Pendiente" },
    { key: "Confirmado", text: "Confirmado", value: "Confirmado" },
    {
      key: "Pre Fabricacion",
      text: "Pre Fabricacion",
      value: "Pre Fabricacion",
    },
    { key: "Moldeando", text: "Moldeando", value: "Moldeando" },
    { key: "En Masillado", text: "En Masillado", value: "En Masillado" },
    {
      key: "Colocacion de Refuezos",
      text: "Colocacion de Refuezos",
      value: "Colocacion de Refuezos",
    },
    {
      key: "Proceso de Pintado",
      text: "Proceso de Pintado",
      value: "Proceso de Pintado",
    },
    { key: "Laqueado Final", text: "Laqueado Final", value: "Laqueado Final" },
    { key: "Aujereado", text: "Aujereado", value: "Aujereado" },
    { key: "En Secado", text: "En Secado", value: "En Secado" },
    {
      key: "Ultimando Detalles en Fabrica",
      text: "Ultimando Detalles en Fabrica",
      value: "Ultimando Detalles en Fabrica",
    },
    {
      key: "En Local de Padel Crown",
      text: "En Local de Padel Crown",
      value: "En Local de Padel Crown",
    },
    { key: "Empaquetando", text: "Empaquetando", value: "Empaquetando" },
    {
      key: "Recibido por Andreani",
      text: "Recibido por Andreani",
      value: "Recibido por Andreani",
    },
    {
      key: "En Distribucion",
      text: "En Distribucion",
      value: "En Distribucion",
    },
    { key: "Cancelado", text: "Cancelado", value: "Cancelado" },
    { key: "Enviado", text: "Enviado", value: "Enviado" },
    { key: "Entregado", text: "Entregado", value: "Entregado" },
  ];

  return (
    <Modal
      size="small"
      onClose={() => setOpenCreate(false)}
      onOpen={() => setOpenCreate(true)}
      open={openCreate}
    >
      <Modal.Header>Crear Cliente</Modal.Header>
      <Modal.Content>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Input
              label="Nombre Completo"
              placeholder="Nombre Completo"
              width={6}
              onChange={formik.handleChange}
              value={formik.values.nombre}
              error={formik.errors.nombre}
              name="nombre"
            />
            <Form.Input
              label="Producto"
              onChange={formik.handleChange}
              value={formik.values.producto}
              error={formik.errors.producto}
              placeholder="Producto"
              width={6}
              name="producto"
            />
            <Form.Input
              label="Fecha Compra"
              placeholder="Fecha Compra"
              onChange={formik.handleChange}
              value={formik.values.fechaCompra}
              error={formik.errors.fechaCompra}
              width={6}
              name="fechaCompra"
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label={"Precio"}
              onChange={formik.handleChange}
              value={formik.values.precio}
              error={formik.errors.precio}
              placeholder="Precio"
              width={4}
              name="precio"
            />
            <Form.Input
              label={"Costo"}
              placeholder="Costo"
              onChange={formik.handleChange}
              value={formik.values.costo}
              error={formik.errors.costo}
              width={4}
              name="costo"
            />
            <Form.Input
              label={"Carbono"}
              onChange={formik.handleChange}
              value={formik.values.valorCarbono}
              error={formik.errors.valorCarbono}
              placeholder="Carbono"
              width={4}
              name="valorCarbono"
            />
            <Form.Input
              label={"Envio"}
              placeholder="Envio"
              onChange={formik.handleChange}
              value={formik.values.envio}
              error={formik.errors.envio}
              width={4}
              name="envio"
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label={"DNI"}
              onChange={formik.handleChange}
              value={formik.values.dni}
              error={formik.errors.dni}
              placeholder="DNI"
              name="dni"
              width={6}
            />
            <Form.Input
              label={"Provincia"}
              onChange={formik.handleChange}
              value={formik.values.provincia}
              error={formik.errors.provincia}
              placeholder="Provincia"
              name="provincia"
              width={6}
            />
            <Form.Input
              label={"Localidad"}
              onChange={formik.handleChange}
              value={formik.values.localidad}
              error={formik.errors.localidad}
              name="localidad"
              placeholder="Localidad"
              width={6}
            />
            <Form.Input
              label={"Direccion"}
              onChange={formik.handleChange}
              value={formik.values.direccion}
              error={formik.errors.direccion}
              name="direccion"
              placeholder="Direccion"
              width={6}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              onChange={formik.handleChange}
              value={formik.values.telefono}
              error={formik.errors.telefono}
              name="telefono"
              label={"Telefono"}
              placeholder="Telefono"
              width={6}
            />
            <Form.Input
              label={"Email"}
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
              name="email"
              placeholder="Email"
              width={6}
            />
          </Form.Group>
          <Form.Group>
            <Form.Select
              fluid
              label="Estado"
              options={stateOptions}
              width={8}
              placeholder="Estado"
              onChange={(e, data) => {
                formik.setFieldValue("estadoPedido", [
                  {
                    estado: data.value,
                    fecha: new Date().toLocaleDateString(),
                  },
                ]);
              }}
            />
            <Form.Input
              label={"Comentario"}
              placeholder="Comentario"
              width={8}
              onChange={(e, data) => {
                formik.setFieldValue("comentarios", [
                  {
                    comentario: data.value,
                  },
                ]);
              }}
            />
          </Form.Group>
        </Form>

        <Button
          color="black"
          onClick={() => {
            setOpenCreate(false);
          }}
        >
          Cancelar
        </Button>
        <Button
          content="Crear"
          labelPosition="left"
          icon="checkmark"
          type="submit"
          loading={formik.isSubmitting}
          onClick={formik.handleSubmit}
          positive
        />
      </Modal.Content>
    </Modal>
  );
}
