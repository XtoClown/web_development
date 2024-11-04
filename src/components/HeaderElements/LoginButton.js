import React, {useCallback, useState} from 'react'
import { Modal } from 'antd'
import style from './Button.module.css'
import { useThemeContext } from '../ThemeContext/ThemeContext';

export default function LoginButton({ title, children }) {


  const [modal, setModal] = useState(false);

  const modalOpen = useCallback( () => {
    setModal(true);
  })

  const modalClose = useCallback( () => {
    setModal(false);
  })

  const theme = useThemeContext();

  return (
    <div className={style.customButton} style={{ width: "50%" }}>
      <button onClick={modalOpen} style={{ backgroundColor: theme.secondaryColor, color: theme.decorColor }}>{title}</button>
      <Modal title={title} 
      open={modal}
      footer={null}
      onCancel={modalClose}
      >
        {children}
      </Modal>
    </div>
  )
}
