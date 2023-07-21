import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

// Auth Context
export const AuthContext = createContext(null);



// Auth
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');


    // Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    // Logout
    const logOut = () => {
        return signOut(auth)
    }

    // On state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
        })
        return () => {
            return unSubscribe();
        }
    }, [])


    const AuthInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        logOut
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;