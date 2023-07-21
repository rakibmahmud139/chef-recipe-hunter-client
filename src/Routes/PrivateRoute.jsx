import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    const location = useLocation();

    if (!user) {
        return <Navigate state={{ from: location }} to='/login' replace />
    }
    return children;
};

export default PrivateRoute;