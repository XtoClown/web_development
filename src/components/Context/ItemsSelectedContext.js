import React, { useContext, useEffect, useState } from 'react'

const ItemsSelectedContext = React.createContext()

export function useItemsSelectedContext(){
    return useContext(ItemsSelectedContext)
}

export default function ItemsSelectedProvider({ children }){

    const [selected, setSelected] = useState(Array(Math.max(0, 13)).fill(null))
    const [summaryPrice, setSummaryPrice] = useState(0)
 
    function handleSelection(item){
        if(!selected.includes(item)){

            const currentSelect = [
                item,
                ...selected.filter((element) => element !== null)
            ]


            setSelected([
                ...currentSelect,
                ...Array(Math.max(0, 13 - currentSelect.length)).fill(null)
            ])
            setSummaryPrice(prev => (parseFloat(prev) + parseFloat(item.price)).toFixed(2))
        }
    }


    function handleDeselection(item){
        const currentSelect = [
            ...selected.filter(selectedItem => selectedItem !== item && selectedItem !== null)
        ]
        setSelected([
            ...currentSelect,
            ...Array(Math.max(0, 13 - currentSelect.length)).fill(null)
        ])
        setSummaryPrice(prev => (parseFloat(prev) - parseFloat(item.price)).toFixed(2))
    }

    function handleTransaction(){
        setSelected(Array(Math.max(0, 13)).fill(null))
        setSummaryPrice(0)
    }

    return (
        <ItemsSelectedContext.Provider value={{
            selected,
            handleSelection,
            handleDeselection,
            summaryPrice,
            handleTransaction
        }}>
            {children}
        </ItemsSelectedContext.Provider>
    )
}
