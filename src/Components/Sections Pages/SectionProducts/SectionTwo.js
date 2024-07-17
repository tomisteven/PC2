import React, { useEffect, useState, useContext } from "react";
import { Dna } from "react-loader-spinner";
import "./SectionTwo.css";
import "./responsiveSectionTwo.css";
import SectionProducts from "../../SectionProducts";
import PopPush from "../../PopPush.js";
import SectionFilters from "../../SectionFilters";
import ExpandMenu from "../../ExpandMenu";
import BtnMenuExpandible from "../../BtnMenuExpandible";
import ModalComponent from "../../ModalComponent";
import { GlobalContext } from "../../../context/GlobalState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionOne from "../SectionOne/SectionOne";
import SectionEnvios from "./SectionEnvios";
import SectionImgs from "./SectionImgs.js";
import BtnWhatssapp from "../../BtnWhatssapp.js";
import BtnPaletaPersonalizada from "./BtnPaletaPersonalizada.js";
import BtnSeguimiento from "./BtnSeguimiento.js";

export default function SectionTwo() {
  const [loading, setLoading] = useState(true);
  const [onChange, setOnChange] = useState(false);
  const [value, setValue] = useState("");
  const [productsSelected, setProductsSelected] = useState([]);
  const [stateCart, setStateCart] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openPopPush, setOpenPopPush] = React.useState(false);
  const [productImage, setProductImage] = useState({});
const categorias = [
  "Black EVA",
	"Linea Black 12K",
	"Linea Black Fibra",
	"Linea Fg Fibra",
	"Atos 3k Linea 2024",
  "Atos 12k Linea 2024",
	"Full Carbono 3k",
	"Combos",
	"Bolsos",
	"Indumentaria",
	"Accesorios"
]


  const $productos = useContext(GlobalContext)[0];

  const [products, setProducts] = useState(useContext(GlobalContext)[0].sort((a, b) => a.orden - b.orden));
  const productsCategory = useContext(GlobalContext)[0];
  useEffect(() => {
    setLoading(true);
    setLoading(false);
    //initPopPush();
  }, [products, onChange]);

  if (loading) {
    return (
      <Dna
        visible={true}
        height="60"
        width="60"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    );
  }

  return (
    <>
      <SectionOne />
      <section id="productos" className="section-two">
        <SectionFilters
          categorias={categorias}
          productsCategory={productsCategory}
          $productos={$productos}
          setProducts={setProducts}
          value={value}
          setValue={setValue}
          setLoading={setLoading}
        />
        <SectionProducts
          setOnChange={setOnChange}
          onChange={onChange}
          setProducts={setProducts}
          products={products}
          setProductsSelected={setProductsSelected}
          productsSelected={productsSelected}
          setProductImage={setProductImage}
          setOpen={setOpen}
        />

        <ExpandMenu
          setStateCart={setStateCart}
          setProductsSelected={setProductsSelected}
          productsSelected={productsSelected}
        />
      </section>
      <SectionImgs />
      <SectionEnvios />
      <BtnWhatssapp /> {/* boton flotante w app */}
      <BtnPaletaPersonalizada /> {/* boton flotante paleta personalizada */}
      <BtnSeguimiento titulo={"Seguimiento Pedido"} icono={"truck"} link={"/seguimiento"}/> {/* boton flotante seguimiento de pedido */}

      <BtnMenuExpandible
        productsSelected={productsSelected}
        stateCart={stateCart}
        setStateCart={setStateCart}
      />
      <ModalComponent
        open={open}
        setOpen={setOpen}
        productImage={productImage}
      />
      <PopPush setOpenPopPush={setOpenPopPush} openPopPush={openPopPush} />
      <ToastContainer />
    </>
  );
}
