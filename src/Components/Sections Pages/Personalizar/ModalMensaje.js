import React from "react";
import { Modal, Button, Form } from "semantic-ui-react";

export default function ModalMensaje({ open, setOpen, formContact, setForm }) {
  return (
    <>
      <Modal
        dimmer="blurring"
        closeOnDimmerClick={false}
        size="small"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Estas a un paso de Personalizar tu paleta!</Modal.Header>
        <Modal.Content>
          <p>Completa tus datos para luego generar el pedido mas rapido!</p>
          <Modal.Description>
            <Form>
              <Form.Group widths="3">
                <Form.Input
                  fluid
                  label="Nombre Completo"
                  placeholder="Nombre Completo"
                  error
                  onChange={(e) => {
                    setForm({ ...formContact, nombre: e.target.value || "No completo" });
                  }}
                />
                <Form.Input
                  fluid
                  label="Provincia"
                  placeholder="Provincia"
                  onChange={(e) => {
                    setForm({ ...formContact, provincia: e.target.value || "No completo" });
                  }}
                />
                <Form.Input
                  fluid
                  label="Localidad"
                  placeholder="Localidad"
                  onChange={(e) => {
                    setForm({ ...formContact, localidad: e.target.value || "No completo" });
                  }}
                />
              </Form.Group>
              <Form.Group widths="equal">

                <Form.Input
                  fluid
                  label="Email"
                  placeholder="Email"
                  onChange={(e) => {
                    setForm({ ...formContact, email: e.target.value || "No completo" });
                  }}
                />

              </Form.Group>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button
            content="Listo, A Personalizar!"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </>
  );
}
