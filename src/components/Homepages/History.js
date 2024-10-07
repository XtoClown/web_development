import React from 'react'

export default function History(props) {
  return (
    <div class="appBody">
      <div class="historyListPlaceholder">
        <div class="historyTitle">History</div>
        <div class="historyList">
            {props.history.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
      </div>
    </div>
  )
}
