import * as Yup from 'yup';

export function initialValues(){
    return {
        nombre: "",
        producto: "",
        fechaCompra: "",
        precio: "" ,
        costo: "" ,
        valorCarbono: "",
        envio: "",
        provincia: "",
        localidad: "",
        direccion: "",
        telefono: "",
        email: "",
        estadoPedido: [
            {
                estado: "",
                fecha: ""
            }
        ],
        comentarios: [
            {
                comentario: ""
            }
        ]
    }

}

export function validationSchema(){
    return Yup.object({
        nombre: Yup.string(),
        producto: Yup.string(),
        fechaCompra: Yup.string(),
        precio: Yup.number(),
        costo: Yup.number(),
        valorCarbono: Yup.number(),
        envio: Yup.string(),
        provincia: Yup.string(),
        localidad: Yup.string(),
        direccion: Yup.string(),
        telefono: Yup.string(),
        email: Yup.string(),

    })
}