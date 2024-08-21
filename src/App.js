import "./App.css";
import React from "react";
import "./Components/Sections Pages/Header/Header.js";
import Header from "./Components/Sections Pages/Header/Header.js";
import SectionTwo from "./Components/Sections Pages/SectionProducts/SectionTwo";
import SectionQuePalaComprar from "./Components/Sections Pages/QuePalaCompar/SectionQuePalaComprar";
import Nosotros from "./Components/Sections Pages/Nosotros/Nosotros";
import Revendedores from "./Components/Sections Pages/Revendedores/Revendedores";
import TableClients from "./Components/Sections Pages/TableClients/TableClients.js";
import ClientsELiminados from "./Components/Sections Pages/TableClients/ClientsEliminados/ClientsEliminados";
import SeguimientoPedido from "./Components/Sections Pages/SeguimientoPedido/SeguimientoPedido";

import Footer from "./Components/Sections Pages/Footer/Footer";

import { Routes, Route } from "react-router-dom";
import PersonalizarMain from "./Components/Sections Pages/Personalizar/PersonalizarMain";
import ProductsTable from "./Components/Sections Pages/TableClients/ProductsTable/ProductsTable.js";
import Rifas from "./Components/Sections Pages/Rifas/Rifas.js";
import AdminRifas from "./Components/Sections Pages/TableClients/AdminRifas/AdminRifas.js";
import EditRifa from "./Components/Sections Pages/TableClients/AdminRifas/ModalEditar.js";
import Finanzas from "./Components/Sections Pages/finanzasCLIENTE/Finanzas.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/*" element={<h1>404</h1>} /> */}
        <Route path="/" element={<SectionTwo />} exact />
        <Route path="/test" element={<SectionQuePalaComprar />} exact />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/rifas" element={<Rifas />} />
        <Route path="/admin/rifas" element={<AdminRifas />} />
        <Route path="/admin/rifas/edit/:id" element={<EditRifa />} />
        <Route path="/revendedores" element={<Revendedores />} />
        <Route path="/cobros-online/*" element={<Finanzas />} exact />
        <Route path="/personalizar/paleta" element={<PersonalizarMain />} />
        <Route path="/seguimiento" element={<SeguimientoPedido />} />
        <Route path="/admin/clientes" element={<TableClients />} />
        <Route path="/admin/rifas" element={<AdminRifas />} />
        <Route path="/admin/rifas/edit/:id" element={<EditRifa />} />
        <Route path="/admin/productos" element={<ProductsTable />} />
        <Route path="/admin/eliminados" element={<ClientsELiminados />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
