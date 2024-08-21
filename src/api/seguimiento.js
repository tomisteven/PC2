export class Seguimiento{

    url = "https://paderlcrown-server.onrender.com"
    local = "http://localhost:8080"

    async findClients(dni){
        const data = await fetch(this.url + "/seguimiento/" + dni, {
            method: "GET"
        })
        const res = await data.json()
        return res
    }

}