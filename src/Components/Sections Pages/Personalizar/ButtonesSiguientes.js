import React from "react";

export default function ButtonesSiguientes({
  paso,
  setPaso,
  items,
  setItems,
  values,
}) {
  const updateForm = (item, next) => {
    if (next) {
      setItems([...items, item]);
      setPaso(paso + 1);
      console.log(items);
    } else {
      setPaso(paso - 1);
    }
  };

  return (
    <div className="cont-btns-personalizar">
      {paso !== 1 ? (
        <button onClick={() => updateForm(true)} className="button-siguiente">
          {" "}
          Atras
          <span></span>
        </button>
      ) : null}
      {paso !== 6 ? (
        <button
          onClick={() => {
            updateForm(values, true);
          }}
          className="button-siguiente"
        >
          {" "}
          Siguiente
          <span></span>
        </button>
      ) : null}
    </div>
  );
}
