import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase.config';

// Auth Context
export const AuthContext = createContext(null);



// Auth
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const user = 'Rakib Mahmud';



    // Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const AuthInfo = {
        user,
        createUser,
        loginUser
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;