import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);

    const location = useLocation();

    // Loader
    if (loader) {
        return <span className="loading loading-spinner text-secondary"></span>
    }

    if (!user) {

        return <Navigate state={{ from: location }} to='/login' replace />
    }
    return children;
};

export default PrivateRoute;