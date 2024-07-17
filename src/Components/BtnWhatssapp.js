import React from 'react'

export default function BtnWhatssapp() {
  return (
    <div className="btn-cart-w">
      <a
        href="https://api.whatsapp.com/send?phone=5491164764108&text=Hola!%20Quiero%20hacer%20un%20pedido"
        target="_blank"
        rel="noreferrer"
        className="btn-whatsapp"
      >
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="whatsapp"
        />
      </a>
    </div>
  )
}
