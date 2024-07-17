import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import './ModalVer.css'
import pelotita from '../../../assets/tenis.webp'


export default function ModalVer({
    open,
    setOpen,
    paletas
}) {
    console.log(paletas);
  return (
    <Modal
    className='modal-ver'
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>Variantes de paletas segun su encuesta!</Modal.Header>
      <Modal.Content>
        <Modal.Description className='moda-description'>
            <div class="cont-description">
            <h4 className='title-modal-productos'>Estas {paletas.length} paletas Son las recomendadas segun tu juego!</h4>
            <h3>Solo por hoy hay Envio Gratis a todo el pais en nuestra tienda web!</h3>
          {
                paletas.map((paleta, i) => (
                    <div className='cont-producto-modal'>
                        <img src={pelotita} alt=""/>
                        <p className='modal-producto'>{
                            i === 0 ? <p><span style={{
                                color: 'white',
                                fontWeight: 'bold'

                            }}>Mejor Opcion!</span> {paleta.producto} </p> : paleta.producto
                        } </p>
                        <Button color="green"
                            className='btn-comprar'
                            compact
                            href={paleta.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        > Ver Imagen </Button>

                    </div>
                ))
          }
            </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          Cerrar
        </Button>
        <Button color="yellow" onClick={() =>
            window.open('https://padelcrown.com.ar/productos', '_blank')
        }>
          Tienda Web
        </Button>
      </Modal.Actions>
    </Modal>
  )
}
