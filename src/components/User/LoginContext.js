import React, { useContext, useState } from 'react'

const LoginContext = React.createContext()

export function useLoginContext(){
    return useContext(LoginContext)
}

export default function LoginProvider({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function handleLoggedInChange(state){
        setIsLoggedIn(state)
    }

  return (
    <LoginContext.Provider value={{
        isLoggedIn,
        handleLoggedInChange
    }}>
        { children }
    </LoginContext.Provider>
  )
}
