import { React, createContext, useContext, useState } from "react";


export const  LightDarkMode = createContext();

export const LightDarkModeProvider = (props) => {

    const [isLight, setIsLight] = useState(false);

    const toggleTheme = () => {
        setIsLight(!isLight)
    }

    return (
        <LightDarkMode.Provider value={{isLight, toggleTheme}}>
            {props.children}
        </LightDarkMode.Provider>
    )
}

export const useLightDarkMode = () => useContext(LightDarkMode);