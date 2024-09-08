import React from 'react';
import testImage from '../image/smile-monkey.gif';

export default function Secondcomponent(props) {
  return (
    <div class="secondComponentMain">
        <h1>Hello, {props.name}</h1>
        <img src={testImage} alt="test-image"></img>
    </div>
  )
}
