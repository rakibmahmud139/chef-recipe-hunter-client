import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../Firebase/Firebase.config';

// Auth Context
export const AuthContext = createContext(null);



// Auth
const auth = getAuth(app);
// Google provider 
const googleProvider = new GoogleAuthProvider;
// Github provider 
const githubProvider = new GithubAuthProvider;


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loader, setLoader] = useState(true);


    // Create User
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login
    const loginUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    // Logout
    const logOut = () => {
        setLoader(true);
        return signOut(auth)
    }


    // Sign in with google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }


    // Sign in with Github
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }



    // On state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            setLoader(false);
        })
        return () => {
            return unSubscribe();
        }
    }, [])


    const AuthInfo = {
        user,
        loader,
        setUser,
        createUser,
        loginUser,
        logOut,
        googleSignIn,
        githubSignIn
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;