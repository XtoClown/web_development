import React, { useState, useEffect } from 'react';
import style from './Header.module.css';
import DropDown from './Nav/DropDown';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from './Context/UserContext';
import steamImage from '../images/steam.png'
import settingsImage from '../images/settings.png'
import Currency from './Nav/Currency';

export default function Header() {

  const userContext = useUserContext()

  const [user, setUser] = useState(null);

  axios.defaults.withCredentials = true;
  const navigate = useNavigate()

  function handleLogin() {
    window.location.href = 'http://localhost:5000/authenticate';  
  }

  async function handleLogout() {
    try {
      const response = await axios.get('http://localhost:5000/logout'); 
      console.log('Logout successful', response);
      setUser(null);
      userContext.handleLogout()
      navigate("/")
    } catch (err) {
      console.error('Logout error:', err); 
    }
  }

  async function fetchUser() {
    try {
      const response = await axios.get('http://localhost:5000/user');
      console.log('User data:', response.data);
      setUser(response.data); 

      userContext.authorization(`${response.data.id}`, `${response.data.photos[2].value}`, `${response.data.displayName}`)

    } catch (err) {
      console.log('User not authenticated:', err);
      setUser(null);  
    }
  }

  useEffect(() => {
    fetchUser();  
  }, []); 

  const notAuthorized = (
    <div className={style.logout}>
      <button onClick={handleLogin}>
        <div className={style.steamImage}>
          <img src={steamImage} alt="steam"/>
        </div>
        <div className={style.loginText}>Авторизація</div>
      </button>
    </div>
  );

  const authorized = (
    <div className={style.login}>
      <div className={style.value}>{userContext.user ? (<Currency value={userContext.user.balance}/>) : ""}</div>
      <Link to="/profile" className={style.profile}>{user ? (<img src={user.photos[2].value} alt="av"/>) : ""}</Link>
      <div className={style.settings} onClick={handleLogout}>
        <img src={settingsImage} alt="st" />
      </div>
    </div>
  );

  return (
    <div className={style.container}>
      <div className={style.route}>
        <Link to="/" className={style.logo}><div>L</div></Link>
        <DropDown />
      </div>
      <div className={style.user} style={{ marginRight: authorized ? "1.6%" : "5%" }}>
        {user ? authorized : notAuthorized}
      </div>
    </div>
  );
}
