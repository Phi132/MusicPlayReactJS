import React, { useState, useEffect, useTheme } from "react";
import './App.css';
import Navigation from "./component/Navigation";
import styled, { ThemeProvider } from 'styled-components';
import { blackTheme, RoseTheme, IUxTheme, redTheme, GlobalStyles } from "./component/controlTheme/Theme";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,

} from "react-router-dom";
import AuthProvider from "./component/context/Auth";


const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme-color') || '');

    useEffect(() => {
        const currentThemeColor = localStorage.getItem('theme-color');
        if (currentThemeColor) {
            localStorage.setItem('theme-color', theme);
        }
    }, [])


    const conditionTheme = () => {
        if (theme === 'RoseTheme') {
            setTheme('RoseTheme')
            localStorage.setItem('theme-color', 'RoseTheme');
            return RoseTheme
        } else if (theme === 'IUxTheme' || theme === '') {
            localStorage.setItem('theme-color', 'IUxTheme');
            return IUxTheme
        } else if (theme === 'blackTheme' || theme === '') {
            localStorage.setItem('theme-color', 'blackTheme');
            return blackTheme
        } else if (theme === 'redTheme') {
            localStorage.setItem('theme-color', 'redTheme');
            return redTheme
        }
    }
    return (
        <>
            <ThemeProvider
                theme={conditionTheme}
            >
                <GlobalStyles />
                <AuthProvider>
                    <Navigation
                        theme={theme}
                        setTheme={setTheme}
                    />
                </AuthProvider>

            </ThemeProvider>


        </>

    );


}

export default App;
