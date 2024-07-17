import React, { useEffect } from "react";
import {
  Button,
  Modal,
  Header,
  ModalHeader,
  ModalContent,
  ModalDescription,
  ModalActions,
  Label,
} from "semantic-ui-react";
import { RifaAPI } from "../../../../api/rifa";
import swal from "sweetalert2";
/* import { useFormik } from "formik";
import { validationSchema, initialValues } from "./ModalEdit.form"; */

const rifaController = new RifaAPI();
export default function ModalEditar() {
  const [rifa, setRifaEditar] = React.useState({});
  const [open, setOpen] = React.useState(true);

  const id = window.location.pathname.split("/").pop();

  useEffect(() => {
    console.log("en modal editar");
    const getRifa = async () => {
      const data = await rifaController.getRifa(id);
      setRifaEditar(data);
    };
    getRifa();
  }, [id]);

  const onSubmit = async (values) => {
    const res = await rifaController.editRifa(values);
    if (res) {
      swal
        .fire({
          title: "Rifa editada",
          text: "La rifa fue editada correctamente",
          icon: "success",
          confirmButtonText: "Aceptar",
        })
        .then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/admin/rifas";
          }
        });
    }
  };

  return (
    <div>
      <Modal onClose={() => setOpen(false)} open={open}>
        <ModalHeader>EDITAR RIFA</ModalHeader>
        <ModalContent>
          <ModalDescription>
            <Header
              className="header-moda-edit-rifa"
              textAlign="center"
              inverted
            >
              RIFA NUMERO: {rifa.numero}
            </Header>
            <form>
              <div class="cont-2-inputs-modal-rifa">
                <Label> Nombre </Label>
                <input
                  placeholder="NOMBRE COMPRADOR"
                  name="comprador"
                  className="input-rifa-modal"
                  type="text"
                  value={rifa.comprador}
                  onChange={
                    /* formik.handleChange */ (e) => {
                      setRifaEditar({
                        ...rifa,
                        comprador: e.target.value,
                      });
                    }
                  }
                />
                <Label> Email </Label>
                <input
                  placeholder="Email COMPRADOR"
                  type="email"
                  className="input-rifa-modal"
                  name="emailComprador"
                  value={rifa.emailComprador}
                  onChange={
                    /* formik.handleChange */ (e) => {
                      setRifaEditar({
                        ...rifa,
                        emailComprador: e.target.value,
                      });
                    }
                  }
                />
              </div>
              <div class="cont-2-inputs-modal-rifa">
                <Label> DNI </Label>
                <input
                  type="text"
                  className="input-rifa-modal"
                  placeholder="DNI COMPRADOR"
                  name="dni"
                  value={rifa.dni}
                  onChange={
                    /* formik.handleChange */ (e) => {
                      setRifaEditar({
                        ...rifa,
                        dni: e.target.value,
                      });
                    }
                  }
                />
                <Label> Codigo </Label>
                <input
                  type="text"
                  className="input-rifa-modal"
                  placeholder="CODIGO COMPRADOR"
                  name="codigoIdentificacionRifa"
                  value={rifa.codigoIdentificacionRifa}
                  onChange={
                    /* formik.handleChange */ (e) => {
                      setRifaEditar({
                        ...rifa,
                        codigoIdentificacionRifa: e.target.value,
                      });
                    }
                  }
                />
              </div>
              <div class="cont-2-inputs-modal-rifa-2">
                <Label className="label-rifa-estado">ASIGNADA ? </Label>
                <input
                  type="checkbox"
                  className="input-rifa-modal"
                  placeholder="ESTADO"
                  name="estado"
                  checked={rifa.estado}
                  onChange={
                    /* formik.handleChange */ (e) => {
                      setRifaEditar({
                        ...rifa,
                        estado: e.target.checked,
                      });
                    }
                  }
                />
                <Label> Telefono </Label>
                <input
                  type="text"
                  className="input-rifa-modal"
                  placeholder="Telefono"
                  name="telefonoComprador"
                  value={rifa.telefonoComprador}
                  onChange={
                    /* formik.handleChange */ (e) => {
                      setRifaEditar({
                        ...rifa,
                        telefonoComprador: e.target.value,
                      });
                    }
                  }
                />
              </div>
            </form>
            <Button color="green" onClick={() => onSubmit(rifa)}> Editar Rifa </Button>
          </ModalDescription>
        </ModalContent>
        <ModalActions>
          <Button
            color="black"
            onClick={() => {
              window.location.href = "/admin/rifas";
            }}
          >
            Cancelar
          </Button>
        </ModalActions>
      </Modal>
    </div>
  );
}
