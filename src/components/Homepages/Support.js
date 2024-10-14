import React from 'react'
import { useLoginContext } from '../User/LoginContext'
import { useUser } from '../User/UserContext';
import style from './Homepages.module.css'


export default function Support() {

  const login = useLoginContext();
  const isLoggedIn = login.isLoggedIn;
  const user = useUser();
  const username = user.username;

  return (
    <div className={style.appBody}>
      <div className={style.supportForm}>
        <div className={style.supportTitle}>Support Case</div>
        <div className={style.supportInputName}>
          <label for="nameInput">Name:</label>
          <input id="nameInput" placeholder='Name' disabled={true} value={username}/>
        </div>
        <div className={style.supportInputCase}>
          <label for="caseInput">Case:</label>
          <textarea id="caseInput" placeholder='Case'/>
        </div>
      </div>
    </div>
  )
}
