import React, {useCallback, useState} from 'react'
import Modal from './Modal/Modal'

export default function LoginButton() {

  const [modal, setModal] = useState(false);

  const modalOpen = useCallback( () => {
    setModal(true);
  })

  const modalClose = useCallback( () => {
    setModal(false);
  })

  return (
    <div class="customButton">
      {modal === true? <Modal closeModal={modalClose} />: ""}
      <button onClick={modalOpen}>Login</button>
    </div>
  )
}
