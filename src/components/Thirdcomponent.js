import React from 'react'

const Thirdcomponent = (props) => {
  return (
    <div class="thirdComponentMain">
        <h1>{props.name}</h1>
        <form action='https://moodle3.chmnu.edu.ua/login/index.php' class="customForm">
            <button class="customButton"></button>
        </form>
    </div>
  )
}

export default Thirdcomponent
