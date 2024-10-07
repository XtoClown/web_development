import React, {useState} from 'react'
import './Modal.css';
import { useSetUser, useUser } from '../User/UserContext';
import userAvatar from '../../image/avatar.jpg'
import { useLoginContext } from '../User/LoginContext';

export default function Modal(props) {

  const user = useUser();
  const setUser = useSetUser();
  const __correctName = user.username != "Anon" ? user.username : null;
  const __correctPassword = user.password != "Anon" ? user.password : null;

  const login = useLoginContext();

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
    if(__correctName == null && __correctPassword == null){
      setUser.handleSetUser(enteredName);
      setUser.handleSetPassword(enteredPassword);
      setUser.handleSetAvatar(userAvatar);
      login.handleLoggedInChange(true);
      props.closeModal();
    }
    if(enteredName === __correctName && enteredPassword === __correctPassword){
      login.handleLoggedInChange(true);
      props.closeModal();
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
