import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);

// Auth
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const user = 'Rakib Mahmud';



    // Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const AuthInfo = { 
        user,
        createUser
     }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;