import React, { createContext, useState, useEffect, useContext } from "react";




const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [idToken, setIdToken] = useState(null);



    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, idToken, setIdToken, }}>
            {children}
        </AuthContext.Provider> 
    )
}

export const useAuth = () => useContext(AuthContext);
