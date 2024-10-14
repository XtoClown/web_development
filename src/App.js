import './App.css';
import Header from './components/HeaderElements/Header';
import Body from './components/Homepages/Body';
import Footer from './components/Footer/Footer';
import React, { useEffect, useState } from 'react';
import UserProvider from './components/User/UserContext';
import LoginProvider, { useLoginContext } from './components/User/LoginContext';
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import Support from './components/Homepages/Support';
import Picture from './components/Homepages/Picture';
import History from './components/Homepages/History';

function useLogger(isLoggedIn){
  useEffect( () => {
    if(isLoggedIn)alert("Welcome user:)");
    else alert("Goodbye user:(")
  }, [isLoggedIn] );
}

function useUserPageHistory(){

  const [userHistory, setUserPageHistory] = useState([]);
  const navigate = useNavigate();

  function handlerPageNavigation(path="/"){
      setUserPageHistory([...userHistory, `http://localhost:3000${path}`])
      navigate(path)
  }

  return { userHistory, handlerPageNavigation };
}

function App() {

  return (
    <UserProvider>
      <LoginProvider>
        <Content/>
      </LoginProvider>
    </UserProvider>
  );
}

function Content(){
  
  const login = useLoginContext();
  const isLoggedIn = login.isLoggedIn;

  useLogger(isLoggedIn);

  const history = useUserPageHistory();

  return(
    <div className="App">
      <Header history={history}/>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/support" element={<Support />} />
        <Route path="/picture" element={<Picture />} />
        <Route path="/history" element={<History history={history.userHistory} />} />
      </Routes>
      <Footer/>
    </div>
  )
}


export default App;
