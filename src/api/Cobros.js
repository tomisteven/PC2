import url from "../config.js";

export class CobrosAPI {
  url = url + "/cobros/";
  urlAdmin = url + "/admin/cobros/";
  async registrarCliente({ username, nombre, dni, email, password }) {
    const response = await fetch(this.url + "nuevo-cliente", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, nombre, dni, email, password }),
    });
    const data = await response.json();
    return data;
  }

  async confirmarCliente(id) {
    const response = await fetch(this.url + `editar/${id}`, {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ confirmadoPorAdministracion: true }),
    });
    const data = await response.json();
    return data;
  }

  async loginClient({ username, password }) {
    const response = await fetch(this.url + "cliente/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    return data;
  }

  async getClientById(id) {
    const response = await fetch(this.url + `${id}`);
    const data = await response.json();
    return data;
  }

  async editClientById(id, client) {
    const response = await fetch(this.url + `editar/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client),
    });
    const data = await response.json();
    return data;
  }

  async crearNuevoPago(idCliente, idCuota, producto) {
    const res = await fetch(this.url + `pago/${idCliente}/cuota/${idCuota}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ producto }),
    });
    const data = await res.json();
    return data;
  }

  async simularFinanciacion({ userId, producto, precio, confirmacion, tipo }) {
    const res = await fetch(this.url + `nueva-financiacion/` + userId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ producto, precio, confirmacion, tipo }),
    });
    const data = await res.json();
    return data;
  }

  async varificarPago(idCliente, idCuota) {
    const res = await fetch(
      this.urlAdmin +
        `verificar/pago/${idCliente}/cuota/${idCuota}?confirmacion=Aprobado`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  }

  async rechazarPago(idCliente, idCuota) {
    const res = await fetch(
      this.urlAdmin +
        `verificar/pago/${idCliente}/cuota/${idCuota}?confirmacion=Rechazado`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  }
}
