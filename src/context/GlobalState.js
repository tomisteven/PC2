import { createContext } from "react";
import url from "../config";

/* const production = true; */

const productos = await fetch(url);
const data1 = await productos.json();
const dataFIn = data1.filter((item) => item.stock === true);

export const GlobalContext = createContext([dataFIn]);
