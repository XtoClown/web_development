import React from 'react'
import { useLoginContext } from '../User/LoginContext'
import { useUser } from '../User/UserContext';


export default function Support() {

  const login = useLoginContext();
  const isLoggedIn = login.isLoggedIn;
  const user = useUser();
  const username = user.username;

  return (
    <div class="appBody">
      <div class="supportForm">
        <div class="supportTitle">Support Case</div>
        <div class="supportInputName">
          <label for="nameInput">Name:</label>
          <input id="nameInput" placeholder='Name' disabled={true} value={username}/>
        </div>
        <div class="supportInputCase">
          <label for="caseInput">Case:</label>
          <textarea id="caseInput" placeholder='Case'/>
        </div>
      </div>
    </div>
  )
}
