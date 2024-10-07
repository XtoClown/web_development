import React from 'react'
import picture from '../../image/picture.gif'

export default function Picture() {
  return (
    <div class="appBody">
      <img class="picturePageImage" src={picture} alt="Picture"/>
    </div>
  )
}
