import React from 'react'
import style from './Homepages.module.css'

export default function History(props) {
  return (
    <div className={style.appBody}>
      <div className={style.historyListPlaceholder}>
        <div className={style.historyTitle}>History</div>
        <div className={style.historyList}>
            {props.history.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
      </div>
    </div>
  )
}
