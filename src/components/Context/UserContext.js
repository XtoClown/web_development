import React, { useContext, useEffect, useState } from 'react'
import { getDocs, setDoc, doc, collection, query, orderBy, limit, addDoc, Timestamp, where, getDoc, runTransaction } from 'firebase/firestore'
import { database } from '../../database/firebase'

const UserContext = React.createContext()

export function useUserContext(){
    return useContext(UserContext)
}

export default function UserProvider({ children }){

    const [user, setUser] = useState()
    const [currency, setCurrency] = useState(["USD", "$", 1])

    async function authorization(id, avatar, name) {
       try{
        const usersRef = collection(database, 'users')
        const userDocRef = doc(usersRef, id)

        await runTransaction(database, async(transaction) => {
            const userDoc = await transaction.get(userDocRef)
            if(!userDoc.exists()){
                transaction.set(userDocRef, {
                    userId: id,
                    items: [],
                    inventory: [],
                    onSale: [],
                    balance: 0,
                    spent: 0,
                    earned: 0,
                    avatar: avatar,
                    displayName: name
                })
            }
        })
        const userDoc = await getDoc(userDocRef)
        if(userDoc.exists()){
            setUser(userDoc.data())
        }
       } catch(error){
        console.error("Ошибка при получении данных из Firebase:", error)
       }
    }

    async function getUser(id) {
        if (!id) {
            console.error("User ID is missing or invalid");
            return;
        }

        try{
            const userDocRef = doc(database, 'users', id)
            const userDoc = await getDoc(userDocRef)

            if(userDoc.exists()){
                setUser(userDoc.data())
            }
        } catch(error){
            console.error("Ошибка при получении данных из Firebase:", error)
        }
    }

    useEffect(() => {
        if(user){
            getUser(user.userId)
        }
    }, [user])

    function handleLogout(){
        setUser(null)
    }

    return (
        <UserContext.Provider value={{
            user,
            authorization,
            handleLogout,
            setCurrency,
            currency
        }}>
            {children}
        </UserContext.Provider>
    )
}