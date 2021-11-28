import { Row } from "./Row";
import { myContext } from "../hooks/useContext";
import { useState } from "react";


export const Table = () => {
    const [theme, setTheme] = useState('dark');

    const themeHandler = () => {
        setTheme((prevTheme) => prevTheme === 'dark' ? 'ligth' : 'dark')
    }

    return (<myContext.Provider value = {{
        info: 2,
        theme
    }}>
        <table style = {{border: '1px solid gray'}}>
            <Row/>
        </table>
        <button onClick={themeHandler}>Toggle Theme</button>
    </myContext.Provider>)
};