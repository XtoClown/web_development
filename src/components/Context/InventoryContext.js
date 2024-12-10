import React, { useContext, useEffect, useState } from 'react'
import itemsJson from '../../database/items.json'
import { useUserContext } from './UserContext'
import { database } from '../../database/firebase'
import { arrayUnion, collection, updateDoc, arrayRemove, doc, getDoc, addDoc } from 'firebase/firestore'
import { useItemContext } from './ItemsContext'

const InventoryContext = React.createContext()

export function useInventoryContext(){
    return useContext(InventoryContext)
}

export default function InventoryProvider({ children }){

    const userContext = useUserContext()
    const itemsContext = useItemContext()

    const [items, setItems] = useState([])
    const [itemsInInventory, setItemsInInventory] = useState([])
    const [itemsOnSell, setItemsOnSell] = useState([])

    async function handleAddItem(item) {
        try{
            const usersRef = collection(database, 'users')
            const userDocRef = doc(usersRef, userContext.user.userId)
            await updateDoc(userDocRef, {
                inventory: arrayUnion(item)
            })
        } catch(error){
            console.error("Ошибка при получении данных из Firebase:", error)
        }
    }

    async function handleRemoveItem(item, itemPrice) {
        try {
            const usersRef = collection(database, 'users');
            const userDocRef = doc(usersRef, userContext.user.userId);
            
            await updateDoc(userDocRef, {
                inventory: arrayRemove(item),
                onSale: arrayUnion(item)
            });
    
            const userDoc = await getDoc(userDocRef);
            if (userDoc.exists()) {
                const userData = userDoc.data();
    
                const updatedItems = userData.onSale.map((saleItem) => {
                    if (saleItem.hash === item.hash) {
                        return { ...saleItem, price: parseFloat(itemPrice) };
                    }
                    return saleItem;
                });
    
                await updateDoc(userDocRef, {
                    onSale: updatedItems
                });
    
                const updatedItem = updatedItems.find((saleItem) => saleItem.hash === item.hash);
                if (updatedItem) {
                    console.log("updatedItem", updatedItem)
                    itemsContext.addItem(updatedItem);
                }
            }
        } catch (error) {
            console.error("Ошибка при получении данных из Firebase:", error);
        }
    }

    async function handleRemoveFromMarket(item) {
        try{
            const usersRef = collection(database, 'users');
            const userDocRef = doc(usersRef, userContext.user.userId);

            await updateDoc(userDocRef, {
                inventory: arrayUnion(item),
                onSale: arrayRemove(item)
            });

            itemsContext.removeItem(item);
        } catch(error){
            console.error("Ошибка при получении данных из Firebase:", error)
        }
    }

    async function handleItemBought(items) {
        try {
            const usersRef = collection(database, 'users')

            for(var item in items){
                const sellerDocRef = doc(usersRef, items[item].owner)
                const userDocRef = doc(usersRef, userContext.user.userId)

                const sellerDoc = await getDoc(sellerDocRef)
                const userDoc = await getDoc(userDocRef)

                if(sellerDoc.exists() && userDoc.exists()){

                    const sellerData = sellerDoc.data()
                    const userData = userDoc.data()

                    const removeFromSeller = sellerData.onSale.filter((element) => element.hash !== items[item].hash)
                    const updatedSellerBalance = (parseFloat(sellerData.balance) + parseFloat(items[item].price)).toFixed(2)
                    const updatedSellerEarned = (parseFloat(sellerData.earned) + parseFloat(items[item].price)).toFixed(2)

                    await updateDoc(sellerDocRef, {
                        onSale: removeFromSeller,
                        earned: updatedSellerEarned,
                        balance: updatedSellerBalance
                    })

                    const updatedUserInventory = [
                        ...userData.inventory,
                        { ...items[item], owner: userContext.user.userId, ownerPhoto: userContext.user.avatar, ownerName: userContext.user.displayName }
                    ]
                    const updatedUserBalance = (parseFloat(userData.balance) - parseFloat(items[item].price)).toFixed(2)
                    const updatedUserSpent = (parseFloat(userData.spent) + parseFloat(items[item].price)).toFixed(2)
                    await updateDoc(userDocRef,{
                        inventory: updatedUserInventory,
                        spent: updatedUserSpent,
                        balance: updatedUserBalance
                    })
                    await itemsContext.removeItem(items[item]);
                }
            }
        } catch (error) {
            console.error("Ошибка при получении данных из Firebase:", error);
        }
    }

    async function getInventory(){
        try{
            const usersRef = collection(database, 'users')
            const userDocRef = doc(usersRef, userContext.user.userId)
            const userDoc = await getDoc(userDocRef)
            if(userDoc.exists){
                const userData = userDoc.data()
                const fetchedArray = [
                    ...userData.inventory,
                    ...Array(Math.max(0, 24 - userData.inventory.length)).fill(null)
                ]
                setItemsInInventory(fetchedArray)
            }
        } catch(error){
            console.error("Ошибка при получении данных из Firebase:", error)
        }
    }

    async function getItemsOnSell() {
        try{
            const usersRef = collection(database, 'users')
            const userDocRef = doc(usersRef, userContext.user.userId)
            const userDoc = await getDoc(userDocRef)
            if(userDoc.exists){
                const userData = userDoc.data()
                const fetchedArray = [
                    ...userData.onSale,
                    ...Array(Math.max(0, 24 - userData.onSale.length)).fill(null)
                ]
                setItemsOnSell(fetchedArray)
            }
        } catch(error){
            console.error("Ошибка при получении данных из Firebase:", error)
        }
    }

    useEffect(() => {

    }, [itemsOnSell])

    useEffect(() => {
        const sortedItems = itemsJson.sort((a, b) => a.weaponName.toLowerCase().localeCompare(b.weaponName.toLowerCase()))
        setItems(sortedItems)
        if(userContext.user){
            getInventory()
            getItemsOnSell()
        }
    }, [userContext.user])

    return (
        <InventoryContext.Provider value={{     
            items,
            itemsInInventory,
            itemsOnSell,
            handleAddItem,
            handleRemoveItem,
            handleRemoveFromMarket,
            handleItemBought }}>
            {children}
        </InventoryContext.Provider>
    )

}