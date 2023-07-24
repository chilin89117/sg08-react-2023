import {useState} from 'react'
import Button from '../components/Button.jsx'
import Modal from '../components/Modal.jsx'

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => setShowModal(false)

  const content = (
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio dicta rem neque magnam veritatis natus
      necessitatibus, eaque enim, aliquam quibusdam cupiditate laudantium molestias provident voluptatum amet ea ipsa
      facilis mollitia!
    </p>
  )
  const actions = (
    <Button
      primary
      onClick={handleClose}
    >
      OK
    </Button>
  )

  return (
    <div>
      <Button
        primary
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </Button>

      {showModal && (
        <Modal
          onClose={handleClose}
          actions={actions}
        >
          {content}
        </Modal>
      )}
    </div>
  )
}

export default ModalPage
