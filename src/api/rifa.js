export class RifaAPI {


  production = true;
  url = this.production
    ? "https://particular-bernita-digitalcode.koyeb.app"
    : "http://localhost:8080";

  async createPayment(body) {
    console.log(body);
    const response = await fetch(this.url + "/payment/create-payment", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }

  async getRifa(id) {
    const response = await fetch(this.url + "/rifa/get/" + id);
    return response.json();
  }

  async getRifasDisponibles(state) {
    const response = await fetch(this.url + "/rifa/get?estado" + state);
    return response.json();
  }

  async getRifas() {
    const response = await fetch(this.url + "/rifa/get");
    return response.json();
  }

  async deleteAllRifas() {
    const response = await fetch(this.url + "/rifa/delete", {
      method: "DELETE",
    });
    return response.json();
  }

  async createRifa(value) {
    const response = await fetch(this.url + "/rifa/create", {
      method: "POST",
      body: JSON.stringify({
        cantidad: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }


  async editRifa(rifa) {
    const response = await fetch(this.url + "/rifa/edit/" + rifa._id, {
      method: "PATCH",
      body: JSON.stringify(rifa),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }


}
