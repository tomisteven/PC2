import React from "react";
import "./SeccionMaterial.css";

export default function SeccionMaterial({ materiales, setLoading, setItems, items, setPaso, paso }) {

  const changeForm = (key, value) => {
    setLoading(true);
    const precio = value === "Fibra de vidrio" ? 75000 : value === "Full Carbono" ? 115000 : 159999;
    localStorage.setItem(key, value);
    localStorage.setItem("precioMaterial", precio);
    setTimeout(() => {
      setLoading(false);
      setPaso(paso + 1 );
    }, 200);
  }

  return (
    <div className="cont-seccion-material">
      <h5 className="title-sections">
        Elige el material exterior de tu paleta, Fibra de Vidrio, Carbono,
        Carbono 12k
      </h5>
      <ul className="ul-materiales">
        <li  className="li-materiales">
          <p>
            <span className="span-title">Fibra de vidrio</span>, <span className="span-sub"> ventajas </span>: Es más asequible en comparación con los
            materiales de carbono y Ofrece una buena resistencia y durabilidad
            beneficiando a jugadores principiantes{" "}
          </p>
        </li>
        <li className="li-materiales">
          <p>
            <span className="span-title">Carbono </span> , <span className="span-sub"> ventajas </span>: Es más ligero y resistente que la fibra de
            vidrio, por lo que es ideal para jugadores de nivel intermedio y
            avanzado ya que proporciona mayor potencia y precision en el golpe.{" "}
          </p>
        </li>
        <li className="li-materiales">
          <p>
          <span className="span-title">Carbono 12k </span>, <span className="span-sub"> ventajas </span>: Ofrece la mejor combinación de potencia y precisión, Es extremadamente rígida, lo que permite golpes muy potentes y tiene una durabilidad excepcional.{" "}
          </p>
        </li>
      </ul>
      <div class="options-materiales">
        <div class="option-material">
          <img
            src="https://res.cloudinary.com/didw6uakh/image/upload/v1697044912/manta-de-fibra-de-vidrio-1_rjvq6j.jpg"
            alt=""
          />

          <label class="cyberpunk-checkbox-label">
            <input
              type="checkbox"
              value={"Fibra de vidrio"}
              checked={materiales === "Fibra de vidrio"}
              class="cyberpunk-checkbox"
              onChange={(e) => {
                changeForm("material", e.target.value);
              }}
            />
            Fibra de vidrio, 75000
          </label>
        </div>
        <div class="option-material">
          <img
            src="https://res.cloudinary.com/didw6uakh/image/upload/v1697044911/Fibra_gykyn1.jpg"
            alt=""
          />

          <label class="cyberpunk-checkbox-label">
            <input
              value={"Full Carbono"}
              onChange={(e) => {
                changeForm("material", e.target.value);
              }}
              type="checkbox"
              checked={materiales === "Full Carbono"}
              class="cyberpunk-checkbox"
            />
            Full Carbono, $115000
          </label>
        </div>
        <div class="option-material">
          <img
            src="https://res.cloudinary.com/didw6uakh/image/upload/v1697044911/D_NQ_NP_979277-MLA52732966386_122022-O_bkwbem.webp"
            alt=""
          />
          <label class="cyberpunk-checkbox-label">
            <input
              value={"12k Importado"}
              checked={materiales === "12k Importado"}
              onChange={(e) => {
                changeForm("material", e.target.value);
              }}
              type="checkbox"
              class="cyberpunk-checkbox"
            />
            12k Importado, $159.999
          </label>
        </div>
      </div>

    </div>
  );
}
