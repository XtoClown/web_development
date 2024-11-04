import React from 'react'
import style from './Footer.module.css'
import { useThemeContext } from '../ThemeContext/ThemeContext'

export default function Footer() {

  const theme = useThemeContext()

  return (
    <div className={style.footer} style={{ backgroundColor: theme.primaryColor, borderColor: theme.decorColor }}>
      <div className={style.footerFirstPart} style={{ color: theme.decorColor }}>LR2 2024</div>
      <div className={style.footerSecondPart} style={{ color: theme.decorColor }}>Oleh Sadovskyi</div>
    </div>
  )
}
