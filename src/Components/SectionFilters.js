import React from "react";
import { Button, Dropdown, Label, Menu } from "semantic-ui-react";

export default function SectionFilters({
  categorias,
  productsCategory,
  $productos,
  setProducts,
  value,
  setValue,
  setLoading,
}) {
  const filterData = (category) => {
    setLoading(true);
    setProducts(
      $productos.filter((p) => {
        if (category === "") {
          return p;
        } else {
          return p.category.includes(category);
        }
      })
    );
    setValue(category);
    setLoading(false);
  };

  return (
    <div className="section-filters">
      <h5>Filtros {value ? "/" + value : ""}</h5>
      <div className="cont-filters">
        <Button
          className="btn-ver-todos"
          size="small"
          onClick={() => {
            filterData("");
            setProducts(
              $productos.filter((p) => {
                return p;
              })
            );
            setValue("");
          }}
          primary
        >
          Ver todos
        </Button>

        {window.innerWidth > 768 ? (
          <Menu
            className="menu-filters"
            size="small"
            pointing={window.innerWidth > 768 ? false : true}
            vertical={window.innerWidth > 768 ? true : false}
          >
            {categorias.map((item, k) => (
              <Menu.Item
                disabled={
                  productsCategory.filter((p) => p.category.includes(item))
                    .length === 0
                }
                key={k}
                onClick={() => filterData(item)}
              >
                <Label
                  color={
                    productsCategory.filter((p) => p.category.includes(item))
                      .length === 0
                      ? "yellow"
                      : "green"
                  }
                >
                  {productsCategory.filter((p) => p.category.includes(item))
                    .length > 0
                    ? productsCategory.filter((p) => p.category.includes(item))
                        .length
                    : 0}
                </Label>
                {item}
              </Menu.Item>
            ))}
          </Menu>
        ) : (
          <Dropdown
            value={value}
            placeholder="Selecciona una categoria"
            fluid
            selection
            options={categorias.map((item) => ({
              key: item,
              text: item,
              value: item,
            }))}
            onChange={(e, { value }) => filterData(value)}
          />
        )}
      </div>
    </div>
  );
}
