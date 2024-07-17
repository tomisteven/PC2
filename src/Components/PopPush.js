import React from 'react'
import { Modal, Button } from 'semantic-ui-react'

export default function PopPush({
    openPopPush,
    setOpenPopPush,
}) {
  return (
    <div>
        <Modal
        size="tiny"
        open={openPopPush}
      >
        <Modal.Header>Imagen Agrandada</Modal.Header>
        <Modal.Content image>

        </Modal.Content>

        <Modal.Actions>
          <Button color="red" onClick={() => setOpenPopPush(false)}>
            Cancel
          </Button>
          <Button color="blue" onClick={() => setOpenPopPush(false)}>
            Ok
          </Button>

        </Modal.Actions>
      </Modal>
    </div>
  )
}
