import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()

export function useThemeContext(){
    return useContext(ThemeContext)
}

export default function ThemeProvider({ children }){

    const [theme, setTheme] = useState("Dark")
    const [primaryColor, setPrimaryColor] = useState("#171717")
    const [secondaryColor, setSecondaryColor] = useState("#2b2b2b")
    const [decorColor, setDecorColor] = useState("#cfcfcf")
    const [highlightColor, setHighlightColor] = useState("#ffffff")

    function handleThemeChange(){
        setTheme(theme === "Dark" ? "Light" : "Dark")
        if(theme === "Dark"){
            setPrimaryColor("#e3e3e3");
            setSecondaryColor("#bababa");
            setDecorColor("#3d3d3d");
            setHighlightColor("#000000")
        }
        else{
            setPrimaryColor("#171717");
            setSecondaryColor("#2b2b2b");
            setDecorColor("#cfcfcf");
            setHighlightColor("#ffffff")
        }
    }

    return (
     <ThemeContext.Provider value={{
        handleThemeChange,
        primaryColor,
        secondaryColor,
        decorColor,
        highlightColor
     }}>
        {children}
     </ThemeContext.Provider>   
    )
}