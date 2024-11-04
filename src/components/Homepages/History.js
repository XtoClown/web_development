import React from 'react'
import style from './Homepages.module.css'
import { useThemeContext } from '../ThemeContext/ThemeContext'
import NumberValidation from '../Formik/NumberValidation'

export default function History(props) {

  const theme = useThemeContext()

  /*return (
    <div className={style.appBody} style={{ backgroundColor: theme.primaryColor }}>
      <div className={style.historyListPlaceholder} style={{ borderColor: theme.decorColor, color: theme.decorColor }}>
        <div className={style.historyTitle}>History</div>
        <div className={style.historyList}>
            {props.history.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
      </div>
    </div>
  )*/

  return (
    <div className={style.appBody} style={{ backgroundColor: theme.primaryColor }}>
      <div className={style.historyListPlaceholder} style={{ borderColor: theme.decorColor, color: theme.decorColor }}>
        <NumberValidation/>
      </div>
    </div>
  )
}
