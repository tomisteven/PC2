import { createContext } from "react";

/* const production = true; */
/* https://particular-bernita-digitalcode.koyeb.app/ */
const productos = await fetch(
  "https://paderlcrown-server.onrender.com/",
);
 /* const clientes = await fetch(
  production
    ? "https://particular-bernita-digitalcode.koyeb.app/admin/clientes"
    : "http://localhost:8080/admin/clientes",
  {
    headers: {
      Authorization: "token_padelcrown",
      "Content-Type": "application/json",
    },
  }
); */
const data1 = await productos.json();
const dataFIn = data1.filter((item) => item.stock === true);
/* const clientesData = await clientes.json(); */

export const GlobalContext = createContext([dataFIn]);
