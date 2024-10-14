import React, {useRef, useState, useEffect } from 'react'
import style from './Modal.module.css'
import { useSetUser, useUser } from '../User/UserContext';
import userAvatar from '../../image/avatar.jpg'
import { useLoginContext } from '../User/LoginContext';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components'

const ModalWindow = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  overflow-y: auto;
`

const LoginButton = styled.button`
  height: 20%;
  width: 40%;
  font-family: 'JetBrains Mono';
  font-size: 2vmin;
  font-weight: 600;
  color: #a89bc5;
  background-color: #40325c;
  border: 0px;
  border-radius: 0px;
`

const Input = styled.input`
  background-color: #40325c;
  height: 20%;
  width: 80%;
  border: 0px;
  border-radius: 0px;
  text-indent: 5%;
  color: #a89bc5;
  font-family: 'JetBrains Mono';
  font-size: 2vmin;
  font-weight: 600;
  &::placeholder {
    color: #756d88;
  }
`

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

  function register(){
    setUser.handleSetUser(enteredName);
    setUser.handleSetPassword(enteredPassword);
    setUser.handleSetAvatar(userAvatar);
    login.handleLoggedInChange(true);
    props.closeModal();
  }

  function logining(){
    login.handleLoggedInChange(true);
    props.closeModal();
  }

  const [onSendHandler, setOnSendHandler] = useState(null)

  function loginPromt(){
    if(__correctName == null && __correctPassword == null){
      setOnSendHandler("reg")
      setInProp(false)
    }
    if(enteredName === __correctName && enteredPassword === __correctPassword){
      setOnSendHandler("log")
      setInProp(false)
    }
    else if(enteredName !== __correctName && enteredPassword !== __correctPassword && __correctName !== null && __correctPassword !== null){
      errorHandler();
    }
  }

  function onModalClose(){
    if(onSendHandler === "reg") register();
    else if(onSendHandler === "log") logining();
  }

  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  useEffect( () => {
    setInProp(props.isOpen)
  }, [props.isOpen])

  return (
    <ModalWindow>
      <CSSTransition in={inProp} nodeRef={nodeRef} timeout={600} classNames="modal" unmountOnExit onExited={() => onModalClose()}>
        <div className={style.modalContent} ref={nodeRef}>
          <div className={style.loginText}>Authorization</div>
          <div className={style.modalInput}>
              <div className={style.inputLabels}>
                  <label for="nameInput" className={style.nameInput}> Name </label>
                  <label for="passwordInput"> Password </label>
              </div>
              <div className={style.inputHolders}>
                  <Input type="text" id="nameInput" onChange={nameChangeHandler} placeholder="Enter your name"/>
                  <Input type="password" id="passwordInput" onChange={passwordChangeHandler} placeholder="Enter your password"/>
              </div>
          </div>
          <div className={style.error}>{error ? "Incorrect Name or Password": null}</div>
          <LoginButton onClick={loginPromt}>Login</LoginButton>
        </div>
      </CSSTransition>
    </ModalWindow>
  )
}
