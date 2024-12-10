import React, { useContext, useEffect, useState } from 'react'
import { getDocs, setDoc, doc, collection, query, orderBy, limit, addDoc, Timestamp, where, deleteDoc } from 'firebase/firestore'
import { database } from '../../database/firebase'
import CryptoJS from 'crypto-js'

const ItemsContext = React.createContext()

export function useItemContext(){
    return useContext(ItemsContext)
}

export default function ItemsProvider({ children }){

    const [items, setItems] = useState([])

    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [minFloat, setMinFloat] = useState(0)
    const [maxFloat, setMaxFloat] = useState(0)
    const [rarities, setRarities] = useState([])
    const [qualities, setQualities] = useState([])
    const [types, setTypes] = useState([])
    const [minLock, setMinLock] = useState(0)
    const [maxLock, setMaxLock] = useState(0)

    const [findText, setFindText] = useState("")

    const [sort, setSorted] = useState("")

    function uniqueHash(item){
        const data = `${item.name}${item.quality}${item.price}${item.float}${item.timestamp}${item.fullName}${item.owner}${new Date().toISOString()}`
        return CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex)
    }

    async function filter(){
        try{
            const itemsRef = collection(database, 'items')
            let itemsQuery = query(itemsRef)

            console.log()

            console.log("minPrice:", minPrice, "maxPrice:", maxPrice, "minFloat:", minFloat, "maxFloat:", maxFloat);

            if(minPrice > 0){
                console.log("minPrice !== null")
                itemsQuery = query(itemsQuery, where("price", ">=", parseFloat(minPrice)))
            }
            if(maxPrice > 0 && maxPrice > minPrice){
                console.log("maxPrice !== null")
                itemsQuery = query(itemsQuery, where("price", "<=", parseFloat(maxPrice)))
            }
            if(minFloat > 0){
                console.log("minFloat !== null")
                itemsQuery = query(itemsQuery, where("float", ">=", parseFloat(minFloat)))
            }
            if(maxFloat > 0 && maxFloat > minFloat){
                console.log("maxFloat !== null")
                itemsQuery = query(itemsQuery, where("float", "<=", parseFloat(maxFloat)))
            }
            if(rarities.length > 0 && !rarities.includes("All")){
                console.log(`rarities.length > 0 && !rarities.includes("All")`)
                itemsQuery = query(itemsQuery, where("rarity", "in", rarities))
            }
            if(types.length > 0 && !types.includes("All")){
                console.log(`types.length > 0 && !types.includes("All")`)
                itemsQuery = query(itemsQuery, where("type", "in", types))
            }
            if(qualities.length > 0 && !qualities.includes("All")){
                console.log("hello")
                console.log(`types.length > 0 && !types.includes("All")`)
                itemsQuery = query(itemsQuery, where("quality", "in", qualities))
            }
            if(minLock > 0){
                console.log("minPrice !== null")
                itemsQuery = query(itemsQuery, where("lock", ">=", parseFloat(minLock)))
            }
            if(maxLock > 0 && maxLock > minLock){
                console.log("maxPrice !== null")
                itemsQuery = query(itemsQuery, where("lock", "<=", parseFloat(maxLock)))
            }

            const snapshot = await getDocs(itemsQuery)
            let fetchedItems = snapshot.docs.map((doc) => ({
                weaponName: doc.data().weaponName,
                skinName: doc.data().skinName,
                type: doc.data().type,
                rarity: doc.data().rarity,
                fullName: doc.data().fullName,
                quality: doc.data().quality,
                price: parseFloat(doc.data().price).toFixed(2),
                float: doc.data().float,
                timestamp: doc.data().timestamp,
                hash: doc.data().hash,
                image: doc.data().image,
                lock: doc.data().lock,
                owner: doc.data().owner,
                ownerPhoto: doc.data().ownerPhoto,
                ownerName: doc.data().ownerName
            }))

            if(findText !== ""){
                fetchedItems = fetchedItems.filter((item) => item.fullName.toLowerCase().includes(findText.toLowerCase()))
            }

            if(sort === "Default"){
                fetchedItems.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
            }
            if(sort === "DataFromOld"){
                fetchedItems.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            }
            if(sort === "DataFromNew"){
                fetchedItems.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
            }
            if(sort === "PriceFromMax"){
                fetchedItems.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
            }
            if(sort === "PriceFromMin"){
                fetchedItems.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
            }
            if(sort === "FloatFromMax"){
                fetchedItems.sort((a, b) => parseFloat(b.float) - parseFloat(a.float))
            }
            if(sort === "FloatFromMin"){
                fetchedItems.sort((a, b) => parseFloat(a.float) - parseFloat(b.float))
            }

            console.log(fetchedItems)

            setItems(fetchedItems)
        } catch(error){
            console.error("Ошибка при получении данных из Firebase:", error)
        }
    }


    async function addItem(item) {
        try{
            const itemsRef = collection(database, 'items')
            console.log("works")
            await addDoc(itemsRef, {
                weaponName: item.weaponName,
                skinName: item.skinName,
                type: item.type,
                rarity: item.rarity,
                fullName: item.fullName,
                quality: item.quality,
                price: parseFloat(item.price),
                float: parseFloat(item.float).toFixed(7),
                timestamp: item.timestamp,
                hash: item.hash,
                image: item.image,
                lock: item.lock,
                owner: item.owner,
                ownerPhoto: item.ownerPhoto,
                ownerName: item.ownerName
            })

            await getItems()
        } catch(error){
            console.error("Ошибка при получении данных из Firebase:", error)
        }
    }

    async function  removeItem(item) {
        try{
            console.log(item)
            const itemsRef = collection(database, 'items')
            const itemsQuery = query(itemsRef, where('hash', '==', item.hash))
            const querySnapshot = await getDocs(itemsQuery)

            querySnapshot.forEach(async (docSnapshot) => {
                const itemDocRef = doc(itemsRef, docSnapshot.id)
                console.log(itemDocRef)
                await deleteDoc(itemDocRef)
            })

            await getItems()
        } catch(error){
            console.error("Ошибка при получении данных из Firebase:", error)
        }
    }

    async function getItems() {
        try{
            console.log("get")
            const itemsRef = collection(database, 'items')
            const itemQuery = query(itemsRef, orderBy('timestamp'))
            const snapshot = await getDocs(itemQuery)
            const fetchedItems = snapshot.docs.map((doc) => ({
                weaponName: doc.data().weaponName,
                skinName: doc.data().skinName,
                type: doc.data().type,
                rarity: doc.data().rarity,
                fullName: doc.data().fullName,
                quality: doc.data().quality,
                price: parseFloat(doc.data().price).toFixed(2),
                float: doc.data().float,
                timestamp: doc.data().timestamp,
                hash: doc.data().hash,
                image: doc.data().image,
                lock: doc.data().lock,
                owner: doc.data().owner,
                ownerPhoto: doc.data().ownerPhoto,
                ownerName: doc.data().ownerName
            }))

            const totalItems = [
                ...fetchedItems,
                ...Array(Math.max(0, 27 - fetchedItems.length)).fill(null)
            ]

            setItems(totalItems)
        } catch(error){
            console.error("Ошибка при получении данных из Firebase:", error)
        }
    }

    useEffect(() => {
        filter()
    }, [minPrice, maxPrice, minFloat, maxFloat, qualities, types, rarities, minLock, maxLock, findText, sort])

    useEffect(() => {
        getItems()
    }, [])

    return (
        <ItemsContext.Provider value={{
            items,
            setSorted,
            addItem,
            removeItem,
            setMaxPrice,
            setMinPrice,
            setMaxFloat,
            setMinFloat,
            setRarities,
            setTypes,
            setQualities,
            setMaxLock,
            setMinLock,
            setFindText,
            uniqueHash,
            getItems
        }}>
            {children}
        </ItemsContext.Provider>
    )
}