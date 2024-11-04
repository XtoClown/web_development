import React, { useContext, useState } from 'react'
import anonUserAvatar from '../../image/anonUserAvatar.jfif'

const UserContext = React.createContext()

export function useUser(){
    return useContext(UserContext)
}

const SetUserContext = React.createContext()

export function useSetUser(){
    return useContext(SetUserContext)
}

export default function UserProvider({ children }) {

    const [username, setUsername] = useState("Anon")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setUserPassword] = useState("Anon")
    const [avatar, setAvatar] = useState(anonUserAvatar)

    function handleSetUser(username="Anon"){
        setUsername(username)
    }

    function handleSetPassword(password="Anon"){
        setUserPassword(password)
    }

    function handleSetAvatar(avatar=anonUserAvatar){
        setAvatar(avatar)
    }

    function handleSetFirstName(firstName){
        setFirstName(firstName)
    }

    function handleSetLastName(lastName){
        setLastName(lastName)
    }

    function handleSetEmail(email){
        setEmail(email)
    }

  return (
    <UserContext.Provider value={{
        username: username,
        firstName,
        lastName,
        email,
        password: password,
        avatar: avatar
    }}>
        <SetUserContext.Provider value={{
            handleSetUser,
            handleSetPassword,
            handleSetAvatar,
            handleSetFirstName,
            handleSetLastName,
            handleSetEmail
        }}>
            { children }
        </SetUserContext.Provider>
    </UserContext.Provider>
  )
}
