import React, {createContext, useContext, useState} from 'react';

export const Auth = createContext();

const AuthProvider = ({children}) => {
    const [isAuthenticated, setisAuthenticationed] = useState(true)

    const toggleAuth = () => {
        setisAuthenticationed(!isAuthenticated)
    }

    //context data
    const authData = {
        isAuthenticated,
        toggleAuth
    }
    //
    return (
        <Auth.Provider value={authData}>
            {children}
        </Auth.Provider>
    )
}
export default AuthProvider;
