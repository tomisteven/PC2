export class Product {

     url = "https://paderlcrown-server.onrender.com/"
     urlLocal = "http://localhost:8080/"

    async getProducts() {
        const res = await fetch(`${this.url}`);
        const data = await res.json();
        return data;
    }


    async createProduct(product) {}

    async editProduct(product, id) {

         const res = await fetch(this.url + `update/${id}`, {
            method: "PATCH",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
        return res;
    }

}