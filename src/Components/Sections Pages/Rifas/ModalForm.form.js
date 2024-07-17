import * as yup from "yup"

export const initialValues = {
  nombre: "",
  dni: "",
  email: "",
  telefono: "",
};

export const validationSchema = yup.object().shape({
  nombre: yup.string().required("El nombre es requerido"),
  dni: yup.string().required("El DNI es requerido"),
  email: yup.string().required("El email es requerido"),
  telefono: yup.string().required("El telefono es requerido"),
});
