import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../Firebase/firebase.config'

export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({ children }) => {  
    const [user, setUser] = useState({});

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return signOut(auth)

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => unSubscribe();
    }, [])

    const authInfo = { user, providerLogin, setUser, logOut }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;