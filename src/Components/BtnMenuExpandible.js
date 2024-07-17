import React from 'react'
import { Button, Label, Menu } from 'semantic-ui-react'

export default function BtnMenuExpandible({
    productsSelected,
    stateCart,
    setStateCart
}) {
  return (
    <>
    <Menu.Item
        onClick={() => {
          setStateCart(!stateCart);
          document.querySelector(".menu-expandible").classList.toggle("active");
        }}
        as="a"
        className="btn-cart"
      >
        <Button
          icon={stateCart ? "close" : "shopping cart"}
          color={stateCart ? "red" : "blue"}
        />
        {productsSelected.length > 0 ? (
          <Label color="green" size="mini" floating>
            {productsSelected.length}
          </Label>
        ) : (
          ""
        )}
      </Menu.Item>
      </>
  )
}
