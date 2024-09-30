import React, {useState} from 'react'
import './Modal.css';

export default function Modal(props) {

  const __correctName = "Oleh";
  const __correctPassword = "1234";

  const [enteredName, setNameEntered] = useState("");
  const [enteredPassword, setPasswordEntered] = useState("");
  const [error, setError] = useState(false);

  function nameChangeHandler(event){
    setNameEntered(event.target.value);
  }

  function passwordChangeHandler(event){
    setPasswordEntered(event.target.value);
  }

  function errorHandler(){
    setError(true);
  }

  function loginPromt(){
    if(enteredName === __correctName && enteredPassword === __correctPassword){
      props.closeModal();
      props.loginFunction(__correctName);
    }
    else{
      errorHandler();
    }
  }

  return (
    <div class="modalWindow">
      <div class="modalContent">
        <div class="loginText">Authorization</div>
        <div class="modalInput">
            <div class="inputLabels">
                <label for="nameInput" class="nameInput"> Name </label>
                <label for="passwordInput"> Password </label>
            </div>
            <div class="inputHolders">
                <input type="text" id="nameInput" onChange={nameChangeHandler} placeholder="Enter your name"/>
                <input type="password" id="passwordInput" onChange={passwordChangeHandler} placeholder="Enter your password"/>
            </div>
        </div>
        <div class="error">{error ? "Incorrect Name or Password": null}</div>
        <button onClick={loginPromt}>Login</button>
      </div>
    </div>
  )
}
