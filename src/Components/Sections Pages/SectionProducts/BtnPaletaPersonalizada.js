import React from 'react'
import './BtnPaletaPersonalizada.css'

export default function BtnPaletaPersonalizada() {
  return (
    <button onClick={
      () => {
        window.location.href = "/personalizar/paleta";
      }
    } class="btn"><i class="animation"></i>Personaliza tu Paleta!<i class="animation"></i>
    </button>

  )
}
