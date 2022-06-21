import React, { useState, useEffect } from "react";
import './App.css';
import Navigation from "./component/Navigation";
import { ThemeProvider } from 'styled-components';
import { blackTheme, RoseTheme, IUxTheme, redTheme, GlobalStyles } from "./component/controlTheme/Theme";

import AuthProvider from "./component/context/Auth";
import { useProviderContext } from "./utils/StateProvider";
import Login from "./component/Login/Login";



const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme-color') || '');

    const [{ currentPlaylistNoapi }] = useProviderContext();
    if (!JSON.parse(localStorage.getItem('IndexSongPlaying'))) {
        localStorage.setItem('IndexSongPlaying', 0);
    }
    if (!JSON.parse(localStorage.getItem('PlaylistSong'))) {
        localStorage.setItem('PlaylistSong', JSON.stringify(currentPlaylistNoapi));
    }

    useEffect(() => {
        const currentThemeColor = localStorage.getItem('theme-color');
        if (currentThemeColor) {
            localStorage.setItem('theme-color', theme);
        }
    }, [theme]);


    const conditionTheme = () => {
        if (theme === 'RoseTheme') {
            setTheme('RoseTheme')
            localStorage.setItem('theme-color', 'RoseTheme');
            return RoseTheme
        } else if (theme === 'IUxTheme') {
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

    //api
    // const code = new URLSearchParams(window.location.search).get('code');
    // if (code) {
    //     sessionStorage.setItem('code', (code));
    // }

    // const [{ testAccess , dispatch}] = useProviderContext();
    // useEffect(() => {

    //     console.log("testtt ", testAccess);
    // }, [testAccess])

    return (


        <>
            <ThemeProvider
                theme={conditionTheme}
            >
                <GlobalStyles />
                <AuthProvider>
                    {
                        localStorage.getItem('userName') ?

                            (
                                <Navigation
                                    // code={sessionStorage.getItem('code', (code))}
                                    theme={theme}
                                    setTheme={setTheme}
                                />
                            )
                            : <Login />
                    }

                </AuthProvider>

            </ThemeProvider>


        </>


    );


}

export default App;
