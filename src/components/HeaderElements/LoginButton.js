import React, {useCallback, useState} from 'react'
import Modal from '../Modal/Modal'
import style from './Button.module.css'

export default function LoginButton() {

  const [modal, setModal] = useState(false);

  const modalOpen = useCallback( () => {
    setModal(true);
  })

  const modalClose = useCallback( () => {
    setModal(false);
  })

  return (
    <div className={style.customButton}>
      {modal === true? <Modal isOpen={modal} closeModal={modalClose} />: ""}
      <button onClick={modalOpen}>Login</button>
    </div>
  )
}
