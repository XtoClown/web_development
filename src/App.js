import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';

function useLogger(isLoggedIn){
  useEffect( () => {
    if(isLoggedIn)alert("Welcome user:)");
    else alert("Goodbye user:(")
  }, [isLoggedIn] );
}

function App() {
  
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  function login(){
    setIsLoggedIn(true);
  }

  function logout(){
    setIsLoggedIn(false);
  }

  useLogger(isLoggedIn);

  return (
    <div className="App">
      <Header login={login} logout={logout}/>
      <Body isLoggedIn={isLoggedIn}/>
      <Footer/>
    </div>
  );
}

export default App;
