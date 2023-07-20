import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);

// Auth
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const user = 'Rakib Mahmud';


    const AuthInfo = { user }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;