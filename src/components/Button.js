import React from 'react'

export default function Button(props) {

  return (
    <div class="customButtonDiv" onClick={props.onClick}>
      <button>{props.text}</button>
    </div>
  )
}


Button.defaultProps = { text:"Button" }