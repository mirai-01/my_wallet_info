// AuthContext.js

// Imports
import React, { useContext, useState, useEffect } from 'react';
import { auth } from "../Firesbase"


const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    // State Variables
    const [currentUser, setCurrentUser] = useState();

    // Signup Function
    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password);
    }

    // Auth State Changed
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })

        return unsubscribe;
    }, [])
    


    const value = {
        currentUser,
        signup
    }

    return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    );
}
